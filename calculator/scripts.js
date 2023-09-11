let display = document.querySelector('.display');
let buttons =  document.querySelectorAll('.btns');
let deleteBtn = document.querySelector('.delete');
let clearAll = document.querySelector('.clear');
let calculate = document.querySelector('.equals');

deleteBtn.addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
})

clearAll.addEventListener('click', () => {
  display.value = "";
})

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    display.value += button.dataset.value;
  });
});

calculate.addEventListener('click', () => {
  display.value = eval(display.value);
})