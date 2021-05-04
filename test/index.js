// //Ý A_1
// const findOppositeNumber = (n, inputNumber) => {
//     const flag = n/2;
//     if(inputNumber >= flag){
//         console.log (inputNumber - flag);
//     }
//     else{
//         console.log (inputNumber + flag);
//     }
// }

// findOppositeNumber(10,2);
// findOppositeNumber(10,6);


// //Ý A_2
// const merge2String = (string1, string2) => {
//     const array1 = string1.split('');
//     const array2 = string2.split('');
//     let max = Math.max(array1.length, array2.length);
//     let string = '';
//     for (let i = 0; i < max; i++) {
//         if (array1[i] === undefined) {
//             array1[i] = '';
//         }
//         if (array2[i] === undefined) {
//             array2[i] = '';
//         }
//         string = string + array1[i] + array2[i];
//     }
//     console.log(string);
// }

// merge2String("abc", "123");
// merge2String("abc", "0123");
// merge2String("abcd", "123");


//Ý B
let num;
let dem=0;
let myNum = document.getElementById("myNumber");
  myNum.addEventListener('keyup',()=>{
    return myNum.value;
})
let btn=document.getElementById("btn");
btn.addEventListener('click',()=>{
    num=Math.floor(Math.random()*10) + 1; 
    dem++;
    if(myNum.value == num){
        alert("Chọn rồi");
    }
    else alert(`Sai rồi. Kết quả đúng là ${num}`);
    if(dem == 3){
        alert(`Game over`);
    }
})