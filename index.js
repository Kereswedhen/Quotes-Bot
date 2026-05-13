const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildVoiceStates] });
const targetMoveChannel = '985273253360726017';
const solitaryConfinement = '1322320398603391059';
const Alex = '1052255855518695554';
//log login event
client.once(Events.ClientReady, (readyClient) => {
	console.log(`${readyClient.user.displayName} is ready!`);
});

/*
//Move Alex from any vc to multi gaming
client.on('voiceStateUpdate', (oldState, newState) => {
  if (newState.channelId && newState.channelId !== targetMoveChannel, solitaryConfinement) {
    if (newState.member.id === Alex) {
		newState.member.voice.setChannel(targetMoveChannel)
		}
   }
});
*/

// React to quotes with vote arrows
client.on(Events.MessageCreate, async (message) => {
	if (!message || message.author?.bot) return;

	const quotesChannel = quotesChannelId = '986667448449241129';
	if (message.channel.id === quotesChannel) {
		try {
			await message.react('⬆️');
			await message.react('⬇️');
		} catch (err) {
			console.error('Failed to add reactions:', err);
		}
	}
});
// Clip channel logic
client.on(Events.MessageCreate, async (message) => {
	if (!message || message.author?.bot) return;

	const clipChannel = clipChannelId = '1504088140061741066';
	if (message.channel.id === clipChannel) {
		try {
			if (message.content.includes('https://medal.tv/')) {
				const clip = message.content.toString();
				message.reply("test");
			}
		} catch (err) {
			console.error('Failed to resend clip:', err);
		}
	}
});
// login to the bot
client.login(token);