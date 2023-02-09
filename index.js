function printNumber () {

  
  
  for (let i = 0; i < 101; i++) {
    if(i % 3 === 0 && i % 5 === 0){
     value = "FizzBuzz";
    }
    else if(i % 3 === 0){
     value = "Fizz";
    }
    else if(i % 5 === 0){
     value = "Buzz"; 
    }
    else {
     value = i;
    }
    
    let numberList = document.getElementById("numberList");
    let list = document.createElement("li");
    
    numberList.appendChild(list);
    list.appendChild(document.createTextNode(value));
          
  }
  
  }

