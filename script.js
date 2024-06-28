let head=document.getElementById("head");
let but=document.getElementById("but");
let but1=document.getElementById('but1')
let meow=document.getElementById("meow-sound")
function pro(a){
    // var pic;
    if (a==0){
        pic="bulboff.png"
        photo="cat-eyes-img.png"
        head.textContent="Switch OFF"
        but1.style.backgroundColor="rgb(179, 181, 183)"
        but.style.backgroundColor="green"
    }
    else{
        pic="bulbon.png"
        photo="cat-img.png"
        head.textContent="Switch ON"
        but.style.backgroundColor="rgb(179, 181, 183)"
        but1.style.backgroundColor="red"
        meow.play()
    }
    document.getElementById("bol").src=pic;
    document.getElementById("cat").src=photo;
}