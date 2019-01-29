"use strict";
const target = process.env.npm_lifecycle_event;
let hasStatistics = false; //统计代码是否开启
let baseUrl;
if (target.indexOf("test") != -1) {
  baseUrl = '"https://test.xiaomingkeji.com';
} else {
  baseUrl = '"https://api.yunhan100.com';
  hasStatistics = true;
}

module.exports = {
  NODE_ENV: '"production"',
  baseUrl: baseUrl,
  hasStatistics:hasStatistics
};
