document.getElementById('copy-btn').addEventListener('click', () => {
    const code = document.getElementById('code').value;

    // Copy code to clipboard
    navigator.clipboard.writeText(code).then(() => {
        const successMessage = document.getElementById('success-message');
        successMessage.classList.remove('hidden');

        // Hide the success message after 2 seconds
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});
