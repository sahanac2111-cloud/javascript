let users = [
    {name:"Ram", active:true},
    {name:"John", active:false},
    {name:"Sara", active:true}
];

let activeUsers = users.filter(user => user.active);

console.log(activeUsers);