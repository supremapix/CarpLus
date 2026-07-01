import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from "react";
import { MessageCircleQuestion, Search, X, ChevronDown, Phone, MapPin, Clock, Disc, Settings, Wrench, Car } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { N as Navbar, F as Footer } from "./Footer-DkaDSj4_.js";
import "./services-SlP8WPLZ.js";
const faqData = [
  // Pneus
  { categoria: "Pneus", pergunta: "Qual a melhor marca de pneu para meu carro?", resposta: "A melhor marca de pneu depende do seu tipo de uso, veiculo e orcamento. Na Carplus Centro Automotivo em Curitiba, trabalhamos com as principais marcas do mercado como Pirelli, Michelin, Goodyear, Continental, Bridgestone e Firestone. Para uso urbano, pneus como Pirelli Cinturato e Michelin Primacy oferecem excelente conforto. Para SUVs e picapes, recomendamos linhas como Scorpion e Dueler. Nossa equipe faz uma analise completa do seu veiculo para indicar o pneu ideal." },
  { categoria: "Pneus", pergunta: "Quanto tempo dura um pneu novo?", resposta: "A durabilidade de um pneu novo varia entre 40.000 a 80.000 km, dependendo da marca, modelo, tipo de conducao e manutencao. Pneus de alta performance tendem a durar menos por terem compostos mais macios. Calibragem correta, alinhamento em dia e rotacao periodica podem aumentar significativamente a vida util. Na Carplus, recomendamos verificar os pneus a cada 10.000 km e trocar quando o indicador TWI estiver nivelado com a banda de rodagem." },
  { categoria: "Pneus", pergunta: "Posso misturar marcas de pneu no mesmo eixo?", resposta: "Nao e recomendado misturar marcas diferentes no mesmo eixo. Pneus de marcas distintas podem ter caracteristicas diferentes de tracao, frenagem e comportamento em curvas, comprometendo a estabilidade e seguranca do veiculo. O ideal e sempre usar pneus identicos por eixo. Se precisar misturar, coloque os pneus novos no eixo traseiro para maior estabilidade." },
  { categoria: "Pneus", pergunta: "Qual o prazo de validade de um pneu?", resposta: "O prazo de validade de um pneu e de aproximadamente 5 anos a partir da data de fabricacao, mesmo sem uso. A borracha sofre degradacao natural com o tempo devido a oxidacao e ressecamento. Voce pode verificar a data de fabricacao pelo codigo DOT na lateral do pneu - os 4 ultimos digitos indicam semana e ano de fabricacao. Na Carplus, vendemos apenas pneus com fabricacao recente." },
  { categoria: "Pneus", pergunta: "Como saber se meu pneu esta careca?", resposta: "O pneu esta careca quando a profundidade dos sulcos atinge 1,6mm ou menos - o limite legal no Brasil. Voce pode verificar observando o indicador TWI (Tread Wear Indicator), pequenas barras transversais nos sulcos. Quando a banda de rodagem esta nivelada com essas barras, e hora de trocar. Pneus carecas perdem tracao, aumentam a distancia de frenagem e tem maior risco de aquaplanagem." },
  { categoria: "Pneus", pergunta: "O que significa o numero na lateral do pneu?", resposta: "Os numeros na lateral do pneu indicam suas especificacoes tecnicas. Por exemplo, em 205/55R16 91V: 205 e a largura em mm, 55 e a relacao altura/largura em porcentagem, R indica construcao radial, 16 e o diametro do aro em polegadas, 91 e o indice de carga (615kg) e V e o indice de velocidade (240km/h). Na Carplus, nossa equipe explica todas as especificacoes para voce escolher o pneu correto." },
  { categoria: "Pneus", pergunta: "Qual a diferenca entre pneu radial e diagonal?", resposta: "Pneus radiais tem as lonas de tecido dispostas em angulo de 90 graus em relacao ao sentido de rodagem, oferecendo maior flexibilidade, conforto, durabilidade e economia de combustivel. Pneus diagonais tem lonas cruzadas em angulos de 30-40 graus, sendo mais rigidos e menos eficientes. Praticamente todos os carros modernos usam pneus radiais - identificados pela letra R na especificacao." },
  { categoria: "Pneus", pergunta: "Pneu novo precisa de balanceamento?", resposta: "Sim, todo pneu novo precisa de balanceamento. O balanceamento distribui uniformemente o peso do conjunto pneu/roda, evitando vibracoes no volante e desgaste irregular. Na Carplus, o balanceamento esta incluso na montagem de pneus novos. Utilizamos equipamento computadorizado de alta precisao para garantir um balanceamento perfeito." },
  { categoria: "Pneus", pergunta: "Com que frequencia devo calibrar os pneus?", resposta: "Recomendamos calibrar os pneus a cada 15 dias ou antes de viagens longas. A pressao deve ser verificada com os pneus frios, pois o aquecimento aumenta a pressao interna. Pneus descalibrados aumentam o consumo de combustivel, causam desgaste irregular e comprometem a seguranca. Na Carplus, oferecemos calibragem gratuita para clientes." },
  { categoria: "Pneus", pergunta: "Qual a pressao ideal para meus pneus?", resposta: "A pressao ideal varia conforme o veiculo e esta indicada na porta do motorista ou no manual do proprietario. Geralmente fica entre 30 e 35 PSI para carros de passeio. Nunca use a pressao maxima indicada no pneu - essa e a pressao limite, nao a recomendada. Pneus com carga extra ou viagens longas podem exigir ajustes. Nossa equipe na Carplus orienta a pressao correta para seu veiculo." },
  { categoria: "Pneus", pergunta: "Pneu murcho estraga o aro?", resposta: "Sim, rodar com pneu murcho pode danificar seriamente o aro. Quando a pressao esta muito baixa, o peso do veiculo faz o pneu deformar e o aro pode tocar no solo em buracos ou lombadas, causando amassados, trincas ou empenamento. Alem disso, a lateral do pneu sofre danos irreversiveis. Sempre mantenha os pneus calibrados e evite rodar com pneu furado por longas distancias." },
  { categoria: "Pneus", pergunta: "Qual a diferenca entre pneu de verao e inverno?", resposta: "Pneus de verao tem compostos mais duros, otimizados para temperaturas acima de 7 graus C, oferecendo melhor desempenho em piso seco e molhado. Pneus de inverno tem borracha mais macia e sulcos mais profundos, mantendo flexibilidade em baixas temperaturas e melhor tracao na neve. No Brasil, com clima predominantemente quente, pneus de verao ou all-season sao os mais indicados para a maioria das regioes." },
  { categoria: "Pneus", pergunta: "Vale a pena comprar pneu remold?", resposta: "Pneus remold passam por um processo de reconstrucao onde a banda de rodagem e substituida. Sao mais baratos, porem tem vida util menor e podem apresentar problemas de qualidade dependendo do fabricante. Se optar por remold, escolha empresas certificadas pelo INMETRO. Na Carplus, trabalhamos apenas com pneus novos de primeira linha para garantir sua seguranca." },
  { categoria: "Pneus", pergunta: "O que e pneu run flat?", resposta: "Pneus run flat possuem laterais reforcadas que permitem rodar por ate 80km a 80km/h mesmo totalmente vazios. Sao ideais para quem nao quer se preocupar com estepe ou trocas na estrada. Porem, sao mais caros, tem rodagem mais firme e precisam de rodas especificas. Veiculos BMW, Mercedes e Mini costumam vir equipados com run flat de fabrica. A Carplus trabalha com diversas opcoes de pneus run flat." },
  { categoria: "Pneus", pergunta: "Posso rodar com pneu furado?", resposta: "Nao e recomendado rodar com pneu furado, exceto se for um pneu run flat. Rodar com pneu convencional furado danifica irreversivelmente a estrutura interna, a lateral e pode amassar o aro. Em caso de furo, pare em local seguro, sinalize o veiculo e troque pelo estepe ou acione assistencia. A Carplus oferece servico rapido de reparo de pneus furados." },
  { categoria: "Pneus", pergunta: "Qual pneu e melhor para estrada?", resposta: "Para uso rodoviario, recomendamos pneus com foco em conforto, baixo ruido e durabilidade como Michelin Primacy, Pirelli Cinturato P7, Continental ContiPowerContact e Goodyear EfficientGrip. Esses modelos oferecem excelente estabilidade em alta velocidade, boa drenagem de agua e economia de combustivel. Na Carplus, avaliamos seu perfil de uso para indicar o pneu ideal para suas viagens." },
  { categoria: "Pneus", pergunta: "Qual pneu e mais economico?", resposta: "Pneus com baixa resistencia ao rolamento consomem menos combustivel. Linhas como Pirelli Cinturato, Michelin Energy Saver, Continental EcoContact e Bridgestone Ecopia sao desenvolvidas para economia. A diferenca pode chegar a 5% no consumo. Alem da economia, esses pneus tambem emitem menos CO2. Na Carplus, temos diversas opcoes de pneus economicos." },
  { categoria: "Pneus", pergunta: "Quanto custa um jogo de pneus em Curitiba?", resposta: "O preco de um jogo de 4 pneus em Curitiba varia conforme a marca, modelo e medida. Pneus para carros populares aro 14 custam a partir de R$ 1.200 o jogo. Medidas mais comuns como 185/65R15 e 205/55R16 ficam entre R$ 1.400 e R$ 2.400. Pneus premium e para SUVs podem passar de R$ 4.000. Na Carplus, oferecemos os melhores precos e parcelamento em ate 10x sem juros." },
  { categoria: "Pneus", pergunta: "Onde comprar pneu Pirelli em Curitiba?", resposta: "A Carplus Centro Automotivo e revendedor autorizado Pirelli em Curitiba, localizada no bairro Portao. Trabalhamos com toda a linha Pirelli: Cinturato P1, P7, Scorpion, P Zero e mais. Oferecemos garantia de fabrica, montagem profissional e os melhores precos da regiao. Visite nossa loja na Rua Padre Anchieta ou solicite orcamento pelo WhatsApp." },
  { categoria: "Pneus", pergunta: "Pneu com bolha pode estourar?", resposta: "Sim, pneu com bolha pode estourar a qualquer momento e e extremamente perigoso. A bolha indica que a estrutura interna do pneu foi danificada, geralmente por impacto em buracos ou meios-fios. Nao existe reparo para pneu com bolha - a unica solucao e a substituicao imediata. Na Carplus, fazemos avaliacao gratuita e temos pneus para pronta entrega." },
  { categoria: "Pneus", pergunta: "Quanto custa trocar os 4 pneus?", resposta: "O custo para trocar os 4 pneus inclui o valor dos pneus mais servicos de montagem, balanceamento e alinhamento. Na Carplus, a montagem e balanceamento estao inclusos no preco dos pneus. O alinhamento 3D custa a partir de R$ 120. O valor total varia conforme a marca e medida dos pneus - faca um orcamento sem compromisso pelo nosso WhatsApp." },
  { categoria: "Pneus", pergunta: "Pneu muda o consumo de combustivel?", resposta: "Sim, o pneu influencia diretamente no consumo de combustivel. Pneus com baixa resistencia ao rolamento podem economizar ate 5% de combustivel. Alem disso, pneus descalibrados aumentam o consumo em ate 3%. Manter os pneus calibrados e escolher modelos economicos como Michelin Energy Saver ou Pirelli Cinturato faz diferenca no bolso." },
  { categoria: "Pneus", pergunta: "Pneu novo deixa o carro mais seguro?", resposta: "Sim, pneus novos melhoram significativamente a seguranca do veiculo. Oferecem melhor tracao, frenagem mais curta, menor risco de aquaplanagem e comportamento mais previsivel em curvas. Pneus gastos podem aumentar a distancia de frenagem em ate 50% em piso molhado. Investir em pneus novos e investir em seguranca para voce e sua familia." },
  // Alinhamento e Balanceamento
  { categoria: "Alinhamento", pergunta: "O que e alinhamento 3D?", resposta: "Alinhamento 3D e o metodo mais moderno e preciso de alinhamento de direcao. Utiliza cameras e sensores que medem todos os angulos das rodas simultaneamente, incluindo caster, camber e convergencia. A tecnologia 3D permite ajustes milimetricos impossiveis no alinhamento convencional. Na Carplus, utilizamos equipamento Hunter de ultima geracao." },
  { categoria: "Alinhamento", pergunta: "Qual a diferenca entre alinhamento 2D e 3D?", resposta: "O alinhamento 2D mede os angulos em duas dimensoes, enquanto o 3D mede em tres dimensoes com maior precisao. O 3D captura mais informacoes, detecta problemas que o 2D nao consegue e permite ajustes mais finos. O resultado e maior durabilidade dos pneus, melhor dirigibilidade e economia de combustivel. Na Carplus, so trabalhamos com alinhamento 3D." },
  { categoria: "Alinhamento", pergunta: "Com que frequencia fazer alinhamento?", resposta: "Recomendamos fazer alinhamento a cada 10.000 km ou quando trocar os pneus. Tambem e necessario apos bater em buracos grandes, meios-fios ou qualquer impacto na suspensao. Sinais como volante torto, carro puxando para um lado ou desgaste irregular nos pneus indicam necessidade de alinhamento imediato." },
  { categoria: "Alinhamento", pergunta: "Alinhamento resolve pneu que puxa?", resposta: "Na maioria dos casos, sim. O desalinhamento e a principal causa de o carro puxar para um lado. Porem, outras causas podem ser diferenca de pressao entre os pneus, desgaste desigual ou problemas na suspensao. Na Carplus, fazemos diagnostico completo antes do alinhamento para garantir que o problema seja resolvido definitivamente." },
  { categoria: "Alinhamento", pergunta: "Quanto custa alinhamento 3D em Curitiba?", resposta: "Na Carplus Centro Automotivo, o alinhamento 3D completo custa a partir de R$ 120. Utilizamos equipamento Hunter de ultima geracao que garante precisao maxima. O servico inclui medicao de todos os angulos, ajustes necessarios e relatorio impresso. Fazemos orcamento sem compromisso." },
  { categoria: "Alinhamento", pergunta: "O que e balanceamento de pneus?", resposta: "Balanceamento e o processo de equilibrar o peso do conjunto pneu/roda para que gire sem vibracoes. Pequenas diferencas de peso causam trepidacao no volante e desgaste irregular. O balanceamento usa contrapesos de chumbo ou zinco para compensar essas diferencas. Na Carplus, utilizamos balanceadora computadorizada de alta precisao." },
  { categoria: "Alinhamento", pergunta: "Balanceamento precisa ser feito junto com alinhamento?", resposta: "Sao servicos diferentes mas complementares. Balanceamento elimina vibracoes e deve ser feito sempre que trocar ou desmontar os pneus. Alinhamento corrige os angulos das rodas e deve ser feito periodicamente ou apos impactos. O ideal e fazer os dois juntos quando trocar pneus, mas cada um tem sua indicacao especifica." },
  { categoria: "Alinhamento", pergunta: "Carro tremendo na estrada precisa de balanceamento?", resposta: "Vibracao em alta velocidade geralmente indica necessidade de balanceamento. Se a trepidacao ocorre principalmente entre 80-120 km/h e se sente no volante, balanceamento e a primeira suspeita. Porem, pode ser tambem pneu com deformacao, roda amassada ou problema na suspensao. Na Carplus, diagnosticamos a causa correta." },
  { categoria: "Alinhamento", pergunta: "Quanto custa balanceamento em Curitiba?", resposta: "Na Carplus, o balanceamento custa R$ 25 por roda. Na compra de pneus novos, o balanceamento esta incluso no preco. Utilizamos balanceadora computadorizada que garante precisao maxima. O servico e rapido, leva cerca de 10 minutos por roda." },
  { categoria: "Alinhamento", pergunta: "Alinhamento torto desgasta pneu?", resposta: "Sim, o desalinhamento e uma das principais causas de desgaste prematuro dos pneus. Angulos incorretos fazem o pneu raspar no asfalto em vez de rolar livremente. Isso pode reduzir a vida util em ate 50%. Alem do desgaste, o desalinhamento aumenta o consumo de combustivel e compromete a seguranca." },
  { categoria: "Alinhamento", pergunta: "Meu carro esta andando torto, o que pode ser?", resposta: "Carro andando torto pode ser causado por desalinhamento, diferenca de pressao nos pneus, desgaste desigual, problemas na suspensao ou ate defeito no pneu. Primeiro verifique a pressao de todos os pneus. Se estiver correta, faca um alinhamento 3D. Se persistir, pode haver componente da suspensao com problema. Na Carplus, diagnosticamos a causa exata." },
  { categoria: "Alinhamento", pergunta: "Quanto tempo leva para fazer alinhamento?", resposta: "Na Carplus, o alinhamento 3D completo leva em media 30 a 45 minutos. O tempo pode variar se houver necessidade de ajustes mecanicos na suspensao. Se combinar com balanceamento e/ou montagem de pneus, o tempo total fica entre 1 hora e 1 hora e meia." },
  { categoria: "Alinhamento", pergunta: "O que causa vibracao no volante em alta velocidade?", resposta: "As principais causas sao: desbalanceamento dos pneus, rodas amassadas ou empenadas, pneus com deformacao interna, problemas na suspensao dianteira, ou disco de freio empenado (se vibrar ao frear). Na Carplus, fazemos diagnostico completo para identificar a causa exata e resolver o problema." },
  // Freios
  { categoria: "Freios", pergunta: "O que e fluido de freio?", resposta: "Fluido de freio e um liquido hidraulico que transmite a forca do pedal para as pincas e cilindros de roda, acionando as pastilhas e lonas. E fundamental para o funcionamento do sistema de freios. Existem diferentes tipos (DOT3, DOT4, DOT5.1) com pontos de ebulicao variados. Na Carplus, usamos fluidos de alta qualidade." },
  { categoria: "Freios", pergunta: "Com que frequencia trocar o fluido de freio?", resposta: "Recomenda-se trocar o fluido de freio a cada 2 anos ou 40.000 km, o que ocorrer primeiro. O fluido absorve umidade do ar com o tempo, reduzindo seu ponto de ebulicao e eficiencia. Em Curitiba, com alta umidade, esse intervalo e ainda mais importante. Na Carplus, fazemos a troca com sangria completa do sistema." },
  { categoria: "Freios", pergunta: "Pastilha de freio quando trocar?", resposta: "As pastilhas de freio devem ser trocadas quando atingem 3mm de espessura do material de friccao. A maioria dos veiculos tem sensor que acende uma luz no painel. Sinais de desgaste incluem ruido ao frear, pedal mais longo ou vibracao. Na Carplus, verificamos as pastilhas gratuitamente." },
  { categoria: "Freios", pergunta: "Disco de freio quando trocar?", resposta: "Os discos de freio devem ser trocados quando atingem a espessura minima gravada neles ou quando apresentam sulcos profundos, trincas ou empenamento. Geralmente duram de 2 a 3 trocas de pastilhas. Na Carplus, medimos a espessura e avaliamos a condicao dos discos em toda manutencao de freios." },
  { categoria: "Freios", pergunta: "Freio rangendo o que pode ser?", resposta: "Rangido nos freios pode indicar pastilhas gastas, disco com sujeira ou oxidacao, pastilhas de baixa qualidade, ou falta de lubrificacao nas guias. Algumas pastilhas novas rangem levemente ate assentar. Se o ruido for continuo ou intenso, faca uma verificacao. Na Carplus, diagnosticamos e resolvemos ruidos nos freios." },
  { categoria: "Freios", pergunta: "Freio fundo o que significa?", resposta: "Pedal de freio muito fundo pode indicar: pastilhas gastas, ar no sistema hidraulico, vazamento de fluido, cilindro mestre com problema, ou regulagem das lonas traseiras. E uma situacao de risco que exige verificacao imediata. Na Carplus, diagnosticamos a causa e corrigimos com seguranca." },
  { categoria: "Freios", pergunta: "Freio vibrando ao parar o que fazer?", resposta: "Vibracao ao frear geralmente indica disco de freio empenado ou com espessura irregular. Pode acontecer por superaquecimento (frenagens bruscas repetidas) ou desgaste natural. A solucao pode ser retifica dos discos (se houver espessura suficiente) ou substituicao. Na Carplus, avaliamos e indicamos a melhor solucao." },
  { categoria: "Freios", pergunta: "Quanto custa troca de pastilha de freio em Curitiba?", resposta: "Na Carplus, a troca de pastilhas de freio dianteiras custa a partir de R$ 180 (pecas + mao de obra). Pastilhas traseiras a partir de R$ 150. O valor varia conforme o veiculo e a qualidade das pastilhas escolhidas. Trabalhamos com marcas como Bosch, Cobreq, Fras-le e originais." },
  { categoria: "Freios", pergunta: "Freio ABS esta com luz acesa o que fazer?", resposta: "A luz do ABS acesa indica problema no sistema antitravamento. O freio convencional continua funcionando, mas sem a protecao do ABS. Pode ser sensor de roda sujo ou danificado, modulo ABS com falha, ou problema eletrico. Na Carplus, fazemos diagnostico por scanner para identificar a causa exata." },
  { categoria: "Freios", pergunta: "Manutencao de freio pode salvar vidas?", resposta: "Absolutamente. O sistema de freios e o item de seguranca mais importante do veiculo. Freios em mau estado aumentam drasticamente a distancia de parada e podem falhar completamente em situacoes de emergencia. A manutencao preventiva dos freios e um investimento na seguranca de voce e de todos." },
  // Suspensao
  { categoria: "Suspensao", pergunta: "O que e suspensao do carro?", resposta: "A suspensao e o conjunto de componentes que conecta as rodas ao chassi do veiculo: amortecedores, molas, bieletas, pivos, buchas, bandejas e barra estabilizadora. Sua funcao e absorver impactos, manter os pneus em contato com o solo e proporcionar conforto e estabilidade. Na Carplus, fazemos manutencao completa de suspensao." },
  { categoria: "Suspensao", pergunta: "Suspensao fazendo barulho o que pode ser?", resposta: "Barulhos na suspensao podem indicar: buchas ressecadas, bieletas da barra estabilizadora gastas, pivos com folga, batentes de amortecedor danificados, ou amortecedores vazando. O diagnostico preciso requer inspecao com o veiculo elevado. Na Carplus, identificamos a origem do ruido e indicamos a solucao." },
  { categoria: "Suspensao", pergunta: "Quanto custa revisao de suspensao?", resposta: "A revisao de suspensao na Carplus inclui inspecao completa de todos os componentes e custa R$ 80. Se forem necessarias pecas, o valor varia conforme o veiculo e os itens a substituir. Fazemos orcamento detalhado antes de qualquer servico." },
  { categoria: "Suspensao", pergunta: "O que e amortecedor?", resposta: "O amortecedor e o componente da suspensao que controla o movimento das molas, evitando que o carro balance demais apos passar por irregularidades. Ele absorve e dissipa a energia dos impactos em forma de calor. Amortecedores gastos comprometem a estabilidade, frenagem e conforto." },
  { categoria: "Suspensao", pergunta: "Amortecedor gasto afeta a frenagem?", resposta: "Sim, amortecedores gastos aumentam a distancia de frenagem significativamente. Quando o amortecedor nao controla bem os movimentos da suspensao, os pneus perdem contato com o solo em irregularidades, reduzindo a eficiencia dos freios. E um item de seguranca critico." },
  { categoria: "Suspensao", pergunta: "Quando trocar o amortecedor?", resposta: "Recomenda-se trocar os amortecedores entre 40.000 e 60.000 km, dependendo das condicoes de uso e qualidade das estradas. Sinais de desgaste incluem: carro balancando demais, vazamento de oleo no amortecedor, ruidos e instabilidade em curvas ou frenagens. Na Carplus, avaliamos e indicamos a troca quando necessario." },
  { categoria: "Suspensao", pergunta: "Carro barulhando na lombada o que pode ser?", resposta: "Barulho ao passar em lombadas geralmente indica problema na suspensao: bieletas da barra estabilizadora, buchas ressecadas, batentes de amortecedor danificados ou amortecedores gastos. Tambem pode ser calco de motor solto ou componentes da direcao. Na Carplus, diagnosticamos a causa exata." },
  { categoria: "Suspensao", pergunta: "Quanto custa trocar amortecedor em Curitiba?", resposta: "Na Carplus, a troca de amortecedores dianteiros custa a partir de R$ 600 o par (pecas + mao de obra). Amortecedores traseiros a partir de R$ 400 o par. O valor varia conforme o veiculo e a marca escolhida. Trabalhamos com Monroe, Cofap, Nakata e outros." },
  // Ar Condicionado
  { categoria: "Ar Condicionado", pergunta: "O ar condicionado do meu carro esta fraco o que fazer?", resposta: "Ar condicionado fraco pode indicar falta de gas, filtro de cabine entupido, condensador sujo, compressor com problema ou vazamento no sistema. Na Carplus, fazemos diagnostico completo para identificar a causa. Muitas vezes uma simples recarga de gas e limpeza resolvem o problema." },
  { categoria: "Ar Condicionado", pergunta: "Com que frequencia fazer manutencao do ar condicionado?", resposta: "Recomenda-se fazer manutencao do ar condicionado automotivo anualmente, de preferencia antes do verao. Inclui verificacao do nivel de gas, limpeza do sistema, troca do filtro de cabine e higienizacao. Isso garante eficiencia, economia de combustivel e ar saudavel." },
  { categoria: "Ar Condicionado", pergunta: "Quanto custa higienizacao do ar condicionado?", resposta: "Na Carplus, a higienizacao do ar condicionado custa a partir de R$ 80. Inclui limpeza do evaporador com produto bactericida, eliminando fungos, bacterias e mau cheiro. Se incluir troca do filtro de cabine, o valor total fica em torno de R$ 130." },
  { categoria: "Ar Condicionado", pergunta: "Quanto custa recarga de gas do ar condicionado em Curitiba?", resposta: "Na Carplus, a recarga de gas R134a custa a partir de R$ 200. O valor inclui verificacao de vazamentos, limpeza do sistema e gas. Carros com gas R1234yf (mais novos) tem custo maior devido ao preco do gas. Fazemos orcamento antes de qualquer servico." },
  { categoria: "Ar Condicionado", pergunta: "Ar condicionado com cheiro ruim o que fazer?", resposta: "Cheiro ruim no ar condicionado indica presenca de fungos e bacterias no evaporador. A solucao e fazer higienizacao com produto bactericida e trocar o filtro de cabine. Na Carplus, realizamos esse servico que elimina o mau cheiro e melhora a qualidade do ar." },
  { categoria: "Ar Condicionado", pergunta: "Ar condicionado nao esta gelando o que pode ser?", resposta: "Ar condicionado que nao gela pode ter diversas causas: falta de gas, compressor com defeito, condensador sujo ou obstruido, valvula de expansao com problema, ou vazamento no sistema. Na Carplus, fazemos diagnostico completo com equipamentos apropriados para identificar a falha." },
  { categoria: "Ar Condicionado", pergunta: "O ar condicionado consome combustivel?", resposta: "Sim, o ar condicionado aumenta o consumo de combustivel em 5% a 15% dependendo do veiculo e intensidade de uso. O compressor e acionado pelo motor atraves de correia. Sistemas modernos e bem mantidos consomem menos. Em cidade, com paradas frequentes, o impacto e maior que na estrada." },
  { categoria: "Ar Condicionado", pergunta: "Filtro do ar condicionado quando trocar?", resposta: "O filtro de cabine (filtro do ar condicionado) deve ser trocado a cada 10.000 a 15.000 km ou anualmente. Em cidades com muita poeira ou poluicao, o intervalo pode ser menor. Filtro entupido reduz o fluxo de ar, sobrecarrega o sistema e permite a passagem de impurezas." },
  // Revisao e Manutencao
  { categoria: "Revisao", pergunta: "A Carplus faz manutencao preventiva?", resposta: "Sim, a Carplus realiza manutencao preventiva completa. Inclui troca de oleo e filtros, verificacao de freios, suspensao, direcao, sistema de arrefecimento, correias, velas, cabos e muito mais. Seguimos o manual do fabricante ou elaboramos um plano personalizado para seu veiculo." },
  { categoria: "Revisao", pergunta: "O que entra em uma revisao completa?", resposta: "Uma revisao completa na Carplus inclui: troca de oleo e filtros (oleo, ar, combustivel, cabine), verificacao de freios (pastilhas, discos, fluido), inspecao da suspensao, verificacao de correias e mangueiras, nivel de fluidos, condicao dos pneus, sistema de arrefecimento, bateria e diagnostico por scanner. Fazemos check-list detalhado." },
  { categoria: "Revisao", pergunta: "Com que quilometragem fazer revisao?", resposta: "A maioria dos fabricantes recomenda revisoes a cada 10.000 km ou 12 meses, o que ocorrer primeiro. Veiculos mais antigos ou com uso mais severo podem precisar de intervalos menores. O manual do proprietario tem as recomendacoes especificas. Na Carplus, orientamos o intervalo ideal para seu veiculo e tipo de uso." },
  { categoria: "Revisao", pergunta: "Quanto custa revisao completa em Curitiba?", resposta: "O valor da revisao completa na Carplus varia conforme o veiculo e os itens a serem trocados. Uma revisao basica com troca de oleo e filtros custa a partir de R$ 250. Revisoes mais completas com verificacao de todos os sistemas ficam entre R$ 400 e R$ 800. Fazemos orcamento detalhado sem compromisso." },
  { categoria: "Revisao", pergunta: "Revisao perde garantia se nao for na concessionaria?", resposta: "Nao. Pela legislacao brasileira (Codigo de Defesa do Consumidor), voce pode fazer revisoes em oficinas independentes sem perder a garantia, desde que sejam usadas pecas de qualidade equivalente e seguidas as especificacoes do fabricante. A Carplus atende esses requisitos e fornece nota fiscal detalhada." },
  { categoria: "Revisao", pergunta: "Quanto custa troca de oleo em Curitiba?", resposta: "Na Carplus, a troca de oleo custa a partir de R$ 150, incluindo oleo e filtro de oleo. O valor varia conforme o tipo de oleo (mineral, semissintetico ou sintetico) e a quantidade necessaria para seu veiculo. Utilizamos oleos das melhores marcas com garantia de procedencia." },
  { categoria: "Revisao", pergunta: "Qual o melhor oleo para meu carro?", resposta: "O melhor oleo e o que atende as especificacoes do fabricante do seu veiculo (viscosidade e normas). Oleos sinteticos oferecem melhor protecao e durabilidade, especialmente para motores turbo e uso severo. Oleos semissinteticos sao um bom meio-termo. Na Carplus, indicamos o oleo ideal baseado nas especificacoes do seu carro." },
  { categoria: "Revisao", pergunta: "Com que frequencia trocar o oleo?", resposta: "A frequencia de troca de oleo depende do tipo de oleo e uso do veiculo. Oleo mineral: 5.000 a 7.000 km. Oleo semissintetico: 7.000 a 10.000 km. Oleo sintetico: 10.000 a 15.000 km. Uso severo (transito, curtas distancias) reduz esses intervalos. Consulte o manual do seu veiculo." },
  { categoria: "Revisao", pergunta: "O que e correia dentada?", resposta: "A correia dentada e uma peca de borracha com dentes que sincroniza o movimento do virabrequim com o comando de valvulas. E essencial para o funcionamento do motor. Se romper, pode causar danos graves e caros ao motor. Por isso a troca preventiva no prazo correto e fundamental." },
  { categoria: "Revisao", pergunta: "Com que km trocar a correia dentada?", resposta: "O intervalo de troca da correia dentada varia de 40.000 a 100.000 km dependendo do veiculo. Alem da quilometragem, tambem ha prazo maximo em anos (geralmente 4-5 anos). Consulte o manual do proprietario. Na Carplus, verificamos o historico e orientamos o momento correto da troca." },
  { categoria: "Revisao", pergunta: "O que acontece se a correia dentada arrebentar?", resposta: "Em motores de interferencia (maioria dos carros atuais), se a correia arrebentar, as valvulas colidem com os pistoes, causando danos graves ao cabecote, valvulas e pistoes. O reparo pode custar de R$ 3.000 a mais de R$ 10.000. A troca preventiva evita esse prejuizo." },
  // Scanner e Diagnostico
  { categoria: "Diagnostico", pergunta: "O que e scanner automotivo?", resposta: "Scanner automotivo e um equipamento de diagnostico que se conecta ao computador de bordo do veiculo (ECU) para ler codigos de falha, parametros do motor e outros sistemas eletronicos. Permite identificar problemas que acendem luzes no painel, falhas intermitentes e verificar o funcionamento de sensores e atuadores. Na Carplus, temos scanner profissional multimarcas." },
  { categoria: "Diagnostico", pergunta: "A luz do painel acendeu o que fazer?", resposta: "Quando uma luz do painel acende, o primeiro passo e identificar qual luz e. Luzes vermelhas indicam problemas graves que exigem parada imediata. Luzes amarelas indicam atencao, mas permitem continuar ate uma oficina. Na Carplus, fazemos leitura com scanner para identificar o problema exato e indicar a solucao." },
  { categoria: "Diagnostico", pergunta: "Quanto custa scanner automotivo em Curitiba?", resposta: "Na Carplus, o servico de diagnostico por scanner custa R$ 80. Inclui leitura de todos os sistemas do veiculo, identificacao de codigos de falha e orientacao sobre os reparos necessarios. Se o servico de reparo for feito conosco, o valor do scanner pode ser descontado." },
  { categoria: "Diagnostico", pergunta: "O que a luz amarela do painel significa?", resposta: "Luzes amarelas ou laranjas indicam atencao - algo precisa ser verificado, mas nao e emergencia imediata. Exemplos: luz de injecao (motor), ABS, airbag, pressao dos pneus, nivel de combustivel baixo. Voce pode continuar dirigindo ate uma oficina, mas nao ignore. Na Carplus, diagnosticamos qualquer luz de advertencia." },
  { categoria: "Diagnostico", pergunta: "Scanner detecta todos os problemas do carro?", resposta: "O scanner detecta problemas registrados nos modulos eletronicos do veiculo, mas nao substitui a avaliacao mecanica. Desgaste de pecas, folgas, vazamentos e problemas mecanicos em geral precisam de inspecao visual e testes. Na Carplus, combinamos diagnostico por scanner com avaliacao mecanica completa." },
  // Localizacao e Atendimento
  { categoria: "Carplus", pergunta: "Onde fica a Carplus em Curitiba?", resposta: "A Carplus Centro Automotivo esta localizada na Rua Padre Anchieta, 2285, no bairro Portao, em Curitiba-PR. Estamos em uma regiao de facil acesso, com amplo estacionamento para clientes. Ficamos proximos ao Terminal do Portao e atendemos toda a regiao sul de Curitiba." },
  { categoria: "Carplus", pergunta: "A Carplus fica no bairro Portao?", resposta: "Sim, a Carplus esta localizada no coracao do bairro Portao, um dos mais tradicionais de Curitiba. Nosso endereco e Rua Padre Anchieta, 2285. Estamos a poucos minutos do Terminal do Portao e atendemos moradores de toda a regiao." },
  { categoria: "Carplus", pergunta: "Qual o horario de atendimento da Carplus?", resposta: "A Carplus funciona de segunda a sexta-feira das 8h as 18h, e aos sabados das 8h as 12h. Nao abrimos aos domingos e feriados. Para atendimento mais rapido, recomendamos agendar pelo WhatsApp, especialmente para servicos mais demorados." },
  { categoria: "Carplus", pergunta: "A Carplus abre no sabado?", resposta: "Sim, a Carplus abre aos sabados das 8h as 12h. E um otimo horario para quem trabalha durante a semana. Recomendamos chegar cedo ou agendar pelo WhatsApp para garantir atendimento, pois os sabados costumam ter alta demanda." },
  { categoria: "Carplus", pergunta: "Qual o telefone da Carplus?", resposta: "O telefone da Carplus e (41) 3082-7282. Voce tambem pode entrar em contato pelo WhatsApp para orcamentos, agendamentos e duvidas. Estamos disponiveis de segunda a sexta das 8h as 18h e sabados das 8h as 12h." },
  { categoria: "Carplus", pergunta: "A Carplus tem WhatsApp para orcamento?", resposta: "Sim, a Carplus atende pelo WhatsApp para orcamentos rapidos. Envie a medida do pneu ou descreva o servico que precisa e respondemos com valores e disponibilidade. Tambem aceitamos fotos para diagnosticos preliminares." },
  { categoria: "Carplus", pergunta: "A Carplus emite nota fiscal?", resposta: "Sim, a Carplus emite nota fiscal de todos os servicos e produtos. A nota fiscal e importante para garantia, comprovacao de despesas e, em caso de empresas, abatimento de impostos. Fornecemos nota fiscal eletronica (NF-e) ou cupom fiscal conforme sua necessidade." },
  { categoria: "Carplus", pergunta: "A Carplus tem garantia nos servicos?", resposta: "Sim, todos os servicos da Carplus tem garantia. A garantia varia conforme o tipo de servico: troca de oleo 6 meses ou 10.000km, alinhamento 3 meses, pneus conforme fabricante, pecas em geral 3 a 12 meses. Trabalhamos com transparencia e compromisso com a qualidade." },
  { categoria: "Carplus", pergunta: "A Carplus faz orcamento gratuito?", resposta: "Sim, a Carplus faz orcamento gratuito e sem compromisso. Voce pode solicitar orcamento pessoalmente, por telefone ou WhatsApp. Para diagnosticos que exijam desmontagem ou scanner, pode haver taxa que e descontada se o servico for executado conosco." },
  { categoria: "Carplus", pergunta: "A Carplus tem estacionamento facil?", resposta: "Sim, a Carplus tem estacionamento proprio e amplo para clientes. Voce pode deixar o carro com tranquilidade enquanto aguarda o servico ou deixar para buscar depois. Estamos na Rua Padre Anchieta, 2285, no Portao." },
  { categoria: "Carplus", pergunta: "A Carplus tem Wi-Fi na sala de espera?", resposta: "Sim, a Carplus oferece Wi-Fi gratuito na sala de espera. Tambem temos cafe, agua e um ambiente climatizado para voce aguardar confortavelmente enquanto seu veiculo e atendido. A maioria dos servicos e concluida em menos de 1 hora." },
  { categoria: "Carplus", pergunta: "Tem como parcelar pneu na Carplus?", resposta: "Sim, na Carplus voce pode parcelar seus pneus em ate 10x sem juros no cartao de credito. Aceitamos todas as bandeiras: Visa, Mastercard, Elo, American Express, Hipercard e Diners. Tambem aceitamos Pix e dinheiro com condicoes especiais. Faca um orcamento e conheca nossas condicoes." },
  { categoria: "Carplus", pergunta: "A Carplus aceita cartao de credito?", resposta: "Sim, aceitamos todas as principais bandeiras de cartao de credito: Visa, Mastercard, Elo, American Express, Hipercard e Diners. Parcelamos em ate 10x sem juros. Tambem aceitamos cartao de debito, Pix, transferencia bancaria e dinheiro." },
  // Pneu Furado
  { categoria: "Pneu Furado", pergunta: "Pneu furado no Portao a Carplus resolve?", resposta: "Sim, a Carplus resolve pneu furado com rapidez e qualidade. Estamos no Portao, Rua Padre Anchieta, 2285. Fazemos reparo de furo (quando possivel) ou substituicao do pneu. Temos estoque das principais medidas para pronta entrega." },
  { categoria: "Pneu Furado", pergunta: "Quanto custa consertar pneu furado?", resposta: "Na Carplus, o conserto de pneu furado custa a partir de R$ 40. O valor pode variar dependendo do tamanho e localizacao do furo. Se o furo for na lateral ou muito grande, pode nao ter conserto e sera necessario substituir o pneu." },
  { categoria: "Pneu Furado", pergunta: "A Carplus faz conserto de pneu furado?", resposta: "Sim, a Carplus faz conserto de pneu furado utilizando manchao interno de alta qualidade, que e o metodo mais seguro e duravel. Avaliamos cada caso para garantir que o reparo seja seguro. Se nao houver condicao de reparo, indicamos a substituicao." },
  { categoria: "Pneu Furado", pergunta: "Quanto tempo leva consertar pneu furado?", resposta: "O conserto de pneu furado na Carplus leva em media 20 a 30 minutos. Inclui desmontagem, localizacao do furo, aplicacao do manchao interno, remontagem e balanceamento. Voce pode aguardar na nossa sala de espera confortavel." },
  { categoria: "Pneu Furado", pergunta: "Pneu furado pode ser remendado?", resposta: "Sim, na maioria dos casos pneu furado na banda de rodagem pode ser reparado com manchao interno. Porem, furos na lateral, ombro do pneu, ou multiplos furos proximos podem tornar o reparo inseguro. Tambem nao reparamos pneus que rodaram muito tempo vazios. Na Carplus, avaliamos cada caso." },
  { categoria: "Pneu Furado", pergunta: "Pneu furado na lateral tem conserto?", resposta: "Nao, pneu furado na lateral nao tem conserto seguro. A lateral do pneu e a area mais flexivel e de maior estresse estrutural. Um reparo nessa regiao pode falhar em alta velocidade ou sob carga, causando estouro. A substituicao do pneu e obrigatoria." },
  { categoria: "Pneu Furado", pergunta: "O que fazer se o pneu furar na estrada?", resposta: "Se o pneu furar na estrada: 1) Ligue o pisca-alerta; 2) Reduza a velocidade gradualmente; 3) Pare em local seguro fora da pista; 4) Sinalize com triangulo; 5) Troque pelo estepe ou acione assistencia. Evite rodar com pneu furado para nao danificar o aro." }
];
const categorias = ["Todos", "Pneus", "Alinhamento", "Freios", "Suspensao", "Ar Condicionado", "Revisao", "Diagnostico", "Carplus", "Pneu Furado"];
const categoryIcons = {
  "Pneus": /* @__PURE__ */ jsx(Disc, { size: 16 }),
  "Alinhamento": /* @__PURE__ */ jsx(Settings, { size: 16 }),
  "Freios": /* @__PURE__ */ jsx(Car, { size: 16 }),
  "Suspensao": /* @__PURE__ */ jsx(Wrench, { size: 16 }),
  "Ar Condicionado": /* @__PURE__ */ jsx(Settings, { size: 16 }),
  "Revisao": /* @__PURE__ */ jsx(Wrench, { size: 16 }),
  "Diagnostico": /* @__PURE__ */ jsx(Settings, { size: 16 }),
  "Carplus": /* @__PURE__ */ jsx(MapPin, { size: 16 }),
  "Pneu Furado": /* @__PURE__ */ jsx(Disc, { size: 16 })
};
function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    document.title = "FAQ - Perguntas Frequentes | Carplus Centro Automotivo Curitiba";
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      document.head.appendChild(desc);
    }
    desc.setAttribute(
      "content",
      "Perguntas frequentes sobre pneus, alinhamento 3D, balanceamento, freios, suspensão e serviços automotivos da Carplus Centro Automotivo no Portão, Curitiba."
    );
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.carpluspneuseoficina.com.br/faq";
  }, []);
  const filteredFaqs = useMemo(() => {
    return faqData.filter((faq) => {
      const matchesSearch = searchTerm === "" || faq.pergunta.toLowerCase().includes(searchTerm.toLowerCase()) || faq.resposta.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "Todos" || faq.categoria === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Perguntas Frequentes - Carplus Centro Automotivo Curitiba",
    "description": "Encontre respostas para as duvidas mais comuns sobre pneus, alinhamento, balanceamento, freios, suspensao e servicos automotivos em Curitiba.",
    "url": "https://www.carpluspneuseoficina.com.br/faq",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.pergunta,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.resposta
      }
    }))
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#0f0f0f]", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(faqSchemaData) }
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-16 bg-[#0f0f0f] overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-20", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative max-w-4xl mx-auto px-4 text-center", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6", children: [
              /* @__PURE__ */ jsx(MessageCircleQuestion, { size: 18, className: "text-primary" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-primary", children: "Central de Ajuda" })
            ] }),
            /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-4", children: [
              "Perguntas ",
              /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Frequentes" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-white/60 max-w-2xl mx-auto mb-8", children: "Encontre respostas para suas duvidas sobre pneus, servicos automotivos, precos e atendimento da Carplus Centro Automotivo em Curitiba." }),
            /* @__PURE__ */ jsxs("div", { className: "relative max-w-2xl mx-auto", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none", children: /* @__PURE__ */ jsx(Search, { size: 20, className: "text-white/40" }) }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Buscar pergunta ou palavra-chave...",
                  value: searchTerm,
                  onChange: (e) => setSearchTerm(e.target.value),
                  className: "w-full pl-12 pr-4 py-4 bg-[#1a1a1a] border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-lg shadow-xl"
                }
              ),
              searchTerm && /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setSearchTerm(""),
                  className: "absolute inset-y-0 right-0 pr-4 flex items-center",
                  children: /* @__PURE__ */ jsx(X, { size: 20, className: "text-white/40 hover:text-white transition-colors" })
                }
              )
            ] }),
            searchTerm && /* @__PURE__ */ jsxs("p", { className: "mt-4 text-white/50 text-sm", children: [
              filteredFaqs.length,
              " resultado",
              filteredFaqs.length !== 1 ? "s" : "",
              " encontrado",
              filteredFaqs.length !== 1 ? "s" : ""
            ] })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "sticky top-[72px] sm:top-[108px] z-30 bg-[#0f0f0f]/98 backdrop-blur-md border-b border-white/10 py-3 sm:py-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "flex gap-2 overflow-x-auto px-4 pb-2 scrollbar-hide", style: { WebkitOverflowScrolling: "touch" }, children: categorias.map((cat) => /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setSelectedCategory(cat),
        className: `flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${selectedCategory === cat ? "bg-primary text-black" : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/10"}`,
        children: [
          cat !== "Todos" && categoryIcons[cat],
          cat
        ]
      },
      cat
    )) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 px-4 bg-[#0f0f0f]", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: filteredFaqs.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "text-center py-16", children: [
      /* @__PURE__ */ jsx(MessageCircleQuestion, { size: 48, className: "mx-auto text-white/20 mb-4" }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Nenhum resultado encontrado" }),
      /* @__PURE__ */ jsx("p", { className: "text-white/50", children: "Tente buscar com outras palavras ou selecione uma categoria diferente." })
    ] }) : /* @__PURE__ */ jsx("div", { className: "space-y-3", children: filteredFaqs.map((faq, index) => /* @__PURE__ */ jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: index * 0.02 },
        className: "bg-[#1a1a1a] border border-white/10 rounded-xl",
        itemScope: true,
        itemProp: "mainEntity",
        itemType: "https://schema.org/Question",
        children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setOpenIndex(openIndex === index ? null : index),
              className: "w-full flex items-start justify-between p-5 text-left hover:bg-white/5 transition-colors",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 flex-1", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-primary flex-shrink-0 mt-0.5", children: categoryIcons[faq.categoria] || /* @__PURE__ */ jsx(MessageCircleQuestion, { size: 16 }) }),
                  /* @__PURE__ */ jsx(
                    "h2",
                    {
                      className: "text-white font-medium text-base sm:text-lg pr-4 whitespace-normal break-words overflow-wrap-anywhere flex-1",
                      itemProp: "name",
                      children: faq.pergunta
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    animate: { rotate: openIndex === index ? 180 : 0 },
                    transition: { duration: 0.2 },
                    className: "text-primary shrink-0 self-start",
                    children: /* @__PURE__ */ jsx(ChevronDown, { size: 20 })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(AnimatePresence, { children: openIndex === index && /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: { duration: 0.3 },
              className: "overflow-hidden",
              itemScope: true,
              itemProp: "acceptedAnswer",
              itemType: "https://schema.org/Answer",
              children: /* @__PURE__ */ jsx("div", { className: "px-5 pb-5 pt-0", children: /* @__PURE__ */ jsxs("div", { className: "pl-7 border-l-2 border-primary/30", children: [
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "text-white/70 leading-relaxed",
                    itemProp: "text",
                    children: faq.resposta
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center gap-2", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary", children: [
                  categoryIcons[faq.categoria],
                  faq.categoria
                ] }) })
              ] }) })
            }
          ) })
        ]
      },
      index
    )) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 bg-[#0f0f0f]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl font-black text-white mb-4", children: "Nao encontrou sua duvida?" }),
      /* @__PURE__ */ jsx("p", { className: "text-white/60 mb-8 max-w-xl mx-auto", children: "Nossa equipe esta pronta para atender voce. Entre em contato pelo WhatsApp ou visite nossa loja no Portao." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://wa.me/5541988757360",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#25D366]/90 transition-colors",
            children: [
              /* @__PURE__ */ jsx(Phone, { size: 20 }),
              "Falar no WhatsApp"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/como-chegar",
            className: "inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors",
            children: [
              /* @__PURE__ */ jsx(MapPin, { size: 20 }),
              "Como Chegar"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white/5 border border-white/10 rounded-xl p-6", children: [
          /* @__PURE__ */ jsx(Phone, { size: 24, className: "text-primary mx-auto mb-3" }),
          /* @__PURE__ */ jsx("h3", { className: "text-white font-bold mb-1", children: "(41) 3082-7282" }),
          /* @__PURE__ */ jsx("p", { className: "text-white/50 text-sm", children: "Telefone Fixo" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white/5 border border-white/10 rounded-xl p-6", children: [
          /* @__PURE__ */ jsx(Clock, { size: 24, className: "text-primary mx-auto mb-3" }),
          /* @__PURE__ */ jsx("h3", { className: "text-white font-bold mb-1", children: "Seg-Sex 8h-18h" }),
          /* @__PURE__ */ jsx("p", { className: "text-white/50 text-sm", children: "Sabado 8h-12h" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white/5 border border-white/10 rounded-xl p-6", children: [
          /* @__PURE__ */ jsx(MapPin, { size: 24, className: "text-primary mx-auto mb-3" }),
          /* @__PURE__ */ jsx("h3", { className: "text-white font-bold mb-1", children: "Portao, Curitiba" }),
          /* @__PURE__ */ jsx("p", { className: "text-white/50 text-sm", children: "Rua Padre Anchieta, 2285" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  FAQPage as default
};
