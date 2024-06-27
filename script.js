function showGift() {
    const giftImage = document.getElementById('giftImage');
    const main_container = document.getElementById('main-container');
    const container = document.getElementById('container');
    const numConfettis = 200;

    giftImage.src = "opened.png";
    for (let i = 0; i < numConfettis; i++) {
        createConfetti();
    } 

    setTimeout(() => {
        container.classList.add('fade-out');
    }, 2000);
    
    setTimeout(() => {
        main_container.classList.add('fade-in');
    }, 4000); 
}
function createConfetti() {

    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    const buttonRect = document.getElementById('giftImage').getBoundingClientRect();
    const randomX = buttonRect.left + Math.random() * buttonRect.width;
    const randomY = buttonRect.top + Math.random() * buttonRect.height;

    confetti.style.left = randomX + 'px';
    confetti.style.top = randomY + 'px';

    // Calculate random direction for the explosion
    const angle = Math.random() * Math.PI * 2; // uhol
    const distance = Math.random() * 400 + 100; // vzdialenost od stredu

    const color = ['#f00', '#0f0', '#00f', '#ff0', '#0ff'];
    const randomColor = color[Math.floor(Math.random() * color.length)];
    confetti.style.backgroundColor = randomColor;

    // setnut xy v css
    confetti.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
    confetti.style.setProperty('--ty', Math.sin(angle) * distance + 'px');

    //Nahodime confetti do kontainera
    document.getElementById('confettiContainer').appendChild(confetti);

    // cleanup 
    confetti.addEventListener('animationend', function() {
        confetti.remove();
    });
}