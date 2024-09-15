
// let TodoList=["milk", "bread"];

let TodoList= [
  {item: "milk",
    dueDate: "27/8/2024"
  },
  {item: "laundry clothes",
    dueDate: "26/8/2024"
  },
  
]
displayItems()


function addTODO(){
  let todoItems= document.querySelector("#input-todo");
  let date= document.querySelector("#input-date");
  let elements= todoItems.value;
  let todoDate= date.value;
  // console.log(elements);
  TodoList.push({item:elements, dueDate:todoDate})
  
  todoItems.value="";
  date.value="";


  displayItems()
  

}


// function displayItems(){
//   let displayitems= document.querySelector("#todo-items");
//   displayitems.innerText=""
//   for(i=0; i< TodoList.length; i++){
//     displayitems.innerText= displayitems.innerText +'\n' +TodoList[i]

//   }

// }

function displayItems(){
  let containerElement=document.querySelector(".todo-cont");
  let newHTML="";

  for(let i=0; i<TodoList.length; i++){
    let item= TodoList[i].item;
    let dueDate=TodoList[i].dueDate;

    newHTML+= `
    
    <span>${item}</span>
    <span>${dueDate}</span>
    <button  id="btn-del" onclick="TodoList.splice(${i},1);
    displayItems();">Delete</button>
    `
  }
  containerElement.innerHTML= newHTML;
}