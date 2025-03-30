var top_a = document.getElementsByClassName('top-anchor');
var foot_a = document.getElementsByClassName('foot-anchor');

for (var i = 0; i < top_a.length; i++) {
    top_a[i].onmouseover = function() {
        this.style.color = '#A98B98';
    };
    top_a[i].onmouseout = function() {
        this.style.color = '#A6F0C6';
    };
}

for (var i = 0; i < foot_a.length; i++) {
    foot_a[i].onmouseover = function() {
        this.style.color = '#4E3D53';
    };
    foot_a[i].onmouseout = function() {
        this.style.color = '#A6F0C6';
    };
}
