// function primes(arr) {
//     let arrayEle = [];
//     arr.forEach((num)=>{
//         let fact = 0
//         for (let i = 0; i <= num; i++) {
//             if ((num % i )=== 0) {
//                 fact++
//             }
//         }
//         if (fact === 2) {
//             arrayEle.push(num)
//         }
//     })
//     console.log(arrayEle)
// }
// primes([12,33,11,7,9,8,2])


// function toUpperStr(arr){
//    arr.forEach((a)=>{
//     console.log(a.toUpperCase())
//    })
// }
// toUpperStr(['the','basine','bridge','is','near','to','Home Town'])

const longEle=(arr) =>{
    let max=arr[0].length
    arr.map(ele => max= Math.max( max, ele.length))
    let result=arr.filter(ele => ele.length === max)
    console.log("the longest element of the array with",max,"elements is :" )
    return result;
}
const arr=['chandana','is','a','very','good','girl']
console.log(longEle(arr));


//  lengthOfList =(arr) =>{
//     let max=0;
//     arr.map(ele => max = max+ ele.length)
//     console.log("the length of given list is:",max )
  
// }
// const arr=['chandana','is','a']
// lengthOfList(arr);


// let arrStu=['aman','chandra','gopal','hari']
// let arrmar=[60,70,80,50]
// let max=0;
// flag=-1
// for(let i=0;i<arrmar.length;i++){
//     if(max<arrmar[i]){
//         max=arrmar[i]
//     }
//     flag++
// }
// console.log("The student",arrStu[flag-1],"with highest marks is :",max)


// let arr=[3,4,-9,8,-6,-8,-10,-90]
// let pos=arr.map(a=>{
//     if(a<0){
//       a=-(a)
//       return a
//     }
//     else{
//         return a
//     }
// })
// console.log(pos)


// let a=['60%','90%','80%','12%','45%','55%']
// let arrfil=a.filter(arr =>{
//  if(arr >'70%'){
//     return arr
//  }
// })
// console.log(arrfil)