const {
    ApplicationCommandOptionType,
    PermissionFlagsBits,
  } = require('discord.js');
  
  module.exports = {
    deleted: false,
    name: 'kvadraticka',
    description: 'Funkcia na výpočet kvadratickej rovnice',
    // devOnly: Boolean,
    // testOnly: Boolean,
    options: [
      {
        name: 'a',
        description: 'zadajte hodnotu a',
        required: true,
        type: ApplicationCommandOptionType.Number,
      },
      {
        name: 'b',
        description: 'zadajte hodnotu b',
        required: true,
        type: ApplicationCommandOptionType.Number,
      },
      {
        name: 'c',
        description: 'zadajte hodnotu c',
        required: true,
        type: ApplicationCommandOptionType.Number,
      }
    ],  
    callback: (client, interaction) => {
        const a = interaction.options.getNumber('a');
        const b = interaction.options.getNumber('b');
        const c = interaction.options.getNumber('c');
        const d = b*b - 4*a*c;

        if (a == 0){
            interaction.reply('Rovnica nie je kvadratická.' + "\nRovnica má jedno riešenie : x = " + (-c/b));
            return 0;
        } 

        if (d < 0) {
            interaction.reply('Rovnica nemá riešenie v obore reálnych čísiel.');
        } else if (d == 0) {
            const x = -b/(2*a);
            interaction.reply("Rovnica má jedno riešenie : "+ 'x = ' + x);
        } else {
            const x1 = (-b + Math.sqrt(d))/(2*a);
            const x2 = (-b - Math.sqrt(d))/(2*a);
            interaction.reply("Rovnica má dve riešenia: " + '\nx1 = ' + x1 + '\nx2 = ' + x2);
        }
    },
  };
  