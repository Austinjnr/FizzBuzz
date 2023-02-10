  function printNumber() {
        let numberList = document.getElementById("numberList");
        if (numberList.style.display === "none") {
            numberList.style.display = "block";

            for (let i = 1; i <= 100; i++) {
                let item = document.createElement("li");
                if (i % 3 === 0 && i % 5 === 0) {
                    item.innerHTML = "FizzBuzz";
                } else if (i % 3 === 0) {
                    item.innerHTML = "Fizz";
                } else if (i % 5 === 0) {
                    item.innerHTML = "Buzz";
                } else {
                    item.innerHTML = i;
                }
                numberList.appendChild(item);
            }

        } else {
            numberList.style.display = "none";
            while (numberList.firstChild) {
                numberList.removeChild(numberList.firstChild);
            }
        }
    }

