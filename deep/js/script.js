// Строгий режим
"use strict"
/* ====================================================================================================================== */
/*
Задача №2
За допомогою циклу FOR виведіть в консоль 10 рядків:
Пункт №1
Пункт №2
і т.д.


let someFunc = `Пункт №`;
for (let i = 1; i < 11; ++i) {
   someFunc = `Пункт №${i}`;
   console.log(someFunc);
}
*/



/*
Задача №3
Що потрапить в консоль ?
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
   console.log('000');
}

В консоль нічого не потрапить, yмова не виконається
// false || false && true || false

// false && true

// false

Умова виконається:

if (2 * 20 => 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
   console.log('000');
}

В консоль потрапить: 000

*/


/*
Задача №4
Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
Функція не має повертати NaN, Infinite або помилку

const numOne = 10;
const numTwo = 5;
*/
/*
function sumCalc(a = 0, b = 1) {
   if (b < 1) {
      console.log("На 0 ділити не можна! ")
   } else if (b > 0) {
      const result = a / b;
      showMessage(result);
   }
}

function showMessage(result) {
   console.log(`Результат ділення: ${result}`)
}

sumCalc();

*/

/*
Задача №5
Створіть масив даних - 5 елементів, один з яких число 10
Обробіть масив за допомогою методу перебору
Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль

*/
/*
let someArray = [20, "Array", "mb", 10, "JS"];
someArray.forEach((someArrayItem) => {
   console.log(someArrayItem);
   for (let i = 11; i < someArrayItem; i++) {
      console.log('000');
   }

});
*/

// let someArray = [20, "Array", "mb", 10, "JS"];
// console.log(someArray);
// let someArrayCalc = someArray.filter(calc => calc > 0);
// console.log(someArrayCalc);


// if (someArray[1] > 0) {
//    console.log('000');
// }
// console.log(typeof someArray[1]);
/*
console.log(someArray[1]);


*/

/* ====================================================================================================================== */
/*
Задача №1
Отримати в константу елемент <body>

const bodyElement = document.body;
console.log(bodyElement);
*/



/*
Задача №2
Написати функцію, яка додає в <body> список UL
з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)


function createUL(li = 4) {
   const bodyElement = document.body;
   let ul = document.createElement('UL');
   bodyElement.prepend(ul);
   for (let i = 0; i < li; i++) {
      const li = document.createElement('li');
      ul.prepend(li);
   }
}
createUL(10);
*/


/*
Задача №3
Додати до елементу <body> класс loaded.
Потім перевірити чи є клас loaded у елемента <body>
і, якщо є, додати стиль кольору тексту зелений.

const bodyElement = document.body;
bodyElement.classList.add('loaded');
// bodyElement.classList.contains('loaded');
if (bodyElement.classList.contains('loaded')) {
   bodyElement.style.color = "green";
}
*/


/*
Задача №4
Дано в html: три елементи з класом item.
Треба отримати ці елементи в константу, кожному додати клас active,
та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".


const bodyItem = document.querySelectorAll('.item');
console.log(bodyItem);
for (let i = 0; i < bodyItem.length; ++i) {
   bodyItem[i].classList.add('active');
   // console.log(bodyItem[i]);
   bodyItem[i].textContent = `Елемент №${i + 1}`;
}





/*
Задача №5
Дано в html: текст, далі кнопка з класом button.
Треба прокрутити скрол сторінки до кнопки

const button = document.querySelector('.button');
function scrollToBlock(element) {
   element.scrollIntoView({
      //"start", "center", "end". За замовчуванням "center".
      block: "end",
      //"start", "center", "end" чи "nearest". За замовчуванням "nearest".
      inline: "nearest",
      behavior: "smooth"
   });
}
scrollToBlock(button);
*/



/*
Задача №6
Дано в html: посилання з класом link
Треба додати до посилання дата атрибут зі значенням 100
Поім отримати значення aтрибуту, та, якщо значення менше 200
пофарбувати колір тексту посилання в червоний


const bodyLink = document.querySelector('.link');
bodyLink.setAttribute('speed', '100');
let linkAttribute = +bodyLink.getAttribute('speed');
console.log(linkAttribute);
console.log(typeof linkAttribute);
if (linkAttribute < 200) {
   bodyLink.style.backgroundColor = "red";
}

*/


/* ================================================================================================== */

/* Задача №1
Дано в html: три елементи з класом item.
При кліку на кожен з елментів додати клас active,
при повторному кліку прибрати клас
*/

/*
document.addEventListener("click", documentActions);
function documentActions(event) {
   const targetElement = event.target;
   if (targetElement.closest('.item')) {
      targetElement.classList.toggle('active');
   }
}
*/



/*
Задача №2
Дано в css/scss: body прозорий
При повному завантаженню сторінки додати клас до body який прибирає прозорість.
*/
/*
window.addEventListener("load", pageLoaded);
function pageLoaded(event) {
   document.documentElement.classList.add('loaded');
}
*/


/*
Задача №3
Дано в html: header main footer
Пи наведенні курсору на header змінювати колір фону у footer.
Коли курсор йде з header повертати початковий фон для footer.
*/



/*
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

header.addEventListener("mouseover", function (event) {
   footer.classList.add('background');
});

header.addEventListener("mouseout", function (event) {
   footer.classList.remove('background');
});
*/

/* ---------------------------------------------------------- */

// const wrapper = document.querySelector('.wrapper');

// wrapper.addEventListener("mouseover", showHeaderFunc);

// function showHeaderFunc(event) {
//    // const targetElement = event.target.closest('header');
//    // if (!target) return;
//    console.log('обєкт над елементом');
//    footer.classList.add('background');
// }

// header.addEventListener("mouseenter", documentActions);
// function documentActions(event) {
//    const targetElement = event.target;
//    console.log(targetElement);
//    if (targetElement.classList.contains('header')) {
//       footer.classList.add('background');
//       console.log('0000');
//    }
//    //   else if (!targetElement.classList.contains('header')) {
//    //    footer.classList.remove('background');
//    // }
// }





/*
Задача №4
Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.
*/




/* ================================================================================================== */