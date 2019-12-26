// window.addEventListener('keydown', function(e) {
//     // console.log(e.keyCode);
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    // this.console.log(key);
    // key.addClass('playing');
    key.classList.add('playing');
}

function removeTransition(e) {
    // console.log(e);
    if (e.propertyName !== 'transform') return;
    // console.log(e.property.name);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);