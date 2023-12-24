let inp1 = document.querySelector('#input1')
let inp2 = document.querySelector('#input2')
let lower = document.querySelector('.lower')
let btn = document.querySelector('button')
// let checkbox = document.querySelector('#myCheck:checked') !== null
let checkbox = document.querySelector('#mycheck')


let data = []
window.onload = ()=>{
    lower.innerHTML = `Your Task's`
    data = JSON.parse(localStorage.getItem('data')) || []
    let item = data.map((e,i)=>{
        let item = `<div class="item">
                        <div class="left">
                            <input type="checkbox" name="" id="myCheck" >
                            <div class="left-in">
                                <p class="title">${e.title}</p>
                                <p>${e.desc}</p>
                            </div>
                        </div>
                        <div class="right">
                            <i class="fas fa-edit"></i>
                            <i class="ri-delete-bin-5-fill" onclick="deletee(${i})"></i>
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
    if(inp1.value=="" && inp2.value=="" && i1== "" && i2 == ""){
        alert("Please Enter the details")
    }    
    else{
        data.push({title:i1,desc:i2})
        localStorage.setItem('data',JSON.stringify(data))
        let item =  data.map((e,i)=>{
            let item = `<div class="item">
                            <div class="left">
                                <input type="checkbox" name="" id="">
                                <div class="left-in">
                                    <p class="title">${e.title}</p>
                                    <p>${e.desc}</p>
                                </div>
                            </div>
                            <div class="right">
                                <i class="ri-delete-bin-5-fill" onclick="deletee(${i})"></i>
                            </div>
                        </div>`
            return item
        })
        lower.innerHTML = item.join('')
    }
    inp1.value=""
    i1= ""
    inp2.value=""
    i2 = ""
})  

function deletee(i){
    data.splice(i,1)
    localStorage.setItem("data",JSON.stringify(data))
    let item =  data.map((e,i)=>{
        let item = `<div class="item">
                        <div class="left">
                            <input type="checkbox" name="" id="">
                            <div class="left-in">
                                <p class="title">${e.title}</p>
                                <p>${e.desc}</p>
                            </div>
                        </div>
                        <div class="right">
                            <i class="ri-delete-bin-5-fill" onclick="deletee(${i})"></i>
                        </div>
                    </div>`
        return item
    })
    lower.innerHTML = item.join('')
}

function myFunction() {
    var checkBox = document.getElementById("myCheck");
    // var text = document.getElementById("text");
    if (checkBox.checked == true){
      btn.style.margin = "50px";
    } else {
       btn.style.margin = "2px";
    }
  }