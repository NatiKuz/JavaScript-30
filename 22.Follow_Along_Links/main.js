const triggers = document.querySelectorAll('a');
// console.log(triggers);
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlighLink() {
    // console.log('Highlight!!');
    // console.log(this);
    const linkCoords = this.getBoundingClientRect();
    // console.log(linkCoords);

    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    };

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
}

triggers.forEach(a => a.addEventListener('mouseenter', highlighLink));