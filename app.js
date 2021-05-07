const { argv } = require('./config/yargs');
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//let base = "2";
// Introducido por comandos en linea:
// node app --base=<el numero que deseas saber su tabla>
//console.log(argv.limite);
//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo creado fue: ${archivo.green}`))
            .catch(err => console.log(err))
        break;

    default:
        console.log('Comando no reconocido');
}