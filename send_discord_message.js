const axios = require('axios');

// Replace 'YOUR_WEBHOOK_URL' with your actual Discord webhook URL
const WEBHOOK_URL = 'https://discord.com/api/webhooks/1235292044721782939/sJA4AKOgA9-Uze7FfvfLxsDQGos3eqfbPEOFuGGZKmT8KqL-lEjcnocvyUT1jhWJQElZ';

async function sendDiscordMessage(message) {
    try {
        const response = await axios.post(WEBHOOK_URL, {
            content: message,
            allowed_mentions: {
                parse: ['everyone']
            }
        });

        if (response.status === 204) {
            console.log('Message sent successfully');
        } else {
            console.error(`Failed to send message. Status code: ${response.status}`);
        }
    } catch (error) {
        console.error('An error occurred while sending the message:', error);
    }
}

function formatTime(days) {
    return `@everyone **${days.toString().padStart(2, '0')}** days left`;
}

async function main() {
    let days = 40;

    let isFirstDay = true;

    while (days >= 0) {
        if (isFirstDay || days === 0) {
            const message = `**WA A ZAML NOUD T9RA BA9ALIIK** "${formatTime(days)}"`;
            sendDiscordMessage(message);
            isFirstDay = false;
        }
        
        await new Promise(resolve => setTimeout(resolve, 86400000)); // Wait for 1 day (86400000 milliseconds)
        
        days -= 1;
    }
}

main();


