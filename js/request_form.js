const form_request = document.forms.request;


function validateTel(input){
	if (input.value.charAt(0) !== '8' && 
		((input.value.length >= 2 && input.value.substring(0, 2) !== '+7') || input.value.length === 1)) {
		if(input.value.charAt(0) === '+'){
			input.value = input.value.slice (1)
		}
		input.value = '+7' + input.value;
	}
	if(!/^[0-9+]+$/.test(input.value)) {
			input.value = '+7';
	}
}
form_request.tel.addEventListener("input", function (event) {
	setTimeout(function () {
		validateTel(form_request.tel)
	}, 0);
})
form_request.tel.addEventListener("paste", function (event) {
	setTimeout(function () {
		validateTel(form_request.tel);
	}, 0);
})

form_request.addEventListener("submit", function (event) {
	event.preventDefault();
	if(!form_request.name.value || !form_request.organization.value ||
		!form_request.email.value || !form_request.tel.value){
		showPopup("Пожалуйста, заполните всю контактную информацию")
	} else {
		console.log('Данные для отправки:')
		console.log(form_request.name.value)
		console.log(form_request.organization.value)
		console.log(form_request.email.value)
		console.log(form_request.tel.value)
		console.log(form_request.comment.value)
		showPopup("Ожидайте, мы с вами свяжемся")
		this.reset();
	}
})