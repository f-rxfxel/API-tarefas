const allStatus = ["FEITO", "A FAZER", "FAZENDO"]

const validar = (dados) => {
    let valido = true

    if(!allStatus.includes(dados.status)){
        valido = false
    }

    return valido
}

module.exports = validar