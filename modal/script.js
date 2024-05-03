document.addEventListener('DOMContentLoaded', () => {
    const btnElement = document.querySelector('button');
    const spamElement = document.querySelector('span');

    btnElement.addEventListener('click', () => {
        const yourName = prompt('Please enter your name:');
        spamElement.textContent = yourName;
    });
});