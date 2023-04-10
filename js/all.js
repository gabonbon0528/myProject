/* ========== 載入動畫 ========== */

window.addEventListener('load', function(){
    let load = document.getElementById("load");
    load.style.display = "none";

    let arch = document.querySelector('.kv .arch');
    arch.style.opacity = 1;

    skating();

    function skating() {
        animate({
            duration: 1500,
            timing: function(timeFraction){
                return timeFraction;
            },
            draw: function(progress) {
                let translateZ = - (1 - progress) * 3000;
                let translateY;
                if(progress < 0.6){
                    translateY = (1100 + progress * 1000);
    
                }else if(progress < 0.8 && progress >= 0.6){
                    translateY = (1580 + progress * 200);
    
                }else{
                    translateY = (1740 - (progress - 0.8) * 8700);
                }
                arch.style.transform = `translateZ(${translateZ}px) translateY(${translateY}px)`;
            },
            callback: function() {
                explosion();
            }
        });
    }

    function explosion(){
        let heaven_obj = document.querySelectorAll('.heaven > img');
        for(let i = 3; i < heaven_obj.length - 2; i++){
            heaven_obj[i].style.opacity = 1;

            let randomX = Math.random() * 10;
            let randomY = Math.random() * 10
            animate({
                duration: 1200,
                timing: function(timeFraction){
                    return Math.pow(timeFraction, 2)
                },
                draw: function(progress){
                    if(randomX > 5){
                        heaven_obj[i].style.transform = `translateX(` + randomX * progress * 100 + `vw)` + `translateY(` + - (randomY * progress * 300) + `vh)` + `scale(.1) rotate(250deg)`
                    }else{
                        heaven_obj[i].style.transform = `translateX(` + - (randomX * progress * 100) + `vw)` + `translateY(` + - (randomY * progress * 300) + `vh)` + `scale(.1) rotate(250deg)`
                    }
                },
                callback: function(){
                    startFlash();
                    // 可以再次在此处执行其他操作，或者直接结束动画。
                }
            });
        }
    }

    let flash = document.getElementById('flash');
    
    function startFlash(){
        animate({
            duration: 100,
            timing: function(timeFraction){
                return timeFraction;
            },
            draw: function(progress){
                flash.style.opacity = (progress * 100) + `%`
            },
            callback: function() {
                setTimeout(endFlashAnimation, 1000);
            }
        });
    }

    function endFlashAnimation(){
        animate({
            duration: 1500,
            timing: function(timeFraction){
                return 1 - timeFraction;
            },
            draw: function(progress){
                flash.style.opacity = (progress * 100) + `%`
            },
            callback: function() {
                showing();
            }
        });
    }

    let heaven = document.querySelector('.heaven');
    let heaven_obj = document.querySelectorAll('.heaven > img');

    function showing(){
        animate({
            duration: 1000,
            timing: function(timeFraction){
                return timeFraction;
            },
            draw: function(progress){
                let title = document.querySelector('.kv > .title')
                title.style.opacity = (progress * 100) + `%`;
                heaven_obj[1].style.opacity = (progress * 100) + `%`;
                heaven_obj[heaven_obj.length - 1].style.opacity = (progress * 100) + `%`;
                heaven_obj[heaven_obj.length - 2].style.opacity = (progress * 100) + `%`;
            },
            callback: function(){
                flash.style.display = 'none';
                rolling();
            }
        });
    }

    function rolling(){
        for(let i = 2; i < heaven_obj.length - 2; i++){
            animate({
                duration: 9000,
                timing: function(timeFraction){
                    return timeFraction;
                },
                draw: function(progress){
                    heaven_obj[i].style.transform = `rotateX(` + 3600 * progress + `deg) scale(.1)` ;
                    heaven_obj[i].style.top = 139 + 971 * progress + `px` ;

                    let p1 = 132 + 984 * progress * 100 / 141;
                    let p2 = 232 - (984 * (progress - 0.143) * 100 / 133)
                    let p3 = 132 - (984 * (progress - 0.278) * 278 / 271);
                    let p4 = - 146 - (984 * (progress - 0.553) * 25 / 39);
                    let p5 = - 171 + (984 * (progress - 0.593) * 11 / 52);
                    let p6 = - 160 + (984 * (progress - 0.646) * 493 / 348);

                    if(progress < 0.143){
                        heaven_obj[i].style.right = p1 + `px` ;
                    }else if(progress >= 0.143 && progress < 0.278){
                        heaven.style.perspectiveOrigin = 0 + `%`;
                        heaven_obj[i].style.right = p2 + `px` ;
                    }else if(progress >= 0.278 && progress < 0.553){
                        heaven_obj[i].style.right = p3 + `px` ;
                    }else if(progress >= 0.553 && progress < 0.593){
                        heaven_obj[i].style.right = p4 + `px` ;
                    }else if(progress >= 0.593 && progress < 0.646){
                        heaven_obj[i].style.right = p5 + `px` ;
                    }else{
                        heaven_obj[i].style.right = p6 + `px` ;
                    }
                    
                },
                callback: function(){
                    // 可以再次在此处执行其他操作，或者直接结束动画。
    
                }
            });

        }
        // setInterval(rolling, 10000);  
        
    }

});




function animate({timing, draw, duration, callback}) {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
        requestAnimationFrame(animate);
    }else if (callback) {
        callback();
    }

    });
}

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