let img = document.getElementById('img');
let degree = 0;
document.getElementById('btn_').addEventListener('click', () =>{

    function getRandomNum(){
        var num = Math.floor(Math.random() * 120);
        degree = num;
        return num;
    }


    var num = getRandomNum();
    for(var i = 0; i < num; i++){
        img.style.transform = 'rotate('+i+'deg)';
        img.style.transition = '3s';
    }
    console.log(degree);

})



