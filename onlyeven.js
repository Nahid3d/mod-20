function onlyEvenNumber(numbers){
    let sum =0;
    for(const number of numbers){
        
        console.log(number);
        sum = sum + number;

        if(number % 2 === 0){
            console.log("even number",number);
        }
        
    }return sum;
  

}
const number =[3,7,8,5,65,22,4,72,44];
const sum = onlyEvenNumber(number);
console.log(sum);