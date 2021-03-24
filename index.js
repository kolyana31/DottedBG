function getDot() {
    let dot = document.createElement('span');
    dot.className="dot";
    dot.dataset.counter='';
    return dot;
}

function clear() {
    let dots =document.getElementsByClassName("dot")

    while(dots[0]) {
        dots[0].parentNode.removeChild(dots[0]);
    }
}

function UpdateDot(){
    let bg =document.getElementById("bg");
    let dots =document.getElementsByClassName("dot")

    clear();
    bg.prepend(getDot());
    while (dots[dots.length-1].getBoundingClientRect().top<window.innerHeight) {
        bg.prepend(getDot());
    }
}

UpdateDot();

window.addEventListener('resize',()=>{
    UpdateDot();
})

document.addEventListener('mousemove', function(e) {
    if (e.target.dataset.counter != undefined && !e.target.classList.contains('hovered')) {
        e.target.classList.add('hovered')
        setTimeout(()=>{
            e.target.classList.remove('hovered')
        },500)
    }
  });