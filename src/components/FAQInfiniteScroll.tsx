import { useRef, useState, useEffect, useCallback } from 'react';
import { Disc, Car, Settings, Wrench, X, ChevronLeft, ChevronRight, MessageCircleQuestion, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  pergunta: string;
  resposta: string;
}

const faqData: FAQItem[] = [
  // Coluna 1 - Pneus
  { pergunta: "Qual a melhor marca de pneu para meu carro?", resposta: "A melhor marca de pneu depende do seu tipo de uso, veiculo e orcamento. Na Carplus Pneus e Oficina Mecânica em Curitiba, trabalhamos com as principais marcas do mercado como Pirelli, Michelin, Goodyear, Continental, Bridgestone e Firestone. Para uso urbano, pneus como Pirelli Cinturato e Michelin Primacy oferecem excelente conforto. Para SUVs e picapes, recomendamos linhas como Scorpion e Dueler. Nossa equipe faz uma analise completa do seu veiculo para indicar o pneu ideal." },
  { pergunta: "Quanto tempo dura um pneu novo?", resposta: "A durabilidade de um pneu novo varia entre 40.000 a 80.000 km, dependendo da marca, modelo, tipo de conducao e manutencao. Pneus de alta performance tendem a durar menos por terem compostos mais macios. Calibragem correta, alinhamento em dia e rotacao periodica podem aumentar significativamente a vida util. Na Carplus, recomendamos verificar os pneus a cada 10.000 km e trocar quando o indicador TWI estiver nivelado com a banda de rodagem." },
  { pergunta: "Posso misturar marcas de pneu no mesmo eixo?", resposta: "Nao e recomendado misturar marcas diferentes no mesmo eixo. Pneus de marcas distintas podem ter caracteristicas diferentes de tracao, frenagem e comportamento em curvas, comprometendo a estabilidade e seguranca do veiculo. O ideal e sempre usar pneus identicos por eixo. Se precisar misturar, coloque os pneus novos no eixo traseiro para maior estabilidade." },
  { pergunta: "Qual o prazo de validade de um pneu?", resposta: "O prazo de validade de um pneu e de aproximadamente 5 anos a partir da data de fabricacao, mesmo sem uso. A borracha sofre degradacao natural com o tempo devido a oxidacao e ressecamento. Voce pode verificar a data de fabricacao pelo codigo DOT na lateral do pneu - os 4 ultimos digitos indicam semana e ano de fabricacao. Na Carplus, vendemos apenas pneus com fabricacao recente." },
  { pergunta: "Como saber se meu pneu está careca?", resposta: "O pneu esta careca quando a profundidade dos sulcos atinge 1,6mm ou menos - o limite legal no Brasil. Voce pode verificar observando o indicador TWI (Tread Wear Indicator), pequenas barras transversais nos sulcos. Quando a banda de rodagem esta nivelada com essas barras, e hora de trocar. Pneus carecas perdem tracao, aumentam a distancia de frenagem e tem maior risco de aquaplanagem." },
  { pergunta: "O que significa o número na lateral do pneu?", resposta: "Os numeros na lateral do pneu indicam suas especificacoes tecnicas. Por exemplo, em 205/55R16 91V: 205 e a largura em mm, 55 e a relacao altura/largura em porcentagem, R indica construcao radial, 16 e o diametro do aro em polegadas, 91 e o indice de carga (615kg) e V e o indice de velocidade (240km/h). Na Carplus, nossa equipe explica todas as especificacoes para voce escolher o pneu correto." },
  { pergunta: "Qual a diferença entre pneu radial e diagonal?", resposta: "Pneus radiais tem as lonas de tecido dispostas em angulo de 90 graus em relacao ao sentido de rodagem, oferecendo maior flexibilidade, conforto, durabilidade e economia de combustivel. Pneus diagonais tem lonas cruzadas em angulos de 30-40 graus, sendo mais rigidos e menos eficientes. Praticamente todos os carros modernos usam pneus radiais - identificados pela letra R na especificacao." },
  { pergunta: "Pneu novo precisa de balanceamento?", resposta: "Sim, todo pneu novo precisa de balanceamento. O balanceamento distribui uniformemente o peso do conjunto pneu/roda, evitando vibracoes no volante e desgaste irregular. Na Carplus, o balanceamento esta incluso na montagem de pneus novos. Utilizamos equipamento computadorizado de alta precisao para garantir um balanceamento perfeito." },
  { pergunta: "Com que frequência devo calibrar os pneus?", resposta: "Recomendamos calibrar os pneus a cada 15 dias ou antes de viagens longas. A pressao deve ser verificada com os pneus frios, pois o aquecimento aumenta a pressao interna. Pneus descalibrados aumentam o consumo de combustivel, causam desgaste irregular e comprometem a seguranca. Na Carplus, oferecemos calibragem gratuita para clientes." },
  { pergunta: "Qual a pressão ideal para meus pneus?", resposta: "A pressao ideal varia conforme o veiculo e esta indicada na porta do motorista ou no manual do proprietario. Geralmente fica entre 30 e 35 PSI para carros de passeio. Nunca use a pressao maxima indicada no pneu - essa e a pressao limite, nao a recomendada. Pneus com carga extra ou viagens longas podem exigir ajustes. Nossa equipe na Carplus orienta a pressao correta para seu veiculo." },
  { pergunta: "Pneu murcho estraga o aro?", resposta: "Sim, rodar com pneu murcho pode danificar seriamente o aro. Quando a pressao esta muito baixa, o peso do veiculo faz o pneu deformar e o aro pode tocar no solo em buracos ou lombadas, causando amassados, trincas ou empenamento. Alem disso, a lateral do pneu sofre danos irreversiveis. Sempre mantenha os pneus calibrados e evite rodar com pneu furado por longas distancias." },
  { pergunta: "Qual a diferença entre pneu de verão e inverno?", resposta: "Pneus de verao tem compostos mais duros, otimizados para temperaturas acima de 7 graus C, oferecendo melhor desempenho em piso seco e molhado. Pneus de inverno tem borracha mais macia e sulcos mais profundos, mantendo flexibilidade em baixas temperaturas e melhor tracao na neve. No Brasil, com clima predominantemente quente, pneus de verao ou all-season sao os mais indicados para a maioria das regioes." },
  { pergunta: "Vale a pena comprar pneu remold?", resposta: "Pneus remold passam por um processo de reconstrucao onde a banda de rodagem e substituida. Sao mais baratos, porem tem vida util menor e podem apresentar problemas de qualidade dependendo do fabricante. Se optar por remold, escolha empresas certificadas pelo INMETRO. Na Carplus, trabalhamos apenas com pneus novos de primeira linha para garantir sua seguranca." },
  { pergunta: "Pneu recauchutado é seguro?", resposta: "Pneus recauchutados podem ser seguros se produzidos por empresas certificadas pelo INMETRO e usados dentro das especificacoes. Porem, tem limitacoes de velocidade e nao sao recomendados para eixos dianteiros. Para carros de passeio, especialmente em uso rodoviario, recomendamos pneus novos. Na Carplus, priorizamos sua seguranca e trabalhamos exclusivamente com pneus novos de qualidade." },
  { pergunta: "O que é pneu run flat?", resposta: "Pneus run flat possuem laterais reforcadas que permitem rodar por ate 80km a 80km/h mesmo totalmente vazios. Sao ideais para quem nao quer se preocupar com estepe ou trocas na estrada. Porem, sao mais caros, tem rodagem mais firme e precisam de rodas especificas. Veiculos BMW, Mercedes e Mini costumam vir equipados com run flat de fabrica. A Carplus trabalha com diversas opcoes de pneus run flat." },
  { pergunta: "Posso rodar com pneu furado?", resposta: "Nao e recomendado rodar com pneu furado, exceto se for um pneu run flat. Rodar com pneu convencional furado danifica irreversivelmente a estrutura interna, a lateral e pode amassar o aro. Em caso de furo, pare em local seguro, sinalize o veiculo e troque pelo estepe ou acione assistencia. A Carplus oferece servico rapido de reparo de pneus furados." },
  { pergunta: "Qual pneu é melhor para estrada?", resposta: "Para uso rodoviario, recomendamos pneus com foco em conforto, baixo ruido e durabilidade como Michelin Primacy, Pirelli Cinturato P7, Continental ContiPowerContact e Goodyear EfficientGrip. Esses modelos oferecem excelente estabilidade em alta velocidade, boa drenagem de agua e economia de combustivel. Na Carplus, avaliamos seu perfil de uso para indicar o pneu ideal para suas viagens." },
  { pergunta: "Qual pneu é mais econômico?", resposta: "Pneus com baixa resistencia ao rolamento consomem menos combustivel. Linhas como Pirelli Cinturato, Michelin Energy Saver, Continental EcoContact e Bridgestone Ecopia sao desenvolvidas para economia. A diferenca pode chegar a 5% no consumo. Alem da economia, esses pneus tambem emitem menos CO2. Na Carplus, temos diversas opcoes de pneus economicos." },
  { pergunta: "Como guardar pneus que não estão sendo usados?", resposta: "Pneus sem uso devem ser armazenados em local fresco, seco e protegido da luz solar direta. Se estiverem montados nas rodas, guarde-os deitados empilhados. Se estiverem sem rodas, guarde-os em pe, girando a posicao a cada mes para evitar deformacao. Evite contato com solventes, combustiveis e ozonio. Pneus bem armazenados mantem suas propriedades por mais tempo." },
  { pergunta: "Quanto custa um jogo de pneus em Curitiba?", resposta: "O preco de um jogo de 4 pneus em Curitiba varia conforme a marca, modelo e medida. Pneus para carros populares aro 14 custam a partir de R$ 1.200 o jogo. Medidas mais comuns como 185/65R15 e 205/55R16 ficam entre R$ 1.400 e R$ 2.400. Pneus premium e para SUVs podem passar de R$ 4.000. Na Carplus, oferecemos os melhores precos e parcelamento em ate 10x sem juros." },
  { pergunta: "Onde comprar pneu Pirelli em Curitiba?", resposta: "A Carplus Pneus e Oficina Mecânica e revendedor autorizado Pirelli em Curitiba, localizada no bairro Portao. Trabalhamos com toda a linha Pirelli: Cinturato P1, P7, Scorpion, P Zero e mais. Oferecemos garantia de fabrica, montagem profissional e os melhores precos da regiao. Visite nossa loja na Rua Padre Anchieta ou solicite orcamento pelo WhatsApp." },
  { pergunta: "Onde comprar pneu Michelin no Portão?", resposta: "No bairro Portao em Curitiba, a Carplus Pneus e Oficina Mecânica e a melhor opcao para pneus Michelin. Temos toda a linha: Primacy, Pilot Sport, CrossClimate e Agilis. Somos especializados em atendimento personalizado, com montagem e balanceamento inclusos. Estamos na Rua Padre Anchieta, 2285 - facil acesso de toda regiao sul de Curitiba." },
  { pergunta: "Pneu Goodyear é bom?", resposta: "Sim, Goodyear e uma das marcas mais tradicionais e confiaveis do mercado mundial. Pneus como EfficientGrip Performance, Eagle F1 e Wrangler oferecem excelente qualidade, durabilidade e desempenho. A marca investe pesado em tecnologia e tem otima reputacao entre consumidores. Na Carplus, trabalhamos com toda a linha Goodyear e podemos indicar o modelo ideal para seu veiculo." },
  { pergunta: "Pneu Continental aguenta rodovias?", resposta: "Pneus Continental sao excelentes para uso rodoviario. A marca alema e reconhecida mundialmente por sua tecnologia de ponta e desempenho superior. Linhas como ContiPowerContact, PremiumContact e CrossContact oferecem otima estabilidade em alta velocidade, frenagem eficiente e durabilidade. Na Carplus, temos pneus Continental para todos os tipos de veiculo." },
  { pergunta: "Pneu Yokohama vale a pena?", resposta: "Yokohama e uma marca japonesa de alta qualidade com excelente custo-beneficio. Pneus como BluEarth e Geolandar oferecem tecnologia avancada, durabilidade e bom desempenho. E uma otima opcao para quem busca qualidade sem pagar o preco das marcas premium europeias. A Carplus trabalha com pneus Yokohama e pode ajudar na escolha do modelo certo." },
  { pergunta: "Qual pneu para SUV em Curitiba?", resposta: "Para SUVs em Curitiba, recomendamos pneus que combinem conforto urbano com capacidade para eventualidades. Pirelli Scorpion, Michelin Latitude, Continental CrossContact e Bridgestone Dueler sao excelentes opcoes. Para quem usa o SUV em estradas de terra ou trilhas, linhas A/T (All-Terrain) como Pirelli Scorpion ATR oferecem mais versatilidade. Na Carplus, temos especialistas em pneus para SUVs." },
  { pergunta: "Qual pneu para chuva?", resposta: "Para melhor desempenho na chuva, escolha pneus com sulcos profundos e boa capacidade de drenagem. Michelin Primacy 4, Pirelli Cinturato P7, Continental PremiumContact e Goodyear EfficientGrip sao excelentes em piso molhado. Esses pneus tem canais que expulsam a agua rapidamente, reduzindo o risco de aquaplanagem. Na Carplus, indicamos o pneu ideal para o clima de Curitiba." },
  { pergunta: "Pneu com bolha pode estourar?", resposta: "Sim, pneu com bolha pode estourar a qualquer momento e e extremamente perigoso. A bolha indica que a estrutura interna do pneu foi danificada, geralmente por impacto em buracos ou meios-fios. Nao existe reparo para pneu com bolha - a unica solucao e a substituicao imediata. Na Carplus, fazemos avaliacao gratuita e temos pneus para pronta entrega." },
  { pergunta: "Quanto custa trocar os 4 pneus?", resposta: "O custo para trocar os 4 pneus inclui o valor dos pneus mais servicos de montagem, balanceamento e alinhamento. Na Carplus, a montagem e balanceamento estao inclusos no preco dos pneus. O alinhamento 3D custa a partir de R$ 120. O valor total varia conforme a marca e medida dos pneus - faca um orcamento sem compromisso pelo nosso WhatsApp." },
  { pergunta: "A Carplus tem pneu com montagem inclusa?", resposta: "Sim, na Carplus Pneus e Oficina Mecânica a montagem e balanceamento estao sempre inclusos na compra de pneus novos. Utilizamos equipamentos de ultima geracao para garantir um servico perfeito. Voce so paga pelo alinhamento se desejar, mas recomendamos fazer junto para garantir a durabilidade dos pneus novos e a seguranca do veiculo." },
  { pergunta: "Carplus trabalha com pneu Pirelli original?", resposta: "Sim, a Carplus e revendedor autorizado Pirelli e trabalha exclusivamente com pneus originais de fabrica. Todos os nossos pneus vem com nota fiscal e garantia do fabricante. Nao trabalhamos com pneus recondicionados, remold ou de procedencia duvidosa. Sua seguranca e nossa prioridade." },
  { pergunta: "Qual pneu para Fiat Mobi?", resposta: "O Fiat Mobi usa pneus na medida 175/65R14 ou 175/70R14. Recomendamos pneus como Pirelli Cinturato P1, Goodyear Kelly Edge Touring, Continental ContiPowerContact ou Firestone F-700. Sao opcoes com bom custo-beneficio, confortaveis e duraveis para uso urbano. Na Carplus, temos essas medidas em estoque com pronta entrega." },
  { pergunta: "Qual pneu para Honda HRV?", resposta: "O Honda HR-V usa pneus 215/55R17 ou 215/50R18 dependendo da versao. Recomendamos Michelin Primacy 4, Pirelli Scorpion Verde, Continental CrossContact ou Bridgestone Turanza. Esses pneus oferecem conforto, baixo ruido e bom desempenho tanto no asfalto quanto em chuva. A Carplus tem todas essas opcoes." },
  { pergunta: "Qual pneu para Toyota Corolla?", resposta: "O Toyota Corolla usa pneus 205/55R16 ou 225/45R17 nas versoes mais equipadas. Pneus como Michelin Primacy 4, Pirelli Cinturato P7, Continental PremiumContact e Bridgestone Turanza T005 sao ideais. Oferecem conforto, silencio e excelente durabilidade para uso misto cidade/estrada. Na Carplus, temos diversas opcoes para Corolla." },
  { pergunta: "Qual pneu para Chevrolet Tracker?", resposta: "O Chevrolet Tracker usa pneus 215/55R17 ou 215/50R18. Recomendamos Pirelli Scorpion Verde, Michelin Latitude Sport, Continental CrossContact e Bridgestone Dueler H/P Sport. Sao pneus que combinam o conforto de um SUV urbano com capacidade para estradas. A Carplus tem especialistas em pneus para SUVs." },
  { pergunta: "Qual pneu para Jeep Compass?", resposta: "O Jeep Compass usa pneus 215/65R17, 225/55R18 ou 235/50R19 dependendo da versao. Para uso urbano, Pirelli Scorpion Verde e Continental CrossContact sao otimos. Para quem busca mais versatilidade off-road, Pirelli Scorpion ATR ou Bridgestone Dueler A/T sao recomendados. A Carplus tem todas as opcoes." },
  { pergunta: "Qual pneu para VW Polo?", resposta: "O VW Polo usa pneus 185/65R15 ou 195/55R16 nas versoes mais equipadas. Pirelli Cinturato P1, Goodyear EfficientGrip, Continental ContiPowerContact e Michelin Energy Saver sao excelentes escolhas. Oferecem economia de combustivel, conforto e boa durabilidade. Na Carplus, temos essas medidas com os melhores precos." },
  { pergunta: "Qual pneu para Ford Ka?", resposta: "O Ford Ka usa pneus 185/60R15 ou 195/55R15. Recomendamos Pirelli Cinturato P1, Goodyear Kelly Edge Touring, Continental ContiPowerContact ou Firestone F-700. Sao pneus com bom custo-beneficio para uso urbano. Na Carplus, voce encontra essas medidas com montagem inclusa." },
  { pergunta: "Qual pneu para Hyundai Creta?", resposta: "O Hyundai Creta usa pneus 205/65R16 ou 215/55R17. Pirelli Scorpion Verde, Michelin Latitude Tour, Continental CrossContact e Bridgestone Dueler H/L sao otimas opcoes. Combinam conforto urbano com capacidade para viagens. A Carplus tem pneus para Creta com pronta entrega." },
  { pergunta: "Qual pneu para picape?", resposta: "Picapes como Hilux, Ranger, S10 e Amarok geralmente usam pneus 265/65R17, 255/70R16 ou 265/70R16. Para uso misto, recomendamos Pirelli Scorpion ATR, Bridgestone Dueler A/T, Goodyear Wrangler ou Continental CrossContact. Para asfalto, linhas H/T oferecem mais conforto. A Carplus e especialista em pneus para picapes." },
  { pergunta: "Pneu muda o consumo de combustível?", resposta: "Sim, o pneu influencia diretamente no consumo de combustivel. Pneus com baixa resistencia ao rolamento podem economizar ate 5% de combustivel. Alem disso, pneus descalibrados aumentam o consumo em ate 3%. Manter os pneus calibrados e escolher modelos economicos como Michelin Energy Saver ou Pirelli Cinturato faz diferenca no bolso." },
  { pergunta: "Pneu mais largo melhora a frenagem?", resposta: "Pneus mais largos aumentam a area de contato com o solo, o que pode melhorar a tracao e frenagem em piso seco. Porem, em piso molhado o efeito pode ser contrario, aumentando o risco de aquaplanagem. Alem disso, pneus mais largos aumentam o consumo de combustivel e podem afetar a direcao. Sempre use a medida recomendada pelo fabricante do veiculo." },
  { pergunta: "O que é índice de carga do pneu?", resposta: "O indice de carga indica o peso maximo que o pneu suporta. E representado por um numero de 2 digitos na lateral do pneu. Por exemplo, indice 91 significa 615kg por pneu. E fundamental usar pneus com indice igual ou superior ao original do veiculo para garantir seguranca. Na Carplus, verificamos a compatibilidade antes de qualquer instalacao." },
  { pergunta: "O que é índice de velocidade do pneu?", resposta: "O indice de velocidade indica a velocidade maxima que o pneu suporta com seguranca. E representado por uma letra na lateral. Por exemplo: T=190km/h, H=210km/h, V=240km/h, W=270km/h. Nunca use pneus com indice de velocidade inferior ao original do veiculo. Na Carplus, garantimos a compatibilidade correta." },
  { pergunta: "Pneu novo deixa o carro mais seguro?", resposta: "Sim, pneus novos melhoram significativamente a seguranca do veiculo. Oferecem melhor tracao, frenagem mais curta, menor risco de aquaplanagem e comportamento mais previsivel em curvas. Pneus gastos podem aumentar a distancia de frenagem em ate 50% em piso molhado. Investir em pneus novos e investir em seguranca para voce e sua familia." },
  { pergunta: "Quanto tempo leva para montar 4 pneus?", resposta: "Na Carplus, a montagem de 4 pneus com balanceamento leva em media 40 minutos a 1 hora. Se incluir alinhamento 3D, o tempo total fica entre 1 hora e 1 hora e meia. Temos uma sala de espera confortavel com Wi-Fi e cafe. Tambem oferecemos agendamento para evitar espera." },
  { pergunta: "A Carplus faz descarte ecológico dos pneus velhos?", resposta: "Sim, a Carplus realiza o descarte ecologico de todos os pneus usados. Somos parceiros de empresas de reciclagem certificadas que transformam os pneus em pavimentacao asfaltica, combustivel para cimenteiras e outros produtos. O descarte correto e uma responsabilidade ambiental que levamos a serio." },
  { pergunta: "Tem como parcelar pneu na Carplus?", resposta: "Sim, na Carplus voce pode parcelar seus pneus em ate 10x sem juros no cartao de credito. Aceitamos todas as bandeiras: Visa, Mastercard, Elo, American Express, Hipercard e Diners. Tambem aceitamos Pix e dinheiro com condicoes especiais. Faca um orcamento e conheca nossas condicoes." },
  { pergunta: "A Carplus aceita cartão de crédito?", resposta: "Sim, aceitamos todas as principais bandeiras de cartao de credito: Visa, Mastercard, Elo, American Express, Hipercard e Diners. Parcelamos em ate 10x sem juros. Tambem aceitamos cartao de debito, Pix, transferencia bancaria e dinheiro." },
  { pergunta: "Posso levar o pneu e pagar só a mão de obra?", resposta: "Sim, a Carplus faz montagem e balanceamento de pneus que voce ja possui. O valor do servico de montagem e balanceamento por pneu e de R$ 40. Porem, para garantia do servico, e importante que os pneus estejam em boas condicoes. Avaliamos gratuitamente antes da montagem." },
  { pergunta: "Qual a diferença entre pneu 185 e 195?", resposta: "A diferenca entre pneu 185 e 195 e a largura em milimetros. O pneu 195 e 10mm mais largo que o 185. Um pneu mais largo oferece mais area de contato e pode melhorar a tracao em piso seco, mas consome um pouco mais de combustivel. Sempre verifique se o seu veiculo aceita a medida alternativa antes de trocar." },
  { pergunta: "Pneu estepe de diferente tamanho pode?", resposta: "O estepe temporario (step) e menor propositalmente para economizar espaco e peso. Ele deve ser usado apenas em emergencias, por no maximo 80km e a velocidade maxima de 80km/h. Se o estepe for igual aos demais, pode usar normalmente. Nunca rode por longos periodos com um pneu de tamanho diferente nos demais - isso causa desgaste irregular e pode danificar o diferencial." },
  { pergunta: "Quando devo trocar o estepe?", resposta: "O estepe deve ser trocado quando apresentar sinais de ressecamento, trincas na borracha ou quando tiver mais de 6 anos de fabricacao, mesmo sem uso. Verifique a data de fabricacao pelo codigo DOT na lateral. Mantenha o estepe sempre calibrado na pressao indicada (geralmente 60 PSI para estepe temporario). Faca verificacao periodica junto com os demais pneus." },
  { pergunta: "Pneu novo precisa rodar devagar?", resposta: "Sim, e recomendado fazer um amaciamento nos primeiros 500km com pneus novos. Evite aceleracoes e frenagens bruscas neste periodo. Os pneus novos tem um agente desmoldante na superficie que precisa ser removido com o uso para atingir a tracao maxima. Apos esse periodo, o pneu ja estara em sua performance ideal." },
  { pergunta: "O que é o TWI no pneu?", resposta: "TWI significa Tread Wear Indicator (Indicador de Desgaste da Banda de Rodagem). Sao pequenas barras transversais localizadas no fundo dos sulcos principais do pneu. Quando a banda de rodagem estiver nivelada com o TWI (1,6mm de profundidade), o pneu deve ser substituido imediatamente. As letras TWI na lateral indicam onde estao esses indicadores." },
  { pergunta: "Tem loja de pneus perto do Portão em Curitiba?", resposta: "Sim, a Carplus Pneus e Oficina Mecânica esta localizada no coracao do bairro Portao, na Rua Padre Anchieta, 2285. Somos a loja de pneus mais completa da regiao, com estoque das principais marcas e servicos de montagem, balanceamento e alinhamento 3D. Facil acesso de toda a zona sul de Curitiba." },
  { pergunta: "Carplus entrega pneu em domicílio?", resposta: "Atualmente a Carplus nao oferece entrega em domicilio, pois o pneu precisa ser montado e balanceado em nossos equipamentos profissionais. Porem, temos facil estacionamento e o servico completo e realizado em menos de 1 hora. Voce pode aguardar em nossa sala de espera com Wi-Fi e cafe." },
  { pergunta: "Tem pneu para moto na Carplus?", resposta: "Atualmente a Carplus e especializada em pneus para automoveis, SUVs, picapes e utilitarios. Nao trabalhamos com pneus para motos. Para pneus de moto, recomendamos procurar lojas especializadas em motocicletas que possuem equipamentos apropriados para montagem." },
  { pergunta: "Qual pneu para carro de passeio mais econômico?", resposta: "Para economia de combustivel em carros de passeio, recomendamos Michelin Energy Saver, Pirelli Cinturato P1, Continental ContiPowerContact e Bridgestone Ecopia. Esses pneus tem baixa resistencia ao rolamento e podem economizar ate 5% de combustivel. Na Carplus, temos diversas opcoes economicas para seu veiculo." },
  { pergunta: "Pneu com mais de 5 anos ainda é seguro?", resposta: "Pneus com mais de 5 anos devem ser avaliados com atencao. A borracha envelhece mesmo sem uso, perdendo elasticidade e aderencia. Sinais como ressecamento, trincas e endurecimento indicam necessidade de troca. Pneus com mais de 10 anos devem ser substituidos independentemente do estado visual. Na Carplus, avaliamos gratuitamente a condicao dos seus pneus." },
  { pergunta: "O que faz o pneu vibrar em alta velocidade?", resposta: "Vibracao em alta velocidade geralmente indica problemas de balanceamento. Outras causas podem ser pneus com deformacao interna, rodas amassadas ou empenadas, ou problemas na suspensao. Na Carplus, fazemos diagnostico completo para identificar a causa e resolver o problema com seguranca." },
  { pergunta: "Pneu faz barulho quando está com problema?", resposta: "Sim, pneus podem fazer barulhos que indicam problemas. Ruido excessivo de rodagem pode indicar desgaste irregular ou pneu de ma qualidade. Batidas ritmicas podem indicar deformacao ou bolha. Chiado em curvas pode ser pneu careca. Na Carplus, avaliamos gratuitamente qualquer ruido anormal nos seus pneus." },
  { pergunta: "O que causa desgaste irregular nos pneus?", resposta: "Desgaste irregular pode ser causado por desalinhamento, balanceamento incorreto, pressao inadequada, problemas na suspensao ou conducao agressiva. Desgaste nas bordas indica pouca pressao ou problema de cambagem. Desgaste no centro indica excesso de pressao. Na Carplus, identificamos a causa e corrigimos para prolongar a vida dos pneus." },
  { pergunta: "Pneu puxa para um lado — o que fazer?", resposta: "Quando o carro puxa para um lado, as causas mais comuns sao desalinhamento, diferenca de pressao entre os pneus, desgaste desigual ou problemas na suspensao. Primeiro, verifique se todos os pneus estao com a mesma pressao. Se persistir, faca um alinhamento 3D na Carplus. Se ainda assim continuar, pode haver problema mecanico que precisa ser diagnosticado." },

  // Coluna 2 - Alinhamento e Servicos
  { pergunta: "O que é alinhamento 3D?", resposta: "Alinhamento 3D e o metodo mais moderno e preciso de alinhamento de direcao. Utiliza cameras e sensores que medem todos os angulos das rodas simultaneamente, incluindo caster, camber e convergencia. A tecnologia 3D permite ajustes milimetricos impossiveis no alinhamento convencional. Na Carplus, utilizamos equipamento Hunter de ultima geracao." },
  { pergunta: "Qual a diferença entre alinhamento 2D e 3D?", resposta: "O alinhamento 2D mede os angulos em duas dimensoes, enquanto o 3D mede em tres dimensoes com maior precisao. O 3D captura mais informacoes, detecta problemas que o 2D nao consegue e permite ajustes mais finos. O resultado e maior durabilidade dos pneus, melhor dirigibilidade e economia de combustivel. Na Carplus, so trabalhamos com alinhamento 3D." },
  { pergunta: "Com que frequência fazer alinhamento?", resposta: "Recomendamos fazer alinhamento a cada 10.000 km ou quando trocar os pneus. Tambem e necessario apos bater em buracos grandes, meios-fios ou qualquer impacto na suspensao. Sinais como volante torto, carro puxando para um lado ou desgaste irregular nos pneus indicam necessidade de alinhamento imediato." },
  { pergunta: "Alinhamento resolve pneu que puxa?", resposta: "Na maioria dos casos, sim. O desalinhamento e a principal causa de o carro puxar para um lado. Porem, outras causas podem ser diferenca de pressao entre os pneus, desgaste desigual ou problemas na suspensao. Na Carplus, fazemos diagnostico completo antes do alinhamento para garantir que o problema seja resolvido definitivamente." },
  { pergunta: "Quanto custa alinhamento 3D em Curitiba?", resposta: "Na Carplus Pneus e Oficina Mecânica, o alinhamento 3D completo custa a partir de R$ 120. Utilizamos equipamento Hunter de ultima geracao que garante precisao maxima. O servico inclui medicao de todos os angulos, ajustes necessarios e relatorio impresso. Fazemos orcamento sem compromisso." },
  { pergunta: "A Carplus faz alinhamento 3D?", resposta: "Sim, a Carplus possui equipamento de alinhamento 3D Hunter, lider mundial em tecnologia de alinhamento. Nossa equipe e treinada para realizar ajustes precisos em todos os tipos de veiculos, desde carros populares ate SUVs e picapes. O servico e rapido, leva cerca de 30 minutos." },
  { pergunta: "O que é balanceamento de pneus?", resposta: "Balanceamento e o processo de equilibrar o peso do conjunto pneu/roda para que gire sem vibracoes. Pequenas diferencas de peso causam trepidacao no volante e desgaste irregular. O balanceamento usa contrapesos de chumbo ou zinco para compensar essas diferencas. Na Carplus, utilizamos balanceadora computadorizada de alta precisao." },
  { pergunta: "Balanceamento precisa ser feito junto com alinhamento?", resposta: "Sao servicos diferentes mas complementares. Balanceamento elimina vibracoes e deve ser feito sempre que trocar ou desmontar os pneus. Alinhamento corrige os angulos das rodas e deve ser feito periodicamente ou apos impactos. O ideal e fazer os dois juntos quando trocar pneus, mas cada um tem sua indicacao especifica." },
  { pergunta: "Carro tremendo na estrada precisa de balanceamento?", resposta: "Vibracao em alta velocidade geralmente indica necessidade de balanceamento. Se a trepidacao ocorre principalmente entre 80-120 km/h e se sente no volante, balanceamento e a primeira suspeita. Porem, pode ser tambem pneu com deformacao, roda amassada ou problema na suspensao. Na Carplus, diagnosticamos a causa correta." },
  { pergunta: "Quanto custa balanceamento em Curitiba?", resposta: "Na Carplus, o balanceamento custa R$ 25 por roda. Na compra de pneus novos, o balanceamento esta incluso no preco. Utilizamos balanceadora computadorizada que garante precisao maxima. O servico e rapido, leva cerca de 10 minutos por roda." },
  { pergunta: "O que é geometria de suspensão?", resposta: "Geometria de suspensao e o conjunto de angulos que determinam a posicao das rodas em relacao ao solo e ao veiculo. Inclui caster, camber e convergencia. Esses angulos afetam a dirigibilidade, estabilidade, desgaste dos pneus e comportamento em curvas. O alinhamento 3D mede e ajusta esses angulos para os valores especificados pelo fabricante." },
  { pergunta: "Como saber se preciso de alinhamento?", resposta: "Sinais de que voce precisa de alinhamento incluem: volante torto com o carro andando reto, carro puxando para um lado, desgaste irregular nos pneus, dificuldade para manter o carro na faixa. Apos bater em buracos ou meios-fios, tambem e recomendado verificar. Na Carplus, fazemos verificacao gratuita." },
  { pergunta: "Alinhamento torto desgasta pneu?", resposta: "Sim, o desalinhamento e uma das principais causas de desgaste prematuro dos pneus. Angulos incorretos fazem o pneu raspar no asfalto em vez de rolar livremente. Isso pode reduzir a vida util em ate 50%. Alem do desgaste, o desalinhamento aumenta o consumo de combustivel e compromete a seguranca." },
  { pergunta: "Alinhamento 3D é mais preciso?", resposta: "Sim, o alinhamento 3D e significativamente mais preciso que metodos anteriores. As cameras capturam a posicao real das rodas em tres dimensoes, detectando problemas impossiveis de ver a olho nu. A precisao chega a decimos de grau, garantindo ajuste perfeito. Na Carplus, utilizamos equipamento Hunter 3D de ultima geracao." },
  { pergunta: "Meu carro está andando torto, o que pode ser?", resposta: "Carro andando torto pode ser causado por desalinhamento, diferenca de pressao nos pneus, desgaste desigual, problemas na suspensao ou ate defeito no pneu. Primeiro verifique a pressao de todos os pneus. Se estiver correta, faca um alinhamento 3D. Se persistir, pode haver componente da suspensao com problema. Na Carplus, diagnosticamos a causa exata." },
  { pergunta: "O que é convergência e divergência nas rodas?", resposta: "Convergencia e divergencia referem-se ao angulo das rodas vistas de cima. Convergencia e quando as rodas apontam para dentro (mais proximas na frente). Divergencia e quando apontam para fora. Cada veiculo tem especificacao propria. O ajuste incorreto causa desgaste irregular e instabilidade. O alinhamento 3D ajusta esses angulos com precisao." },
  { pergunta: "Quanto tempo leva para fazer alinhamento?", resposta: "Na Carplus, o alinhamento 3D completo leva em media 30 a 45 minutos. O tempo pode variar se houver necessidade de ajustes mecanicos na suspensao. Se combinar com balanceamento e/ou montagem de pneus, o tempo total fica entre 1 hora e 1 hora e meia." },
  { pergunta: "Posso fazer alinhamento sem trocar os pneus?", resposta: "Sim, o alinhamento pode e deve ser feito independentemente da troca de pneus. E recomendado fazer alinhamento a cada 10.000 km ou sempre que perceber sintomas de desalinhamento. Mesmo com pneus em bom estado, o alinhamento garante que eles durem mais e que o veiculo tenha melhor dirigibilidade." },
  { pergunta: "Quando bater o carro precisa refazer o alinhamento?", resposta: "Sim, apos qualquer colisao, mesmo que pequena, e recomendado verificar o alinhamento e a suspensao. Impactos podem deslocar componentes e alterar os angulos das rodas. Na Carplus, fazemos verificacao completa apos batidas para garantir que tudo esteja dentro das especificacoes de seguranca." },
  { pergunta: "Alinhamento resolve vibração no volante?", resposta: "Nao necessariamente. Vibracao no volante geralmente e causada por desbalanceamento dos pneus ou rodas, nao por desalinhamento. O alinhamento corrige a direcao das rodas, enquanto o balanceamento corrige o equilibrio de peso. Na Carplus, diagnosticamos corretamente a causa da vibracao antes de indicar o servico." },
  { pergunta: "O que causa vibração no volante em alta velocidade?", resposta: "As principais causas sao: desbalanceamento dos pneus, rodas amassadas ou empenadas, pneus com deformacao interna, problemas na suspensao dianteira, ou disco de freio empenado (se vibrar ao frear). Na Carplus, fazemos diagnostico completo para identificar a causa exata e resolver o problema." },
  { pergunta: "Conserto de roda amassada tem na Carplus?", resposta: "Sim, a Carplus realiza conserto de rodas amassadas, tortas ou empenadas. Utilizamos equipamentos especializados para recuperar a geometria original da roda sem comprometer sua resistencia. O servico e mais economico que comprar uma roda nova e mantem o conjunto original do veiculo." },
  { pergunta: "A Carplus faz reparo em roda de liga leve?", resposta: "Sim, temos equipamentos e tecnicos especializados em reparo de rodas de liga leve. Corrigimos amassados, empenamentos, trincas superficiais e arranhoes. Apos o reparo, a roda passa por verificacao de balanceamento e teste de estanqueidade. O resultado e uma roda como nova." },
  { pergunta: "Quanto custa consertar uma roda torta?", resposta: "O custo para consertar uma roda torta ou amassada na Carplus varia de R$ 80 a R$ 200 dependendo do tamanho do dano e do tipo de roda. E significativamente mais economico que comprar uma roda nova, que pode custar de R$ 500 a R$ 2.000. Fazemos orcamento gratuito." },
  { pergunta: "Roda trincada tem conserto?", resposta: "Depende do tipo e localizacao da trinca. Trincas superficiais em areas de baixo estresse podem ser reparadas por solda especializada. Porem, trincas profundas ou em areas criticas como a borda de encaixe do pneu comprometem a seguranca e exigem substituicao da roda. Na Carplus, avaliamos e indicamos a melhor solucao." },
  { pergunta: "Pintura de roda tem na Carplus?", resposta: "Atualmente a Carplus nao realiza pintura de rodas. Nosso foco e em servicos mecanicos: conserto de rodas amassadas, pneus, alinhamento, balanceamento e manutencao geral. Para pintura de rodas, recomendamos oficinas especializadas em funilaria e pintura automotiva." },
  { pergunta: "O que é scanner automotivo?", resposta: "Scanner automotivo e um equipamento de diagnostico que se conecta ao computador de bordo do veiculo (ECU) para ler codigos de falha, parametros do motor e outros sistemas eletronicos. Permite identificar problemas que acendem luzes no painel, falhas intermitentes e verificar o funcionamento de sensores e atuadores. Na Carplus, temos scanner profissional multimarcas." },
  { pergunta: "A luz do painel acendeu, o que fazer?", resposta: "Quando uma luz do painel acende, o primeiro passo e identificar qual luz e. Luzes vermelhas indicam problemas graves que exigem parada imediata. Luzes amarelas indicam atencao, mas permitem continuar ate uma oficina. Na Carplus, fazemos leitura com scanner para identificar o problema exato e indicar a solucao." },
  { pergunta: "Scanner automotivo apaga a luz do motor?", resposta: "O scanner pode apagar a luz do motor (luz de injecao) apos resolver o problema que a causou. Porem, se a falha persistir, a luz retorna. Apenas apagar a luz sem corrigir o defeito e inutil e perigoso. Na Carplus, primeiro diagnosticamos a causa, corrigimos o problema e depois resetamos o codigo." },
  { pergunta: "Quanto custa scanner automotivo em Curitiba?", resposta: "Na Carplus, o servico de diagnostico por scanner custa R$ 80. Inclui leitura de todos os sistemas do veiculo, identificacao de codigos de falha e orientacao sobre os reparos necessarios. Se o servico de reparo for feito conosco, o valor do scanner pode ser descontado." },
  { pergunta: "O que a luz amarela do painel significa?", resposta: "Luzes amarelas ou laranjas indicam atencao - algo precisa ser verificado, mas nao e emergencia imediata. Exemplos: luz de injecao (motor), ABS, airbag, pressao dos pneus, nivel de combustivel baixo. Voce pode continuar dirigindo ate uma oficina, mas nao ignore. Na Carplus, diagnosticamos qualquer luz de advertencia." },
  { pergunta: "O que a luz vermelha do motor significa?", resposta: "Luzes vermelhas indicam problemas graves que exigem atencao imediata. Se for a luz de temperatura ou pressao do oleo, pare o veiculo imediatamente para evitar danos ao motor. A luz de bateria indica problema no sistema de carga. Em caso de duvida, pare em local seguro e chame assistencia. Na Carplus, atendemos emergencias." },
  { pergunta: "Scanner detecta todos os problemas do carro?", resposta: "O scanner detecta problemas registrados nos modulos eletronicos do veiculo, mas nao substitui a avaliacao mecanica. Desgaste de pecas, folgas, vazamentos e problemas mecanicos em geral precisam de inspecao visual e testes. Na Carplus, combinamos diagnostico por scanner com avaliacao mecanica completa." },
  { pergunta: "Onde fazer diagnóstico automotivo no Portão?", resposta: "A Carplus Pneus e Oficina Mecânica no bairro Portao oferece diagnostico automotivo completo com scanner profissional multimarcas. Estamos na Rua Padre Anchieta, 2285, com facil estacionamento. Nossa equipe identifica o problema e indica a solucao mais economica e segura para seu veiculo." },
  { pergunta: "Scanner resolve o problema ou só aponta?", resposta: "O scanner e uma ferramenta de diagnostico - ele aponta o problema, mas nao resolve. E como um exame medico: indica o que esta errado para que o mecanico possa corrigir. Na Carplus, apos o diagnostico por scanner, nossa equipe realiza os reparos necessarios com pecas de qualidade e garantia." },
  { pergunta: "O que é OBD2?", resposta: "OBD2 (On-Board Diagnostics 2) e o sistema padronizado de diagnostico de bordo usado em todos os veiculos fabricados a partir de 1996. Atraves da porta OBD2 (geralmente embaixo do volante), o scanner se conecta ao computador do veiculo para ler informacoes e codigos de falha. Na Carplus, temos equipamento compativel com todos os veiculos OBD2." },
  { pergunta: "Posso usar scanner em qualquer carro?", resposta: "Scanners OBD2 funcionam em carros fabricados a partir de 1996. Porem, para diagnostico completo, scanners profissionais multimarcas sao necessarios, pois cada fabricante tem sistemas proprietarios alem do OBD2 basico. Na Carplus, temos scanner que acessa todos os modulos de qualquer marca." },
  { pergunta: "Quanto tempo leva um diagnóstico por scanner?", resposta: "O diagnostico por scanner na Carplus leva de 15 a 30 minutos. Inclui leitura de todos os sistemas do veiculo, verificacao de codigos de falha e parametros em tempo real. Se necessario investigacao mais profunda, pode levar um pouco mais. Voce pode aguardar na nossa sala de espera." },
  { pergunta: "A Carplus tem equipamento de diagnóstico eletrônico?", resposta: "Sim, a Carplus possui scanner automotivo profissional multimarcas de ultima geracao. Nosso equipamento acessa todos os sistemas eletronicos do veiculo: motor, transmissao, ABS, airbag, ar condicionado e mais. Tambem realizamos atualizacoes e programacoes quando necessario." },
  { pergunta: "Scanner funciona em carro flex?", resposta: "Sim, o scanner funciona perfeitamente em veiculos flex. O sistema de injecao eletronica de carros flex e monitorado pelo mesmo tipo de modulo (ECU) que carros a gasolina ou alcool puros. Na Carplus, diagnosticamos qualquer veiculo flex de todas as marcas." },
  { pergunta: "O que é código de falha no carro?", resposta: "Codigos de falha sao registros que o computador do veiculo grava quando detecta alguma anomalia. Seguem um padrao alfanumerico (ex: P0300 = falha de ignicao). O scanner le esses codigos e os traduz em informacoes que o mecanico usa para diagnosticar o problema. Na Carplus, interpretamos os codigos e indicamos a solucao." },
  { pergunta: "Troca de óleo pode apagar luz de revisão?", resposta: "Sim, apos a troca de oleo e necessario resetar o indicador de revisao no painel. Isso e feito atraves do scanner ou por um procedimento manual especifico de cada veiculo. Na Carplus, o reset do indicador de revisao esta incluso no servico de troca de oleo." },
  { pergunta: "A Carplus faz manutenção preventiva?", resposta: "Sim, a Carplus realiza manutencao preventiva completa. Inclui troca de oleo e filtros, verificacao de freios, suspensao, direcao, sistema de arrefecimento, correias, velas, cabos e muito mais. Seguimos o manual do fabricante ou elaboramos um plano personalizado para seu veiculo." },
  { pergunta: "O que entra em uma revisão completa?", resposta: "Uma revisao completa na Carplus inclui: troca de oleo e filtros (oleo, ar, combustivel, cabine), verificacao de freios (pastilhas, discos, fluido), inspecao da suspensao, verificacao de correias e mangueiras, nivel de fluidos, condicao dos pneus, sistema de arrefecimento, bateria e diagnostico por scanner. Fazemos check-list detalhado." },
  { pergunta: "Com que quilometragem fazer revisão?", resposta: "A maioria dos fabricantes recomenda revisoes a cada 10.000 km ou 12 meses, o que ocorrer primeiro. Veiculos mais antigos ou com uso mais severo podem precisar de intervalos menores. O manual do proprietario tem as recomendacoes especificas. Na Carplus, orientamos o intervalo ideal para seu veiculo e tipo de uso." },
  { pergunta: "Revisão no Portão tem na Carplus?", resposta: "Sim, a Carplus Pneus e Oficina Mecânica no bairro Portao oferece servico completo de revisao automotiva. Estamos na Rua Padre Anchieta, 2285, com facil acesso e estacionamento. Realizamos desde revisoes basicas ate revisoes completas seguindo as especificacoes do fabricante." },
  { pergunta: "Quanto custa revisão completa em Curitiba?", resposta: "O valor da revisao completa na Carplus varia conforme o veiculo e os itens a serem trocados. Uma revisao basica com troca de oleo e filtros custa a partir de R$ 250. Revisoes mais completas com verificacao de todos os sistemas ficam entre R$ 400 e R$ 800. Fazemos orcamento detalhado sem compromisso." },
  { pergunta: "O que é revisão de 10.000 km?", resposta: "A revisao de 10.000 km e a manutencao periodica recomendada pela maioria dos fabricantes. Geralmente inclui troca de oleo e filtro de oleo, verificacao de niveis de fluidos, inspecao visual de componentes e reset do indicador de revisao. E a revisao mais basica e frequente do veiculo." },
  { pergunta: "A Carplus faz revisão de garantia?", resposta: "A Carplus realiza revisoes seguindo as especificacoes do fabricante, o que mantem a garantia do veiculo valida. Pela lei, voce nao e obrigado a fazer revisao na concessionaria para manter a garantia, desde que a oficina siga as recomendacoes do manual e use pecas de qualidade equivalente." },
  { pergunta: "Posso usar óleo alternativo na revisão?", resposta: "E possivel usar oleo de marca diferente da original desde que atenda as especificacoes do fabricante (viscosidade e normas API/ACEA). Oleos equivalentes de marcas como Mobil, Castrol, Shell e Petronas sao perfeitamente seguros e mantem a garantia. Na Carplus, usamos apenas oleos que atendem as especificacoes do seu veiculo." },
  { pergunta: "Revisão perde garantia se não for na concessionária?", resposta: "Nao. Pela legislacao brasileira (Codigo de Defesa do Consumidor), voce pode fazer revisoes em oficinas independentes sem perder a garantia, desde que sejam usadas pecas de qualidade equivalente e seguidas as especificacoes do fabricante. A Carplus atende esses requisitos e fornece nota fiscal detalhada." },
  { pergunta: "Quanto custa troca de óleo em Curitiba?", resposta: "Na Carplus, a troca de oleo custa a partir de R$ 150, incluindo oleo e filtro de oleo. O valor varia conforme o tipo de oleo (mineral, semissintetico ou sintetico) e a quantidade necessaria para seu veiculo. Utilizamos oleos das melhores marcas com garantia de procedencia." },
  { pergunta: "Qual o melhor óleo para meu carro?", resposta: "O melhor oleo e o que atende as especificacoes do fabricante do seu veiculo (viscosidade e normas). Oleos sinteticos oferecem melhor protecao e durabilidade, especialmente para motores turbo e uso severo. Oleos semissinteticos sao um bom meio-termo. Na Carplus, indicamos o oleo ideal baseado nas especificacoes do seu carro." },
  { pergunta: "Posso misturar óleo 5W30 com 5W40?", resposta: "E possivel misturar oleos de mesma base (ambos sinteticos ou ambos minerais) em emergencias, mas nao e recomendado como pratica regular. A mistura pode alterar as propriedades do lubrificante. O ideal e sempre usar o mesmo oleo. Se precisar completar, use o mais proximo possivel das especificacoes originais." },
  { pergunta: "Óleo sintético é melhor que semissintético?", resposta: "Oleos sinteticos oferecem melhor protecao em temperaturas extremas, maior durabilidade, melhor limpeza do motor e menor consumo. Sao recomendados para motores turbo, uso esportivo e veiculos mais modernos. Oleos semissinteticos sao um bom equilibrio entre desempenho e custo para carros convencionais." },
  { pergunta: "Qual óleo para motor turbinado?", resposta: "Motores turbo exigem oleos sinteticos de alta qualidade que resistam a altas temperaturas e protejam o turbocompressor. Geralmente especificam oleos 0W-40, 5W-30 ou 5W-40 com normas especificas. Consulte o manual do veiculo. Na Carplus, usamos oleos apropriados para motores turbo de todas as marcas." },
  { pergunta: "Com que frequência trocar o óleo?", resposta: "A frequencia de troca de oleo depende do tipo de oleo e uso do veiculo. Oleo mineral: 5.000 a 7.000 km. Oleo semissintetico: 7.000 a 10.000 km. Oleo sintetico: 10.000 a 15.000 km. Uso severo (transito, curtas distancias) reduz esses intervalos. Consulte o manual do seu veiculo." },
  { pergunta: "Qual o óleo certo para meu carro?", resposta: "O oleo certo esta especificado no manual do proprietario do seu veiculo. La voce encontra a viscosidade (ex: 5W30) e as normas que o oleo deve atender (API, ACEA). Na Carplus, consultamos as especificacoes do fabricante para garantir o oleo correto para seu carro." },
  { pergunta: "Troca de óleo pode ser feita no Portão?", resposta: "Sim, a Carplus Pneus e Oficina Mecânica no bairro Portao realiza troca de oleo rapida e profissional. Utilizamos oleos das melhores marcas (Mobil, Castrol, Shell, Petronas) e filtros de qualidade. O servico leva cerca de 30 minutos e inclui verificacao de niveis de outros fluidos." },
  { pergunta: "A Carplus troca filtro junto com o óleo?", resposta: "Sim, na Carplus a troca do filtro de oleo esta sempre inclusa na troca de oleo. Tambem verificamos e, se necessario, trocamos os filtros de ar, combustivel e cabine. A troca do filtro de oleo e essencial para que o oleo novo circule limpo e proteja o motor adequadamente." },
  { pergunta: "Qual filtro de óleo usar?", resposta: "O filtro de oleo deve ter as mesmas especificacoes do filtro original do veiculo. Marcas como Mann, Fram, Tecfil, Mahle e Wega produzem filtros de qualidade equivalente ao original. Na Carplus, utilizamos apenas filtros que atendem as especificacoes do fabricante do seu veiculo." },
  { pergunta: "Posso trocar óleo a cada 10.000 km?", resposta: "Depende do tipo de oleo e do seu veiculo. Oleos sinteticos de alta qualidade geralmente permitem intervalos de 10.000 km. Porem, uso em transito pesado, curtas distancias frequentes ou clima muito quente podem exigir intervalos menores. Consulte o manual do veiculo e considere seu tipo de uso." },
  { pergunta: "O que acontece se eu não trocar o óleo no prazo?", resposta: "O oleo velho perde suas propriedades lubrificantes, acumula residuos e nao protege mais o motor adequadamente. Isso causa desgaste prematuro de componentes internos, aumento do consumo de combustivel, superaquecimento e, em casos extremos, travamento do motor. A troca de oleo e a manutencao mais importante do veiculo." },
  { pergunta: "Motor consome óleo demais — o que pode ser?", resposta: "Consumo excessivo de oleo pode indicar desgaste de aneis de pistao, guias de valvula, retentores ou junta do cabecote. Vazamentos externos tambem causam perda de oleo. Um consumo de ate 1 litro a cada 1.000 km pode ser considerado normal em alguns veiculos. Na Carplus, diagnosticamos a causa do consumo elevado." },

  // Coluna 3 - Freios, Suspensao, Ar Condicionado
  { pergunta: "O que é fluido de freio?", resposta: "Fluido de freio e um liquido hidraulico que transmite a forca do pedal para as pinças e cilindros de roda, acionando as pastilhas e lonas. E fundamental para o funcionamento do sistema de freios. Existem diferentes tipos (DOT3, DOT4, DOT5.1) com pontos de ebulicao variados. Na Carplus, usamos fluidos de alta qualidade." },
  { pergunta: "Com que frequência trocar o fluido de freio?", resposta: "Recomenda-se trocar o fluido de freio a cada 2 anos ou 40.000 km, o que ocorrer primeiro. O fluido absorve umidade do ar com o tempo, reduzindo seu ponto de ebulicao e eficiencia. Em Curitiba, com alta umidade, esse intervalo e ainda mais importante. Na Carplus, fazemos a troca com sangria completa do sistema." },
  { pergunta: "Fluido de freio absorve umidade com o tempo?", resposta: "Sim, o fluido de freio e higrioscopico, ou seja, absorve agua do ar. Com o tempo, a umidade acumulada reduz o ponto de ebulicao do fluido, podendo causar fading (perda de frenagem) em uso intenso. Por isso a troca periodica e essencial para sua seguranca." },
  { pergunta: "Qual o fluido de freio correto para meu carro?", resposta: "A maioria dos carros de passeio usa fluido DOT4 ou DOT3. Veiculos de alta performance podem exigir DOT5.1. O tipo correto esta indicado na tampa do reservatorio e no manual do veiculo. Nunca misture tipos diferentes. Na Carplus, utilizamos sempre o fluido especificado para seu veiculo." },
  { pergunta: "A Carplus faz troca de fluido de freio?", resposta: "Sim, a Carplus realiza troca de fluido de freio com sangria completa do sistema. Utilizamos equipamento especifico que remove todo o fluido antigo e substitui por fluido novo de alta qualidade. O servico inclui verificacao de vazamentos e teste do sistema de freios." },
  { pergunta: "Quanto custa troca de fluido de freio?", resposta: "Na Carplus, a troca de fluido de freio com sangria completa custa a partir de R$ 120. Inclui fluido de alta qualidade (DOT4 ou conforme especificacao do veiculo), sangria das 4 rodas e verificacao do sistema. E um investimento pequeno para sua seguranca." },
  { pergunta: "Pastilha de freio — quando trocar?", resposta: "As pastilhas de freio devem ser trocadas quando atingem 3mm de espessura do material de friccao. A maioria dos veiculos tem sensor que acende uma luz no painel. Sinais de desgaste incluem ruido ao frear, pedal mais longo ou vibracao. Na Carplus, verificamos as pastilhas gratuitamente." },
  { pergunta: "Disco de freio — quando trocar?", resposta: "Os discos de freio devem ser trocados quando atingem a espessura minima gravada neles ou quando apresentam sulcos profundos, trincas ou empenamento. Geralmente duram de 2 a 3 trocas de pastilhas. Na Carplus, medimos a espessura e avaliamos a condicao dos discos em toda manutencao de freios." },
  { pergunta: "Freio rangendo — o que pode ser?", resposta: "Rangido nos freios pode indicar pastilhas gastas, disco com sujeira ou oxidacao, pastilhas de baixa qualidade, ou falta de lubrificacao nas guias. Algumas pastilhas novas rangem levemente ate assentar. Se o ruido for continuo ou intenso, faca uma verificacao. Na Carplus, diagnosticamos e resolvemos ruidos nos freios." },
  { pergunta: "Freio fundo — o que significa?", resposta: "Pedal de freio muito fundo pode indicar: pastilhas gastas, ar no sistema hidraulico, vazamento de fluido, cilindro mestre com problema, ou regulagem das lonas traseiras. E uma situacao de risco que exige verificacao imediata. Na Carplus, diagnosticamos a causa e corrigimos com seguranca." },
  { pergunta: "Freio vibrando ao parar — o que fazer?", resposta: "Vibracao ao frear geralmente indica disco de freio empenado ou com espessura irregular. Pode acontecer por superaquecimento (frenagens bruscas repetidas) ou desgaste natural. A solucao pode ser retifica dos discos (se houver espessura suficiente) ou substituicao. Na Carplus, avaliamos e indicamos a melhor solucao." },
  { pergunta: "Quanto custa troca de pastilha de freio em Curitiba?", resposta: "Na Carplus, a troca de pastilhas de freio dianteiras custa a partir de R$ 180 (pecas + mao de obra). Pastilhas traseiras a partir de R$ 150. O valor varia conforme o veiculo e a qualidade das pastilhas escolhidas. Trabalhamos com marcas como Bosch, Cobreq, Fras-le e originais." },
  { pergunta: "Posso trocar pastilha e não trocar disco?", resposta: "Sim, se o disco estiver em boas condicoes (espessura adequada, sem sulcos profundos ou trincas). Porem, discos muito gastos ou danificados podem reduzir a vida util das pastilhas novas e comprometer a frenagem. Na Carplus, avaliamos os discos e recomendamos a troca apenas quando necessario." },
  { pergunta: "Freio ABS está com luz acesa — o que fazer?", resposta: "A luz do ABS acesa indica problema no sistema antitravamento. O freio convencional continua funcionando, mas sem a protecao do ABS. Pode ser sensor de roda sujo ou danificado, modulo ABS com falha, ou problema eletrico. Na Carplus, fazemos diagnostico por scanner para identificar a causa exata." },
  { pergunta: "A Carplus faz manutenção de freios?", resposta: "Sim, a Carplus realiza manutencao completa do sistema de freios: troca de pastilhas e discos, fluido de freio, lonas e tambores, cilindros de roda, pinças, flexiveis e muito mais. Temos equipamentos para diagnostico e reparo de sistemas ABS de todas as marcas." },
  { pergunta: "Manutenção de freio pode salvar vidas?", resposta: "Absolutamente. O sistema de freios e o item de seguranca mais importante do veiculo. Freios em mau estado aumentam drasticamente a distancia de parada e podem falhar completamente em situacoes de emergencia. A manutencao preventiva dos freios e um investimento na seguranca de voce e de todos." },
  { pergunta: "O que é correia dentada?", resposta: "A correia dentada e uma peca de borracha com dentes que sincroniza o movimento do virabrequim com o comando de valvulas. E essencial para o funcionamento do motor. Se romper, pode causar danos graves e caros ao motor. Por isso a troca preventiva no prazo correto e fundamental." },
  { pergunta: "Com que km trocar a correia dentada?", resposta: "O intervalo de troca da correia dentada varia de 40.000 a 100.000 km dependendo do veiculo. Alem da quilometragem, tambem ha prazo maximo em anos (geralmente 4-5 anos). Consulte o manual do proprietario. Na Carplus, verificamos o historico e orientamos o momento correto da troca." },
  { pergunta: "O que acontece se a correia dentada arrebentar?", resposta: "Em motores de interferencia (maioria dos carros atuais), se a correia arrebentar, as valvulas colidem com os pistoes, causando danos graves ao cabecote, valvulas e pistoes. O reparo pode custar de R$ 3.000 a mais de R$ 10.000. A troca preventiva evita esse prejuizo." },
  { pergunta: "A Carplus troca correia dentada?", resposta: "Sim, a Carplus realiza troca de correia dentada com kit completo (correia, tensor, polias e, quando recomendado, bomba dagua). Utilizamos pecas de qualidade (Gates, Continental, Dayco) e seguimos as especificacoes do fabricante. O servico inclui garantia." },
  { pergunta: "Quanto custa trocar correia dentada em Curitiba?", resposta: "O custo da troca de correia dentada na Carplus varia de R$ 600 a R$ 1.500 dependendo do veiculo e do kit utilizado. Inclui correia, tensor, polias e mao de obra. Se incluir bomba dagua, o valor aumenta. Fazemos orcamento detalhado sem compromisso." },
  { pergunta: "O que é kit de correia dentada?", resposta: "O kit de correia dentada inclui a correia nova, tensor (ou tensores), polias guias e, em alguns kits, a bomba dagua. Trocar apenas a correia sem os demais componentes e arriscado, pois tensor ou polia desgastados podem danificar a correia nova. Na Carplus, sempre usamos kit completo." },
  { pergunta: "A correia dentada precisa trocar a bomba d'água junto?", resposta: "E altamente recomendado trocar a bomba dagua junto com a correia dentada. A bomba tem vida util similar a correia, e se falhar depois, sera necessario abrir todo o motor novamente. Trocar junto economiza mao de obra e evita surpresas. Na Carplus, sempre recomendamos incluir a bomba." },
  { pergunta: "Como saber se a correia dentada está vencida?", resposta: "Visualmente, a correia dentada pode apresentar trincas, desgaste dos dentes ou ressecamento. Porem, ela pode romper sem sinais visiveis. Por isso, o mais importante e respeitar o intervalo de troca recomendado pelo fabricante (km e tempo). Na Carplus, verificamos a condicao e orientamos a troca." },
  { pergunta: "Correia dentada arrebentada danifica o motor?", resposta: "Na maioria dos motores modernos (motores de interferencia), sim. Quando a correia arrebenta, as valvulas param na posicao aberta e os pistoes continuam subindo, causando colisao. O resultado sao valvulas entortadas, guias quebradas e, em casos graves, danos aos pistoes e cabecote." },
  { pergunta: "Qual a garantia na troca de correia dentada?", resposta: "Na Carplus, a troca de correia dentada tem garantia de 1 ano ou 20.000 km, o que ocorrer primeiro, tanto para pecas quanto para mao de obra. Utilizamos apenas pecas de qualidade comprovada e seguimos todos os procedimentos especificados pelo fabricante." },
  { pergunta: "O que é correia acessórios?", resposta: "A correia de acessorios (ou correia do alternador/poly-V) aciona componentes como alternador, bomba da direcao hidraulica, compressor do ar condicionado e bomba dagua (em alguns motores). E diferente da correia dentada e tem intervalo de troca maior. Na Carplus, verificamos e trocamos quando necessario." },
  { pergunta: "O que é suspensão do carro?", resposta: "A suspensao e o conjunto de componentes que conecta as rodas ao chassi do veiculo: amortecedores, molas, bieletas, pivos, buchas, bandejas e barra estabilizadora. Sua funcao e absorver impactos, manter os pneus em contato com o solo e proporcionar conforto e estabilidade. Na Carplus, fazemos manutencao completa de suspensao." },
  { pergunta: "Suspensão fazendo barulho — o que pode ser?", resposta: "Barulhos na suspensao podem indicar: buchas ressecadas, bieletas da barra estabilizadora gastas, pivos com folga, batentes de amortecedor danificados, ou amortecedores vazando. O diagnostico preciso requer inspecao com o veiculo elevado. Na Carplus, identificamos a origem do ruido e indicamos a solucao." },
  { pergunta: "Quanto custa revisão de suspensão?", resposta: "A revisao de suspensao na Carplus inclui inspecao completa de todos os componentes e custa R$ 80. Se forem necessarias pecas, o valor varia conforme o veiculo e os itens a substituir. Fazemos orcamento detalhado antes de qualquer servico." },
  { pergunta: "O que é amortecedor?", resposta: "O amortecedor e o componente da suspensao que controla o movimento das molas, evitando que o carro balance demais apos passar por irregularidades. Ele absorve e dissipa a energia dos impactos em forma de calor. Amortecedores gastos comprometem a estabilidade, frenagem e conforto." },
  { pergunta: "Amortecedor gasto afeta a frenagem?", resposta: "Sim, amortecedores gastos aumentam a distancia de frenagem significativamente. Quando o amortecedor nao controla bem os movimentos da suspensao, os pneus perdem contato com o solo em irregularidades, reduzindo a eficiencia dos freios. E um item de seguranca critico." },
  { pergunta: "Quando trocar o amortecedor?", resposta: "Recomenda-se trocar os amortecedores entre 40.000 e 60.000 km, dependendo das condicoes de uso e qualidade das estradas. Sinais de desgaste incluem: carro balancando demais, vazamento de oleo no amortecedor, ruidos e instabilidade em curvas ou frenagens. Na Carplus, avaliamos e indicamos a troca quando necessario." },
  { pergunta: "O que é pivô de suspensão?", resposta: "O pivo (ou pivo de direcao) e uma articulacao esferica que conecta a bandeja de suspensao a manga de eixo (onde a roda e montada). Permite o movimento de estercar as rodas e absorve parte dos impactos. Pivos com folga causam instabilidade, ruidos e desgaste irregular dos pneus." },
  { pergunta: "O que é barra estabilizadora?", resposta: "A barra estabilizadora e uma barra de aco que conecta os dois lados da suspensao. Sua funcao e reduzir a inclinacao da carroceria em curvas (rolagem), melhorando a estabilidade. As bieletas conectam a barra aos amortecedores e sao componentes que frequentemente precisam de substituicao." },
  { pergunta: "Batente de amortecedor — o que é?", resposta: "O batente de amortecedor e uma peca de borracha ou poliuretano que limita o curso do amortecedor em compressao total (buracos grandes). Protege o amortecedor de danos e evita batidas secas. Batentes ressecados ou quebrados causam ruidos e reduzem a vida util do amortecedor." },
  { pergunta: "A Carplus faz manutenção de suspensão no Portão?", resposta: "Sim, a Carplus no bairro Portao em Curitiba e especializada em manutencao de suspensao. Trocamos amortecedores, molas, bieletas, pivos, buchas, coifas e todos os componentes. Trabalhamos com pecas de qualidade e oferecemos garantia nos servicos." },
  { pergunta: "Carro barulhando na lombada — o que pode ser?", resposta: "Barulho ao passar em lombadas geralmente indica problema na suspensao: bieletas da barra estabilizadora, buchas ressecadas, batentes de amortecedor danificados ou amortecedores gastos. Tambem pode ser calco de motor solto ou componentes da direcao. Na Carplus, diagnosticamos a causa exata." },
  { pergunta: "Carro abaixando de um lado — o que é?", resposta: "Carro mais baixo de um lado pode indicar mola quebrada ou cedida, amortecedor vazando ou problema em componentes da suspensao daquele lado. Tambem pode ser simplesmente diferenca de carga (mais peso de um lado). Na Carplus, inspecionamos e identificamos a causa." },
  { pergunta: "Quanto custa trocar amortecedor em Curitiba?", resposta: "Na Carplus, a troca de amortecedores dianteiros custa a partir de R$ 600 o par (pecas + mao de obra). Amortecedores traseiros a partir de R$ 400 o par. O valor varia conforme o veiculo e a marca escolhida. Trabalhamos com Monroe, Cofap, Nakata e outros." },
  { pergunta: "O que é mola da suspensão?", resposta: "As molas da suspensao suportam o peso do veiculo e absorvem os impactos das irregularidades do solo. Trabalham em conjunto com os amortecedores. Podem ser helicoidais (as mais comuns), feixe de molas (picapes) ou pneumaticas (veiculos de luxo). Molas cedidas ou quebradas afetam a altura e estabilidade do veiculo." },
  { pergunta: "O que faz a suspensão do carro?", resposta: "A suspensao tem tres funcoes principais: 1) Absorver impactos para proporcionar conforto; 2) Manter os pneus em contato com o solo para garantir tracao e frenagem; 3) Controlar os movimentos da carroceria para estabilidade em curvas e frenagens. E um sistema essencial para seguranca e conforto." },
  { pergunta: "O ar condicionado do meu carro está fraco — o que fazer?", resposta: "Ar condicionado fraco pode indicar falta de gas, filtro de cabine entupido, condensador sujo, compressor com problema ou vazamento no sistema. Na Carplus, fazemos diagnostico completo para identificar a causa. Muitas vezes uma simples recarga de gas e limpeza resolvem o problema." },
  { pergunta: "Com que frequência fazer manutenção do ar condicionado?", resposta: "Recomenda-se fazer manutencao do ar condicionado automotivo anualmente, de preferencia antes do verao. Inclui verificacao do nivel de gas, limpeza do sistema, troca do filtro de cabine e higienizacao. Isso garante eficiencia, economia de combustivel e ar saudavel." },
  { pergunta: "Quanto custa higienização do ar condicionado?", resposta: "Na Carplus, a higienizacao do ar condicionado custa a partir de R$ 80. Inclui limpeza do evaporador com produto bactericida, eliminando fungos, bacterias e mau cheiro. Se incluir troca do filtro de cabine, o valor total fica em torno de R$ 130." },
  { pergunta: "A Carplus higieniza ar condicionado de carro?", resposta: "Sim, a Carplus realiza higienizacao profissional do ar condicionado automotivo. Utilizamos produtos especificos que eliminam fungos, bacterias e acaros do sistema, acabando com o mau cheiro e melhorando a qualidade do ar. Recomendamos fazer a cada 12 meses ou quando sentir odor desagradavel." },
  { pergunta: "O que é recarga de gás do ar condicionado?", resposta: "A recarga de gas e o procedimento de adicionar fluido refrigerante (R134a ou R1234yf) ao sistema do ar condicionado. O gas e responsavel pela troca de calor que resfria o ar. Com o tempo, pode haver pequenas perdas que reduzem a eficiencia. Antes de recarregar, e importante verificar se ha vazamentos." },
  { pergunta: "Quanto custa recarga de gás do ar condicionado em Curitiba?", resposta: "Na Carplus, a recarga de gas R134a custa a partir de R$ 200. O valor inclui verificacao de vazamentos, limpeza do sistema e gas. Carros com gas R1234yf (mais novos) tem custo maior devido ao preco do gas. Fazemos orcamento antes de qualquer servico." },
  { pergunta: "Ar condicionado com cheiro ruim — o que fazer?", resposta: "Cheiro ruim no ar condicionado indica presenca de fungos e bacterias no evaporador. A solucao e fazer higienizacao com produto bactericida e trocar o filtro de cabine. Na Carplus, realizamos esse servico que elimina o mau cheiro e melhora a qualidade do ar." },
  { pergunta: "Ar condicionado não está gelando — o que pode ser?", resposta: "Ar condicionado que nao gela pode ter diversas causas: falta de gas, compressor com defeito, condensador sujo ou obstruido, valvula de expansao com problema, ou vazamento no sistema. Na Carplus, fazemos diagnostico completo com equipamentos apropriados para identificar a falha." },
  { pergunta: "Ar condicionado liga e desliga sozinho — o que é?", resposta: "Esse comportamento pode indicar falta de gas (protecao do compressor), sensor de temperatura com defeito, problema eletrico, ou compressor com desgaste interno. Tambem pode ser comportamento normal em alguns sistemas quando a temperatura desejada e atingida. Na Carplus, diagnosticamos a causa." },
  { pergunta: "Compressor do ar condicionado faz barulho — o que fazer?", resposta: "Barulho no compressor do ar condicionado pode indicar: falta de lubrificacao, desgaste interno, correia frouxa, ou embreagem magnetica com problema. Um compressor barulhento pode falhar em breve. Na Carplus, avaliamos se e possivel reparar ou se a substituicao e necessaria." },
  { pergunta: "Quanto custa trocar compressor de ar condicionado?", resposta: "A troca do compressor de ar condicionado custa de R$ 1.500 a R$ 4.000 dependendo do veiculo e se e peca nova ou recondicionada. Inclui tambem troca do filtro secador e recarga de gas. Na Carplus, fazemos orcamento detalhado e oferecemos opcoes de pecas." },
  { pergunta: "A Carplus usa gás R134a ou R1234yf?", resposta: "A Carplus trabalha com ambos os gases: R134a (usado na maioria dos carros ate 2016-2017) e R1234yf (usado em veiculos mais novos). O tipo de gas e determinado pelo fabricante do veiculo e nao pode ser misturado. Verificamos a especificacao do seu carro antes de qualquer servico." },
  { pergunta: "Ar condicionado automotivo precisa de manutenção anual?", resposta: "Sim, recomendamos manutencao preventiva anual do ar condicionado. Inclui verificacao de nivel de gas, teste de pressao, limpeza do condensador, troca do filtro de cabine e higienizacao. Isso mantem a eficiencia do sistema, prolonga sua vida util e garante ar saudavel no veiculo." },
  { pergunta: "O que é a válvula de expansão do ar condicionado?", resposta: "A valvula de expansao controla o fluxo de gas refrigerante para o evaporador, causando a queda de pressao e temperatura que resfria o ar. E um componente critico do sistema. Quando falha, pode causar congelamento do evaporador ou falta de refrigeracao. Na Carplus, diagnosticamos e substituimos quando necessario." },
  { pergunta: "O ar condicionado consome combustível?", resposta: "Sim, o ar condicionado aumenta o consumo de combustivel em 5% a 15% dependendo do veiculo e intensidade de uso. O compressor e acionado pelo motor atraves de correia. Sistemas modernos e bem mantidos consomem menos. Em cidade, com paradas frequentes, o impacto e maior que na estrada." },
  { pergunta: "Filtro do ar condicionado — quando trocar?", resposta: "O filtro de cabine (filtro do ar condicionado) deve ser trocado a cada 10.000 a 15.000 km ou anualmente. Em cidades com muita poeira ou poluicao, o intervalo pode ser menor. Filtro entupido reduz o fluxo de ar, sobrecarrega o sistema e permite a passagem de impurezas." },
  { pergunta: "O que é manutenção de motor?", resposta: "Manutencao de motor engloba todos os servicos que mantem o motor funcionando bem: troca de oleo e filtros, velas de ignicao, cabos de vela, correias, fluidos, limpeza de bicos injetores, verificacao de sensores e muito mais. Na Carplus, fazemos desde manutencao preventiva ate reparos complexos." },
  { pergunta: "Motor batendo — o que pode ser?", resposta: "Motor batendo pode indicar diversos problemas: combustivel de ma qualidade, ponto de ignicao incorreto, carbonizacao excessiva, oleo inadequado, ou problemas mecanicos como bronzinas ou hidraulicos. O diagnostico preciso requer avaliacao profissional. Na Carplus, identificamos a causa e indicamos a solucao." },
  { pergunta: "Motor superaquecendo — o que fazer?", resposta: "Se o motor superaquecer, pare imediatamente em local seguro e desligue o veiculo. Nunca abra o reservatorio com motor quente. Aguarde esfriar e verifique o nivel de agua. Causas comuns: vazamento no sistema, bomba dagua com defeito, ventoinha nao funcionando, ou termostato travado. Reboque ate uma oficina." },
  { pergunta: "O que causa superaquecimento do motor?", resposta: "Principais causas de superaquecimento: nivel baixo de liquido de arrefecimento, vazamentos no sistema, bomba dagua com defeito, termostato travado fechado, ventoinha nao funcionando, radiador entupido, ou junta do cabecote queimada. Na Carplus, diagnosticamos e reparamos problemas de arrefecimento." },
  { pergunta: "A Carplus faz retífica de motor?", resposta: "A Carplus realiza servicos de manutencao e reparos em motores. Para retifica completa de motor (usinagem de blocos e cabecotes), trabalhamos em parceria com retificas especializadas. Fazemos o diagnostico, desmontagem, acompanhamos a retifica e remontamos com garantia." },
  { pergunta: "O que é junta do cabeçote?", resposta: "A junta do cabecote e uma vedacao entre o bloco do motor e o cabecote. Ela separa os cilindros, canais de agua e oleo. Quando queima, pode causar mistura de oleo com agua, superaquecimento, perda de compressao e fumaca branca no escapamento. E um reparo trabalhoso mas necessario." },

  // Coluna 4 - Localizacao e Atendimento
  { pergunta: "Onde fica a Carplus em Curitiba?", resposta: "A Carplus Pneus e Oficina Mecânica esta localizada na Rua Padre Anchieta, 2285, no bairro Portao, em Curitiba-PR. Estamos em uma regiao de facil acesso, com amplo estacionamento para clientes. Ficamos proximos ao Terminal do Portao e atendemos toda a regiao sul de Curitiba." },
  { pergunta: "A Carplus fica no bairro Portão?", resposta: "Sim, a Carplus esta localizada no coracao do bairro Portao, um dos mais tradicionais de Curitiba. Nosso endereco e Rua Padre Anchieta, 2285. Estamos a poucos minutos do Terminal do Portao e atendemos moradores de toda a regiao." },
  { pergunta: "A Carplus atende o bairro Água Verde?", resposta: "Sim, o bairro Agua Verde esta muito proximo da Carplus. Estamos na Rua Padre Anchieta, 2285, no Portao, a cerca de 5 minutos de carro do Agua Verde. Muitos de nossos clientes sao moradores deste bairro vizinho." },
  { pergunta: "Tem oficina mecânica no Novo Mundo perto da Carplus?", resposta: "A Carplus esta no bairro Portao, muito proximo ao Novo Mundo. Estamos na Rua Padre Anchieta, 2285, a cerca de 10 minutos do Novo Mundo. Oferecemos servicos completos de mecanica, pneus, alinhamento, balanceamento e muito mais." },
  { pergunta: "A Carplus atende clientes do bairro Fazendinha?", resposta: "Sim, atendemos clientes de toda Curitiba, incluindo o bairro Fazendinha. A Carplus esta na Rua Padre Anchieta, 2285, no Portao, a cerca de 15 minutos da Fazendinha. Temos facil acesso e estacionamento proprio." },
  { pergunta: "Tem troca de pneu no bairro Campo Comprido?", resposta: "A Carplus atende clientes do Campo Comprido e regiao. Estamos na Rua Padre Anchieta, 2285, no Portao, a cerca de 20 minutos do Campo Comprido. Oferecemos pneus das melhores marcas com montagem, balanceamento e alinhamento." },
  { pergunta: "Oficina mecânica no bairro Lindóia — a Carplus atende?", resposta: "Sim, atendemos clientes do bairro Lindoia. A Carplus esta no Portao, na Rua Padre Anchieta, 2285, a cerca de 15 minutos do Lindoia. Oferecemos todos os servicos de mecanica, pneus e manutencao automotiva." },
  { pergunta: "Tem auto center perto do bairro Seminário em Curitiba?", resposta: "A Carplus Pneus e Oficina Mecânica atende a regiao do Seminario. Estamos na Rua Padre Anchieta, 2285, no Portao, a cerca de 10 minutos do Seminario. Somos um auto center completo com pneus, mecanica, alinhamento, balanceamento e mais." },
  { pergunta: "A Carplus fica próxima ao bairro Vila Izabel?", resposta: "Sim, estamos relativamente proximos a Vila Izabel. A Carplus fica na Rua Padre Anchieta, 2285, no Portao, a cerca de 12 minutos da Vila Izabel. Atendemos clientes de toda a regiao com servicos completos." },
  { pergunta: "Qual a distância da Carplus para o bairro Guabirotuba?", resposta: "Do bairro Guabirotuba ate a Carplus no Portao sao aproximadamente 20 minutos de carro via Av. Marechal Floriano Peixoto. Estamos na Rua Padre Anchieta, 2285, com facil estacionamento e atendimento profissional." },
  { pergunta: "Tem loja de pneus perto do bairro Pinheirinho?", resposta: "A Carplus atende clientes do Pinheirinho. Estamos na Rua Padre Anchieta, 2285, no Portao, a cerca de 15 minutos do Pinheirinho. Oferecemos pneus das melhores marcas com precos competitivos e servicos inclusos." },
  { pergunta: "Oficina mecânica próxima ao Santa Quitéria?", resposta: "A Carplus esta no Portao, muito proximo ao Santa Quiteria. Nosso endereco e Rua Padre Anchieta, 2285, a cerca de 8 minutos do Santa Quiteria. Oferecemos todos os servicos de mecanica e pneus que voce precisa." },
  { pergunta: "A Carplus atende o bairro Parolin?", resposta: "Sim, atendemos clientes do bairro Parolin. A Carplus esta na Rua Padre Anchieta, 2285, no Portao, a cerca de 15 minutos do Parolin. Venha conhecer nossa estrutura e servicos de qualidade." },
  { pergunta: "Tem mecânico de confiança perto do bairro Capão Raso?", resposta: "A Carplus atende clientes do Capao Raso e regiao. Estamos na Rua Padre Anchieta, 2285, no Portao, a cerca de 12 minutos. Somos uma oficina de confianca com mais de X anos de experiencia e clientes satisfeitos." },
  { pergunta: "Oficina no bairro Xaxim tem na Carplus?", resposta: "Atendemos clientes do bairro Xaxim. A Carplus esta localizada na Rua Padre Anchieta, 2285, no Portao, a cerca de 15 minutos do Xaxim. Oferecemos servicos completos de mecanica, pneus, alinhamento e balanceamento." },
  { pergunta: "A Carplus está perto do bairro Boqueirão?", resposta: "A Carplus atende clientes do Boqueirao. Estamos na Rua Padre Anchieta, 2285, no Portao, a cerca de 25 minutos do Boqueirao. Vale a pena o deslocamento pela qualidade dos nossos servicos e precos competitivos." },
  { pergunta: "Tem auto center na região do Portão em Curitiba?", resposta: "Sim, a Carplus e o auto center mais completo do bairro Portao em Curitiba. Estamos na Rua Padre Anchieta, 2285, oferecendo pneus, alinhamento 3D, balanceamento, troca de oleo, manutencao de freios, suspensao, ar condicionado e muito mais." },
  { pergunta: "Qual a melhor oficina mecânica perto do Portão?", resposta: "A Carplus Pneus e Oficina Mecânica e referencia em servicos automotivos no Portao. Com equipe qualificada, equipamentos modernos e pecas de qualidade, oferecemos atendimento de excelencia. Estamos na Rua Padre Anchieta, 2285. Venha conhecer e comprove!" },
  { pergunta: "Onde resolver pneu furado rápido no Portão?", resposta: "Na Carplus voce resolve pneu furado rapidamente. Estamos na Rua Padre Anchieta, 2285, no Portao. O reparo de pneu furado leva cerca de 20 minutos. Se o pneu nao tiver conserto, temos diversas opcoes para substituicao imediata." },
  { pergunta: "Pneu furado no Portão — a Carplus resolve?", resposta: "Sim, a Carplus resolve pneu furado com rapidez e qualidade. Estamos no Portao, Rua Padre Anchieta, 2285. Fazemos reparo de furo (quando possivel) ou substituicao do pneu. Temos estoque das principais medidas para pronta entrega." },
  { pergunta: "Como resolver pneu furado em Curitiba?", resposta: "Se voce furou o pneu em Curitiba, troque pelo estepe (se possivel) e venha ate a Carplus no Portao, Rua Padre Anchieta, 2285. Avaliamos se o pneu tem conserto ou se precisa ser substituido. Atendimento rapido e precos justos." },
  { pergunta: "Quanto custa consertar pneu furado?", resposta: "Na Carplus, o conserto de pneu furado custa a partir de R$ 40. O valor pode variar dependendo do tamanho e localizacao do furo. Se o furo for na lateral ou muito grande, pode nao ter conserto e sera necessario substituir o pneu." },
  { pergunta: "A Carplus faz conserto de pneu furado?", resposta: "Sim, a Carplus faz conserto de pneu furado utilizando manchao interno de alta qualidade, que e o metodo mais seguro e duravel. Avaliamos cada caso para garantir que o reparo seja seguro. Se nao houver condicao de reparo, indicamos a substituicao." },
  { pergunta: "Quanto tempo leva consertar pneu furado?", resposta: "O conserto de pneu furado na Carplus leva em media 20 a 30 minutos. Inclui desmontagem, localizacao do furo, aplicacao do manchao interno, remontagem e balanceamento. Voce pode aguardar na nossa sala de espera confortavel." },
  { pergunta: "Pneu furado pode ser remendado?", resposta: "Sim, na maioria dos casos pneu furado na banda de rodagem pode ser reparado com manchao interno. Porem, furos na lateral, ombro do pneu, ou multiplos furos proximos podem tornar o reparo inseguro. Tambem nao reparamos pneus que rodaram muito tempo vazios. Na Carplus, avaliamos cada caso." },
  { pergunta: "Quando não tem como consertar o pneu furado?", resposta: "Nao e possivel consertar pneu furado quando: o furo e na lateral ou ombro, o pneu rodou vazio e danificou a estrutura interna, ha multiplos furos proximos, o pneu esta muito gasto, ou ha danos visiveis nas lonas internas. Nesses casos, a substituicao e necessaria." },
  { pergunta: "O que fazer se o pneu furar na estrada?", resposta: "Se o pneu furar na estrada: 1) Ligue o pisca-alerta; 2) Reduza a velocidade gradualmente; 3) Pare em local seguro fora da pista; 4) Sinalize com triangulo; 5) Troque pelo estepe ou acione assistencia. Evite rodar com pneu furado para nao danificar o aro." },
  { pergunta: "Pneu furado na lateral tem conserto?", resposta: "Nao, pneu furado na lateral nao tem conserto seguro. A lateral do pneu e a area mais flexivel e de maior estresse estrutural. Um reparo nessa regiao pode falhar em alta velocidade ou sob carga, causando estouro. A substituicao do pneu e obrigatoria." },
  { pergunta: "Plugue de pneu funciona?", resposta: "Plugues de pneu (tipo macarrao) sao solucoes emergenciais que podem funcionar temporariamente, mas nao sao recomendados como reparo definitivo. O metodo correto e o manchao interno, que veda o furo por dentro do pneu. Na Carplus, usamos apenas o metodo profissional." },
  { pergunta: "Qual o melhor remendo para pneu furado?", resposta: "O melhor metodo de reparo e o manchao interno (ou reparo a frio), onde o pneu e desmontado e o furo e vedado por dentro com um adesivo especial. E mais seguro e duravel que plugues externos. Na Carplus, utilizamos manchoes de qualidade com garantia." },
  { pergunta: "Pneu furado no centro de Curitiba — onde ir?", resposta: "Se voce furou o pneu no centro de Curitiba, a Carplus no Portao e uma otima opcao. Estamos na Rua Padre Anchieta, 2285, a cerca de 15 minutos do centro. Atendimento rapido e profissional para resolver seu problema." },
  { pergunta: "A Carplus tem atendimento rápido para pneu furado?", resposta: "Sim, a Carplus oferece atendimento rapido para pneus furados. Sem agendamento, atendemos por ordem de chegada e o reparo leva cerca de 20-30 minutos. Se precisar de pneu novo, temos estoque das principais medidas para pronta entrega." },
  { pergunta: "Pneu furado estraga o aro?", resposta: "Sim, rodar com pneu furado ou muito murcho pode danificar o aro. Quando a pressao esta baixa, o aro pode bater no solo em buracos ou lombadas, causando amassados e trincas. Se precisou rodar com pneu furado, faca uma verificacao do aro na Carplus." },
  { pergunta: "O que fazer se furar o pneu do SUV?", resposta: "O procedimento e o mesmo de qualquer veiculo: pare em local seguro, sinalize, troque pelo estepe ou acione assistencia. SUVs geralmente tem estepe de tamanho normal, facilitando o uso ate uma oficina. Na Carplus, atendemos SUVs de todas as marcas." },
  { pergunta: "Quanto custa um remendo de pneu?", resposta: "Na Carplus, o reparo de pneu furado com manchao interno custa a partir de R$ 40. E o metodo mais seguro e duravel. O servico inclui desmontagem, localizacao do furo, reparo, remontagem e balanceamento." },
  { pergunta: "A Carplus tem estacionamento fácil?", resposta: "Sim, a Carplus tem estacionamento proprio e amplo para clientes. Voce pode deixar o carro com tranquilidade enquanto aguarda o servico ou deixar para buscar depois. Estamos na Rua Padre Anchieta, 2285, no Portao." },
  { pergunta: "Qual o horário de atendimento da Carplus?", resposta: "A Carplus funciona de segunda a sexta-feira das 8h as 18h, e aos sabados das 8h as 12h. Nao abrimos aos domingos e feriados. Para atendimento mais rapido, recomendamos agendar pelo WhatsApp, especialmente para servicos mais demorados." },
  { pergunta: "A Carplus abre no sábado?", resposta: "Sim, a Carplus abre aos sabados das 8h as 12h. E um otimo horario para quem trabalha durante a semana. Recomendamos chegar cedo ou agendar pelo WhatsApp para garantir atendimento, pois os sabados costumam ter alta demanda." },
  { pergunta: "Posso agendar serviço na Carplus online?", resposta: "Sim, voce pode agendar servicos na Carplus pelo WhatsApp. Envie uma mensagem para nosso numero informando o servico desejado, modelo do veiculo e horario de preferencia. Confirmamos a disponibilidade e agendamos seu atendimento." },
  { pergunta: "A Carplus tem Wi-Fi na sala de espera?", resposta: "Sim, a Carplus oferece Wi-Fi gratuito na sala de espera. Tambem temos cafe, agua e um ambiente climatizado para voce aguardar confortavelmente enquanto seu veiculo e atendido. A maioria dos servicos e concluida em menos de 1 hora." },
  { pergunta: "Qual o telefone da Carplus?", resposta: "O telefone da Carplus e (41) 3082-7282. Voce tambem pode entrar em contato pelo WhatsApp para orcamentos, agendamentos e duvidas. Estamos disponiveis de segunda a sexta das 8h as 18h e sabados das 8h as 12h." },
  { pergunta: "A Carplus tem WhatsApp para orçamento?", resposta: "Sim, a Carplus atende pelo WhatsApp para orcamentos rapidos. Envie a medida do pneu ou descreva o servico que precisa e respondemos com valores e disponibilidade. Tambem aceitamos fotos para diagnosticos preliminares." },
  { pergunta: "A Carplus emite nota fiscal?", resposta: "Sim, a Carplus emite nota fiscal de todos os servicos e produtos. A nota fiscal e importante para garantia, comprovacao de despesas e, em caso de empresas, abatimento de impostos. Fornecemos nota fiscal eletronica (NF-e) ou cupom fiscal conforme sua necessidade." },
  { pergunta: "A Carplus tem garantia nos serviços?", resposta: "Sim, todos os servicos da Carplus tem garantia. A garantia varia conforme o tipo de servico: troca de oleo 6 meses ou 10.000km, alinhamento 3 meses, pneus conforme fabricante, pecas em geral 3 a 12 meses. Trabalhamos com transparencia e compromisso com a qualidade." },
  { pergunta: "Qual o prazo de garantia da Carplus nos serviços?", resposta: "Os prazos de garantia na Carplus variam: Pneus - garantia do fabricante (geralmente 5 anos). Alinhamento e balanceamento - 3 meses. Troca de oleo - 6 meses ou 10.000km. Pecas de suspensao e freios - 3 a 12 meses dependendo da peca. Servicos em geral - 90 dias." },
  { pergunta: "A Carplus faz orçamento gratuito?", resposta: "Sim, a Carplus faz orcamento gratuito e sem compromisso. Voce pode solicitar orcamento pessoalmente, por telefone ou WhatsApp. Para diagnosticos que exijam desmontagem ou scanner, pode haver taxa que e descontada se o servico for executado conosco." },
  { pergunta: "Posso levar o carro para avaliar sem compromisso?", resposta: "Sim, voce pode trazer o carro para avaliacao sem compromisso. Verificamos os pneus, fazemos inspecao visual da suspensao e freios, e orientamos sobre servicos necessarios. Alguns diagnosticos mais complexos podem ter taxa, informada previamente." },
  { pergunta: "A Carplus tem mecânicos certificados?", resposta: "Sim, a equipe da Carplus e formada por profissionais experientes e capacitados. Nossos tecnicos participam regularmente de treinamentos e atualizacoes das principais montadoras e fabricantes de pecas. Isso garante servicos de qualidade e atualizados com as tecnologias dos veiculos modernos." },
  { pergunta: "A Carplus é credenciada por alguma marca de pneus?", resposta: "Sim, a Carplus e revendedor autorizado de diversas marcas de pneus, incluindo Pirelli, Michelin, Goodyear, Continental, Bridgestone e Firestone. Isso garante produtos originais, precos competitivos e garantia de fabrica em todos os pneus." },
  { pergunta: "A Carplus é revendedor autorizado Pirelli?", resposta: "Sim, a Carplus e revendedor autorizado Pirelli em Curitiba. Trabalhamos com toda a linha Pirelli: Cinturato, Scorpion, P Zero e mais. Oferecemos precos de distribuidora, garantia de fabrica e a certeza de produtos originais." },
  { pergunta: "Tem mecânica full service perto do Portão?", resposta: "Sim, a Carplus e uma mecanica full service no Portao. Oferecemos todos os servicos automotivos em um so lugar: pneus, alinhamento, balanceamento, troca de oleo, freios, suspensao, ar condicionado, scanner e muito mais. Rua Padre Anchieta, 2285." },
  { pergunta: "O que é auto center full service?", resposta: "Auto center full service e uma oficina que oferece todos os servicos automotivos em um unico local: pneus, alinhamento, balanceamento, mecanica geral, eletrica, ar condicionado, freios, suspensao e mais. A Carplus e um auto center full service completo no Portao." },
  { pergunta: "A Carplus faz revisão de carro seminovo?", resposta: "Sim, a Carplus faz revisao completa de carros seminovos. E um servico importante para quem esta comprando ou vendendo um veiculo usado. Verificamos motor, suspensao, freios, pneus, eletrica e emitimos laudo detalhado do estado do veiculo." },
  { pergunta: "Posso fazer revisão pré-compra de veículo na Carplus?", resposta: "Sim, oferecemos revisao pre-compra (ou vistoria cautelar mecanica). Avaliamos o estado geral do veiculo antes da compra, identificando problemas que podem representar gastos futuros. E um investimento que pode evitar surpresas desagradaveis." },
  { pergunta: "A Carplus emite laudo de revisão?", resposta: "Sim, apos revisoes completas ou vistorias, a Carplus emite laudo detalhado com todas as verificacoes realizadas e o estado dos componentes. O laudo pode ser usado para negociacao de compra/venda ou como historico de manutencao do veiculo." },
  { pergunta: "A Carplus faz manutenção de veículos importados?", resposta: "Sim, a Carplus atende veiculos importados de todas as marcas. Temos equipamentos e conhecimento tecnico para trabalhar com BMW, Mercedes, Audi, Land Rover, Volvo, Jeep e outros. Utilizamos pecas originais ou equivalentes de qualidade." },
  { pergunta: "A Carplus trabalha com carros a diesel?", resposta: "Sim, a Carplus atende veiculos a diesel, como picapes (Hilux, Ranger, S10, Amarok) e SUVs (SW4, Pajero). Realizamos troca de oleo com lubrificantes especificos para diesel, manutencao de suspensao, freios, pneus e servicos gerais." },
  { pergunta: "A Carplus atende caminhonetes e SUVs grandes?", resposta: "Sim, temos estrutura para atender caminhonetes e SUVs de todos os tamanhos. Nosso elevador suporta veiculos pesados e temos pneus em estoque para as principais medidas de picapes e SUVs. Trabalhamos com Hilux, Ranger, S10, Amarok, SW4, Pajero, Trailblazer e outros." },
  { pergunta: "Quanto tempo fica o carro na oficina para revisão completa?", resposta: "Uma revisao completa na Carplus geralmente e concluida no mesmo dia, levando de 2 a 4 horas dependendo dos servicos necessarios. Se forem identificados reparos adicionais, informamos o prazo antes de executar. Voce pode deixar o carro pela manha e buscar a tarde." },
  { pergunta: "A Carplus tem serviço expresso de troca de óleo?", resposta: "Sim, a troca de oleo na Carplus e um servico rapido que leva cerca de 30 minutos. Inclui troca de oleo, filtro de oleo, verificacao de niveis e reset do indicador de revisao. Voce pode aguardar na sala de espera com Wi-Fi e cafe." },
  { pergunta: "A Carplus tem câmera de monitoramento na oficina?", resposta: "Sim, a Carplus possui sistema de cameras de monitoramento em toda a oficina. Isso garante a seguranca do seu veiculo e permite acompanhar o andamento dos servicos. Priorizamos transparencia e confianca no relacionamento com nossos clientes." },
  { pergunta: "A Carplus usa peças originais ou paralelas?", resposta: "A Carplus trabalha com pecas originais e pecas paralelas de qualidade (de fabricantes reconhecidos como Bosch, Monroe, Cofap, Mann, etc). Apresentamos as opcoes com seus respectivos precos e garantias para voce escolher. Nunca usamos pecas de qualidade duvidosa." },
  { pergunta: "A Carplus tem orçamento pelo WhatsApp com foto?", resposta: "Sim, voce pode enviar fotos pelo WhatsApp para orcamentos preliminares. Isso agiliza o atendimento e permite identificar problemas visiveis. Para diagnosticos mais precisos, uma avaliacao presencial pode ser necessaria, mas as fotos ajudam muito na comunicacao inicial." }
];

const column1Questions = [
  "Qual a melhor marca de pneu para meu carro?",
  "Quanto tempo dura um pneu novo?",
  "Posso misturar marcas de pneu no mesmo eixo?",
  "Qual o prazo de validade de um pneu?",
  "Como saber se meu pneu está careca?",
  "O que significa o número na lateral do pneu?",
  "Qual a diferença entre pneu radial e diagonal?",
  "Pneu novo precisa de balanceamento?",
  "Com que frequência devo calibrar os pneus?",
  "Qual a pressão ideal para meus pneus?",
  "Pneu murcho estraga o aro?",
  "Qual a diferença entre pneu de verão e inverno?",
  "Vale a pena comprar pneu remold?",
  "Pneu recauchutado é seguro?",
  "O que é pneu run flat?",
  "Posso rodar com pneu furado?",
  "Qual pneu é melhor para estrada?",
  "Qual pneu é mais econômico?",
  "Como guardar pneus que não estão sendo usados?",
  "Quanto custa um jogo de pneus em Curitiba?",
  "Onde comprar pneu Pirelli em Curitiba?",
  "Onde comprar pneu Michelin no Portão?",
  "Pneu Goodyear é bom?",
  "Pneu Continental aguenta rodovias?",
  "Pneu Yokohama vale a pena?",
  "Qual pneu para SUV em Curitiba?",
  "Qual pneu para chuva?",
  "Pneu com bolha pode estourar?",
  "Quanto custa trocar os 4 pneus?",
  "A Carplus tem pneu com montagem inclusa?",
  "Carplus trabalha com pneu Pirelli original?",
  "Qual pneu para Fiat Mobi?",
  "Qual pneu para Honda HRV?",
  "Qual pneu para Toyota Corolla?",
  "Qual pneu para Chevrolet Tracker?",
  "Qual pneu para Jeep Compass?",
  "Qual pneu para VW Polo?",
  "Qual pneu para Ford Ka?",
  "Qual pneu para Hyundai Creta?",
  "Qual pneu para picape?",
  "Pneu muda o consumo de combustível?",
  "Pneu mais largo melhora a frenagem?",
  "O que é índice de carga do pneu?",
  "O que é índice de velocidade do pneu?",
  "Pneu novo deixa o carro mais seguro?",
  "Quanto tempo leva para montar 4 pneus?",
  "A Carplus faz descarte ecológico dos pneus velhos?",
  "Tem como parcelar pneu na Carplus?",
  "A Carplus aceita cartão de crédito?",
  "Posso levar o pneu e pagar só a mão de obra?",
  "Qual a diferença entre pneu 185 e 195?",
  "Pneu estepe de diferente tamanho pode?",
  "Quando devo trocar o estepe?",
  "Pneu novo precisa rodar devagar?",
  "O que é o TWI no pneu?",
  "Tem loja de pneus perto do Portão em Curitiba?",
  "Carplus entrega pneu em domicílio?",
  "Tem pneu para moto na Carplus?",
  "Qual pneu para carro de passeio mais econômico?",
  "Pneu com mais de 5 anos ainda é seguro?",
  "O que faz o pneu vibrar em alta velocidade?",
  "Pneu faz barulho quando está com problema?",
  "O que causa desgaste irregular nos pneus?",
  "Pneu puxa para um lado — o que fazer?",
];

const column2Questions = [
  "O que é alinhamento 3D?",
  "Qual a diferença entre alinhamento 2D e 3D?",
  "Com que frequência fazer alinhamento?",
  "Alinhamento resolve pneu que puxa?",
  "Quanto custa alinhamento 3D em Curitiba?",
  "A Carplus faz alinhamento 3D?",
  "O que é balanceamento de pneus?",
  "Balanceamento precisa ser feito junto com alinhamento?",
  "Carro tremendo na estrada precisa de balanceamento?",
  "Quanto custa balanceamento em Curitiba?",
  "O que é geometria de suspensão?",
  "Como saber se preciso de alinhamento?",
  "Alinhamento torto desgasta pneu?",
  "Alinhamento 3D é mais preciso?",
  "Meu carro está andando torto, o que pode ser?",
  "O que é convergência e divergência nas rodas?",
  "Quanto tempo leva para fazer alinhamento?",
  "Posso fazer alinhamento sem trocar os pneus?",
  "Quando bater o carro precisa refazer o alinhamento?",
  "Alinhamento resolve vibração no volante?",
  "O que causa vibração no volante em alta velocidade?",
  "Conserto de roda amassada tem na Carplus?",
  "A Carplus faz reparo em roda de liga leve?",
  "Quanto custa consertar uma roda torta?",
  "Roda trincada tem conserto?",
  "Pintura de roda tem na Carplus?",
  "O que é scanner automotivo?",
  "A luz do painel acendeu, o que fazer?",
  "Scanner automotivo apaga a luz do motor?",
  "Quanto custa scanner automotivo em Curitiba?",
  "O que a luz amarela do painel significa?",
  "O que a luz vermelha do motor significa?",
  "Scanner detecta todos os problemas do carro?",
  "Onde fazer diagnóstico automotivo no Portão?",
  "Scanner resolve o problema ou só aponta?",
  "O que é OBD2?",
  "Posso usar scanner em qualquer carro?",
  "Quanto tempo leva um diagnóstico por scanner?",
  "A Carplus tem equipamento de diagnóstico eletrônico?",
  "Scanner funciona em carro flex?",
  "O que é código de falha no carro?",
  "Troca de óleo pode apagar luz de revisão?",
  "A Carplus faz manutenção preventiva?",
  "O que entra em uma revisão completa?",
  "Com que quilometragem fazer revisão?",
  "Revisão no Portão tem na Carplus?",
  "Quanto custa revisão completa em Curitiba?",
  "O que é revisão de 10.000 km?",
  "A Carplus faz revisão de garantia?",
  "Posso usar óleo alternativo na revisão?",
  "Revisão perde garantia se não for na concessionária?",
  "Quanto custa troca de óleo em Curitiba?",
  "Qual o melhor óleo para meu carro?",
  "Posso misturar óleo 5W30 com 5W40?",
  "Óleo sintético é melhor que semissintético?",
  "Qual óleo para motor turbinado?",
  "Com que frequência trocar o óleo?",
  "Qual o óleo certo para meu carro?",
  "Troca de óleo pode ser feita no Portão?",
  "A Carplus troca filtro junto com o óleo?",
  "Qual filtro de óleo usar?",
  "Posso trocar óleo a cada 10.000 km?",
  "O que acontece se eu não trocar o óleo no prazo?",
  "Motor consome óleo demais — o que pode ser?",
];

const column3Questions = [
  "O que é fluido de freio?",
  "Com que frequência trocar o fluido de freio?",
  "Fluido de freio absorve umidade com o tempo?",
  "Qual o fluido de freio correto para meu carro?",
  "A Carplus faz troca de fluido de freio?",
  "Quanto custa troca de fluido de freio?",
  "Pastilha de freio — quando trocar?",
  "Disco de freio — quando trocar?",
  "Freio rangendo — o que pode ser?",
  "Freio fundo — o que significa?",
  "Freio vibrando ao parar — o que fazer?",
  "Quanto custa troca de pastilha de freio em Curitiba?",
  "Posso trocar pastilha e não trocar disco?",
  "Freio ABS está com luz acesa — o que fazer?",
  "A Carplus faz manutenção de freios?",
  "Manutenção de freio pode salvar vidas?",
  "O que é correia dentada?",
  "Com que km trocar a correia dentada?",
  "O que acontece se a correia dentada arrebentar?",
  "A Carplus troca correia dentada?",
  "Quanto custa trocar correia dentada em Curitiba?",
  "O que é kit de correia dentada?",
  "A correia dentada precisa trocar a bomba d'água junto?",
  "Como saber se a correia dentada está vencida?",
  "Correia dentada arrebentada danifica o motor?",
  "Qual a garantia na troca de correia dentada?",
  "O que é correia acessórios?",
  "O que é suspensão do carro?",
  "Suspensão fazendo barulho — o que pode ser?",
  "Quanto custa revisão de suspensão?",
  "O que é amortecedor?",
  "Amortecedor gasto afeta a frenagem?",
  "Quando trocar o amortecedor?",
  "O que é pivô de suspensão?",
  "O que é barra estabilizadora?",
  "Batente de amortecedor — o que é?",
  "A Carplus faz manutenção de suspensão no Portão?",
  "Carro barulhando na lombada — o que pode ser?",
  "Carro abaixando de um lado — o que é?",
  "Quanto custa trocar amortecedor em Curitiba?",
  "O que é mola da suspensão?",
  "O que faz a suspensão do carro?",
  "O ar condicionado do meu carro está fraco — o que fazer?",
  "Com que frequência fazer manutenção do ar condicionado?",
  "Quanto custa higienização do ar condicionado?",
  "A Carplus higieniza ar condicionado de carro?",
  "O que é recarga de gás do ar condicionado?",
  "Quanto custa recarga de gás do ar condicionado em Curitiba?",
  "Ar condicionado com cheiro ruim — o que fazer?",
  "Ar condicionado não está gelando — o que pode ser?",
  "Ar condicionado liga e desliga sozinho — o que é?",
  "Compressor do ar condicionado faz barulho — o que fazer?",
  "Quanto custa trocar compressor de ar condicionado?",
  "A Carplus usa gás R134a ou R1234yf?",
  "Ar condicionado automotivo precisa de manutenção anual?",
  "O que é a válvula de expansão do ar condicionado?",
  "O ar condicionado consome combustível?",
  "Filtro do ar condicionado — quando trocar?",
  "O que é manutenção de motor?",
  "Motor batendo — o que pode ser?",
  "Motor superaquecendo — o que fazer?",
  "O que causa superaquecimento do motor?",
  "A Carplus faz retífica de motor?",
  "O que é junta do cabeçote?",
];

const column4Questions = [
  "Onde fica a Carplus em Curitiba?",
  "A Carplus fica no bairro Portão?",
  "A Carplus atende o bairro Água Verde?",
  "Tem oficina mecânica no Novo Mundo perto da Carplus?",
  "A Carplus atende clientes do bairro Fazendinha?",
  "Tem troca de pneu no bairro Campo Comprido?",
  "Oficina mecânica no bairro Lindóia — a Carplus atende?",
  "Tem auto center perto do bairro Seminário em Curitiba?",
  "A Carplus fica próxima ao bairro Vila Izabel?",
  "Qual a distância da Carplus para o bairro Guabirotuba?",
  "Tem loja de pneus perto do bairro Pinheirinho?",
  "Oficina mecânica próxima ao Santa Quitéria?",
  "A Carplus atende o bairro Parolin?",
  "Tem mecânico de confiança perto do bairro Capão Raso?",
  "Oficina no bairro Xaxim tem na Carplus?",
  "A Carplus está perto do bairro Boqueirão?",
  "Tem auto center na região do Portão em Curitiba?",
  "Qual a melhor oficina mecânica perto do Portão?",
  "Onde resolver pneu furado rápido no Portão?",
  "Pneu furado no Portão — a Carplus resolve?",
  "Como resolver pneu furado em Curitiba?",
  "Quanto custa consertar pneu furado?",
  "A Carplus faz conserto de pneu furado?",
  "Quanto tempo leva consertar pneu furado?",
  "Pneu furado pode ser remendado?",
  "Quando não tem como consertar o pneu furado?",
  "O que fazer se o pneu furar na estrada?",
  "Pneu furado na lateral tem conserto?",
  "Plugue de pneu funciona?",
  "Qual o melhor remendo para pneu furado?",
  "Pneu furado no centro de Curitiba — onde ir?",
  "A Carplus tem atendimento rápido para pneu furado?",
  "Pneu furado estraga o aro?",
  "O que fazer se furar o pneu do SUV?",
  "Quanto custa um remendo de pneu?",
  "A Carplus tem estacionamento fácil?",
  "Qual o horário de atendimento da Carplus?",
  "A Carplus abre no sábado?",
  "Posso agendar serviço na Carplus online?",
  "A Carplus tem Wi-Fi na sala de espera?",
  "Qual o telefone da Carplus?",
  "A Carplus tem WhatsApp para orçamento?",
  "A Carplus emite nota fiscal?",
  "A Carplus tem garantia nos serviços?",
  "Qual o prazo de garantia da Carplus nos serviços?",
  "A Carplus faz orçamento gratuito?",
  "Posso levar o carro para avaliar sem compromisso?",
  "A Carplus tem mecânicos certificados?",
  "A Carplus é credenciada por alguma marca de pneus?",
  "A Carplus é revendedor autorizado Pirelli?",
  "Tem mecânica full service perto do Portão?",
  "O que é auto center full service?",
  "A Carplus faz revisão de carro seminovo?",
  "Posso fazer revisão pré-compra de veículo na Carplus?",
  "A Carplus emite laudo de revisão?",
  "A Carplus faz manutenção de veículos importados?",
  "A Carplus trabalha com carros a diesel?",
  "A Carplus atende caminhonetes e SUVs grandes?",
  "Quanto tempo fica o carro na oficina para revisão completa?",
  "A Carplus tem serviço expresso de troca de óleo?",
  "A Carplus tem câmera de monitoramento na oficina?",
  "A Carplus usa peças originais ou paralelas?",
  "A Carplus tem orçamento pelo WhatsApp com foto?",
];

// FAQ Modal Component
interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  onNavigate: (index: number) => void;
}

function FAQModal({ isOpen, onClose, currentIndex, onNavigate }: FAQModalProps) {
  const currentFaq = faqData[currentIndex];
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(currentIndex > 0 ? currentIndex - 1 : faqData.length - 1);
      if (e.key === 'ArrowRight') onNavigate(currentIndex < faqData.length - 1 ? currentIndex + 1 : 0);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, onClose, onNavigate]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!currentFaq) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.article
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#1a1a1a] border border-primary/30 rounded-2xl shadow-2xl"
          >
            {/* Header */}
            <header className="sticky top-0 z-10 flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-[#1a1a1a]/95 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <MessageCircleQuestion size={20} className="text-primary" />
                </div>
                <div>
                  <span className="text-xs text-white/50 uppercase tracking-wider">Pergunta {currentIndex + 1} de {faqData.length}</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Fechar"
              >
                <X size={20} className="text-white/70" />
              </button>
            </header>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                {currentFaq.pergunta}
              </h2>
              
              <div>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                  {currentFaq.resposta}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8 p-4 sm:p-6 bg-primary/10 border border-primary/30 rounded-xl">
                <p className="text-sm text-white/70 mb-3">Ainda tem duvidas? Fale com a gente!</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/5541988757360"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-black font-bold rounded-full text-sm hover:bg-primary/90 transition-colors"
                  >
                    <Phone size={16} />
                    WhatsApp
                  </a>
                  <a
                    href="https://maps.google.com/?q=Carplus+Auto+Center+Curitiba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white font-medium rounded-full text-sm hover:bg-white/20 transition-colors"
                  >
                    <MapPin size={16} />
                    Ver no Mapa
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Footer */}
            <footer className="sticky bottom-0 flex items-center justify-between p-4 sm:p-6 border-t border-white/10 bg-[#1a1a1a]/95 backdrop-blur-sm">
              <button
                onClick={() => onNavigate(currentIndex > 0 ? currentIndex - 1 : faqData.length - 1)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/70 hover:text-white"
              >
                <ChevronLeft size={18} />
                <span className="hidden sm:inline">Anterior</span>
              </button>

              <div className="flex items-center gap-1">
                {[...Array(Math.min(5, faqData.length))].map((_, i) => {
                  const dotIndex = Math.max(0, Math.min(currentIndex - 2, faqData.length - 5)) + i;
                  return (
                    <button
                      key={dotIndex}
                      onClick={() => onNavigate(dotIndex)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        dotIndex === currentIndex 
                          ? 'bg-primary w-6' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Ir para pergunta ${dotIndex + 1}`}
                    />
                  );
                })}
              </div>

              <button
                onClick={() => onNavigate(currentIndex < faqData.length - 1 ? currentIndex + 1 : 0)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/70 hover:text-white"
              >
                <span className="hidden sm:inline">Proxima</span>
                <ChevronRight size={18} />
              </button>
            </footer>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface FAQColumnProps {
  questions: string[];
  duration: number;
  columnIndex: number;
  onQuestionClick: (question: string) => void;
}

function FAQColumn({ questions, duration, columnIndex, onQuestionClick }: FAQColumnProps) {
  const columnRef = useRef<HTMLDivElement>(null);
  const duplicatedQuestions = [...questions, ...questions];
  
  const iconComponents = [
    <Disc key="disc" size={14} className="text-primary shrink-0" />,
    <Car key="car" size={14} className="text-primary shrink-0" />,
    <Settings key="settings" size={14} className="text-primary shrink-0" />,
    <Wrench key="wrench" size={14} className="text-primary shrink-0" />
  ];
  const icon = iconComponents[columnIndex % iconComponents.length];

  return (
    <div
      ref={columnRef}
      className="flex flex-col gap-3 group"
      style={{
        animation: `scrollUp ${duration}s linear infinite`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.animationPlayState = 'paused';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.animationPlayState = 'running';
      }}
    >
      {duplicatedQuestions.map((question, index) => (
        <button
          key={`${columnIndex}-${index}`}
          onClick={() => onQuestionClick(question)}
          className="bg-[#1c1c1c] border border-primary/40 rounded-full px-4 py-2.5 text-white text-sm font-medium flex items-center gap-2 hover:border-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer whitespace-nowrap text-left"
        >
          {icon}
          <span className="truncate">{question}</span>
        </button>
      ))}
    </div>
  );
}

export default function FAQInfiniteScroll() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentFaqIndex, setCurrentFaqIndex] = useState(0);

  const handleQuestionClick = useCallback((question: string) => {
    const index = faqData.findIndex(faq => faq.pergunta === question);
    if (index !== -1) {
      setCurrentFaqIndex(index);
      setModalOpen(true);
    }
  }, []);

  const handleNavigate = useCallback((index: number) => {
    setCurrentFaqIndex(index);
  }, []);

  return (
    <section
      aria-label="Duvidas Frequentes"
      className="relative py-16 bg-[#0f0f0f] overflow-hidden"
    >
      {/* Structured Data for SEO - UNICO FAQPage da pagina (apenas JSON-LD, sem microdata duplicada) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.slice(0, 50).map(faq => ({
              "@type": "Question",
              "name": faq.pergunta,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.resposta
              }
            }))
          })
        }}
      />

      {/* Header */}
      <header className="text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
          Duvidas <span className="text-primary italic">Frequentes</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        <p className="text-white/50 mt-4 max-w-2xl mx-auto">
          As perguntas mais comuns sobre pneus, servicos automotivos e nossa loja em Curitiba. Clique em qualquer pergunta para ver a resposta completa.
        </p>
      </header>

      {/* Scrolling Container */}
      <div
        className="relative h-[520px] overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 max-w-7xl mx-auto">
          <FAQColumn questions={column1Questions} duration={30} columnIndex={0} onQuestionClick={handleQuestionClick} />
          <FAQColumn questions={column2Questions} duration={38} columnIndex={1} onQuestionClick={handleQuestionClick} />
          <FAQColumn questions={column3Questions} duration={34} columnIndex={2} onQuestionClick={handleQuestionClick} />
          <FAQColumn questions={column4Questions} duration={42} columnIndex={3} onQuestionClick={handleQuestionClick} />
        </div>
      </div>

      {/* FAQ Modal */}
      <FAQModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        currentIndex={currentFaqIndex}
        onNavigate={handleNavigate}
      />

      {/* CSS Animation */}
      <style>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </section>
  );
}
