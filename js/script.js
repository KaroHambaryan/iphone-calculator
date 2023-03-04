function buttonClick(num) {
    let a = [ ];
    if(document.getElementById('result').innerHTML === `0`){
        document.getElementById('result').innerHTML = num
    } else{
        document.getElementById('result').innerHTML += num;

    }
}

function buttonClickAc(){
    document.getElementById('result').innerHTML = `0`;
}
