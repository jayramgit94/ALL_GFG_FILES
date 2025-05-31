const loggedInStatus = {
    isLoggedIn: false,
};

const admin = {
    isAdmin : true,
    __proto__ : loggedInStatus,
};

const user = {
    name : "jayram",
    role : "student",

    __proto__ : admin,
};

console.log(user);

console.log(user.isAdmin);
console.log(user.isLoggedIn);

