window.onload = function(){
    var f = document.getElementById('f');
    var inp = document.getElementById('inp');
    document.addEventListener('keydown', function(evt) {
    if (evt.keyCode == 13) {
        if (inp.value != '') {
        var p = f.appendChild(createP());
        var ch = p.appendChild(createCheck());
        var l = p.appendChild(createLabel(inp.value))
        var img = document.createElement('img');
        img.src = 'https://i.postimg.cc/j2GDprjj/crest.jpg';
        p.appendChild(img);
        ch.addEventListener('click', function() {
            if (ch.checked) {
            l.classList.add('s');
            } else {
            l.classList.remove('s');
            }
        });
        img.addEventListener('click', function() {
            this.parentNode.remove(this);
        });
        inp.value = '';
        }
    }
    });

    function createCheck() {
    var element = document.createElement('input');
    element.classList.add('ch');
    element.type = 'checkbox';
    return element;
    }

    function createP() {
    var element = document.createElement('p');
    element.classList.add('parag');
    return element;
    }

    function createLabel(text) {
    var element = document.createElement('label');
    element.classList.add('lab');
    element.textContent = text;
    return element;
    }
}