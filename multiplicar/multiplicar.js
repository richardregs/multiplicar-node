const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log(`===============================`.green);
    console.log(`= tabla de multiplicar del ${base} =`.green);
    console.log(`===============================`.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${i} * ${base} = ${i*base}`);
    }
}

crearArchivo = async(base, limite = 10) => {
    if (!Number(base)) {
        throw new Error('No se introdujo un numero');
    } else {
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${i} * ${base} = ${i*base}\n`
        }
        fs.writeFile(`tablas/tabla-del-${base}.txt`, data, (err) => {
            if (err) {
                throw new Error(err);
            }
        });
        return `tablas/tabla-del-${base}.txt`;
    }
}

module.exports = {
    crearArchivo,
    listarTabla,
}