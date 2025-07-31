function daysOfAYear(year) {
  year = parseInt(year);
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 366;
  }
  return 365;
}

function checkDays() {
  const year = prompt("Enter a year");
  const days = daysOfAYear(year);
  alert(days.toString());
}

