const downloadBtn = document.querySelector(".btn")


downloadBtn.addEventListener('click', () =>{
    const link = document.createElement("a");
    
link.href = "./resume.pdf";


    link.target = "_blank";

    document.body.appendChild(link);
    link.click();
    link.remove();
});



 function scrollBtn(id){
    document.querySelector(id).scrollIntoView({
        behavior: "smooth"
    })
 }



 document.querySelector("#projectBtn").addEventListener("click",()=>{
    scrollBtn("#projects")
})
document.querySelector("#contactBtn").addEventListener("click",()=>{
    scrollBtn("#contact")
})
document.querySelector("#aboutScroll").addEventListener("click",()=>{
    scrollBtn("#about")
})
document.querySelector("#skillScroll").addEventListener("click",()=>{
    scrollBtn("#scrolling-skill")
})
document.querySelector("#projectScroll").addEventListener("click",()=>{
    scrollBtn("#projects")
})
document.querySelector("#contactScroll").addEventListener("click",()=>{
    scrollBtn("#contact")
})




