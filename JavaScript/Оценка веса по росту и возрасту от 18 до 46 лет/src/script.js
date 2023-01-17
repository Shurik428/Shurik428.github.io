'use strict';

let userAge = prompt('Введите ваш возраст', '');
let userGrowth = prompt('Введите ваш рост в метрах', '');
let userWeight = prompt('Введите ваш вес в килограммах', '');
let imt = userWeight / (userGrowth * userGrowth);

if (userAge >= 18 && userAge <= 25) {

  switch (true) {

    case imt < 17.5:
      alert('Ваш вес недостаточен, опасно для здоровья!');
      break;

    case imt >= 17.5 && imt < 19.5:
      alert('Ваш вес слегка снижен, не опасно для здоровья');
      break;

    case imt >= 19.5 && imt < 23.0:
      alert('Ваш вес в норме');
      break;

    case imt >= 23.0 && imt < 27.5:
      alert('Ваш вес немного превышает норму!');
      break;

    case imt >= 27.5 && imt < 30.0:
      alert('У вас ожирение первой степени!');
      break;

    case imt >= 30.0 && imt < 35.0:
      alert('У вас ожирение второй степени!');
      break;

    case imt >= 35.0 && imt < 40.0:
      alert('У вас ожирение третьей степени!');
      break;

    case imt >= 40.0:
      alert('У вас ожирение четвёртой степени!');
      break;
  }
} else if (userAge >= 26 && userAge <= 46) {

  switch (true) {

    case imt < 18.0:
      alert('Ваш вес недостаточен, опасно для здоровья!');
      break;

    case imt >= 18.0 && imt < 20.0:
      alert('Ваш вес слегка снижен, не опасно для здоровья');
      break;

    case imt >= 20.0 && imt < 26.0:
      alert('Ваш вес в норме');
      break;

    case imt >= 26.0 && imt < 28.0:
      alert('Ваш вес немного превышает норму!');
      break;

    case imt >= 28.0 && imt < 31.0:
      alert('У вас ожирение первой степени!');
      break;

    case imt >= 31.0 && imt < 36.0:
      alert('У вас ожирение второй степени!');
      break;

    case imt >= 36.0 && imt < 41.0:
      alert('У вас ожирение третьей степени!');
      break;

    case imt >= 41.0:
      alert('У вас ожирение четвёртой степени!');
      break;
  }
} else {
  alert('Извините, нет данных для вашего возраста!');
}