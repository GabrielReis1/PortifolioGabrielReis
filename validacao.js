// Validação do formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Capturar valores
            const nome = document.querySelector('input[name="nome"]');
            const email = document.querySelector('input[name="email"]');
            const mensagem = document.querySelector('textarea[name="mensagem"]');
            
            // Validar campos
            let erros = [];
            
            if (!nome.value.trim()) {
                erros.push('Nome é obrigatório');
                nome.classList.add('erro');
            } else {
                nome.classList.remove('erro');
            }
            
            if (!email.value.trim() || !validarEmail(email.value)) {
                erros.push('Email válido é obrigatório');
                email.classList.add('erro');
            } else {
                email.classList.remove('erro');
            }
            
            if (!mensagem.value.trim()) {
                erros.push('Mensagem é obrigatória');
                mensagem.classList.add('erro');
            } else {
                mensagem.classList.remove('erro');
            }
            
            // Exibir erros ou enviar
            if (erros.length > 0) {
                alert('Erros:\n' + erros.join('\n'));
            } else {
                simularEnvio(nome.value, email.value, mensagem.value);
            }
        });
    }
});

// Funcao para validar email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Funcao para simular envio
function simularEnvio(nome, email, mensagem) {
    console.log('Enviando...');
    
    setTimeout(() => {
        console.log('Formulário enviado com sucesso!');
        console.log({ nome, email, mensagem });
        alert('Mensagem enviada com sucesso!');
        document.querySelector('form').reset();
    }, 1500);
}