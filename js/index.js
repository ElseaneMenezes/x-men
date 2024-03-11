const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        
        personagem.classList.add('selecionado');

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        
        const idPersonagem = personagem.attributes.id.value;
       
        imagemPersonagemGrande.src = `./imagens/card-${idPersonagem}.png`;

        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaoPersoangem = document.getElementById('descricao-personagem');
        descricaoPersoangem.innerText = personagem.getAttribute('data-description');

    })
});

// object.addEventListener("mouseover", myScript);