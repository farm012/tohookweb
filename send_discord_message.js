const fetch = require('node-fetch');

// Replace 'YOUR_WEBHOOK_URL' with your actual Discord webhook URL
const WEBHOOK_URL = 'https://discord.com/api/webhooks/1235292044721782939/sJA4AKOgA9-Uze7FfvfLxsDQGos3eqfbPEOFuGGZKmT8KqL-lEjcnocvyUT1jhWJQElZ';

async function sendDiscordMessage(message) {
    try {
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: message,
            }),
        });

        if (response.ok) {
            console.log('Message sent successfully');
        } else {
            console.error(`Failed to send message. Status code: ${response.status}`);
        }
    } catch (error) {
        console.error('An error occurred while sending the message:', error);
    }
}

async function main() {
    // Replace 'Your message here' with your desired message
    await sendDiscordMessage('Your message here');
}

main();
