// State tracking for the grid coordinates
let currentRow = 0;
let currentCol = 0;
const maxRows = 3;
const maxCols = 3;

// Find and focus element matching current coordinates
function updateFocus() {
    const nextFocusTarget = document.querySelector(
        `.nav-item[data-row="${currentRow}"][data-col="${currentCol}"]`
    );
    if (nextFocusTarget) {
        nextFocusTarget.focus();
    }
}

// Logic to shift coordinates based on direction strings
function moveFocus(direction) {
    switch (direction) {
        case 'up':
            if (currentRow > 0) currentRow--;
            break;
        case 'down':
            if (currentRow < maxRows - 1) currentRow++;
            break;
        case 'left':
            if (currentCol > 0) currentCol--;
            break;
        case 'right':
            if (currentCol < maxCols - 1) currentCol++;
            break;
    }
    updateFocus();
}

// 1. Keyboard Navigation Listeners
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            event.preventDefault();
            moveFocus('up');
            break;
        case 'ArrowDown':
            event.preventDefault();
            moveFocus('down');
            break;
        case 'ArrowLeft':
            event.preventDefault();
            moveFocus('left');
            break;
        case 'ArrowRight':
            event.preventDefault();
            moveFocus('right');
            break;
    }
});

// 2. Mobile Mobile On-Screen D-Pad Click Listeners
document.getElementById('dpad-up').addEventListener('click', () => moveFocus('up'));
document.getElementById('dpad-down').addEventListener('click', () => moveFocus('down'));
document.getElementById('dpad-left').addEventListener('click', () => moveFocus('left'));
document.getElementById('dpad-right').addEventListener('click', () => moveFocus('right'));

// Initialize focus on the first item when the page loads
window.addEventListener('DOMContentLoaded', () => {
    updateFocus();
});
