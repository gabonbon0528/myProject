/* ========== 加入購物車 ========== */

let submit_btn = document.getElementById('submit');
let time = document.querySelector('.time');
let size = document.querySelector('.size');
let count = document.querySelector('.count');

submit_btn.addEventListener('click', function(e){
    let is_valid = true;
    if(!time.value){
        e.preventDefault();
        is_valid = false;
        alert('請選擇日期')
    }
    if(!size.value){
        e.preventDefault();
        is_valid = false;
        alert('請選擇尺寸')

    }
    if(!count.value){
        e.preventDefault();
        is_valid = false;
        alert('請選擇口味')
    }
    
    localStorage.cart_num++;
    
});


/* ========== 輪播 ========== */

let slideIndex = 0;
let slides = document.getElementsByClassName('slide');
showSlides();

function showSlides(){
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove('active');
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add("active");
    //console.log(slideIndex);
    setTimeout(showSlides, 3000);
}

let prev_btn = document.getElementById('prev');
prev_btn.addEventListener('click', function(){
    slideIndex--;
    if (slideIndex < 1){
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++){
        slides[i].classList.remove("active");
    }
    slides[slideIndex - 1].classList.add("active");
});

let next_btn = document.getElementById('next');
next_btn.addEventListener('click', function(){
    slideIndex++;
    if (slideIndex > slides.length){
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++){
        slides[i].classList.remove("active");
    }
    slides[slideIndex - 1].classList.add("active");
});

/* ========== 保存方式燈箱 ========== */

let policy_block = document.querySelector('.policy');
let light_box_overlay = document.querySelector('.lightbox-overlay');
let light_box = document.querySelector('.lightbox');
let light_box_close = document.querySelector('.lightbox-close');

policy_block.addEventListener('click', function(e){
    let target = e.target;
    if (target.tagName === 'A') {
        showLightBox(target.textContent);
    } else if (target.tagName === 'SPAN') {
        showLightBox(target.closest('a').textContent);
    }
});
    
function showLightBox(title) {
    light_box_overlay.classList.add('-shown');
    light_box_overlay.querySelector('.lightbox > h5').textContent = title.slice(-4);
    if(title.slice(-4) == '保存方式'){
        light_box_overlay.querySelector('.lightbox > p').innerHTML = `
        生日糕：<br>
        只可冷藏保存。<br><br>
        冷凍甜點：<br>
        冷凍保存。食用時放在室溫退冰五分鐘，或以180度烤箱加熱5分鐘。<br><br>
        常溫甜點：<br>
        密封陰涼環境，不建議冷藏，以免口感乾硬。<br><br>
        `;

    }else if(title.slice(-4) == '賞味期限'){
        light_box_overlay.querySelector('.lightbox > p').innerHTML = `
        生日糕：<br>
        取件當日為第一日，冷藏環境正常保存可以存放三日。<br><br>
        冷凍甜點：<br>
        取件當日為第一日，冷凍環境正常保存可以存放兩週。<br><br>
        常溫甜點：<br>
        取件當日為第一日，密封陰涼環境可保存一週。<br><br>
        `;
    }else if(title.slice(-4) == '運送方式'){
        light_box_overlay.querySelector('.lightbox > p').innerHTML = `
        生日糕：<br>
        僅限面交，恕不開放宅配。<br><br>
        冷凍甜點：<br>
        以面交及黑貓宅配為主。宅配極少量。<br><br>
        常溫甜點：<br>
        以面交及黑貓宅配為主。宅配極少量。<br><br>
        `;
    }
};

light_box_overlay.addEventListener('click', function(){
    this.classList.remove('-shown');
});

light_box.addEventListener('click', function(e){
    e.stopPropagation();
});

light_box_close.addEventListener('click', function(){
    light_box_overlay.classList.remove('-shown');
});

