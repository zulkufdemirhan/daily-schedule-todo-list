const input = document.querySelector("#input-text")
const addBtn = document.querySelector("#add")
const divMainBox = document.querySelector(".list-box")
const ulForm = document.querySelector(".list-form")
const todoDiv = document.querySelector(".todo")
const liElement = document.querySelector(".list-element")
const deleteBtnBtn = document.querySelector(".deleteBtn")
document.addEventListener("DOMContentLoaded", function () {
    getLocalInfo();
});

//!-------------------------------------------------------

input.addEventListener("keyup",(event)=>{

    if(event.key == "Enter"){
        console.log("key works")
        
        if(input.value == ""){
            alert("you must write something!")

    }else{
        saveLocalInfo(input.value);
    
        const divTodo = document.createElement("div");
        divTodo.classList.add("todo");
    
        const elementLi = document.createElement("li");
        elementLi.innerText=input.value;
        elementLi.classList.add("list-element");
        divTodo.appendChild(elementLi);
    
        const silmeBtn = document.createElement("button");
        silmeBtn.innerText="-"
        silmeBtn.classList.add("deleteBtn")
        divTodo.appendChild(silmeBtn)
    
        ulForm.appendChild(divTodo)
    
        input.value = "";
    }
    }
})

//!-------------------------------------------------------

addBtn.addEventListener("click", accBtn)

function accBtn(e){
    console.log("btn works.")

    if(input.value == ""){
        alert("you must write something!")
    
}else{
    saveLocalInfo(input.value);

    const divTodo = document.createElement("div");
    divTodo.classList.add("todo");

    const elementLi = document.createElement("li");
    elementLi.innerText=input.value;
    elementLi.classList.add("list-element");
    divTodo.appendChild(elementLi);

    const silmeBtn = document.createElement("button");
    silmeBtn.innerText="-"
    silmeBtn.classList.add("deleteBtn")
    divTodo.appendChild(silmeBtn)

    ulForm.appendChild(divTodo)

    input.value = "";
}
}

//!-------------------------------------------------------
ulForm.addEventListener("click", deleteElement)

function deleteElement(e){

    const item = e.target;
    console.log("works.")

        if (item.classList[0] === "deleteBtn") {
            const cash = item.parentElement;
            cash.classList.add("fall");
            removeLocalInfo(cash)
            cash.addEventListener("transitionend", function () {
                cash.remove();
            })
        }

        if (item.classList[0] === "list-element") {
            const todo = item
            todo.classList.toggle("checked")
            
        }

        
}


//!-------------------------------------------------------

function saveLocalInfo (marker){
    let localArray;
    if (localStorage.getItem("localArray") === null){
        localArray= [];
    }else{
        localArray = JSON.parse(localStorage.getItem("localArray"))
    }

    localArray.push(marker);
    localStorage.setItem("localArray",JSON.stringify(localArray))
}
//!-------------------------------------------------------
function getLocalInfo(marker){
    let localArray;
    if (localStorage.getItem("localArray") === null){
        localArray = [];
    }else{
        localArray = JSON.parse(localStorage.getItem("localArray"))
    }
    localArray.forEach(marker => {
        const divTodo = document.createElement("div");
        divTodo.classList.add("todo");
    
        const elementLi = document.createElement("li");
        elementLi.innerText= marker;
        elementLi.classList.add("list-element");
        divTodo.appendChild(elementLi);
    
        const silmeBtn = document.createElement("button");
        silmeBtn.innerText="-"
        silmeBtn.classList.add("deleteBtn")
        divTodo.appendChild(silmeBtn)
    
        ulForm.appendChild(divTodo)
    });
}
//!-------------------------------------------------------
function removeLocalInfo(marker){
    let localArray;
    if (localStorage.getItem("localArray") === null){
        localArray=[];
    }else{
        localArray = JSON.parse(localStorage.getItem("localArray"))
    }
    
    const infoIndex = marker.children[1].innerText;
    localArray.splice(localArray.indexOf(infoIndex),1);
    localStorage.setItem("localArray",JSON.stringify(localArray));
    console.log(localArray.indexOf(infoIndex),1)

}
//!-------------------------------------------------------
const ddClick = document.querySelector(".main-li")
const ddMenuList = document.querySelectorAll(".drop-down-li")
const ddUl =document.querySelector(".drop-down-ul")

ddClick.addEventListener("click", ddMaker)

let menu = true ;

function ddMaker(){
    if(menu == true ){
        ddUl.style.transform="translateY(240px)"
        menu = false;
    } else {
        ddUl.style.transform="translateY(5px)"
        menu = true;
    }
}
//!-------------------------------------------------------





















