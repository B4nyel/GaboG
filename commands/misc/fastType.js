const { ApplicationCommandOptionType, PermissionFlagsBits} = require('discord.js');
const { FastType } = require('discord-gamecord');

module.exports = {
    deleted: false,
    name: 'rychle-pisanie',
    description: 'Otestuj svoju rýchlosť písania!',

    callback: (client, interaction) => {

        const Game = new FastType({
            message: interaction,
            isSlashGame: true,
            embed: {
              title: 'Fast Type',
              color: '#5865F2',
              description: 'You have {time} seconds to type the sentence below.'
            },
            timeoutTime: 60000,
            sentence: 'Some really cool sentence to fast type.',
            winMessage: 'You won! You finished the type race in {time} seconds with wpm of {wpm}.',
            loseMessage: 'You lost! You didn\'t type the correct sentence in time.',
          });
          
          Game.startGame();
          Game.on('gameOver', result => {
            console.log(result);  // =>  { result... }
          });
    },
  };
  