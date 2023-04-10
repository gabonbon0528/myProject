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