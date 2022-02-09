let count = 0;
//create event listener on + button and connect with the countdown digit.

document.getElementById('add').addEventListener('click',function(e){
    count++;
    countDigit();
});

//create event listener on - button and connect with the countdown digit.

document.getElementById('minus').addEventListener('click',function(e){
    if(count > 0){
        count--;
        countDigit();
    }
    else{
        alert("Count down can't less than zero !")
    }
});

// catch the count digit by function
function countDigit(){
    document.getElementById('digit').innerText = count;
}