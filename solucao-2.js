function inFib(number){
    if(number <= 1 && number >= 0){
        console.log(`${number} faz parte da sequência de fibonacci`);
        return;
    }
    let q0 = 0;
    let q1 = 1;
    let atual = q0+q1;
    while(atual < number){
        q0 = q1;
        q1 = atual;
        atual = q0 + q1;        
    }
    if(atual == number){
        console.log(`${number} faz parte da sequência de fibonacci`);        
    }else{
        console.log(`${number} não faz parte da sequência de fibonacci`);
    }
    
}
inFib(0)
inFib(1)
inFib(12)
inFib(36)
inFib(144)
inFib(377)
inFib(4181)