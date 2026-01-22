// let fruits = ['apple','banana','cherry']
// let removed = fruits.pop();
// console.log(removed)
// wap to reverse the order and store it into a new array 
// let arr = [1,2,3,4,5];
// let new_arr = [];
// while (arr.length > 0) {
//     new_arr.push(arr.pop())
// }
// console.log(new_arr);
// let arr = [1, -2, -3, -4, 2, 3, 4, 5, 6]
// let res = []
// while (arr.length > 0) {
//     let val = arr.shift()
//     if(val>0){
//         res.push(val)
//     }
// }
// console.log(res)
let arr = [1,2,3,4,5,4,3,2,1]
let original = []
let reverse = []
for (let i=0;i<arr.length;i++){
    original.push(arr[i])
}
while(arr.length>0){
    reverse.push(arr.pop())
}
for(i=0;i<original.length;i++){
    if(original[i] !==reverse[i]){
        console.log("not a palindrome")
        break;
    }
    else(
        console.log("palindrome")
    )
}

// remove all duplicate elements from the array 
//split even and odd numbers from an given array 
//move all zero end of an array