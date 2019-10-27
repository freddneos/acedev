aceDev(' d oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdgr' , -3);
console.log("-----------------------------------------------------------")
aceDev('mxvw gr qrw fuhdwh d iloh fdoohg -ui. oduub zdoo',-3);


function aceDev(crypto , pos) {

    //TODO: lowecases
    const willDecrypt = crypto.split("");
    let decrypted = "";

    willDecrypt.forEach((letra) => {
            decrypted += decrypt(letra , pos);
    });

    console.log('Palavra encriptada -> ',crypto);    
    console.log('Palavra decriptada -> ',decrypted);

}

function decrypt(letra , pos){

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"];


    
    posicaoDaLetra = alfabeto.indexOf(letra);

    if(posicaoDaLetra < 0){
        return letra;
    }

    let newPos = posicaoDaLetra+pos
    
    //numero negativo
    if(newPos < 0){
        newPos = alfabeto.length + newPos;
    }

    //numero acima de 24
    if( newPos >= alfabeto.length){
        newPos = (newPos - alfabeto.length)
    }

    
    letraDescrypt = alfabeto[newPos];

    return letraDescrypt;

}