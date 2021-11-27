let login = prompt('Введите логин');
let password = prompt('Введите пароль');

switch (true) {
  case login === 'Петя' && password === '11111':
    alert('Добро пожаловать Петя!');
    break;
  case login === 'Ваня' && password === '22222':
    alert('Добро пожаловать Ваня!');
    break;
  case login === 'Саша' && password === '33333':
    alert('Добро пожаловать Саша!');
    break;
  case login === 'Дима' && password === '44444':
    alert('Добро пожаловать Дима!');
    break;
  case login === 'Админ' && password === '12345':
    alert('Приветствуем Вас администратор! Вы можете редактировать сайт!');
    break;
  default:
    alert('Ваш логин или пароль неправильны!');
}