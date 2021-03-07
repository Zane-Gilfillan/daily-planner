
//display date up to the hour using DayJs. see readme for more information
const datePlace = document.querySelector('.date-holder')
const dayJsObject = dayjs();
datePlace.innerHTML = dayJsObject.format("DD//MMM//YYYY HH:mm")

