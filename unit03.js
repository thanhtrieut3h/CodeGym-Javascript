// lam quen voi cac cau truc dieu khien
// lam quen voi cac cau truc vong lap
// cau truc dieu kien if ...esle
let number = 10;
if (number > 20) {
    console.log("True");
    // con nhieu lenh ben duoi
    console.log("OK");
} else {
    console.log("False");
}
let n = 20;
if( n > 30) {
    // do something
} else if (n > 25) {
    // do something
} else if (n > 20) {
    // do something
} else {
    // finally do something
}
// su dung cau truc if... else kiem tra 1 so la so chan hay le ?
let num = 15;
if(num % 2 == 0){
    console.log(`${num} la so chan`)
} else {
    console.log(`${num} la so le`);
}
// kiem tra xem 1 nam DL co phai nam nhuan hay khong ?
// chi can thoa man 1 trong 2 dieu kien : 
// 1: nam DL do chia het cho 400
// 2: namm DL chia het cho 4 nhung khong chia het cho 100
let year = 2028;
if((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)){
    console.log(`${year} la nam nhuan DL`);
} else {
    console.log(`${year} khong la nam nhuan DL`);
}

// cau truc dieu kien switch ... case
// kiem tra xem 1 thang co nhieu ngay
let month = 4;
switch(month){
    // tuong duong kiem tra xem bien month co bang 1 hay ko?
    case 1:
        console.log("31 ngay");
        break;
    case 3: 
        console.log("31 ngay");
        break;
    case 4: 
        console.log("30 ngay");
        break;
    case 5:
        console.log("31 ngay");
        break;
    default:
        console.log("Thang khong hop le");
        break;
}
// go to ....
// cau truc vong lap
// hien thi cac so tu 1 den 10;
// for ...
for(let i = 1; i <= 10; i++) {
    // i : bien chay : lap di lap lai va tang len tu 1 den 10
    console.log(i);
}
// hien thi cac so tu 1 den 10 theo chieu nguoc lai: 10, 9, 8 ..... 1
for(let i = 10; i >= 1; i--){
    console.log(`val : ${i}`);
}
// chi hien thi cac nam nhuan DL tu nam 2020 den 2030;
for(let j = 2020; j <= 2030; j++) {
    // j : bien chay lan luot nhung nam tu 2020 den 2030
    if((j % 400 == 0) || (j % 4 == 0 && j % 100 != 0)){
        console.log(`${j} la nam nhuan DL`);
    } 
}
let number1 = 0; // number
// false : boolean
// == : so sanh bang nhau ve mat gia tri
// 0 == false == "" == ''
// 1 == true
if(number1 === false){
    console.log("OK");
} else {
    console.log("NO");
}
// ???
// cau truc vong lap while
let count = 1;
while(count <= 10){
    // vong lap kiem tra dieu kien truoc - truoc thi cac vong lap
    console.log(`count : ${count}`);
    count++;
}
// dem tu 1 den 10 co bao nhieu so le ?
// ap dung vong lap while (ket hop voi if... esle);
let count1 = 0;
let run = 1;
while(run <= 10){
    if(run % 2 != 0){
        console.log(`so le : ${run}`)
        count1++;
    }
    run++;
}
console.log(`co ${count1} so le tu 1 toi 10`);
// kiem tra 1 so co phai so nguyen to hay ?
// ket hop if...else voi cac vong lap.
// 13 co phai so nguyen to hay ko ?
// 1 ... 13:  2...12
let myNumber = 19;
let checkNum = true; // gia su coi la so nguyen to bc h
// n >= can bac hai cua n
/*
for(let i = 2; i <= myNumber - 1; i++){
    if(myNumber % i == 0){
        checkNum = false;
        break; // dung vong lap
    }
}
*/
let k = 2;
while(k <= myNumber -1){
    if(myNumber % k == 0){
        checkNum = false;
        break;
    }
    k++;
}
if(checkNum){
    console.log(`${myNumber} la so nguyen to`);
} else {
    console.log(`${myNumber} khong phai la so nguyen to`);
}
// do ...while
// kiem tra dieu kien sau - thuc thi it nhat 1 vong lap
let v = 1;
do {
    console.log(`value : ${v}`);
    v++;
} while( v <= 10 );
// bien + kieu du lieu
// phep toan, toan tu trong js
// cau truc dieu kien, cau truc vong lap
// hoc lap trinh ve ham (function) , tim hieu ve Array, Object JS


