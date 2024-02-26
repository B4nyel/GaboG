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
            winMessage: '**Vyhral si! Otočil si celkovo `{tilesTurned}` políčok.**',
            loseMessage: '**Prehral si! Otočil si celkovo `{tilesTurned}` políčok.**',
            playerOnlyMessage: 'Iba {player} môže použiť danú interakciu.'
        });
        
        Game.startGame();
        Game.on('gameOver', result => {
            console.log(result);  // =>  { result... }
        });
    },
  };
  