const {
    ApplicationCommandOptionType,
    PermissionFlagsBits,
  } = require('discord.js');
  
  module.exports = {
    deleted: false,
    name: 'factorial',
    description: 'Funkcia na výpočet faktoriálu',
    // devOnly: Boolean,
    // testOnly: Boolean,
    options: [
      {
        name: 'x',
        description: 'zadajte hodnotu x!',
        required: true,
        type: ApplicationCommandOptionType.Number,
      }
    ],  
    callback: (client, interaction) => {
        let x = interaction.options.getNumber('x');
        
        function factorialize(num) {
            if (num === 0 || num === 1)
              return 1;
            for (var i = num - 1; i >= 1; i--) {
              num *= i;
            }
            return num;
          }
          interaction.reply(x + "! = " + factorialize(x));
    },
  };
  