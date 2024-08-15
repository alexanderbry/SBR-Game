document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const gameArea = document.getElementById('game-area');
    let playerPosition = { top: 180, left: 280 };

    const movePlayer = (direction) => {
        const step = 10; // Movement speed

        switch (direction) {
            case 'left':
                if (playerPosition.left > 0) {
                    playerPosition.left -= step;
                }
                break;
            case 'up':
                if (playerPosition.top > 0) {
                    playerPosition.top -= step;
                }
                break;
            case 'right':
                if (playerPosition.left < gameArea.clientWidth - player.clientWidth) {
                    playerPosition.left += step;
                }
                break;
            case 'down':
                if (playerPosition.top < gameArea.clientHeight - player.clientHeight) {
                    playerPosition.top += step;
                }
                break;
        }

        player.style.left = playerPosition.left + 'px';
        player.style.top = playerPosition.top + 'px';
    };

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowLeft':
                movePlayer('left');
                break;
            case 'ArrowUp':
                movePlayer('up');
                break;
            case 'ArrowRight':
                movePlayer('right');
                break;
            case 'ArrowDown':
                movePlayer('down');
                break;
        }
    });
});
