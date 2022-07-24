// Dom Manipulation


// event delegation
// Allows users to append a Single event listener to a parent element that adds it ato all of it present and future descendants that match a selector 


// single event delegation

// document.querySelector('#football').addEventListener('click', function (e) {
//     console.log('football is clicked');

//     const target = e.target;
//     if (target.matches('li')) {
//         target.style.backgroundColor = '#FFFFFF';
//     }
// });

// document.querySelector('#Basketball').addEventListener('click', function (e) {
//     console.log('basketball is clicked');

//     const target = e.target;
//     if (target.matches('li')) {
//         target.style.backgroundColor = '#FFFFFF';
//     }
// });
// document.querySelector('#boxing').addEventListener('click', function (e) {
//     console.log('boxing is clicked');

//     const target = e.target;
//     if (target.matches('li')) {
//         target.style.backgroundColor = '#FFFFFF';
//     }
// });
// document.querySelector('#tennis').addEventListener('click', function (e) {
//     console.log('tennis is clicked');

//     const target = e.target;
//     if (target.matches('li')) {
//         target.style.backgroundColor = '#FFFFFF';
//     }
// });

// to select multiple elements

// document.querySelector('#sports').addEventListener('click', function (e) {
//     console.log(e.target.getAttribute('id') + ' is clicked');
//     const target = e.target;
//     if (target.matches('li')) {
//         target.style.backgroundColor = '#F5F';
//     }
// });


// // add element to list-item'
// const sports = document.querySelector('#sports');
// const newSport = document.createElement('li');

// newSport.innerText = 'rugby';
// newSport.setAttribute('id', 'rugby');

// sports.appendChild(newSport);


// event probagation handlers
//event capturing
//target
// event bubbling 

// window.addEventListener('click', function () {
//     console.log('window');
// }, false);

// document.addEventListener('click', function () {
//     console.log('Document');
// }.false);

// document.querySelector(".div2").addEventListener("click", function () { console.log('DIV 2'); }, false);

// document.querySelector(".div1").addEventListener("click", function () { console.log('DIV 1'); }, false);

// document.querySelector("#button").addEventListener("click", function (e) {
//     e.preventDefault()
//     console.log(e.target.innerText = 'clicked');
// }, false);




//hide and reveal
// const revealBtn = document.querySelector('.reveal-btn');

// const hiddenContent = document.querySelector('.hidden-content');

// function revealContent() {
//     if (hiddenContent.classList.contains('reveal-btn')) {
//         hiddenContent.classList.remove('reveal-btn');
//     } else {
//         hiddenContent.classList.add('reveal-btn')
//     }
// }

// revealBtn.addEventListener('click', revealContent);








//event listener 

// element addEventListener (Click, function )

// const buttonTwo = document.querySelector('.btn-2');

// function alertBtn() {
//     alert('I also love js');

// };
// buttonTwo.addEventListener("click", alertBtn);



// ///mouse over 

// const newBackground = document.querySelector('.box-3');

// function changeBgColor() {
//     newBackground.style.backgroundColor = '#000000';
// };
// newBackground.addEventListener("mouseover", changeBgColor);




// let ul = document.querySelector('ul');
// // console.log(ul.childNodes);
// // console.log(ul.firstChild);
// // console.log(ul.lastChild);




// // ul.childNodes[1].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';

// const div = document.querySelector('div');

// console.log(div.childNodes);
// console.log(ul.previousElemenetSibling);
// console.log(ul.nextElementSibling);



// //get element by id
// const title = document.getElementById('main-heading');
// console.log(title);

// const listItem = document.getElementsByClassName('list-item');
// console.log(listItem);

// const li = document.getElementsByTagName('li');
// console.log(li);

// const container = document.querySelector('div');
// console.log(container);

// const allcontainer = document.querySelectorAll('div')
// console.log(allcontainer);

//Dom manipulation

// const title = document.querySelector('#main-heading');
// title.style.color = 'red';

// const listItem = document.querySelectorAll('.list-item');
// for (i = 0; i < listItem.length; i++) {
//     listItem[i].style.fontSize = "4rem";
// }

// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// // adding elements to list

// ul.append(li)

// // modifying text

// li.innerText = 'X-men';

// // Modifying Attributes & classes

// // li.classList.add('list-item');

// // console.log(li.classList.contains('list-item'));

// //remove elements from list

// li.remove();