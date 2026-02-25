const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const welcomeDiv = document.getElementById("welcome");
if (isMorning) {
    welcomeDiv.textContent = "Good morning!";
} else if (isAfternoon) {
    welcomeDiv.textContent = "Good afternoon!";
} else {
    welcomeDiv.textContent = "Good evening!";
}

localStorage.setItem("It's a secret to everybody.","This is my secret message!")

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

//next button 
document.querySelector('#next').addEventListener('click', () => {
    currentImage++
    showImages()
})

//previous button
document.querySelector('#prev').addEventListener('click', () => {
    currentImage--
    showImages()
})

//change every 5 sec
setInterval(() => {
    currentImage++
    showImages()
}, 5000)


const todoList = document.querySelector('.todo-list')
const input = document.querySelector('#new-todo') 
const button = document.querySelector('button')

// Get the list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || []

//function called renderTodos
const renderTodos = () => {
    todoList.innerHTML = ''
    todos.forEach(todo => {
        const li = document.createElement('li')
        li.textContent = todo.text
        todoList.append(li)
    })
}

//add item when button is clicked 
button.addEventListener('click', () => {
    if (input.value.trim() === '') return

    // Add a new item to the list
    todos.push({ text: input.value, completed: false })

// Save the list to local storage
localStorage.setItem('todo-list', JSON.stringify(todos))
input.value = ''

renderTodos();
})

renderTodos();
