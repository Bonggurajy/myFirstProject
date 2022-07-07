const $monthlyFocusInput = document.querySelector('#monthlyFocusInput');
const $monthlyFocusText = document.querySelector('#monthlyFocusText');
const $monthlyFocusForm = document.querySelector('#monthlyFocusForm');
const $monthlyFocusDelete = document.querySelector('#monthlyFocusDelete');
const $monthlyFocusInputErase = document.querySelector('#monthlyFocusInputErase');

$monthlyFocusText.innerText = localStorage.getItem('monthlyFocus');

//event Function
function onInputMonthlyFocus(event) {
	$monthlyFocusText.innerText = event.target.value;
}

function onClickMonthlyFocusErase() {
	$monthlyFocusInput.value = '';
}

function onSubmitMonthlyFocus(event) {
	event.preventDefault();
	localStorage.setItem('monthlyFocus', $monthlyFocusText.innerText)
	$monthlyFocusForm.classList.add('hidden')
	$monthlyFocusInputErase.classList.add('hidden');
	$monthlyFocusText.classList.remove('hidden')
	$monthlyFocusDelete.classList.remove('hidden');
}

function onClickMonthlyFocusDelete () {
	$monthlyFocusInput.value = '';
	localStorage.removeItem('monthlyFocus');
	$monthlyFocusText.classList.add('hidden')
	$monthlyFocusDelete.classList.add('hidden');
	$monthlyFocusForm.classList.remove('hidden');
	$monthlyFocusInputErase.classList.remove('hidden');

}

$monthlyFocusInput.addEventListener('input', onInputMonthlyFocus)
//hidden class 추가, 제거
if(localStorage.getItem('monthlyFocus') === null) {
	$monthlyFocusForm.classList.remove('hidden');
	$monthlyFocusInputErase.classList.remove('hidden');
}
else {
	$monthlyFocusForm.classList.add('hidden');
	$monthlyFocusInputErase.classList.add('hidden');
	$monthlyFocusText.classList.remove('hidden');
	$monthlyFocusDelete.classList.remove('hidden');
}


//localStorage 저장
$monthlyFocusForm.addEventListener('submit', onSubmitMonthlyFocus);

//입력 도중 초기화 기능 
$monthlyFocusInputErase.addEventListener('click', onClickMonthlyFocusErase);

//삭제하기 기능
$monthlyFocusDelete.addEventListener('click', onClickMonthlyFocusDelete);