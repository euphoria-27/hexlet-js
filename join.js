import { program } from 'commander';

program
    .command('join')
    .option('--connector <string>', 'string that connects two arguments')
    .argument('[string1]', 'first string', 'test string one')
    .argument('[string2]', 'second string', 'test string two')
    .action((string1, string2, options) => {
        if(options.help) {
            console.log(program.help())
        } else {
            console.log(`${string1}${options.connector}${string2}`)
        }
        
    })

program.parse();

