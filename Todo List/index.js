let inp1 = document.querySelector('#input1')
let inp2 = document.querySelector('#input2')
let lower = document.querySelector('.lower')
let btn = document.querySelector('button')

let data = []
window.onload = ()=>{
    data = JSON.parse(localStorage.getItem('data')) || []
    let item = data.map((e)=>{
        let item = `<div class="item">
                        <div class="left">
                            <input type="checkbox" name="" id="">
                            <div class="left-in">
                                <p class="title">${e.title}</p>
                                <p>${e.desc}</p>
                            </div>
                        </div>
                        <div class="right">
                            <i class="ri-delete-bin-5-fill"></i>
                        </div>
                    </div>`
        return item
    })
    lower.innerHTML = item.join('')
}

let i1 = ""
inp1.addEventListener('keyup',(e)=>{
    i1 = e.target.value
})
let i2 = ""
inp2.addEventListener('keyup',(e)=>{
    i2 = e.target.value
})
btn.addEventListener('click',(e)=>{
    data.push({title:i1,desc:i2})
    localStorage.setItem('data',JSON.stringify(data))
    let item =  data.map((e)=>{
        let item = `<div class="item">
                        <div class="left">
                            <input type="checkbox" name="" id="">
                            <div class="left-in">
                                <p class="title">${e.title}</p>
                                <p>${e.desc}</p>
                            </div>
                        </div>
                        <div class="right">
                            <i class="ri-delete-bin-5-fill"></i>
                        </div>
                    </div>`
        return item
    })
    lower.innerHTML = item.join('')
    inp1.value=""
    inp2.value=""
})  

