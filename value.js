'use strict';

const $nameForm = document.querySelector('#nameForm');
const $name = document.querySelector('#name');
const $input = document.querySelector('#input');
const $toDoForm = document.querySelector('#toDoForm');
const toDoFormInput = document.querySelector('#todoForminput');
const HIDDEN = 'hidden';
const list = document.querySelector('ul');
const NAME__STRING = 'name';



//html에 hidden 더하기 삭제하기 헬로우 겹치는 부분
function hiddenClass(){
    const localStorageValue = localStorage.getItem(NAME__STRING)
    $name.textContent =`Hello ${localStorageValue}!`;
    $name.classList.remove(HIDDEN);
    $toDoForm.classList.remove(HIDDEN)
    $nameForm.classList.add(HIDDEN)
}

// 이름 제출 이벤트
function submitEventHandler(event){
    event.preventDefault();
    const inputName = $input.value;
    localStorage.setItem(NAME__STRING, inputName)
    hiddenClass()

    
}



// todo 이벤트
function makingToDo(event){
    event.preventDefault();
    const toDolist = toDoFormInput.value;
    const $span = document.createElement('span');
    const $li = document.createElement('li')
    $li.textContent = toDolist
    toDoFormInput.value = ''
    const $button = document.createElement('button')
    $button.textContent = '❌';
    list.appendChild($span);
    $span.appendChild($li);
    $span.appendChild($button)
}


$nameForm.addEventListener('submit', submitEventHandler)
$toDoForm.addEventListener('submit', makingToDo) 

const confirmStorage = localStorage.getItem(NAME__STRING)

if(confirmStorage === null){


}   
else {
    hiddenClass()
}

// 1. 이벤트리스너를 만든다 클릭시 form은 사라지고
// form의 value의 값이 span의 이너텍스트가 된다

// 2. 밑에 폼이 생긴다. 

// 3 . hello 인사를 하고 싶어

// 4. 입력한 값의 밸류가 새로요소를 만든다 ul을 html
// 에 만들어 놓고 안에 있는 li는 새로 생성시킨다./

// 버튼 클릭시 사라지는 클릭이벤트를 만들고 싶어

// 4. 서버에 저장을 하고 싶어 새로고침 해도 