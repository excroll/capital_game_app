export const millisecondsToStr = (milliseconds) => {

  function numberEnding (number) {
      return (number > 1) ? 's' : '';
  }

  var temp = Math.floor(milliseconds / 1000);
  var years = Math.floor(temp / 31536000);
  if (years) {
      return years + ' годов' + numberEnding(years);
  }
  //TODO: Months! Maybe weeks? 
  var days = Math.floor((temp %= 31536000) / 86400);
  if (days) {
      return days + ' дней' + numberEnding(days);
  }
  var hours = Math.floor((temp %= 86400) / 3600);
  if (hours) {
      return hours + ' часов' + numberEnding(hours);
  }
  var minutes = Math.floor((temp %= 3600) / 60);
  if (minutes) {
      return minutes + ' минуты' + numberEnding(minutes);
  }
  var seconds = temp % 60;
  if (seconds) {
      return seconds + ' секунд' + numberEnding(seconds);
  }
  return 'нескольких секунд'; //'just now' //or other string you like;
}