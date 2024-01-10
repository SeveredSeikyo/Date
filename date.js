document.addEventListener('mousemove', (e) => {
    const noButton = document.getElementById('noBtn');
    const bodyRect = document.body.getBoundingClientRect();
    const btnRect = noButton.getBoundingClientRect();
    const mouseX = e.clientX - bodyRect.left;
    const mouseY = e.clientY - bodyRect.top;

    // Calculate new button position to move away from the cursor
    const newX = mouseX - (btnRect.width / 2);
    const newY = mouseY - (btnRect.height / 2);

    // Set the new position
    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';
});
