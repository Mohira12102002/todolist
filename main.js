const toDoValue = document.querySelector('.form-control');
const addButton = document.querySelector('#addButton');
const clearButton = document.querySelector('#clearButton');
const todoList = document.querySelector('#todoList');




function addTask(){
    const value = toDoValue.value;
    if(!value)return;
    toDoValue.value="";



    //create li
    const li = document.createElement('li');
    todoList.prepend(li);
    li.style.background='rgb(236, 236, 236)';
    li.style.padding='20px';
    li.style.display='flex';
    li.style.marginBottom='10px';
    li.style.justifyContent='center';
    li.style.alignItems='center';




    // create li>p
    const p = document.createElement('p');
    li.prepend(p);
    p.textContent=value;
    p.style.fontWeight='600';
    p.style.margin='0';

    //create li>div
    const div = document.createElement('div');
    li.append(div);
    div.style.display='flex';
    div.style.gap='20px';
    div.style.alignItems='center';


    //create li>div>button>edit
    const edit = document.createElement('button');
    div.append(edit);
    edit.classList.add('btn');
    edit.classList.add('btn-primary');
    edit.textContent="Edit";



    //create li>div>button>complate
    const complate = document.createElement('button');
    div.append(complate);
    complate.classList.add('btn');
    complate.classList.add('btn-success');
    complate.textContent="Complate";




    //create li>div>button>delete
    const btnDelete = document.createElement('button');
    div.append(btnDelete);
    btnDelete.classList.add('btn');
    btnDelete.classList.add('btn-danger');
    btnDelete.textContent="Delete";


    let isComplate = false;
    complate.addEventListener("click", function () {
    isComplate = !isComplate;
    if (isComplate) {
      p.style.textDecoration = "line-through";
      p.style.opacity = "0.5";
      complate.textContent = "Uncomplate";
      complate.classList.add("btn-warning");
      complate.classList.remove("btn-success");
    } else {
      p.textContent = "Complate";
      p.style.textDecoration = "none";
      p.style.opacity = "1";
      complate.classList.add("btn-success");

      complate.classList.remove("btn-warning");
    }
  });


  let isEditing = false;
  edit.addEventListener("click", function () {
      isEditing =!isEditing;
      if(isEditing){
        const input = document.createElement('input');
        input.style.width='50%';
        input.value = p.textContent;
        li.style.display='flex';
        li.style.justifyContent='space-between';
        p.style.display='none';
        complate.style.display='none';

        edit.textContent= "Ok";
        btnDelete.textContent= "Cancel";

        li.prepend(input);

      }else{
        const input = li.querySelector('input');
        p.textContent = input.value ;
        input.style.display='none';
        p.style.display='block';
        complate.style.display='inline-block';

        edit.textContent= "Edit";
        btnDelete.textContent= "Delete";
      }
        
    });

    btnDelete.addEventListener("click", function () {
      if(isEditing){
        const input = li.querySelector('input');
        input.style.display='none';
        p.style.display='block';
        complate.style.display='inline-block';
        edit.textContent= "Edit";
        btnDelete.textContent= "Delete";
        isEditing=!isEditing;
      }else{
      }
     });


}



document.addEventListener("keydown", (e)=>{
    if(e.key =='Enter') addTask();
})


//Add

addButton.addEventListener("click", addTask);
//Clear

clearButton.addEventListener("click", function () {
    todoList.innerHTML = "";
  });
