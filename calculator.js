let calculation = '';

function result() {
  document.querySelector('.js-values').innerHTML = `${calculation}`;
}

const button = document.querySelectorAll('.js-button-pressed');

button.forEach(value => {
  value.addEventListener('click', () => {
    calculation += `${value.innerHTML}`;
    result();
  })
});

const keyboardButton = document.body;

keyboardButton.addEventListener('keydown', (event) => {
    if(event.key === '0' || event.key === '1' ||
    event.key === '2' || event.key === '3' ||
    event.key === '4' || event.key === '5' ||
    event.key === '6' || event.key === '7' ||
    event.key === '8' || event.key === '9' ||
    event.key === '+' || event.key === '-' ||
    event.key === '*' || event.key === '/' ||
    event.key === '.') {
      calculation += event.key;
      result();
    }
  });

document.querySelector('.js-result').addEventListener('click', () => {
  calculation = eval(calculation);
  result();
});

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
    calculation = eval(calculation);
    result();
  } else if(event.key === 'Delete') {
    calculation = '';
    result();
  }else if(event.key === 'Backspace') {
    calculation = calculation.slice(0,-1);
    result();
  }
});

document.querySelector('.js-clear-screen-button').addEventListener('click', () => {
  calculation = '';
  result();
});

document.querySelector('.js-clear-button').addEventListener('click', () => {
  calculation = calculation.slice(0,-1);
  result();
})