//Init  
{
     let menu =['tho san quai vat', 'Averger: End game', 'dao hai tac'];
 console.log(m/enu); }

//Create  
{ let phim = prompt('enter phim moi'); 
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
