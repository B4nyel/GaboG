module.exports = {
  deleted: false,
  name: 'ping',
  description: 'Pong! Zobraz odozvu od servera.',
  // devOnly: Boolean,
  testOnly: false,
  // options: Object[],
  // deleted: Boolean,

  callback: (client, interaction) => {
    interaction.reply(`Pong! ${client.ws.ping}ms`);
  },
};
