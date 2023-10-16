let valorOperacionTotal = 0;
let operacionRealizar = '';
let concatenacionOperacion1 = ""; 
let concatenacionGeneral = "";
let multiplicacionOperacion = 0;
const total =  document.getElementById("cal-input");

const numeros = ['1','2','3','4','5','6','7','8','9','0',
'+','/','*','-','%','.','=','CE','MC','MR','M+','M-']
document.getElementById('calculador').addEventListener('click', (e)=> {
        //console.log("Atributo data-type:", e.target.dataset.type);
        const valor = e.target.dataset.type;

        finByNumber(valor)
            .then(item =>{
                console.log(item);
               // aqui va la operacion a realizar

                let codigoAscii = item.charCodeAt();
                //console.log(codigoAscii);

                if(codigoAscii >= 48 && codigoAscii<=57){
                   concatenacionOperacion1 += item;
                   concatenacionGeneral += item;
                   if(operacionRealizar != ''){
                        switch(operacionRealizar){
                            case '+':
                             valorOperacionTotal = valorOperacionTotal + parseInt(concatenacionOperacion1);
                             concatenacionOperacion1 = ''
                             operacionRealizar = '';
                             console.log(valorOperacionTotal);
                             break;
                             case '-':
                             valorOperacionTotal = valorOperacionTotal - parseInt(concatenacionOperacion1);
                             concatenacionOperacion1 = ''
                             operacionRealizar = '';
                             console.log(valorOperacionTotal);
                             break;
                             case '*':
                             valorOperacionTotal = valorOperacionTotal * parseInt(concatenacionOperacion1);
                             concatenacionOperacion1 = ''
                             operacionRealizar = '';
                             console.log(valorOperacionTotal);
                             break;
                             case '/':
                             valorOperacionTotal = valorOperacionTotal / parseInt(concatenacionOperacion1);
                             concatenacionOperacion1 = ''
                             operacionRealizar = '';
                             console.log(valorOperacionTotal);
                             break;

                        }
                   }
                   total.value = concatenacionGeneral;
                }
                if(item === '+' || item === '-' || item === '*' || item === '/'){
                    if(concatenacionOperacion1 != ''){
                        valorOperacionTotal += parseInt(concatenacionOperacion1);
                        }
                        concatenacionOperacion1 = '';
                        operacionRealizar = item;
                        concatenacionGeneral += item;
                    total.value = concatenacionGeneral;
                }
                if(item === '='){
                   total.value = valorOperacionTotal;
                   concatenacionGeneral = "";    
                }
                if(item === 'CE'){
                    valorOperacionTotal = 0;
                    concatenacionOperacion1 = '';
                    concatenacionGeneral = '';
                    operacionRealizar = '';
                    total.value = '';    
                 }

            })
            .catch(e =>{
                console.log("Valor no encontrado en el sistema ", e )
            });
});

function finByNumber(item){
    let isElement  = numeros.find(element  => element === item)
    return new Promise((resolve, reject) =>{
        if(isElement){
            //console.log("paso aqui")
            resolve(isElement)
        }else{
            reject("Error");
        }
    })
}

