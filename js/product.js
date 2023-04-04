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