const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildVoiceStates] });
const targetMoveChannel = '985273253360726017';
const solitaryConfinement = '1322320398603391059';
const Alex = '1052255855518695554';

client.once(Events.ClientReady, (readyClient) => {
	console.log(`${readyClient.user.displayName} is ready!`);
});



client.on('voiceStateUpdate', (oldState, newState) => {
  if (newState.channelId && newState.channelId !== targetMoveChannel, solitaryConfinement) {
    if (newState.member.id === Alex) {
		newState.member.voice.setChannel(targetMoveChannel)
		}
	}
});

client.on(Events.MessageCreate, async (message) => {
	if (!message || message.author?.bot) return;

	const targetId = reactionChannelId = '986667448449241129';
	if (message.channel?.id === targetId) {
		try {
			await message.react('⬆️');
			await message.react('⬇️');
		} catch (err) {
			console.error('Failed to add reactions:', err);
		}
	}
});

client.login(token);