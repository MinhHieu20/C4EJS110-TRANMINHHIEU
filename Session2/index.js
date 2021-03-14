 //cau1
 {
     let a ="let, var, const là các từ câu lệnh ở đầu mỗi biến trong js";
    let b = "-var được khai báo lại trong phạm vi toàn cầu còn let không được khai báo lại trong phạm vi khối";
    let c = " -let có thể gán lại giá trị còn cost thì không thể gán lại giá trị";
    let d ="var, let, const được sử dụng trong các trường hợp khai báo một biến";
    console.log(a)
   console.log(b);
    console.log(c);
    console.log(d)
 }
 //cau2
 {
     let a = " Boolean là kiểu toán tử logic và có hai giá trị là: True hoặc False";
    console.log(a);
    console.log('kết quả của Boolean là ra có/không; đung/sai ')
 }
 //cau3
 //ý a
 {
    for(let x = 0;x < 7;x++)
       console.log(x)
 }
 //ý b
{
   var n =Number
    var n =prompt("Enter a number");
   for(let x = 0;x < n;x++)
       console.log(x);
 }
 //ý c
  {
    var str = Number;
  var str =prompt("Enter n");
    for(let x = 3;x < str;x++)
      console.log(x);
 }
//ý d
  {
    var c = String(Number);
    var c =prompt("Enter c")
   var n = String(Number);
   var n =prompt("Enter n");
  for(let x = c;x < n;x++)
       console.log(x);
 }
 //ý e 
 {

 }
 //ý d
 {

 }
//cau 4
  {
     var n = Number;
    var gt =1 
      var n = prompt("Enter a number")
     for(let i = 1;i <=n;i++)
       gt*=i;
       alert(gt);

// }
 //cau 5
 {
     var age = prompt(" How old are you");
     if(age<14){
         alert("You are not old enough to view the content ")
     }else alert("you are old enough to view the content")
 }
//cau6
 {
    var x =prompt("Enter a number") ;
     if(x < 4) {
         alert("Lower half of 9")
     }else if(4.5 < x < 9){
         alert("Hight half of 9")
    }
  }
//cau 7
 {
      x = Number;
    var x =prompt("Enter x")
     n = Number;
    var n =prompt("Enter n")
    if(n < x){
        alert(x +""+ ("is hight half of") +""+ n)
    }else if(x < n){
        alert(n +" "+ ("is lower half of") +""+ x)
    }
}
//cau 8
{
    x = Number;
    var x = prompt(" ENter a number")
    if(x % 2 == 0){
        alert(x +" "+ (" is an even number"))
    }else alert(x +" "+ (" is an odd number"))
}
//cau 9
//ý a
{
    for(let h=1; h <=6;h++){
        if(h<=3){
            console.log('L')
        }else console.log('H')
    }
}
//ý b
{
    
    let x = Number(prompt('nhập số in ra L và H'));
    let l,h;
    for(l = 0;0 <= l & l < x;l++){
        if(l< x/2){console.log('L');}
     else  console.log('H')}
}
//ý c
{
    for (var lh = 1; lh <= 8; lh++) {
    if (lh < 5) {console.log('0');}
    else {console.log('1');}
}
//ý d
{
    var p = prompt('Viết số vào đây');
for (let p1 = 1; p1 < p; p1++) {
    if (p1 % 3 == 0) {
        console.log("1");
    }
    else {
        console.log("0");
    }
}
}
//cau 10
{
    w = Number;
    var w = prompt(" Enter weight is kg")
    h = Number;
    var h = prompt("Enter height is cm")
    var BMI=( w /((h*0.01) * (h*0.01)));
    Math.ceil(BMI);
    alert(Math.ceil(BMI));
   if(BMI < 16){
       alert("thieu can nang")
   }else if(BMI< 18){
       alert("thieu can")
   }else if( BMI< 25){
       alert("binh thuong")
   }else if(BMI< 30){
       alert("thua can")
   }else alert("beo phi")
}}}