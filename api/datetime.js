const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function formatDate(date) {
  const year = date.getFullYear();
  return DAYS_OF_WEEK[date.getDay()]+', '+MONTHS[date.getMonth()]+' '+date.getDate()+(new Date().getFullYear() == year ? '' : ', '+yearText);
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
