let container = document.querySelector('.container')
// let orderList = document.querySelector('.ordlist')
let table = document.querySelector('.table')
let tbody = document.querySelector('.body')
// let td = document.querySelector('#1')


fetch('https://restcountries.com/v2/all')
.then((data)=>{
    return data.json()
})
.then((data1)=>{
    console.log(data1)
    let userData = data1
    
    let tableData = ""
    // let a =""
    userData.map((values)=>{
        let langes = values.languages.map((L)=>{
            return L.name
        })
        tableData+=`<tr>
                    <td>${values.name}</td>
                    <td>${values.capital}</td>
                    <td>${langes.toString()}</td>
                    <td>${values.population}</td>        
                    </tr>`

        // a += `<p>${values.population}</p>`
        // console.log(values.population)
        // let i= [values.areas]
        // let a = i
        // c
        // a.sort((a,b)=>b-a)
        // let q =a.slice(0,10)
        // console.log(q)
        // console.log(Math.max(a))

        // function area(){
        //     let d = [values.area]
        //     d.sort((a,b)=>b - a),d[0]
        //     console.log(d)
        // }
        // area()
        

        // function large(w){
        //     // return console.log(w.reduce((lar,curn)=>(curn>lar?curn:lar),w[0]))
        // }
        // large(a)
        })
        tbody.innerHTML=tableData
        // container.innerHTML+=a

        // console.log(userData.filter(val => val.population < 	144104080))
    userData.map(element => {
        // let listval = document.createElement('li')
        let langs = element.languages.map((l)=>{
            return l.name
        })
        // let languages = element.languages
        
        // let name = element.name
        // let capital = element.capital
        // let lang = langs.toString()
        // let population = element.population
        
        // for(var i=0;i<name;i++){
        //     tbody += `<tr><td>`+name[i]+`</td></tr> <tr><td>${name}</td></tr>`
        // }
        
        // tbody.innerHTML = `<tr>${element}</tr>`
        // tbody.innerHTML = `
        //                     <td id="1">${element.name}</td>
        //                     <td id="2">${element.capital}</td>
        //                     <td id="3">${langs.toString()}</td>
        //                     <td id="4">${element.population}</td>`
        
        
        
                            // `${element.name}
                            // ${element.capital}
                            // ${langs.toString()}
                            // ${element.population}`
        
        // orderList.appendChild(listval)
        table.appendChild(tbody)

        // td.innerHTML = `<td>${element.name}</td>`
        // for(var i = 0 ; i < userData.length ; i++){
        //     tbody += `<tr><td id="1">${element.name}</td>
        //     <td id="2">${element.capital}</td>
        //     <td id="3">${langs.toString()}</td>
        //     <td id="4">${element.population}</td></tr>`
        // }
    });
    
    // var table = document.createElement("table")
    // table.setAttribute("id","myTable")
    // document.body.appendChild(table)

    // var y = document.createElement("tr")
    // y.setAttribute("id","myTR")
    // document.getElementById("myTable").appendChild(y)

    // var z = document.createAttribute("td")
    // z.
})



//
// apicall('ht....',(data)=>{
//     console.log(data.users)
//     let dataUser = data.users
//     console.log(dataUser[0])
// })

// dataUser.map((users)=>{
//     apicall(`htpp.../$dataUser.users`,())
// })


// Table navigation in js by harry
// let t = document.body.firstElementChild.firstElementChild
// console.log(t)
// console.log(t.rows)
