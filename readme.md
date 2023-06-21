Discord QR Code Bot
This is a Discord bot that generates QR codes for given links using the Discord.js library and the qrcode module.

Prerequisites
Before running the bot, make sure you have the following installed:

Node.js (version 12.0.0 or higher)
Discord.js (version 13.0.0 or higher)
qrcode (version 1.4.4 or higher)
dotenv (version 10.0.0 or higher)
Getting Started
To get started with the bot, follow these steps:

Clone this repository to your local machine.
Open a terminal and navigate to the project directory.
Install the required dependencies by running the following command:
Copy code
npm install
Create a .env file in the project directory and add the following environment variables:
makefile
Copy code
TOKEN_DISCORD=YOUR_DISCORD_TOKEN
client_id=YOUR_CLIENT_ID
guild_id=YOUR_GUILD_ID
Replace YOUR_DISCORD_TOKEN, YOUR_CLIENT_ID, and YOUR_GUILD_ID with your own Discord bot token, client ID, and guild ID, respectively.
Run the bot using the following command:
Copy code
node bot.js
Usage
Once the bot is running and connected to your Discord server, you can use the following command:

bash
Copy code
/create <link>
Replace <link> with the URL for which you want to generate a QR code. The bot will generate a QR code image and send it as a reply in the same channel.

Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Any contributions are welcome!

License
This project is licensed under the MIT License.


