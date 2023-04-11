/* ========== 載入動畫 ========== */

window.addEventListener('load', function(){
    let load = document.getElementById("load");
    load.style.display = "none";

});

/* ========== 置頂按鈕 ========== */

let top_btn = document.getElementById('top_botton');
top_btn.addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo(0, 0);
});

/* ========== 側邊欄收合 ========== */

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

/* ========== 顯示購物車數量 ========== */

let cart_num = document.querySelector('.cart_num');

function showCartNum(){
    cart_num.textContent = parseInt(localStorage.getItem('cart_num'));
}

document.addEventListener("DOMContentLoaded", function(){
    if(localStorage.cart_num){
        showCartNum();
    }else{
        localStorage.cart_num = 0;
        showCartNum();
    }
});

//清空購物車數量
let cart_btn = document.querySelector('.cart');
cart_btn.addEventListener('click', function(e){
    e.preventDefault();
    localStorage.cart_num = 0;
    showCartNum();
});