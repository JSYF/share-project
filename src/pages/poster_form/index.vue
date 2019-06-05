<template>
  <div class="parent_form">
    <div class="page_title">{{title}}</div>
    <div class="form">
      <div class="form_item" v-if="showOptions.has_name == 1">
        <span class="title">姓名</span>
        <div class="form_component">
          <input type="text" v-model.lazy="formData.student_name" placeholder="输入姓名" maxlength="8">
        </div>
      </div>
      <div class="form_item" v-if="showOptions.has_mobile == 1">
        <span class="title">手机号</span>
        <div class="form_component">
          <input
            type="number"
            v-model.lazy="formData.phone"
            placeholder="输入手机号"
            maxlength="11"
            max="11"
          >
        </div>
      </div>
      <div class="form_item" v-if="showOptions.has_grade == 1">
        <span class="title">年级</span>
        <div class="form_component">
          <button @click="showAction('grade')">
            {{formData.grade[0] ? formData.grade[0].name : '选择年级'}}
            <img class="icon" src="../../../static/images/unfold.png">
          </button>
        </div>
      </div>
      <div class="subject_group" v-if="showOptions.has_subject == 1">
        <p class="title">选择科目</p>
        <div class="check_group">
          <div
            class="checkbox_item"
            @click="checkboxClick(item)"
            v-for="item in formOptions.subject"
            :key="item.id"
          >
            <div
              class="checkbox"
              :class="formData.subject.indexOf(item.id) !== -1 ? 'checkbox_active': ''"
            >
              <van-icon name="success"></van-icon>
            </div>
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
      <div class="form_item" v-if="showOptions.has_campus == 1">
        <span class="title">校区</span>
        <div class="form_component">
          <button @click="showAction('campus')">
            {{formData.campus[0] ? formData.campus[0].name : '选择校区'}}
            <img class="icon" src="../../../static/images/unfold.png">
          </button>
        </div>
      </div>
      <div class="form_item" v-if="showOptions.has_comment == 1">
        <span class="title">备注</span>
        <div class="form_component">
          <input type="text" v-model.lazy="formData.remark" placeholder="输入备注" maxlength="20">
        </div>
      </div>
    </div>
    <van-actionsheet v-model="show" :actions="actions" @select="onSelect"/>

    <div class="bottom" @click="submit">提交</div>
    <div class="poster" v-if="logo">
      <img :src="logo" />
    </div>
  </div>
</template>

<script>
import { getPosterForm, submitPosterForm } from "@/api/poster_form.js";
import Actionsheet from "vant/lib/actionsheet";
import Field from "vant/lib/field";
import Icon from "vant/lib/icon";
import "vant/lib/actionsheet/style";
import "vant/lib/icon/style";
export default {
  data() {
    return {
      show: false,
      logo: "",
      formData: {
        student_name: "",
        phone: "",
        remark: "",
        grade: [],
        subject: [],
        campus: []
			},
			showOptions: {
				has_campus: "0", // 校区
				has_comment: "0", // 备注
				has_grade: "0", // 年级
				has_mobile: "0", // 电话
				has_name: "0", // 姓名
				has_subject: "0" // 学科
      },
      formOptions: {
        grade: [],
        subject: [],
        campus: []
      },
      title: "",
      type: "",
      actions: []
    };
  },
  components: {
    "van-actionsheet": Actionsheet,
    "van-icon": Icon,
    "van-field": Field
  },
  created() {
    console.log(this.$route);
    this.form_id = this.$route.query.form_id;
    this.getPageData();
  },
  methods: {
    formValidate () {
      let err = ""
      let formData = Object.assign({}, this.formData)
      let formOptions = Object.assign({}, this.showOptions)
      if (!formData.student_name) {
        err = "请填写学生姓名"
      } else if (formData.phone.length !== 11) {
        err  = "请填写11位电话号码"
      } else if (formOptions.has_subject == 1 && !formData.subject.length) {
        err = "请选择科目"
      } else if (formOptions.has_campus == 1 && !formData.campus.length) {
        err = "请选择校区"
      } else if (formOptions.has_grade == 1 && !formData.grade.length) {
        err = "请选择年级"
      }
      if (err.length) {
        this.$toast.fail(err)
        return false
      } else {
        return true
      }
    },
    getPageData() {
      let id = this.form_id;
      getPosterForm({ id }).then(res => {
        console.log(res);
        let shareObj = {
          title: res.data.title,
          link: window.location.href,
          imgUrl: res.data.logo,
          desc: res.data.description
        }
        this.user_id = res.data.user_id
        this.title = res.data.title;
        this.logo = res.data.logo
        for (let key in this.formOptions) {
          this.formOptions[key] = res.data[key];
				}
				for (let key in this.showOptions) {
					this.showOptions[key] = res.data[key]
        }
        console.log("shareObj",shareObj)
        this.$sharePage(shareObj);
      });
    },
    submit() {
      if (!this.formValidate()) return
			let formData = this.formData;
			let grade = formData.grade[0] ? [formData.grade[0].id] : []
			let campus = formData.campus[0] ? [formData.campus[0].id] : []
			let subject = formData.subject.length ? formData.subject : []
      let params = {
        user_id: this.user_id,
        form_id: this.form_id,
        student_name: formData.student_name,
        phone: formData.phone,
        remark: formData.remark,
        grade: JSON.stringify(grade), 
        campus: JSON.stringify(campus),
        subject: JSON.stringify(formData.subject)
      };
      submitPosterForm(params)
        .then(res => {
          this.$toast.success("提交成功");
        })
        .catch(err => {
          console.log(err)
          this.$toast.fail("提交失败," + err);
        });
    },
    showAction(type) {
      this.type = type;
      this.actions = this.formOptions[type];
      this.show = true;
    },
    onSelect(data) {
      console.log(data);
      this.formData[this.type][0] = data;
      this.show = false;
    },
    checkboxClick(currentData) {
      console.log(currentData);
      let subjects = [...this.formData.subject];
      let index = subjects.indexOf(currentData.id);
      if (index !== -1) {
        subjects.splice(index, 1);
      } else {
        subjects.push(currentData.id);
      }
      this.formData.subject = subjects;
    }
  }
};
</script>

<style lang="stylus" scoped>
.parent_form {
  height 100vh
  border: 1px solid transparent;
  color: #333333;
  padding-bottom 130px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y auto;
  .page_title {
    font-size: 44px;
    font-weight: bold;
    color: #333333;
    padding: 20px 0 28px 40px;
    border-bottom: 2px solid #f6f6f6;
  }

  .bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    line-height: 100px;
    color: #fff;
    text-align: center;
    font-size: 32px;
    background-color: #333333;
  }

  .form {
    .subject_group {
      border-bottom: 2px solid #f6f6f6;
      padding: 30px 100px 28px 30px;

      .title {
        font-size: 28px;
        margin-bottom: 36px;
      }

      .check_group {
        display: flex;
        flex-wrap: wrap;

        .checkbox_item {
          display: flex;
          align-items: center;
          margin-right: 47px;
          margin-bottom: 30px;

          .checkbox {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f6f6f6;
            margin-right: 21px;
            border-radius: 4px;
            font-size: 30px;
            color: #999;
          }

          .checkbox_active {
            color: #fff;
            background-color: #333;
          }

          span {
            font-size: 28px;
          }
        }
      }
    }

    .checkbox_group {
      border-bottom: 2px solid #f6f6f6;
      font-family: PingFang-SC-Medium;
      font-size: 28px;
      color: #333333;
      padding: 30px 40px;
    }

    .form_item {
      padding: 0 40px;
      box-sizing: border-box;
      height: 100px;
      border-bottom: 2px solid #f6f6f6;
      display: flex;
      align-items: center;
      font-family: PingFang-SC-Medium;
      font-size: 28px;
      color: #333333;

      .title {
        flex: 1;
        text-align: left;
      }

      .form_component {
        flex: 1;
        text-align: right;

        input {
          text-align: right;
        }

        button {
          color: #999;
          padding 0
          .icon {
            width: 32px;
            height: 32px;
          }
        }
      }
    }
  }
  .poster{
    width: 100%;
    height: auto;
    img{
      width: 100%;
    }
  }
}
</style>