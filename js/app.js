const $monthlyFocus = document.querySelector('#monthlyFocus');
const $monthlyFocusText = document.querySelector('#monthlyFocusText');
const $monthlyFocusForm = document.querySelector('#monthlyFocusForm');

//event Function
function onInputMonthlyFocus(event) {
    $monthlyFocusText.innerText = event.target.value;
}

$monthlyFocus.addEventListener('input', onInputMonthlyFocus)

function onSubmitMonthlyFocus(event) {
    event.preventDefault();
    localStorage.setItem('monthlyFocus', $monthlyFocusText.innerText)
    $monthlyFocusForm.classList.add('hidden')
    $monthlyFocusText.classList.remove('hidden')
}
//hidden class 추가, 제거
if(localStorage.getItem('monthlyFocus') === null) {
    $monthlyFocusForm.classList.remove('hidden');
}



//localStorage 저장
$monthlyFocusForm.addEventListener('submit', onSubmitMonthlyFocus)

//새로고침 이슈 --> localStorage에 저장되어 있는 값을 불러오기

//삭제 버튼 & localStorage 저장 데이터 삭제