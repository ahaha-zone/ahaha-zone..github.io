let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/day-dream.png') {
      myImage.setAttribute('src', 'images/city-on-cat.png');
    } else {
      myImage.setAttribute('src', 'images/day-dream.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
myButton.onclick = function() {
   setUserName();
}
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}
