// tim hieu cac kien thuc ve Array va Object trong JS
// 1 - Tim hieu ve Array(mang)
// kieu du lieu cua Array(mang) : object
// dinh nghia Mang : mot bien co the luu tru nhieu gia tri khac (cac gia tri luu tru trong mang khong nhat thiet phai cung kieu du lieu voi nhau)
let arrNumber = new Array(); // mang rong(chu co phan tu - chua co gia tri nao)
let myArr = []; // khai bao 1 mang rong - chua co gia ben trong
let fruits = ["apple", "lemon", 1, 2, 3, 4, true, false]; // co gia tri - co cac phan tru trong mang
// index(key) - vi tri cua phan tu(gia tri) nam trong mang. luon luon nho phan tu dau tien trong mang luon co vi tri so 0
// value - gia tri(phan tu) trong mang
// kiem tra mang co bao nhieu phan tu ?
let count = fruits.length;
console.log(`so phan tu cua mang la : ${count}`);
// truy cap vao cac phan tu nam trong mang
// TenMang[index/key]
console.log(fruits[1]); // lay ra dc gia tri "lemon" : so 1 la vi tri phan tu trong mang
console.log(fruits[6]);
// vi tri cuoi cung cua phan tu trong mang = (so luong phan tu trong mang) - 1
// bo sung phan tu vao trong mang
myArr[0] = 1;
myArr[1] = 10;
myArr[2] = 11;
console.log(myArr[0]);
fruits[1] = "lion"; // thay the gia tri cho phan tu
console.log(fruits[1], fruits[2], fruits[0]);
// duyet mang - lan luot truy cap qua cac phan tu
// 1 - vong lap for
for(let i = 0; i < fruits.length; i++){
    // i : index/key cua cac phan tu (vi tri)
    console.log(fruits[i]);
}
console.log("**************************");
// 2 - for .. in / for .. of
for(let value of fruits){
    console.log(value); // in ra gia tri cua phan tu nam trong mang
}
console.log("**************************");
for(let index in fruits){
    console.log(index); // in ra vi tri cua phan tu trong mang
}
/////// mang da chieu ///////////
let arr = [
    [1,2,3,4,5,6],
    ["an", "binh", "tam", "linh", "hong"],
    [true, false, null, undefined]
];
// truy cap vao phan tu ben trong
console.log(arr[1][2]); // "tam"
// cac ham co san lam viec voi mang trong JS

let myArrNumbers = [1,2,3,4,5,6,7,8,9,10];
// loc ra cac so chan trong mang - tra ve 1 mang chua cac so chan
let result = myArrNumbers.filter(number => number % 2 == 0);
console.log(result, myArrNumbers);
let result1 = myArrNumbers.find(n => n % 5 == 0); // tim so dau tien trong mang chia het cho 5.
console.log(result1);
let position = myArrNumbers.indexOf(9); 
// tim so 9 co nam trong mang ko ?
// neu so 9 co nam trong mang tra ve vi tri cua no, nguoc lai tra ve -1
console.log(position);
let result2 = myArrNumbers.map(n => {
    console.log(n)
});
// viet ham tim so nho nhat hoac lon nhat trong mang
let ranNumbers = [10,1,3,6,21,91,0,-9,4];
function findMinMaxElement(arrayNumbers = []){
    // xu ly logic tim kiem
    let max = arrayNumbers.reduce((m, n) =>  n > m ? n : m);
    let min = arrayNumbers.reduce((m, n) =>  n < m ? n : m);
    return [min, max];
}
let res = findMinMaxElement(ranNumbers);
console.log(res);
// in ra dc 1 mang chua phan tu nho nhat va lon trong mang
// viet ham tinh tong cac so nguyen to trong mang ???
function TinhSNT(numbers = []){
    // tinh cac so nguyen to co trong mang
    // tra ve duoc tong so
}


