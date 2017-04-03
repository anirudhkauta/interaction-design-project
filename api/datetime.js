const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function formatTime(date, showAmOrPm) {
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

  if (showAmOrPm == undefined || !showAmOrPm) amOrPm = '';
  return hours+':'+minutes+amOrPm;
}

export function formatDateRaw(date) {
  const year = date.getFullYear();
  return DAYS_OF_WEEK[date.getDay()]+', '+MONTHS[date.getMonth()]+' '+date.getDate()+(new Date().getFullYear() == year ? '' : ', '+year);
}

//Returns today, tomorrow, Thurdsay, 2/4/18, etc depending on date
export function formatDate(date) {
  let now = new Date();
  let daysSinceToday = getDayOffset(date, now);

  if (daysSinceToday == 0) {
    return 'Today';
  }else if (daysSinceToday == 1) {
    return 'Tomorrow';
  }else if (daysSinceToday < 7) {
    return DAYS_OF_WEEK[date.getDay()];
  }

  return formatDateRaw(date);
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

// returns an object with the fomatted start and end dates
// return {start: Date, end: Date}
export function formatDatetimeRange(startDate, endDate) {
  const hourDifference = (endDate.getTime() - startDate.getTime())/(60*60*1000);
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);
  const hasDifferentEnoughEndDate = formattedStartDate != formattedEndDate && hourDifference >= 12;
  const startTime = formatTime(startDate, hasDifferentEnoughEndDate);
  const endTime = formatTime(endDate, true);

  return startTime+' - '+endTime+(hasDifferentEnoughEndDate ? ' '+formattedEndDate : '');
}

// export function getEndDate(startTime, durationMinutes) {
//   let date = new Date(startTime);
//   date.setMinutes(startTime.getMinutes() + durationMinutes);
//   return date;
// }
