const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
// console.log(items)

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate()
// let futureDate = new Date(2022, 11, 6, 18, 26, 0);
const futureDate = new Date(tempYear,tempMonth,tempDay + 10,11,30,0);
// console.log(futureDate)
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
let day = futureDate.getDay();
day = weekdays[day];
const date = futureDate.getDate();

giveaway.textContent = `Giveaway ends on ${day},${date} ${month} ${year} ${hours}:${mins}am`;

const futuretime = futureDate.getTime();

// console.log('futuretime',futuretime)

function getRemainingTime() {
  const today = new Date().getTime();
  // console.log('futuretime',today)

  const t = futuretime - today;

  const oneday = 24 * 60 * 60 * 1000;
  const onehour = 60 * 60 * 1000;
  const oneminute = 60 * 1000;
  let days = Math.floor(t / oneday);
  let hours = Math.floor((t % oneday) / onehour);
  let minutes = Math.floor((t % onehour) / oneminute);
  let seconds = Math.floor((t % oneminute) / 1000);

  const values = [days, hours, minutes, seconds];
  console.log(values);

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    console.log(item);
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class='expired'>Sorry,this givwaway has expired</h4>`;
  }
}

let countDown = setInterval(getRemainingTime, 1000);
getRemainingTime();
