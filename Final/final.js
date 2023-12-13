function setRandomPosition() {
    var element = document.getElementById('submit');
    var maxWidth = window.innerWidth - element.clientWidth;
    var maxHeight = window.innerHeight - element.clientHeight;

    var randomX = Math.floor(Math.random() * maxWidth);
    var randomY = Math.floor(Math.random() * maxHeight);

    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';
}

function setRandomPosition2() {
    var element = document.getElementById('other');
    var maxWidth = window.innerWidth - element.clientWidth;
    var maxHeight = window.innerHeight - element.clientHeight;

    var randomX = Math.floor(Math.random() * maxWidth);
    var randomY = Math.floor(Math.random() * maxHeight);

    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';
}

function setRandomPosition3() {
    var element = document.getElementById('other1');
    var maxWidth = window.innerWidth - element.clientWidth;
    var maxHeight = window.innerHeight - element.clientHeight;

    var randomX = Math.floor(Math.random() * maxWidth);
    var randomY = Math.floor(Math.random() * maxHeight);

    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';
}

function setRandomPosition4() {
    var element = document.getElementById('other2');
    var maxWidth = window.innerWidth - element.clientWidth;
    var maxHeight = window.innerHeight - element.clientHeight;

    var randomX = Math.floor(Math.random() * maxWidth);
    var randomY = Math.floor(Math.random() * maxHeight);

    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';
}

function setRandomPosition5() {
    var element = document.getElementById('other3');
    var maxWidth = window.innerWidth - element.clientWidth;
    var maxHeight = window.innerHeight - element.clientHeight;

    var randomX = Math.floor(Math.random() * maxWidth);
    var randomY = Math.floor(Math.random() * maxHeight);

    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';
}

function setRandomPosition6() {
    var element = document.getElementById('other4');
    var maxWidth = window.innerWidth - element.clientWidth;
    var maxHeight = window.innerHeight - element.clientHeight;

    var randomX = Math.floor(Math.random() * maxWidth);
    var randomY = Math.floor(Math.random() * maxHeight);

    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';
}

function setRandomPosition7() {
    var element = document.getElementById('other5');
    var maxWidth = window.innerWidth - element.clientWidth;
    var maxHeight = window.innerHeight - element.clientHeight;

    var randomX = Math.floor(Math.random() * maxWidth);
    var randomY = Math.floor(Math.random() * maxHeight);

    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';
}

function setRandomPosition8() {
    var element = document.getElementById('other6');
    var maxWidth = window.innerWidth - element.clientWidth;
    var maxHeight = window.innerHeight - element.clientHeight;

    var randomX = Math.floor(Math.random() * maxWidth);
    var randomY = Math.floor(Math.random() * maxHeight);

    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';
}

function setRandomPosition9() {
    var element = document.getElementById('other7');
    var maxWidth = window.innerWidth - element.clientWidth;
    var maxHeight = window.innerHeight - element.clientHeight;

    var randomX = Math.floor(Math.random() * maxWidth);
    var randomY = Math.floor(Math.random() * maxHeight);

    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';
}

function setRandomPosition10() {
    var element = document.getElementById('other8');
    var maxWidth = window.innerWidth - element.clientWidth;
    var maxHeight = window.innerHeight - element.clientHeight;

    var randomX = Math.floor(Math.random() * maxWidth);
    var randomY = Math.floor(Math.random() * maxHeight);

    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';
}

function success() {
    alert('Sucsessfully Submitted!')
    document.getElementById('pictureMeme').style.display = 'block'
}

function error() {
    alert('Error Wrong Button')
}