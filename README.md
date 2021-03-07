# daily-planner
A web app to plan daily activities throughout the week

# notes to be deleted later

eight divs will be made to hold each hour of the work day (9am-5pm)

syntax should look something roughly like this for our button click and setting local storage

```
btn.click( () => {
    let nameMain = document.getElementById('user-name').value;
    localStorage.setItem('name', nameMain)

    renderName();

    document.getElementById('user-name').value = ''
})

```
and then for getting local storage and printing text to it's area.

```
function renderName() {
    let userName = localStorage.getItem('name')
    nameSave.textContent = userName
}
```
naming system will be  ```nine-input, ten-input, eleven-input``` etc coralating with ```nine-save, ten-save, eleven-save``` etc. 
