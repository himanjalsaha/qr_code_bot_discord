const{Client,GatewayIntentBits, Guild,Routes,MessageAttachment, AttachmentBuilder,Discord} = require('discord.js' );
const {REST} = require('@discordjs/rest')
const fs = require('fs')
const dotenv = require('dotenv').config()
const client = new Client({intents : [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });
const TOKEN = process.env.TOKEN_DISCORD;
const CLIENT_ID = process.env.client_id;
const GUILD_ID = process.env.guild_id;
const rest = new REST({ version: '10' }).setToken(TOKEN);
const QRCode = require('qrcode');
const { resolve } = require('path');
const { rejects } = require('assert');


client.login(process.env.TOKEN_DISCORD);

client.on('ready', () =>{
  console.log(`Your discord bot ${client.user.tag} is online now`)
} )

client.on('interactionCreate', async(interaction)=>{
  const link = interaction.options.getString('link')

  async function qrcodegenerate(){
    

  return new Promise((resolve,reject)=>{

    QRCode.toFile(`codegenerated/file.png`, link, {
      errorCorrectionLevel: 'H'
    }, function(err) {
      if (err){
        reject (err);
      } 
      else{
        console.log('QR code saved!');
        resolve();
      } 
    });
   
  })

  }


async function returnqr(){
  await qrcodegenerate();
  interaction.reply({content : `Here is the Qr code generated for ${link}`})

  const imageFile = fs.readFileSync(`codegenerated/file.png`);
  // const qrCodeBuffer = new MessageAttachment(imageFile, 'image.jpg');

 interaction.channel.send({files:[{attachment: imageFile}]});

}

returnqr();


  // const attachment = new Discord.AttachmentBuilder('qrbot/codegenerated/file.png');
  


 

  // 
  // interaction.reply({ files: [attachment] });
})





//   client.on('InteractionCreate', async(interaction) => {
//     QRCode.toBuffer(`codegenerated/file.png`, link, {
//       errorCorrectionLevel: 'H'
//     }, function(err) {
//       if (err) throw err;
//       console.log('QR code saved!');
//     });

  
//  })

// }
















async function slashcommand(){
    const commands = [
        {
          name: 'create',
          description: 'creates a qr code of given link',
          options : [{
            name : 'link',
            description : 'add link',
            type : 3,
            required : true,

          }],
      
        },
        
      ];
      
      
      try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands(CLIENT_ID,GUILD_ID), 
        { body: commands,
         });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }

}

slashcommand();







