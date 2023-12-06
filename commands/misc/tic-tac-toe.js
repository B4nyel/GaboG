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
            turnMessage: '{emoji} | Its turn of player **{player}**.',
            winMessage: '{emoji} | **{player}** won the TicTacToe Game.',
            tieMessage: 'The Game tied! No one won the Game!',
            timeoutMessage: 'The Game went unfinished! No one won the Game!',
            playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
          });
          
          Game.startGame();
          Game.on('gameOver', result => {
            console.log(result);  // =>  { result... }
          });
    },
  };
  