// Banco de Questões Extensivo e Adaptado de Padrões Acadêmicos (A1 a C2)
const bancoNiveis = {
    A1: [
        {
            tipo: 'multipla',
            passo: "A1 - Módulo 1: Verbo Être & Identidade",
            ensinoTexto: "O verbo <strong>être</strong> é a base para expressar quem você é e sua nacionalidade.",
            vocabulario: [
                { palavra: "Je suis", significado: "Eu sou / estou" },
                { palavra: "brésilien", significado: "Brasileiro" }
            ],
            explicacaoLogica: "Estrutura padrão de apresentação pessoal: Sujeito + <em>être</em> conjugado + Nacionalidade ou Profissão.",
            imagem: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80",
            audioFrase: "Je suis brésilien",
            exercicio: {
                pergunta: "Como se diz corretamente 'Eu sou brasileiro' em francês?",
                imagemExercicio: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80",
                audioFrances: "Je suis brésilien",
                opcoes: ['J\'ai brésilien', 'Je suis brésilien', 'Il est brésilien', 'Nous sommes brésilien'],
                correta: 1
            }
        },
        {
            tipo: 'vf',
            passo: "A1 - Módulo 2: Artigos Indefinidos",
            ensinoTexto: "Utilizamos <strong>un</strong> para substantivos masculinos e <strong>une</strong> para femininos.",
            vocabulario: [
                { palavra: "Une fille", significado: "Uma garota" }
            ],
            explicacaoLogica: "O substantivo 'fille' é feminino, exigindo o artigo indefinido correspondente.",
            imagem: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
            audioFrase: "Une fille intelligente",
            exercicio: {
                pergunta: "A palavra 'fille' (menina/garota) utiliza o artigo feminino 'une'?",
                imagemExercicio: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
                audioFrances: "Une fille",
                opcoes: ['Verdadeiro (V)', 'Falso (F)'],
                correta: 0
            }
        },
        {
            tipo: 'ordenacao',
            passo: "A1 - Módulo 3: Interrogativa Simples",
            ensinoTexto: "Perguntas cotidianas com a inversão ou entonação direta.",
            vocabulario: [
                { palavra: "Comment tu t'appelles?", significado: "Como você se chama?" }
            ],
            explicacaoLogica: "A fórmula 'Comment tu t'appelles' é o padrão universal para indagar o nome de alguém.",
            imagem: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
            audioFrase: "Comment tu t'appelles?",
            exercicio: {
                pergunta: "Organize os blocos para formar a pergunta 'Como você se chama?':",
                imagemExercicio: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
                audioFrances: "Comment tu t'appelles?",
                opcoes: ['Tu comment appelles t\'', 'Comment tu t\'appelles?', 'Appelles tu comment t\'', 'T\'appelles comment tu'],
                correta: 1
            }
        },
        {
            tipo: 'multipla',
            passo: "A1 - Módulo 4: Números e Idade",
            ensinoTexto: "O verbo <strong>avoir</strong> é usado em francês para declarar a idade.",
            vocabulario: [
                { palavra: "J'ai vingt ans", significado: "Eu tenho vinte anos" }
            ],
            explicacaoLogica: "Em francês, diz-se 'eu tenho anos' (usando avoir), e não 'eu sou' (être).",
            imagem: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80",
            audioFrase: "J'ai vingt ans",
            exercicio: {
                pergunta: "Qual das opções expressa corretamente 'Eu tenho vinte anos'?",
                imagemExercicio: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80",
                audioFrances: "J'ai vingt ans",
                opcoes: ['Je suis vingt ans', 'J\'ai vingt ans', 'Je fais vingt ans', 'J\'habite vingt ans'],
                correta: 1
            }
        }
    ],
    A2: [
        {
            tipo: 'multipla',
            passo: "A2 - Módulo 1: Passé Composé com Avoir",
            ensinoTexto: "Para relatar eventos passados concluídos, usamos o auxiliar no presente + particípio passado.",
            vocabulario: [
                { palavra: "J'ai mangé", significado: "Eu comi" }
            ],
            explicacaoLogica: "A maioria dos verbos utiliza <em>avoir</em> no Passé Composé.",
            imagem: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
            audioFrase: "J'ai mangé une pomme",
            exercicio: {
                pergunta: "Como se traduz 'Eu comi uma maçã' no Passé Composé?",
                imagemExercicio: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
                audioFrances: "J'ai mangé une pomme",
                opcoes: ['Je mange une pomme', 'J\'ai mangé une pomme', 'Je vais manger une pomme', 'Je mangeais une pomme'],
                correta: 1
            }
        },
        {
            tipo: 'vf',
            passo: "A2 - Módulo 2: O Imperfeito para Descrições",
            ensinoTexto: "O <em>imparfait</em> é o tempo verbal ideal para descrever cenários ou hábitos no passado.",
            vocabulario: [
                { palavra: "Quand j'étais petit", significado: "Quando eu era pequeno" }
            ],
            explicacaoLogica: "Ações repetidas ou estados contínuos no passado usam o Imperfeito.",
            imagem: "https://images.unsplash.com/photo-1472157511811-daaa3d641cf0?auto=format&fit=crop&w=600&q=80",
            audioFrase: "Quand j'étais petit, je jouais au football",
            exercicio: {
                pergunta: "A frase 'je jouais' descreve um hábito contínuo no passado?",
                imagemExercicio: "https://images.unsplash.com/photo-1472157511811-daaa3d641cf0?auto=format&fit=crop&w=600&q=80",
                audioFrances: "Je jouais au football",
                opcoes: ['Verdadeiro (V)', 'Falso (F)'],
                correta: 0
            }
        },
        {
            tipo: 'ordenacao',
            passo: "A2 - Módulo 3: Proibições e Obrigações",
            ensinoTexto: "Uso do verbo modal <strong>devoir</strong> (dever / ter que).",
            vocabulario: [
                { palavra: "Tu dois", significado: "Você deve" }
            ],
            explicacaoLogica: "Sujeito + <em>devoir</em> conjugado + Verbo principal no infinitivo.",
            imagem: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
            audioFrase: "Tu dois étudier pour l'examen",
            exercicio: {
                pergunta: "Organize os blocos para dizer 'Você deve estudar para o exame':",
                imagemExercicio: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
                audioFrances: "Tu dois étudier pour l'examen",
                opcoes: ['Étudier dois pour tu l\'examen', 'Tu dois étudier pour l\'examen', 'Pour l\'examen tu dois étudier', 'Dois tu étudier pour examen l\''],
                correta: 1
            }
        },
        {
            tipo: 'multipla',
            passo: "A2 - Módulo 4: Futuro Próximo (Futur Composé)",
            ensinoTexto: "Formado pelo verbo <strong>aller</strong> no presente + infinitivo principal.",
            vocabulario: [
                { palavra: "Je vais voyager", significado: "Eu vou viajar" }
            ],
            explicacaoLogica: "Ideal para expressar planos imediatos no horizonte temporal.",
            imagem: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80",
            audioFrase: "Je vais voyager demain",
            exercicio: {
                pergunta: "Qual estrutura indica corretamente o Futuro Próximo ('eu vou viajar')?",
                imagemExercicio: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80",
                audioFrances: "Je vais voyager",
                opcoes: ['J\'ai voyagé', 'Je vais voyager', 'Je voyageais', 'Je voyagerais'],
                correta: 1
            }
        }
    ],
    B1: [
        {
            tipo: 'multipla',
            passo: "B1 - Módulo 1: Condicional Simples",
            ensinoTexto: "Usado para expressar pedidos educados, conselhos ou hipóteses prováveis.",
            vocabulario: [
                { palavra: "Je voudrais", significado: "Eu gostaria" }
            ],
            explicacaoLogica: "A raiz do futuro acrescida das terminações do imperfeito forma o condicional.",
            imagem: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=600&q=80",
            audioFrase: "Je voudrais un renseignement",
            exercicio: {
                pergunta: "Como se expressa polidamente 'Eu gostaria de uma informação'?",
                imagemExercicio: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=600&q=80",
                audioFrances: "Je voudrais un renseignement",
                opcoes: ['Je veux un renseignement', 'Je voudrais un renseignement', 'J\'ai voulu un renseignement', 'Je voulais un renseignement'],
                correta: 1
            }
        },
        {
            tipo: 'vf',
            passo: "B1 - Módulo 2: Pronomes Pessoais COD (Le, La, Les)",
            ensinoTexto: "Substituem o objeto direto para evitar repetições desnecessárias no discurso.",
            vocabulario: [
                { palavra: "Je le connais", significado: "Eu o conheço" }
            ],
            explicacaoLogica: "O pronome de objeto direto vem obrigatoriamente antes do verbo conjugado.",
            imagem: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
            audioFrase: "Je connais ce livre, je le lis",
            exercicio: {
                pergunta: "Na frase 'je le lis', o pronome 'le' substitui um objeto masculino singular?",
                imagemExercicio: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
                audioFrances: "Je le lis",
                opcoes: ['Verdadeiro (V)', 'Falso (F)'],
                correta: 0
            }
        },
        {
            tipo: 'ordenacao',
            passo: "B1 - Módulo 3: Comparação de Superioridade",
            ensinoTexto: "Estrutura comparativa com adjetivos: <strong>plus + adjetivo + que</strong>.",
            vocabulario: [
                { palavra: "Plus grand que", significado: "Maior que" }
            ],
            explicacaoLogica: "Adjetivos seguem o padrão comparativo estabelecido pelo advérbio <em>plus</em>.",
            imagem: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
            audioFrase: "Paris est plus grand que Lyon",
            exercicio: {
                pergunta: "Organize para formar 'Paris é maior que Lyon':",
                imagemExercicio: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
                audioFrances: "Paris est plus grand que Lyon",
                opcoes: ['Grand que plus est Paris Lyon', 'Paris est plus grand que Lyon', 'Que plus grand est Lyon Paris', 'Lyon est plus grand que Paris'],
                correta: 1
            }
        },
        {
            tipo: 'multipla',
            passo: "B1 - Módulo 4: Pronome Relativo 'Dont'",
            ensinoTexto: "Substitui complementos introduzidos pela preposição <em>de</em> (posse, origem, verbo com 'de').",
            vocabulario: [
                { palavra: "La fille dont tu parles", significado: "A garota de quem você fala" }
            ],
            explicacaoLogica: "Essencial para conectar frases coesas em narrativas B1.",
            imagem: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
            audioFrase: "C'est le film dont je t'ai parlé",
            exercicio: {
                pergunta: "Qual frase utiliza corretamente o pronome 'dont'?",
                imagemExercicio: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
                audioFrances: "C'est le film dont je t'ai parlé",
                opcoes: ['C\'est le film que je t\'ai parlé', 'C\'est le film dont je t\'ai parlé', 'C\'est le film qui je t\'ai parlé', 'C\'est le film où je t\'ai parlé'],
                correta: 1
            }
        }
    ],
    B2: [
        {
            tipo: 'multipla',
            passo: "B2 - Módulo 1: O Subjuntivo Presente",
            ensinoTexto: "Obrigatório após expressões de vontade, dúvida, obrigação ou sentimento (<em>Il faut que...</em>).",
            vocabulario: [
                { palavra: "Il faut que tu fasses", significado: "É preciso que você faça" }
            ],
            explicacaoLogica: "Mudança de foco modal introduzida pela conjunção <em>que</em>.",
            imagem: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
            audioFrase: "Il faut que tu réussisses ton examen",
            exercicio: {
                pergunta: "Qual alternativa emprega corretamente o subjuntivo após 'il faut que'?",
                imagemExercicio: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
                audioFrances: "Il faut que tu réussisses",
                opcoes: ['Il faut que tu réussis', 'Il faut que tu réussisses', 'Il faut que tu as réussi', 'Il faut que tu réussiras'],
                correta: 1
            }
        },
        {
            tipo: 'vf',
            passo: "B2 - Módulo 2: Conectores de Concessão",
            ensinoTexto: "Expressões como <strong>bien que</strong> ou <strong>quoique</strong> exigem subjuntivo.",
            vocabulario: [
                { palavra: "Bien qu'il pleuve", significado: "Ainda que chova" }
            ],
            explicacaoLogica: "A concessão expressa contraste argumentativo formal.",
            imagem: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=600&q=80",
            audioFrase: "Bien qu'il pleuve, nous sortons",
            exercicio: {
                pergunta: "A expressão 'bien que' é seguida pelo modo indicativo na norma culta?",
                imagemExercicio: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=600&q=80",
                audioFrances: "Bien qu'il pleuve",
                opcoes: ['Verdadeiro (V)', 'Falso (F)'],
                correta: 1
            }
        },
        {
            tipo: 'ordenacao',
            passo: "B2 - Módulo 3: Hipóteses com o Passado",
            ensinoTexto: "Estrutura condicional avançada: <em>Si + plus-que-parfait, conditionnel passé</em>.",
            vocabulario: [
                { palavra: "Si j'avais su", significado: "Se eu soubesse / tivesse sabido" }
            ],
            explicacaoLogica: "Concordância de passado hipotético complexo.",
            imagem: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80",
            audioFrase: "Si j'avais su, j'aurais agi différemment",
            exercicio: {
                pergunta: "Organize para formar 'Se eu soubesse, teria agido de outro modo':",
                imagemExercicio: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80",
                audioFrances: "Si j'avais su, j'aurais agi différemment",
                opcoes: ['Agi différemment aurais j\' su j\'avais si', 'Si j\'avais su, j'aurais agi différemment', 'J\'aurais agi si j\'avais su différemment', 'Su j\'avais si j\'aurais agi'],
                correta: 1
            }
        },
        {
            tipo: 'multipla',
            passo: "B2 - Módulo 4: Discurso Indireto no Passado",
            ensinoTexto: "Mudança de tempos verbais ao relatar o que alguém disse no passado (concordância de tempos).",
            vocabulario: [
                { palavra: "Il a dit qu'il viendrait", significado: "Ele disse que viria" }
            ],
            explicacaoLogica: "O futuro simples do discurso direto transforma-se em condicional no discurso indireto passado.",
            imagem: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
            audioFrase: "Il a affirmé qu'il viendrait",
            exercicio: {
                pergunta: "Qual tempo verbal substitui o 'futur simple' no discurso indireto com verbo introdutório no passado?",
                imagemExercicio: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
                audioFrances: "Il viendrait",
                opcoes: ['Le présent', 'Le futur simple', 'Le conditionnel présent', 'L\'imparfait'],
                correta: 2
            }
        }
    ],
    C1: [
        {
            tipo: 'multipla',
            passo: "C1 - Módulo 1: Expressões Idiomáticas Complexas",
            ensinoTexto: "Domínio de metáforas corporativas, jornalísticas e cotidianas de alto nível.",
            vocabulario: [
                { palavra: "Coûter les yeux de la tête", significado: "Custar os olhos da cara (ser muito caro)" }
            ],
            explicacaoLogica: "Uso fluido de modismos sem tradução literal simplista.",
            imagem: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80",
            audioFrase: "Cette voiture coûte les yeux de la tête",
            exercicio: {
                pergunta: "O que denota a expressão idiomática 'coûter les yeux de la tête'?",
                imagemExercicio: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80",
                audioFrances: "Coûter les yeux de la tête",
                opcoes: ['Ser extremamente barato', 'Custar muito caro', 'Causar dor de cabeça', 'Ser invisível'],
                correta: 1
            }
        },
        {
            tipo: 'vf',
            passo: "C1 - Módulo 2: Inversão Estilística Literária",
            ensinoTexto: "Em ensaios acadêmicos ou jornais, o sujeito pode ser invertido após locuções adverbiais.",
            vocabulario: [
                { palavra: "Peut-être est-il", significado: "Talvez ele seja" }
            ],
            explicacaoLogica: "Elevação do registro discursivo.",
            imagem: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
            audioFrase: "Peut-être a-t-il raison sur ce point",
            exercicio: {
                pergunta: "A inversão do pronome sujeito após advérbios de dúvida é aceita em registros formais C1?",
                imagemExercicio: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
                audioFrances: "Peut-être a-t-il raison",
                opcoes: ['Verdadeiro (V)', 'Falso (F)'],
                correta: 0
            }
        },
        {
            tipo: 'ordenacao',
            passo: "C1 - Módulo 3: Realce Discursivo (Mise en relief)",
            ensinoTexto: "Estruturas de ênfase para focalizar argumentos centrais.",
            vocabulario: [
                { palavra: "C'est... qui", significado: "É... que (foco no sujeito)" }
            ],
            explicacaoLogica: "Isolamento do agente principal da frase.",
            imagem: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
            audioFrase: "C'est l'innovation qui dynamise l'économie",
            exercicio: {
                pergunta: "Organize para formar a frase de realce 'É a inovação que dinamiza a economia':",
                imagemExercicio: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
                audioFrances: "C'est l'innovation qui dynamise l'économie",
                opcoes: ['Qui dynamise l\'économie innovation c\'est l\'', 'C\'est l\'innovation qui dynamise l\'économie', 'Innovation c\'est l\' qui dynamise l\'économie', 'Dinamise l\'économie c\'est qui innovation l\''],
                correta: 1
            }
        },
        {
            tipo: 'multipla',
            passo: "C1 - Módulo 4: Nuances de Subjuntivo após Superlativos",
            ensinoTexto: "Superlativos de excelência exigem o subjuntivo na oração subordinada.",
            vocabulario: [
                { palavra: "Le plus beau que j'aie vu", significado: "O mais bonito que eu já vi" }
            ],
            explicacaoLogica: "A restrição superlativa restringe a realidade com o modo subjetivo.",
            imagem: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
            audioFrase: "C'est le film le plus intéressant que j'aie vu",
            exercicio: {
                pergunta: "Qual verbo auxiliar no subjuntivo completa a estrutura após um superlativo?",
                imagemExercicio: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
                audioFrances: "Que j'aie vu",
                opcoes: ['J\'ai vu', 'Je voyais', 'J\'aie vu', 'Je verrai'],
                correta: 2
            }
        }
    ],
    C2: [
        {
            tipo: 'multipla',
            passo: "C2 - Módulo 1: Subjuntivo Pluperfeito Literario",
            ensinoTexto: "Emprego de formas verbais arcaicas e solenes restritas à alta literatura e crônicas eruditas.",
            vocabulario: [
                { palavra: "Eût fallu", significado: "Tivesse sido necessário" }
            ],
            explicacaoLogica: "Concordância clássica de alta erudição.",
            imagem: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
            audioFrase: "Il eût fallu qu'il vienne plus tôt",
            exercicio: {
                pergunta: "O subjonctif plus-que-parfait é frequente na comunicação oral diária das ruas?",
                imagemExercicio: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
                audioFrances: "Subjonctif plus-que-parfait",
                opcoes: ['Sim, em conversas cotidianas', 'Não, é estritamente literário e arcaico', 'Apenas no passado composto', 'Usa-se no futuro do pretérito'],
                correta: 1
            }
        },
        {
            tipo: 'vf',
            passo: "C2 - Módulo 2: Polissemia e Sutileza Discursiva",
            ensinoTexto: "Capacidade de decodificar ironias refinadas, subtextos e ambiguidades textuais.",
            vocabulario: [
                { palavra: "Ironie subtile", significado: "Ironia sutil" }
            ],
            explicacaoLogica: "Nível máximo de proficiência equivalente a um falante nativo altamente instruído.",
            imagem: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
            audioFrase: "La polysémie enrichit la littérature classique",
            exercicio: {
                pergunta: "A polissemia refere-se à multiplicidade de significados que uma mesma palavra pode assumir?",
                imagemExercicio: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
                audioFrances: "La polysémie",
                opcoes: ['Verdadeiro (V)', 'Falso (F)'],
                correta: 0
            }
        },
        {
            tipo: 'ordenacao',
            passo: "C2 - Módulo 3: Retórica Poética e Hipótese Invertida",
            ensinoTexto: "Substituição da conjunção <em>si</em> por inversão verbal com o subjuntivo em tratados filosóficos.",
            vocabulario: [
                { palavra: "Eût-il su", significado: "Tivesse ele sabido" }
            ],
            explicacaoLogica: "Elevado grau estilístico na argumentação formal.",
            imagem: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
            audioFrase: "Eût-il su la vérité, il aurait agi différemment",
            exercicio: {
                pergunta: "Organize para formar 'Tivesse ele sabido a verdade, teria agido de outro modo':",
                imagemExercicio: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
                audioFrances: "Eût-il su la vérité, il aurait agi différemment",
                opcoes: ['Verité la su eût-il agi différemment il aurait', 'Eût-il su la vérité, il aurait agi différemment', 'Agi différemment il aurait eût-il su vérité la', 'Il aurait agi su eût-il la vérité différemment'],
                correta: 1
            }
        },
        {
            tipo: 'multipla',
            passo: "C2 - Módulo 4: Maestria Lexical Absoluta",
            ensinoTexto: "Uso de arcaísmos funcionais e precisão estilística semântica em teses e discursos de alto nível.",
            vocabulario: [
                { palavra: "Quintessence", significado: "Quintessência / O ponto mais puro" }
            ],
            explicacaoLogica: "Seleção rigorosa de termos de origem grega e latina adaptados ao francês clássico.",
            imagem: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
            audioFrase: "C'est la quintessence de la pensée philosophique",
            exercicio: {
                pergunta: "O termo 'quintessence' denota o que há de mais puro ou essencial em algo?",
                imagemExercicio: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
                audioFrances: "Quintessence",
                opcoes: ['A parte superficial ou descartável', 'O aspecto financeiro de um projeto', 'A quintessência / o elemento mais puro e essencial', 'Uma falha lógica argumentativa'],
                correta: 2
            }
        }
    ]
};
