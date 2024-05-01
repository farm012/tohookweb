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

function formatTime(days, hours, minutes) {
    return `@everyone **${days.toString().padStart(2, '0')}** days : **${hours.toString().padStart(2, '0')}** hours : **${minutes.toString().padStart(2, '0')}** minutes left`;
}

async function main() {
    let days = 40;
    let hours = 24;
    let minutes = 59;

    while (days >= 0 && hours >= 0 && minutes >= 0) {
        const message = formatTime(days, hours, minutes);
        sendDiscordMessage(message);
        await new Promise(resolve => setTimeout(resolve, 60000)); // Wait for 1 minute (60 seconds)
        
        minutes -= 1;
        if (minutes < 0) {
            minutes = 59;
            hours -= 1;
            if (hours < 0) {
                hours = 24;
                days -= 1;
            }
        }
    }
}

main();
