window.addEventListener('scroll', function(){
    //console.log('aaa');
    let scroll_blocks = document.querySelectorAll('.container > section');
    //console.log(scroll_blocks);
    for(let i = 0; i < scroll_blocks.length; i++){
        let boxTop = scroll_blocks[i].getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        scroll_blocks[i].classList.remove('-slideup');

        if(boxTop < windowHeight){
            scroll_blocks[i].classList.add('-slideup');
        }
    }
});

/* ========== 登場動畫 ========== */

window.addEventListener('load', function(){

    let arch = document.querySelector('.kv .arch');

    skating();

    function skating(){
        animate({
            duration: 2000,
            timing: function(timeFraction){
                return timeFraction;
            },
            draw: function(progress) {
                let translateZ = - (1 - progress) * 3000;
                let translateY;
                if(progress < 0.2){
                    translateY = (1100 + progress * 1000); // 1300

                }else if(progress < 0.6 && progress >= 0.2){
                    translateY = (1400 - progress * 500); // 1100

                }else if(progress < 0.8 && progress >= 0.6){
                    translateY = (1700 - progress * 1000); // 900

                }else{
                    translateY = (4500 - (progress) * 4500);
                }
                arch.style.transform = `translateZ(${translateZ}px) translateY(${translateY}px)`;
            },
            callback: function(){
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

    let star1 = document.querySelector('.star1');
    let heaven = document.querySelector('.heaven');
    let heaven_obj = document.querySelectorAll('.heaven > img');

    let windowWidth = window.innerWidth;

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
                star1.style.opacity = (progress * 100) + `%`;
            },
            callback: function(){
                flash.style.display = 'none';
                if(windowWidth >= 1024){
                    rolling(heaven_obj[4]);
                    setTimeout(function(){
                        rolling(heaven_obj[5]);
                    });

                    // for(let i = 2; i < heaven_obj.length - 2; i++){
                    //     rolling(heaven_obj[2]);
                    // }
                }else{
                    styleClear();
                }
            }
        });
    }

    function rolling(heaven_obj){
        // for(let i = 2; i < heaven_obj.length - 2; i++){
            animate({
                duration: 9000,
                timing: function(timeFraction){
                    return timeFraction;
                },
                draw: function(progress){
                    heaven_obj.style.transform = `rotateZ(` + 3600 * progress + `deg) scale(` + (progress * 0.03 + 0.1) + `)` ;
                    heaven_obj.style.top = 139 + 971 * progress + `px` ;
                    heaven_obj.style.opacity = 1;


                    console.log(heaven_obj);

                    let p1 = 132 + 984 * progress * 100 / 141;
                    let p2 = 232 - (984 * (progress - 0.143) * 100 / 133)
                    let p3 = 132 - (984 * (progress - 0.278) * 278 / 271);
                    let p4 = - 146 - (984 * (progress - 0.553) * 25 / 39);
                    let p5 = - 171 + (984 * (progress - 0.593) * 11 / 52);
                    let p6 = - 160 + (984 * (progress - 0.646) * 493 / 348);

                    if(progress < 0.143){
                        heaven_obj.style.right = p1 + `px` ;
                    }else if(progress >= 0.143 && progress < 0.278){
                        heaven.style.perspectiveOrigin = 0 + `%`;
                        heaven_obj.style.right = p2 + `px` ;
                    }else if(progress >= 0.278 && progress < 0.553){
                        heaven_obj.style.right = p3 + `px` ;
                    }else if(progress >= 0.553 && progress < 0.593){
                        heaven_obj.style.right = p4 + `px` ;
                    }else if(progress >= 0.593 && progress < 0.646){
                        heaven_obj.style.right = p5 + `px` ;
                    }else{
                        heaven_obj.style.right = p6 + `px` ;
                    }
                    
                },
                callback: function(){
                    // 可以再次在此处执行其他操作，或者直接结束动画。
                }
            });
        //}
    }

    function styleClear(){
        animate({
            duration: 1000,
            timing: function(timeFraction){
                return timeFraction;
            },
            draw: function(progress){
                for(let i = 2; i < heaven_obj.length - 2; i++){
                    heaven_obj[i].style = `opacity:` + progress * 100 + `%`;
                }
            },
            callback: function(){
            }
        });
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
