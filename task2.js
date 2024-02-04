// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
// একটি সংখ্যা নিন যদি সংখ্যাটি বিজোড় হয় তবে এটিকে 2 দ্বারা গুণ করুন এবং ফলাফলটি ফেরত দিন। সংখ্যাটি এমনকি যদি হয় তবে এটিকে দুই দ্বারা ভাগ করুন এবং ফলাফলটি ফেরত দিন।

function randomNumber(number){
    if(number % 2 === 0){
        return number * 2;
    }
    else{
        return number / 2;  
    }
}
const newnumber = 13;
const result = randomNumber(newnumber);
console.log(result);




// function randomNumber(number){

//     if(result % 2 === 1){
//       const result = num * 2;
//       console.log(result)
//     }
//     return result;

// }
// const num = 253;
// randomNumber(num);
// console.log(result)
// console.log(num);

// function randomNumber(numbers){
// let sum = 0;
//     for(const number of numbers){
//         console.log(number);
//         sum = sum * num;
//         if(number % 2 === 1){
//             // console.log('total :' sum)
            
//         }

//     }
// }
// const num =253;
// randomNumber(num);
// console.log(numbers);
