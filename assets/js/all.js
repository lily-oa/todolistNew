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
    var to_be_completed_html = "\n    <li>\n        <div class='checkbox' data-num=".concat(index, "></div>\n        <h2 class=\"me-auto\">").concat(item.content, "</h2>\n        <img class=\"del\" data-num=").concat(index, " src='https://hexschool.github.io/js-todo/assets/cancel.jpg'/>\n    </li>\n    ");
    var completed_html = "\n    <li>\n        <div class=\"checkbox done\" >\n            <div class=\"material-icons\" data-num=".concat(index, ">done</div>\n        </div>\n        <h2 class=\"clear\">").concat(item.content, "</h2>\n        <img class=\"del\" data-num=").concat(index, " src=\"https://hexschool.github.io/js-todo/assets/cancel.jpg\"/>\n    </li>\n    ");

    if (item.done == false) {
      str += to_be_completed_html;
    } else {
      str += completed_html;
    }
  });
  list.innerHTML = str;
}

renderData();
toBeCompleteNum(); // 篩選器

var category = document.querySelector('.category');
var all = document.querySelector('.all');
var toBeComplete = document.querySelector('.to_be_completed');
var completed = document.querySelector('.completed');
category.addEventListener('click', function (e) {
  var str = '';
  data.forEach(function (item, index) {
    var to_be_completed_html = "\n    <li>\n        <div class='checkbox' data-num=".concat(index, "></div>\n        <h2 class=\"me-auto\">").concat(item.content, "</h2>\n        <img class=\"del\" data-num=").concat(index, " src='https://hexschool.github.io/js-todo/assets/cancel.jpg'/>\n    </li>\n    ");
    var completed_html = "\n    <li>\n        <div class=\"checkbox done\" >\n            <div class=\"material-icons\" data-num=".concat(index, ">done</div>\n        </div>\n        <h2 class=\"clear\">").concat(item.content, "</h2>\n        <img class=\"del\" data-num=").concat(index, " src=\"https://hexschool.github.io/js-todo/assets/cancel.jpg\"/>\n    </li>\n    ");

    if (e.target.getAttribute('class') == 'all bb-1') {
      if (item.done == false) {
        str += to_be_completed_html;
      } else {
        str += completed_html;
      }
    } else {
      if (e.target.getAttribute('class') == 'to_be_completed' || e.target.getAttribute('class') == 'to_be_completed bb-1' && item.done == false) {
        str += to_be_completed_html;
      } else if (e.target.getAttribute('class') == 'completed' || e.target.getAttribute('class') == 'completed bb-1' && item.done == true) {
        str += completed_html;
      }
    }

    list.innerHTML = str;
  });
}); // 篩選底線

$('.category>li').click(function () {
  $('li').removeClass('bb-1');
  $(this).addClass('bb-1');
});

function categoryLiBottom() {
  $('.category>li').removeClass('bb-1');
  $('.category>.all').addClass('bb-1');
} //新增代辦事項 


var addlist = document.querySelector('.top');
var txt = document.querySelector('.txt');
addlist.addEventListener('click', function (e) {
  if (e.target.nodeName !== 'P' || txt.value == '') {
    return;
  }

  categoryLiBottom();
  var obj = {};
  obj.content = txt.value;
  obj.done = false;
  data.push(obj);
  renderData();
  txt.value = '';
  toBeCompletedNum();
}); //刪除待辦事項
//待辦事項總數

function toBeCompleteNum() {
  var toBeCompletedNum = 0;
  data.forEach(function (item, index) {
    if (item.done == false) {
      toBeCompleteNum += 1;
    } // add .summaryHTML


    var summary = document.querySelector('.summary');
    var newSummaryHTML = '';
    newSummaryHTML = "\n    <li class=\"todoitems\">".concat(toBeCompletedNum, "\u500B\u5F85\u5B8C\u6210\u9805\u76EE</li>\n      <li class=\"clear\">\u6E05\u9664\u5DF2\u5B8C\u6210\u9805\u76EE</li>\n    ");
    summary.innerHTML = newSummaryHTML;
  });
}

;
//# sourceMappingURL=all.js.map
