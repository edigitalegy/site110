let username = document.querySelector(".username");
let userpass = document.querySelector(".userpass");
let submit = document.querySelector(".add");

var inputname;
var inputpass;
let arrayOfuser = [];

//-------------------------add users------------------------------------//
let arrayOfTasks = [];
let arrayOfTaskstwo = [];
let arrayOfTasksthree = [];
let arrayOfTasksfour = [];

var useridfour = "four";
var useridthree = "three";
var useridtwo = "two";
var userid = "one";
var num = 60;

function addTaskToArray() 
{
  for(let i =1;i<=num;i++)
  {
    userid = "one"+i;
    const task = {
    id: userid,
    pass: 12345,
  };
  arrayOfTasks.push(task);
  }

  for(let i =1;i<=num;i++)
  {
    userid = "two"+i;
    const task = {
    id: userid,
    pass: 12345,
  };
  arrayOfTaskstwo.push(task);
  }

  for(let i =1;i<=num;i++)
    {
      userid = "three"+i;
      const task = {
      id: userid,
      pass: 12345,
    };
    arrayOfTasksthree.push(task);
    }

  for(let i =1;i<=num;i++)
    {
      userid = "four"+i;
      const task = {
      id: userid,
      pass: 12345,
    };
    arrayOfTasksfour.push(task);
    }

}

addTaskToArray() 
//-------------------------------------------------------------//


//------------------------check user-------------------------------------//
submit.onclick = function () {
	  if (username.value !== "") 
      {
        inputname = username.value;
        inputpass = userpass.value; 
        username.value = ""; 
        userpass.value = "";
        funuser();
      }
};

function funuser()
{
  for(let i =0;i<arrayOfTasks.length;i++)
  {  
   if (inputname == arrayOfTasks[i].id) 
   		{
        const taskuser = 
        {
          id: inputname,
          pass: inputpass,
        };
          arrayOfuser.push(taskuser);
          location.href="1learn/index.html";
   		}
 
  }  

  for(let i =0;i<arrayOfTaskstwo.length;i++)
  {  
   if (inputname == arrayOfTaskstwo[i].id) 
   		{
        const taskuser = 
        {
          id: inputname,
          pass: inputpass,
        };
          arrayOfuser.push(taskuser);
          location.href="2learn/index.html";
   		}
 
  } 

  for(let i =0;i<arrayOfTasksthree.length;i++)
    {  
     if (inputname == arrayOfTasksthree[i].id) 
         {
          const taskuser = 
          {
            id: inputname,
            pass: inputpass,
          };
            arrayOfuser.push(taskuser);
            location.href="1learn/index.html";
         }
   
    } 

    for(let i =0;i<arrayOfTasksfour.length;i++)
      {  
       if (inputname == arrayOfTasksfour[i].id) 
           {
            const taskuser = 
            {
              id: inputname,
              pass: inputpass,
            };
              arrayOfuser.push(taskuser);
              location.href="2learn/index.html";
           }
     
      } 
    
}
