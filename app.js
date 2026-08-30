
"use strict";
const PUZZLES = [{"id": 1, "type": "Dedução", "difficulty": 1, "title": "Cafés na Meia Praia", "prompt": "Ana, Beatriz e Carla pediram espresso, cappuccino e chá, todos diferentes. Ana não pediu café com leite. Beatriz não pediu chá. Carla não pediu espresso. Quem pediu o quê?", "options": ["Ana espresso; Beatriz cappuccino; Carla chá", "Ana chá; Beatriz espresso; Carla cappuccino", "Ana cappuccino; Beatriz chá; Carla espresso", "Ana chá; Beatriz cappuccino; Carla espresso"], "answer": 0, "hint": "Começa pela Carla."}, {"id": 2, "type": "Lógica", "difficulty": 1, "title": "Três toalhas", "prompt": "Há três toalhas: azul, amarela e branca. A azul está à esquerda da amarela. A branca não está numa ponta. Qual está no meio?", "options": ["Azul", "Amarela", "Branca", "Não é possível saber"], "answer": 2, "hint": "A branca não pode ocupar nenhuma ponta."}, {"id": 3, "type": "Lógica", "difficulty": 2, "title": "Quem chegou primeiro?", "prompt": "Rita chegou antes de Joana. Marta chegou depois de Joana. Quem chegou primeiro?", "options": ["Rita", "Joana", "Marta", "Não é possível saber"], "answer": 0, "hint": "Ordena as três."}, {"id": 4, "type": "Dedução", "difficulty": 2, "title": "O gelado trocado", "prompt": "Pedro, Luís e Sofia escolheram morango, manga e limão. Pedro não escolheu manga. Luís escolheu uma fruta amarela. Sofia não escolheu limão. Quem escolheu manga?", "options": ["Pedro", "Luís", "Sofia", "Não é possível saber"], "answer": 1, "hint": "A pista do Luís é a mais forte."}, {"id": 5, "type": "Lógica", "difficulty": 2, "title": "Barcos na marina", "prompt": "O barco A está a oeste de B. C está a leste de B. Qual está mais a leste?", "options": ["A", "B", "C", "A e C"], "answer": 2, "hint": "Pensa numa linha horizontal."}, {"id": 6, "type": "Dedução", "difficulty": 3, "title": "Os três chapéus", "prompt": "Três pessoas usam chapéus preto ou branco. Sabem que pelo menos um é branco. A vê B e C e diz 'não sei a minha cor'. B vê C e diz 'também não sei'. C conclui a sua cor. Qual é?", "options": ["Preto", "Branco", "Não é possível", "Depende"], "answer": 1, "hint": "Se C fosse preto, B teria conseguido deduzir."}, {"id": 7, "type": "Lógica", "difficulty": 3, "title": "Mentiroso no quiosque", "prompt": "A diz: 'B mente.' B diz: 'C mente.' C diz: 'A e B mentem.' Exatamente uma frase é verdadeira. Quem diz a verdade?", "options": ["A", "B", "C", "Ninguém"], "answer": 1, "hint": "Testa as três hipóteses."}, {"id": 8, "type": "Dedução", "difficulty": 3, "title": "As três caixas", "prompt": "Três caixas dizem 'Maçãs', 'Laranjas' e 'Mistas'. Todas as etiquetas estão erradas. Podes retirar uma fruta de uma única caixa. De qual deves retirar?", "options": ["Maçãs", "Laranjas", "Mistas", "Qualquer uma"], "answer": 2, "hint": "A caixa 'Mistas' não pode ser mista."}, {"id": 9, "type": "Lógica", "difficulty": 3, "title": "Fila para o barco", "prompt": "Duarte está imediatamente atrás de Leonor. Inês está à frente de Duarte, mas não é a primeira. Leonor não é a primeira. Quem pode ser a primeira?", "options": ["Duarte", "Leonor", "Inês", "Outra pessoa"], "answer": 3, "hint": "As três pistas excluem todos os nomes dados."}, {"id": 10, "type": "Dedução", "difficulty": 4, "title": "Quatro casas", "prompt": "Quatro casas A, B, C, D estão em linha. B está entre A e C. D está à esquerda de A. Qual ordem é possível?", "options": ["D-A-B-C", "A-D-B-C", "D-B-A-C", "C-B-A-D"], "answer": 0, "hint": "B deve ficar entre A e C, e D à esquerda de A."}, {"id": 11, "type": "Lógica", "difficulty": 4, "title": "Dois guardas", "prompt": "Duas portas: uma segura e uma fatal. Um guarda mente sempre e outro diz sempre a verdade. Podes fazer uma pergunta a um deles. Qual estratégia funciona?", "options": ["Perguntar qual porta é segura", "Perguntar o que o outro diria e escolher a oposta", "Perguntar se mente", "Escolher ao acaso"], "answer": 1, "hint": "Faz os dois apontarem para a mesma porta errada."}, {"id": 12, "type": "Dedução", "difficulty": 5, "title": "Cinco lugares", "prompt": "Cinco pessoas A-E sentam-se em fila. A não pode estar nas pontas. B está à esquerda de C. D está imediatamente à direita de A. Qual sequência é válida?", "options": ["B-A-D-C-E", "A-B-C-D-E", "E-C-B-A-D", "B-D-A-C-E"], "answer": 0, "hint": "Testa primeiro a relação A-D."}, {"id": 13, "type": "Probabilidade", "difficulty": 1, "title": "Duas moedas", "prompt": "Lanças duas moedas justas. Sabes que pelo menos uma deu cara. Qual é a probabilidade de ambas terem dado cara?", "options": ["1/2", "1/3", "1/4", "2/3"], "answer": 1, "hint": "Exclui apenas coroa-coroa."}, {"id": 14, "type": "Probabilidade", "difficulty": 1, "title": "Dado simples", "prompt": "Lanças um dado justo. Qual é a probabilidade de sair um número maior que 4?", "options": ["1/6", "1/3", "1/2", "2/3"], "answer": 1, "hint": "Resultados favoráveis: 5 e 6."}, {"id": 15, "type": "Probabilidade", "difficulty": 2, "title": "Carta vermelha", "prompt": "Num baralho normal de 52 cartas, qual é a probabilidade de tirar uma carta vermelha?", "options": ["1/4", "1/3", "1/2", "2/3"], "answer": 2, "hint": "Copas e ouros são metade do baralho."}, {"id": 16, "type": "Probabilidade", "difficulty": 2, "title": "Dois dados", "prompt": "Lanças dois dados justos. Qual é a probabilidade da soma ser 7?", "options": ["1/12", "1/6", "1/8", "1/9"], "answer": 1, "hint": "Há 6 combinações em 36."}, {"id": 17, "type": "Probabilidade", "difficulty": 2, "title": "Urna azul", "prompt": "Uma caixa tem 3 bolas azuis e 2 vermelhas. Retiras uma ao acaso. Probabilidade de azul?", "options": ["2/5", "3/5", "1/2", "2/3"], "answer": 1, "hint": "3 favoráveis em 5."}, {"id": 18, "type": "Probabilidade", "difficulty": 3, "title": "Monty Hall", "prompt": "Escolhes uma de 3 portas. O apresentador, que sabe onde está o prémio, abre uma porta vazia das restantes. Deves trocar?", "options": ["Não, fica 50/50", "Sim, trocar dá 2/3", "Tanto faz", "Depende"], "answer": 1, "hint": "A escolha inicial tinha 1/3."}, {"id": 19, "type": "Probabilidade", "difficulty": 3, "title": "Aniversários", "prompt": "Num grupo de 23 pessoas, a probabilidade de pelo menos duas fazerem anos no mesmo dia é aproximadamente:", "options": ["6%", "23%", "50%", "75%"], "answer": 2, "hint": "Calcula o complemento: todos diferentes."}, {"id": 20, "type": "Probabilidade", "difficulty": 3, "title": "Sem reposição", "prompt": "Uma caixa tem 2 bolas brancas e 2 pretas. Retiras duas sem reposição. Probabilidade de serem da mesma cor?", "options": ["1/3", "1/2", "2/3", "1/4"], "answer": 0, "hint": "WW ou BB: 2 casos em 6 pares possíveis."}, {"id": 21, "type": "Probabilidade", "difficulty": 4, "title": "Teste raro", "prompt": "Uma condição afeta 1% da população. Um teste tem 95% sensibilidade e 95% especificidade. Dado um positivo, a probabilidade real é aproximadamente:", "options": ["95%", "50%", "16%", "5%"], "answer": 2, "hint": "Imagina 10 000 pessoas."}, {"id": 22, "type": "Probabilidade", "difficulty": 4, "title": "Dois filhos", "prompt": "Uma família tem dois filhos. Sabes que pelo menos um é rapaz. Assumindo sexos equiprováveis e independentes, probabilidade de ambos serem rapazes?", "options": ["1/2", "1/3", "1/4", "2/3"], "answer": 1, "hint": "RR, RM, MR são os casos possíveis após excluir MM."}, {"id": 23, "type": "Probabilidade", "difficulty": 4, "title": "Paradoxo do táxi", "prompt": "85% dos táxis são azuis, 15% verdes. Uma testemunha identifica corretamente a cor 80% das vezes e diz 'verde'. Qual táxi é mais provável?", "options": ["Verde", "Azul", "Igual", "Não há dados"], "answer": 1, "hint": "A taxa base pesa mais do que parece."}, {"id": 24, "type": "Probabilidade", "difficulty": 5, "title": "Dois envelopes", "prompt": "Dois envelopes: um tem o dobro do dinheiro do outro. Escolhes um e vês €100. O argumento 'trocar vale €125 em média' falha porquê?", "options": ["Os envelopes não são independentes", "Atribui probabilidades iguais a €50 e €200 sem distribuição prévia", "€100 tem probabilidade zero", "O dobro não existe"], "answer": 1, "hint": "O problema está nas probabilidades condicionais."}, {"id": 25, "type": "Matemática", "difficulty": 1, "title": "Passos no passadiço", "prompt": "Caminhas 3 km em 30 minutos. Qual é a velocidade média?", "options": ["3 km/h", "6 km/h", "9 km/h", "12 km/h"], "answer": 1, "hint": "30 minutos = 0,5 hora."}, {"id": 26, "type": "Padrões", "difficulty": 1, "title": "Pegadas na areia", "prompt": "2, 4, 8, 16, ?", "options": ["20", "24", "30", "32"], "answer": 3, "hint": "Duplica."}, {"id": 27, "type": "Padrões", "difficulty": 1, "title": "Maré", "prompt": "1, 4, 9, 16, ?", "options": ["20", "24", "25", "36"], "answer": 2, "hint": "Quadrados perfeitos."}, {"id": 28, "type": "Matemática", "difficulty": 2, "title": "Velocidade média", "prompt": "Um carro percorre 60 km a 30 km/h e depois 60 km a 60 km/h. Qual é a velocidade média?", "options": ["40 km/h", "45 km/h", "50 km/h", "42 km/h"], "answer": 0, "hint": "Distância total / tempo total."}, {"id": 29, "type": "Padrões", "difficulty": 2, "title": "Sequência crescente", "prompt": "2, 3, 5, 9, 17, ?", "options": ["25", "31", "33", "34"], "answer": 2, "hint": "As diferenças duplicam."}, {"id": 30, "type": "Matemática", "difficulty": 2, "title": "Percentagem", "prompt": "Um preço sobe 20% e depois desce 20%. Comparado com o inicial, fica:", "options": ["Igual", "4% abaixo", "4% acima", "20% abaixo"], "answer": 1, "hint": "100 → 120 → 96."}, {"id": 31, "type": "Padrões", "difficulty": 2, "title": "Fibonacci", "prompt": "1, 1, 2, 3, 5, 8, ?", "options": ["11", "12", "13", "14"], "answer": 2, "hint": "Soma os dois anteriores."}, {"id": 32, "type": "Matemática", "difficulty": 3, "title": "Relógio da marina", "prompt": "Entre 12:00 e 1:00, quando os ponteiros ficam sobrepostos pela primeira vez?", "options": ["12:05:00", "12:05:27", "12:06:00", "12:04:55"], "answer": 1, "hint": "O dos minutos ganha 5,5° por minuto."}, {"id": 33, "type": "Padrões", "difficulty": 3, "title": "Look-and-say", "prompt": "1, 11, 21, 1211, 111221, ...", "options": ["312211", "211221", "311221", "122111"], "answer": 0, "hint": "Cada termo descreve o anterior."}, {"id": 34, "type": "Matemática", "difficulty": 3, "title": "Idades", "prompt": "A soma das idades de mãe e filha é 50. A mãe tem 26 anos a mais. Quantos anos tem a filha?", "options": ["10", "12", "13", "14"], "answer": 1, "hint": "x + (x+26)=50."}, {"id": 35, "type": "Padrões", "difficulty": 4, "title": "Autodescritivo", "prompt": "Qual número de quatro dígitos se descreve assim: 1.º dígito=nº de zeros; 2.º=nº de uns; 3.º=nº de dois; 4.º=nº de três?", "options": ["1210", "2020", "2120", "2101"], "answer": 0, "hint": "Conta os algarismos em cada opção."}, {"id": 36, "type": "Matemática", "difficulty": 5, "title": "Soma rápida", "prompt": "Qual é a soma de 1+2+3+...+100?", "options": ["5000", "5050", "5100", "4950"], "answer": 1, "hint": "Emparelha 1+100, 2+99, etc."}, {"id": 37, "type": "Estratégia", "difficulty": 1, "title": "Pedras da Ponta", "prompt": "Há 15 pedras. Em cada jogada podes retirar 1, 2 ou 3. Quem retirar a última ganha. Jogas primeiro. Quantas deves retirar?", "options": ["1", "2", "3", "Tanto faz"], "answer": 2, "hint": "Deixa 12, múltiplo de 4."}, {"id": 38, "type": "Estratégia", "difficulty": 1, "title": "Bolo justo", "prompt": "Duas pessoas querem dividir um bolo. Qual mecanismo incentiva uma divisão justa?", "options": ["Uma corta e escolhe primeiro", "Uma corta e a outra escolhe primeiro", "Cara ou coroa", "Ambas cortam"], "answer": 1, "hint": "Quem corta fica com o que a outra rejeitar."}, {"id": 39, "type": "Estratégia", "difficulty": 2, "title": "Última moeda", "prompt": "Há 21 moedas. Em cada jogada podes retirar 1 a 4. Quem tira a última ganha. Jogas primeiro. Quantas tiras?", "options": ["1", "2", "3", "4"], "answer": 0, "hint": "Queres deixar 20, múltiplo de 5."}, {"id": 40, "type": "Estratégia", "difficulty": 2, "title": "Escolha simultânea", "prompt": "Duas pessoas escolhem simultaneamente cara ou coroa. Se coincidir, A ganha; se diferir, B ganha. Qual a melhor estratégia?", "options": ["Escolher sempre cara", "Escolher sempre coroa", "Escolher aleatoriamente 50/50", "Imitar o outro"], "answer": 2, "hint": "Não dês um padrão explorável."}, {"id": 41, "type": "Estratégia", "difficulty": 2, "title": "Fila de barcos", "prompt": "Tens de escolher entre duas filas. Uma tem 4 pessoas com compras grandes; outra 7 com compras pequenas. Sem mais informação, qual decisão minimiza risco?", "options": ["Sempre a mais curta", "Sempre a mais longa", "Não há decisão garantidamente ótima", "Escolher ao acaso"], "answer": 2, "hint": "Falta informação sobre tempos de serviço."}, {"id": 42, "type": "Estratégia", "difficulty": 3, "title": "Duas cordas", "prompt": "Duas cordas demoram 60 min a arder, irregularmente. Como medes 45 min?", "options": ["Uma ponta de cada", "Duas pontas da primeira e uma da segunda; depois acender a outra ponta da segunda", "Dobrar uma corda", "Impossível"], "answer": 1, "hint": "A primeira termina em 30 min."}, {"id": 43, "type": "Estratégia", "difficulty": 3, "title": "Par ou ímpar", "prompt": "Num jogo repetido de par ou ímpar contra um adversário atento, qual estratégia evita ser explorado?", "options": ["Alternar sempre", "Repetir a jogada vencedora", "Randomizar", "Escolher sempre par"], "answer": 2, "hint": "Mistura de estratégias."}, {"id": 44, "type": "Estratégia", "difficulty": 3, "title": "Leilão de €20", "prompt": "Num leilão em que o maior lance ganha €20 mas os dois maiores lances pagam, qual é o principal perigo?", "options": ["Ninguém licita", "Escalada irracional acima de €20", "Empate impossível", "Preço fixo"], "answer": 1, "hint": "Custos afundados podem puxar os jogadores."}, {"id": 45, "type": "Estratégia", "difficulty": 4, "title": "Dilema do prisioneiro", "prompt": "Num dilema do prisioneiro repetido, que estratégia clássica começa cooperando e depois imita a jogada anterior do adversário?", "options": ["Grim trigger", "Tit for Tat", "Always Defect", "Random"], "answer": 1, "hint": "Reciprocidade simples."}, {"id": 46, "type": "Estratégia", "difficulty": 4, "title": "Escolher um número", "prompt": "Todos escolhem um número de 0 a 100; ganha quem ficar mais perto de 2/3 da média. Em equilíbrio de conhecimento comum e racionalidade perfeita, o número converge para:", "options": ["50", "33", "22", "0"], "answer": 3, "hint": "Itera 2/3 repetidamente."}, {"id": 47, "type": "Estratégia", "difficulty": 5, "title": "100 prisioneiros", "prompt": "100 gavetas contêm uma permutação dos números 1-100. Cada prisioneiro abre 50. Qual estratégia coordenada maximiza a chance do grupo?", "options": ["50 aleatórias", "As mesmas 50 para todos", "Seguir os ciclos da permutação começando no próprio número", "Dividir por pares"], "answer": 2, "hint": "A sobrevivência depende do maior ciclo."}, {"id": 48, "type": "Estratégia", "difficulty": 5, "title": "Piratas e moedas", "prompt": "Cinco piratas votam uma divisão de 100 moedas; o proponente morre se não obtiver pelo menos metade dos votos. Qual princípio resolve o puzzle?", "options": ["Dividir igualmente", "Raciocinar por indução retrospetiva", "Sortear", "Dar tudo ao mais velho"], "answer": 1, "hint": "Começa no caso com menos piratas."}, {"id": 49, "type": "Codebreaking", "difficulty": 1, "title": "César", "prompt": "Se KHOOR corresponde a HELLO, o que significa ZRUOG?", "options": ["WORLD", "WORDS", "WORMS", "WOULD"], "answer": 0, "hint": "Recua 3 letras."}, {"id": 50, "type": "Linguagem", "difficulty": 1, "title": "Anagrama", "prompt": "Qual palavra portuguesa pode ser formada com as letras de 'ROMA'?", "options": ["AMOR", "MAR", "MORA", "RAMO"], "answer": 0, "hint": "Usa todas as letras uma vez."}, {"id": 51, "type": "Codebreaking", "difficulty": 2, "title": "Código 682", "prompt": "682: um certo no lugar certo. 614: um certo no lugar errado. 206: dois certos, ambos no lugar errado. 738: nenhum certo. 780: um certo no lugar errado. Código?", "options": ["042", "204", "024", "420"], "answer": 0, "hint": "738 elimina 7,3,8."}, {"id": 52, "type": "Linguagem", "difficulty": 2, "title": "Palavra intrusa", "prompt": "Qual não pertence ao grupo?", "options": ["Falésia", "Duna", "Marina", "Onda"], "answer": 2, "hint": "Três são elementos naturais costeiros."}, {"id": 53, "type": "Codebreaking", "difficulty": 2, "title": "Substituição", "prompt": "Se A=1, B=2, ..., Z=26, quanto vale LAGOS somando as letras?", "options": ["52", "54", "56", "58"], "answer": 1, "hint": "12+1+7+15+19."}, {"id": 54, "type": "Linguagem", "difficulty": 2, "title": "Analogia", "prompt": "Praia está para areia assim como floresta está para:", "options": ["Água", "Folhas", "Pedras", "Neve"], "answer": 1, "hint": "Material dominante no chão."}, {"id": 55, "type": "Codebreaking", "difficulty": 3, "title": "Binário simples", "prompt": "Em binário, qual destes representa o decimal 10?", "options": ["1010", "1001", "1100", "1110"], "answer": 0, "hint": "8+2."}, {"id": 56, "type": "Linguagem", "difficulty": 3, "title": "Sem vogais", "prompt": "Qual destas palavras continua reconhecível removendo as vogais como 'LGS'?", "options": ["Lagos", "Lisboa", "Faro", "Porto"], "answer": 0, "hint": "L-A-G-O-S."}, {"id": 57, "type": "Codebreaking", "difficulty": 3, "title": "Atbash", "prompt": "Num código Atbash, A↔Z, B↔Y, C↔X. O que acontece a M?", "options": ["N", "O", "L", "M"], "answer": 0, "hint": "M e N ficam emparelhados."}, {"id": 58, "type": "Linguagem", "difficulty": 4, "title": "Silogismo", "prompt": "Todos os surfistas são nadadores. Alguns nadadores são músicos. O que podemos concluir?", "options": ["Alguns surfistas são músicos", "Nenhum surfista é músico", "Todos os músicos são surfistas", "Nada disso é garantido"], "answer": 3, "hint": "Os 'alguns nadadores' podem ser outros."}, {"id": 59, "type": "Codebreaking", "difficulty": 4, "title": "Vigenère conceptual", "prompt": "Qual é a principal diferença entre César e Vigenère?", "options": ["Vigenère usa várias deslocações", "César usa números primos", "Vigenère é sempre binário", "César não usa letras"], "answer": 0, "hint": "A chave altera a deslocação ao longo da mensagem."}, {"id": 60, "type": "Linguagem", "difficulty": 5, "title": "Paradoxo semântico", "prompt": "A frase 'Esta frase é falsa' é um exemplo clássico de:", "options": ["Silogismo", "Paradoxo do mentiroso", "Tautologia", "Falácia ecológica"], "answer": 1, "hint": "A frase nega a própria verdade."}, {"id": 61, "type": "Lateral", "difficulty": 1, "title": "Interruptores", "prompt": "Três interruptores estão numa sala e uma lâmpada noutra. Só podes entrar uma vez na sala da lâmpada. Como descobres o interruptor certo?", "options": ["Ligar um ao acaso", "Ligar um, esperar, desligar; ligar outro e usar luz+calor", "Ligar os três", "Não é possível"], "answer": 1, "hint": "A lâmpada guarda informação térmica."}, {"id": 62, "type": "Estimativa", "difficulty": 1, "title": "Piano", "prompt": "Quantas teclas tem um piano moderno padrão?", "options": ["76", "80", "88", "92"], "answer": 2, "hint": "É um número bastante conhecido."}, {"id": 63, "type": "Estimativa", "difficulty": 2, "title": "Segundos numa semana", "prompt": "Aproximadamente quantos segundos tem uma semana?", "options": ["60 480", "604 800", "6 048 000", "86 400"], "answer": 1, "hint": "7×24×60×60."}, {"id": 64, "type": "Lateral", "difficulty": 2, "title": "Elevador", "prompt": "Um homem baixo vive no 10.º andar. De manhã desce de elevador. Ao voltar, sobe só até ao 7.º e faz o resto a pé, exceto quando chove. Porquê?", "options": ["Gosta de exercício", "Não alcança o botão do 10.º; com guarda-chuva alcança", "O elevador avaria", "Tem medo"], "answer": 1, "hint": "A altura do homem importa."}, {"id": 65, "type": "Estimativa", "difficulty": 2, "title": "Horizonte", "prompt": "A partir de uma praia plana, quanto mais alto estiveres, o horizonte fica:", "options": ["Mais perto", "Mais longe", "Igual", "Desaparece"], "answer": 1, "hint": "A curvatura da Terra entra em jogo."}, {"id": 66, "type": "Lateral", "difficulty": 3, "title": "Duas portas sem guardas", "prompt": "Tens duas portas idênticas e sabes que uma foi usada recentemente. Sem abrir nenhuma, qual pista física simples pode ajudar?", "options": ["Temperatura da maçaneta", "Cor da porta", "Altura", "Número de dobradiças"], "answer": 0, "hint": "Contacto recente pode deixar calor."}, {"id": 67, "type": "Estimativa", "difficulty": 3, "title": "Bola de Berlim", "prompt": "Uma bola de Berlim com cerca de 8 cm de diâmetro tem volume mais próximo de:", "options": ["30 mL", "130 mL", "500 mL", "1 L"], "answer": 1, "hint": "Aproxima por uma esfera: 4/3 πr³."}, {"id": 68, "type": "Lateral", "difficulty": 3, "title": "Homem no bar", "prompt": "Um homem pede água. O empregado aponta-lhe uma arma. O homem agradece e vai embora. Porquê?", "options": ["Era um assalto", "Tinha soluços e o susto resolveu", "Era uma brincadeira", "A água estava estragada"], "answer": 1, "hint": "Ele não precisava realmente da água."}, {"id": 69, "type": "Estimativa", "difficulty": 4, "title": "Areia", "prompt": "Se um grão de areia tiver ~0,5 mm e uma linha tiver 1 m, quantos grãos cabem aproximadamente lado a lado?", "options": ["200", "500", "2000", "5000"], "answer": 2, "hint": "1 m = 1000 mm."}, {"id": 70, "type": "Lateral", "difficulty": 4, "title": "Sala fechada", "prompt": "Uma sala está trancada por dentro, sem janelas abertas. Há água no chão e vidro partido. O que é uma explicação plausível?", "options": ["Aquário partido", "Chuva", "Canalização invisível", "Neve"], "answer": 0, "hint": "Vidro + água."}, {"id": 71, "type": "Estimativa", "difficulty": 4, "title": "Sombra ao meio-dia", "prompt": "No hemisfério norte, perto do meio-dia solar, a sombra de um objeto tende a apontar aproximadamente para:", "options": ["Norte", "Sul", "Este", "Oeste"], "answer": 0, "hint": "O Sol está a sul."}, {"id": 72, "type": "Lateral", "difficulty": 5, "title": "Ponte e lanterna", "prompt": "Quatro pessoas demoram 1, 2, 7 e 10 minutos a atravessar uma ponte. Só duas atravessam de cada vez e precisam da lanterna. Qual é o tempo mínimo total?", "options": ["17", "19", "20", "21"], "answer": 0, "hint": "1&2 vão, 1 volta, 7&10 vão, 2 volta, 1&2 vão."}];
let state = {
  mode: "solo",
  session: [],
  index: 0,
  score: 0,
  hints: 0,
  answered: false,
  duelCode: "",
  duelStart: null
};
const $ = (id) => document.getElementById(id);

function hash(s) {
  let h = 2166136261 >>> 0;
  for (let i=0;i<s.length;i++) { h ^= s.charCodeAt(i); h = Math.imul(h,16777619); }
  return h >>> 0;
}
function rng(seed) {
  return function() {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffled(arr, seed) {
  const out=[...arr], r=rng(seed);
  for(let i=out.length-1;i>0;i--) {
    const j=Math.floor(r()*(i+1));
    [out[i],out[j]]=[out[j],out[i]];
  }
  return out;
}
function makeCode() {
  return "LAGOS-" + Math.floor(100000 + Math.random()*900000);
}
function saveProgress() {
  localStorage.setItem("beachBrainStats", JSON.stringify({
    played:(JSON.parse(localStorage.getItem("beachBrainStats")||'{"played":0}').played||0)+1,
    lastScore:state.score,
    lastMode:state.mode
  }));
}
function setMode(mode) {
  state.mode=mode;
  ["soloBtn","coopBtn","duelBtn"].forEach(id=>$(id).classList.remove("active"));
  $(mode==="solo"?"soloBtn":mode==="coop"?"coopBtn":"duelBtn").classList.add("active");
  $("game").classList.add("hidden");
  $("result").classList.add("hidden");
  $("setup").classList.remove("hidden");
  renderSetup();
}
function renderSetup() {
  const s=$("setup"); s.replaceChildren();
  const title=document.createElement("div"); title.className="big";
  title.textContent=state.mode==="solo"?"Solo":state.mode==="coop"?"Co-op":"Duelo";
  const p=document.createElement("p");
  p.textContent=state.mode==="solo"
    ?"Mistura de lógica, probabilidade, estratégia, matemática, padrões, linguagem e pensamento lateral."
    : state.mode==="coop"
    ?"Resolvem juntos no mesmo telemóvel. Cada dica custa 1 ponto."
    :"Um cria um código LAGOS. O outro escreve o mesmo código. Ambos recebem os mesmos puzzles, na mesma ordem.";
  s.append(title,p);

  if(state.mode!=="duel") {
    const row=document.createElement("div"); row.className="row";
    const select=document.createElement("select"); select.id="roundCount";
    [5,10,15,20].forEach(n=>{
      const o=document.createElement("option"); o.value=String(n); o.textContent=n+" rondas"; if(n===10)o.selected=true; select.appendChild(o);
    });
    const diff=document.createElement("select"); diff.id="difficulty";
    [["0","Dificuldade mista"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"]].forEach(([v,t])=>{
      const o=document.createElement("option"); o.value=v; o.textContent=t; diff.appendChild(o);
    });
    const start=document.createElement("button"); start.className="primary"; start.textContent="Começar";
    start.addEventListener("click", startRegular);
    row.append(select,diff,start); s.appendChild(row);
  } else {
    const row=document.createElement("div"); row.className="row";
    const create=document.createElement("button"); create.className="primary"; create.textContent="Criar partida";
    const input=document.createElement("input"); input.id="joinCode"; input.placeholder="LAGOS-482731"; input.autocapitalize="characters";
    const join=document.createElement("button"); join.textContent="Entrar";
    create.addEventListener("click", createDuel);
    join.addEventListener("click", ()=>joinDuel(input.value));
    row.append(create,input,join); s.appendChild(row);
    const extra=document.createElement("div"); extra.id="duelExtra"; s.appendChild(extra);
  }
}
function startRegular() {
  const n=Number($("roundCount").value);
  const d=Number($("difficulty").value);
  const pool=d===0?PUZZLES:PUZZLES.filter(p=>p.difficulty===d);
  const seed=state.mode+"-"+Date.now();
  state.session=shuffled(pool,hash(seed)).slice(0,Math.min(n,pool.length));
  state.duelCode="";
  begin();
}
function createDuel() {
  state.duelCode=makeCode();
  const x=$("duelExtra"); x.replaceChildren();
  const hr=document.createElement("hr");
  const label=document.createElement("div"); label.className="tiny"; label.textContent="Código da partida";
  const code=document.createElement("div"); code.className="code"; code.textContent=state.duelCode;
  const note=document.createElement("p"); note.className="tiny"; note.textContent="Diz este código à outra pessoa. Não é necessária internet para gerar a mesma sequência.";
  const start=document.createElement("button"); start.className="primary"; start.textContent="Começar esta partida";
  start.addEventListener("click", ()=>startDuel(state.duelCode));
  x.append(hr,label,code,note,start);
}
function joinDuel(value) {
  const code=(value||"").trim().toUpperCase();
  if(!/^LAGOS-\d{6}$/.test(code)) { alert("Código inválido. Usa o formato LAGOS-123456."); return; }
  startDuel(code);
}
function startDuel(code) {
  state.duelCode=code;
  state.session=shuffled(PUZZLES,hash(code)).slice(0,12);
  state.duelStart=Date.now();
  begin();
}
function begin() {
  state.index=0; state.score=0; state.hints=0; state.answered=false;
  $("setup").classList.add("hidden"); $("result").classList.add("hidden"); $("game").classList.remove("hidden");
  renderPuzzle();
}
function renderPuzzle() {
  state.answered=false;
  const p=state.session[state.index];
  $("type").textContent=p.type;
  $("diff").textContent="●".repeat(p.difficulty)+"○".repeat(5-p.difficulty);
  $("round").textContent=`Ronda ${state.index+1} / ${state.session.length} · ${p.title}`;
  $("prompt").textContent=p.prompt;
  $("note").replaceChildren();
  const box=$("opts"); box.replaceChildren();
  p.options.forEach((text,j)=>{
    const b=document.createElement("button"); b.className="opt"; b.textContent=String.fromCharCode(65+j)+". "+text;
    b.addEventListener("click",()=>choose(j,b));
    box.appendChild(b);
  });
}
function choose(j,b) {
  if(state.answered)return;
  state.answered=true;
  const p=state.session[state.index];
  const ok=j===p.answer;
  if(ok)state.score++;
  [...document.querySelectorAll(".opt")].forEach((x,k)=>{ if(k===p.answer)x.classList.add("good"); });
  if(!ok)b.classList.add("bad");
  const n=document.createElement("div"); n.className="note"; n.textContent=(ok?"✓ Certo. ":"✗ Errado. ")+p.hint;
  $("note").replaceChildren(n);
}
function showHint() {
  state.hints++;
  const p=state.session[state.index];
  const n=document.createElement("div"); n.className="note"; n.textContent="Dica: "+p.hint;
  $("note").replaceChildren(n);
}
function nextPuzzle() {
  if(!state.answered) { alert("Escolhe uma resposta primeiro."); return; }
  state.index++;
  if(state.index<state.session.length) renderPuzzle(); else finish();
}
function finish() {
  $("game").classList.add("hidden");
  $("result").classList.remove("hidden");
  saveProgress();
  const r=$("result"); r.replaceChildren();
  const title=document.createElement("div"); title.className="big"; title.textContent=state.mode==="duel"?"Fim do duelo":"Resultado";
  const final=state.mode==="coop"?Math.max(0,state.score-state.hints):state.score;
  const score=document.createElement("div"); score.className="score"; score.textContent=`${final} / ${state.session.length}`;
  r.append(title,score);
  if(state.mode==="duel") {
    const elapsed=Math.round((Date.now()-state.duelStart)/1000);
    const p=document.createElement("p"); p.textContent=`Partida ${state.duelCode} · ${elapsed} s. Comparem pontuação e tempo.`;
    r.appendChild(p);
  }
  if(state.mode==="coop") {
    const p=document.createElement("p"); p.textContent=`Acertos: ${state.score} · dicas usadas: ${state.hints}`;
    r.appendChild(p);
  }
  const back=document.createElement("button"); back.className="primary"; back.textContent="Voltar à praia";
  back.addEventListener("click",()=>setMode(state.mode)); r.appendChild(back);
}
window.addEventListener("DOMContentLoaded",()=>{
  $("soloBtn").addEventListener("click",()=>setMode("solo"));
  $("coopBtn").addEventListener("click",()=>setMode("coop"));
  $("duelBtn").addEventListener("click",()=>setMode("duel"));
  $("hintBtn").addEventListener("click",showHint);
  $("nextBtn").addEventListener("click",nextPuzzle);
  setMode("solo");
});
