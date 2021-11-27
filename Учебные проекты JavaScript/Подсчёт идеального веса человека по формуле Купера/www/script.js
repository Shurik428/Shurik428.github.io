let userGender = prompt('Укажите ваш пол (поставьте М или Ж)');
let userGrowth = prompt('Укажите ваш рост в сантиметрах');
let idealWeight;

if (userGender === 'М' || userGender === 'м') {
  idealWeight = ((4 * userGrowth) / 2.54 - 128) * 0.453;
  alert('Ваш идеальный вес ' + Math.round(idealWeight) + ' кг.');
} else if (userGender === 'Ж' || userGender === 'ж') {
  idealWeight = ((3.5 * userGrowth) / 2.54 - 108) * 0.453;
  alert('Ваш идеальный вес ' + Math.round(idealWeight) + ' кг.');
}