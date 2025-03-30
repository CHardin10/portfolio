var c = document.getElementById('character');
var positionTop = 0;
var positionLeft = 0;
var char_length = 0;
var seconds = 0;

if (c) {
    document.addEventListener('keydown', function(event) {
        if (event.key == 'w') {
            if(!(positionTop < -33)) {
                positionTop -= 1;
                c.style.position = 'relative';
                c.style.top = positionTop + 'vh';
                if(positionTop == -33){
                    reset();
                }
            }
        }
        if (event.key == 's'){
            if(!(positionTop > 33)){
                positionTop += 1;
                c.style.position = 'relative';
                c.style.top = positionTop + 'vh';
                if(positionTop == 33){
                    reset();
                }
            }
        }
        if (event.key == 'a'){
            if(!(positionLeft < -33)){
                positionLeft -= 1;
                c.style.position = 'relative';
                c.style.left = positionLeft + 'vh';
                if(positionLeft == -33){
                    reset();
                }
            }
        }
        if (event.key == 'd'){
            if(!(positionLeft > 33)){
                positionLeft += 1;
                c.style.position = 'relative';
                c.style.left = positionLeft + 'vh';
                if(positionLeft == 33){
                    reset();
                }
            }
        }
    });
}
function reset(){
    positionTop = 0;
    positionLeft = 0;
    char_length = 0;
    c.style.top = positionTop + 'vh';
    c.style.left = positionLeft + 'vh';
}