// Tim hieu ve object trong js
let person = {}; // object - kieu du lieu : object
let student = {
    name: "Thanh Trieu", // thuoc tinh, trang thai
    age: 36,  // thuoc tinh, trang thai
    address: "Ha Noi",  // thuoc tinh, trang thai,
    "my money": 100, // ko nen nhu vay
    myMoney: 1000,
    learning: function(){ // method - ham(function)
        return "JS"
    },
    playSport: () => {
        return "Football"
    },
    getName: function(){
        return this.name;
    }
};
// truy cap vao thuoc tinh hay cac phuong thuc
console.log(student.name, student["name"]);
console.log(student["my money"])
console.log(student.playSport(), student.getName());
// bo sung them thuoc tinh hay phuong thuc
student.school = "CD Tra Vinh"; // thuoc tinh
student.exame = function(){ // phuong thuc
    return "Frontend Web";
}
// ket hop giua array vs object
let productions = [
    {id: 1, name: "Iphone X", price: 100},
    {id: 2, name: "Galaxy S20", price: 120},
    {id: 3, name: "Bphone", price: 50},
    {id: 4, name: "Iphone 17", price: 1000},
    {id: 5, name: "Sony", price: 80}
];
// loc ra tat ca cac san pham co gia tu 100 tro len
const dataPd = productions.filter( p => p.price >= 100);
console.log(dataPd);
// tim ra san pham dau tien co gia tren 80 tro len
const pd1 = productions.find(p => p.price > 80);
console.log(pd1);

const product = productions.map(product => `
    <tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
    </tr>
`);
console.log(product);