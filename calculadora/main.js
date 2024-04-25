window.addEventListener("load", function() {
    
    const resultado = document.getElementById('resultado')
    const btnC = document.getElementById('btn-c')
    const divisao = document.getElementById('divisao')
    const multiplicacao = document.getElementById('multiplicacao')
    const subtrair = document.getElementById('subtrair')
    const somar = document.getElementById('somar')
    const btn1 = document.getElementById('btn-1')
    const btn2 = document.getElementById('btn-2')
    const btn3 = document.getElementById('btn-3')
    const btn4 = document.getElementById('btn-4')
    const btn5 = document.getElementById('btn-5')
    const btn6 = document.getElementById('btn-6')
    const btn7 = document.getElementById('btn-7')
    const btn8 = document.getElementById('btn-8')
    const btn9 = document.getElementById('btn-9')
    const btn0 = document.getElementById('btn-0')
    const btnPonto = document.getElementById('btn-ponto')
    const btnIgual = document.getElementById('btn-igual')

    let ultimoCaractereOperador = false;

    btnC.addEventListener('click', function(){
        resultado.textContent = ''
        ultimoCaractereOperador = false
    });
    divisao.addEventListener('click', function(){
        adicionarOperador('/')
    });
    multiplicacao.addEventListener('click', function(){
        adicionarOperador('*')
    });
    subtrair.addEventListener('click', function(){
        adicionarOperador('-')
    });
    somar.addEventListener('click', function(){
        adicionarOperador('+')
    });
    
    btn1.addEventListener('click', function(){
        adicionarNumero('1')
    });
    btn2.addEventListener('click', function(){
        adicionarNumero('2')
    });
    btn3.addEventListener('click', function(){
        adicionarNumero('3')
    });
    btn4.addEventListener('click', function(){
        adicionarNumero('4')
    });
    btn5.addEventListener('click', function(){
        adicionarNumero('5')
    });
    btn6.addEventListener('click', function(){
        adicionarNumero('6')
    });
    btn7.addEventListener('click', function(){
        adicionarNumero('7')
    });
    btn8.addEventListener('click', function(){
        adicionarNumero('8')
    });
    btn9.addEventListener('click', function(){
        adicionarNumero('9')
    });
    btn0.addEventListener('click', function(){
        adicionarNumero('0')
    });
    btnPonto.addEventListener('click', function(){
        adicionarPonto('.')
    });

    btnIgual.addEventListener('click', function(){
        calc();
    });

    function adicionarNumero(numero) {
        resultado.textContent += numero
        ultimoCaractereOperador = false
    }

    function adicionarPonto(ponto) {
        if (resultado.textContent.indexOf('.') === -1) {
            resultado.textContent += ponto
            ultimoCaractereOperador = true
        }
    }

    function adicionarOperador(operador) {
        if (!ultimoCaractereOperador) {
            resultado.textContent += operador
            ultimoCaractereOperador = true}
        
    }

    function calc() {
        if (resultado.textContent) {
            resultado.textContent = eval(resultado.textContent)
            ultimoCaractereOperador = false
        }
    }
});

