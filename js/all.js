window.addEventListener('load', function(){
    let load = document.getElementById("load");
    load.style.display = "none";
});

let top_btn = document.getElementById('top_botton');
top_btn.addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo(0, 0);
});

$(function(){
    $('.hamb').click(function(){
        // console.log('aaa');
        $('nav > ul').toggleClass('-shown');
        $('.overlay').toggleClass('shown');

    });

    $('.overlay').click(function(){
        $('nav > ul').toggleClass('-shown');
        $('.overlay').toggleClass('shown');
    })
    
});