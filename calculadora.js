var displayBuffer = "";
var numero = "";
var termo = [undefined,undefined,undefined];
var resultado = undefined;


function pressNum(num){
     numero = numero.concat(num.innerHTML);
     showDisplay(num.innerHTML);       
}

function pressOperator(op){ /*Faz os botões +,-,* e / funcionarem */
     termo[0]  = numero; /*primeiro termo*/
     termo[1]  = op.innerHTML  /*operador*/
     showDisplay(op.innerHTML);
     numero="";
}

function pressEqual(){
     termo[2] = numero;
     switch(termo[1]){
        case '+':
             resultado = Number(termo[0])+Number(termo[2]);
            break;
        case '*':
            resultado = Number(termo[0])*Number(termo[2]);    
            break;
        case '/':
            resultado = Number(termo[0])/Number(termo[2]);    
            break;
        
     }
     resultado = Number(termo[0])+Number(termo[2]);
     clearDisplay();
     showDisplay(resultado)
}

function clearMemory(){ /*Função que faz o botão C funcionar dentro da Memória*/
     numero = "";
}

function clearDisplay(){ /*Faz o botão C limpar o Conteúdo da Tela*/
     displayBuffer = "";
     var tela = document.getElementById('display');
     tela.value = displayBuffer;
}

function clearAll(){ /*Faz o botão C limpar dentro da memória*/
    clearDisplay();
    clearMemory();
}

function showDisplay(conteudo){ /*faz o numero aparecer no display (tela)*/
     displayBuffer = displayBuffer.concat(conteudo);
     var tela = document.getElementById('display');
     tela.value = displayBuffer;
}