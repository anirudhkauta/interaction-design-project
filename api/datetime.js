const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function formatDate(date) {
  const year = date.getFullYear();
  return DAYS_OF_WEEK[date.getDay()]+', '+MONTHS[date.getMonth()]+' '+date.getDate()+(new Date().getFullYear() == year ? '' : ', '+year);
}

export function formatTime(date) {
  let hours = date.getHours();
  let amOrPm;
  if (hours >= 12) {
    hours -= 12;
    amOrPm = ' PM';
  }else{
    amOrPm = ' AM';
  }
  if (hours == 0) {
    hours = 12;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = '0'+minutes;
  }
  return hours+':'+minutes+amOrPm;
}

//Returns today, tomorrow, Thurdsay, 2/4/18, etc depending on date
export function getDayDisplayHeader(date) {
  let now = new Date();
  let daysSinceToday = getDayOffset(date, now);

  if (daysSinceToday == 0) {
    return 'Today';
  }else if (daysSinceToday == 1) {
    return 'Tomorrow';
  }else if (daysSinceToday < 7) {
    return DAYS_OF_WEEK[date.getDay()];
  }

  return formatDate(date);
}

//Gets the difference between the morning two dates in days.
function getDayOffset(date1, date2) {
  //Copy dates
  date1 = new Date(date1.getTime());
  date2 = new Date(date2.getTime());
  //Begining of the day
  date1.setHours(0,0,0);
  date2.setHours(0,0,0);
  //Return difference
  return Math.round(Math.abs((date1.getTime() - date2.getTime())/(24*60*60*1000)));
}
