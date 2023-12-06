const { ApplicationCommandOptionType, PermissionFlagsBits} = require('discord.js');
const { TwoZeroFourEight } = require('discord-gamecord');


  module.exports = {
    deleted: false,
    name: '2048',
    description: 'Matematická hra!',

    callback: (client, interaction) => {

        const Game = new TwoZeroFourEight({
            message: message,
            isSlashGame: false,
            embed: {
              title: '2048',
              color: '#5865F2'
            },
            emojis: {
              up: '⬆️',
              down: '⬇️',
              left: '⬅️',
              right: '➡️',
            },
            timeoutTime: 60000,
            buttonStyle: 'PRIMARY',
            playerOnlyMessage: 'Iba {player} môže použiť danú interakciu.'
          });
          
          Game.startGame();
          Game.on('gameOver', result => {
            console.log(result);  // =>  { result... }
          });
    },
  };
  