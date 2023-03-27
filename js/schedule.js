let scroll_block_el = document.getElementById('scroll_block');
let blocks = document.querySelectorAll('#scroll_block > li')

// 捲動更改日期
scroll_block_el.addEventListener('scroll', function(){

    blocks.forEach(function (item, i){
        item.classList.remove('-hovered');
    });

    let left_days = this.closest('.top_block').querySelectorAll('.date > li');
    // console.log(left_days);

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
            days = document.querySelectorAll('.date > li')[parseInt(days_num)+9];
            // console.log(days);

            blocks[i].classList.add('-hovered');
        }
    }
    days.classList.add('-on');

});

// 滑鼠移動顯示日期
blocks.forEach(function(item, i){
    item.classList.remove('-hovered');

    item.addEventListener('mouseenter', function(){
        item.classList.add('-hovered');
    });

    item.addEventListener('mouseleave', function(){
        item.classList.remove('-hovered');
    });

});

// 滑鼠點擊顯示日期
scroll_block_el.addEventListener('mouseup', function(){
    for(let i = 0; i < blocks.length; i++){
        blocks[i].classList.remove('-clicked');
    };
});

blocks.forEach(function(item, i){
    item.addEventListener('click', function(){
        item.classList.add('-clicked');

        let descrp1 = blocks.closest('top_block').querySelector('descrp1');
        let descrp2 = blocks.closest('top_block').querySelector('descrp2');

        
    });
});