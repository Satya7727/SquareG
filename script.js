let s1 = document.getElementById("sq1");
let text_s1=document.getElementById("sq1-text");
s1.addEventListener("mouseenter",function(){
    text_s1.innerHTML=Math.floor(Math.random()*256);

    // let r = Math.floor(Math.random()*256);
    // text_s1.innerHTML=`<h1>${r}<h1>`;

})
s1.addEventListener("mouseleave",function(){
    text_s1.innerHTML=1;
})


let s2 = document.getElementById("sq2");
let clr = "red";
s2.addEventListener("mouseenter",function(){
    if(clr=="red"){
        s2.style.background=clr;
        clr="green";
    }
    else if(clr=="green"){
        s2.style.background=clr;
        clr="blue";
    }
    else{
        s2.style.background=clr;
        clr="red";
    }
})
s2.addEventListener("mouseleave",function(){
    s2.style.background="white";
})


//rgb(34,53,54)-range=0 to 255
let s3 = document.getElementById("sq3");
s3.addEventListener("mouseenter",function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);//will give numbers from 0 to 255 ->256 not include
    let r3 = Math.floor(Math.random()*256);
    s3.style.background=`rgb(${r1},${r2},${r3})`;
})
s3.addEventListener("mouseleave",function(){
    s3.style.background="white";
})


let s4 = document.getElementById("sq4");
s4.addEventListener("click",function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);//will give numbers from 0 to 255 ->256 not include
    let r3 = Math.floor(Math.random()*256);
    s1.style.background=`rgb(${r1},${r2},${r3})`;
    s2.style.background=`rgb(${r3},${r1},${r3})`;
    s3.style.background=`rgb(${r2},${r2},${r1})`;
})
s4.addEventListener("mouseleave",function(){
    s1.style.background="white";
    s2.style.background="white";
    s3.style.background="white";
})