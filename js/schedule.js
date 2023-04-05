let scroll_block_el = document.getElementById('scroll_block');
let blocks = document.querySelectorAll('#scroll_block > li')

// 捲動更改日期
scroll_block_el.addEventListener('scroll', function(){

    blocks.forEach(function (item, i){
        item.classList.remove('-hovered');
    });

    let left_days = this.closest('.top_block').querySelectorAll('.date > li');
    left_days.forEach(function(item, i){
        item.classList.remove('-on');
    });

    let days;
    // console.log(blocks[3].offsetTop); 214
    // console.log(this.scrollTop); 0-1924.5
    // console.log(blocks[0].offsetTop - this.scrollTop);

    for(let i = 0; i < blocks.length; i++){
        let each_pos = blocks[i].offsetTop - this.scrollTop;
        if(each_pos <= 424 && each_pos >= (424 - blocks[i].offsetHeight - 5)){
            let days_num = blocks[i].querySelector('h4').innerHTML;
            // console.log(days_num);
            days = document.querySelectorAll('.date > li')[parseInt(days_num) + 9];
            // console.log(days);

            blocks[i].classList.add('-hovered');
        }
    }
    days.classList.add('-on');

});

// 滑鼠移動顯示日期
scroll_block_el.addEventListener('mousemove', function(e){
    blocks.forEach(function(item, i){
        item.classList.remove('-hovered');
    });

    let left_days = this.closest('.top_block').querySelectorAll('.date > li');

    left_days.forEach(function(item, i){
        item.classList.remove('-on');
    });

    let days;
    for(let i = 0; i < blocks.length; i++){
        
        if(e.target == blocks[i]){
            let days_num = e.target.querySelector('h4').innerHTML;
            // console.log(days_num);
            days = document.querySelectorAll('.date > li')[parseInt(days_num) + 9];
            // blocks[i].classList.add('-hovered');
            e.target.classList.add('-hovered');
            days.classList.add('-on');
        };
    }
});

// 滑鼠點擊日期顯示詳細資訊
scroll_block_el.addEventListener('mouseup', function(){
    for(let i = 0; i < blocks.length; i++){
        blocks[i].classList.remove('-clicked');
    };
});

blocks.forEach(function(item, i){
    item.addEventListener('click', function(){
        item.classList.add('-clicked');

        let detail_blocks = this.closest('.top_block').querySelector('.detail_block').children;
        for(let i = 0; i < detail_blocks.length; i++){
            detail_blocks[i].classList.add('-none');
        };

        let descrp_blocks = this.closest('.top_block').querySelector('.description_block').children; 
        let type = item.getAttribute('data-type');
        if(type !== null){
            let new_type = type.split(' ');
            // 顯示品項細節
            for(let i = 0; i < new_type.length; i ++){
                let card_class = `${new_type[i]}` + `_card`
                document.querySelector(`.${card_class}`).classList.remove('-none')
            }

            // 顯示類別
            if(type !== 'cake' && type){
                descrp_blocks[0].classList.add('-none');
                descrp_blocks[1].classList.remove('-none');
            }
            else if(type == 'cake'){
                descrp_blocks[0].classList.remove('-none');
                descrp_blocks[1].classList.add('-none');
            }
            
        }else{
            descrp_blocks[0].classList.remove('-none');
            descrp_blocks[1].classList.remove('-none');
        }
    });
});

let filter = document.getElementById('filter');
// console.log(filter);
filter.addEventListener('change', function(){
    let filter_value = filter.value;
    //console.log(filter_value);
    let blocks = this.closest('.bars').querySelectorAll('#scroll_block > li');
    for(let i = 0; i < blocks.length; i++){
        blocks[i].classList.add('-none');
        if(filter_value !== 'all'){
            if(blocks[i].getAttribute('data-type')){
                let blocks_type = blocks[i].getAttribute('data-type').split(' ');
                //console.log(blocks_type);
                for(let j = 0; j < blocks_type.length; j++){
                    if(filter_value == blocks_type[j]){
                        blocks[i].classList.remove('-none');
                    }
                }
            }else{
                blocks[i].classList.add('-none');
            }    
        }else{
            blocks[i].classList.remove('-none');
        }
    }
});