//Init  
{
     let menu =['tho san quai vat', 'Averger: End game', 'dao hai tac'];
 console.log(menu); }

//Create  
{ 
    let menu =['tho san quai vat', 'Averger: End game', 'dao hai tac'];
    phim = prompt('enter phim moi'); 
     menu.push(phim);
    console.log(menu); }

//Read    
 {
   let i =prompt('Chon phim')
    for(let i = 0; i < menu.length; i++ ){
  console.log(menu[i]);}
  }

//Update1
 {
  let menu =['tho san quai vat', 'Averger: End game', 'dao hai tac'];
   console.log(menu);
  let movieTitle =prompt('Enter movie:');
  menu[0] = movieTitle; 
    console.log(menu);
}

//update2
{
    let menu =['tho san quai vat', 'Averger: End game', 'dao hai tac'];
  let n = prompt('Nhap vi tri n:') 
  let update = prompt('Nhap phim moi') 
  for(let i = 0; i < menu.length; i++)
    menu[n-1] = update;
    console.log(menu);
}
//delete1
{
    let menu =['tho san quai vat', 'Averger: End game', 'dao hai tac'];
    let n = prompt('Enter n:')
    for(let i = 0; i < menu.length;i++)
    menu.splice(n);
    console.log(menu);
}
//delete2
{
    
    let x =prompt('Nhap vi tri i');
    let n =prompt('Nhap so phan tu xoa');
    let menu =['tho san quai vat', 'Averger: End game', 'dao hai tac'];
    for(i = 0;i < menu.length;i++)
    menu.splice(x-1,n);
    console.log(menu);
}
//Read1
{
    let menu =['tho san quai vat', 'Averger: End game', 'dao hai tac'];
    for(let i = 0;i <menu.length;i++){
        console.log(menu[i]);
    }
}
//Read2
{
    let menu =['tho san quai vat', 'Averger: End game', 'dao hai tac'];
    for(let i =0;i <menu.length/2;i++){
        console.log(menu[i]);
    }
}
//Read 3
{
     let menu =['tho san quai vat', 'Averger: End game', 'dao hai tac'];
      for(let i =0;i <menu.length;i++){
        console.log(`${i+1}. `+menu[i]);
      }
 }
//UpdateAll
{
  let menu =['THO SAN QUAI VAT', 'AVERGER: End game', 'DAO HAI TAC'];
  console.log(menu.toL)
}
//Purpose
{
  
  while(true){
     let ten = prompt('Nhap ten nguoi dung(15 characters )');
     if(ten.length <= 15)
     {
         alert('Good name'); 
      console.log('How many legs does a spider have?');
      let answer =['None', '4 legs', '8legs', '12legs'];
      for(let i = 0;i <answer.length;i++){
        console.log(`${i+1}. `+answer[i]);
     }
     while(true)
     {
         let reply = prompt('Your answer is:');
         if(reply<1 || reply >4)
         {
             console.log('Invalide choice, the answer must be 1, 2, 3 or 4');
         }
         else if (reply!==3)
         {
             console.log('Good luck next time'); 
         }
         else
         {
             console.log('Bravo, you are correct');
             break; 
         }
         break;
     }
     break;
 }
 else
 {
     alert('Your username is too long!');
 }
 }
}

//bai 1
{
    let a = 5;
    let b = 6;
    {let temp;// su dung bien tam thoi
    temp = a;
    a = b;
    b = temp; 
    console.log(a,b);}
    {
    let a1 = 1;
    let b2 = 2;
    a1 = a1 + b2;
    b2 = a1 - b2;
    a1 = a1 - b2;
    console.log(a1,b2);}

}

//bai2
{
    const s = "Hello beauty there";
    const r = s.split(" ");//tach tung mang 
    const r1 = s.split("");//tach ca khoang trang
    const r2 = s.split(" ",2);//tach o gioi han
    const r3 = s.split("e");//lay chu cai lam dau phan tach
    console.log(r,r1,r2,r3);
}

//bai3
{
    const a = [4, 5, 7, -8];
    console.log(...a);
}

//bai4
{
    var Items = ['Jeans', 'T-shirf', 'Socks']
    while(true){
         question =prompt('Hi there, Wecome to shop admin panel.What do you want(c,r,u,d)?')
        if(question == 'e'){
            alert('This command is not supported');
        } else if(question == 'r'){
            for(i in Items){ 
                console.log(`${Number(i)+1}. ${Items[i]}`)
            }
        }else if(question == 'c'){
            let newItems = prompt('Enter the name of the new items')
            Items.push(newItems);
            alert('Done');
        }else if(question == 'u'){
            let n =prompt('Enter the position you want to update:')
            Items[n]=prompt('Enter the new name:')
            alert('Done');
        }else if(question == 'd'){
            let x = prompt('Enter the position you want to delete:')
            Items.splice(x);
            alert('Done'); 
        }
    }
}

//bai5
{
    let n =prompt('Enter a sequence of numbers,separated by commas,')
    let array = n.split(",")
    let sum = array.reduce((sum,value) => Number(sum) + Number(value));
    alert(sum);
}

//bai 6
{
     n =prompt('Enter a sequence of numbers, separated by "," ')
     var array = n.split(",");
     let min = array.sort((min,value) => Number(min)-Number(value));
    alert(min[0]); 
}

//bai7
{
    const arr =[3, 4, 6, -9, 10, -88, 2];
    let x =Number(prompt("Enter a number element number "))
    var search = arr.indexOf(x)
    if(search != -1){
        alert(`${x} is found in my array at index ${search}`);
    } 
    else 
    alert(`${x} is not found in my array`)
}
 
//bai 8
{
    var arr = [ 5, 7, 300, 90, 24, 50, 75]
    {
    alert(`Hello,My name is Minh Hieu and here is my sheep sizes:${arr.join("  ")}`)
}
    
    {
        let max = arr.sort((max,value) => Number(value) - Number(max))
    alert(`Now my biggest sheep sizes ${max[0]}, let's shave it`); 
}
    {
    let search= arr.indexOf(arr.sort((max,value) => Number(value) - Number(max))[0])
    arr[search] = 8
    alert(`After shearing, here is my flock ${arr.join(" ")}`)
}
    for( let i = 1;i < arr.length;i++){
        arr[i] += 50;
        alert(`One month has, my sheeps have grown, here are their sizes ${arr.join(" ")}`)
}
    for(let i = 2;i <=3 ;i++){
        let max = arr.sort((max,value) => Number(value) - Number(max))
        alert(`Now my biggest sheep sizes ${max[0]}, let's shave it`); 
        let search= arr.indexOf(max[0])
        arr[search] = 8
        alert(`After shearing, here is my flock ${arr.join(" ")}`)
    for( let i = 0;i < arr.length;i++){
        arr[i] += 50;
        alert(`One month has, my sheeps have grown, here are their sizes ${arr.join(" ")}`) }
}
    let sum = 0;
    for(i = 0 ; i < arr.length;i++){
        arr[i] = Number(arr[i]);
        sum +=arr[i];
        console.log(`My flock has size in total: ${sum}`);
        console.log(`I would get ${sum} * 2$ = ${sum*2} `)
    }
}

//bai10
{
    let name =String(prompt('Enter a sequence of names'));
    let aName = name.split(",");
    for(i=0;i<aName.length;i++)
    {
        aName[i]= '<'+aName[i]+'>';
    }
    alert(name+'=>'+aName);
}

//bai11
{
    let number = prompt('Enter a sequence of number')
    let anumber = number.split(",")
    let add = [];
    for(i = 0;i < number.length; i++){
        if(anumber[i]%2 !=0){
            add.push(anumber[i]);
        }
    } 
    alert(number+'=>'+add);
}