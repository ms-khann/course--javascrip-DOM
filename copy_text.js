let copy_txt = document.getElementById('copy_text');
let copy_btn = document.getElementById('copy');

copy_btn.addEventListener('click',function(){
    copy_txt.select();
    document.execCommand('copy');
});