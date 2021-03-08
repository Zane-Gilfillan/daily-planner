
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
    
});


function renderNineTask() {
    let nineData = localStorage.getItem('nine-am-task')
    nineSave.textContent = nineData
    $('#nine-save').removeClass('hide')

}

renderNineTask();

//TEN AM FUNCTIONALITY
const tenSave = document.getElementById('ten-save')
const tenBtn = $('#ten-btn')

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

renderTenTask();

//ELEVEN AM FUNCTIONALITY
const elevenSave = document.getElementById('eleven-save')
const elevenBtn = $('#eleven-btn')

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

renderElevenTask();

//TWELVE PM FUNCTIONALITY
const twelveSave = document.getElementById('twelve-save')
const twelveBtn = $('#twelve-btn')

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

renderTwelveTask();

//ONE PM FUNCTIONALITY
const oneSave = document.getElementById('one-save')
const oneBtn = $('#one-btn')

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

renderOneTask();

//TWO PM FUNCTIONALITY
const twoSave = document.getElementById('two-save')
const twoBtn = $('#two-btn')

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

renderTwoTask();

//THRE PM FUNCTIONALITY
const threeSave = document.getElementById('three-save')
const threeBtn = $('#three-btn')

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

renderThreeTask();

//FOUR PM FUNCTIONALITY
const fourSave = document.getElementById('four-save')
const fourBtn = $('#four-btn')

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

renderFourTask();

//FIVE PM FUNCTIONALITY
const fiveSave = document.getElementById('five-save')
const fiveBtn = $('#five-btn')

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

renderFiveTask();