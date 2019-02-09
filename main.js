//  Первое задание
function getSevenCol(arr) {
  let counter = 0; //счетчик семерок
  //проверка, а массив ли это
  if (Array.isArray(arr) === true) {
    //разбиваем массив на отдельные части
    let arrEl = arr.map(function findSeven(el) {
      //переводим их в строку и ищем семерки
      if (typeof el == "number") {
        for (let i = 0; i < el.toString().length; i++) {
          if (el.toString().slice(i, i + 1) == "7") {
            counter++;
          }
        }
      }
    });
  } else console.log("Введите массив");
  return "Первое задание" + counter;
}
console.log(getSevenCol([10, 20, 77, 479, 85627, 45168486487561]));

// Второе задание
function arrToString(arr) {
  let bufArr = "";
  for (let i = 0; i < arr.length / 2; i++) {
    bufArr = bufArr + arr[i] + arr[arr.length - i - 1];
  }
  return bufArr;
}

console.log(arrToString(["a", "b", "c", "d", "e", "f"]));
