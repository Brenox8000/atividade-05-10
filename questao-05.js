


function calculaParcelas() {
    let valor =  document.getElementById('valor').value
    let num_parcelas =  document.getElementById('parcelas').value
    let valor_parcelas = Math.floor(valor / num_parcelas)
    let valor_final = valor_parcelas + (valor % num_parcelas)

    for (let i = 1; i < num_parcelas; i++) {
        document.getElementById('resposta').insertAdjacentHTML('beforeend', `${i}ª parcela: R$ ${valor_parcelas.toFixed(2)}\n`)

    }

    document.getElementById('resposta').insertAdjacentHTML('beforeend', `${num_parcelas}ª parcela: R$ ${valor_final.toFixed(2)}`)
    
}

var calcular = document.getElementById('calcular')
calcular.addEventListener("click", calculaParcelas)