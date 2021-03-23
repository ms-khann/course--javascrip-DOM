let single_vibrate = document.getElementById('single-vibrate');
let pattern_vibrate = document.getElementById('pattern-vibrate');

single_vibrate.addEventListener('click',function(){
    navigator.vibrate(300);
});

pattern_vibrate.addEventListener('click',function(){
    navigator.vibrate(300,100,100,100);
});