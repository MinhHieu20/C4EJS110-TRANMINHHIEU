// // function hinam(){
// //     alert('Hi nam');
// //     alert('Nam, function is great')
// // }
// function sayhi(name){
//     alert('hi' + name);
//     alert(`${name}, function is great`)
// }
// // sayhi('nam', 'Function is great')
// // sayhi('duyen', 'you look great')
//    let x= sayhi;
//     x('Hello');
// function sayHi(name){
//     alert('Hi' + name);
// }

// function sayGoodBye(name){
//     alert('GoodBye' + name);
// }

// function testSay(f){
//     alert(' Here I say');
//     f('hieu');
// }

//     testSay(sayHi);
//     testSay(sayGoodBye);

    // const d = document.getElementById('msg')//read dom
    // d.textContent ='Hi there';//update
    // d.addEventListener('click', () => {
    //     alert('Minh Hieu')
    // });//chieu su kien
    // d.insertAdjacentHTML('beforeend',`
    // <div> Cool </div> `)
    const result = fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
    console.log(result);
    async function load(){
        const conn = await result;
        const data = await conn.json();
        console.log(data.moves[0].move.name);
        var btn = document.getElementById('btn');
        for(let i in data.moves[0].move.name){
            btn.insertAdjacentHTML('beforeend',`${i}`)
        }
        // btn.innerHTML = data.moves[0].move.name;

    }
    load();    