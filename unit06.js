// Tim hieu ve object trong js
let person = {}; // object - kieu du lieu : object
let student = {
    name: "Thanh Trieu", // thuoc tinh, trang thai
    age: 36,  // thuoc tinh, trang thai
    address: "Ha Noi",  // thuoc tinh, trang thai,
    "my money": 100, // ko nen nhu vay
    myMoney: 1000,
    learning: function(){ // metthod - ham
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
    {id: 3, name: "Bphone", price: 50}
];
productions.map(product => {
    console.log(product.name); // hien thi tat ca ten cac san pham
})