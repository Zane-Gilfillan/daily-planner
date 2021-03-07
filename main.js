
//dayJS code. see readme for more information
const datePlace = document.querySelector('.date-holder')
const dayJsObject = dayjs();
datePlace.innerHTML = dayJsObject.format("DD//MMM//YYYY HH:mm")

//NINE AM FUNCTIONALITY
const nineSave = document.getElementById('nine-save')
const nineBtn = $('#nine-btn')

nineBtn.click( () => {
    let nineTask = document.getElementById('nine-input').value;
    localStorage.setItem('nine-am-task', nineTask)

    renderNineTask();
    $('#nine-save').removeClass('hide')
});

function renderNineTask() {
    let nineData = localStorage.getItem('nine-am-task')
    nineSave.textContent = nineData
    
    //need to work on logic for hiding text areas that are blank
    if($('#nine-save').textContent !== "") {
         $('#nine-save').removeClass('hide')
    } 
}
renderNineTask();

//TEN AM FUNCTIONALITY
const tenSave = document.getElementById('ten-save')
const tenBtn = $('#ten-btn')

tenBtn.click( () => {
    let tenTask = document.getElementById('ten-input').value;
    localStorage.setItem('ten-am-task', tenTask)

    renderTenTask();
    $('#ten-save').removeClass('hide')
});

function renderTenTask() {
    let tenData = localStorage.getItem('ten-am-task')
    tenSave.textContent = tenData

    if($('#ten-save').value == "") {
         $('#ten-save').addClass('hide')
     } else {
         $('#ten-save').removeClass('hide')
    }
}
renderTenTask();
