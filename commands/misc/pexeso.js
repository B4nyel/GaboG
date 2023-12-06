const { ApplicationCommandOptionType, PermissionFlagsBits} = require('discord.js');
const { MatchPairs } = require('discord-gamecord');

  module.exports = {
    deleted: false,
    name: 'pexeso',
    description: 'Hľadaj dvojice!',

    callback: (client, interaction) => {

        
        const Game = new MatchPairs({
            message: interaction,
            isSlashGame: true,
            embed: {
            title: 'Match Pairs',
            color: '#5865F2',
            description: '**Click on the buttons to match emojis with their pairs.**'
            },
            timeoutTime: 60000,
            emojis: ['🍉', '🍇', '🍊', '🥭', '🍎', '🍏', '🥝', '🥥', '🍓', '🫐', '🍍', '🥕', '🥔'],
            winMessage: '**You won the Game! You turned a total of `{tilesTurned}` tiles.**',
            loseMessage: '**You lost the Game! You turned a total of `{tilesTurned}` tiles.**',
            playerOnlyMessage: 'Only {player} can use these buttons.'
        });
        
        Game.startGame();
        Game.on('gameOver', result => {
            console.log(result);  // =>  { result... }
        });
    },
  };
  