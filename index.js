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

const appDiv = document.querySelector('#app');
const currentDateContainer = document.createElement("div");
const h2DateElem = document.createElement("h2");
const btnsContainer = document.createElement("div"); 
const ratesInfoContainer = document.createElement("div");

ratesInfoContainer.classList.add("info-container");
btnsContainer.classList.add("btns-container");

appDiv.appendChild(currentDateContainer);
currentDateContainer.appendChild(h2DateElem);
appDiv.appendChild(btnsContainer);
appDiv.appendChild(ratesInfoContainer);

h2DateElem.innerHTML = `Сегодня ${currentDate}`;


const btns = [0, 1, 2, 3, 4, 5, 6].map( (item) => `<button class="btn-${item}"></button>` );
btnsContainer.innerHTML = btns.join(' '); 

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

for (let i = 0; i < buttons.length; i++) {
  let date = `${nowDay - i}-${nowMonth}-${nowYear}`;
  buttons[i].innerHTML = date;
}
      
const fn = (data) => {
  fetch(`${API_URL}/${data}?access_key=${KEY}&symbols=${BASE_RATE}`)
  .then( data => data.json())
  .then(data => {
    console.log(data);
    displayRatesInfo(data);
  })
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    fn(buttons[i].innerHTML.split('-').reverse().join('-'));
  })
}

const displayRatesInfo = (data) => { 
  const spanRatesInfoElem = document.createElement("span");
  spanRatesInfoElem.classList.add("rate-info");
  ratesInfoContainer.appendChild(spanRatesInfoElem);

  const date = data.date.split('-').reverse().join('-');
  const base = data.base;
  const ratesRub = data.rates.RUB;
  spanRatesInfoElem.innerHTML = `<b>${date}</b> 1 ${base} = ${ratesRub} ${BASE_RATE}`;
}; 
