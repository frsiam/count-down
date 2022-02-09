let count = 0;
document.getElementById('add').addEventListener('click',function(e){
    count++;
    document.getElementById('digit').innerText = count;
})