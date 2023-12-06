const { ApplicationCommandOptionType, PermissionFlagsBits} = require('discord.js');
const { Snake } = require('discord-gamecord');


  module.exports = {
    deleted: false,
    name: 'snake',
    description: 'Hadík!',

    callback: (client, interaction) => {

      const Game = new Snake({
        message: interaction,
        isSlashGame: true,
        embed: {
          title: 'Hadík',
          overTitle: 'Koniec hry',
          color: '#5865F2'
        },
        emojis: {
          board: '⬛',
          food: '🍎',
          up: '⬆️', 
          down: '⬇️',
          left: '⬅️',
          right: '➡️',
        },
        stopButton: 'Stop',
        timeoutTime: 60000,
        snake: { head: '🟢', body: '🟩', tail: '🟩', over: '💀' },
        foods: ['🍎', '🍇', '🍊', '🫐', '🥕', '🥝', '🌽'],
        playerOnlyMessage: 'Iba {player} môže použiť danú interakciu.'
      });

      Game.startGame();
      Game.on('gameOver', result => {
        console.log(result);  // =>  { result... }
      });
    },
  };
  