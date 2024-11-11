const arrow = document.getElementById('arrow');

document.addEventListener('mousemove', (event) => {
    // Calculate the center of the arrow image
    const rect = arrow.getBoundingClientRect();
    const arrowX = rect.left + rect.width / 2;
    const arrowY = rect.top + rect.height / 2;
    
    // Calculate the angle between the arrow and the mouse pointer
    const angle = Math.atan2(event.clientY - arrowY, event.clientX - arrowX);
    
    // Convert the angle from radians to degrees
    const angleDegrees = angle * (180 / Math.PI);
    
    // Rotate the arrow to face the mouse pointer
    arrow.style.transform = `rotate(${angleDegrees}deg)`;
});

const arrow2 = document.getElementById('arrow2');

document.addEventListener('mousemove', (event) => {
    // Calculate the center of the arrow image
    const rect = arrow2.getBoundingClientRect();
    const arrow2X = rect.left + rect.width / 2;
    const arrow2Y = rect.top + rect.height / 2;
    
    // Calculate the angle between the arrow and the mouse pointer
    const angle = Math.atan2(event.clientY - arrow2Y, event.clientX - arrow2X);
    
    // Convert the angle from radians to degrees
    const angleDegrees = angle * (180 / Math.PI);
    
    // Rotate the arrow to face the mouse pointer
    arrow2.style.transform = `rotate(${angleDegrees}deg)`;
});
