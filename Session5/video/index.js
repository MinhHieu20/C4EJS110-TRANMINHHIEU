//video 1.1
{
    console.log(`First run: ${Math.random().toFixed(2)}`)
    console.log(`Second run: ${Math.random().toFixed(2)}`)
}

//video 1.2
{
    let array =[2,5,6,9,10];
    console.log(`First run: ${array[Math.floor(Math.random() * array.length)]}`)
    console.log(`Second run: ${array[Math.floor(Math.random() * array.length)]}`)
}

//video 1.3
{
    let question=[
        {
            quizzes:"Loài cá nào to nhất? ",
            listAnswer: ['cá mập', 'cá voi', 'cá nhà táng', 'cá voi lưng gù'],
            answerCorrect: 4
        },
        {
            quizzes: "Bỏ ngoài nướng trong, ăn ngoài bỏ trong là gì?",
            listAnswer: ['Nướng ngô', 'Nướng khoai', 'Nướng sắn', 'Nướng khai tây'],
            answerCorrect: 1
        },
        {
            quizzes: "Quốc gia dự trữ vàng lớn nhất thế giới",
            listAnswer: ['Italy', 'ức', 'Mỹ', 'Pháp'],
            answerCorrect: 3
        },
        {
            quizzes:"Quốc gia có diện tích lớn nhất?",
            listAnswer: ['Nga', 'Canada', 'Hoa Kỳ', 'Trung quốc'],
            answerCorrect: 1
        }
    ]
//video 1.4

   let que =Math.floor(Math.random() * question.length);
   let quzz=question[que];
   let res = quzz.quizzes;
   for(let i in quzz.listAnswer){
    res += `\n${Number(i) + 1}. ${quzz.listAnswer[i]}`;
}
   let ans = Number(prompt(res));
//video 1.5
    
     if (ans == que.answerCorrect) {
        alert("That's correct!");
      }
     else {
        alert("Not correct!");
      }
//video 1.6
let questionAnswer = {};
    let countQuestion = question.length;
    let countQuestionAnswer = 0;
    let countCorrect = 0;
    while (countQuestionAnswer != countQuestion) {
        let posRan = Math.floor(Math.random() * question.length);
        if (!questionAnswer[posRan]) {
            questionAnswer[posRan] = 1;
            countQuestionAnswer++;
            quzz = question[posRan];
            let res = quzz.quizzes;
            for (let i in quzz.listAnswer) {
                res += `\n${Number(i) + 1}. ${quzz.listAnswer[i]}`;
            }
            let ans = Number(prompt(res));
            if (ans == quzz.answerCorrect) {
                countCorrect++;
            }
        }
    }
    alert("We are out of question!");

//video 1.7
    alert(`You answered correctly ${countCorrect} out of ${question.length} questions.`)

//video 2.1
{
    let word =['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool','hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color','now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
    let countWord = {};
    for(let x of word){
        if(countWord[x]){
            countWord[x] ++;
        }
        else{
            countWord[x] = 1;
        }
    }
    for(let x in countWord){
        console.log(`${x}: ${countWord[x]}`);
    }
}
// video 2.2
{
    const inventory = [
        {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
        },
        {
            name: 'Dell XPS 9370',
            price: 30000,
            brand: 'Dell',
            quantity: 1,
            },
            {
            name: 'Dell Inspiron 3567',
            price: 9300,
            brand: 'Dell',
            quantity: 12,
            },
            {
            name: 'Dell Latitude E5450',
            price: 8600,
            brand: 'Dell',
            quantity: 2,
            },
            
            {
            name: 'Asus Zenbook',
            brand: 'Asus',
            price: 20000,
            quantity: 4,
            },
            {
            name: 'HP Pavilion',
            brand: 'HP',
            price: 14000,
            quantity: 7,
            },]
//video 2.3
    let inventoryByGroup ={};    
    for(let i of inventory){
        let brand = i.brand.toLocaleLowerCase();
        if(!inventoryByGroup[brand]){
        inventoryByGroup[brand] = [];
        inventoryByGroup[brand].push(i);
    }
    else{
        inventoryByGroup[brand].push(i)
    }
}
    console.log(inventoryByGroup)
//video 2.4
         let brand = prompt("Which brand?");
             brand = brand.toLowerCase();
        if(inventoryByGroup[brand]){
    alert(`There are ${inventoryByGroup[brand].length} generations of '${brand.toUpperCase()}' in inventory`);
      }
       else{
    alert(`There are 0 generations of '${brand.toUpperCase()}' in inventory`)
     }
//video 2.5
       let brand = prompt("Which brand?");
         brand = brand.toLowerCase();
         if(inventoryByGroup[brand]){
        let geren = "";
          for(let x of inventoryByGroup[brand]){
            geren += x.name + `\n`;
        }
         alert(`There are ${inventoryByGroup[brand].length} generations of '${brand.toUpperCase()}' in inventory:\n${geren}`);
      }
       else{
        alert(`There are 0 generations of '${brand.toUpperCase()}' in inventory`)
        }
//video 2.6
        let brand = prompt("Which brand?");
            brand = brand.toLowerCase();
        if(inventoryByGroup[brand]){
            let geren = "";
            let detai = 0;
        for(let x of inventoryByGroup[brand]){
            geren += x.name + `\n`;
            detai += x.quantity * x.price;
        }
            alert(`There are ${inventoryByGroup[brand].length} generations of '${brand.toUpperCase()}' in inventory:\n\n${geren}\nWith total value: ${detai}K`);
        }
        else{
            alert(`There are 0 generations of '${brand.toUpperCase()}' in inventory`)
        }
//video 2.7
        let brand = prompt("Which brand?");
        brand = brand.toLowerCase();
        if(inventoryByGroup[brand]){
            let geren = "";
            let detai = 0;
        for(let x of inventoryByGroup[brand]){
            geren += x.name + `\n`;
            detai += x.quantity * x.price;
        }
            detai = detai * 1000;
            alert(`There are ${inventoryByGroup[brand].length} generations of '${brand.toUpperCase()}' in inventory:\n\n${geren}\nWith total value: ${detai.toLocaleString("da-DK")}VND`);
        }
        else{
            alert(`There are 0 generations of '${brand.toUpperCase()}' in inventory`)
        }
    }}