// const itemForm = document.getElementById('item-form');
// const itemInput = document.getElementById('item-input');
// const itemList = document.getElementById('item-list');

// // Create addItem function

// function addItem(e){
//     e.preventDefault();

//     const newItem = itemInput.value;

//     if(newItem === ' '){
//         alert('please add an item');
//         return;
//     }
// }

// // creating list item

// const li = document.createElement('li');
// li.appendChild(document.createTextNode(newItem));

// const button = createButton('remove-item btn-link text-red');
// li.appendChild(button);

// itemList.appendChild(li);  

// itemInput.value = '';


// function createButton(classes){
//     const button = document.createElement('button');
//     button.className = classes;
//     const icon = createIcon('fa-solid fa-xmark');
//     button.appendChild(icon);
//     return button;
// }
// function createIcon(classes){
//     const icon = document.createElement('i');
//     icon.className = classes;
//     return icon;
// }

// itemForm.addEventListener('submit',addItem)



















// // const clearBtn = document.querySelector('.btn-clear');

// // // Possible way of event lister but not recomended
// // clearBtn.onclick = function () {
// //     console.log('clear items')
// // }



// // //Event Listner Best Method


// // clearBtn.addEventListener('click', () => alert('items cleared.'));


// // Mouse Events

// // 1.click

// // const logo = document.querySelector('.image');

// // function OnClick(){
// //     alert('Welcome To Home Page')
// // }

// // function OnDoubleClick(){
// //     if(document.style.backgroundColor !== 'black'){
// //         document.body.style.backgroundColor = 'black';
// //         document.body.style.color = 'white';
// //         // alert('Black Is a good Absorbant')
// //     }else{
// //         document.body.style.backgroundColor = 'white';
// //         document.body.style.color = 'black';
// //         // alert('White a universal neutral color')
// //     }
    
// // }

// // function OnClick() {
// //     if (document.body.style.backgroundColor !== 'black') {
// //         document.body.style.backgroundColor = 'black';
// //         document.body.style.color = 'white';
// //         // alert('Black is a good absorbent');
// //     } else {
// //         document.body.style.backgroundColor = 'white';
// //         document.body.style.color = 'black';
// //         // alert('White is a universal neutral color');
// //     }
// // }

// // function OnRightClick(){
// //     console.log('OnRightClick Apllied.');
// // }

// // function OnmouseDown(){
// //     console.log('Mouse down');
// // }

// // function OnmouseUp(){
// //     console.log('Mouse Up')
// // }


// // function Onwheel(){
// //     console.log('Mouse Wheel');
// // }


// // function OnMouseOver(){
// //     console.log('Mouse Over');
// // }

// // function OnMouseOut(){
// //     console.log('Mouse Out');
// // }

// // logo.addEventListener('mouseover',OnMouseOver)
// // logo.addEventListener('mouseout',OnMouseOut)

// // logo.addEventListener('wheel',Onwheel)
// // logo.addEventListener('mousedown',OnmouseDown);
// // logo.addEventListener('mouseup',OnmouseUp)
// // logo.addEventListener('contextmenu',OnRightClick);
// // // logo.addEventListener('click', OnClick);


// // Keyboard Events

// // 1. keypress

// // const itemInput = document.getElementById('item-form');


// // function onKeypress(e){
// //     console.log(e.key)
// // }


// // function onKeyUp(e){
// //     console.log('key Up.')
// // }

// // function onKeyDown(e){
// //     console.log('key down.')
// // }

// // itemInput.addEventListener('keypress',onKeypress)
// // // itemInput.addEventListener('keyup',onKeyUp)
// // itemInput.addEventListener('keydown',onKeyDown)

// // INPUT EVENTS 

// // input even is fired  when user interact with input field

// // const inputItems = document.getElementById('item-input');
// // const heading = document.querySelector('h1');

// // function onInput(e){
// //     heading.textContent = e.target.value;
// // }

// // heading.addEventListener('input',onInput);
// // inputItems.addEventListener('input',onInput)

// // Form Sumission

// // 1. By tagrget.value

// // const form = document.getElementById('item-form');
// // const heading = document.querySelector('h1');

// // 1. By tagrget.value
// // function onSubmit(e){
// //     e.preventDefault();
// //     const item = document.getElementById('item-input').value;
// //     console.log(item);
// // }

// //  2. By Using FormData Method

// // function onSubmit(e){
// //     e.preventDefault();

// //     const formdata = new FormData(form);
// //     const item = formdata.get('item');
// //     // item should also be given in name in form to access through it by get method
// //     heading.textContent = 'item'
// // }

// // By Using entries() method

// // function onSubmit(e){
// //     e.preventDefault();

// //     const formdata = new FormData(form);

// //     const entries =  formdata.entries();

// //     // console.log(entries)

// //     for (let entry of entries){
// //         console.log(entry[0]); // it gives the title  of the item
// //         console.log(entry[1]); // it gives the value of the item
// //     }
// // }



// // form.addEventListener('submit', onSubmit)


// // const itemFirst = document.querySelector('h1');

// // itemFirst.addEventListener('mouseover', (e) =>{itemFirst.style.color = 'blue'
// // }
// //  );



// // // Get the form and input elements
// // const itemForm = document.getElementById('item-form');
// // const itemInput = document.getElementById('item-input');
// // const itemList = document.getElementById('item-list');

// // // Event listener for form submission
// // itemForm.addEventListener('submit', function (e) {
// //   e.preventDefault(); // Prevent the default form submission

// //   // Get the value from the input field
// //   const newItem = itemInput.value.trim();

// //   // Check if the input is not empty
// //   if (newItem !== '') {
// //     // Create a new list item
// //     const li = document.createElement('li');
// //     li.textContent = newItem;

// //     // Create the remove button
// //     const removeBtn = document.createElement('button');
// //     removeBtn.classList.add('remove-item', 'btn-link', 'text-red');
// //     removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
// //     removeBtn.addEventListener('click', function () {
// //       li.remove(); // Remove the item when the button is clicked
// //     });

// //     // Append the button to the list item
// //     li.appendChild(removeBtn);

// //     // Append the new list item to the item list
// //     itemList.appendChild(li);

// //     // Clear the input field
// //     itemInput.value = '';
// //   }
// // });


// // const xMark = document.querySelector('fa-xmark');
// // const listItems = document.querySelector('li');



// // xMark.addEventListener('click', function(e){
// //     const listItem = e.target.closest('li'); // Find the closest li to the clicked button
// //     listItems.remove();
// // })


// // Select all the remove buttons
// // const xMarks = document.querySelectorAll('.remove-item');
// // // Loop through all the buttons and add event listeners to each
// // xMarks.forEach(xMark => {
// //   xMark.addEventListener('click', function (e) {
// //     // Get the parent list item and remove it
// //     const listItem = e.target.closest('li'); // Find the closest li to the clicked button
// //     listItem.remove();
// //   });
// // });


// // const clearAll = document.querySelector('btn-clear');


// // clearAll.addEventListener('click', function(e){
// //     // Select all list items inside the 'ul'
// //     const listItems = document.querySelectorAll('#item-list li');

// //     // Loop through each item and remove it
// //     listItems.forEach(item => item.remove());
// // });

// // Select the 'Clear All' button
// // const clearAll = document.querySelector('.btn-clear');

// // // Add click event listener
// // clearAll.addEventListener('click', function(e) {
// //     // Select all list items inside the 'ul'
// //     const listItems = document.querySelectorAll('#item-list li');

// //     // Loop through each item and remove it
// //     listItems.forEach(item => item.remove());
// // });

// // const listItems = document.querySelector('ul');


// // const list= document.querySelectorAll('ul');
// // list.add
// // listItems.forEach((item)=>{
// //     item.addEventListener('click',(e) => {
// //         e.target.remove();
// //     });
// // }
// // );

// // listItems.addEventListener('click', (e) =>{
// //     if(e.target.tagName === 'LI'){
// //         e.target.remove();
// //     }
// // });


// // Window events 
// // window.addEventListener('resize', () => {
// //     document.querySelector('h1').innerText = `Resized To ${window.innerWidth} X 
// //     ${window.innerHeight}`
// // });

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

// Create addItem function
function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value.trim(); // Trim to remove extra spaces

  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  // Creating list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  // Create the button and append it to the li
  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  // Append the li to the item list
  itemList.appendChild(li);

  // Clear the input field
  itemInput.value = '';
}

// Function to create a button
function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

// Function to create an icon
function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

// Event listener for the form submission
itemForm.addEventListener('submit', addItem);
