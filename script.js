let marks = [10, 20, 30, 28, 26, 16, 39, 40, 28, 30];
 let pass  = marks.filter((i)=>{
    if (i>=16){
         console.log(i,'pass')
     }
     else{
       console.log(i,'fail')
     }
 });
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum); 