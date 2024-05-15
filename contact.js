document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();  // Prevent the default form submission behavior

        // Extract the form data
        const nameInput = document.querySelector('input[name="Name"]');
        const emailInput = document.querySelector('input[name="email"]');
        const messageInput = document.querySelector('textarea[name="Message"]');

        const name = nameInput.value;
        const email = emailInput.value;
        const message = messageInput.value;
        const fullMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

        // Function to send the message to Telegram
        function sendTelegramMessage(fullMessage) {
            const botToken = '7073059910:AAE-KjA9a8wHzI9iDkmOfFa6EWuJhLcZOHQ'; // Use your actual bot token
            const chatId = '7165607497'; // Make sure this is the correct chat ID
            const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: fullMessage
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Clear the input fields
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';

                // Update the message for the user
                document.getElementById('msg').textContent = 'Numan got your message in Telegram. He will reply through your email within 24 hours. Thanks for contacting!';
            })
            .catch((error) => {
                console.error('Error:', error);
                document.getElementById('msg').textContent = 'Failed to send message.';
            });
        }

        // Call the function with the full message
        sendTelegramMessage(fullMessage);
    });
});
