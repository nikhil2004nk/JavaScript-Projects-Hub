function getRandomHexColor() {
    const hexChars = '0123456789ABCDEF';
    let color = '#';

    // Add 6 random hex characters
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hexChars.length);
        color += hexChars[randomIndex];
    }

    return color;
}

function changeColor() {
    const newColor = getRandomHexColor();

    // Change background
    document.body.style.backgroundColor = newColor;

    // Update color text
    document.getElementById('colorCode').textContent = newColor;
}


// function changeColor() {
//     const newColor = getRandomHexColor();

//     // Change the background of the container div (NOT body)
//     const container = document.querySelector('.container');
//     container.style.backgroundColor = newColor;

//     // Update the color text
//     document.getElementById('colorCode').textContent = newColor;
// }
