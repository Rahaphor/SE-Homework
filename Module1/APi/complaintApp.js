
async function getData(borough) {
    let response = await $.ajax({
        
        url: `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=${borough}&agency=NYPD`,
        type: "GET",
        data: {
        
        "$limit" : document.getElementById("input").value,
        //Token to get data
        "$$app_token" : "6jjjbNoG7hvlHuI0MeH8NvIfY"
        }
    }).done(function(data){
        let output = "";
        
        data.forEach(post => {
            
            output += `
            <p>${post.descriptor}</p>
            <button onclick="description()" value="MANHATTAN">Response</button>
            <p id="desP" class="hide">${post.resolution_description}</p>
            `
        });
        
        document.getElementById("div").innerHTML = output
    }) 
    

    return response  
}

function description() {
    let des = document.getElementById("desP")
    if (des.className == "hide") {
        des.className = "show";
    } else if (des.className == "show") {
        des.className = "hide";
    }
}







// let limit = 10;
// function getData() {
    
//     var borough = event.target.innerHTML.toUpperCase()
//     fetch("https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=" + borough + "&$limit=" + limit)
//         .then((dataset) => dataset.json())
//         .then((formatteddata) => displayData(formatteddata))//run displaydata function


// }

// function displayData (data){
    
//     console.log(data)

//     let result = document.getElementById('result')
//     for(x in data){
//         //let response = document.createElement('div')
//         let response1 = document.createElement('p')
//         let response2 = document.createElement('p')
//         let submit = document.createElement('button')
//         let click = document.createAttribute('onclick')
//         click.value= 'mybutton()'
//         submit.innerHTML= 'check'
//         response1.innerHTML=data[x].descriptor
//         response2.innerHTML=data[x].resolution_description
//         result.append(response1)
//         result.append(submit)
//         result.append(response2)
//         console.log(data[x])
//     }

// }

// function removenodes(){
    
//     let result = document.getElementById('result')
//     let child = result.childNodes
    
//    for(let i = 0; i < child.length; i++){
//        if(result.childNodes)
//         child[i].remove()
        
//     }
        


// }


// function show(){
//     x = event.target.previousSibling
//     if(x.hidden == true){

//         x.hidden = false
//     }
//     else {
//         x.hidden =true;
//     }
//     console.log(x)

// }





















