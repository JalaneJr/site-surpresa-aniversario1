// Variável global para controlar o nível ativo
let activeLevel = null;

function showDetails(option) {
    const details = document.getElementById("details");
    
    // Limpa o conteúdo anterior para evitar duplicações
    details.innerHTML = '';

    if (option === 1) {
        details.innerHTML = `
            <h2>Cartões Virtuais</h2>
            <div class="cartao">
                <img src="imagens/c1.png" alt="Cartão 1" class="cartao-img" />
                <div class="cartao-texto">
                    <h3>Feliz Aniversário!</h3>
                    <p>Que seu dia seja repleto de alegria e amor.</p>
                </div>
            </div>
            <div class="cartao">
                <img src="imagens/c2.png" alt="Cartão 2" class="cartao-img" />
                <div class="cartao-texto">
                    <h3>Parabéns!</h3>
                    <p>Que todos os seus desejos se realizem hoje.</p>
                </div>
            </div>
            <div class="cartao">
                <img src="imagens/c3.png" alt="Cartão 3" class="cartao-img" />
                <div class="cartao-texto">
                    <h3>Comemore!</h3>
                    <p>Hoje é um dia especial, aproveite cada momento!</p>
                </div>
            </div>
            <div class="cartao">
                <img src="imagens/c4.png" alt="Cartão 4" class="cartao-img">
                <div class="cartao-texto">
                    <h3>Que felicidade!</h3>
                    <p>Hoje é um dia para sorrir e aproveitar.</p>
                </div>
            </div>
            <div class="cartao">
                <img src="imagens/c5.png" alt="Cartão 5" class="cartao-img">
                <div class="cartao-texto">
                    <h3>Aproveite o dia!</h3>
                    <p>Que sua vida seja sempre cheia de momentos felizes.</p>
                </div>
            </div>
            <div class="cartao">
                <img src="imagens/Natalia.png" alt="Cartão 6" class="cartao-img">
                <div class="cartao-texto">
                    <h3>Boas Vibrações!</h3>
                    <p>Que sua vida seja cheia de boas energias.</p>
                </div>
            </div>
            <div class="cartao">
                <img src="imagens/6.png" alt="Cartão 7" class="cartao-img">
                <div class="cartao-texto">
                    <h3>Um ano incrível!</h3>
                    <p>Que este ano seja o melhor da sua vida.</p>
                </div>
            </div>
            <div class="cartao">
                <img src="imagens/4.png" alt="Cartão 8" class="cartao-img">
                <div class="cartao-texto">
                    <h3>Parabéns especial!</h3>
                    <p>Você merece toda a felicidade do mundo.</p>
                </div>
            </div>
            <div class="cartao">
                <img src="imagens/5.png" alt="Cartão 9" class="cartao-img">
                <div class="cartao-texto">
                    <h3>Sonhos realizados!</h3>
                    <p>Que seus sonhos se tornem realidade hoje.</p>
                </div>
            </div>
            <div class="cartao">
                <img src="imagens/1.png" alt="Cartão 10" class="cartao-img">
                <div class="cartao-texto">
                    <h3>Alegria sem fim!</h3>
                    <p>Hoje é um dia para celebrar e ser feliz.</p>
                </div>
            </div>
            <div class="cartao">
                <img src="imagens/2.png" alt="Cartão 11" class="cartao-img">
                <div class="cartao-texto">
                    <h3>Feliz Vida!</h3>
                    <p>Que sua vida seja sempre cheia de amor e sucesso.</p>
                </div>
            </div>
            <div class="cartao">
                <img src="imagens/3.png" alt="Cartão 12" class="cartao-img">
                <div class="cartao-texto">
                    <h3>Gratidão!</h3>
                    <p>Agradeça por cada momento especial de hoje.</p>
                </div>
            </div>
        `;
    } else if (option === 2) {
        // Conteúdo das Mensagens do Dia
        details.innerHTML = `
            <h2>Mensagens do Dia</h2>
            <div class="mensagem">
                <p>Que hoje você sinta o calor de todo o amor que plantou no coração de cada pessoa ao seu redor. Que cada abraço e sorriso que você receber seja um lembrete da luz que você traz ao mundo. Feliz aniversário!</p>
            </div>
            <div class="mensagem">
                <p>Neste dia especial, desejo que todos os seus sonhos ganhem asas para voar. Que as estrelas se alinhem a seu favor e que cada instante seja uma lembrança doce e duradoura. Aproveite cada segundo!</p>
            </div>
            <div class="mensagem">
                <p>Hoje é o dia perfeito para lembrar o quanto você é amado e admirado. Que sua jornada seja sempre iluminada por momentos de paz, alegria e realizações. Parabéns e que a vida lhe reserve tudo de melhor!</p>
            </div>
            <div class="mensagem">
                <p>Que seu dia seja tão extraordinário quanto a bondade que você espalha pelo mundo. Que cada sorriso que você recebe hoje se transforme em uma lembrança eterna de felicidade. Parabéns por ser alguém tão especial!</p>
            </div>
            <div class="mensagem">
                <p>O seu aniversário é o momento ideal para celebrar todas as suas conquistas e aspirações. Que o futuro lhe reserve as respostas que você sempre procurou, e que a felicidade seja sua eterna companheira!</p>
            </div>
            <div class="mensagem">
                <p>Mais um ano de vida, mais uma coleção de lembranças incríveis. Que a sua caminhada seja sempre repleta de luz, e que cada novo dia seja uma oportunidade para você ser ainda mais feliz. Feliz aniversário!</p>
            </div>
            <div class="mensagem">
                <p>Que hoje seja o início de um novo ciclo repleto de aventuras, aprendizado e muito amor. Que a felicidade seja seu guia e a gratidão, seu mapa. Parabéns e que cada dia seja um novo começo repleto de alegria!</p>
            </div>
            <div class="mensagem">
                <p>Neste dia único, desejo que cada momento seja marcado por felicidade, amor e esperança. Que seu coração esteja sempre repleto de amor e que você nunca perca essa essência maravilhosa que o torna tão especial. Parabéns!</p>
            </div>
            <div class="mensagem">
                <p>Hoje é um dia para celebrar a pessoa incrível que você é. Que a sua vida seja sempre adornada por realizações, e que você jamais perca a força e a coragem que possui. Felicidades infinitas para você!</p>
            </div>
            <div class="mensagem">
                <p>Em mais um aniversário, desejo que você continue a iluminar o mundo com seu sorriso e alegria. Que cada desafio seja uma lição e que o amor o cerque sempre. Aproveite cada instante do seu dia especial!</p>
            </div>
            <div class="mensagem">
                <p>Que seu dia seja pleno de boas surpresas e momentos inesquecíveis. Que você tenha sempre o apoio daqueles que ama e que a alegria seja uma constante em sua vida. Parabéns por ser alguém tão inspirador!</p>
            </div>
            <div class="mensagem">
                <p>Hoje, celebre a vida e o privilégio de ser você! Que sua jornada seja sempre guiada pelo amor e pela coragem de ser autêntico. Que cada sonho seu se torne realidade. Parabéns por mais um ano incrível!</p>
            </div>
        `;
    } else if (option === 6) {
        // Exibir painel de Níveis na Opção 6
        details.innerHTML = `
            <h2>Painel de Níveis</h2>
            <div class="levels">
                <div id="level1" class="point" onclick="showPanel(1)">Nível 1</div>
                <div id="level2" class="point" onclick="showPanel(2)">Nível 2</div>
                <div id="level3" class="point" onclick="showPanel(3)">Nível 3</div>
                <!-- Outros níveis podem ser adicionados -->
            </div>
            <div id="details-panel" class="details-panel"></div>
        `;
    }
}

// Mostrar o conteúdo do nível selecionado
function showPanel(level) {
    const panel = document.getElementById("details-panel");
    let content = '';

    if (level === 1) {
        content = `
            <h3>Conteúdo do Nível 1</h3>
            <p>Detalhes sobre o Nível 1.</p>
        `;
    } else if (level === 2) {
        content = `
            <h3>Conteúdo do Nível 2</h3>
            <p>Detalhes sobre o Nível 2.</p>
        `;
    } else if (level === 3) {
        content = `
            <h3>Conteúdo do Nível 3</h3>
            <p>Detalhes sobre o Nível 3.</p>
        `;
    }

    panel.innerHTML = content;
}
