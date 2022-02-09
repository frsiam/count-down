let count = 0;
//create event listener on + button and connect with the countdown digit.

document.getElementById('add').addEventListener('click',function(e){
    count++;
    document.getElementById('digit').innerText = count;
})

//create event listener on - button and connect with the countdown digit.

document.getElementById('minus').addEventListener('click',function(e){
    count--;
    document.getElementById('digit').innerText = count;
})