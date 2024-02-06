    // function leap(year) {
    //     if(year%4 ===  0 && year%400 ===0) {
    //         console.log("THIS IS LEAP YEAR...");
    //     }
    //     else {
    //         console.log( "This is Not A Leap Year");
    //     }
       
    // }    
    
    // let year = prompt("YEAR  ??");
    // let c  = alert(year % 4);
    
    //  let result = leap(2000);

   

    function calculate() {

        let value = document.getElementById("input").value;

        if (isNaN(value)) {
            alert("Enter a Year.");
            document.getElementById("result").innerHTML = " ";
        }

       else if(value % 4 ===0) {
            document.getElementById("result").innerHTML = "THIS IS A LEAP YEAR."
        }
        else {
            document.getElementById("result").innerHTML = "THIS IS NOT A LEAP YEAR."
        }
    }

   

