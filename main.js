//  Первое задание
function getSevenCol(arr) {
  let counter = 0; //счетчик семерок
  //проверка, а массив ли это
  if (Array.isArray(arr) === true) {
    //разбиваем массив на отдельные части
    let arrEl = arr.map(function findSeven(el) {
      //переводим их в строку и ищем семерки
      for (let i = 0; i < el.toString().length; i++) {
        if (el.toString().slice(i, i + 1) == "7") {
          counter++;
        }
      }
    });
    console.log(counter);
  } else console.log("Введите массив");
}
getSevenCol([10, 20, 77, 479, 85627, 45168486487561,4534876841873413,465463513543514384,45435435135435]);


// Второе задание
