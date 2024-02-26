const { ApplicationCommandOptionType, PermissionFlagsBits} = require('discord.js');
const { Minesweeper } = require('discord-gamecord');

module.exports = {
    deleted: false,
    name: 'miny',
    description: 'Zahraj si míny!',

    callback: (client, interaction) => {

        const Game = new Minesweeper({
            message: interaction,
            isSlashGame: true,
            embed: {
              title: 'Míny',
              color: '#5865F2',
              description: 'Stlač tlačidlá pre zobrazenie políčok.'
            },
            emojis: { flag: '🚩', mine: '💣' },
            mines: 5,
            timeoutTime: 60000,
            winMessage: 'Vyhral si! Vyhol si sa všetkým mínam.',
            loseMessage: 'Prehral si! Vyhni sa míne nabudúce.',
            playerOnlyMessage: 'Iba {player} môže použiť danú interakciu.'
          });
          
          Game.startGame();
          Game.on('gameOver', result => {
            console.log(result);  // =>  { result... }
          });
    },
  };
  