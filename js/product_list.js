let all_product_btn = document.getElementById('all_product_btn');
all_product_btn.addEventListener('click', function(e){
    e.preventDefault();
    console.log('aaa');
    window.scrollTo(0, 1150);
});

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

let category_block = document.querySelector('.right_column  > ul');
category_block.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.tagName == 'A'){
        let type = e.target.querySelector('h4').innerText.toLowerCase();
    }
});
