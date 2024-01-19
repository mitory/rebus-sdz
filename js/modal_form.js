const form_modal = document.forms.back_call;
var openModalBtn = document.getElementById("openModalBtn");
var modal = document.getElementById("myModal");
var closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
    form_modal.reset();
});

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        form_modal.reset();
    }
});


form_modal.modal_form_tel.addEventListener("input", function (event) {
    setTimeout(function () {
        validateTel(form_modal.modal_form_tel)
    }, 0);
})
form_modal.modal_form_tel.addEventListener("paste", function (event) {
    setTimeout(function () {
        validateTel(form_modal.modal_form_tel);
    }, 0);
})

form_modal.addEventListener("submit", function (event) {
    event.preventDefault();
    if(!form_modal.modal_form_name.value || !form_modal.modal_form_tel.value ||
        !form_modal.modal_form_comfort_time.value){
        showPopup("Пожалуйста, заполните все поля")
    } else {
        console.log('Данные для отправки:')
        console.log(form_modal.modal_form_name.value)
        console.log(form_modal.modal_form_tel.value)
        console.log(form_modal.modal_form_comfort_time.value)
        showPopup("Ожидайте, мы с вами свяжемся")
        this.reset();
        modal.style.display = "none";
    }
})
