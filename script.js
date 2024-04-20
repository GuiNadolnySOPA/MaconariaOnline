document.addEventListener('DOMContentLoaded', function() {
    const combinacaoCorreta = ['ddd', 'eee', 'fff']; // Sequência correta de cliques
    let cliques = [];

    document.querySelectorAll('.image-container').forEach(container => {
        container.addEventListener('click', function() {
            const id = this.id; // Obtém o ID do contêiner da imagem clicada
            cliques.push(id);

            // Verifica se a sequência de cliques corresponde à combinação correta
            if (cliques.length === combinacaoCorreta.length) {
                let sequenciaCorreta = true;
                for (let i = 0; i < combinacaoCorreta.length; i++) {
                    if (cliques[i] !== combinacaoCorreta[i]) {
                        sequenciaCorreta = false;
                        break;
                    }
                }

                // Se a sequência de cliques estiver correta, redireciona para outra página
                if (sequenciaCorreta) {
                    window.location.href = 'outra_pagina.html'; // Redireciona para outra_pagina.html
                } else {
                    // Se a sequência de cliques não estiver correta, limpa os cliques
                    cliques = [];
                }
            }
        });
    });

    // Alerta de boas-vindas ao carregar a página
    alert("Bem-vindo à Maçonaria Online! Descubra o mundo da Maçonaria e seus mistérios.");
});
