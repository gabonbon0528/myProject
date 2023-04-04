// 電話號碼只能打數字切不能大於10碼
let input_tel = document.getElementById('tel');
input_tel.addEventListener('keydown', function(e){
    if((e.which >= 48 && e.which <= 57) || e.which == 8){
        if(input_tel.value.length > 9 && e.which != 8){
            e.preventDefault();
        }
    }else{
        e.preventDefault();
    }
});

// checkbox 全選
let check_all = document.getElementById('all');
let all_times = document.querySelectorAll('input[type="checkbox"]');

check_all.addEventListener('click', function(){
    let that = this;

    all_times.forEach(function(item, i){
        item.checked = that.checked;
    });

});

all_times.forEach(function(item, i){
    item.addEventListener('click', function(){
        let checked_length = document.querySelectorAll('input[type="checkbox"]:checked').length;
        let all_length = document.querySelectorAll('input[type="checkbox"]').length;
        if(checked_length == all_length){
            check_all.checked = true;
        }else{
            check_all.checked = false;
        }

    });
});


// 送出表單確認都有填寫
let form = document.querySelector('form');

form.addEventListener('submit', function(e){

    let input_name = document.getElementById('name').value;
    let input_email = document.getElementById('email').value;
    let input_tel = document.getElementById('tel').value;

    let is_confirm = confirm('確認提交？')
    if(is_confirm){
        if((input_name !== '') && (input_email !== '') && (input_tel !== '')){
            if (is.email(input_email.value)){
                alert('已送出');
            }
            else{
                e.preventDefault();
                alert('請填寫正確的電子郵件')    
            }
        }else{
            e.preventDefault();
            alert('請填寫完整資料')
        }
    }else{
        alert('取消送出');
    }
});