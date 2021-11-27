// получаем кнопки открытия формы
let buttonOpenForm1 = document.querySelector('.header__record');
let buttonOpenForm2 = document.querySelector('.bonus__record');

// получаем кнопку в форме
let buttonFormRecord = document.querySelector('.form__record_button');

// функция открытия и закрытия формы
function openCloseForm() {
  document
    .querySelector('.form__record')
    .classList.toggle('form__record_active');
}

// добавляем событие клик на кнопки открытия формы (открываем форму)
buttonOpenForm1.addEventListener('click', openCloseForm);
buttonOpenForm2.addEventListener('click', openCloseForm);

// добавляем событие клик на кнопку в форме (закрываем форму)
buttonFormRecord.addEventListener('click', openCloseForm);