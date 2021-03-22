const now = new Date();
console.log(now);

const nowYear = now.getFullYear();
let nowMonth = now.getMonth();
if(nowMonth < 10) {
  nowMonth = '0' + nowMonth;
}
const nowDay = now.getDate();
const currentDate = nowYear + '-' + nowMonth + '-' + nowDay;
console.log(currentDate);


// Данный код уменьшает дату на 1 день 
// let date = new Date();
// date.setDate(date.getDate() - 1);


const appDiv = document.querySelector('#app');
const currentDateElem = document.createElement("div");
const spanDateElem = document.createElement("span");
const newDiv = document.createElement("div");

appDiv.appendChild(currentDateElem);
currentDateElem.appendChild(spanDateElem);
appDiv.appendChild(newDiv);

spanDateElem.innerHTML = `Today is ${nowDay}.${nowMonth}.${nowYear}`;
newDiv.setAttribute('id', 'newdiv')
newDiv.style.color = 'black';
newDiv.innerHTML = 'Hello';


const btn = [0, 1, 2, 3, 4, 5, 6].map( (item) => `<button class="btn-${item}"></button>` );
console.log(btn.join(''));
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

      
btn0.innerHTML = '2021-03-20';
btn1.innerHTML = '2021-03-19';
btn2.innerHTML = '2021-03-18';
btn3.innerHTML = '2021-03-17';
btn4.innerHTML = '2021-03-16';
btn5.innerHTML = '2021-03-15';
btn6.innerHTML = '2021-03-14';
      
const buttons = [btn0, btn1, btn2, btn3, btn4, btn5, btn6];
      
const fn = (data) => {
  fetch(`https://api.exchangeratesapi.io/${data}?base=RUB`)
  .then( data => data.json())
  .then(console.log)
};

for(let i = 0; i < buttons.length; i++) {
  // const data = buttons[i].innerHTML;
  buttons[i].addEventListener('click', () => {
    fn(buttons[i].innerHTML);
  })
}
