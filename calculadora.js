    function calculate(){
    let Peso = document.getElementById("Peso").value;
    let Altura = document.getElementById("Altura").value;

    var imc=Peso/(Altura) ** 2;


    let classification = ''
    
    if (imc < 18.5){
        classification = 'abaixo do peso '
    } else if (imc < 25) {
        classification = 'peso normal '
    } else if (imc < 30) {
        classification = 'acima do peso '
    } else if (imc < 35) {
        classification = 'obesidade grau I '
    } else if (imc < 41) {
        classification = 'obesidade grau II ' 
    } else {
        classification = 'obesidade grau III '
    } {
    document.getElementById("resultado").textContent = "seu imc e " + classification + imc;
    }
    }