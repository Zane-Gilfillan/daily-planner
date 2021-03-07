
//display date up to the hour using DayJs. see readme for more information
const datePlace = document.querySelector('.date-holder')
const dayJsObject = dayjs();
datePlace.innerHTML = dayJsObject.format("DD//MMM//YYYY HH:mm")

//main save functions
const nineSave = document.getElementById('nine-save')
const nineBtn = $('#nine-btn')

nineBtn.click( () => {
    let nineTask = document.getElementById('nine-input').value;
    localStorage.setItem('nine-am-task', nineTask)

    renderNineTask();
})

function renderNineTask() {
    let nineData = localStorage.getItem('nine-am-task')
    nineSave.textContent = nineData
}

renderNineTask();