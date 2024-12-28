const button = document.createElement('button');
button.innerText = 'Click me';
button.classList.add('animated-button', 'ripple-effect');

button.onclick = () => {
    button.classList.add('active');
    window.open('https://www.youtube.com/watch?v=ekr2nIex040', '_blank');
    import('./module').then(module => {
        module.default();
    });
    setTimeout(() => {
        button.classList.remove('active');
    }, 200);
};

document.body.appendChild(button);