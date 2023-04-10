/* ========== 按鍵往下 ========== */

let all_product_btn = document.getElementById('all_product_btn');
all_product_btn.addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo(0, 1150);
});

/* ========== sort欄篩選 ========== */

let sort_block = document.querySelector('.sort > ul');
//console.log(sort_blocks);
sort_block.addEventListener('click', function(e){
    if(e.target.tagName == 'A'){
        e.preventDefault();
        let sort_blocks = this.querySelectorAll('li');
        for(let i = 0; i < sort_blocks.length; i++){
            sort_blocks[i].querySelector('a').classList.remove('-clicked');
        }
        e.target.classList.add('-clicked');
        let type = e.target.parentElement.getAttribute('data-type');
    
        let product_list = this.closest('.product_block').querySelectorAll('.product_card_list > li');
    
        for(let i = 0; i < product_list.length; i++){
            product_list[i].classList.add('-none');
            if(type == 'all'){
                product_list[i].classList.remove('-none');
            }else{
                if(product_list[i].classList.contains(`${type}`)){
                    product_list[i].classList.remove('-none');
                }    
            }
        }    
    }
});

/* ========== category欄篩選 ========== */

let category_blocks = document.querySelector('.right_column  > ul');
category_blocks.addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo(0, 1150);

    let sort_blocks = this.closest('main').querySelectorAll('.sort > ul > li');
    for(let i = 0; i < sort_blocks.length; i++){
        sort_blocks[i].querySelector('a').classList.remove('-clicked');
        let sort_type = sort_blocks[i].getAttribute('data-type');

        if(e.target.tagName == 'IMG' || e.target.tagName == 'H4'){
            let type = e.target.parentElement.querySelector('h4').innerText.toLowerCase();
            console.log(type);
            if(type == sort_type){
                sort_blocks[i].querySelector('a').classList.add('-clicked');
            }
        }
    }

    let product_list = this.closest('main').querySelectorAll('.product_card_list > li');
    for(let i = 0; i < product_list.length; i++){
        product_list[i].classList.add('-none');

        if(e.target.tagName == 'IMG'){
            let type = e.target.nextElementSibling.innerText.toLowerCase();
            if(product_list[i].classList.contains(`${type}`)){
                product_list[i].classList.remove('-none');
            }    
        }else if(e.target.tagName == 'H4'){
            let type = e.target.innerText.toLowerCase();
            if(product_list[i].classList.contains(`${type}`)){
                product_list[i].classList.remove('-none');
            }    
    
        }
    
    }

});

/* ========== 加入購物車 ========== */

let add_btns = document.querySelectorAll('.product_card > input');
//console.log(add_btns);
for(let i = 0; i < add_btns.length; i++){
    let add_btn = add_btns[i];
    add_btn.addEventListener('click', function(e){
        e.preventDefault();
        localStorage.cart_num++;
        showCartNum();
    });
    
}

