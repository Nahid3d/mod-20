// function evenSizeString (str){
//     const size =  str.length;
//     console.log(size,str);
//     if(size % 2 === 0){
//         console.log('even number');
//         return true;

//     }
//     else{
//         console.log('odd number');
//         return false;

//     }
// }
// console.log(evenSizeString("ami"));
// console.log(evenSizeString("tomi"));




function evenSize(price){
    const size = price.length;
    console.log(size,price);
    if(size % 2 === 0){
        console.log('even number:');
        return true;

    }
    else{
        console.log('odd number:');
        return false;

    }
}
console.log(evenSize('Bangladesh'));
console.log(evenSize('nepal'));