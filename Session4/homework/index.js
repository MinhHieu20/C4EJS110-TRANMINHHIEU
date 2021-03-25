//// bai1
{
  const product = {
    name:'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white',
    };
    for(let x in product) {
       console.log(x);
    }
}
console.log('In ra những thuộc tính của object')
{
    const product = {
        name: 'Xiaomi rice cooker',
        price: 1700,
        brand: 'Xiaomi',
        color: 'White'
    };
    for( let x = 0;x < product.lenght;x++){
        console.log(`${x} + product[x]`)

    }
}
//bai2
{
    const task = {
        subject: 'Implement login feature',
        createdBy: 'Hoang Ngoc Duc',
        assignTo: 'Nguyen Phuong Nam',
        dueDate: '2019-10-08T18:00:24+0000',
        expectedHours: 0.5,
        };
        var { subject:foo ,dueDate: bar } = task
        console.log(foo);
        console.log(bar)
}
//bai 3
 
      var  benefits = [
        {
            benefitIconName: 'fa-dollar',
            benefitName: 'Bonus',
            benefitValue: '14 tháng lương, đánh giá tăng lương 2 lần/ năm',
            benefitId: 1
        },
        {
            benefitIconName: 'fa-user-md',
            benefitName: 'Healthcare Plan',
            benefitValue: 'Hưởng đầy đủ các loại bảo hiểm theo quy định của nhà nước, các trợ cấp theo quy định của công ty',
            benefitId: 2
        },
        {
            benefitIconName: 'fa-file-image-o',
            benefitName: 'Paid Leave',
            benefitValue: 'Có cơ hội học hỏi nâng cao kiến thức chuyên môn và cơ hội thăng tiến',
            benefitId: 3
        }
        
    ],
bai4
{
    var kvarr = {
    debug : 'The process of figuring out why your program has a certain error and how to fix it',
    done  : 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed',
    defect : 'The formal word for ‘error’',
    pm : 'The short version of Project Manager, the person in charge of the final result of a project',
    'ui/ux' :'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels', 
}
      alert('Hi there, this is dev dictonary');
      var work =prompt('Enter a keywork');
      if(kvarr[work]){
         alert(`${work} \n ${kvarr[work]} `)
     }
     else 
         alert(`We could not find your word: ${word}`)
 

    {
     alert('Hi there, this is dev dictonary');
    var work =prompt('Enter a keywork');
    if(kvarr[work]){
        alert(`${work} \n ${kvarr[work]} `)
    }
    else 
    {let  keyw =prompt(`We could not find your work:${work}, leave your explanation`);
      if( keyw == null){
          alert('NO')
      } else {
          kvarr[work] = keyw;
        alert('Done');
      }
        kw =prompt('Enter a keywork');
        if(kvarr[work]){
            alert(`${work} \n ${kvarr[work]} `)
        }
        else 
             alert(`We could not find your word: ${word}`)
        }
    }
}
//bai 5
{
    let pro =[
      {  
        Name : 'Xiaomi portable charger 20000mah',
        brand : 'Xiaomi',
        price : 428,
        color : 'White',
        category : 'charger'
    },
    {
        Name : 'VSmart Active 1',
        brand : 'VSmart',
        price : 5487,
        color : 'Black',
        category : 'Phone'
    },
    {
        Name: 'Iphone X',
        brand: 'Apple',
        price: 21490,
        color: 'Gray',
        category: 'Phone'
    },
    {
        
        Name: 'Samsung Galaxy A9',
        brand: 'Samsung',
        price: 8490,
        color: 'Blue',
        category: 'Phone'
    }
];
//5.1
   for(let i of pro){
       console.log('----------------')
       var { Name,price } = i
       console.log(`name: ${Name}`);
       console.log(`price: ${price}`);
   }
//5.2  
   for(let i in pro){
    var { Name,price } = pro[i]
    console.log(`#${Number(i) + 1}. ${Name} `);
    console.log(`price: ${price}`);
}
   console.log('---------------')
   let position = prompt('Enter product position')
   for( let x in pro[position -1]){
    console.log(`${x}: ${pro[position - 1][x]}`);
   }
 //5.3
let cate = prompt("Enter your category").toLowerCase();
let check = false;
for (let x of pro) {
    if (x.Category.toLowerCase() == cate) {
        check = true;
        console.log('---------------------------------');
        let { Name, price } = x;
        console.log(`Name: ${Name}`);
        console.log(`price: ${price}`);
    }
}
if (!check) {
    console.log(`Have not category product: ${cate}`);
}
//5.4
    pro[0].Providers = ['Phukienzero', 'Dientuccc'];
    pro[1].Providers = ['Tgdd', 'Ddghn', 'VhStore'];
    pro[2].Providers = ['Tgdd'];
    pro[3].Providers = ['Tgdd'];
     for (let i in pro) {
      let { Name, price, Providers } = pro[i];
        console.log(`#${Number(i) + 1}. ${Name}`);
        console.log(`    Price: ${price}`);
        console.log(`    Providers: ${Providers.join(" ")}`);
}
 //5.5


 }
 //bai 6.1
 {
     let learn = [
         {
            task: 'html',complete : false
         },
         {
            task : 'css',complete :false
         },
         {
            task : 'basics of JavaScript', complete : false

         },
         {
             task : 'Package Manger', complete :false
         },
         {
             task : 'Git', complete :true
         },
     ];
     console.log("Hi there, this is your learning tasks to front-end developer career:");
      for(let i in learn){
        console.log(`#${Number(i) + 1}. ${learn[i].task} `);
        console.log(`   Complete: ${learn[i].Complete}`);
  }
 }
