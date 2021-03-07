let btn = $('#button-one')
let btnTwo = $('#button-two')

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//hiding local storage practice for here now
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//input for names and email
let nameInput = document.getElementById('user-name')
let emailInput = document.getElementById('user-email')

//this is the area where the inputs will be saved
let nameSave = document.getElementById('name-save');
let emailSave = document.getElementById('email-save');


//this button creates and saves the name value to local storage
btn.click( () => {
    let nameMain = document.getElementById('user-name').value;
    localStorage.setItem('name', nameMain)

    renderName();

    document.getElementById('user-name').value = ''
})

//this button creats and saves the email value to local storage
btnTwo.click( () => {
    let emailMain = document.getElementById('user-email').value;
    localStorage.setItem('email', emailMain)

    renderEmail();
    document.getElementById('user-email').value = ''
})

//grabs local storage and sets it in the name-save id
function renderName() {
    let userName = localStorage.getItem('name')
    nameSave.textContent = userName
}

//grabs local storage and sets it in the email-save id
function renderEmail() {
    let userEmail = localStorage.getItem('email')

    emailSave.textContent = userEmail
}




renderName();
renderEmail();