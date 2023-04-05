window.addEventListener("load", function(){
    let load = document.getElementById("load");
    load.style.display = "none";
});

let top_btn = document.getElementById('top_botton');
top_btn.addEventListener('click', function(){
    window.scrollY = 0;
});