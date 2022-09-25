let data = [
  {
    content: '把冰箱發霉的檸檬拿去丟',
    done: false
  },
  {
    content: '打電話叫媽媽匯款給我',
    done: true
  },
  {
    content: '整理電腦資料',
    done: false
  },
  {
    content: '繳電費水費瓦斯費',
    done: true
  },
  {
    content: '刪訊息',
    done: false
  },
  {
    content: '約vicky禮拜三泡溫泉',
    done: false
  },
  {
    content: '約data禮拜四吃晚餐',
    done: false
  },
];

const list = document.querySelector('.list');

// 初始值
function renderData(){
  let str = '';
  data.forEach(function(item, index){
    let to_be_completed_html = `
    <li>
        <div class='checkbox' data-num=${index}></div>
        <h2 class="me-auto">${item.content}</h2>
        <img class="del" data-num=${index} src='https://hexschool.github.io/js-todo/assets/cancel.jpg'/>
    </li>
    `;
    let completed_html = `
    <li>
        <div class="checkbox done" >
            <div class="material-icons" data-num=${index}>done</div>
        </div>
        <h2 class="clear">${item.content}</h2>
        <img class="del" data-num=${index} src="https://hexschool.github.io/js-todo/assets/cancel.jpg"/>
    </li>
    `;
    if(item.done == false){
      str += to_be_completed_html;
    }else{
      str += completed_html;
    }
  });
  list.innerHTML = str;
}
renderData();
//toBeCompleteNum();

// 篩選器
const category = document.querySelector('.category');
const all = document.querySelector('.all');
const toBeComplete = document.querySelector('.to_be_completed');
const completed = document.querySelector('.completed');

category.addEventListener('click', function(e){
  let str = '';
  data.forEach(function(item, index){
    let to_be_completed_html = `
    <li>
        <div class='checkbox' data-num=${index}></div>
        <h2 class="me-auto">${item.content}</h2>
        <img class="del" data-num=${index} src='https://hexschool.github.io/js-todo/assets/cancel.jpg'/>
    </li>
    `;
    let completed_html = `
    <li>
        <div class="checkbox done" >
            <div class="material-icons" data-num=${index}>done</div>
        </div>
        <h2 class="clear">${item.content}</h2>
        <img class="del" data-num=${index} src="https://hexschool.github.io/js-todo/assets/cancel.jpg"/>
    </li>
    `;

    if(e.target.getAttribute('class') == 'all bb-1'){
      if(item.done == false){
        str += to_be_completed_html;
      }else{
        str += completed_html;
      }
    }else{
      if(
        e.target.getAttribute('class') == 'to_be_completed' || 
        (e.target.getAttribute('class') == 'to_be_completed bb-1' && item.done == false)
      ){
        str += completed_html;
      }else if(
        e.target.getAttribute('class') == 'completed' ||
        (e.target.getAttribute('class') == 'completed bb-1' && item.done == true)
      ){
        str += completed_html;
      }
    }
    MediaList.innerHTML = str;
  });
});

// 篩選底線
