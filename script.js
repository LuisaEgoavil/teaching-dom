//console.log('Hello, Im working')
//let myName = 'Lupita'

//target elements
//let myElem = document.getElementById ('title2')

//another way getElementsByClassName
//another way getElementByTag

//grab the html/text value
//myElem.innerHTML = "I updated it"

//ADD CLASSES
//myElem.setAttribute('class', 'myClass')
//myElem.classList.add('anotherclass')


//console.log(myElem)

//let maParagraphs = document.getElementsByClassName ('paragraph')

 //return just ONE matching element (QUERYSELECTOR)
  //let myElem = document.querySelector('.paragraph')
 //console.log(myElem)
 
 
 //TARGETING
 //class = .
 //id = #

 //let myElem = document.querySelector('.subtitle')//you can also use just h5 but without the dot
 //myElem.classList.add('anotherclass')
 //myElem.style.color = 'red' //STYLE 
 //myElem.style.fontSize = '24px' //FONTSIZE
 //myElem.classList.remove('subtitle) FOR REMOVE
 //console.log(myElem)

 //return ALL matching elementS (QUERYSELECTOR)
 //return something that look likea an array
 //you can do all arrays
 //let myElem = document.querySelectorAll('.paragraph')
 //myElem.forEach((singleParagraph) => {
     //console.log(singleParagraph.innerHTML) //innerHTML PARAMETER TO SEE THE TEXT IN HTML
 //})


 /*
 let myElem = document.querySelector('.products')
 console.log(myElem)
 console.log(myElem.innerHTML) //prints <h2 class="title2" id="products">Products</h2>
 console.log(myElem.innerText) //prints Products
*/

// EVENT LISTENERS
//we attach event listeners to a dom element
//click

//let title = document.querySelector('#title1')
//title.addEventListener('mouseover', function() {
  //  title.style.color = 'blue'
//})

//title.addEventListener('mouseover', function() {
  //  title.style.color = 'red'
//})

function handleButton() {
    //IT CONTAINS EVERYTHING FROM ABOVE, MEANING LET TITLE
    
    let incrementButton = document.querySelector('#increment')
    let decrementButton = document.querySelector('#decrement')
    let count = document.querySelector('span')//increment the count//or ('div span')

    incrementButton.addEventListener('click', function (event) {
      //count.innerText = Number(count.innerText) + 1 
      if (Number(count.innerText)  < 10) {
        count.innerText = Number(count.innerText) + 1 
      }
    })

    decrementButton.addEventListener('click', function () {
        if (Number(count.innerText) > 0) {
            count.innerText = Number(count.innerText) - 1 
          }
    })
}

window.addEventListener('load', () => {
    //handleTitle()
    handleButton()
})

functionhandleForn() {
    let form = document.querySelector('#myForm')
}