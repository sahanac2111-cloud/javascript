let arr=[12,89,99,67];
let max=arr.reduce((large,current) => {
    return current <large ? current : large
});
console.log(max);