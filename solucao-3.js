const faturamento = require('./dados.json'); 

function minValue(faturamento){
    let minvalue = faturamento[0].valor;
    faturamento.forEach(dia => {
        if(dia.valor < minvalue && dia.valor != 0){
            minvalue = dia.valor;
        }                
    });
    console.log(`R$ ${minvalue} é o menor faturamento do mês`);
}

function maxValue(faturamento){
    let maxvalue = faturamento[0].valor;
    faturamento.forEach(dia => {
        if(dia.valor > maxvalue && dia.valor != 0){
            maxvalue = dia.valor;
        }                
    });
    console.log(`R$ ${maxvalue} é o maior faturamento do mês`);
}


function daysAboveAvg(faturamento){
    let avg = 0;
    let valid_days = 0;
    let above_days = 0; 
    faturamento.forEach(dia => {
        if(dia.valor > 0){
            avg += dia.valor;
            valid_days += 1;
        }                
    });
    avg = avg/valid_days;
    console.log(avg)
    faturamento.forEach(dia => {
        if(dia.valor > avg){
            above_days += 1;
        }                
    });
    console.log(`Existem ${above_days} dias com faturamento acima da média`)
}


minValue(faturamento)
maxValue(faturamento)
daysAboveAvg(faturamento)