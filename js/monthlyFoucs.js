//submit 시 form은 사라지고, 그 자리에 input된 title이 출력될 수 있게.
// 그리고 edit button, edit cancel button이 있고,edit button 클릭 시 form이 다시 생성되고, title은 잠시 숨김. form에서 수정된 input을 submit 시 title 내용 수정.




//variables
const $monthlyTitleForm = document.querySelector('#monthlyTitleForm');
const $monthlyTitleInput = document.querySelector('#monthlyTitleForm input');
const $monthlyTitleHeader = document.querySelector('#monthlyTitleHeader');

let monthlyTitle ;

//functions
function onInputMonthlyTitle (event) {
  monthlyTitle = event.target.value;
}

function handleSubmitMonthlyTitle (event) {
  event.preventDefault();
  $monthlyTitleForm.classList.add('hidden');

  paintMonthlyTitle();
}

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




//Eventlisteners
$monthlyTitleInput.addEventListener('input', onInputMonthlyTitle)
$monthlyTitleForm.addEventListener('submit', handleSubmitMonthlyTitle)
