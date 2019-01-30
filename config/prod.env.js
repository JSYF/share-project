"use strict";
const target = process.env.npm_lifecycle_event;
let hasStatistics = false; //统计代码是否开启
let baseUrl;
if (target.indexOf("test") != -1) {
  baseUrl = '"http://test.xiaomingkeji.com/api/index.php?r="';
} else {
  baseUrl = '"https://api.yunhan100.com/api/index.php?r="';
  hasStatistics = true;
}

module.exports = {
  NODE_ENV: '"production"',
  baseUrl: baseUrl,
  hasStatistics:hasStatistics
};
