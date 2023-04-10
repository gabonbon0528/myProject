window.addEventListener('scroll', function(){
    //console.log('aaa');
    let scroll_blocks = document.querySelectorAll('.main_block > div');
    console.log(scroll_blocks);
    for(let i = 2; i < scroll_blocks.length; i++){
        let boxTop = scroll_blocks[i].getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        scroll_blocks[i].classList.remove('-slideup');

        if(boxTop < windowHeight){
            scroll_blocks[i].classList.add('-slideup');
        }
    }
});