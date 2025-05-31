// let obj = {
//     name : " jayram",
//     address : {
//         state:"mh",
//         city : "nagpure",
//         loacality : "jalgoan"
//     },
//     courses : ["java","python","nodejs"]
// }
// let {name  , courses} = obj;
// console.log(name);//jayram
// console.log(address);//{ satte: 'mh', city: 'nagpure', loacality: 'jalgoan' }


// let {address} = obj;
// console.log(address);//{ satte: 'mh', city: 'nagpure', loacality: 'jalgoan' }
// let {name, ...rest } = obj;

// console.log(name );
// console.log(rest);



// the typof of name is string and the typeof course and of address is object
// console.log(typeof name );
// ia m changing the name into a variable username 


// let {name : usereNmae } = obj;// here i am changing the name into a variable username
// console.log(usereNmae);//jayram
// console.log(name);//undefined


// let {address : {state}} = obj;



// let numbers = [ 1,2, 3,4];
// let [a,b,c,d] = numbers;

// console.log(a);//1













const employees = {
    engineers :{
        en1:{
            name : "jayram",
            age : 23,
            salary : 5000000
        },
        en2:{//property
            name : "sagar",
            age : 23,
            salary : 500000
        }
    },
    hr:{
        en3:{
            name : "Om solanke",
            age : 23,
            salary : 50000
        },
        en4:{
            name : "ketan",
            age : 23,
            salary : 5000
        }
    },
    sales:{
        en5:{
            name : "ram",
            age : 23,
            salary : 500
        },
        en6:{
            name : "shaam",
            age : 23,
            salary : 50,
            achivement:{
                first:"best employee",
                second:"best employee of the year",
            }
        }
    }
}

// let {sales:{en6:{name, age}}}= employees;
// console.log(name, age);//shaam

let {sales:{en6:{achivement:{first}}}}= employees;
console.log(first);//shaam


// let{sales:{en5}} = employees;
// console.log(en5);



// let {engineers:{en2:{name,salary}}} = employees;
// console.log(name,salary);//sagar 500000

// let {hr: {en3:{name}}}= employees;
// console.log(name);//Om solanke



















