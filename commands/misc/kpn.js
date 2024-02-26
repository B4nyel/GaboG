const { ApplicationCommandOptionType, PermissionFlagsBits} = require('discord.js');
const { RockPaperScissors } = require('discord-gamecord');

  module.exports = {
    deleted: false,
    name: 'kamen-papier-noznice',
    description: 'Kameň, papier, nožnice!',
    options: [
        {
          name: 'opponent',
          description: 'Vyber protihráča',
          required: true,
          type: ApplicationCommandOptionType.User,
        }
      ],  

    callback: (client, interaction) => {

        const Game = new RockPaperScissors({
            message: interaction,
            isSlashGame: true,
            opponent: interaction.options.getUser('opponent'),
            embed: {
              title: 'Kameň papier nožnice',
              color: '#5865F2',
              description: 'Stlač tlačidlo pre voľbu.'
            },
            buttons: {
              rock: 'Kameň',
              paper: 'Papier',
              scissors: 'Nožnice'
            },
            emojis: {
              rock: '🌑',
              paper: '📰',
              scissors: '✂️'
            },
            mentionUser: true,
            timeoutTime: 60000,
            buttonStyle: 'PRIMARY',
            pickMessage: 'Zvolil si {emoji}.',
            winMessage: '**{player}** vyhral! Gratulácia!',
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
  