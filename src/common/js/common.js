/**
 * Created by ximiaomiao on 17/9/4.
 */
import axios from 'axios';
// 根据对象中的某个属性，排序
const compare = function (key) {
  return function (obj1, obj2) {
    if (obj1 && obj2) {
      var value1 = parseInt(obj1[key]), value2 = parseInt(obj2[key]);
      if (value1 > value2) {
        return 1;
      } else if (value1 < value2) {
        return -1;
      } else {
        return 0;
      }
    }
  }
};
// 用户监听日志
const monitor = function (uri, pageDesc, target, companyName) {
  axios.post('monitorV1', {
    uri: uri,
    pageDesc: pageDesc,
    target: target,
    companyName: companyName,
    hotwordName: ''
  }).then(function (res) {
  }).catch(function (error) {
    console.log(error);
  })
};

export {
  compare,
  monitor
};

