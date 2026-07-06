let phone = {
    brand: "Samsung",
    model: "S24",
    price: 80000
};
console.log(phone.model);
phone.price=75000;
phone.color="black";
delete phone.brand;
console.log(phone);
