'use strict'

if (localStorage.getItem('data1') === null){

localStorage.setItem('data1',JSON.stringify([]))


}
let arr = JSON.parse(localStorage.getItem('data1'))
let imageArr =[

'action.png',
'adventure.png',
'animation.png',
'comedy.png',
'detective.png',
'fantasy.png',
'history.png',
'horror.png',
'musical.png',
'pirate.png',
'romantic.png',
'sci-fi.png',
'war.png',
'western.png',

]

let Id = 0;
Id = JSON.parse(localStorage.data2)
let imgSrc = []
function Table (name,image,release){
    this.name=name
    this.image=image
    this.release=release
   arr.push(this)
}


Table.prototype.imageSorce =function(){

    for (let i =0 ;i<imageArr.length ;i++){
 imgSrc.push('./img/'+imageArr[i]) 
    }
}










let form = document.getElementById('submit')
form.addEventListener('submit',createTable)
function createTable(event){
    event.preventDefault()
    
    
    console.log('yyyy')
   
let newName = event.target.name.value
let newImage = event.target.image.value
let newRelease = event.target.release.value

new Table (newName,newImage,newRelease)
localStorage.data1 =JSON.stringify(arr)
createTable1 ();
Id = Id+1
localStorage.data2 = JSON.stringify(Id)
}

function createTable1 (){

let table = document.getElementById('table')
let createTable = document.createElement('table')
table.appendChild(createTable)

let row = document.createElement('tr')
createTable.appendChild(row)

let img = document.createElement('td')
row.appendChild(img)
img.textContent = arr[Id-1].image

let name = document.createElement('td')
row.appendChild(name)
name.textContent = arr[Id-1].name

let release = document.createElement('td')
row.appendChild(release)
release.textContent = arr[Id-1].release


}

keepTable ();
function keepTable (){


let ar = JSON.parse(localStorage.data1)
for (let i = 0 ; i<ar.length ; i++){


    let row = document.createElement('tr')
    createTable.appendChild(row)
    
    let img = document.createElement('td')
    row.appendChild(img)
    img.textContent = ar[i].image
    
    let name = document.createElement('td')
    row.appendChild(name)
    name.textContent = ar[i].name
    
    let release = document.createElement('td')
    row.appendChild(release)
    release.textContent = ar[i].release


}



}

document.addEventListener('click',removeTable)
function removeTable (event){
    localStorage.removeItem('data1');
location.reload();
}