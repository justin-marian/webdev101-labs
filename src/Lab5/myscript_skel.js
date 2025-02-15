const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
  
let message = document.querySelector('.msg');
let timer = document.querySelector('.timer');

document.getElementById("btn").addEventListener('click', () => {
  alert("gata ceva");
});

const webDate = new Date(2022, 10, 22, 21, 0, 0);

/**
 * Don't change
 * 
 * Retrieve the data from webDate
 */
let year = webDate.getFullYear();
let month = months[webDate.getMonth()];
let date = webDate.getDate();
let hours = webDate.getHours();
let weekday = weekDays[webDate.getDay()];

console.log(year);

/**
 * TODO 0 - Place the following line in the <h4/> having class = "msg":
 * 
 * > Web Classes end on <weekday>, <date> <month> <year> <hours>:00
 * 
 * >> Hint - you can use the <message> variable
 * 
 * --> How do you show not the name of the variable (e.g. date), but its value (e.g. 21)?
 */
let par = document.createElement("p");
 message.appendChild(par);
 par.innerHTML ="THE DATE IS: " + date + " HOUR: " + hours + " WEEK: " + weekday + " MONTH: " + month + " YEAR: " + year;

 /**
 * Get the total time in millis from webDate
 */
  const timeLeft = webDate.getTime();

/**
 * vals -> millis
 *    1s = 1000ms
 *    1m = 60s
 *    1hr = 60m
 *    1d = 24hr
 */
const MILLIS = 1000;

const oneDay = 24 * 60 * 60 * MILLIS;
const oneHour = 60 * 60 * MILLIS;
const oneMinute = 60 * MILLIS;

let items = document.querySelectorAll('.timer-fmt h4');

/**
 * Call the function to set the initial values
 */
getCountdownTime();

/**
 * TODO 1 - Use the function getCountdownTime()
 *          to update the time, i.e. days, hours, minutes, seconds
 * 
 * > Hints - t = the total remaining time in millis
 *         - you can compute each component (days, hours, ...) individually
 *         - you can use the variable items to iterate through the list of
 *           elements in .html that have to be modified
 */
function getCountdownTime() {
  let currTime = new Date().getTime();
  let t = timeLeft - currTime;
  /**
   * TODO - Update the time
  */
  var nr_days = Math.floor(t / oneDay);
  var nr_hours = Math.floor((t % oneDay) / oneHour);
  var nr_minutes = Math.floor((t % oneHour) / oneMinute);
  var nr_seconds = Math.floor((t % oneMinute) / MILLIS);

  document.getElementsByClassName('days')[0].innerHTML = nr_days;
  document.getElementsByClassName('hours')[0].innerHTML = nr_hours;
  document.getElementsByClassName('minutes')[0].innerHTML = nr_minutes;
  document.getElementsByClassName('seconds')[0].innerHTML = nr_seconds;
}

/**
 * TODO 2 - use setInterval(@params...) to call getCountdownTime()
 *          function and set the values for days, hours, minutes, seconds
 *          fields in .html
 * 
 * > Hint - how _often_ do you need to call it?
 */
 setInterval(getCountdownTime, 1000);
 
  