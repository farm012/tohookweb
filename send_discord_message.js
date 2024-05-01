const got = require('got');

// Replace 'YOUR_WEBHOOK_URL' with your actual Discord webhook URL
const WEBHOOK_URL = 'https://discord.com/api/webhooks/1235292044721782939/sJA4AKOgA9-Uze7FfvfLxsDQGos3eqfbPEOFuGGZKmT8KqL-lEjcnocvyUT1jhWJQElZ';

async function sendDiscordMessage(message) {
    try {
        const response = await got.post(WEBHOOK_URL, {
            json: {
                content: message,
            },
            responseType: 'json',
        });

        if (response.statusCode === 204) {
            console.log('Message sent successfully');
        } else {
            console.error(`Failed to send message. Status code: ${response.statusCode}`);
        }
    } catch (error) {
        console.error('An error occurred while sending the message:', error);
    }
}

async function main() {
    // Replace 'Your message here' with your desired message
    setInterval(() => {
        sendDiscordMessage('Your message here');
    }, 2000); // Send message every 2 seconds
}

main();

