const container = document.querySelector('.container');

for(let i = 0; i < 256; i++){
    const div = document.createElement('div');
    div.classList.add('pixel');
    div.style.cssText = 'box-sizing: border-box; background-color: black; height: 50px; width: 50px; border: 1px solid gray; padding: 0';
    
    container.appendChild(div);
};

const pixel = document.querySelectorAll('.pixel');

pixel.forEach(pixel => {
    pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor = 'green';
    });
});
