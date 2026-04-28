// tim hieu cac kien thuc ham - function trong js 
// DRY - don't repeat yourself
// ham = function: tap hop cua nhieu cac ma lenh(code) khac nhau de giai quyet 1 van de
// Ham: giup cho viec tai su dung lai chuong trinh
// co cac loai ham co ban trong JS
// 1 - function declaration : function golbal - goi bat ky khi nao trong chuong trinh
export function sumNumber(n1, n2, n3) { // scope - block
    // n1, n2, n3 : tham so - truyen vao ham (hieu don gian cac bien de su dung trong ham)
    let sum = n1 + n2 + n3; // tinh toan  - xu ly logic trong ham
    return sum; 
    // return: tra ket qua ve cho ham va se thoat khoi ham luon(cac cau lenh ben duoi tu khoa return se khong duoc thuc thi)
    // sau nay goi ham ra su dung, co the lay duoc gia tri cua ham nho da duoc return
}
function sayHello(){
    console.log(" Hello word");
    // ham khong bat buoc phai co return
}
// goi ham ra su dung : goi dung Ten ham
sayHello(); // () : thuc thi ham - chay ham
let result = sumNumber(10, 20, 30);
console.log(result);
// viet ham tinh giai thua cua 1 so tu nhien
// n! = 1 * 2 * 3 * ...*n;
// 1! = 1; 0! = 1;
// 3! = 2! * 3;
// 3! = 1! * 2 * 3;
let number = 5; // 5! = 120
let res = tinhGiaiThua(number); // goi ra su dung truoc khi ham dc dinh nghia
console.log(`Giai thua cua ${number} la : ${res}`);
function tinhGiaiThua(n){
    if(n < 0){
        return -1;
    }
    if(n == 0 || n == 1){
        return 1;
    }
    let gt = 1;
    for(let i = 1; i <= n; i++){
        gt *= i; // gt = gt * i;
    }
    return gt;
}
// 2 - function expression
// let res2 = substract(4,3); // goi ra su dung truoc khi ham dc dinh nghia - co loi
// console.log(res2); // co loi
let substract = function(number1, number2){
    // number1, number2 : tham so
    return number1 - number2; // return: tra ket qua ve cho ham
}
let res2 = substract(4,3); // goi ra su dung sau khi ham dc dinh nghia
console.log(res2);
// su dung function expression de kiem tra 1 so co phai so nguyen to hay ko?
let kiemTraSNT = function(number){
    if(number <= 1){
        return false;
    }
    if(number == 2){
        return true;
    }
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i == 0){
            return false; // return:  thoat khoi vong lap for va tra ve ket qua cho ham
        }
    }
    return true; // tra ket qua ve cho ham
}
let checking = kiemTraSNT(81);
if(checking){
    console.log('la so nguyen to');
} else {
    console.log('khong phai la so nguyen to');
}
// viet ham tinh tong cac so nguyen to tu 1 den 10;
let sumSNT = function( fromNumber , toNumber){
    // fromNumber : 1
    // toNumber: 10
    // kiem tra tat cac so tu 1 den 10, so nao la so nguyen to thi cong vao tinh tong
}
// 3 - arrow function 
let kiemTraChanLe = (number) => number % 2 == 0;
// 2 cach viet nay la tuong duong nhau
function kiemTraChanLe2(number){
    return number % 2 == 0;
}
let tinhDTHT = (a, b, h) => {
    let s = (a+b)*h/2;
    return s;
}
let check = kiemTraChanLe(5);
if(check){
    console.log('so chan');
} else {
    console.log('so le');
}
let dt = tinhDTHT(7,5,10);
console.log(`Dien tich hinh thang la : ${dt}`);
// bien toan cuc : bien khai bao ben ngoai ham 
// bien cuc bo : bien khai bao ben trong ham
let x = 10; // bien toan cuc 
function test(){
    let y = 20; // bien cuc bo
    x += y; // x bien toan cuc ben ngoai ham
    return x;
}
// x o ben ngoai ham co bi anh gi ko ?
let t = test();
console.log(t);
console.log(x); // x bi thay doi sau khi goi ham - bien toan cuc
// console.log(y); // loi  - y bien cuc bo chi su dung trong ham
let v = 10; // bien toan cuc
function test2(){
    let v = 20; // bien cuc bo -  ra khoi ham thi bien v het hieu luc
    // 2 bien v nay khac nhau hoan toan - vi pham vi hoat dong khac nhau.
    return v + 5;
}
console.log(test2());
console.log(v); // 10 ??
// su dung 1 trong 3 loai function ???
// viet ham giai phuong trinh bac 1.
// viet ham giai phuong trinh bac 2. 
let giaiPTBH = (a, b, c) => {
    if(a == 0){
        return "Khong phai la PTBH - vui long nhap lai HS A khac 0";
    }
    let delta = (b*b) - (4*a*c);
    if(delta < 0){
        return "PT Vo nghiem";
    }
    if(delta == 0){
        return `PT co nghiep kep x1=x2 = ${-b/(2*a)}`;
    }
    let x1 = (-b + Math.sqrt(delta)) / (2*a);
    let x2 = (-b - Math.sqrt(delta)) / (2*a);
    return `PT co 2 nghiem phan biet x1 = ${x1} va x2 = ${x2}`;
}
let nghiem = giaiPTBH(1, -3, 2); // x2 - 3x + 2 = 0
console.log(nghiem);



