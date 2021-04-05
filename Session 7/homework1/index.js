const listitem = ["Backpack", "MiBand watch", "Ring"];
 const listul = document.getElementById("Item-list-Ul");
 function hw12(){
     listul.insertAdjacentHTML('beforeend', `<li><span>Test item 1</span><li>`);
     listul.insertAdjacentHTML('beforeend', `<li><span>Test item 2</span><li>`);
 }
 function hw12_1(){
     //12.1
     console.log(listitem);
     //12.3
     console.log(listul);
 }
 //12.4
 function hw12_4_1(){
     for(let x of listitem){
         listul.insertAdjacentHTML('beforeend', `<li><span>${x}</span></li>`);
     }
 }
 function hw12_4_2(){
     const listli = document.querySelectorAll("#Item-list-Ul li");
     for(let i = 0;i < 2;i++){
         listli[i].remove();
     }
 }
 //12.6
 function hw12_6(){
     hw12_4_1();
     hw12_1();
     console.log(document.getElementById("Item-input"));
     console.log(document.getElementById("add-btn"));
 }
 //12.7
 const aditem = document.getElementById("add-btn");
 const input = document.getElementById("Item-input")
 function hw12_7(){
     hw12_6();
     aditem.addEventListener('click', () =>{
         console.log("Add button clicked")
     })
 }

 //12.8
 var ItemInput ="";
 function hw12_8(){
     hw12_7();
     input.addEventListener('click', (e) =>{
        ItemInput = e.target.value;
     })
     aditem.addEventListener('click', () =>{
         console.log(ItemInput)
     })
 }
//12.9
 function hw12_9(){
     hw12_8();
     aditem.addEventListener('click', () =>{
         listitem.push(ItemInput);
         console.log(listitem);
     })
 }
 //12.10
 function hw12_10(){
    hw12_9();
    aditem.addEventListener('click', () => {
        const listuL = document.getElementById("Item_list_Ul");
        listuL.insertAdjacentHTML('beforeend', `<li><span>${ItemInput}</span></li>`);
    });
 }
 //12.11
 function hw12_11(){
    hw12_10();
    console.log(listuL);
    aditem.addEventListener('click', () => {
        document.getElementById("Item-input").value = "";
        console.log(listuL);
    });
 }
 //12.12
 function hw12_12(){
    hw12_11();
    const listli = document.querySelectorAll("#Item_list_Ul Li");
    for (let i = 0; lis = listli[i]; ++i) {
        lis.insertAdjacentHTML('beforeend', `<button>remove</button>`);
    }
 }
 //12.13

function hw12_13(){
    hw12_12();
    const listRemove = document.querySelectorAll("#Item_list_Ul Li button");
    for(let i=0; remove = listRemove[i]; ++i){
        remove.addEventListener('click', () => {
            console.log('remove');
        });
    }
}

//12.14

function hw12_14(){
    hw12_13();
    const listRemove = document.querySelectorAll("#Item_list_Ul Li button");
    for(let i=0; remove = listRemove[i]; ++i){
        remove.addEventListener('click', () => {
            console.log(`Iteam: ${i}`);
        });
    }
}