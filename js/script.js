/* 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый alt, левый ctrl, пробел, enter.

2. Добавьте на input событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.

3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.

4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре. 
*/

let key = document.querySelectorAll('.key'),
  input = document.querySelector('input'),
  out = document.querySelector('.out');

function showOut(event) {
  out.textContent = input.value;
}

input.onkeyup = (event) => {
  console.log(event.code)
  key.forEach((item) => {
    item.classList.remove('active');
    if (item.getAttribute('data-name') === event.code.toLowerCase()) {
      item.classList.add('active');
    }
  });

  showOut(event);
}
