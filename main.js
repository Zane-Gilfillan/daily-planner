
//dayJS code. see readme for more information
const datePlace = document.querySelector('.date-holder')
const dayJsObject = dayjs();
datePlace.innerHTML = dayJsObject.format("DD//MMM//YYYY HH:mm")

//NINE AM FUNCTIONALITY
const nineSave = document.getElementById('nine-save')
const nineBtn = $('#nine-btn')
const nineDelete = $('#nine-delete')

nineBtn.click( () => {
    let nineTask = document.getElementById('nine-input').value;
    localStorage.setItem('nine-am-task', nineTask)
    renderNineTask();
});


function renderNineTask() {
    let nineData = localStorage.getItem('nine-am-task')
    nineSave.textContent = nineData
    $('#nine-save').removeClass('hide')
}

nineDelete.click( () => {
    let nineData = localStorage.getItem('nine-am-task')
    nineSave.textContent = ''
    localStorage.clear('nine-am-task')
})

renderNineTask();

//TEN AM FUNCTIONALITY
const tenSave = document.getElementById('ten-save')
const tenBtn = $('#ten-btn')
const tenDelete = $('#ten-delete')

tenBtn.click( () => {
    let tenTask = document.getElementById('ten-input').value;
    localStorage.setItem('ten-am-task', tenTask)

    renderTenTask();
});

function renderTenTask() {
    let tenData = localStorage.getItem('ten-am-task')
    tenSave.textContent = tenData
    $('#ten-save').removeClass('hide')
}

tenDelete.click( () => {
    let tenData = localStorage.getItem('ten-am-task')
    tenSave.textContent = ''
    localStorage.clear('ten-am-task')
})

renderTenTask();

//ELEVEN AM FUNCTIONALITY
const elevenSave = document.getElementById('eleven-save')
const elevenBtn = $('#eleven-btn')
const elevenDelete = $('#eleven-delete')

elevenBtn.click( () => {
    let elevenTask = document.getElementById('eleven-input').value;
    localStorage.setItem('eleven-am-task', elevenTask)

    renderElevenTask();
})

function renderElevenTask() {
    let elevenData = localStorage.getItem('eleven-am-task')
    elevenSave.textContent = elevenData
    $('#eleven-save').removeClass('hide')
}

elevenDelete.click( () => {
    let elevenData = localStorage.getItem('eleven-am-task')
    elevenSave.textContent = ''
    localStorage.clear('eleven-am-task')
})

renderElevenTask();

//TWELVE PM FUNCTIONALITY
const twelveSave = document.getElementById('twelve-save')
const twelveBtn = $('#twelve-btn')
const twelveDelete = $('#twelve-delete')

twelveBtn.click( () => {
    let twelveTask = document.getElementById('twelve-input').value;
    localStorage.setItem('twelve-pm-task', twelveTask)

    renderTwelveTask()
})

function renderTwelveTask() {
    let twelveData = localStorage.getItem('twelve-pm-task')
    twelveSave.textContent = twelveData
    $('#twelve-save').removeClass('hide')
}

twelveDelete.click( () => {
    let twelveData = localStorage.getItem('twelve-pm-task')
    twelveSave.textContent = ''
    localStorage.clear('twelve-pm-task')
})

renderTwelveTask();

//ONE PM FUNCTIONALITY
const oneSave = document.getElementById('one-save')
const oneBtn = $('#one-btn')
const oneDelete = $('#one-delete')

oneBtn.click( () => {
    let oneTask = document.getElementById('one-input').value;
    localStorage.setItem('one-pm-task', oneTask)

    renderOneTask()
})

function renderOneTask() {
    let oneData = localStorage.getItem('one-pm-task')
    oneSave.textContent = oneData
    $('#one-save').removeClass('hide')
}

oneDelete.click( () => {
    let oneData = localStorage.getItem('one-pm-task')
    oneSave.textContent = ''
    localStorage.clear('one-pm-task')
})

renderOneTask();

//TWO PM FUNCTIONALITY
const twoSave = document.getElementById('two-save')
const twoBtn = $('#two-btn')
const twoDelete = $('#two-delete')

twoBtn.click( () => {
    let twoTask = document.getElementById('two-input').value;
    localStorage.setItem('two-pm-task', twoTask)

    renderTwoTask();
})

function renderTwoTask() {
    let twoData = localStorage.getItem('two-pm-task')
    twoSave.textContent = twoData
    $('#two-save').removeClass('hide')
}

twoDelete.click( () => {
    let twoData = localStorage.getItem('two-pm-task')
    twoSave.textContent = ''
    localStorage.clear('two-pm-task')
})

renderTwoTask();

//THRE PM FUNCTIONALITY
const threeSave = document.getElementById('three-save')
const threeBtn = $('#three-btn')
const threeDelete = $('#three-delete')

threeBtn.click( () => {
    let threeTask = document.getElementById('three-input').value;
    localStorage.setItem('three-pm-task', threeTask)

    renderThreeTask();
})

function renderThreeTask() {
    let threeData = localStorage.getItem('three-pm-task')
    threeSave.textContent = threeData
    $('#three-save').removeClass('hide')
}

threeDelete.click( () => {
    let threeData = localStorage.getItem('three-pm-task')
    threeSave.textContent = ''
    localStorage.clear('three-pm-task')
})

renderThreeTask();

//FOUR PM FUNCTIONALITY
const fourSave = document.getElementById('four-save')
const fourBtn = $('#four-btn')
const fourDelete = $('#four-delete')

fourBtn.click( () => {
    let fourTask = document.getElementById('four-input').value;
    localStorage.setItem('four-pm-task', fourTask)

    renderFourTask()
})

function renderFourTask() {
    let fourData = localStorage.getItem('four-pm-task')
    fourSave.textContent = fourData
    $('#four-save').removeClass('hide')
}

fourDelete.click( () => {
    let fourData = localStorage.getItem('four-pm-task')
    fourSave.textContent = ''
    localStorage.clear('four-pm-task')
})

renderFourTask();

//FIVE PM FUNCTIONALITY
const fiveSave = document.getElementById('five-save')
const fiveBtn = $('#five-btn')
const fiveDelete = $('#five-delete')

fiveBtn.click( () => {
    let fiveTask = document.getElementById('five-input').value;
    localStorage.setItem('five-pm-task', fiveTask)

    renderFiveTask();
})

function renderFiveTask() {
    let fiveData = localStorage.getItem('five-pm-task')
    fiveSave.textContent = fiveData
    $('#five-save').removeClass('hide')
}

fiveDelete.click( () => {
    let fiveData = localStorage.getItem('five-pm-task')
    fiveSave.textContent = ''
    localStorage.clear('five-pm-task')
})

renderFiveTask();