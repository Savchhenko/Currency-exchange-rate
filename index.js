const API_URL = "http://api.exchangeratesapi.io/v1";
const BASE_RATE = "RUB";
const KEY = "54600a0860270799d8b51e72d718e6cd";

const now = new Date();
const nowYear = now.getFullYear();
let nowMonth = now.getMonth() + 1; // +1 because the month argument counts starting from zero
if(nowMonth < 10) {
  nowMonth = '0' + nowMonth;
}
const nowDay = now.getDate();
const currentDate = nowDay + '-' + nowMonth + '-' + nowYear;
console.log(currentDate);


const appDiv = document.querySelector('#app');
const currentDateElem = document.createElement("div");
const spanDateElem = document.createElement("span");
const newDiv = document.createElement("div");

appDiv.appendChild(currentDateElem);
currentDateElem.appendChild(spanDateElem);
appDiv.appendChild(newDiv);

spanDateElem.innerHTML = `Today is ${currentDate}`;


const btn = [0, 1, 2, 3, 4, 5, 6].map( (item) => `<button class="btn-${item}"></button>` );
newDiv.innerHTML = btn.join(' ');

const table = document.createElement("table");
appDiv.appendChild(table);

const btn0 = document.querySelector('.btn-0'),
      btn1 = document.querySelector('.btn-1'),
      btn2 = document.querySelector('.btn-2'),
      btn3 = document.querySelector('.btn-3'),
      btn4 = document.querySelector('.btn-4'),
      btn5 = document.querySelector('.btn-5'),
      btn6 = document.querySelector('.btn-6');
      
const buttons = [btn0, btn1, btn2, btn3, btn4, btn5, btn6];

for(let i = 0; i < buttons.length; i++) {
  let date = `${nowDay - i}-${nowMonth}-${nowYear}`;
  buttons[i].innerHTML = date;
}
      
const fn = (data) => {
  fetch(`${API_URL}/${data}?access_key=${KEY}&symbols=${BASE_RATE}`)
  .then( data => data.json())
  .then(console.log)
};

for(let i = 0; i < buttons.length; i++) {
  // const data = buttons[i].innerHTML;
  buttons[i].addEventListener('click', () => {
    fn(buttons[i].innerHTML.split('-').reverse().join('-'));
  })
}
