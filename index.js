const button = document.querySelectorAll('button')
for (i = 0; i < button.length; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', function () {
        let buttonInnerHTML = this.innerHTML;
        drum(buttonInnerHTML);
        animation(buttonInnerHTML)
    })
}
document.addEventListener('keypress', function (event) {
    drum(event.key);
    animation(event.key)
})

function drum(key) {
    switch (key) {
        case 'w':
            new Audio('sounds/kick-bass.mp3').play()
            break;
        case 'a':
            new Audio('sounds/snare.mp3').play()
            break;
        case 's':
            new Audio('sounds/tom-1.mp3').play()
            break;
        case 'd':
            new Audio('sounds/tom-2.mp3').play()
            break;
        case 'j':
            new Audio('sounds/tom-3.mp3').play()
            break;
        case 'k':
            new Audio('sounds/tom-4.mp3').play()
            break;
        case 'l':
            new Audio('sounds/crash.mp3').play()
            break;
        default:
            new Audio('sounds/crash.mp3').play()
            break;
    }
}
function animation(currentKey) {
    let currentButton = document.querySelector('.' + currentKey);
    currentButton.classList.add('pressed');
    setTimeout(function () {
        currentButton.classList.remove('pressed')
    }, 100)
}