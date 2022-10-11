myFn();
console.log(num, ' from var');
var num = 10;
console.log(num, ' from var');
{
    console.log(num, ' from block');
    var num = 20;
    console.log(num, ' from block');
}

function myFn() {
    console.log(num, ' from function');
    num = 30;
    console.log(num, ' from function');

}

// the above program will be interpreted as

// myFn();
// var num;
// console.log(`${num} from var`);
// num = 10;
// console.log(`${num} from var`);
// {
//     console.log(`${num} from function`);
//     num = 20;
//     console.log(`${num} from function`);
// }

// function myFn() {
//     var num;
//     console.log(`${num} from function`);
//     num = 30;
//     console.log(`${num} from function`);

// }
