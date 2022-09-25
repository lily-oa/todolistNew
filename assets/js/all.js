"use strict";

var data = [{
  content: '把冰箱發霉的檸檬拿去丟',
  done: false
}, {
  content: '打電話叫媽媽匯款給我',
  done: true
}, {
  content: '整理電腦資料',
  done: false
}, {
  content: '繳電費水費瓦斯費',
  done: true
}, {
  content: '刪訊息',
  done: false
}, {
  content: '約vicky禮拜三泡溫泉',
  done: false
}, {
  content: '約data禮拜四吃晚餐',
  done: false
}];
var list = document.querySelector('.list'); // 初始值

function renderData() {
  var str = '';
  data.forEach(function (item, index) {
    var to_be_completed_html = "\n    <li>\n        <div class='checkbox' data-num=".concat(index, "></div>\n        <h2 class=\"clear me-auto\">").concat(item.content, "</h2>\n        <img class=\"del\" data-num=").concat(index, " src='https://hexschool.github.io/js-todo/assets/cancel.jpg'/>\n      </li>\n    ");
    var completed_html = "\n    <li>\n        <div class=\"checkbox done\" >\n            <div class=\"material-icons\" data-num=".concat(index, ">done</div>\n        </div>\n        <h2 class=\"clear\">").concat(item.content, "</h2>\n        <img class=\"del\" data-num=").concat(index, " src=\"https://hexschool.github.io/js-todo/assets/cancel.jpg\"/>\n    </li>\n    ");
  });
}
//# sourceMappingURL=all.js.map
