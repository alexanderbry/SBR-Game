document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const gameArea = document.getElementById('game-area');
    const dialogueBox = document.getElementById('dialogue-box');
    const dialogueText = document.querySelector('.dialogue-text');
    const talkButton = document.getElementById('talk-button');

    const gridSize = 50; // Movement step in pixels
    let playerPosition = { top: 200, left: 300 };
    let facingDirection = 'down'; // Default direction
    let currentCharacterIndex = null;

    // Array of characters with their positions
    const characters = [
        {
            name: "Rizz Kevin Bramasta",
            gender: "Male",
            desc: "Akulah sang poros dunia.",
            img: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
            position: { top: 150, left: 250 },
        },
        {
            name: "Character 2",
            gender: "Female",
            desc: "She is a mysterious character.",
            img: "https://images.unsplash.com/photo-1586288010580-a2b6e0936483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
            position: { top: 300, left: 400 },
        },
        // Add more characters as needed
    ];

    // Player sprite images based on direction
    const playerSprites = {
        up: 'url("sprite-back.png")',
        down: 'url("sprite-front.png")',
        left: 'url("sprite-left.png")',
        right: 'url("sprite-right.png")',
    };

    const movePlayer = (direction) => {
        let newPosition = { ...playerPosition };

        switch (direction) {
            case 'left':
                newPosition.left -= gridSize;
                facingDirection = 'left';
                break;
            case 'up':
                newPosition.top -= gridSize;
                facingDirection = 'up';
                break;
            case 'right':
                newPosition.left += gridSize;
                facingDirection = 'right';
                break;
            case 'down':
                newPosition.top += gridSize;
                facingDirection = 'down';
                break;
        }

        // Keep player within bounds
        if (newPosition.left >= 0 && newPosition.left < gameArea.clientWidth - player.clientWidth &&
            newPosition.top >= 0 && newPosition.top < gameArea.clientHeight - player.clientHeight) {
            playerPosition = newPosition;
            player.style.left = playerPosition.left + 'px';
            player.style.top = playerPosition.top + 'px';
            player.style.backgroundImage = playerSprites[facingDirection];
        }

        checkForCharacterInteraction();
    };

    const checkForCharacterInteraction = () => {
        let interacting = false;

        characters.forEach((character, index) => {
            const charTop = character.position.top;
            const charLeft = character.position.left;
            const charSize = 50; // Size of character elements

            if (facingDirection === 'left' && playerPosition.left - gridSize === charLeft && playerPosition.top === charTop ||
                facingDirection === 'right' && playerPosition.left + gridSize === charLeft && playerPosition.top === charTop ||
                facingDirection === 'up' && playerPosition.top - gridSize === charTop && playerPosition.left === charLeft ||
                facingDirection === 'down' && playerPosition.top + gridSize === charTop && playerPosition.left === charLeft) {
                interacting = true;
                currentCharacterIndex = index;
                talkButton.style.display = 'block';
            }
        });

        if (!interacting) {
            talkButton.style.display = 'none';
            currentCharacterIndex = null;
        }
    };

    const displayCharacterDialogue = () => {
        if (currentCharacterIndex !== null) {
            const character = characters[currentCharacterIndex];
            dialogueText.textContent = `${character.name}: ${character.desc}`;
            dialogueBox.style.display = 'block';
        }
    };

    talkButton.addEventListener('click', () => {
        displayCharacterDialogue();
    });

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

    // Initialize character elements
    characters.forEach((character, index) => {
        const charElement = document.createElement('div');
        charElement.className = 'character';
        charElement.id = `character${index + 1}`;
        charElement.style.top = character.position.top + 'px';
        charElement.style.left = character.position.left + 'px';
        charElement.style.backgroundImage = `url(${character.img})`;

        // Add shadow for 3D effect
        const shadow = document.createElement('div');
        shadow.className = 'shadow';
        shadow.style.left = character.position.left + 'px';
        shadow.style.top = character.position.top + 'px';
        gameArea.appendChild(shadow);

        gameArea.appendChild(charElement);
    });

    // Initialize player sprite
    player.style.backgroundImage = playerSprites[facingDirection];
});
