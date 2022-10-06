


function calculaParcela(){
    let total_compra = document.getElementById('valor').value
    
        let valor_parcela = total_compra
       	let i = 1
           while(total_compra>20){
  
            valor_parcela = total_compra/i
              if(i>6 || valor_parcela<20){
                valor_parcela = total_compra/(i-1)
                i = i - 1
                break
            }
 					i = i + 1
        }
        document.getElementById('resposta').innerHTML = `Numero de máximo de parcelas: ${i}\n
        Valor da parcela: R$ ${valor_parcela}`
}

var calcular = document.getElementById('calcular')
calcular.addEventListener("click", calculaParcela)