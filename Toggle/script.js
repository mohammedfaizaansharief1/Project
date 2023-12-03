let toggle = document.querySelector('.toggle')
let text = document.querySelector('.text')
let newtext = document.querySelector('.text1')
let button = document.querySelector('#button')

function animateToggle(){
    toggle.classList.toggle("active")

    if(toggle.classList.contains("active")){
        text.innerHTML = "ON";
        text.style.color = "white"
        newtext.style.color = "white" 
        document.body.style.backgroundColor = "black"
        button.style.backgroundColor = "white"
        button.style.color = "black"
    }
    else{
        text.innerHTML= "OFF"
        text.style.color = "black"
        newtext.style.color = "black" 
        document.body.style.backgroundColor = "white"
        button.style.backgroundColor = "black"
        button.style.color = "white"
    }
}