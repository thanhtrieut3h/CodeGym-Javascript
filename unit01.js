// cu phap comment tren 1 dong JS (JavaScript)
/*
* Cu phap coment tren nhieu dong
* nhung doan code se khong duoc thuc thi
*/
// Bien + kieu du lieu trong JS
let number = 10; // khai bao 1 bien trong jS
// let : keyword(tu khoa) de khai bo 1 bien
// number : ten bien (do LTV tu dinh nghia)
// = : phep gan gia tri cho 1 bien
// 10 : gia tri duoc gan cho bien (number) 
// Quy tac dat ten bien : 
// 1. Ten bien phai bat dau bang chu cai (a-z, A-Z), hoac dau gach duoi (_), hoac dau $.
// 2. Ten bien khong bat dau bang so (0-9).
// 3. Ten bien khong trung voi cac tu khoa trong JS (let, const, if, else , for ...)
// 4. Ten bien khong chua khoang trang (space).
let myName = "Nguyen Van A"; // khai bao 1 bien
// chu cai dau cua bien khong viet hoa, chu cai dau cua tu tiep theo se viet hoa.
let myname = "Nguyen Van B"; // bien trong JS phan biet chu hoa va chu thuong (khong nen su dung cach nay de dat ten bien)
// 2 bien nay khac nhau hoan toan.
// khai bao bien trong JS khong can phai khai bao kieu du lieu, JS se tu dong xac dinh kieu du lieu cho bien khi bien duoc gan gia tri. (tu dong xu ly ve kieu du lieu cho bien)
let age = 20; // kieu du lieu number;
// var address = "Ha Noi"; // var keyword khai bao bien - khong nen dung nua, vi tu phien ban ES6 tro len thi thay the bang let hoac const.
const PI = 3.14; // const keyword khai bao hang so (gia tri khong thay doi )
age = 30; // thay doi gia tri cua bien
// PI = 3; // loi - khong duoc thay doi gia tri cua hang so
const MY_AGE = 25; // viet hoa va ngan cach boi dau gach duoi

/************************** Kieu Du lieu trong JS ******************************/
// kieu du lieu : de lam sang to to noi dung cua bien la gi ?
// 2 nhom : Primitive Data Types vs Object Data Type
// 1 - kieu du lieu number : bao gom tat ca cac gia tri so nguyen, so thuc (ca co dau va khong co dau)
let x = 10; // so nguyen
let y = 10.34; // so thuc
// kiem tra xem bien co kieu du lieu la gi ?
let dataType = typeof x; // kiem tra kieu du lieu cua bien x
let dataType2 = typeof(y); // kiem tra kieu du lieu cua bien y
console.log(dataType);
console.log(dataType2);
// 2 - kieu du lieu string (chuoi) : bao gom cac ki tu duoc dat trong nhay don hay nhay kep , hoac trong dau backtick (dau `);
let firstName = "Nguyen";
let lastName = 'Van A';
console.log(typeof(firstName, dataType, dataType2));
console.log(typeof lastName);
let fullName = `${firstName} 
- ${lastName}
- test abc`;
console.log(fullName);
let fullName2 = firstName + " - "  + lastName;
// toan tu : noi chuoi(ghep chuoi) (+)
// 3 - kieu du lieu boolean(logic)
let checking = true; // boolean
let isActive = false; // boolean
// gia tri boolean chi co 2 gia tri la true va false
// 4 - kieu du lieu undefined
let myMoney; // khai bao bien khong gan gia tri, mac dinh kieu du lieu la undefined.
console.log(typeof myMoney);