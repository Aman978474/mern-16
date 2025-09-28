const addbtn = document.getElementById('addbtn')
const todos = document.getElementById('tasklist')
const delet = document.getElementById('d')
// const contain = document.getElementsByClassName('container')
addbtn.addEventListener('click', () => {
    const input = document.getElementById('inputtask')
    const list = document.createElement('li')
    const task = document.createElement('h3')
    const dlt = document.createElement('button')

    task.innerText = input.value
    dlt.innertext = 'delete'
    list.style.display = 'flex'
    list.style.display.justifycontent = 'space evenly'
    list.style.alignContent = 'center'
    list.style.backgroundColor = 'beige'
    list.style.padding = '2px'
    list.style.borderRadiusv = '3px'
    dlt.style.display = 'flex'
    dlt.style.justifyContent = 'space evenly'
    list.style.width = '25vw'
    list.appendChild(task)
    list.appendChild(dlt)
    todos.appendChild(list)
    input.value = ''
    dlt.addEventListener('click', () => {
        list.remove()
    })
    delet.addEventListener('click', () => {
        todos.remove()
    }
    )

})