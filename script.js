// Copy button functionality
document.getElementById('copy-btn').addEventListener('click', () => {
    const code = document.getElementById('code').value;

    // Copy the code to the clipboard
    navigator.clipboard.writeText(code).then(() => {
        const successMessage = document.getElementById('success-message');
        successMessage.classList.remove('hidden');

        // Show the success message for 2 seconds
        setTimeout(() => {

window.location.href = "https://www.seflinapp.com"; // Replace with the
            
            successMessage.classList.add('hidden');
        }, 2000);

        // Show the confirm button
        const confirmButton = document.getElementById('confirm-btn');
        confirmButton.classList.remove('hidden');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});

// Confirm button functionality
document.getElementById('confirm-btn').addEventListener('click', () => {
    window.location.href = "page2.html";
});
