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

    const d = document.getElementById('msg')//read dom
    // d.textContent ='Hi there';//update
    // d.addEventListener('click', () => {
    //     alert('Minh Hieu')
    // });//chieu su kien
    d.insertAdjacentHTML('beforeend',`
    <div> Cool </div> `)