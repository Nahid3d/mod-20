function evenNumber(numbers){
    let i = 0;
    for(const number of numbers){
        console.log(number);
      i = i + number;
    }
    return i;
}
const num=[4,4,5,2,3];
const i = evenNumber(num);
evenNumber(num);
console.log('total number:', i)



