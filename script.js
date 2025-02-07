// Simple interactivity for ExamHelper

document.addEventListener('DOMContentLoaded', () => {
    // Add an event listener to the welcome section
    const welcomeText = document.querySelector('header h1');

    welcomeText.addEventListener('click', () => {
        alert('Welcome to ExamHelper! Get ready to study smarter.');
    });

    // Add interactivity to the features section
    const featuresList = document.querySelector('main ul');
    featuresList.addEventListener('mouseover', () => {
        featuresList.style.color = '#ff5733';
    });

    featuresList.addEventListener('mouseout', () => {
        featuresList.style.color = '#000';
    });
});
