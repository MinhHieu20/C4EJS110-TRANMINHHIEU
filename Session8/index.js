// 1
var count = 0;
        var btnadd = document.getElementById("btnadd");
        var btnminus = document.getElementById("btnminus");
  		var result = document.getElementById("quantity");
  		
        btnminus.onclick = function () {
        	if(result.value>0){
        		result.value = parseInt(result.value)-1;
        	}
           return false;
        }
        btnadd.onclick = function(){
        	result.value = parseInt(result.value)+1;
           return false;
        }
// 2
{
   const input = document.getElementById("seconds");
   const start = document.getElementById("start");
   const stop = document.getElementById("stop");
   const view = document.getElementById("viewTime");
   let setTime;
   start.addEventListener('click', () => {
       let count = Number(input.value);
       view.textContent = count;
       setTime = setInterval(() => {
           view.textContent = --count;
       }, 1000);
       setTimeout(() => {
           view.textContent = "Time's up";
           clearInterval(setTime);
       }, Number(input.value) * 1000 + 500);
   });
   stop.addEventListener('click', () => {
       view.textContent = "Stopped";
       clearInterval(setTime);
   })
}

//3

let list = [
        {
            "quoteText": "Genius is one percent inspiration and ninety-nine percent perspiration.",
            "quoteAuthor": "Thomas Edison"
        },
        {
            "quoteText": "You can observe a lot just by watching.",
            "quoteAuthor": "Yogi Berra"
        },
        {
            "quoteText": "A house divided against itself cannot stand.",
            "quoteAuthor": "Abraham Lincoln"
        },
        {
            "quoteText": "Difficulties increase the nearer we get to the goal.",
            "quoteAuthor": "Johann Wolfgang von Goethe"
        },
        {
            "quoteText": "Fate is in your hands and no one elses",
            "quoteAuthor": "Byron Pulsifer"
        },
        {
            "quoteText": "Be the chief but never the lord.",
            "quoteAuthor": "Lao Tzu"
        },
        {
            "quoteText": "Nothing happens unless first we dream.",
            "quoteAuthor": "Carl Sandburg"
        },
        {
            "quoteText": "Well begun is half done.",
            "quoteAuthor": "Aristotle"
        },
        {
            "quoteText": "Life is a learning experience, only if you learn.",
            "quoteAuthor": "Yogi Berra"
        },
        {
            "quoteText": "Self-complacency is fatal to progress.",
            "quoteAuthor": "Margaret Sangster"
        },
        {
            "quoteText": "Peace comes from within. Do not seek it without.",
            "quoteAuthor": "Buddha"
        },
        {
            "quoteText": "What you give is what you get.",
            "quoteAuthor": "Byron Pulsifer"
        },
        {
            "quoteText": "We can only learn to love by loving.",
            "quoteAuthor": "Iris Murdoch"
        },
        {
            "quoteText": "Life is change. Growth is optional. Choose wisely.",
            "quoteAuthor": "Karen Clark"
        },
        {
            "quoteText": "You'll see it when you believe it.",
            "quoteAuthor": "Wayne Dyer"
        },
        {
            "quoteText": "Today is the tomorrow we worried about yesterday.",
            "quoteAuthor": ""
        },
        {
            "quoteText": "It's easier to see the mistakes on someone else's paper.",
            "quoteAuthor": ""
        },
        {
            "quoteText": "Every man dies. Not every man really lives.",
            "quoteAuthor": ""
        },
        {
            "quoteText": "To lead people walk behind them.",
            "quoteAuthor": "Lao Tzu"
        },
        {
            "quoteText": "Having nothing, nothing can he lose.",
            "quoteAuthor": "William Shakespeare"
        },
        {
            "quoteText": "Trouble is only opportunity in work clothes.",
            "quoteAuthor": "Henry J. Kaiser"
        },
        {
            "quoteText": "A rolling stone gathers no moss.",
            "quoteAuthor": "Publilius Syrus"
        },
        {
            "quoteText": "Ideas are the beginning points of all fortunes.",
            "quoteAuthor": "Napoleon Hill"
        },
        {
            "quoteText": "Everything in life is luck.",
            "quoteAuthor": "Donald Trump"
        },
        {
            "quoteText": "Doing nothing is better than being busy doing nothing.",
            "quoteAuthor": "Lao Tzu"
        },
        {
            "quoteText": "Trust yourself. You know more than you think you do.",
            "quoteAuthor": "Benjamin Spock"
        },
        {
            "quoteText": "Study the past, if you would divine the future.",
            "quoteAuthor": "Confucius"
        },
        {
            "quoteText": "The day is already blessed, find peace within it.",
            "quoteAuthor": ""
        },
        {
            "quoteText": "From error to error one discovers the entire truth.",
            "quoteAuthor": "Sigmund Freud"
        },
        {
            "quoteText": "Well done is better than well said.",
            "quoteAuthor": "Benjamin Franklin"
        },
        {
            "quoteText": "Bite off more than you can chew, then chew it.",
            "quoteAuthor": "Ella Williams"
        },
        {
            "quoteText": "Work out your own salvation. Do not depend on others.",
            "quoteAuthor": "Buddha"
        },
        {
            "quoteText": "One today is worth two tomorrows.",
            "quoteAuthor": "Benjamin Franklin"
        },
        {
            "quoteText": "Once you choose hope, anythings possible.",
            "quoteAuthor": "Christopher Reeve"
        },
        {
            "quoteText": "God always takes the simplest way.",
            "quoteAuthor": "Albert Einstein"
        },
        {
            "quoteText": "One fails forward toward success.",
            "quoteAuthor": "Charles Kettering"
        },
        {
            "quoteText": "From small beginnings come great things.",
            "quoteAuthor": ""
        },
        {
            "quoteText": "Learning is a treasure that will follow its owner everywhere",
            "quoteAuthor": "Chinese proverb"
        },
        {
            "quoteText": "Be as you wish to seem.",
            "quoteAuthor": "Socrates"
        },
        {
            "quoteText": "The world is always in movement.",
            "quoteAuthor": "V. Naipaul"
        },
        {
            "quoteText": "Never mistake activity for achievement.",
            "quoteAuthor": "John Wooden"
        },
        {
            "quoteText": "What worries you masters you.",
            "quoteAuthor": "Haddon Robinson"
        },
        {
            "quoteText": "One faces the future with ones past.",
            "quoteAuthor": "Pearl Buck"
        },
        {
            "quoteText": "Goals are the fuel in the furnace of achievement.",
            "quoteAuthor": "Brian Tracy"
        },
        {
            "quoteText": "Who sows virtue reaps honour.",
            "quoteAuthor": "Leonardo da Vinci"
        },
        {
            "quoteText": "Be kind whenever possible. It is always possible.",
            "quoteAuthor": "Dalai Lama"
        },
        {
            "quoteText": "Talk doesn't cook rice.",
            "quoteAuthor": "Chinese proverb"
        },
        {
            "quoteText": "He is able who thinks he is able.",
            "quoteAuthor": "Buddha"
        },
        {
            "quoteText": "Be as you wish to seem.",
            "quoteAuthor": "Socrates"
        },
        {
            "quoteText": "A goal without a plan is just a wish.",
            "quoteAuthor": "Larry Elder"
        },
        {
            "quoteText": "To succeed, we must first believe that we can.",
            "quoteAuthor": "Michael Korda"
        },
        {
            "quoteText": "Learn from yesterday, live for today, hope for tomorrow.",
            "quoteAuthor": "Albert Einstein"
        },
        {
            "quoteText": "A weed is no more than a flower in disguise.",
            "quoteAuthor": "James Lowell"
        },
        {
            "quoteText": "Do, or do not. There is no try.",
            "quoteAuthor": "Yoda"
        },
        {
            "quoteText": "All serious daring starts from within.",
            "quoteAuthor": "Harriet Beecher Stowe"
        },
        {
            "quoteText": "The best teacher is experience learned from failures.",
            "quoteAuthor": "Byron Pulsifer"
        },
        {
            "quoteText": "Think how hard physics would be if particles could think.",
            "quoteAuthor": "Murray Gell-Mann"
        },
        {
            "quoteText": "Love is the flower you've got to let grow.",
            "quoteAuthor": "John Lennon"
        },
        {
            "quoteText": "Don't wait. The time will never be just right.",
            "quoteAuthor": "Napoleon Hill"
        },
        {
            "quoteText": "One fails forward toward success.",
            "quoteAuthor": "Charles Kettering"
        },
        {
            "quoteText": "Time is the wisest counsellor of all.",
            "quoteAuthor": "Pericles"
        },
        {
            "quoteText": "You give before you get.",
            "quoteAuthor": "Napoleon Hill"
        },
        {
            "quoteText": "Wisdom begins in wonder.",
            "quoteAuthor": "Socrates"
        },
        {
            "quoteText": "Without courage, wisdom bears no fruit.",
            "quoteAuthor": "Baltasar Gracian"
        },
        {
            "quoteText": "Change in all things is sweet.",
            "quoteAuthor": "Aristotle"
        },
        {
            "quoteText": "What you fear is that which requires action to overcome.",
            "quoteAuthor": "Byron Pulsifer"
        }
    ] 
    const reload = document.getElementById("reload");
    const quoteText = document.getElementById("quoteText");
    const quoteAuthor = document.getElementById("quoteAuthor");
    let random = Math.floor(Math.random() * list.length);
    quoteText.textContent = list[random].quoteText;
    quoteAuthor.textContent = list[random].quoteAuthor;
    reload.addEventListener('click', () => {
        let random = Math.floor(Math.random() * list.length);
        quoteText.textContent = list[random].quoteText;
        quoteAuthor.textContent = list[random].quoteAuthor;
    });

//5.1
let timeSheetData = [
    {
        Project: "Learn front-end",
        Task: "Learn HTML",
        "Time Spent": 6
    },
    {
        Project: "Learn front-end",
        Task: "Learn CSS",
        "Time Spent": 8
    },
    {
        Project: "Learn front-end",
        Task: "Learn JS Variables and Data Types",
        "Time Spent": 6
    },
    {
        Project: "Learn git",
        Task: "Learn git basics",
        "Time Spent": 2
    }
]

function ex1() {
    console.log(timeSheetData);
}


//5.3

const tbody = document.getElementById("ts_tbody");
function ex3() {
    console.log(tbody);
}

//5.4

function ex4() {
    for (let i in timeSheetData) {
        tbody.insertAdjacentHTML('beforeend', '<tr></tr>')
    }
    const listTr = document.querySelectorAll("#ts_tbody tr");
    for (let i = 1; nodeTr = listTr[i]; ++i) {
        for (let pro in timeSheetData[i - 1]) {
            nodeTr.insertAdjacentHTML('beforeend', `<td>${timeSheetData[i - 1][pro]}</td>`)
        }
    }
}

function ex41() {
    const listTr = document.querySelectorAll("#ts_tbody tr");
    listTr[0].remove();
}

//5.5

function ex5(){
ex4();
ex41();
}

//5.6

const inputProject = document.getElementById("project");
const inputTask = document.getElementById("task");
const inputTime = document.getElementById("timespent");
const add = document.getElementById("add_btn");

function ex6() {
    add.addEventListener('click', () => {
        console.log(`${inputProject.value} ${inputTask.value} ${inputTime.value}`);
        timeSheetData.push({
            Project: inputProject.value,
            Task: inputTask.value,
            "Time Spent": inputTime.value
        });
        tbody.insertAdjacentHTML('beforeend', '<tr></tr>');
        const listTr = document.querySelectorAll("#ts_tbody tr");
        let last = timeSheetData.length - 1
        for (let pro in timeSheetData[last]) {
            listTr[last].insertAdjacentHTML('beforeend', `<td>${timeSheetData[last][pro]}</td>`)
        }
        document.getElementById("input").reset();
        console.log(timeSheetData);
    });
}

//5.7

function ex7() {
    const theadTr = document.querySelector("thead tr");
    theadTr.insertAdjacentHTML('beforeend', `<th>Actions</th>`);
    const listTr = document.querySelectorAll("#ts_tbody tr");
    for (let i = 0; nodetr = listTr[i]; ++i) {
        nodetr.insertAdjacentHTML('beforeend', `<td class="actions"><button class="remove" id="remove${i}">x</button></td>`)
    }
}
//5.8

function ex8() {
    let listRemove = document.querySelectorAll(".remove");
    const listTr = document.querySelectorAll("#ts_tbody tr");
    for (let i = 0; nodeMove = listRemove[i]; ++i) {
        nodeMove.addEventListener('click', () => {
            listTr[i].remove();
            let id = listRemove[i].id;
            let index = Number(id.slice(6, id.length));
            console.log(index);
            for (let j = i + 1; j < listRemove.length; ++j) {
                let tmp = Number(listRemove[j].id.slice(6, id.length));
                listRemove[j].id = "remove" + String(tmp - 1);
            }
            timeSheetData.splice(index, 1);
            console.log(timeSheetData);
        });
    }
}

