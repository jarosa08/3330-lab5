
let currentInput = "";

// TODO: Replace the following line with a jQuery selector
// const display = document.querySelector(".display");
const display = $(".display");
// display.html("7");

// TODO: Replace the following three lines with jQuery code
// const buttons = document.querySelectorAll(".btn");

// for(let i=0; i < buttons.length; i++){    
    // buttons[i].addEventListener("click", function() {

$("#button-clear").addClass("clear");
$("#button-eq").addClass("equal");


$(".btn").click(function() {


        const value = this.innerHTML;
        // alert(value);

        // alert(this.classList.contains("equals"));

        // Clear button
        if (this.classList.contains("clear")) {
            currentInput = "";
            display.html("0");
            return;
        }

        // Equal button
        if (this.classList.contains("equal")) {
            try {
                currentInput = eval(currentInput).toString();
                // alert(currentInput);
                display.html(currentInput);
            } catch {
                display.html("Error");
                currentInput = "";
            }
            return;
        }

        // Append numbers/operators
        currentInput += value;
        display.html(currentInput);
    // });
// }
});

