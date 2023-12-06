const { ApplicationCommandOptionType, PermissionFlagsBits} = require('discord.js');
const { Slots } = require('discord-gamecord');
  module.exports = {
    deleted: false,
    name: 'ovocko',
    description: 'Zarob peniaze!',

    callback: (client, interaction) => {

        const Game = new Slots({
            message: interaction,
            isSlashGame: true,
            embed: {
              title: 'Slot Machine',
              color: '#5865F2'
            },
            slots: ['🍇', '🍊', '🍋', '🍌']
          });
          
          Game.startGame();
          Game.on('gameOver', result => {
            console.log(result);  // =>  { result... }
          });
    },
  };
  