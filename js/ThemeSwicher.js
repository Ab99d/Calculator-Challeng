const ball = document.getElementById('ball');
const ballContainer = document.getElementById('ball-container');
const theBody = document.querySelector('body')

ballContainer.addEventListener('click', () => {

    if (ball.offsetLeft == 4) {
        ball.style.left = '22px';
        theBody.classList = 'theme-1';

    }else if (ball.offsetLeft == 22) {
        ball.style.left = '42px';
        theBody.classList = 'theme-2';

    }else if (ball.offsetLeft == 42) {
        ball.style.left = '4px';
        theBody.classList = '';
    }

});