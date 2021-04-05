// 1
function hw1(){
    const container = document.getElementById('list');
    for(let i = 0;i < 3;i++){
        container.insertAdjacentElement('beforeend', `<li>${i}</li>`);
    }
    console.log(container)
}

// 2
function hw2(){
    setInterval(() => {console.log('Mindx');},100)
}

// 3
function hw3(){
    console.log("NO");
    console.log("no");
}

// 4
function hw4(){
    var d = document.getElementsByTagName("*");
    document.getElementById("demo").innerHTML= d[3].innerHTML;
    console.log(d[1]);
    for( let i=0;i < d.length;i++){
        console.log(d[i])
    }
}

//5
function hw5(){
    var listclass = document.getElementsByClassName("singer");
    console.log(listclass[1]);
    for( let d of listclass){
        console.log(d)
    }
}

// 6
function hw6(){
    const hw = document.getElementById('hw-1');
    hw.remove();
}

//7.1
function hw71(){
    document.getElementById("button1").addEventListener('click', (e) => {
        console.log(e.target)
    });
    document.getElementById("button2").addEventListener('click', (e) => {
        console.log(e.target)
    })
}

//7.2
function hw72(){
    document.getElementById("keydown").addEventListener('click', (e) => {
        console.log(e.key);
    })
}

//8
function hw8(){
    alert('Minh Hieu')
}

//9
function hw9(){
    var name =prompt('nhap ten nguoi dung');
    alert(name)
    var wish =prompt('dieu uoc trong nam nay');
    alert(wish)
}

//10
function hw10(){
    var name =prompt('nhap ten nguoi dung');
    alert(name)
    var wish =prompt('dieu uoc trong nam nay');
    alert(wish)
}

//11
function hw11(){
  //11.2
    const upp = document.getElementById("upper");
    console.log(upp)
  //11.3
  upper.addEventListener('click', () => {
      console.log("Upper it!!! just click");
  });
  //11.4
  const name =document.getElementById("name-input");
  console.log(name)
  //11.5
  var name="";
  upper.addEventListener('input', (e) => {
    name = e.target.value;
});
    upp.addEventListener('click', () => {
      console.log(`user nam: ${name}`);
});
  //11.6
  upp.addEventListener('click', () =>{
      console.log(`User's name uppercase: ${name.toUpperCase()}`)
  })
  //11.7
  const apper = document.getElementById("apper");
  console.log(apper);
  //11.8
  upp.addEventListener('click', () =>{
      apper.textContent = name.toUpperCase();
  });
}

