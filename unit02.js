// cac phep toan trong js + cac toan tu trong JS
// + - * / % : toan hoc
// = : phep gan
// == : phep so sanh 
// && : phep logic AND (va)
// || : phep logic OR (hoac)
let number1 = 10; // ??? number
let number2 = "dfv20"; // ??? string
let result = number1 + number2; // ??? ghep chuoi
console.log(result);
let result2 = number2 - number1; // ??? NaN (Not a Number)
console.log(result2);
console.log(typeof result2); 
let x = 1;
let y = 2;
x += y; // x = x + y
x -= y; // x = x - y
x *= y; // x = x * y
x /= y; // x = x / y
console.log(x);
let a = 4;
//let a = 10; // khong duoc phep dung tu khoa let de khai bo bien da ton tai
let b = 10;
let c = b % a; // phep chia lay du
console.log(c); // ???
let compare = a == b; // so sanh bang nhau ve mat gia tri
let compare2 = a != b; // so sanh khong bang
// >; <; >=; <=
console.log(compare);
console.log(compare2);
console.log(typeof compare, typeof compare2);
// ++; --
// ++i; i++ // tang gia tri cua bien i len 1 don vi 
// --j; j-- // giam gia tri cua bien j xuong 1 don vi
// ++i : tang ngay gia tri cua bien i len 1 don vi truoc khi du dung no
// i++ : gia tri cua bien i chua duoc tang ngay, doi khi bien i duoc su dung thi gia tri moi duoc tang len
let i = 5;
let j = 6;
let r = (++i) + (--j) - (i++) + (++j) + (j++) - (i++) - (--i);
//        6   +  5    -  6    +   6   +   6   -   7   -   7
let u = 1;
let v = 2;
let k = (u++) + (v++) + (++u) - (--v) - (u--) + (--u) - (--v);
//        1   +   2   +   3   -  2    -  3    +   1   -  1
console.log(r);
console.log(k);
let check = r > k && 5 < 6;
let check2 = r < k || 5 < 6;
console.log(check);
console.log(check2);