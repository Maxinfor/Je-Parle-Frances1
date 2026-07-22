// Estado do Sistema de Aprendizagem Progressiva
let estado = {
    tela: 'menu', 
    vidas: 3,
    questaoAtualIndex: 0,
    xp: 0,
    nivelSelecionado: 'A1'
};

function renderizar() {
    const app = document.getElementById('app');
    const questoes = bancoNiveis[estado.nivelSelecionado];
    
    if (estado.tela === 'menu') {
        app.innerHTML = `
            <div class="flex flex-col items-center justify-center flex-grow text-center">
                <div class="w-24 h-24 bg-gradient-to-tr from-amber-500 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-orange-500/20 mb-4 animate-pulse border border-orange-400/30">
                    <span class="text-4xl">🇫🇷</span>
                </div>
                <h1 class="text-2xl font-extrabold mb-1 text-zinc-100">LinguaDu Lógico</h1>
                <p class="text-zinc-400 mb-5 text-xs">Banco Extensivo (A1 a C2) - Modularizado</p>
                
                <!-- Seletor de Níveis -->
                <div class="grid grid-cols-3 gap-2 w-full mb-6">
                    ${['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map(niv => `
                        <button onclick="mudarNivel('${niv}')" class="py-2.5 rounded-xl font-bold text-xs border transition ${estado.nivelSelecionado === niv ? 'bg-orange-500 text-zinc-950 border-orange-400 shadow-lg shadow-orange-500/20' : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-700'}">
                            ${niv}
                        </button>
                    `).join('')}
                </div>
                
                <div class="flex gap-3 mb-6 w-full justify-center">
                    <div class="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-2xl flex items-center gap-2">
                        <span class="text-yellow-400">⚡</span>
                        <div class="text-left"><div class="text-[10px] text-zinc-500 uppercase font-bold">XP</div><div class="text-sm font-bold text-zinc-200">${estado.xp}</div></div>
                    </div>
                    <div class="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-2xl flex items-center gap-2">
                        <span class="text-blue-400">📈</span>
                        <div class="text-left"><div class="text-[10px] text-zinc-500 uppercase font-bold">Desafios</div><div class="text-sm font-bold text-zinc-200">${questoes.length} módulos</div></div>
                    </div>
                </div>

                <button onclick="iniciarLicao()" class="w-full py-4 bg-orange-500 hover:bg-orange-400 text-zinc-950 font-extrabold rounded-2xl shadow-lg shadow-orange-500/20 transition active:scale-95 text-sm">
                    INICIAR PRÁTICA ${estado.nivelSelecionado}
                </button>
            </div>
        `;
    } else if (estado.tela === 'teoria') {
        const item = questoes[estado.questaoAtualIndex];
        const porcentagem = (estado.questaoAtualIndex / questoes.length) * 100;

        setTimeout(() => tocarAudio(item.audioFrase), 400);

        let badgeTipo = item.tipo === 'vf' ? 'Verdadeiro ou Falso' : item.tipo === 'ordenacao' ? 'Ordenação Lógica' : 'Múltipla Escolha';

        app.innerHTML = `
            <div class="flex flex-col justify-between flex-grow">
                <div>
                    <div class="flex items-center justify-between mb-4">
                        <button onclick="voltarMenu()" class="text-zinc-500 hover:text-zinc-300 font-bold text-lg">✕</button>
                        <div class="w-2/3 bg-zinc-800 h-3 rounded-full overflow-hidden">
                            <div class="bg-orange-500 h-full transition-all duration-300" style="width: ${porcentagem}%"></div>
                        </div>
                        <div class="flex items-center gap-1 text-red-500 font-bold">
                            <span>❤️</span> <span class="text-sm">${estado.vidas}</span>
                        </div>
                    </div>

                    <div class="flex justify-between items-center mb-2">
                        <div class="font-bold text-[10px] uppercase tracking-wider py-1.5 px-3 rounded-xl border bg-orange-500/10 text-orange-400 border-orange-500/20">📍 ${item.passo}</div>
                        <div class="font-bold text-[10px] uppercase tracking-wider py-1.5 px-3 rounded-xl border bg-blue-500/10 text-blue-400 border-blue-500/20">🎯 ${badgeTipo}</div>
                    </div>

                    <div class="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl mt-1">
                        <div class="relative h-28 w-full overflow-hidden">
                            <img src="${item.imagem}" class="w-full h-full object-cover brightness-90">
                            <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
                        </div>
                        <div class="p-3.5">
                            <div class="mb-2 bg-zinc-950/70 p-2.5 rounded-2xl border border-zinc-800">
                                <div class="text-[11px] text-amber-300 font-medium leading-relaxed">${item.ensinoTexto}</div>
                            </div>

                            ${item.vocabulario && item.vocabulario.length > 0 ? `
                                <div class="grid grid-cols-1 gap-1 mb-2.5 bg-zinc-950/60 p-2 rounded-xl border border-zinc-800">
                                    ${item.vocabulario.map(v => `
                                        <div class="text-center bg-zinc-900 p-1.5 rounded-lg border border-zinc-800">
                                            <div class="text-orange-400 font-bold text-[11px]">${v.palavra}</div>
                                            <div class="text-[9px] text-zinc-400">${v.significado}</div>
                                        </div>
                                    `).join('')}
                                </div>
                            ` : ''}

                            <div class="flex justify-between items-center mb-1">
                                <h2 class="text-xs font-bold text-zinc-100">Explicação Lógica:</h2>
                                <button onclick="tocarAudio('${item.audioFrase}')" class="w-6 h-6 bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 rounded-full flex items-center justify-center transition shrink-0 text-xs" title="Ouvir áudio">🔊</button>
                            </div>
                            <p class="text-zinc-300 text-[11px] leading-relaxed">${item.explicacaoLogica}</p>
                        </div>
                    </div>
                </div>

                <button onclick="irParaExercicio()" class="w-full py-3.5 bg-orange-500 hover:bg-orange-400 text-zinc-950 font-extrabold rounded-2xl shadow-lg shadow-orange-500/25 transition mt-3 active:scale-95 text-xs">
                    RESPONDER DESAFIO
                </button>
            </div>
        `;
    } else if (estado.tela === 'licao') {
        const item = questoes[estado.questaoAtualIndex];
        const q = item.exercicio;
        const porcentagem = ((estado.questaoAtualIndex + 0.5) / questoes.length) * 100;
        let instrucaoTipo = item.tipo === 'vf' ? 'Julgue o enunciado:' : item.tipo === 'ordenacao' ? 'Organize a estrutura:' : 'Aplicação Prática:';

        app.innerHTML = `
            <div class="flex flex-col justify-between flex-grow">
                <div>
                    <div class="flex items-center justify-between mb-4">
                        <button onclick="voltarMenu()" class="text-zinc-500 hover:text-zinc-300 font-bold text-lg">✕</button>
                        <div class="w-2/3 bg-zinc-800 h-3 rounded-full overflow-hidden">
                            <div class="bg-green-500 h-full transition-all duration-300" style="width: ${porcentagem}%"></div>
                        </div>
                        <div class="flex items-center gap-1 text-red-500 font-bold">
                            <span>❤️</span> <span class="text-sm">${estado.vidas}</span>
                        </div>
                    </div>

                    <div class="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1">${instrucaoTipo}</div>
                    <h2 class="text-zinc-300 font-semibold text-xs mb-3 leading-relaxed">${q.pergunta}</h2>
                    
                    <div class="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden mb-3 shadow-xl">
                        <div class="h-24 w-full overflow-hidden relative">
                            <img src="${q.imagemExercicio}" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
                        </div>
                        <div class="p-3 flex items-center justify-between bg-zinc-900">
                            <div>
                                <div class="text-[9px] text-zinc-500 uppercase font-semibold">Áudio Nativo</div>
                                <div class="text-xs font-bold text-zinc-100">${q.audioFrances}</div>
                            </div>
                            <button onclick="tocarAudio('${q.audioFrances}')" class="w-8 h-8 bg-green-500 hover:bg-green-400 text-zinc-950 rounded-xl flex items-center justify-center text-sm shadow-lg transition active:scale-95 shrink-0">🔊</button>
                        </div>
                    </div>

                    <div class="flex flex-col gap-2" id="opcoes-container">
                        ${q.opcoes.map((opcao, index) => `
                            <button onclick="verificarResposta(${index})" class="opcao-btn p-3 bg-zinc-900 border-2 border-zinc-800 hover:border-zinc-700 rounded-2xl text-left font-medium text-zinc-200 transition active:scale-[0.98] text-xs">
                                ${opcao}
                            </button>
                        `).join('')}
                    </div>
                </div>
                <div></div>
            </div>
        `;
    } else if (estado.tela === 'vitoria') {
        app.innerHTML = `
            <div class="flex flex-col items-center justify-center flex-grow text-center">
                <div class="text-6xl mb-4 animate-bounce">🏆</div>
                <h1 class="text-3xl font-extrabold mb-2 text-green-400">Nível ${estado.nivelSelecionado} Superado!</h1>
                <p class="text-zinc-400 mb-8 text-sm">Você completou todas as questões extensivas com sucesso. Ganhou <strong>+350 XP</strong>.</p>
                <button onclick="reiniciarJornada()" class="w-full py-4 bg-green-500 hover:bg-green-400 text-zinc-950 font-extrabold rounded-2xl shadow-lg shadow-green-500/20 transition">
                    VOLTAR AO MENU
                </button>
            </div>
        `;
    } else if (estado.tela === 'derrota') {
        app.innerHTML = `
            <div class="flex flex-col items-center justify-center flex-grow text-center">
                <div class="text-6xl mb-4 animate-bounce">💡</div>
                <h1 class="text-3xl font-extrabold mb-2 text-red-500">Vidas esgotadas!</h1>
                <p class="text-zinc-400 mb-8 text-sm">O reforço lógico ajuda a fixar o conteúdo. Tente novamente.</p>
                <button onclick="iniciarLicao()" class="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-extrabold rounded-2xl shadow-lg shadow-red-600/20 transition">
                    TENTAR NOVAMENTE
                </button>
            </div>
        `;
    }
}

function mudarNivel(novoNivel) {
    estado.nivelSelecionado = novoNivel;
    renderizar();
}

function iniciarLicao() {
    estado.vidas = 3;
    estado.questaoAtualIndex = 0;
    estado.tela = 'teoria';
    renderizar();
}

function irParaExercicio() {
    estado.tela = 'licao';
    renderizar();
}

function reiniciarJornada() {
    estado.xp += 350;
    estado.questaoAtualIndex = 0;
    estado.tela = 'menu';
    renderizar();
}

function verificarResposta(indexSelecionado) {
    const questoes = bancoNiveis[estado.nivelSelecionado];
    const item = questoes[estado.questaoAtualIndex];
    const q = item.exercicio;
    const botoes = document.querySelectorAll('.opcao-btn');
    
    botoes.forEach(b => b.disabled = true);

    if (indexSelecionado === q.correta) {
        botoes[indexSelecionado].classList.remove('bg-zinc-900', 'border-zinc-800');
        botoes[indexSelecionado].classList.add('bg-green-600/30', 'border-green-500', 'text-green-300');
        
        setTimeout(() => {
            estado.questaoAtualIndex++;
            if (estado.questaoAtualIndex >= questoes.length) {
                estado.tela = 'vitoria';
            } else {
                estado.tela = 'teoria';
            }
            renderizar();
        }, 900);
    } else {
        botoes[indexSelecionado].classList.remove('bg-zinc-900', 'border-zinc-800');
        botoes[indexSelecionado].classList.add('bg-red-600/30', 'border-red-500', 'text-red-300');
        botoes[q.correta].classList.remove('bg-zinc-900', 'border-zinc-800');
        botoes[q.correta].classList.add('bg-green-600/30', 'border-green-500', 'text-green-300');

        estado.vidas--;

        setTimeout(() => {
            if (estado.vidas <= 0) {
                estado.tela = 'derrota';
            } else {
                renderizar();
            }
        }, 1200);
    }
}

function voltarMenu() {
    estado.tela = 'menu';
    renderizar();
}

// Inicialização inicial
renderizar();
