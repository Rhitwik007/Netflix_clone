let accordian = document.getElementsByClassName("FAQ_title");
// const makeAllPlus = ()=>{
//     Array.from(document.getElementsByClassName("FAQ_title")).forEach((element)=>{
//         element.classList.remove('fa-times');
//         element.classList.add('fa-plus');
//     })
// }
// Array.from(document.getElementsByClassName('FAQ_title')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{
//         makeAllPlus();
//         e.target.classList.remove('fa-plus');
//         e.target.classList.add('fa-times');
//         let content = this.nextElementSibling;
//     if(content.style.maxHeight){
//         content.style.maxHeight = null;
//     } else {
//         content.style.maxHeight= content.scrollHeight + "px";
//     }
//     })
// })

for(let i=0;i<accordian.length;i++){
    accordian[i].addEventListener("click",function(){
        if(this.childNodes[1].classList.contains("fa-plus")){
            this.childNodes[1].classList.remove("fa-plus");
            this.childNodes[1].classList.add("fa-times");
        }else{
            this.childNodes[1].classList.remove("fa-times");
            this.childNodes[1].classList.add("fa-plus")
        }
        let content = this.nextElementSibling;
    if(content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight= content.scrollHeight + "px";
    }
    })
}

// for(let i=0;i<accordian.length;i++){
//     accordian[i].addEventListener("click",function(){
//     let content = this.nextElementSibling;
//     if(content.style.maxHeight){
//         content.style.maxHeight = null;
//     } else {
//         content.style.maxHeight= content.scrollHeight + "px";
//     }
//     })
// }