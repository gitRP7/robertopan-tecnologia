// Aguarda o carregamento do DOM para rodar as rotinas com segurança
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formContato");
    
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // Impede o recarregamento tradicional da página [cite: 41]

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            let matches = true;

            // Validação de Campos Obrigatórios [cite: 59]
            if (nome === "") {
                document.getElementById("erro-nome").style.display = "block";
                matches = false;
            } else {
                document.getElementById("erro-nome").style.display = "none";
            }

            // Regex de validação para formato de e-mail tradicional [cite: 60]
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regexEmail.test(email)) {
                document.getElementById("erro-email").style.display = "block";
                matches = false;
            } else {
                document.getElementById("erro-email").style.display = "none";
            }

            if (mensagem === "") {
                document.getElementById("erro-mensagem").style.display = "block";
                matches = false;
            } else {
                document.getElementById("erro-mensagem").style.display = "none";
            }

            // Exibição e Simulação de Sucesso se passar na rotina 
            if (matches) {
                const modal = document.getElementById("modalSucesso");
                modal.style.display = "flex"; // Abre a caixa modal customizada [cite: 61, 62]
                
                form.reset(); // Limpa os campos após validação com sucesso 

                document.getElementById("btnFecharModal").onclick = () => {
                    modal.style.display = "none";
                };
            }
        });
    }
});