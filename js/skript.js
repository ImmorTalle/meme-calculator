let op;
function func() {
    // получаем первое и второе число
    let num1 = Number(document.getElementById("num-1").value);
    let num2 = Number(document.getElementById("num-2").value);
    switch (op){
        case "-":
            return num1 - num2;
        case "+":
            return num1 + num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;

    }
}

let execute_buttons = document.querySelectorAll('.execute')
let result_btn = document.querySelector('.result_btn')

result_btn.addEventListener('click', function () {
    document.getElementById("result").innerHTML = func()
})

for (let index = 0; index < execute_buttons.length; index++) {
    execute_buttons[index].addEventListener('click', function () {
        op = this.innerHTML
    })
}