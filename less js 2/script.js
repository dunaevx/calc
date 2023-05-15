// var a = ["sasfff", "sasf", "4242","sasf2424"]

// // for ( var i = 0 ; i < a.length; i++) {
// //     console.log(a[i])
// // }

// for (const iterator of a) {
//     console.log(iterator)
// }



var funObj = () =>{
    var obj = {
        last: "Siad",
        first: "Gubd",
        age: 27,
    }
    
    for (var key in obj) {
            console.log(obj[key])
    }    
}

var funArray = () =>{
    var array = ["A", "B", "C", "D", "E"]
    for (const i of array) {
        console.log(i)
    }
}


var funRes = ()=>{
    var arr = [1, 2, 3, 4, 5]
    for (var i = 0; i<= arr.length; i++){
        console.log(arr[i])
    }
}


var funcar = ()=>{
    
    var input = Number(prompt("plaese press 1 (array) \nplease prees 2 (objcet)\nplaese 3 for start for aaray"))

    switch(input) {
        case 1:
            funArray()
            break
        case 2:
            funObj()
            break
        case 3:
            funRes()
            break
        default:
            console.log("error");
    }
}



// calculator

function calc(){
    let block = document.querySelector('.board');
    let history = document.querySelector('.othis')
    block.innerHTML = '<h1>Калькулятор</h1><div class="content"><div class="left"><input type="number" value="" name="0" id="one" placeholder="Введите первое число"><br><input type="number" value="" name="0" id="two" placeholder="Введите второе число"><br><input type="button" value="Подсчитать" onclick="add()" id="resbtn"><p class="result"></p></div><div class="right"><h4>Выберите действие</h4><label for=""><input type="radio" name="operation" id="sumbtn" checked><p>Сложение</p></label><label for=""><input type="radio" name="operation" id="minbtn"><p>Вычетание</p></label><label for=""><input type="radio" name="operation" id="umnbtn"><p>Умножение</p></label><label for=""><input type="radio" name="operation" id="delbtn"><br><p>Деление</p></label></div></div>';
    history.innerHTML = '<div class="hist"><h4>История ответов</h4><p class="bd"></p></div>'
}


// function arf1() {
//     var a = "+"
//     // switch(arg){
//     //     case "+":
//     //         a = "+"
//     //         break
//     //     case "-":
//     //         a = "-"
//     //         break
//     //     case "*":
//     //         a = "*"
//     //         break
//     //     case "/":
//     //         a = "/"
//     //         break
//     //     default:
//     //         alert('ERROR')
//     //         break
//     // }
//     return a;
// }


function add() {
    let one = Number(document.getElementById("one").value);
    let two = Number(document.getElementById("two").value);
    let result = document.querySelector(".result");
    let operation = checkbtn();
    let otv;
    let txt;

    switch (operation) {
        case "+":
            otv = one + two;
            txt = one + "+" + two;
            break;
        case "-":
            otv = one - two;
            txt = one + "-" + two;
            break;
        case "*":
            otv = one * two;
            txt = one + "*" + two;
            break;
        case "/":
            otv = one / two;
            txt = one + "/" + two;
            break;
        default:
            alert("404");
            return;
    }
    result.textContent = "Ответ: " + txt + " = " + otv;

    function checkbtn(){
        let sum = document.getElementById("sumbtn");
        let min = document.getElementById("minbtn");
        let umn = document.getElementById("umnbtn");
        let del = document.getElementById("delbtn");

        if(sum.checked){
            return "+";
        }else if(min.checked){
            return "-";
        }else if(umn.checked){
            return "*";
        }else if(del.checked){
            return "/";
        }else return null;
    }

    let his = txt + "=" + otv;
    let history = [];
    history.push(his);

    function hstry() {
        let container = document.querySelector(".bd");

        history.forEach(function(element) {
            let elementText = document.createElement('p');
            elementText.textContent = element;
            container.appendChild(elementText);
        });
    }

    hstry();
}




//
window.onload = function () {

    var button = document.querySelector(".button");
    var circle = document.querySelector(".circle");
    var timer;
    button.addEventListener("click", (e) => {

        if (typeof timer != "undefined") {
            clearInterval(timer);
        }

        let xAxis = e.pageX;
        let yAxis = e.pageY;
        let width = 0;
        let opacity = "1";

        timer = setInterval(function () {
            width++; //увеличиваем ширину кружочка на единицу
            let w = width + "px"; //добавляем единицу измерения - пиксели
            circle.style.width = w; //устанавливаем ширину кружочка
            circle.style.height = w; //устанавливаем высоту кружочка
            circle.style.opacity = opacity; //устанавливаем непрозрачность кружочка
            circle.style.left = xAxis - button.offsetLeft - width / 2 + "px";  //вычисляем отступ слева относительно родительского элемента - кнопки
            circle.style.top = yAxis - button.offsetTop - width / 2 + "px"; //вычисляем отступ сверху 
            opacity = opacity - 0.01; //уменьшаем непрозрачность на 0.01
            //далее если кружочек дорос до 100 пикселей, останавливаем таймер
            if (getComputedStyle(circle).width === "100px") {
            clearInterval(timer);
            }
            }, 3);
    });

}


// window.onload = function () {

//     var button = document.querySelector(".button1");
//     var circle = document.querySelector(".circle1");
//     var timer;
//     button.addEventListener("click", (e) => {

//         if (typeof timer != "undefined") {
//             clearInterval(timer);
//         }

//         let xAxis = e.pageX;
//         let yAxis = e.pageY;
//         let width = 0;
//         let opacity = "1";

//         timer = setInterval(function () {
//             width++; //увеличиваем ширину кружочка на единицу
//             let w = width + "px"; //добавляем единицу измерения - пиксели
//             circle.style.width = w; //устанавливаем ширину кружочка
//             circle.style.height = w; //устанавливаем высоту кружочка
//             circle.style.opacity = opacity; //устанавливаем непрозрачность кружочка
//             circle.style.left = xAxis - button.offsetLeft - width / 2 + "px";  //вычисляем отступ слева относительно родительского элемента - кнопки
//             circle.style.top = yAxis - button.offsetTop - width / 2 + "px"; //вычисляем отступ сверху 
//             opacity = opacity - 0.01; //уменьшаем непрозрачность на 0.01
//             //далее если кружочек дорос до 100 пикселей, останавливаем таймер
//             if (getComputedStyle(circle).width === "100px") {
//             clearInterval(timer);
//             }
//             }, 3);
//     });

// }