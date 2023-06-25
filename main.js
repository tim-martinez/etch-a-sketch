
//declare variable for container
const container = document.querySelector('.container');

//generate grid within 960px
drawGrid(16)

function drawGrid(input){
    for(let i = 0; i < (input * input); i++){
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.style.cssText = 'box-sizing: border-box; background-color: black; border: 1px solid gray;';
        div.style.height = div.style.width = 960 / input + 'px';
        container.appendChild(div);
    };
};

//rgb effect 

function rgb(){

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let rgb = 'rgb('+ red + ', ' + green + ', ' + blue + ')'; 

    return rgb;

}
//"pixel" hover effect
pixelEffect();

function pixelEffect(){  
    const pixel = document.querySelectorAll('.pixel');

    pixel.forEach(pixel => {
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = rgb();
        });
    });
};

//click button prompt user and generate new grid
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    
    //prompt user 
    let input = prompt('Enter a new grid size up to 100 pixels.');
    //limit input to 1-100 
    while (input > 100 || input < 1){
        input = prompt('Enter a new grid size up to 100 pixels.')
    };

    //remove old divs
    while(container.firstChild){
        container.removeChild(container.firstChild);
    };

    drawGrid(input);

    pixelEffect();

});