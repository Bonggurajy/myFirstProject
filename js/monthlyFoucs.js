//submit 시 form은 사라지고, 그 자리에 input된 title이 출력될 수 있게.
// 그리고 edit button, edit cancel button이 있고,edit button 클릭 시 form이 다시 생성되고, title은 잠시 숨김. form에서 수정된 input을 submit 시 title 내용 수정.




//variables//
const $monthlyTitleForm = document.querySelector('#monthlyTitleForm');
const $monthlyTitleInput = document.querySelector('#monthlyTitleForm input');
const $monthlyTitleHeader = document.querySelector('#monthlyTitleHeader');

let monthlyTitle ;

//로컬 스토리지에 저장된 데이터가 존재하면 form을 숨기고, 존재하지 않다면 입력받을 form 노출시키기
if(localStorage.getItem('monthlyTitle') === null) {
  $monthlyTitleForm.classList.remove('hidden');
}
else{
  monthlyTitle = localStorage.getItem('monthlyTitle');
  paintMonthlyTitle();
}




//functions//

//input값 기억하기
function onInputMonthlyTitle (event) {
  monthlyTitle = event.target.value;
}

//submit 시 form 숨기고 title 출력(paintMonthlyTitle함수 이용)하기
function handleSubmitMonthlyTitle (event) {
  event.preventDefault();
  $monthlyTitleForm.classList.add('hidden');
  localStorage.setItem('monthlyTitle', monthlyTitle);

  paintMonthlyTitle();
}

//화면에 Title 출력하기//
function paintMonthlyTitle() {
  const div = document.createElement('div');
  const span = document.createElement('span');
  span.innerText = monthlyTitle;
  const button = document.createElement('button');
  button.innerText = '💬';

  div.appendChild(span);
  div.appendChild(button);
  $monthlyTitleHeader.appendChild(div);
}




//Eventlisteners//
$monthlyTitleInput.addEventListener('input', onInputMonthlyTitle)
$monthlyTitleForm.addEventListener('submit', handleSubmitMonthlyTitle)
