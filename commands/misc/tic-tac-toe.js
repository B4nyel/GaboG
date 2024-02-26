const { ApplicationCommandOptionType, PermissionFlagsBits} = require('discord.js');
const { TicTacToe } = require('discord-gamecord');

  module.exports = {
    deleted: false,
    name: 'tic-tac-toe',
    description: 'Piškvorky!',
    options: [
        {
          name: 'opponent',
          description: 'Vyber protihráča',
          required: true,
          type: ApplicationCommandOptionType.User,
        }
      ],  

    callback: (client, interaction) => {

        const Game = new TicTacToe({
            message: interaction,
            isSlashGame: true,
            opponent: interaction.options.getUser('opponent'),
            embed: {
              title: 'Tic Tac Toe',
              color: '#5865F2',
              statusTitle: 'Status',
              overTitle: 'Game Over'
            },
            emojis: {
              xButton: '❌',
              oButton: '🔵',
              blankButton: '➖'
            },
            mentionUser: true,
            timeoutTime: 60000,
            xButtonStyle: 'DANGER',
            oButtonStyle: 'PRIMARY',
            turnMessage: '{emoji} | Na rade je **{player}**.',
            winMessage: '{emoji} | **{player}** vyhral piškvorky.',
            tieMessage: 'Remíza! Nikto nevyhral!',
            timeoutMessage: 'Hra bola ukončená! Nikto nevyhral!',
            playerOnlyMessage: 'Iba {player} a {opponent} môžu použiť danú interakciu.'
          });
          
          Game.startGame();
          Game.on('gameOver', result => {
            console.log(result);  // =>  { result... }
          });
    },
  };
  