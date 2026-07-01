import { jsxs, jsx } from "react/jsx-runtime";
import { useParams, Link } from "react-router-dom";
import { SERVICES, TIRES, NEIGHBORHOODS } from "./tire-catalog-f1Gw3RQz.js";
import { SERVICE_CATEGORIES } from "./services-SlP8WPLZ.js";
import { ArrowLeft, MessageSquare, CircleCheck, MapPin, Clock, Shield, Award, ChevronRight, Star, Play, AlertTriangle, Trophy, OctagonX, FlaskConical, Droplet, Timer, Wrench, Settings, Phone } from "lucide-react";
import { N as Navbar, F as Footer } from "./Footer-DkaDSj4_.js";
import { motion } from "motion/react";
import { g as getIcon } from "./iconMap-BowL9SiG.js";
import { L as LiteYouTube } from "./LiteYouTube-C8oiXB0y.js";
import { u as useSEO } from "./useSEO-DsO0176p.js";
import "react";
import "react-helmet-async";
const SERVICE_FAQS = {
  "loja-de-pneus": [
    { pergunta: "Qual o melhor pneu para meu carro em Curitiba?", resposta: "Curitiba tem clima úmido e chuvas frequentes. Recomendamos pneus com bom desempenho em piso molhado como Pirelli Cinturato, Michelin Primacy ou Goodyear EfficientGrip. Nossa equipe na Carplus Portão analisa seu veículo e perfil de uso para indicar o pneu ideal." },
    { pergunta: "Vocês têm pneus para carros importados em Curitiba?", resposta: "Sim! Na nossa loja de pneus no Portão trabalhamos com pneus para BMW, Mercedes, Audi, Volvo, Land Rover e outras marcas premium. Temos medidas especiais como Run Flat e pneus de alta performance em estoque pronta entrega." },
    { pergunta: "Como funciona a garantia dos pneus na Carplus?", resposta: "Todos os pneus vendidos têm garantia de fábrica contra defeitos de fabricação. Além disso, oferecemos garantia própria de montagem por 90 dias. Guardamos o histórico do seu veículo para acompanhamento na nossa loja em Curitiba." },
    { pergunta: "Quais marcas de pneus vocês vendem no Portão?", resposta: "Trabalhamos com as melhores marcas do mercado: Pirelli, Michelin, Goodyear, Continental, Bridgestone, Firestone, Yokohama, Dunlop e Hankook. Temos pneus nacionais e importados para todos os bolsos e necessidades em Curitiba." },
    { pergunta: "Quanto custa um jogo de pneus em Curitiba?", resposta: "O preço varia conforme a medida, marca e modelo do pneu. Temos opções a partir de R$ 250 cada (aro 13/14) até pneus premium acima de R$ 800. Na Carplus Portão oferecemos parcelamento em até 10x sem juros e o melhor custo-benefício da região." },
    { pergunta: "Vocês fazem montagem e balanceamento junto com a venda?", resposta: "Sim! Na compra de pneus na Carplus Curitiba, a montagem e o balanceamento são inclusos no preço. Também oferecemos alinhamento 3D com desconto especial para quem troca os 4 pneus na nossa loja do Portão." },
    { pergunta: "Qual a medida do pneu do meu carro?", resposta: "A medida está na lateral do pneu atual (ex: 195/55R15) ou na etiqueta da porta do motorista. Se tiver dúvida, informe o modelo do carro que consultamos no sistema. Nossa equipe no Portão está pronta para ajudar na escolha certa." },
    { pergunta: "Posso trocar a medida do pneu do meu carro?", resposta: "É possível alterar dentro de limites seguros, mantendo o diâmetro total próximo ao original. Mudanças exageradas afetam velocímetro, consumo e podem até raspar na carroceria. Na Carplus Curitiba orientamos sobre as medidas compatíveis com seu veículo." },
    { pergunta: "Vocês vendem pneus para SUV e caminhonete em Curitiba?", resposta: "Sim! Temos linha completa de pneus para SUVs, crossovers e caminhonetes: pneus AT (all terrain), MT (mud terrain) e HT (highway terrain). Marcas como BF Goodrich, Pirelli Scorpion e Bridgestone Dueler em estoque no Portão." },
    { pergunta: "Qual a diferença entre pneu radial e convencional?", resposta: "Praticamente todos os carros modernos usam pneus radiais, que têm camadas de lona em ângulo reto ao sentido de rodagem. Isso proporciona melhor aderência, durabilidade e conforto. Na Carplus trabalhamos exclusivamente com pneus radiais de qualidade." },
    { pergunta: "Como saber quando preciso trocar os pneus?", resposta: "Verifique o TWI (indicador de desgaste) - quando o pneu atingir essa marca, está no limite legal de 1,6mm. Outros sinais: bolhas na lateral, cortes profundos, desgaste irregular, pneu com mais de 5 anos. Fazemos avaliação gratuita na Carplus Portão." },
    { pergunta: "Vocês aceitam pneu usado na troca em Curitiba?", resposta: "Não compramos pneus usados, mas fazemos o descarte ecológico dos seus pneus velhos sem custo adicional. Os pneus são destinados para reciclagem conforme exigências ambientais. Esse serviço está incluso na compra de pneus novos na Carplus." }
  ],
  "alinhamento-e-balanceamento": [
    { pergunta: "Como saber se meu carro precisa de alinhamento em Curitiba?", resposta: "Os sinais mais comuns são: volante torto com o carro em linha reta, carro puxando para um lado, desgaste irregular dos pneus (mais de um lado que do outro) e vibração no volante. Recomendamos verificar o alinhamento a cada 10.000 km ou 6 meses na Carplus Portão." },
    { pergunta: "Qual a diferença entre alinhamento 3D e convencional?", resposta: "O alinhamento 3D usa câmeras de alta precisão que medem todos os ângulos simultaneamente em três dimensões. Isso garante resultado muito mais preciso que o sistema convencional, especialmente em veículos modernos com suspensão multilink. Na Carplus Curitiba usamos equipamento Hunter 3D." },
    { pergunta: "Preciso alinhar após trocar pneus?", resposta: "Sim, sempre recomendamos fazer alinhamento junto com a troca de pneus. Pneus novos em um carro desalinhado vão desgastar irregularmente desde o primeiro dia. Na Carplus Portão oferecemos pacote com desconto para troca de pneus + alinhamento." },
    { pergunta: "Quanto custa um alinhamento e balanceamento em Curitiba?", resposta: "O valor do alinhamento e balanceamento na Carplus é um dos mais competitivos do Portão e região sul de Curitiba. Oferecemos preço justo com equipamento de primeira linha. Entre em contato pelo WhatsApp para orçamento atualizado." },
    { pergunta: "Alinhamento e balanceamento são a mesma coisa?", resposta: "Não. O alinhamento ajusta os ângulos das rodas em relação ao solo e entre si (convergência, câmber, cáster). O balanceamento distribui o peso do conjunto roda-pneu uniformemente para evitar vibrações. Na Carplus Curitiba fazemos os dois serviços com excelência." },
    { pergunta: "De quanto em quanto tempo devo fazer balanceamento?", resposta: "Recomendamos balancear a cada 10.000 km, na troca de pneus, após consertar um pneu furado ou quando sentir vibração no volante ou no assoalho. As ruas de Curitiba com buracos podem desbalancear os pneus mais rapidamente." },
    { pergunta: "O que é câmber, cáster e convergência?", resposta: "São os três ângulos principais do alinhamento. Câmber: inclinação da roda vista de frente. Cáster: inclinação do pino mestre vista de lado. Convergência: direção das rodas vista de cima. Cada veículo tem especificações próprias que seguimos na Carplus Portão." },
    { pergunta: "Meu carro puxa para a direita, é problema de alinhamento?", resposta: "Geralmente sim, mas pode ser também pressão diferente entre os pneus ou problema na suspensão. Na Carplus Curitiba fazemos diagnóstico completo: verificamos pressão, suspensão e depois o alinhamento para identificar a causa correta." },
    { pergunta: "Alinhamento resolve desgaste irregular de pneu?", resposta: "O alinhamento correto previne novos desgastes irregulares, mas não reverte o dano já existente. Por isso é importante alinhar preventivamente. Se o pneu já está gasto de forma irregular, o ideal é trocar e alinhar na sequência na Carplus." },
    { pergunta: "Vocês fazem alinhamento em carros rebaixados?", resposta: "Sim! Temos experiência com carros rebaixados e equipamento que permite ajustes fora dos parâmetros convencionais. É importante que a suspensão rebaixada esteja bem instalada para que o alinhamento seja efetivo. Atendemos no Portão, Curitiba." },
    { pergunta: "Quanto tempo leva o alinhamento e balanceamento?", resposta: "O serviço completo de alinhamento e balanceamento leva em média 40 a 60 minutos na Carplus Curitiba. Se houver necessidade de ajustes na suspensão, pode levar um pouco mais. Trabalhamos com agilidade sem comprometer a qualidade." },
    { pergunta: "Precisa agendar para fazer alinhamento no Portão?", resposta: "Não é obrigatório, mas recomendamos agendar pelo WhatsApp para evitar espera, especialmente aos sábados. A Carplus atende de segunda a sexta das 8h às 18h e sábados das 8h às 12h no bairro Portão em Curitiba." }
  ],
  "balanceamento": [
    { pergunta: "O que é balanceamento de rodas e para que serve?", resposta: "O balanceamento é o processo de distribuir uniformemente o peso do conjunto roda-pneu. Elimina vibrações no volante e no assoalho, proporciona mais conforto, protege os componentes da suspensão e aumenta a vida útil dos pneus. Na Carplus Curitiba usamos balanceadora computadorizada de precisão." },
    { pergunta: "Quais os sintomas de rodas desbalanceadas?", resposta: "Os principais sinais são: vibração no volante em velocidades específicas (geralmente acima de 80 km/h), trepidação no assoalho, ruído nas rodas e desgaste irregular nos pneus. Se sentir algum desses sintomas, procure a Carplus no Portão para avaliação." },
    { pergunta: "De quanto em quanto km devo balancear as rodas?", resposta: "Recomendamos balancear a cada 10.000 km ou sempre que sentir vibração. Também é necessário após trocar ou consertar pneus, remover rodas para manutenção de freios ou batidas fortes em buracos. As condições das ruas de Curitiba exigem atenção frequente." },
    { pergunta: "Qual a diferença entre balanceamento estático e dinâmico?", resposta: "O estático corrige apenas o desequilíbrio vertical (peso para cima/baixo). O dinâmico corrige também o lateral (peso para os lados). Na Carplus Curitiba fazemos balanceamento dinâmico computadorizado, que é o mais completo e preciso disponível." },
    { pergunta: "Quanto custa o balanceamento em Curitiba?", resposta: "O balanceamento na Carplus Portão tem preço acessível e competitivo. O valor varia conforme o aro da roda. Oferecemos pacote promocional para balanceamento das 4 rodas. Entre em contato pelo WhatsApp para orçamento atualizado." },
    { pergunta: "Balanceamento é feito com o pneu na roda ou fora?", resposta: "O balanceamento é feito com o pneu montado na roda, simulando as condições reais de uso. A máquina gira o conjunto em alta velocidade e indica onde devem ser colocados os contrapesos para equilibrar. Na Carplus usamos equipamento de última geração." },
    { pergunta: "O que são os pesos de balanceamento?", resposta: "São pequenos contrapesos de chumbo ou zinco fixados na roda para compensar diferenças de peso. Podem ser de clip (presos na borda) ou adesivos (colados internamente). Na Carplus Curitiba escolhemos o tipo adequado para cada roda." },
    { pergunta: "Roda de liga leve precisa de balanceamento especial?", resposta: "Rodas de liga leve geralmente usam contrapesos adesivos internos para preservar a estética. O processo de balanceamento é o mesmo, mas requer cuidado para não riscar a roda. Na Carplus Portão temos experiência com todos os tipos de rodas." },
    { pergunta: "Por que a vibração some em certas velocidades?", resposta: "Cada velocidade gera uma frequência de rotação diferente. O desbalanceamento pode coincidir com a frequência de ressonância apenas em determinadas faixas de velocidade. Um balanceamento correto elimina a vibração em todas as velocidades na Carplus." },
    { pergunta: "Posso balancear só as rodas dianteiras?", resposta: "Recomendamos balancear as 4 rodas, pois desequilíbrio traseiro também causa vibração e desgaste irregular. Além disso, as rodas são rotacionadas periodicamente. Na Carplus Curitiba o pacote das 4 rodas tem melhor custo-benefício." },
    { pergunta: "Balanceamento resolve problema de direção pesada?", resposta: "Não. Direção pesada geralmente indica problema na caixa de direção, bomba hidráulica ou falta de fluido. O balanceamento resolve apenas vibrações. Na Carplus Portão fazemos diagnóstico completo para identificar a causa correta do problema." },
    { pergunta: "Vocês fazem balanceamento de rodas aro 20 e 22?", resposta: "Sim! Nossa balanceadora comporta rodas de todos os aros, incluindo aro 20, 21 e 22 comuns em SUVs e carros esportivos. Atendemos todas as medidas na Carplus, localizada no bairro Portão em Curitiba." }
  ],
  "venda-de-pneus": [
    { pergunta: "Quais marcas de pneus a Carplus vende em Curitiba?", resposta: "Trabalhamos com as melhores marcas: Pirelli, Michelin, Goodyear, Continental, Bridgestone, Firestone, Yokohama, Dunlop, Hankook e Nexen. Temos opções para todos os perfis e orçamentos na nossa loja do Portão, Curitiba." },
    { pergunta: "Vocês têm pneus em estoque ou precisa encomendar?", resposta: "Mantemos estoque próprio com mais de 500 pneus das medidas mais procuradas para pronta entrega. Medidas especiais ou específicas de importados podem precisar de encomenda com prazo de 1-3 dias. Consulte disponibilidade pelo WhatsApp." },
    { pergunta: "Qual pneu é melhor para uso urbano em Curitiba?", resposta: "Para uso urbano em Curitiba recomendamos pneus com bom desempenho em piso molhado e durabilidade no asfalto: Pirelli Cinturato P1/P7, Michelin Primacy 4, Goodyear EfficientGrip ou Continental ContiPowerContact. Nossa equipe no Portão ajuda na escolha ideal." },
    { pergunta: "Como é a garantia dos pneus novos?", resposta: "Todos os pneus têm garantia de fábrica contra defeitos de fabricação (geralmente 5 anos). Além disso, a Carplus oferece garantia própria de montagem por 90 dias. Guardamos o histórico do seu veículo no sistema para acompanhamento." },
    { pergunta: "Vocês parcelam a compra de pneus?", resposta: "Sim! Parcelamos em até 10x sem juros nos cartões de crédito. Também aceitamos Pix, débito e dinheiro com condições especiais. A Carplus Curitiba oferece as melhores condições de pagamento da região do Portão." },
    { pergunta: "Posso levar os pneus para montar em outro lugar?", resposta: "Pode, mas não recomendamos. A montagem correta é fundamental para segurança e durabilidade. Quando você compra e monta na Carplus, tem garantia total do conjunto e acompanhamento técnico completo. Nosso preço já inclui montagem e balanceamento." },
    { pergunta: "Vocês vendem pneus para moto em Curitiba?", resposta: "Nossa especialidade é pneus para carros, SUVs e caminhonetes. Para motos, recomendamos procurar lojas especializadas. A Carplus foca em oferecer a melhor qualidade em pneus automotivos no Portão e região." },
    { pergunta: "Qual a diferença entre pneu simétrico e assimétrico?", resposta: "O pneu simétrico tem desenho igual dos dois lados e pode ser montado em qualquer posição. O assimétrico tem lado interno e externo definidos, otimizando aderência em curvas e drenagem de água. Na Carplus montamos sempre na posição correta." },
    { pergunta: "O que significa o número na lateral do pneu?", resposta: "Ex: 195/55R15 - 195 é a largura em mm, 55 é a proporção altura/largura em %, R indica radial e 15 é o aro em polegadas. Também há índices de carga e velocidade. Nossa equipe no Portão explica todos os detalhes na hora da compra." },
    { pergunta: "Vocês vendem pneu run flat em Curitiba?", resposta: "Sim! Trabalhamos com pneus Run Flat das principais marcas para BMW, Mercedes, Mini e outros veículos que usam essa tecnologia. Temos montadores especializados para esse tipo de pneu na Carplus Portão." },
    { pergunta: "Pneu mais caro dura mais?", resposta: "Geralmente sim, mas depende do seu perfil de uso. Pneus premium oferecem melhor aderência, durabilidade e conforto. Mas um pneu intermediário bem cuidado pode atender perfeitamente ao uso urbano. Na Carplus ajudamos a escolher o melhor custo-benefício." },
    { pergunta: "Como funciona a entrega de pneus em Curitiba?", resposta: "Não fazemos entrega, pois o pneu precisa ser montado corretamente. Venha até a Carplus no Portão para comprar, montar, balancear e alinhar tudo no mesmo lugar. Assim você sai com o serviço completo e garantia total." }
  ],
  "troca-de-oleo": [
    { pergunta: "De quanto em quanto tempo devo trocar o óleo em Curitiba?", resposta: "Para óleo mineral: a cada 5.000 km ou 6 meses. Para semi-sintético: a cada 7.500 km ou 6 meses. Para sintético: a cada 10.000 km ou 12 meses. Sempre prevalece o que acontecer primeiro. Em Curitiba, com muito trânsito no Portão e região, recomendamos intervalos menores." },
    { pergunta: "Qual óleo é melhor: mineral, semi-sintético ou sintético?", resposta: "O sintético oferece melhor proteção, especialmente em partidas a frio (comum no inverno de Curitiba). Porém, o manual do veículo indica a especificação mínima. Carros mais novos geralmente exigem sintético. Na Carplus consultamos a especificação correta para seu modelo." },
    { pergunta: "Vocês trocam óleo de câmbio automático?", resposta: "Sim! Realizamos troca de óleo de câmbio automático e CVT com fluidos específicos para cada marca. É um serviço especializado que muitas oficinas não fazem. Recomendado a cada 60.000 km. Na Carplus Curitiba temos experiência com todas as transmissões." },
    { pergunta: "Quais marcas de óleo vocês usam na Carplus?", resposta: "Trabalhamos com as melhores marcas: Mobil 1, Shell Helix Ultra, Castrol Edge, Petronas Syntium e Selenia para Fiat. Todos os óleos têm especificação API e ACEA atualizadas. Na nossa oficina no Portão você escolhe a marca de sua preferência." },
    { pergunta: "O filtro de óleo é trocado junto?", resposta: "Sempre! Na Carplus Curitiba a troca do filtro de óleo está inclusa em toda troca de óleo. Usar filtro velho com óleo novo compromete a lubrificação. Utilizamos filtros de qualidade compatíveis com cada veículo." },
    { pergunta: "Quanto custa a troca de óleo em Curitiba?", resposta: "O valor varia conforme o tipo de óleo (mineral, semi ou sintético) e a quantidade necessária para seu veículo (geralmente 3 a 5 litros). Na Carplus Portão oferecemos preço justo com óleo de primeira linha. Consulte pelo WhatsApp." },
    { pergunta: "Meu carro está consumindo óleo, o que pode ser?", resposta: "Consumo de óleo pode indicar: retentores de válvula gastos, anéis de pistão desgastados, vazamento externo ou turbo com folga. Na Carplus fazemos diagnóstico para identificar a causa. Um carro normal consome no máximo 1 litro a cada 3.000 km." },
    { pergunta: "Posso misturar óleos de marcas diferentes?", resposta: "Não é recomendado. Embora óleos de mesma especificação sejam compatíveis, a mistura pode alterar as propriedades. Se precisar completar, use a mesma marca e tipo. Na troca completa na Carplus Curitiba removemos todo o óleo antigo." },
    { pergunta: "O que é a especificação 5W30, 10W40?", resposta: "O primeiro número indica a viscosidade a frio (5W é mais fino que 10W, melhor para Curitiba no inverno). O segundo indica a viscosidade a quente. Cada motor tem especificação definida pelo fabricante. Na Carplus usamos sempre o óleo recomendado." },
    { pergunta: "Vocês verificam outros fluidos na troca de óleo?", resposta: "Sim! Na Carplus Curitiba, toda troca de óleo inclui verificação gratuita dos níveis de fluido de freio, direção hidráulica, arrefecimento e limpador de para-brisa. Também conferimos a pressão dos pneus e luzes externas." },
    { pergunta: "Quanto tempo leva a troca de óleo?", resposta: "A troca de óleo completa leva em média 20 a 30 minutos na Carplus Portão. Inclui drenagem do óleo velho, troca do filtro, abastecimento com óleo novo e verificação de nível. Você pode aguardar confortavelmente na nossa recepção." },
    { pergunta: "Vocês colocam adesivo de próxima troca?", resposta: "Sim! Colamos etiqueta no canto do para-brisa com a data e quilometragem da próxima troca recomendada. Também registramos no histórico do seu veículo no nosso sistema. Assim você não esquece a manutenção preventiva." }
  ],
  "manutencao-de-freios": [
    { pergunta: "Como saber se os freios do meu carro precisam de manutenção?", resposta: "Sinais de alerta: ruído metálico ao frear, pedal muito baixo ou esponjoso, carro puxando para um lado ao frear, vibração no pedal ou volante, luz de freio acesa no painel. Ao perceber qualquer sintoma, procure a Carplus no Portão para diagnóstico." },
    { pergunta: "Quando devo trocar as pastilhas de freio?", resposta: "As pastilhas devem ser verificadas a cada 20.000 km. A espessura mínima segura é 3mm. Sinais de desgaste: ruído ao frear, pedal baixo, luz no painel. Carros modernos têm sensor que avisa. Na Carplus Curitiba fazemos medição precisa." },
    { pergunta: "É seguro trocar só as pastilhas sem trocar os discos?", resposta: "Depende do estado dos discos. Se estiverem dentro da medida mínima (verificamos com paquímetro) e sem ranhuras profundas, podem ser reaproveitados. Discos muito finos ou danificados devem ser trocados junto. Na Carplus avaliamos cada caso." },
    { pergunta: "Quanto tempo dura um disco de freio?", resposta: "Em média, um disco dura de 2 a 3 trocas de pastilha, ou cerca de 60.000 a 80.000 km. Isso varia conforme o estilo de direção, qualidade das pastilhas e condições de uso. Em Curitiba, com muitas ladeiras, o desgaste pode ser maior." },
    { pergunta: "O que é retífica de disco e quando é indicada?", resposta: "A retífica usina a superfície do disco, removendo ranhuras e irregularidades. É indicada quando o disco tem ranhuras mas ainda está acima da medida mínima. Na Carplus Portão temos equipamento próprio de retífica, solução mais econômica que a troca." },
    { pergunta: "Meu carro faz barulho ao frear, o que pode ser?", resposta: "Ruído pode indicar: pastilhas gastas (chiado metálico), disco empenado (vibração), sujeira entre pastilha e disco (ruído eventual), pastilha de baixa qualidade (chiado contínuo). Na Carplus Curitiba diagnosticamos a causa exata." },
    { pergunta: "Vocês fazem manutenção de freio ABS?", resposta: "Sim! Realizamos diagnóstico e reparo do sistema ABS com scanner específico. Verificamos sensores, módulo hidráulico e fiação. O ABS é fundamental para segurança e deve estar sempre funcionando. Atendemos todas as marcas no Portão." },
    { pergunta: "De quanto em quanto tempo devo trocar o fluido de freio?", resposta: "A recomendação é trocar a cada 2 anos ou 40.000 km. O fluido absorve umidade com o tempo, perdendo eficiência e causando corrosão interna. Em Curitiba, com alta umidade, esse cuidado é ainda mais importante. Fazemos o serviço na Carplus." },
    { pergunta: "O que causa o pedal de freio ficar esponjoso?", resposta: "Pedal esponjoso indica ar no sistema hidráulico. Causas: vazamento, fluido velho, sangria mal feita, cilindro mestre com defeito. Na Carplus Curitiba fazemos sangria completa do sistema e verificamos todos os componentes." },
    { pergunta: "Freio de mão também precisa de manutenção?", resposta: "Sim! O freio de estacionamento usa cabos que esticam com o tempo e sapatas que desgastam. Recomendamos ajustar a cada 20.000 km. Se o freio de mão não segura mais o carro em ladeira, procure a Carplus no Portão para regulagem." },
    { pergunta: "Quais marcas de pastilhas vocês usam?", resposta: "Trabalhamos com pastilhas de primeira linha: Bosch, TRW, Fras-Le, Cobreq e originais. Todas com certificação de qualidade e nota fiscal. Na Carplus Curitiba usamos apenas peças que garantem frenagem segura e durabilidade." },
    { pergunta: "Quanto custa a manutenção de freios em Curitiba?", resposta: "O valor varia conforme o serviço necessário: troca de pastilhas, discos, fluido, reparo de pinças etc. Na Carplus Portão fazemos diagnóstico gratuito antes do orçamento. Você aprova apenas o necessário, com preço justo e transparente." }
  ],
  "troca-de-fluido-de-freio": [
    { pergunta: "Com que frequência devo trocar o fluido de freio?", resposta: "A recomendação geral é trocar a cada 2 anos ou 40.000 km, o que ocorrer primeiro. Em Curitiba, com alta umidade, a contaminação do fluido pode ser mais rápida. Alguns fabricantes recomendam intervalos menores. Na Carplus Portão verificamos a especificação do seu veículo." },
    { pergunta: "O que acontece se eu não trocar o fluido de freio?", resposta: "O fluido contaminado com umidade pode ferver em frenagens intensas (descidas longas, uso pesado), causando bolhas de vapor no sistema. Isso resulta em perda total ou parcial da capacidade de frenagem - extremamente perigoso. Além disso, a umidade causa corrosão interna em cilindros e pinças." },
    { pergunta: "Qual a diferença entre DOT3 e DOT4?", resposta: "O DOT4 tem ponto de ebulição mais alto que o DOT3, sendo mais resistente ao fading. Carros com freios ABS e sistemas mais modernos geralmente requerem DOT4. Nunca misture tipos diferentes. Na Carplus Curitiba usamos sempre o fluido especificado pelo fabricante." },
    { pergunta: "Como saber se o fluido de freio precisa ser trocado?", resposta: "Sinais de fluido velho: cor escura (o novo é claro/amarelado), pedal de freio esponjoso ou que afunda, perda de eficiência em frenagens longas. Na Carplus Portão fazemos teste de umidade com equipamento específico para diagnóstico preciso." },
    { pergunta: "O que é sangria do sistema de freios?", resposta: "A sangria é o processo de remover todo o fluido velho e o ar do sistema hidráulico. É feita abrindo os purgadores de cada roda em sequência específica enquanto se pressiona o pedal. Na Carplus fazemos sangria completa das 4 rodas." },
    { pergunta: "Quanto custa trocar o fluido de freio em Curitiba?", resposta: "O valor inclui o fluido DOT3 ou DOT4 de qualidade (Bosch, TRW, Varga) e a mão de obra da sangria completa. Na Carplus Portão o preço é justo e competitivo. Consulte pelo WhatsApp para orçamento atualizado." },
    { pergunta: "Posso trocar o fluido de freio sozinho?", resposta: "Não recomendamos. A sangria requer técnica específica e duas pessoas. Ar no sistema compromete totalmente a frenagem. Na Carplus Curitiba temos equipamento e experiência para fazer o serviço corretamente com segurança." },
    { pergunta: "O fluido de freio estraga a pintura do carro?", resposta: "Sim! O fluido de freio é corrosivo e danifica a pintura em segundos. Por isso o serviço deve ser feito com cuidado. Na Carplus Portão protegemos todas as superfícies pintadas durante a troca. Em caso de respingo, lavamos imediatamente." },
    { pergunta: "Dá para misturar fluido DOT3 com DOT4?", resposta: "Tecnicamente são compatíveis, mas não é recomendado. A mistura reduz o ponto de ebulição do DOT4. O ideal é usar sempre o mesmo tipo e marca. Na Carplus Curitiba fazemos troca completa com fluido novo, sem mistura." },
    { pergunta: "Quanto tempo leva a troca de fluido de freio?", resposta: "A troca completa com sangria das 4 rodas leva em média 30 a 45 minutos na Carplus Portão. Inclui verificação de vazamentos e teste do pedal. Você pode aguardar na nossa recepção com café e Wi-Fi." },
    { pergunta: "Vocês verificam outros componentes do freio junto?", resposta: "Sim! Na troca de fluido aproveitamos para verificar espessura das pastilhas, estado dos discos, flexíveis e cilindros. Se encontrarmos algum problema, informamos antes de qualquer serviço adicional. Diagnóstico transparente na Carplus." },
    { pergunta: "O fluido de freio tem validade fechado?", resposta: "Sim, cerca de 5 anos lacrado. Uma vez aberto, absorve umidade rapidamente e deve ser usado logo. Por isso na Carplus Curitiba usamos sempre fluido de embalagem nova, garantindo máxima qualidade no seu veículo." }
  ],
  "revisao-de-suspensao": [
    { pergunta: "Como saber se a suspensão do meu carro está com problema?", resposta: "Sinais de suspensão desgastada: carro balança muito em lombadas, instabilidade em curvas, barulhos ao passar em buracos, pneus com desgaste irregular, vazamento de óleo nos amortecedores. Se notar algum desses sintomas, procure a Carplus Portão para diagnóstico." },
    { pergunta: "Quando devo fazer revisão de suspensão?", resposta: "Recomendamos revisão a cada 20.000 km ou anualmente. Em Curitiba, com ruas cheias de buracos, especialmente na região do Portão, a suspensão sofre mais. Após bater em buraco grande, também vale verificar." },
    { pergunta: "O que é verificado na revisão de suspensão?", resposta: "Na Carplus Curitiba verificamos: amortecedores, molas, buchas, pivôs, terminais de direção, barra estabilizadora, bieletas, coifas, batentes e todos os componentes do sistema. Fazemos relatório detalhado com fotos." },
    { pergunta: "Quanto tempo dura um amortecedor?", resposta: "Em média, amortecedores duram de 40.000 a 60.000 km, dependendo das condições de uso. Em Curitiba, com muitos buracos, podem desgastar mais rápido. Sinais de amortecedor ruim: vazamento, instabilidade, ruídos. Verificamos na Carplus Portão." },
    { pergunta: "Preciso trocar os 4 amortecedores de uma vez?", resposta: "Recomendamos trocar pelo menos em pares (os dois dianteiros ou os dois traseiros) para manter o equilíbrio do veículo. Se um lado está ruim, o outro provavelmente também está próximo do fim. Na Carplus avaliamos cada caso." },
    { pergunta: "O que são buchas de suspensão?", resposta: "Buchas são peças de borracha que absorvem impactos e vibrações nas articulações da suspensão. Com o tempo, ressecam e racham, causando ruídos e folgas. Na Carplus Curitiba trocamos buchas de todas as marcas e modelos." },
    { pergunta: "Meu carro faz barulho em lombadas, o que pode ser?", resposta: "Barulhos na suspensão podem indicar: buchas gastas, batentes ressecados, bieletas frouxas, amortecedor vazio, mola quebrada. Na Carplus Portão fazemos diagnóstico em elevador para identificar a peça com problema." },
    { pergunta: "Quanto custa a revisão de suspensão em Curitiba?", resposta: "A revisão (verificação) é gratuita na Carplus. Se houver necessidade de troca de peças, fazemos orçamento detalhado antes. Trabalhamos com peças de qualidade a preço justo. Você aprova apenas o que concordar." },
    { pergunta: "Vocês trocam suspensão de carros rebaixados?", resposta: "Sim! Temos experiência com suspensões esportivas, molas rebaixadas e kits de rosca. Também regularizamos suspensões mal feitas. Atendemos no bairro Portão em Curitiba carros de todas as marcas." },
    { pergunta: "O que é barra estabilizadora?", resposta: "A barra estabilizadora conecta os dois lados da suspensão e reduz a inclinação do carro em curvas. Suas bieletas e buchas desgastam com o tempo, causando ruídos e perda de estabilidade. Verificamos e trocamos na Carplus Curitiba." },
    { pergunta: "Suspensão ruim afeta o alinhamento?", resposta: "Sim! Componentes de suspensão gastos alteram os ângulos das rodas, causando desalinhamento mesmo após alinhar. Por isso na Carplus Portão sempre verificamos a suspensão antes do alinhamento e só liberamos quando está OK." },
    { pergunta: "Posso dirigir com a suspensão fazendo barulho?", resposta: "Depende do problema. Algumas peças permitem dirigir com cuidado até o reparo, outras são perigosas. Na dúvida, procure a Carplus no Portão para avaliação. Nunca ignore barulhos na suspensão por muito tempo." }
  ],
  "troca-de-amortecedores": [
    { pergunta: "Como saber se os amortecedores estão ruins?", resposta: "Sinais de amortecedores gastos: carro balança muito em lombadas, instabilidade em curvas, pneus com desgaste irregular nas bordas, ruídos ao passar em buracos, vazamento de óleo e aumento da distância de frenagem. Na Carplus Portão fazemos diagnóstico completo." },
    { pergunta: "Quando devo trocar os amortecedores?", resposta: "Recomendamos verificar a cada 40.000 km e trocar quando apresentarem vazamento ou perda de eficiência. Em Curitiba, com ruas esburacadas, o desgaste é maior. Na Carplus fazemos teste prático e visual para avaliar." },
    { pergunta: "Preciso trocar os 4 amortecedores juntos?", resposta: "Idealmente sim, mas no mínimo em pares (dianteiros ou traseiros). Trocar apenas um lado causa desequilíbrio e desgaste irregular. Na Carplus Curitiba avaliamos o estado de cada amortecedor e recomendamos o melhor custo-benefício." },
    { pergunta: "Quais marcas de amortecedor vocês trabalham?", resposta: "Trabalhamos com as melhores marcas: Cofap, Monroe, Kayaba (KYB), Sachs e originais. Todas com garantia de fábrica. Na Carplus Portão indicamos a melhor opção conforme seu veículo e uso." },
    { pergunta: "Quanto tempo leva a troca de amortecedores?", resposta: "A troca dos 4 amortecedores leva em média 2 a 4 horas, dependendo do modelo do veículo. Alguns carros têm acesso mais difícil. Na Carplus Curitiba você pode aguardar ou deixar o carro e buscar depois." },
    { pergunta: "Devo trocar as molas junto com os amortecedores?", resposta: "Não necessariamente. As molas duram mais que os amortecedores. Porém, se estiverem cedidas, quebradas ou se o carro estiver baixo de um lado, devem ser trocadas. Na Carplus Portão verificamos e orientamos." },
    { pergunta: "E os batentes e coifas, também troca?", resposta: "Sim! Batentes e coifas protegem os amortecedores e devem ser trocados junto, pois geralmente estão gastos. Na Carplus Curitiba o kit completo (amortecedor + batente + coifa) tem melhor custo-benefício e maior durabilidade." },
    { pergunta: "Preciso fazer alinhamento após trocar amortecedores?", resposta: "Sim, recomendamos fortemente. A troca de amortecedores pode alterar a geometria das rodas. O alinhamento garante que os pneus novos ou existentes não desgastem irregularmente. Na Carplus fazemos pacote completo com desconto." },
    { pergunta: "Quanto custa trocar amortecedores em Curitiba?", resposta: "O valor depende da marca do amortecedor e do modelo do veículo (alguns têm mão de obra mais complexa). Na Carplus Portão fazemos orçamento detalhado sem compromisso. Trabalhamos com preço justo e parcelamento." },
    { pergunta: "Amortecedor a gás é melhor que a óleo?", resposta: "O amortecedor a gás tem resposta mais firme e é indicado para quem busca dirigibilidade esportiva. O de óleo é mais confortável para uso urbano. Na Carplus Curitiba ajudamos a escolher conforme seu perfil de uso." },
    { pergunta: "Amortecedor recondicionado é confiável?", resposta: "Não recomendamos. O recondicionado tem vida útil muito menor e pode falhar. Na Carplus trabalhamos apenas com amortecedores novos e de qualidade, com garantia de fábrica. Segurança não tem economia." },
    { pergunta: "Posso dirigir com amortecedor vazando?", resposta: "É perigoso. Amortecedor vazando perde eficiência progressivamente, aumentando distância de frenagem e causando instabilidade. Em chuva ou emergência, o risco de acidente aumenta muito. Procure a Carplus Portão urgentemente." }
  ],
  "troca-de-pastilha-de-freio": [
    { pergunta: "Quando devo trocar as pastilhas de freio?", resposta: "As pastilhas devem ser verificadas a cada 20.000 km. A espessura mínima segura é 3mm. Sinais de troca: ruído metálico ao frear, pedal mais baixo, luz no painel (carros com sensor). Na Carplus Portão fazemos medição precisa com paquímetro." },
    { pergunta: "Posso trocar só as pastilhas dianteiras?", resposta: "Sim, as dianteiras desgastam mais rápido (fazem 60-70% da frenagem). Porém, sempre verificamos as traseiras também. Na Carplus Curitiba trocamos apenas o necessário, com diagnóstico honesto e transparente." },
    { pergunta: "Quais marcas de pastilhas vocês usam?", resposta: "Trabalhamos com pastilhas de primeira linha: Bosch, TRW, Fras-Le, Cobreq e originais. Todas com certificação de qualidade e durabilidade comprovada. Na Carplus Portão usamos apenas peças que garantem frenagem segura." },
    { pergunta: "Pastilha cerâmica é melhor que orgânica?", resposta: "Cerâmica produz menos pó e ruído, mas é mais cara. Orgânica tem boa eficiência e custo menor. Semi-metálica dura mais mas é mais agressiva ao disco. Na Carplus Curitiba indicamos o tipo ideal para seu uso." },
    { pergunta: "Quanto tempo leva a troca de pastilhas?", resposta: "A troca das pastilhas dianteiras leva em média 40 a 60 minutos. Com as traseiras, cerca de 1h30. Na Carplus Portão você pode aguardar na recepção com café e Wi-Fi ou buscar depois." },
    { pergunta: "Preciso trocar o disco junto com a pastilha?", resposta: "Só se o disco estiver abaixo da medida mínima ou com danos (trincas, ranhuras profundas, empenamento). Na Carplus Curitiba medimos o disco e mostramos o resultado. Trocamos apenas o necessário." },
    { pergunta: "Quanto custa trocar pastilhas de freio em Curitiba?", resposta: "O valor varia conforme o veículo e a marca da pastilha escolhida. Na Carplus Portão fazemos orçamento gratuito e trabalhamos com opções para diferentes orçamentos, sempre com qualidade garantida." },
    { pergunta: "Por que minha pastilha nova está fazendo barulho?", resposta: "Pastilhas novas podem fazer ruído nos primeiros 200-500 km (período de assentamento). Se persistir, pode ser pastilha de baixa qualidade, disco irregular ou falta de graxa nos pontos de apoio. Volte na Carplus para verificarmos." },
    { pergunta: "Vocês aplicam graxa nas pastilhas?", resposta: "Sim! Aplicamos graxa especial nos pontos de contato para evitar ruídos. Também verificamos e lubrificamos as guias da pinça. Esse cuidado faz diferença na qualidade do serviço da Carplus Curitiba." },
    { pergunta: "A troca de pastilha altera o nível do fluido?", resposta: "Ao recolher o êmbolo da pinça para encaixar pastilhas novas, o fluido sobe no reservatório. Verificamos o nível antes e depois. Se necessário, retiramos um pouco para não transbordar. Serviço completo na Carplus." },
    { pergunta: "Dá para trocar pastilha em casa?", resposta: "Tecnicamente sim, mas requer ferramentas específicas e conhecimento. Freio mal feito é extremamente perigoso. Na Carplus Portão o serviço tem preço acessível, garantia e você tem certeza de que está seguro." },
    { pergunta: "Vocês guardam a pastilha velha para eu ver?", resposta: "Sim! Na Carplus Curitiba mostramos as peças trocadas para você ver o desgaste. Transparência é nosso compromisso. Você acompanha todo o serviço se quiser." }
  ],
  "ar-condicionado": [
    { pergunta: "Por que meu ar-condicionado não gela mais?", resposta: "As causas mais comuns são: falta de gás refrigerante (vazamento), filtro de cabine entupido, condensador sujo ou compressor com defeito. Na Carplus Portão fazemos diagnóstico completo para identificar a causa antes de qualquer reparo." },
    { pergunta: "Com que frequência devo fazer manutenção no ar?", resposta: "Recomendamos: higienização a cada 6 meses ou no início de cada estação, troca de filtro de cabine anual, verificação de gás anual. Em Curitiba, com alta umidade, a higienização é especialmente importante." },
    { pergunta: "O que causa mau cheiro no ar-condicionado?", resposta: "O mau cheiro é causado por fungos e bactérias que se proliferam no evaporador úmido. A solução é a higienização completa do sistema com produto bactericida. Em casos graves, na Carplus fazemos limpeza manual do evaporador." },
    { pergunta: "Quanto custa carregar o ar-condicionado em Curitiba?", resposta: "O valor da carga de gás depende da quantidade necessária e do tipo de gás (R134a ou R1234yf). Na Carplus Portão fazemos diagnóstico primeiro para verificar se há vazamento, evitando gastos desnecessários." },
    { pergunta: "O que é gás R1234yf?", resposta: "É o novo gás refrigerante ecológico obrigatório em carros a partir de 2017. Tem menor impacto ambiental mas custa mais que o R134a. Na Carplus Curitiba trabalhamos com os dois tipos de gás." },
    { pergunta: "Meu ar-condicionado faz barulho, o que pode ser?", resposta: "Barulhos podem indicar: correia do compressor gasta, compressor com defeito, ventilador do condensador com problema ou peças soltas. Na Carplus Portão diagnosticamos a origem do ruído antes do reparo." },
    { pergunta: "O filtro de cabine é o mesmo que filtro de ar?", resposta: "Não. O filtro de cabine (antipólen) filtra o ar que entra no habitáculo pelo ar-condicionado. O filtro de ar é do motor. Na Carplus Curitiba trocamos os dois com peças de qualidade." },
    { pergunta: "Quanto tempo leva a higienização do ar?", resposta: "A higienização completa leva cerca de 30 a 40 minutos. Inclui aplicação de produto bactericida no sistema e limpeza das saídas de ar. Na Carplus Portão o carro sai com ar fresco e saudável." },
    { pergunta: "Ar-condicionado gasta muito combustível?", resposta: "O compressor consome em média 5-10% a mais de combustível quando ligado. Para economizar, use o ar na função recirculação quando possível. Na Carplus Curitiba verificamos se o sistema está funcionando eficientemente." },
    { pergunta: "Posso ligar o ar-condicionado no inverno?", resposta: "Sim e deve! O ar-condicionado também serve para desembaçar os vidros, removendo a umidade do ar. Além disso, ligar pelo menos 10 minutos por semana mantém o sistema lubrificado e previne vazamentos." },
    { pergunta: "Vocês reparam compressor de ar-condicionado?", resposta: "Avaliamos caso a caso. Se viável, fazemos reparo. Caso contrário, indicamos troca. Na Carplus Curitiba trabalhamos com compressores novos e remanufaturados de qualidade, com garantia." },
    { pergunta: "Como detectar vazamento no ar-condicionado?", resposta: "Usamos gás traçador com corante UV e lâmpada especial que revela vazamentos invisíveis a olho nu. Na Carplus Portão esse diagnóstico preciso evita gastos com cargas de gás repetidas." }
  ],
  "cambagem-e-caster": [
    { pergunta: "O que é cambagem e caster?", resposta: "Cambagem é o ângulo de inclinação das rodas visto de frente (para dentro ou fora). Caster é o ângulo de inclinação do pino mestre visto de lado. Ambos afetam estabilidade, desgaste de pneus e conforto. Na Carplus ajustamos com precisão." },
    { pergunta: "Quando preciso ajustar cambagem e caster?", resposta: "Quando há desgaste irregular nos pneus (mais de um lado), carro puxando para um lado, volante não centraliza após curva ou após trocar componentes de suspensão. Na Carplus Portão fazemos diagnóstico completo." },
    { pergunta: "Cambagem negativa é problema?", resposta: "Depende. Cambagem levemente negativa é especificada por alguns fabricantes. Cambagem excessivamente negativa causa desgaste na parte interna do pneu. Na Carplus Curitiba ajustamos conforme especificação do seu veículo." },
    { pergunta: "Qual a diferença entre cambagem e alinhamento?", resposta: "Cambagem é um dos ângulos ajustados no alinhamento. O alinhamento completo inclui cambagem, caster e convergência (toe). Na Carplus Portão o alinhamento 3D ajusta todos os ângulos com precisão." },
    { pergunta: "Todo carro tem ajuste de cambagem?", resposta: "Não. Alguns veículos têm cambagem fixa de fábrica. Nesses casos, se estiver fora do especificado, pode indicar peça de suspensão torta ou desgastada. Na Carplus Curitiba verificamos a possibilidade de ajuste." },
    { pergunta: "Quanto custa ajustar cambagem e caster?", resposta: "O ajuste está incluso no serviço de alinhamento 3D. Na Carplus Portão cobramos preço único que inclui verificação e ajuste de todos os ângulos: cambagem, caster e convergência." },
    { pergunta: "Caster errado afeta a direção?", resposta: "Sim! Caster incorreto causa volante pesado, direção que não retorna ao centro após curva e instabilidade em linha reta. Na Carplus Curitiba o alinhamento 3D corrige o caster com precisão." },
    { pergunta: "Batida forte em buraco desregula cambagem?", resposta: "Pode sim. Impactos fortes podem entortar componentes de suspensão, alterando os ângulos. Se sentir diferença no comportamento do carro, procure a Carplus no Portão para verificação." },
    { pergunta: "Pneu gastando só na parte de dentro é cambagem?", resposta: "Muito provavelmente. Cambagem negativa excessiva causa esse desgaste. Na Carplus Curitiba verificamos o ângulo e ajustamos. Se não for regulável, pode indicar peça torta." },
    { pergunta: "Vocês ajustam cambagem em carro rebaixado?", resposta: "Sim! Carros rebaixados geralmente têm cambagem mais negativa e podem precisar de kit de regulagem especial. Na Carplus Portão temos experiência com suspensões modificadas." },
    { pergunta: "Quanto tempo leva ajustar cambagem e caster?", resposta: "O alinhamento completo, incluindo ajustes de cambagem e caster, leva de 40 a 60 minutos. Na Carplus Curitiba trabalhamos com agilidade sem comprometer a precisão." },
    { pergunta: "Cambagem afeta consumo de combustível?", resposta: "Indiretamente, sim. Cambagem errada aumenta resistência ao rolamento pelo desgaste irregular do pneu. Pneu desgastado consome mais. Na Carplus Portão o alinhamento correto otimiza economia e segurança." }
  ],
  "troca-de-filtros": [
    { pergunta: "Quais filtros meu carro tem?", resposta: "Os principais são: filtro de ar (motor), filtro de óleo, filtro de combustível e filtro de cabine (ar-condicionado). Alguns veículos têm filtros adicionais. Na Carplus Curitiba verificamos e trocamos todos." },
    { pergunta: "Quando devo trocar o filtro de ar?", resposta: "Recomendamos trocar a cada 15.000 a 20.000 km ou anualmente. Em Curitiba, com poeira e poluição, pode ser necessário trocar antes. Filtro sujo aumenta consumo e reduz potência. Verificamos na Carplus." },
    { pergunta: "Filtro de cabine é o mesmo que filtro de ar?", resposta: "Não. O filtro de ar fica no motor e filtra o ar da combustão. O filtro de cabine (antipólen) filtra o ar do habitáculo pelo ar-condicionado. Ambos são importantes. Na Carplus Portão trocamos os dois." },
    { pergunta: "Quanto custa trocar filtros em Curitiba?", resposta: "Depende dos filtros necessários e do modelo do veículo. Na Carplus o preço inclui peça e mão de obra. Fazemos orçamento gratuito e você aprova antes. Preço justo sempre." },
    { pergunta: "Posso usar filtro genérico ou precisa ser original?", resposta: "Filtros de boa qualidade (Fram, Mann, Wega, Mahle) funcionam tão bem quanto originais e custam menos. Na Carplus Curitiba usamos filtros de primeira linha que atendem às especificações do fabricante." },
    { pergunta: "O filtro de óleo é trocado junto com o óleo?", resposta: "Sempre! Na Carplus Portão toda troca de óleo inclui troca do filtro. Usar filtro velho com óleo novo compromete a lubrificação. É economia burra que sai cara depois." },
    { pergunta: "Meu carro tem filtro de combustível?", resposta: "A maioria sim, mas a localização varia. Alguns ficam no tanque (em linha), outros no motor. A troca é recomendada a cada 30.000 a 50.000 km. Na Carplus Curitiba verificamos o modelo do seu veículo." },
    { pergunta: "Filtro de ar sujo estraga o motor?", resposta: "Gradualmente, sim. Filtro entupido deixa passar menos ar, forçando o motor a trabalhar mais. Também pode deixar passar impurezas que riscam os cilindros. Troca em dia na Carplus evita problemas." },
    { pergunta: "Como saber se o filtro de cabine está sujo?", resposta: "Sinais: ar-condicionado com pouca vazão, cheiro ruim ao ligar o ar, embaçamento excessivo dos vidros. Na Carplus Portão verificamos e mostramos o filtro para você ver o estado." },
    { pergunta: "Vocês trocam filtro de carros importados?", resposta: "Sim! Atendemos todas as marcas e temos filtros para veículos importados em estoque ou com entrega rápida. BMW, Mercedes, Audi, Volvo são atendidos na Carplus Curitiba." },
    { pergunta: "Quanto tempo leva a troca de filtros?", resposta: "Filtro de ar e cabine: 10-20 minutos cada. Filtro de combustível: 30-60 minutos dependendo da localização. Na Carplus Portão o serviço é ágil e você pode aguardar." },
    { pergunta: "Dá para limpar o filtro de ar ao invés de trocar?", resposta: "Para filtros de papel descartáveis, não. A limpeza danifica as fibras e piora a filtração. Filtros de alto fluxo laváveis (K&N) podem ser limpos. Na Carplus orientamos conforme o tipo do seu filtro." }
  ],
  "conserto-de-rodas": [
    { pergunta: "Quais tipos de danos na roda podem ser consertados?", resposta: "Consertamos: bordas amassadas por batidas em meio-fio, trincas pequenas, empenamentos leves, vazamentos pela borda. Rodas com trincas graves ou deformações estruturais não devem ser reparadas por segurança. Na Carplus Portão avaliamos cada caso." },
    { pergunta: "Roda amassada pode ser consertada?", resposta: "Na maioria dos casos sim. Usamos técnica de martelagem e prensagem para restaurar a geometria original da borda. Rodas de liga leve são mais delicadas que as de aço. Na Carplus Curitiba temos experiência com todos os tipos." },
    { pergunta: "Quanto custa consertar uma roda em Curitiba?", resposta: "O valor depende do tipo e extensão do dano. Consertos simples de borda têm preço acessível. Reparos mais complexos custam mais. Na Carplus Portão fazemos avaliação gratuita e orçamento sem compromisso." },
    { pergunta: "Roda consertada fica igual à nova?", resposta: "Estruturalmente sim, se o reparo for bem feito. Esteticamente pode ficar com pequenas marcas dependendo do dano original. Se quiser aspecto de nova, a pintura ou diamantação após o reparo resolve. Fazemos tudo na Carplus." },
    { pergunta: "Conserto de roda tem garantia?", resposta: "Sim! Na Carplus Curitiba garantimos o serviço estrutural. Se apresentar vazamento ou problema relacionado ao reparo, refazemos sem custo. Qualidade e compromisso com você." },
    { pergunta: "Quanto tempo leva o conserto de roda?", resposta: "Consertos simples de borda levam 1 a 2 horas. Reparos mais complexos podem precisar de 1 dia. Na Carplus Portão informamos o prazo na avaliação e cumprimos o combinado." },
    { pergunta: "Posso consertar roda de magnésio?", resposta: "Rodas de magnésio são mais delicadas e nem todo dano é reparável. Trincas especialmente são perigosas. Na Carplus Curitiba avaliamos com cuidado e só executamos se for seguro." },
    { pergunta: "Minha roda está vazando ar, é possível consertar?", resposta: "Se o vazamento for pela borda (entre roda e pneu), geralmente resolvemos com limpeza, lixamento e selante. Se for por trinca, depende da localização e tamanho. Diagnóstico preciso na Carplus Portão." },
    { pergunta: "Vocês consertam rodas de carro importado?", resposta: "Sim! Atendemos rodas de todas as marcas: BMW, Mercedes, Audi, Porsche, Land Rover e outras. Temos experiência com rodas especiais e medidas diferenciadas na Carplus Curitiba." },
    { pergunta: "Roda com trinca pode ser soldada?", resposta: "Em alguns casos sim, com solda TIG especializada para alumínio. Porém, trincas em áreas de alta tensão (raios, centro) não devem ser soldadas por segurança. Na Carplus Portão avaliamos cada situação." },
    { pergunta: "Depois de consertar precisa balancear?", resposta: "Obrigatoriamente. O conserto pode alterar levemente a distribuição de massa da roda. Na Carplus Curitiba o balanceamento após o reparo é feito com precisão para eliminar vibrações." },
    { pergunta: "Dá para consertar roda de estepe?", resposta: "Sim! Estepes também merecem atenção. Uma roda de estepe danificada pode te deixar na mão em uma emergência. Na Carplus Portão consertamos e deixamos seu estepe pronto para uso." }
  ],
  "reforma-de-roda": [
    { pergunta: "O que inclui a reforma de roda?", resposta: "A reforma completa inclui: reparo de danos estruturais, lixamento, aplicação de primer, pintura na cor desejada e verniz protetor. Opcionalmente, diamantação para rodas com acabamento brilhante. Na Carplus Portão fazemos tudo com qualidade." },
    { pergunta: "Quanto custa reformar um jogo de rodas em Curitiba?", resposta: "O valor varia conforme o tamanho da roda, cor escolhida e se inclui diamantação. Na Carplus oferecemos preço competitivo com qualidade de acabamento. Orçamento gratuito pelo WhatsApp." },
    { pergunta: "Qual a diferença entre reforma e pintura de roda?", resposta: "Pintura é apenas a aplicação de tinta sobre a roda. Reforma inclui reparo de danos, preparação completa da superfície e acabamento profissional. Na Carplus Curitiba fazemos reforma completa com durabilidade." },
    { pergunta: "Posso mudar a cor das rodas na reforma?", resposta: "Claro! Na reforma você escolhe a cor: preto fosco, preto brilho, grafite, bronze, dourado, cores personalizadas. Temos catálogo de cores na Carplus Portão para você escolher." },
    { pergunta: "Quanto tempo leva a reforma de um jogo de rodas?", resposta: "A reforma completa do jogo de 4 rodas leva em média 3 a 5 dias úteis, dependendo da complexidade e se inclui diamantação. Na Carplus Curitiba informamos o prazo exato na aprovação." },
    { pergunta: "Reforma de roda tem garantia?", resposta: "Sim! Garantimos a pintura e o acabamento por 1 ano em condições normais de uso. Danos por batidas ou produtos químicos não são cobertos. Na Carplus Portão usamos materiais de qualidade." },
    { pergunta: "Vocês reformam rodas cromadas?", resposta: "Cromagem requer processo industrial específico que não realizamos. Podemos reformar com pintura convencional (preto, grafite, prata). Na Carplus Curitiba orientamos sobre as opções disponíveis." },
    { pergunta: "É possível reformar só uma roda?", resposta: "Sim, mas o ideal é reformar o jogo completo para garantir uniformidade de cor e acabamento. Se reformar apenas uma, pode haver diferença sutil de tonalidade. Na Carplus Portão explicamos as opções." },
    { pergunta: "Preciso deixar o carro na oficina durante a reforma?", resposta: "Sim, pois as rodas precisam ficar alguns dias no processo. Alternativamente, você pode deixar só as rodas e buscar depois. Na Carplus Curitiba combinamos a melhor logística para você." },
    { pergunta: "Roda muito danificada pode ser reformada?", resposta: "Depende do dano. Rodas com trincas graves, deformações estruturais ou corrosão profunda podem não ser recuperáveis. Na Carplus Portão avaliamos e informamos se vale a pena o investimento." },
    { pergunta: "A reforma deixa a roda pesada?", resposta: "Não. As camadas de primer, tinta e verniz são finas e não alteram significativamente o peso. Após a reforma, balanceamos o conjunto. Na Carplus Curitiba o resultado final é equilibrado." },
    { pergunta: "Vocês reformam rodas de moto?", resposta: "Nossa especialidade é rodas automotivas. Para motos, recomendamos oficinas especializadas em duas rodas. Na Carplus Portão focamos em excelência no segmento de carros." }
  ],
  "diamante-de-roda": [
    { pergunta: "O que é diamantação de roda?", resposta: "É um processo de usinagem CNC que remove uma fina camada do alumínio, criando acabamento espelhado/brilhante. Diferente da pintura, mostra o metal polido real. Na Carplus Curitiba fazemos diamantação com equipamento de precisão." },
    { pergunta: "Quanto custa diamantar um jogo de rodas em Curitiba?", resposta: "O valor da diamantação varia conforme o tamanho e complexidade da roda. É mais caro que pintura comum pelo processo especializado. Na Carplus Portão fazemos orçamento sem compromisso." },
    { pergunta: "Diamantação é mais durável que pintura?", resposta: "A diamantação expõe o alumínio que é protegido por verniz. Com o tempo, pode oxidar se o verniz for danificado. Pintura bem feita tende a ser mais resistente a longo prazo. Na Carplus orientamos sobre cada opção." },
    { pergunta: "Minha roda diamantada está manchando, tem conserto?", resposta: "Manchas em rodas diamantadas geralmente são oxidação sob o verniz. A solução é refazer a diamantação completa. Na Carplus Curitiba removemos a camada antiga e diamantamos novamente." },
    { pergunta: "Quanto tempo leva a diamantação?", resposta: "A diamantação de um jogo de 4 rodas leva em média 4 a 7 dias úteis. O processo inclui desmontagem, preparação, usinagem CNC, verniz e secagem. Na Carplus Portão informamos prazo exato." },
    { pergunta: "Qualquer roda pode ser diamantada?", resposta: "Não. Apenas rodas de liga leve (alumínio) com design adequado. Rodas de aço, cromadas ou com acabamentos especiais não podem. Na Carplus Curitiba avaliamos se sua roda é compatível." },
    { pergunta: "Diamantação estraga a roda?", resposta: "Cada diamantação remove uma fina camada de alumínio. Rodas podem ser diamantadas 2-3 vezes antes de ficarem muito finas. Na Carplus Portão medimos a espessura antes de executar o serviço." },
    { pergunta: "Posso combinar diamantação com pintura?", resposta: "Sim! O estilo mais comum é face diamantada com as bordas e raios pintados de preto ou grafite. Cria contraste elegante. Na Carplus Curitiba fazemos essa combinação com perfeição." },
    { pergunta: "Diamantação tem garantia?", resposta: "Sim, garantimos o serviço por 6 meses. Oxidação precoce por defeito de verniz é coberta. Danos por batidas, produtos químicos agressivos ou lavagem com ácido não são. Na Carplus Portão usamos verniz de qualidade." },
    { pergunta: "Roda diamantada precisa de cuidados especiais?", resposta: "Sim. Evite produtos ácidos ou alcalinos fortes. Lave com água e sabão neutro. Seque bem para evitar manchas de água. Na Carplus Curitiba orientamos sobre os cuidados para maior durabilidade." },
    { pergunta: "Vocês diamantam rodas de carros importados?", resposta: "Sim! Temos experiência com rodas de BMW, Mercedes, Audi, Porsche e outras marcas premium. Respeitamos o design original de fábrica. Na Carplus Portão atendemos todas as marcas." },
    { pergunta: "É possível diamantar só a face da roda?", resposta: "Sim, o mais comum é diamantar apenas a face visível e pintar as partes internas/bordas. Isso reduz custo e cria visual mais esportivo. Na Carplus Curitiba fazemos conforme sua preferência." }
  ],
  "pintura-de-roda": [
    { pergunta: "Quanto custa pintar um jogo de rodas em Curitiba?", resposta: "O valor varia conforme tamanho da roda e cor escolhida. Cores especiais (candy, cromado líquido) custam mais. Na Carplus Portão oferecemos preço competitivo. Orçamento gratuito pelo WhatsApp." },
    { pergunta: "Quais cores estão disponíveis para pintura de roda?", resposta: "Temos ampla variedade: preto fosco, preto brilho, grafite, chumbo, bronze, dourado, cores metálicas e personalizadas. Na Carplus Curitiba você escolhe a cor que combina com seu carro." },
    { pergunta: "Pintura de roda descasca fácil?", resposta: "Não, se for bem feita. Usamos primer de aderência, tinta automotiva de qualidade e verniz protetor. A preparação correta da superfície é fundamental. Na Carplus Portão seguimos processo profissional." },
    { pergunta: "Quanto tempo leva a pintura das rodas?", resposta: "A pintura de um jogo de 4 rodas leva em média 2 a 4 dias úteis. Inclui preparação, aplicação de primer, tinta, verniz e secagem. Na Carplus Curitiba respeitamos o tempo de cura para durabilidade." },
    { pergunta: "Preciso consertar a roda antes de pintar?", resposta: "Se houver danos como amassados ou arranhões profundos, sim. Pintar sobre defeitos deixa acabamento ruim. Na Carplus Portão fazemos reparo e pintura em sequência com desconto." },
    { pergunta: "Pintura de roda tem garantia?", resposta: "Sim! Garantimos a pintura por 1 ano contra descascamento em condições normais. Danos por batidas, produtos químicos ou lavagem inadequada não são cobertos. Na Carplus Curitiba usamos materiais de qualidade." },
    { pergunta: "Posso pintar roda de aço ou só de liga leve?", resposta: "Pintamos os dois tipos. Rodas de aço inclusive se beneficiam muito da pintura para proteção contra ferrugem. Na Carplus Curitiba atendemos todos os tipos de rodas." },
    { pergunta: "É melhor pintar ou envelopar as rodas?", resposta: "Pintura é mais durável e resistente. Envelopamento é mais barato mas descasca com facilidade e não resiste bem ao calor dos freios. Recomendamos pintura profissional na Carplus." },
    { pergunta: "Vocês pintam rodas de moto?", resposta: "Nossa especialidade é rodas automotivas. Para motos, recomendamos oficinas especializadas em duas rodas. Na Carplus Portão focamos em carros para oferecer a melhor qualidade." },
    { pergunta: "Posso pintar só uma roda danificada?", resposta: "Pode, mas recomendamos pintar pelo menos as duas do mesmo eixo (dianteiras ou traseiras) para uniformidade. Cores podem ter leve variação entre lotes. Na Carplus Curitiba orientamos a melhor opção." },
    { pergunta: "Roda pintada pode ir para polimento depois?", resposta: "Não recomendamos polir roda pintada pois remove o verniz protetor. Se quiser acabamento brilhante, especifique na pintura. Na Carplus Portão fazemos acabamento fosco ou brilho conforme sua escolha." },
    { pergunta: "Vocês pintam calotas também?", resposta: "Sim! Calotas plásticas podem ser pintadas com tinta específica para plástico. Fica bonito e personalizado. Na Carplus Curitiba fazemos calotas com o mesmo cuidado das rodas." }
  ],
  "revisao-geral": [
    { pergunta: "O que inclui a revisão geral do carro?", resposta: "Na Carplus a revisão completa verifica: motor (óleo, filtros, correias), freios, suspensão, direção, parte elétrica, arrefecimento, escapamento, pneus e fluidos. Entregamos relatório detalhado do estado do veículo." },
    { pergunta: "De quanto em quanto tempo devo fazer revisão geral?", resposta: "Recomendamos revisão completa anual ou a cada 10.000 km. Carros mais antigos ou com alta quilometragem podem precisar de intervalos menores. Na Carplus Curitiba adaptamos conforme seu veículo." },
    { pergunta: "Quanto custa uma revisão geral em Curitiba?", resposta: "A revisão (verificação) tem valor fixo acessível. Se houver necessidade de troca de peças ou reparos, orçamos separadamente e você aprova apenas o que quiser. Na Carplus Portão transparência é prioridade." },
    { pergunta: "Quanto tempo leva a revisão geral?", resposta: "A revisão completa com verificação de todos os sistemas leva em média 2 a 3 horas. Se incluir serviços como troca de óleo e filtros, pode levar mais. Na Carplus Curitiba você pode aguardar ou buscar depois." },
    { pergunta: "Revisão geral é a mesma coisa que revisão da concessionária?", resposta: "Funcionalmente sim, verificamos os mesmos itens. A diferença é que na Carplus Portão o preço é mais acessível e você não perde a garantia de fábrica (Lei 14.181/2021 garante isso)." },
    { pergunta: "Fazer revisão fora da concessionária perde garantia?", resposta: "Não! A Lei 14.181/2021 garante seu direito de fazer revisão em qualquer oficina sem perder garantia, desde que use peças de qualidade equivalente. Na Carplus Curitiba emitimos nota fiscal de tudo." },
    { pergunta: "Vocês fazem revisão de carros importados?", resposta: "Sim! Atendemos todas as marcas: BMW, Mercedes, Audi, Volvo, Land Rover, Porsche e outras. Temos equipamento de diagnóstico compatível. Na Carplus Portão sua revisão é feita com excelência." },
    { pergunta: "A revisão inclui troca de óleo?", resposta: "A revisão é a verificação do veículo. Troca de óleo é um serviço adicional que recomendamos junto. Na Carplus Curitiba fazemos pacote com desconto: revisão + troca de óleo + filtros." },
    { pergunta: "Vocês avisam o que precisa trocar antes de fazer?", resposta: "Sempre! Após a verificação, apresentamos relatório e orçamento detalhado. Você decide o que quer fazer e aprova cada item. Na Carplus Portão nada é feito sem sua autorização." },
    { pergunta: "Posso fazer revisão antes de viajar?", resposta: "Recomendamos fortemente! A revisão pré-viagem verifica itens críticos de segurança. Identificamos problemas antes que te deixem na estrada. Na Carplus Curitiba fazemos check-up completo para viagem." },
    { pergunta: "A revisão verifica ar-condicionado?", resposta: "Verificamos se o ar está gelando e funcionando. Diagnóstico completo do sistema (vazamentos, carga de gás) é serviço separado. Na Carplus Portão incluímos ambos se você preferir." },
    { pergunta: "Vocês fazem revisão de carros a diesel?", resposta: "Sim! Atendemos veículos a diesel como Hilux, S10, Amarok, Ranger. Verificamos sistema de injeção diesel, turbo, filtro de partículas. Na Carplus Curitiba temos experiência com motores diesel." }
  ],
  "diagnostico-eletronico": [
    { pergunta: "O que é diagnóstico eletrônico automotivo?", resposta: "É a leitura dos códigos de erro armazenados na central eletrônica do veículo usando scanner específico. Identifica problemas em motor, transmissão, ABS, airbag e outros sistemas. Na Carplus Curitiba usamos scanner profissional multimarcas." },
    { pergunta: "Quando devo fazer diagnóstico eletrônico?", resposta: "Sempre que acender luz de injeção (check engine), ABS, airbag ou outra no painel. Também quando o carro apresentar falhas, consumo alto, falta de potência ou comportamento estranho. Na Carplus Portão diagnosticamos rapidamente." },
    { pergunta: "Quanto custa o diagnóstico eletrônico em Curitiba?", resposta: "O diagnóstico na Carplus tem preço acessível e é abatido do serviço de reparo se você fizer conosco. Identificamos o problema real antes de trocar peças desnecessárias." },
    { pergunta: "O diagnóstico já resolve o problema do carro?", resposta: "Não. O diagnóstico identifica a causa do problema (lê os códigos de erro). O reparo é feito depois, conforme sua aprovação. Na Carplus Curitiba explicamos o diagnóstico em linguagem clara." },
    { pergunta: "Vocês apagam a luz do painel?", resposta: "Sim, após identificar e resolver a causa. Apenas apagar sem consertar faz a luz voltar. Na Carplus Portão tratamos a causa, não o sintoma. Resolvemos o problema de verdade." },
    { pergunta: "Diagnóstico eletrônico detecta tudo?", resposta: "Detecta problemas registrados na central eletrônica. Alguns problemas mecânicos ou elétricos simples não geram código de erro. Na Carplus Curitiba combinamos diagnóstico eletrônico com avaliação técnica manual." },
    { pergunta: "Quanto tempo leva o diagnóstico eletrônico?", resposta: "A leitura básica leva 15-30 minutos. Diagnóstico completo com análise de todos os sistemas pode levar 1-2 horas. Na Carplus Portão fazemos avaliação profunda para identificar tudo." },
    { pergunta: "Vocês fazem diagnóstico de carros importados?", resposta: "Sim! Nosso scanner lê BMW, Mercedes, Audi, Volvo, Land Rover, Porsche, Jeep e outras marcas. Na Carplus Curitiba atendemos nacionais e importados com a mesma qualidade." },
    { pergunta: "O diagnóstico mostra problemas futuros?", resposta: "O scanner mostra códigos pendentes (problemas intermitentes) e histórico de falhas. Isso ajuda a prever problemas. Na Carplus Portão analisamos tudo para manutenção preventiva." },
    { pergunta: "Posso fazer só o diagnóstico sem consertar?", resposta: "Claro! Muitos clientes fazem diagnóstico para saber o que o carro tem antes de decidir. Na Carplus Curitiba você recebe relatório completo sem obrigação de serviço." },
    { pergunta: "O scanner zera a quilometragem do carro?", resposta: "Não. Adulteração de hodômetro é crime (Lei 9.503). Na Carplus não realizamos esse tipo de serviço. Nosso scanner é usado apenas para diagnóstico legítimo e manutenção." },
    { pergunta: "Diagnóstico eletrônico é o mesmo que scanner OBD?", resposta: "OBD é o padrão de conexão. Scanners variam de básicos (leem poucos códigos) a profissionais (acessam todos os sistemas). Na Carplus Curitiba usamos scanner profissional completo." }
  ],
  "injecao-eletronica": [
    { pergunta: "O que é injeção eletrônica?", resposta: "É o sistema que controla eletronicamente a quantidade de combustível injetada no motor. Substituiu o carburador nos carros modernos. Na Carplus Curitiba fazemos diagnóstico e reparo completo do sistema." },
    { pergunta: "Quais os sintomas de problema na injeção eletrônica?", resposta: "Sinais comuns: luz de injeção acesa, motor falhando, consumo alto, dificuldade para dar partida, carro morrendo, aceleração irregular, cheiro forte de combustível. Na Carplus Portão diagnosticamos a causa." },
    { pergunta: "Quanto custa arrumar a injeção eletrônica?", resposta: "Depende do problema: pode ser sensor, atuador, módulo ou fiação. O diagnóstico identifica a peça com defeito. Na Carplus Curitiba consertamos apenas o necessário, sem troca desnecessária." },
    { pergunta: "É possível limpar os bicos injetores?", resposta: "Sim! A limpeza de bicos remove depósitos de combustível que afetam a pulverização. Recomendamos a cada 30.000 km. Na Carplus Portão fazemos limpeza por ultrassom com teste de vazão." },
    { pergunta: "Gasolina adulterada estraga a injeção?", resposta: "Sim. Combustível de má qualidade entope bicos, danifica bomba e sensores. Na Carplus Curitiba orientamos sobre como identificar postos confiáveis e tratamos os danos." },
    { pergunta: "Quanto tempo leva o reparo da injeção eletrônica?", resposta: "Depende do problema. Troca de sensor leva 1-2 horas. Problemas mais complexos podem precisar de mais tempo para diagnóstico. Na Carplus Portão informamos o prazo após avaliar." },
    { pergunta: "Vocês reparam injeção de carros flex?", resposta: "Sim! Carros flex têm sistema de injeção mais complexo com sensores adicionais. Temos experiência com todas as marcas flex do mercado na Carplus Curitiba." },
    { pergunta: "O que causa a luz de injeção acender?", resposta: "Dezenas de causas: sensor de oxigênio, sonda lambda, válvula canister, corpo de borboleta, bicos, bobinas, entre outros. O diagnóstico eletrônico identifica. Na Carplus Portão descobrimos a causa real." },
    { pergunta: "Posso dirigir com a luz de injeção acesa?", resposta: "Depende. Alguns problemas permitem dirigir com cuidado, outros são graves. O ideal é diagnosticar o quanto antes. Na Carplus Curitiba fazemos atendimento rápido para sua segurança." },
    { pergunta: "O que é corpo de borboleta?", resposta: "É a peça que controla a entrada de ar no motor, comandada pelo pedal do acelerador. Com o tempo, acumula sujeira e precisa de limpeza. Na Carplus Portão fazemos limpeza e verificação." },
    { pergunta: "Vocês reprogramam a central de injeção?", resposta: "Realizamos reset de adaptação e atualização de software quando necessário. Reprogramações de performance (chip) não fazemos. Na Carplus Curitiba focamos em manutenção corretiva e preventiva." },
    { pergunta: "Sensor de oxigênio precisa trocar com que frequência?", resposta: "Em média a cada 80.000 a 100.000 km, mas pode durar mais ou menos. Sensor ruim aumenta consumo e emissões. Na Carplus Portão verificamos no diagnóstico e trocamos se necessário." }
  ],
  "sistema-de-arrefecimento": [
    { pergunta: "O que é o sistema de arrefecimento do carro?", resposta: "É o sistema que mantém o motor na temperatura ideal de funcionamento. Inclui radiador, mangueiras, bomba d água, válvula termostática, ventoinha e reservatório. Na Carplus Curitiba fazemos manutenção completa." },
    { pergunta: "Quais os sinais de problema no arrefecimento?", resposta: "Sintomas: ponteiro de temperatura subindo, luz de temperatura acesa, vazamento de água, vapor saindo do motor, ar-condicionado que não gela, aquecimento interno fraco. Procure a Carplus Portão urgentemente." },
    { pergunta: "De quanto em quanto tempo troco a água do radiador?", resposta: "Recomendamos trocar o fluido de arrefecimento a cada 2 anos ou 40.000 km. O aditivo perde propriedades com o tempo. Em Curitiba, com clima frio, o aditivo é especialmente importante." },
    { pergunta: "Posso usar só água no radiador?", resposta: "Não recomendamos. A mistura correta é 50% água desmineralizada e 50% aditivo de radiador. O aditivo evita corrosão, aumenta ponto de ebulição e protege contra congelamento. Na Carplus Curitiba usamos proporção correta." },
    { pergunta: "Quanto custa arrumar o sistema de arrefecimento?", resposta: "Depende do problema: pode ser mangueira furada (barato) até bomba d água ou radiador (mais caro). Na Carplus Portão diagnosticamos antes de orçar para identificar a causa real." },
    { pergunta: "Meu carro está vazando água verde, o que é?", resposta: "É o fluido de arrefecimento (aditivo) que está vazando. Pode ser mangueira, conexão, bomba d água ou radiador. Não dirija assim, o motor pode fundir. Procure a Carplus Curitiba urgente." },
    { pergunta: "O que é válvula termostática?", resposta: "É uma válvula que controla o fluxo de água entre motor e radiador conforme a temperatura. Se travar aberta, o motor demora a esquentar. Se fechar, superaquece. Na Carplus Portão trocamos quando necessário." },
    { pergunta: "Por que meu carro demora para esquentar?", resposta: "Geralmente é válvula termostática travada aberta. O fluido circula pelo radiador o tempo todo, mesmo frio. Isso aumenta consumo e desgaste. Na Carplus Curitiba diagnosticamos e resolvemos." },
    { pergunta: "Bomba d água dá sinal antes de quebrar?", resposta: "Às vezes: ruído tipo chiado, vazamento pelo respiro, folga no eixo. Mas pode parar de funcionar sem aviso. Verificamos na revisão. Na Carplus Portão prevenção evita motor fundido." },
    { pergunta: "Quanto tempo leva trocar bomba d água?", resposta: "Depende do veículo. Em alguns carros é simples (2-3 horas), em outros requer remover peças complexas (até 1 dia). Na Carplus Curitiba informamos prazo após avaliar seu modelo." },
    { pergunta: "Meu carro ferve no trânsito, o que pode ser?", resposta: "Pode ser: ventoinha não está ligando, radiador entupido, válvula termostática travada, falta de fluido. O trânsito de Curitiba castiga o sistema. Na Carplus Portão diagnosticamos a causa." },
    { pergunta: "Vocês fazem limpeza de radiador?", resposta: "Sim! Realizamos flush do sistema de arrefecimento que remove depósitos e oxidação. Recomendado quando o fluido está muito sujo ou após reparos. Na Carplus Curitiba deixamos o sistema limpo." }
  ],
  "bateria-automotiva": [
    { pergunta: "Quanto tempo dura uma bateria de carro?", resposta: "Em média 3 a 4 anos, dependendo do uso e clima. Em Curitiba, o frio intensifica partidas, exigindo mais da bateria. Na Carplus Portão testamos gratuitamente para verificar o estado." },
    { pergunta: "Quais os sinais de bateria fraca?", resposta: "Sintomas: carro demora para dar partida, luzes fracas, relógio desregula, vidros elétricos lentos, luz de bateria no painel. Na Carplus Curitiba fazemos teste e diagnóstico elétrico." },
    { pergunta: "Vocês vendem bateria de carro em Curitiba?", resposta: "Sim! Trabalhamos com baterias Moura, Heliar, Bosch e ACDelco. Todas com garantia de fábrica. Na Carplus Portão a instalação é imediata e inclusa no preço." },
    { pergunta: "Quanto custa uma bateria nova em Curitiba?", resposta: "O preço varia conforme a amperagem necessária para seu veículo (40Ah a 100Ah). Na Carplus Portão temos opções para todos os orçamentos. Consulte pelo WhatsApp." },
    { pergunta: "A bateria velha vocês levam?", resposta: "Sim! Fazemos a troca e descartamos a bateria usada de forma ecológica, conforme legislação ambiental. Na Carplus Curitiba você não precisa se preocupar com o descarte." },
    { pergunta: "Por que minha bateria nova descarregou rápido?", resposta: "Pode indicar problema no alternador (não carrega), fuga de corrente (algo consumindo com carro desligado) ou uso inadequado. Na Carplus Portão diagnosticamos o sistema elétrico completo." },
    { pergunta: "Como saber se o problema é bateria ou alternador?", resposta: "Bateria fraca dificulta partida. Alternador ruim faz bateria não carregar (luz acesa no painel, bateria sempre descarregando). Na Carplus Curitiba testamos ambos para diagnóstico preciso." },
    { pergunta: "Vocês fazem recarga de bateria?", resposta: "Sim, para baterias que ainda têm condições de uso. Porém, se a bateria não segura carga, a recarga é paliativa. Na Carplus Portão testamos e orientamos se vale recarregar ou trocar." },
    { pergunta: "Bateria de carro com start-stop é diferente?", resposta: "Sim! Carros com sistema start-stop (que desligam no semáforo) usam baterias AGM ou EFB, mais resistentes a ciclos. Nunca use bateria comum. Na Carplus Curitiba temos as duas tecnologias." },
    { pergunta: "Quanto tempo leva trocar a bateria?", resposta: "A troca simples leva 15-30 minutos. Alguns veículos modernos requerem procedimento de reset após a troca. Na Carplus Portão fazemos tudo corretamente." },
    { pergunta: "Bateria descarrega se o carro ficar parado?", resposta: "Sim, naturalmente cerca de 1% ao dia. Se descarregar em poucos dias, há fuga de corrente. Na Carplus Curitiba diagnosticamos consumo parasita e resolvemos o problema." },
    { pergunta: "Posso usar bateria de amperagem maior?", resposta: "Pode, desde que caiba no compartimento. Amperagem maior dá mais reserva de energia. Menor nunca é recomendado. Na Carplus Portão orientamos a bateria ideal para seu veículo." }
  ],
  "higienizacao-de-ar-condicionado": [
    { pergunta: "Por que meu ar-condicionado está com cheiro ruim?", resposta: "O mau cheiro é causado por fungos e bactérias que se proliferam no evaporador úmido e escuro. Em Curitiba, com alta umidade, isso é comum. A higienização elimina esses microrganismos na Carplus." },
    { pergunta: "Com que frequência devo higienizar o ar do carro?", resposta: "Recomendamos higienização a cada 6 meses ou no início de cada estação (verão/inverno). Se houver cheiro ou alergias, pode ser necessário antes. Na Carplus Portão mantemos seu ar saudável." },
    { pergunta: "Quanto custa higienizar o ar-condicionado em Curitiba?", resposta: "A higienização na Carplus tem preço acessível e inclui aplicação de produto bactericida no evaporador e dutos. Valor promocional se feito junto com outros serviços." },
    { pergunta: "A higienização inclui troca de filtro?", resposta: "São serviços diferentes. A higienização trata fungos e bactérias. A troca de filtro é adicional (recomendada junto). Na Carplus Curitiba fazemos pacote com desconto para os dois." },
    { pergunta: "Quanto tempo leva a higienização do ar?", resposta: "A higienização completa leva 30-40 minutos. O produto precisa agir e secar. Na Carplus Portão você pode aguardar na recepção com café e Wi-Fi." },
    { pergunta: "Higienização resolve falta de ar gelado?", resposta: "Não. Se o ar não está gelando, o problema é outro: falta de gás, compressor, condensador. A higienização trata apenas odor e microrganismos. Na Carplus Curitiba diagnosticamos a causa correta." },
    { pergunta: "O produto de higienização é seguro?", resposta: "Sim! Usamos produtos bactericidas automotivos certificados, seguros para pessoas e animais após a aplicação e secagem. Na Carplus Portão prezamos pela saúde dos ocupantes." },
    { pergunta: "Posso higienizar o ar em casa?", resposta: "Produtos de aerossol caseiros são superficiais. A higienização profissional aplica produto direto no evaporador, onde os fungos estão. Na Carplus Curitiba o resultado é muito mais efetivo." },
    { pergunta: "Higienização evita alergias?", resposta: "Ajuda muito! Remove fungos, bactérias e alérgenos do sistema. Para quem tem rinite ou asma, a higienização regular é especialmente importante. Na Carplus Portão cuidamos da sua saúde." },
    { pergunta: "Por que o cheiro volta depois da higienização?", resposta: "Se voltar rápido, pode haver acúmulo de água no sistema (dreno entupido) ou filtro muito sujo. Na Carplus Curitiba verificamos tudo para resultado duradouro." },
    { pergunta: "Vocês higienizam ar de carro importado?", resposta: "Sim! O processo é igual para todas as marcas. Na Carplus Portão atendemos nacionais e importados com o mesmo padrão de qualidade." },
    { pergunta: "Dá para higienizar sem ligar o ar-condicionado?", resposta: "O ideal é com o ar funcionando para o produto circular pelo sistema todo. Se o ar não está funcionando, a higienização fica limitada. Na Carplus Curitiba orientamos cada caso." }
  ],
  "manutencao-de-ar-condicionado": [
    { pergunta: "Por que meu ar-condicionado parou de gelar?", resposta: "Causas comuns: falta de gás (vazamento), compressor com defeito, condensador sujo/entupido, ventoinha não funciona, sensor de temperatura ruim. Na Carplus Portão diagnosticamos antes de qualquer reparo." },
    { pergunta: "Quanto custa carregar o gás do ar-condicionado?", resposta: "O valor depende do tipo de gás (R134a ou R1234yf) e da quantidade necessária. Antes de carregar, verificamos se há vazamento para não gastar à toa. Na Carplus Curitiba fazemos teste de vazamento." },
    { pergunta: "Como saber se o ar está com pouco gás?", resposta: "Sinais: ar gela pouco ou demora para gelar, compressor liga e desliga muito rápido, ruído no compressor. Na Carplus Portão medimos a pressão do sistema para diagnóstico preciso." },
    { pergunta: "Compressor de ar-condicionado tem conserto?", resposta: "Alguns problemas como válvula ou embreagem podem ser reparados. Compressor travado ou com ruído interno geralmente requer troca. Na Carplus Curitiba avaliamos a melhor solução custo-benefício." },
    { pergunta: "Quanto tempo leva para arrumar o ar-condicionado?", resposta: "Depende do problema: carga de gás leva 1 hora, troca de compressor pode levar meio dia ou mais. Na Carplus Portão informamos prazo após diagnóstico." },
    { pergunta: "Por que o ar-condicionado faz barulho?", resposta: "Barulhos podem indicar: correia do compressor gasta, compressor com desgaste, ventoinha com folga, objetos no ventilador interno. Na Carplus Curitiba identificamos a origem do ruído." },
    { pergunta: "Ar-condicionado gasta muito combustível?", resposta: "O ar ligado aumenta consumo em 5-15% pois o compressor exige potência do motor. Em baixas velocidades, abrir vidro pode consumir mais que o ar. Na Carplus Portão mantemos seu ar eficiente." },
    { pergunta: "O que é gás R1234yf?", resposta: "É o novo gás ecológico obrigatório em carros a partir de 2017. Tem menor impacto ambiental mas custa mais que o R134a antigo. Na Carplus Curitiba trabalhamos com ambos os tipos." },
    { pergunta: "Dá para converter ar de R134a para R1234yf?", resposta: "Não é recomendado. Os sistemas são diferentes e a conversão não é homologada. Use sempre o gás especificado para seu veículo. Na Carplus Portão seguimos as especificações de fábrica." },
    { pergunta: "Filtro de cabine afeta o ar-condicionado?", resposta: "Muito! Filtro entupido reduz a vazão de ar e força o sistema. Recomendamos trocar anualmente ou quando sujo. Na Carplus Curitiba verificamos e trocamos." },
    { pergunta: "Manutenção de ar-condicionado tem garantia?", resposta: "Sim! Garantimos os serviços e peças utilizados na Carplus Curitiba. Carga de gás é garantida se não houver vazamento. Trabalhamos com qualidade e compromisso." },
    { pergunta: "Por que o ar gela mais de um lado?", resposta: "Pode ser problema no sistema de distribuição de ar (flaps, atuadores) ou no sensor de temperatura de cabine. Em carros com ar dual zone, cada lado tem controle. Na Carplus Portão diagnosticamos." }
  ],
  "reparo-eletrico": [
    { pergunta: "Quais problemas elétricos vocês resolvem?", resposta: "Na Carplus Curitiba reparamos: luzes que não funcionam, vidros elétricos, travas elétricas, alarme, central elétrica, chicotes, fusíveis, relés, alternador, motor de partida e todo sistema elétrico automotivo." },
    { pergunta: "Meu carro não dá partida, é problema elétrico?", resposta: "Pode ser. Causas elétricas comuns: bateria fraca, motor de partida defeituoso, chave com defeito, fusível queimado, relé de partida ruim. Na Carplus Portão diagnosticamos a causa real." },
    { pergunta: "Quanto custa reparo elétrico automotivo em Curitiba?", resposta: "Depende do problema. Pode ser algo simples como fusível (barato) até troca de módulo (mais caro). Na Carplus o diagnóstico identifica exatamente o que precisa, sem troca desnecessária." },
    { pergunta: "Vocês fazem instalação de acessórios elétricos?", resposta: "Sim! Instalamos alarme, som, sensor de estacionamento, câmera de ré, luz de LED, farol de milha e outros acessórios. Na Carplus Portão a instalação é feita corretamente, sem gambiarras." },
    { pergunta: "Meus vidros elétricos pararam de funcionar, o que pode ser?", resposta: "Pode ser: fusível queimado, motor do vidro com defeito, botão ruim, fiação rompida ou módulo de vidros. Na Carplus Curitiba diagnosticamos e reparamos vidros elétricos de todas as marcas." },
    { pergunta: "Problema elétrico pode causar incêndio?", resposta: "Sim! Curto-circuito ou fiação inadequada pode causar incêndio. Nunca ignore cheiro de queimado ou fumaça. Na Carplus Portão verificamos e reparamos com segurança." },
    { pergunta: "Quanto tempo leva um reparo elétrico?", resposta: "Varia muito: troca de fusível é imediata, rastrear curto em chicote pode levar horas. Na Carplus Curitiba informamos estimativa após diagnóstico inicial." },
    { pergunta: "O que é fuga de corrente no carro?", resposta: "É quando algo consome energia com o carro desligado, descarregando a bateria. Pode ser módulo, alarme, luz que fica acesa. Na Carplus Portão medimos o consumo e identificamos a causa." },
    { pergunta: "Vocês reparam central elétrica (módulo)?", resposta: "Alguns módulos podem ser reparados, outros precisam ser substituídos e codificados. Na Carplus Curitiba avaliamos cada caso e orientamos a melhor solução." },
    { pergunta: "Luz do painel acesa indica problema elétrico?", resposta: "Nem sempre. Cada luz tem significado específico. Luz de bateria indica problema elétrico. Luz de motor pode ser sensor, injeção, etc. Na Carplus Portão fazemos diagnóstico completo." },
    { pergunta: "Vocês consertam chicote elétrico?", resposta: "Sim! Reparamos chicotes rompidos, oxidados ou queimados. Em casos graves, fabricamos trecho novo. Na Carplus Curitiba temos experiência com chicotes de todas as marcas." },
    { pergunta: "Alarme do carro está com problema, vocês arrumam?", resposta: "Sim! Reparamos e instalamos alarmes de todas as marcas. Se for alarme original de fábrica, também atendemos. Na Carplus Portão deixamos seu alarme funcionando perfeitamente." }
  ],
  "retifica-de-disco-de-freio": [
    { pergunta: "O que é retífica de disco de freio?", resposta: "É a usinagem da superfície do disco para remover irregularidades, ranhuras e restaurar a planicidade. Prolonga a vida útil do disco quando ainda está acima da medida mínima. Na Carplus Curitiba temos equipamento próprio." },
    { pergunta: "Quando a retífica é indicada?", resposta: "Quando o disco tem ranhuras leves, irregularidades de superfície ou vibração ao frear, mas ainda está acima da espessura mínima. Se estiver no limite, a troca é mais indicada. Na Carplus Portão avaliamos cada caso." },
    { pergunta: "Quanto custa retificar discos de freio em Curitiba?", resposta: "A retífica custa menos que a troca do disco. O valor varia conforme tamanho do disco. Na Carplus oferecemos preço competitivo com qualidade. Orçamento sem compromisso." },
    { pergunta: "Retífica de disco tem garantia?", resposta: "Sim! Garantimos o serviço de usinagem na Carplus Curitiba. Se apresentar problema relacionado à retífica, refazemos. Qualidade e compromisso com sua segurança." },
    { pergunta: "Quanto tempo leva a retífica de disco?", resposta: "A retífica de um par de discos (dianteiros ou traseiros) leva em média 1 a 2 horas. Na Carplus Portão o serviço é ágil e você pode aguardar." },
    { pergunta: "Retífica resolve vibração no pedal de freio?", resposta: "Sim, se a vibração for causada por disco empenado ou irregular. A usinagem restaura a planicidade. Se persistir, pode haver problema na pinça ou pastilha. Diagnóstico na Carplus." },
    { pergunta: "Quantas vezes posso retificar o mesmo disco?", resposta: "Depende da espessura atual. Geralmente 1 a 2 vezes é possível. Os discos têm espessura mínima de segurança marcada neles. Na Carplus Portão medimos e informamos se ainda é viável." },
    { pergunta: "Depois de retificar precisa trocar as pastilhas?", resposta: "Não necessariamente, mas é recomendado. Pastilhas usadas se moldaram ao disco antigo e demoram para assentar na superfície nova. Na Carplus Curitiba orientamos conforme o estado das pastilhas." },
    { pergunta: "Disco riscado pode ser retificado?", resposta: "Riscos superficiais sim. Ranhuras muito profundas podem consumir material demais, deixando o disco fino. Na Carplus Portão avaliamos se a retífica é segura e vantajosa." },
    { pergunta: "Retífica ou troca de disco, o que é melhor?", resposta: "Se o disco ainda tem vida útil após retífica, é mais econômico retificar. Se estiver no limite ou com trincas, a troca é mais segura. Na Carplus Curitiba orientamos a melhor opção." },
    { pergunta: "Vocês retificam disco de carro importado?", resposta: "Sim! Atendemos discos de todas as marcas e tamanhos. BMW, Mercedes, Audi, Porsche - todos são bem-vindos na Carplus Portão." },
    { pergunta: "Disco de freio pode trincar?", resposta: "Sim, por superaquecimento (frenagem muito forte), defeito de fabricação ou impacto. Disco trincado NUNCA deve ser retificado nem usado. Na Carplus Curitiba verificamos antes de qualquer serviço." }
  ]
};
function getServiceFaqs(slug) {
  return SERVICE_FAQS[slug] || [];
}
const ALL_NEW_SERVICES = SERVICE_CATEGORIES.flatMap(
  (cat) => cat.services.map((s) => ({
    ...s,
    categoryName: cat.name,
    categoryIcon: cat.icon,
    // Map to old format for compatibility
    title: s.name,
    description: s.shortDescription
  }))
);
const SEO_CONTENT = {
  "loja-de-pneus": {
    intro: "A Carplus Pneus é a loja de pneus mais completa do bairro Portão em Curitiba. Trabalhamos com as melhores marcas de pneus do mercado: Pirelli, Michelin, Goodyear, Continental, Bridgestone, Firestone e Yokohama. Nossa loja oferece pneus para todos os tipos de veículos, desde carros populares até SUVs e caminhonetes, com medidas do aro 13 ao aro 22.",
    detalhes: [
      "Pneus novos das melhores marcas com garantia de fábrica e nota fiscal",
      "Parcelamento em até 10x sem juros nos cartões de crédito",
      "Montagem, balanceamento e alinhamento inclusos na compra de 4 pneus",
      "Estoque próprio com mais de 500 pneus disponíveis para pronta entrega",
      "Atendimento personalizado com consultores especializados em pneus",
      "Descarte ecológico dos pneus usados sem custo adicional"
    ],
    perguntas: [
      { pergunta: "Qual o melhor pneu para meu carro em Curitiba?", resposta: "Curitiba tem clima úmido e chuvas frequentes. Recomendamos pneus com bom desempenho em piso molhado como Pirelli Cinturato, Michelin Primacy ou Goodyear EfficientGrip. Nossa equipe analisa seu veículo e perfil de uso para indicar o pneu ideal." },
      { pergunta: "Vocês têm pneus para carros importados?", resposta: "Sim! Trabalhamos com pneus para BMW, Mercedes, Audi, Volvo, Land Rover e outras marcas premium. Temos medidas especiais como Run Flat e pneus de alta performance em estoque." },
      { pergunta: "Como funciona a garantia dos pneus?", resposta: "Todos os pneus vendidos têm garantia de fábrica contra defeitos de fabricação. Além disso, oferecemos garantia própria de montagem por 90 dias. Guardamos o histórico do seu veículo para acompanhamento." }
    ],
    keywords: ["loja de pneus curitiba", "pneus portão curitiba", "pneu pirelli curitiba", "pneu michelin curitiba", "comprar pneus curitiba", "pneus baratos curitiba"]
  },
  "alinhamento-3d": {
    intro: "O alinhamento 3D computadorizado é essencial para a segurança e economia do seu veículo. Na Carplus Centro Automotivo, utilizamos equipamento de alinhamento Hunter 3D de última geração, o mesmo utilizado pelas concessionárias premium. O alinhamento corrige a geometria das rodas, evitando desgaste irregular dos pneus e melhorando a estabilidade do veículo.",
    detalhes: [
      "Equipamento Hunter 3D com precisão de 0,01 grau - padrão internacional",
      "Alinhamento das 4 rodas com ajuste de câmber, cáster e convergência",
      "Laudo técnico impresso com valores antes e depois do serviço",
      "Tempo médio de 30 a 40 minutos para alinhamento completo",
      "Verificação gratuita da suspensão antes do alinhamento",
      "Compatível com todos os veículos: nacionais, importados, SUVs e picapes"
    ],
    perguntas: [
      { pergunta: "Como saber se meu carro precisa de alinhamento?", resposta: "Os sinais mais comuns são: volante torto com o carro em linha reta, carro puxando para um lado, desgaste irregular dos pneus (mais de um lado que do outro) e vibração no volante. Recomendamos verificar o alinhamento a cada 10.000 km ou 6 meses." },
      { pergunta: "Qual a diferença entre alinhamento 3D e convencional?", resposta: "O alinhamento 3D usa câmeras de alta precisão que medem todos os ângulos simultaneamente em três dimensões. Isso garante resultado muito mais preciso que o sistema convencional, especialmente em veículos modernos com suspensão multilink." },
      { pergunta: "Preciso alinhar após trocar pneus?", resposta: "Sim, sempre recomendamos fazer alinhamento junto com a troca de pneus. Pneus novos em um carro desalinhado vão desgastar irregularmente desde o primeiro dia. Na Carplus, oferecemos pacote com desconto para troca + alinhamento." }
    ],
    keywords: ["alinhamento 3d curitiba", "alinhamento computadorizado curitiba", "alinhamento hunter curitiba", "alinhamento portão", "geometria curitiba"]
  },
  "troca-de-oleo": {
    intro: "A troca de óleo é a manutenção mais importante para a longevidade do motor do seu carro. Na Carplus Centro Automotivo em Curitiba, realizamos troca de óleo com lubrificantes das melhores marcas: Mobil, Shell Helix, Castrol, Petronas e Selenia. Trabalhamos com óleos minerais, semi-sintéticos e 100% sintéticos para todos os tipos de motor.",
    detalhes: [
      "Óleos das marcas Mobil 1, Shell Helix Ultra, Castrol Edge e Petronas Syntium",
      "Troca de filtro de óleo sempre inclusa no serviço",
      "Verificação de nível de todos os fluidos do veículo sem custo adicional",
      "Etiqueta de próxima troca colada no para-brisa",
      "Óleos especiais para carros com DPF (filtro de partículas diesel)",
      "Descarte ecológico do óleo usado conforme normas ambientais"
    ],
    perguntas: [
      { pergunta: "De quanto em quanto tempo devo trocar o óleo?", resposta: "Para óleo mineral: a cada 5.000 km ou 6 meses. Para semi-sintético: a cada 7.500 km ou 6 meses. Para sintético: a cada 10.000 km ou 12 meses. Sempre prevalece o que acontecer primeiro. Em Curitiba, com muito trânsito, recomendamos intervalos menores." },
      { pergunta: "Qual óleo é melhor: mineral, semi-sintético ou sintético?", resposta: "O sintético oferece melhor proteção, especialmente em partidas a frio (comum em Curitiba). Porém, o manual do veículo indica a especificação mínima. Carros mais novos geralmente exigem sintético. Nossa equipe consulta a especificação correta para seu modelo." },
      { pergunta: "Vocês trocam óleo de câmbio automático?", resposta: "Sim! Realizamos troca de óleo de câmbio automático e CVT com fluidos específicos para cada marca. É um serviço especializado que muitas oficinas não fazem. Recomendado a cada 60.000 km." }
    ],
    keywords: ["troca de óleo curitiba", "óleo sintético curitiba", "troca óleo portão", "mobil curitiba", "shell helix curitiba", "castrol curitiba"],
    temVideo: true,
    videoUrl: "TY8qfETXlJQ",
    videoBadge: "Video Explicativo Premium"
  },
  "scanner-automotivo": {
    intro: "O diagnóstico por scanner automotivo é fundamental para identificar problemas eletrônicos no seu veículo. Na Carplus Centro Automotivo, utilizamos scanners multiprotocolo de última geração que leem todos os módulos do carro: motor, câmbio, ABS, airbag, direção elétrica e muito mais. Atendemos todas as marcas nacionais e importadas.",
    detalhes: [
      "Scanner multiprotocolo compatível com mais de 80 marcas de veículos",
      "Leitura e apagamento de códigos de falha (DTCs) de todos os módulos",
      "Reset de luz de óleo, airbag, ABS e demais indicadores do painel",
      "Teste de atuadores para diagnóstico preciso de componentes",
      "Relatório detalhado impresso com todas as falhas encontradas",
      "Diagnóstico de injeção eletrônica, ignição e sensores"
    ],
    perguntas: [
      { pergunta: "O que significa a luz de injeção acesa no painel?", resposta: "A luz de injeção (check engine) indica que o sistema de gerenciamento do motor detectou uma falha. Pode ser desde algo simples como tampa do tanque mal fechada at���� problemas mais sérios. O scanner lê o código exato e indica o componente com defeito." },
      { pergunta: "O scanner resolve todos os problemas do carro?", resposta: "O scanner é uma ferramenta de diagnóstico que identifica a causa do problema. Após a leitura, nossa equipe analisa os códigos e propõe a solução. Em muitos casos, como reset de luz de óleo ou adaptação de peças novas, o próprio scanner resolve." },
      { pergunta: "Vocês fazem diagnóstico de carros importados?", resposta: "Sim! Temos scanners específicos para BMW, Mercedes, Audi, VW, Volvo, Land Rover, Jeep e outras marcas premium. Conseguimos acessar módulos que scanners genéricos não alcançam." }
    ],
    keywords: ["scanner automotivo curitiba", "diagnóstico eletrônico curitiba", "luz injeção curitiba", "check engine curitiba", "scanner portão"]
  },
  "suspensao-e-freios": {
    intro: "A suspensão e os freios são sistemas críticos para a segurança do seu veículo. Na Carplus Centro Automotivo, oferecemos serviço completo de revisão e reparo de amortecedores, molas, pivôs, buchas, pastilhas, discos e todo o sistema de frenagem. Utilizamos peças de qualidade com garantia e mão de obra especializada.",
    detalhes: [
      "Troca de amortecedores das marcas Cofap, Monroe, Kayaba e originais",
      "Substituição de pastilhas e discos de freio com peças de primeira linha",
      "Reparo de sistema de freio ABS com diagnóstico eletrônico",
      "Troca de pivôs, bandejas, buchas e batentes de suspensão",
      "Sangria e troca de fluido de freio DOT 4",
      "Teste de eficiência de frenagem em equipamento específico"
    ],
    perguntas: [
      { pergunta: "Como saber se os amortecedores estão ruins?", resposta: "Sinais de amortecedores gastos: carro balança muito em lombadas, instabilidade em curvas, pneus com desgaste irregular nas bordas, ruídos ao passar em buracos e aumento da distância de frenagem. Recomendamos trocar a cada 50.000 km ou quando apresentar vazamento." },
      { pergunta: "Quando devo trocar as pastilhas de freio?", resposta: "As pastilhas devem ser verificadas a cada 20.000 km. Sinais de desgaste: ruído metálico ao frear, pedal mais baixo que o normal, carro puxando para um lado ao frear. A maioria dos carros tem sensor que acende luz no painel quando as pastilhas estão no limite." },
      { pergunta: "É seguro trocar só as pastilhas sem trocar os discos?", resposta: "Depende do estado dos discos. Se estiverem dentro da medida mínima e sem ranhuras profundas, podem ser reaproveitados. Fazemos medição com paquímetro e avaliamos visualmente. Discos muito finos ou danificados devem ser trocados junto com as pastilhas." }
    ],
    keywords: ["suspensão curitiba", "amortecedor curitiba", "freio curitiba", "pastilha de freio curitiba", "disco de freio curitiba", "troca amortecedor portão"]
  },
  "ar-condicionado": {
    intro: "O ar-condicionado automotivo é essencial para o conforto em Curitiba, tanto no verão quanto no inverno úmido. Na Carplus Centro Automotivo, realizamos todos os serviços de manutenção do sistema de climatização: carga de gás, higienização, reparo de compressor, troca de filtro de cabine e diagnóstico completo do sistema.",
    detalhes: [
      "Carga de gás R134a e R1234yf (novo gás ecológico) com medição precisa",
      "Higienização do sistema com produto bactericida e fungicida",
      "Troca de filtro de cabine (filtro antipólen) de todas as marcas",
      "Reparo e troca de compressor, condensador e evaporador",
      "Detecção de vazamentos com gás traçador e luz UV",
      "Limpeza de evaporador para eliminar mau cheiro"
    ],
    perguntas: [
      { pergunta: "Por que meu ar-condicionado não gela mais?", resposta: "As causas mais comuns são: falta de gás refrigerante (vazamento), filtro de cabine entupido, condensador sujo ou compressor com defeito. Fazemos diagnóstico completo para identificar a causa antes de qualquer reparo." },
      { pergunta: "Com que frequência devo fazer manutenção no ar?", resposta: "Recomendamos: higienização a cada 6 meses ou início do verão/inverno, troca de filtro de cabine anual, verificação de gás anual. Em Curitiba, com alta umidade, a higienização é especialmente importante para evitar fungos e bactérias." },
      { pergunta: "O que causa mau cheiro no ar-condicionado?", resposta: "O mau cheiro é causado por fungos e bactérias que se proliferam no evaporador úmido. A solução é a higienização completa do sistema com produto bactericida. Em casos graves, pode ser necessária a limpeza manual do evaporador." }
    ],
    keywords: ["ar condicionado automotivo curitiba", "carga de gás curitiba", "higienização ar condicionado curitiba", "ar carro curitiba", "ar condicionado portão"]
  },
  "manutencao-motor": {
    intro: "A manutenção do motor é fundamental para garantir desempenho, economia de combustível e durabilidade do seu veículo. Na Carplus Centro Automotivo em Curitiba, realizamos revisões preventivas e corretivas completas: troca de velas, cabos, filtros, correias, bomba d'água, embreagem e muito mais. Atendemos carros nacionais e importados.",
    detalhes: [
      "Revisão completa seguindo o plano de manutenção do fabricante",
      "Troca de velas de ignição convencionais e de irídio/platina",
      "Substituição de filtro de ar, combustível e cabine",
      "Troca de correias do alternador, ar-condicionado e direção hidráulica",
      "Reparo de sistema de arrefecimento: bomba d'água, válvula termostática, mangueiras",
      "Diagnóstico e reparo de vazamentos de óleo e fluidos"
    ],
    perguntas: [
      { pergunta: "Quando devo fazer a revisão do meu carro?", resposta: "A revisão deve seguir o plano do fabricante, geralmente a cada 10.000 ou 15.000 km. Porém, em uso urbano intenso (muito trânsito, como em Curitiba), recomendamos intervalos menores. Verificamos o manual do seu veículo e indicamos o momento certo." },
      { pergunta: "Posso fazer revisão fora da concessionária sem perder garantia?", resposta: "Sim! Desde 2019, a lei garante que você pode fazer manutenção em qualquer oficina sem perder a garantia de fábrica. Basta usar peças de qualidade equivalente e guardar as notas fiscais. Na Carplus, fornecemos toda documentação necessária." },
      { pergunta: "Meu carro está consumindo muito combustível. O que pode ser?", resposta: "Consumo alto pode ter várias causas: velas gastas, filtro de ar sujo, sensores com defeito (sonda lambda, MAP, MAF), pneus murchos, alinhamento errado. Fazemos diagnóstico completo para identificar a causa e resolver o problema." }
    ],
    keywords: ["revisão carro curitiba", "manutenção motor curitiba", "troca de velas curitiba", "mecânico curitiba", "oficina mecânica portão"]
  },
  "conserto-de-rodas": {
    intro: "O conserto de rodas é uma solução econômica para recuperar rodas amassadas, trincadas ou arranhadas sem precisar comprar rodas novas. Na Carplus Centro Automotivo, utilizamos equipamento especializado para recuperar a geometria original de rodas de liga leve e aço, garantindo segurança e economia.",
    detalhes: [
      "Recuperação de rodas de liga leve amassadas por buracos e guias",
      "Solda especial para trincas em rodas de alumínio",
      "Desempeno de rodas de aço convencionais",
      "Polimento e pintura de rodas arranhadas",
      "Teste de balanceamento após o reparo para garantir o resultado",
      "Avaliação gratuita antes do orçamento"
    ],
    perguntas: [
      { pergunta: "Vale a pena consertar roda ou é melhor trocar?", resposta: "Na maioria dos casos, o conserto custa entre 30% a 50% do valor de uma roda nova e o resultado é excelente. Avaliamos cada caso: se a roda tiver trinca estrutural grave ou estiver muito danificada, recomendamos a troca por segurança." },
      { pergunta: "Conserto de roda é seguro?", resposta: "Sim, quando feito com equipamento adequado e por profissionais experientes. Utilizamos técnicas que restauram a geometria original da roda. Após o serviço, fazemos teste de balanceamento para garantir que a roda está perfeita." },
      { pergunta: "Quanto tempo leva para consertar uma roda?", resposta: "Depende do tipo de dano. Amassados simples: 1-2 horas. Trincas que precisam de solda: 1 dia (por conta do resfriamento). Pintura: 2-3 dias. Oferecemos serviço de roda reserva para não ficar sem o carro." }
    ],
    keywords: ["conserto de rodas curitiba", "roda amassada curitiba", "reparo roda liga leve curitiba", "desempeno roda curitiba", "roda trincada curitiba"]
  },
  "correia-dentada": {
    intro: "A correia dentada é uma das peças mais importantes do motor. Se ela quebrar, pode causar danos gravíssimos e irreversíveis ao motor, custando milhares de reais em reparo. Na Carplus Centro Automotivo, realizamos a troca preventiva da correia dentada com kit completo de qualidade, incluindo tensor, polia e bomba d'água quando necessário.",
    detalhes: [
      "Kit completo de correia dentada com tensor, polia e guias",
      "Verificação e troca da bomba d'água quando necessário",
      "Peças das marcas Gates, Contitech, Dayco e originais",
      "Garantia de 1 ano ou 20.000 km no serviço completo",
      "Inspeção de retentores e juntas durante o serviço",
      "Adesivo informativo com data e km da próxima troca"
    ],
    perguntas: [
      { pergunta: "Quando devo trocar a correia dentada?", resposta: "A maioria dos fabricantes recomenda trocar entre 50.000 e 100.000 km, ou a cada 4-5 anos (o que vier primeiro). Consulte o manual do seu veículo. Em Curitiba, com clima úmido, recomendamos não ultrapassar 5 anos mesmo com pouca quilometragem." },
      { pergunta: "O que acontece se a correia dentada arrebentar?", resposta: "Na maioria dos motores modernos (motores de interferência), se a correia arrebentar, as válvulas colidem com os pistões, causando dano grave ao motor. O reparo pode custar de R$ 3.000 a R$ 10.000 ou mais. Por isso a troca preventiva é fundamental." },
      { pergunta: "Por que trocar a bomba d'água junto com a correia?", resposta: "A bomba d'água fica no mesmo sistema e tem vida útil similar à correia. Se ela falhar depois, será necessário abrir todo o motor novamente. Trocar junto evita mão de obra duplicada e previne superaquecimento por falha da bomba." }
    ],
    keywords: ["correia dentada curitiba", "troca correia dentada curitiba", "kit correia dentada curitiba", "correia gates curitiba", "tensor correia curitiba"]
  },
  "retifica-de-disco-de-freio": {
    intro: "A retífica de disco de freio é um serviço especializado que restaura a superfície dos discos, eliminando ranhuras, irregularidades e vibrações no pedal. Na Carplus Centro Automotivo, localizada no bairro Portão em Curitiba, somos referência em retífica de disco de freio para toda a região sul da cidade. Se você mora no Portão, Água Verde, Santa Quitéria, Fazendinha, Novo Mundo, Capão Raso ou arredores, a Carplus é a sua melhor opção para este serviço premium com o melhor preço da região.",
    detalhes: [
      "Equipamento de usinagem próprio com precisão milimétrica",
      "Atendimento para moradores do Portão e toda região sul de Curitiba",
      "Melhor preço da região com qualidade garantida",
      "Medição de espessura antes e depois do serviço com laudo técnico",
      "Discos ventilados, sólidos e perfurados de todas as marcas",
      "Diagnóstico completo do sistema de freios incluso",
      "Garantia total no serviço de usinagem",
      "Localização estratégica na Av. Presidente Arthur da Silva Bernardes"
    ],
    perguntas: [
      { pergunta: "Qual o preço da retífica de disco de freio no Portão?", resposta: "Na Carplus Centro Automotivo oferecemos o melhor preço de retífica de disco de freio da região do Portão em Curitiba. O valor varia conforme o tamanho do disco, mas garantimos preço competitivo com qualidade superior. Consulte orçamento pelo WhatsApp (41) 3082-7282." },
      { pergunta: "A Carplus fica perto do Portão em Curitiba?", resposta: "Sim! A Carplus está localizada na Av. Presidente Arthur da Silva Bernardes, 1323, no coração do bairro Portão. Fácil acesso para quem vem da Água Verde, Santa Quitéria, Fazendinha, Novo Mundo, Capão Raso e toda região sul de Curitiba." },
      { pergunta: "Por que escolher a Carplus para retífica de disco no Portão?", resposta: "Somos especialistas em freios com mais de 10 anos de experiência. Temos equipamento de usinagem próprio, oferecemos o melhor preço da região do Portão e garantia total no serviço. Além disso, fazemos diagnóstico completo do sistema de freios." }
    ],
    keywords: ["retifica disco freio portao", "retifica disco curitiba portao", "retificar disco freio portao curitiba", "disco freio portao", "oficina freio portao curitiba", "melhor preço retifica disco portao"],
    temImagem: true,
    imagemDestaque: "/images/servicos/retifica-disco-freio-portao-curitiba.webp",
    imagemAlt: "Retífica de Disco de Freio no bairro Portão em Curitiba - Carplus Centro Automotivo - Serviço Premium com Melhor Preço da Região Sul",
    imagemTitle: "Retífica de Disco de Freio Portão Curitiba - Carplus Pneus e Oficina Mecânica"
  },
  "troca-de-fluido-de-freio": {
    intro: 'A troca de fluido de freio é um serviço de segurança essencial que muitos motoristas negligenciam. O fluido de freio é higroscópico, ou seja, absorve umidade do ar com o tempo. Essa contaminação reduz o ponto de ebulição do fluido, podendo causar "fading" (perda de frenagem) em situações de uso intenso. Na Carplus Centro Automotivo em Curitiba, realizamos a troca completa com sangria de todo o sistema, utilizando fluidos DOT3 e DOT4 de alta qualidade.',
    detalhes: [
      "Sangria completa de todo o sistema de freios (4 rodas)",
      "Fluidos DOT3 e DOT4 das melhores marcas (Bosch, TRW, Varga)",
      "Verificação de vazamentos em cilindros, pinças e conexões",
      "Teste de umidade do fluido antigo para diagnóstico",
      "Verificação do nível e condição das pastilhas e discos",
      "Garantia total no serviço com nota fiscal"
    ],
    perguntas: [
      { pergunta: "Com que frequência devo trocar o fluido de freio?", resposta: "A recomendação geral é trocar a cada 2 anos ou 40.000 km, o que ocorrer primeiro. Em Curitiba, com alta umidade, a contaminação do fluido pode ser mais rápida. Alguns fabricantes recomendam intervalos menores - consulte o manual do seu veículo." },
      { pergunta: "O que acontece se eu não trocar o fluido de freio?", resposta: "O fluido contaminado com umidade pode ferver em frenagens intensas (descidas longas, uso pesado), causando bolhas de vapor no sistema. Isso resulta em perda total ou parcial da capacidade de frenagem - extremamente perigoso. Além disso, a umidade causa corrosão interna em cilindros e pinças." },
      { pergunta: "Qual a diferença entre DOT3 e DOT4?", resposta: "O DOT4 tem ponto de ebulição mais alto que o DOT3, sendo mais resistente ao fading. Carros com freios ABS e sistemas mais modernos geralmente requerem DOT4. Nunca misture tipos diferentes. Na Carplus, usamos sempre o fluido especificado pelo fabricante do seu veículo." },
      { pergunta: "Como saber se o fluido de freio precisa ser trocado?", resposta: 'Sinais de fluido velho: cor escura (o novo é claro/amarelado), pedal de freio "esponjoso" ou que afunda, perda de eficiência em frenagens longas. Fazemos teste de umidade com equipamento específico para diagnóstico preciso.' }
    ],
    keywords: ["troca fluido de freio curitiba", "fluido de freio curitiba", "sangria freio curitiba", "DOT4 curitiba", "fluido freio portão", "manutencao freio curitiba"],
    temVideo: true,
    videoUrl: "-7jfKxcDlTs",
    videoBadge: "Video Explicativo Premium"
  },
  "rodizio-de-pneus": {
    intro: "O rodizio de pneus e um servico essencial para prolongar a vida util dos seus pneus e garantir desgaste uniforme. Na Carplus Centro Automotivo no bairro Portao em Curitiba, somos especialistas em rodizio de pneus para todos os tipos de veiculos. Realizamos o servico com agilidade e precisao, seguindo as recomendacoes tecnicas de cada fabricante, garantindo que seu veiculo rode com seguranca e economia.",
    detalhes: [
      "Rodizio tecnico seguindo padrao X, diagonal ou dianteiro-traseiro conforme veiculo",
      "Inspecao visual completa de todos os pneus durante o servico",
      "Verificacao do desgaste e indicacao de troca quando necessario",
      "Calibragem com pressao recomendada pelo fabricante inclusa",
      "Reaperto dos parafusos de roda com torquimetro",
      "Servico rapido em aproximadamente 30 minutos",
      "Atendimento para carros nacionais, importados, SUVs e picapes"
    ],
    perguntas: [
      { pergunta: "Com que frequencia devo fazer rodizio de pneus?", resposta: "Recomendamos fazer o rodizio a cada 10.000 km ou a cada 6 meses, o que ocorrer primeiro. Em veiculos com tracao dianteira, o desgaste dos pneus dianteiros e maior, tornando o rodizio ainda mais importante para equilibrar o desgaste." },
      { pergunta: "Qual o preco do rodizio de pneus na Carplus?", resposta: "O rodizio de pneus na Carplus tem o melhor custo-beneficio da regiao do Portao. O servico inclui inspecao dos pneus e calibragem. Para clientes que compram pneus conosco, oferecemos condicoes especiais. Consulte valores pelo WhatsApp (41) 3082-7282." },
      { pergunta: "O rodizio de pneus melhora o consumo de combustivel?", resposta: "Sim! Pneus com desgaste uniforme rolam melhor e geram menos resistencia, contribuindo para economia de combustivel. Alem disso, evita vibracoes e ruidos que indicam desgaste irregular, melhorando o conforto na direcao." },
      { pergunta: "Posso fazer rodizio em pneus de medidas diferentes?", resposta: "Quando os pneus dianteiros e traseiros tem medidas diferentes (comum em carros esportivos), o rodizio so pode ser feito entre pneus do mesmo eixo (direito-esquerdo). Nossa equipe avalia seu veiculo e indica o melhor procedimento." }
    ],
    keywords: ["rodizio de pneus curitiba", "rodizio pneus portao", "trocar posicao pneus curitiba", "rodizio pneu curitiba preco", "borracharia rodizio curitiba"],
    temVideo: true,
    videoUrl: "4FpPSM5vYE8",
    videoBadge: "Servico em Destaque"
  }
};
const SERVICOS_COMPLEMENTARES = {
  "pintura-de-roda": [
    { nome: "Alinhamento e Balanceamento", slug: "alinhamento-e-balanceamento" }
  ],
  "alinhamento-e-balanceamento": [
    { nome: "Balanceamento", slug: "balanceamento" },
    { nome: "Troca de Pneus", slug: "venda-de-pneus" }
  ],
  "balanceamento": [
    { nome: "Alinhamento 3D", slug: "alinhamento-e-balanceamento" },
    { nome: "Revisao de Suspensao", slug: "revisao-de-suspensao" }
  ],
  "venda-de-pneus": [
    { nome: "Alinhamento e Balanceamento", slug: "alinhamento-e-balanceamento" }
  ],
  "revisao-de-suspensao": [
    { nome: "Alinhamento 3D", slug: "alinhamento-e-balanceamento" }
  ],
  "troca-de-amortecedores": [
    { nome: "Alinhamento 3D", slug: "alinhamento-e-balanceamento" },
    { nome: "Revisao de Suspensao", slug: "revisao-de-suspensao" }
  ],
  "manutencao-de-freios": [
    { nome: "Troca de Fluido de Freio", slug: "troca-de-fluido-de-freio" },
    { nome: "Troca de Pastilha de Freio", slug: "troca-de-pastilha-de-freio" }
  ],
  "troca-de-fluido-de-freio": [
    { nome: "Manutencao de Freios", slug: "manutencao-de-freios" },
    { nome: "Troca de Pastilha", slug: "troca-de-pastilha-de-freio" }
  ],
  "troca-de-pastilha-de-freio": [
    { nome: "Retifica de Disco", slug: "retifica-de-disco-de-freio" },
    { nome: "Troca de Fluido de Freio", slug: "troca-de-fluido-de-freio" }
  ],
  "retifica-de-disco-de-freio": [
    { nome: "Troca de Pastilha de Freio", slug: "troca-de-pastilha-de-freio" },
    { nome: "Manutencao de Freios", slug: "manutencao-de-freios" },
    { nome: "Troca de Fluido de Freio", slug: "troca-de-fluido-de-freio" }
  ],
  "troca-de-oleo": [
    { nome: "Revisao Geral", slug: "revisao-geral" },
    { nome: "Troca de Filtros", slug: "troca-de-filtros" }
  ],
  "revisao-geral": [
    { nome: "Troca de Oleo", slug: "troca-de-oleo" },
    { nome: "Manutencao de Freios", slug: "manutencao-de-freios" }
  ],
  "conserto-de-rodas": [
    { nome: "Reforma de Roda", slug: "reforma-de-roda" },
    { nome: "Pintura de Roda", slug: "pintura-de-roda" }
  ],
  "reforma-de-roda": [
    { nome: "Conserto de Rodas", slug: "conserto-de-rodas" },
    { nome: "Diamante de Roda", slug: "diamante-de-roda" }
  ],
  "ar-condicionado": [
    { nome: "Troca de Filtro de Cabine", slug: "troca-de-filtros" },
    { nome: "Revisao Geral", slug: "revisao-geral" }
  ]
};
function ServiceDetail() {
  const { slug } = useParams();
  const oldService = SERVICES.find((s) => s.slug === slug);
  const newService = ALL_NEW_SERVICES.find((s) => s.slug === slug);
  const service = oldService || (newService ? {
    ...newService,
    id: newService.id,
    slug: newService.slug,
    title: newService.name,
    icon: newService.icon,
    description: newService.shortDescription
  } : null);
  const seoContent = service && SEO_CONTENT[service.slug] ? SEO_CONTENT[service.slug] : newService ? {
    intro: newService.fullDescription,
    detalhes: newService.highlights,
    perguntas: [],
    keywords: [`${newService.name.toLowerCase()} curitiba`, `${newService.name.toLowerCase()} portão`]
  } : null;
  const __seo = useSEO(
    service ? {
      title: `${service.title} em Curitiba Portão | Carplus Centro Automotivo`,
      description: `${service.description} na Carplus, bairro Portão em Curitiba. Agende: (41) 3082-7282.`,
      canonical: `https://www.carpluspneuseoficina.com.br/servico/${service.slug}/`,
      ogImage: "https://www.carpluspneuseoficina.com.br/og-carplus.webp",
      schemaJSON: [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "provider": {
            "@type": "AutoPartsStore",
            "name": "Carplus Centro Automotivo",
            "telephone": "+55-41-3082-7282",
            "url": "https://www.carpluspneuseoficina.com.br/",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Av. Arthur da Silva Bernardes, 1323",
              "addressLocality": "Curitiba",
              "addressRegion": "PR",
              "postalCode": "80320-300",
              "addressCountry": "BR"
            }
          },
          "areaServed": { "@type": "City", "name": "Curitiba" },
          "url": `https://www.carpluspneuseoficina.com.br/servico/${service.slug}/`
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.carpluspneuseoficina.com.br/" },
            { "@type": "ListItem", "position": 2, "name": "Serviços", "item": "https://www.carpluspneuseoficina.com.br/servicos/" },
            { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://www.carpluspneuseoficina.com.br/servico/${service.slug}/` }
          ]
        },
        // FAQPage Schema para Rich Snippets no Google - 12 perguntas por servico
        ...service && getServiceFaqs(service.slug).length > 0 ? [{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": getServiceFaqs(service.slug).map((faq) => ({
            "@type": "Question",
            "name": faq.pergunta,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.resposta
            }
          }))
        }] : []
      ]
    } : { title: "Serviço não encontrado | Carplus", description: "Serviço não encontrado.", noindex: true }
  );
  if (!service) return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 p-6 pt-24 md:pt-28", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold uppercase mb-4", children: "Serviço não encontrado" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500 mb-8", children: "O serviço que você procura não existe ou foi removido." }),
      /* @__PURE__ */ jsx(Link, { to: "/servicos", className: "bg-primary text-black px-7 py-3 rounded-full font-bold uppercase tracking-widest text-sm", children: "Ver Todos os Serviços" })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
  const Icon = getIcon(service.icon);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-dark", children: [
    __seo,
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "bg-white", children: [
      /* @__PURE__ */ jsx("section", { className: "relative pt-[120px] md:pt-[108px] pb-24 bg-dark text-white overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 relative z-10 text-center", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/#servicos", className: "inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-8 hover:transform hover:translate-x-[-4px] transition-all", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { size: 16 }),
          " Voltar para serviços"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-24 h-24 bg-primary text-black rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/40", children: /* @__PURE__ */ jsx(Icon, { size: 48 }) }),
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 italic uppercase tracking-tight font-bold leading-tight", children: [
          service.title,
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "em Curitiba" }),
          " – Bairro Portão"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-3xl text-white/50 font-light max-w-3xl mx-auto mb-12", children: [
          "A Carplus Centro Automotivo é referência em ",
          /* @__PURE__ */ jsx("span", { className: "text-white font-bold", children: service.title }),
          " na região sul de Curitiba, oferecendo tecnologia de ponta e atendimento especializado."
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-4", children: /* @__PURE__ */ jsxs(
          motion.a,
          {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            href: `https://wa.me/554130827282?text=Olá! Preciso de orçamento para ${service.title}`,
            className: "bg-primary text-black px-7 py-3 rounded-full font-bold flex items-center gap-3 text-sm hover:bg-yellow-600 transition-all shadow-xl uppercase tracking-tight",
            children: [
              /* @__PURE__ */ jsx(MessageSquare, { size: 20 }),
              " Agendar Serviço"
            ]
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl lg:text-4xl mb-6 leading-snug font-bold tracking-tight", children: [
            "Por que escolher a Carplus para ",
            service.title,
            "?"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-lg text-gray-500 leading-relaxed", children: [
            "Na Carplus Centro Automotivo, localizada no bairro Portão em Curitiba, investimos constantemente em equipamentos modernos e capacitacao da equipe. Nosso servico de ",
            service.title,
            " segue rigorosos padroes de seguranca e qualidade, atendendo clientes de toda Curitiba e regiao metropolitana."
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "Diferenciais técnicos e tecnologia utilizada" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
            "Diagnostico computadorizado de alta precisao",
            "Tecnicos certificados com treinamento especializado",
            "Pecas originais e de primeira linha com garantia",
            "Orcamento detalhado e transparente antes do servico",
            "Localizacao privilegiada no Portao, Curitiba"
          ].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100", children: [
            /* @__PURE__ */ jsx(CircleCheck, { className: "text-primary", size: 20 }),
            /* @__PURE__ */ jsx("span", { className: "font-bold text-gray-800", children: item })
          ] }, item)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              loading: "lazy",
              src: "/images/loja/loja-de-pneus-curitiba.webp",
              width: 1067,
              height: 800,
              className: "rounded-[40px] shadow-2xl w-full object-cover aspect-square transition-transform duration-700 group-hover:scale-105",
              alt: `Oficina mecanica especializada em ${service.title} – ${service.title} na Carplus Curitiba Portao`
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent rounded-[40px]" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-8 left-8 right-8 text-white", children: [
            /* @__PURE__ */ jsx("p", { className: "font-accent text-3xl mb-1 uppercase italic tracking-tighter", children: "10+ Anos" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm opacity-80 uppercase tracking-widest font-bold", children: "Cuidando de Curitiba" })
          ] })
        ] })
      ] }) }),
      seoContent && /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "max-w-4xl mx-auto mb-16",
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl lg:text-4xl mb-6 leading-snug font-bold tracking-tight text-center", children: [
                service.title,
                " em ",
                /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Curitiba" }),
                " – Bairro Portão"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 leading-relaxed text-center", children: seoContent.intro })
            ]
          }
        ),
        seoContent.temImagem && seoContent.imagemDestaque && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "max-w-4xl mx-auto mb-16",
            children: /* @__PURE__ */ jsxs("figure", { className: "relative rounded-3xl overflow-hidden shadow-2xl", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: seoContent.imagemDestaque,
                  alt: seoContent.imagemAlt || `${service.title} no bairro Portão em Curitiba - Carplus Centro Automotivo`,
                  title: seoContent.imagemTitle || `${service.title} Curitiba Portão`,
                  width: 1200,
                  height: 800,
                  className: "w-full h-auto object-cover",
                  loading: "lazy"
                }
              ),
              /* @__PURE__ */ jsx("figcaption", { className: "sr-only", children: seoContent.imagemAlt || `Serviço de ${service.title} realizado pela Carplus Centro Automotivo no bairro Portão, região sul de Curitiba. Atendimento especializado com melhor preço da região.` })
            ] })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold mb-6 flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 text-primary" }) }),
                  "O Que Oferecemos"
                ] }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: seoContent.detalhes.map((detalhe, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm", children: [
                  /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 text-green-500 mt-0.5 shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: detalhe })
                ] }, idx)) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold mb-6 flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 text-primary" }) }),
                  "Por Que Escolher a Carplus?"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-gray-100 shadow-sm", children: [
                    /* @__PURE__ */ jsx(Clock, { className: "w-8 h-8 text-primary mb-3" }),
                    /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900 mb-1", children: "Atendimento Rápido" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Sem agendamento para a maioria dos serviços. Atendimento por ordem de chegada." })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-gray-100 shadow-sm", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8 text-primary mb-3" }),
                    /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900 mb-1", children: "Garantia Total" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Todos os serviços com garantia por escrito. Peças com nota fiscal." })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-gray-100 shadow-sm", children: [
                    /* @__PURE__ */ jsx(Award, { className: "w-8 h-8 text-primary mb-3" }),
                    /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900 mb-1", children: "10+ Anos" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Mais de uma década cuidando dos carros de Curitiba com excelência." })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-gray-100 shadow-sm", children: [
                    /* @__PURE__ */ jsx(MapPin, { className: "w-8 h-8 text-primary mb-3" }),
                    /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900 mb-1", children: "Localização Central" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "No coração do Portão, fácil acesso de toda Curitiba e região." })
                  ] })
                ] })
              ]
            }
          )
        ] }),
        service && getServiceFaqs(service.slug).length > 0 && /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "max-w-4xl mx-auto",
            children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-2xl lg:text-3xl font-bold mb-4 text-center", children: [
                "Perguntas Frequentes sobre ",
                service.title,
                " em Curitiba"
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-gray-500 text-center mb-8", children: [
                "Tire suas duvidas sobre ",
                service.title,
                " na Carplus Centro Automotivo, bairro Portao."
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-3", children: getServiceFaqs(service.slug).map((faq, idx) => /* @__PURE__ */ jsxs(
                "details",
                {
                  className: "group bg-white rounded-xl border border-gray-200",
                  children: [
                    /* @__PURE__ */ jsxs("summary", { className: "flex items-start justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors list-none [&::-webkit-details-marker]:hidden", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900 pr-4 text-left whitespace-normal break-words flex-1", children: faq.pergunta }),
                      /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform shrink-0 self-start mt-0.5" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "px-5 pb-5 pt-0", children: /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: faq.resposta }) })
                  ]
                },
                idx
              )) })
            ]
          }
        ),
        service && SERVICOS_COMPLEMENTARES[service.slug] && SERVICOS_COMPLEMENTARES[service.slug].length > 0 && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "max-w-4xl mx-auto mt-12 p-6 bg-white rounded-xl border border-gray-200",
            children: /* @__PURE__ */ jsxs("p", { className: "text-gray-700 leading-relaxed", children: [
              "Aproveite e conheca tambem nossos servicos complementares:",
              " ",
              SERVICOS_COMPLEMENTARES[service.slug].map((s, idx) => /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: `/servico/${s.slug}`,
                    className: "text-primary font-bold hover:underline",
                    children: s.nome
                  }
                ),
                idx < SERVICOS_COMPLEMENTARES[service.slug].length - 1 ? " e " : ""
              ] }, s.slug)),
              " ",
              "para manter seu veiculo em perfeito estado."
            ] })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "sr-only", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            "Palavras-chave relacionadas: ",
            seoContent.keywords.join(", ")
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Carplus Centro Automotivo - ",
            service.title,
            " no bairro Portão em Curitiba, Paraná. Atendemos toda a região metropolitana incluindo São José dos Pinhais, Pinhais, Colombo, Araucária e Campo Largo."
          ] })
        ] })
      ] }) }),
      service && /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-center mb-12",
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl lg:text-4xl font-bold mb-4", children: [
                "O que dizem nossos clientes sobre ",
                /* @__PURE__ */ jsx("span", { className: "text-primary", children: service.title })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "Veja o que clientes da regiao de Curitiba e Portao falam sobre nosso atendimento e servicos." })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
          {
            name: "Ricardo M.",
            since: "cliente desde 2022",
            text: `Levei meu carro para ${service.title} e fiquei impressionado com o resultado. Prazo cumprido, preco justo e atendimento transparente do inicio ao fim.`
          },
          {
            name: "Patricia S.",
            since: "cliente desde 2021",
            text: `Excelente servico de ${service.title}! Equipe muito profissional e atenciosa. Recomendo para quem busca qualidade no Portao, Curitiba.`
          },
          {
            name: "Carlos A.",
            since: "cliente desde 2023",
            text: `Melhor oficina da regiao sul de Curitiba! Fiz ${service.title} e outros servicos, sempre com qualidade impecavel. Nota 10!`
          }
        ].map((review, idx) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: idx * 0.1 },
            className: "bg-gray-50 rounded-2xl p-6 border border-gray-100",
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 mb-4", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 text-primary fill-primary" }, i)) }),
              /* @__PURE__ */ jsxs("p", { className: "text-gray-700 leading-relaxed mb-4", children: [
                '"',
                review.text,
                '"'
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-primary font-bold text-sm", children: review.name.charAt(0) }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-bold text-gray-900", children: review.name }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: review.since })
                ] })
              ] })
            ]
          },
          idx
        )) })
      ] }) }),
      slug === "troca-de-fluido-de-freio" && /* @__PURE__ */ jsxs("section", { className: "relative py-24 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a] overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[120px]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 relative z-10", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-center mb-16",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-primary/20 border border-red-500/40 text-red-400 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg shadow-red-500/10", children: [
                  /* @__PURE__ */ jsx(Play, { size: 12, fill: "currentColor" }),
                  "Video Explicativo Premium"
                ] }),
                /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-normal text-white mb-6 italic leading-snug", children: [
                  "Veja ",
                  /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Como Funciona" })
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "text-white/50 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed", children: [
                  "Assista ao video e entenda a importancia da troca de fluido de freio e os ",
                  /* @__PURE__ */ jsx("span", { className: "text-red-400 font-bold", children: "riscos de negligenciar este servico" }),
                  "."
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -40 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.7 },
                className: "relative mx-auto w-full max-w-[380px] lg:max-w-[420px]",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-gradient-to-r from-red-500/30 via-primary/20 to-red-500/30 rounded-[3rem] blur-2xl opacity-60" }),
                  /* @__PURE__ */ jsxs("div", { className: "relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-red-500/20 border-4 border-red-500/30", children: [
                    /* @__PURE__ */ jsx(
                      LiteYouTube,
                      {
                        videoId: "-7jfKxcDlTs",
                        title: "CarPlus - Troca de Fluido de Freio",
                        params: "mute=1&loop=1&playlist=-7jfKxcDlTs&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" }),
                    /* @__PURE__ */ jsx("div", { className: "absolute top-5 left-5 z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-red-500 to-primary text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-red-500/40", children: [
                      /* @__PURE__ */ jsx(Play, { size: 12, fill: "currentColor" }),
                      "Video Explicativo"
                    ] }) }),
                    /* @__PURE__ */ jsx("div", { className: "absolute top-5 right-5 z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-red-500/90 text-white px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 animate-pulse", children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { size: 10 }),
                      "Importante"
                    ] }) }),
                    /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6 z-10 bg-gradient-to-t from-black/90 to-transparent", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-white font-black text-xl uppercase tracking-tight mb-1", children: "Carplus Centro Automotivo" }),
                      /* @__PURE__ */ jsx("p", { className: "text-red-400/80 text-sm font-medium", children: "Sua seguranca em primeiro lugar" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "absolute -top-6 -right-6 w-32 h-32 bg-red-500/20 rounded-full blur-3xl" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-[50px]" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 40 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.7, delay: 0.2 },
                className: "space-y-8",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: [
                    { icon: /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6" }), title: "Seguranca", desc: "Frenagem eficiente" },
                    { icon: /* @__PURE__ */ jsx(Clock, { className: "w-6 h-6" }), title: "30-60 min", desc: "Servico rapido" },
                    { icon: /* @__PURE__ */ jsx(Star, { className: "w-6 h-6" }), title: "DOT3/DOT4", desc: "Fluidos premium" },
                    { icon: /* @__PURE__ */ jsx(Trophy, { className: "w-6 h-6" }), title: "Garantia", desc: "No servico" }
                  ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-primary/30 transition-colors group", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-11 h-11 bg-primary/15 rounded-xl flex items-center justify-center mb-3 text-primary group-hover:bg-primary/25 transition-colors", children: item.icon }),
                    /* @__PURE__ */ jsx("h3", { className: "font-bold text-white text-sm uppercase tracking-tight", children: item.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-white/40 text-xs mt-0.5", children: item.desc })
                  ] }, i)) }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-red-500/10 to-red-900/10 border-2 border-red-500/40 rounded-3xl p-8 relative overflow-hidden", children: [
                    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl" }),
                    /* @__PURE__ */ jsxs("h3", { className: "text-xl font-black text-red-400 uppercase tracking-tight mb-5 flex items-center gap-3 relative z-10", children: [
                      /* @__PURE__ */ jsx(OctagonX, { className: "text-red-500", size: 24 }),
                      "Perigos de NAO Trocar"
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-3 relative z-10", children: [
                      "Perda total da capacidade de frenagem em emergencias",
                      "Fluido velho ferve em altas temperaturas (fading)",
                      "Corrosao interna danifica cilindros e pincas",
                      'Pedal de freio fica "esponjoso" e sem resposta',
                      "Risco de acidentes graves por falha nos freios",
                      "Custo de reparo aumenta drasticamente"
                    ].map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-white/80 text-sm", children: [
                      /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-red-500 rounded-full mt-1.5 shrink-0" }),
                      item
                    ] }, i)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8", children: [
                    /* @__PURE__ */ jsxs("h3", { className: "text-xl font-black text-white uppercase tracking-tight mb-5 flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(FlaskConical, { className: "text-primary", size: 24 }),
                      "Como Fazemos a Troca"
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                      "Analise do nivel e condicao atual do fluido",
                      "Sangria completa de todo o sistema de freios",
                      "Substituicao por fluido DOT3 ou DOT4 premium",
                      "Verificacao de vazamentos em todas as conexoes",
                      "Teste de pressao e resposta do pedal",
                      "Garantia total no servico realizado"
                    ].map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-white/70 text-sm", children: [
                      /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" }),
                      item
                    ] }, i)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
                    /* @__PURE__ */ jsxs(
                      "a",
                      {
                        href: "https://wa.me/554130827282?text=Olá! Tenho interesse no serviço de Troca de Fluido de Freio. Pode me dar mais informações?",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex-1 bg-gradient-to-r from-primary to-yellow-400 text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-tight flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-[1.02]",
                        children: [
                          /* @__PURE__ */ jsx(MessageSquare, { size: 18 }),
                          " Agendar Agora"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: "tel:+554130827282",
                        className: "bg-white/5 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-tight flex items-center justify-center gap-2 hover:bg-white/10 transition-colors",
                        children: "(41) 3082-7282"
                      }
                    )
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "mt-20 grid grid-cols-1 md:grid-cols-3 gap-6",
              children: [
                {
                  icon: /* @__PURE__ */ jsx(AlertTriangle, { className: "w-8 h-8" }),
                  title: "Quando Trocar?",
                  desc: "A cada 2 anos ou 40.000 km, o que ocorrer primeiro. Em Curitiba, com alta umidade, recomendamos verificar anualmente.",
                  color: "red"
                },
                {
                  icon: /* @__PURE__ */ jsx(FlaskConical, { className: "w-8 h-8" }),
                  title: "DOT3 vs DOT4",
                  desc: "DOT4 tem ponto de ebulicao mais alto, ideal para carros com ABS. Usamos sempre o fluido especificado pelo fabricante.",
                  color: "primary"
                },
                {
                  icon: /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8" }),
                  title: "Garantia Total",
                  desc: "Servico realizado com nota fiscal, fluidos de primeira linha e garantia completa. Sua seguranca e nossa prioridade.",
                  color: "primary"
                }
              ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: `bg-[#1a1a1a] border ${item.color === "red" ? "border-red-500/30" : "border-white/10"} rounded-3xl p-8 hover:border-primary/30 transition-colors`, children: [
                /* @__PURE__ */ jsx("div", { className: `w-14 h-14 ${item.color === "red" ? "bg-red-500/20 text-red-400" : "bg-primary/20 text-primary"} rounded-2xl flex items-center justify-center mb-4`, children: item.icon }),
                /* @__PURE__ */ jsx("h3", { className: "font-black text-white text-lg uppercase tracking-tight mb-2", children: item.title }),
                /* @__PURE__ */ jsx("p", { className: "text-white/60 text-sm leading-relaxed", children: item.desc })
              ] }, i))
            }
          )
        ] })
      ] }),
      slug === "troca-de-oleo" && /* @__PURE__ */ jsxs("section", { className: "relative py-24 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a] overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 relative z-10", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-center mb-16",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-primary/20 border border-amber-500/40 text-amber-400 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg shadow-amber-500/10", children: [
                  /* @__PURE__ */ jsx(Play, { size: 12, fill: "currentColor" }),
                  "Video Explicativo Premium"
                ] }),
                /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-normal text-white mb-6 italic leading-snug", children: [
                  "Troca de ",
                  /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Oleo e Filtros" })
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "text-white/50 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed", children: [
                  "Assista ao video e entenda a importancia da troca de oleo regular para a ",
                  /* @__PURE__ */ jsx("span", { className: "text-amber-400 font-bold", children: "saude do motor" }),
                  " do seu veiculo."
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -40 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.7 },
                className: "relative mx-auto w-full max-w-[380px] lg:max-w-[420px]",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-gradient-to-r from-amber-500/30 via-primary/20 to-amber-500/30 rounded-[3rem] blur-2xl opacity-60" }),
                  /* @__PURE__ */ jsxs("div", { className: "relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-amber-500/20 border-4 border-amber-500/30", children: [
                    /* @__PURE__ */ jsx(
                      LiteYouTube,
                      {
                        videoId: "TY8qfETXlJQ",
                        title: "CarPlus - Troca de Óleo",
                        params: "mute=1&loop=1&playlist=TY8qfETXlJQ&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" }),
                    /* @__PURE__ */ jsx("div", { className: "absolute top-5 left-5 z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-amber-500 to-primary text-black px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-amber-500/40", children: [
                      /* @__PURE__ */ jsx(Play, { size: 12, fill: "currentColor" }),
                      "Video Explicativo"
                    ] }) }),
                    /* @__PURE__ */ jsx("div", { className: "absolute top-5 right-5 z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-amber-500/90 text-black px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsx(Droplet, { size: 10 }),
                      "Motor"
                    ] }) }),
                    /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6 z-10 bg-gradient-to-t from-black/90 to-transparent", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-white font-black text-xl uppercase tracking-tight mb-1", children: "Carplus Centro Automotivo" }),
                      /* @__PURE__ */ jsx("p", { className: "text-amber-400/80 text-sm font-medium", children: "Cuidando do seu motor" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "absolute -top-6 -right-6 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-[50px]" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 40 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.7, delay: 0.2 },
                className: "space-y-8",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: [
                    { value: "5.000km", label: "Intervalo Mineral", icon: /* @__PURE__ */ jsx(Droplet, { size: 20 }) },
                    { value: "10.000km", label: "Intervalo Sintetico", icon: /* @__PURE__ */ jsx(Shield, { size: 20 }) },
                    { value: "100%", label: "Filtragem", icon: /* @__PURE__ */ jsx(CircleCheck, { size: 20 }) },
                    { value: "+Vida", label: "Util do Motor", icon: /* @__PURE__ */ jsx(Star, { size: 20 }) }
                  ].map((stat, i) => /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-amber-500/30 transition-colors", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 mx-auto mb-3 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center", children: stat.icon }),
                    /* @__PURE__ */ jsx("p", { className: "text-2xl font-black text-white", children: stat.value }),
                    /* @__PURE__ */ jsx("p", { className: "text-white/50 text-xs uppercase tracking-wider", children: stat.label })
                  ] }, i)) }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8", children: [
                    /* @__PURE__ */ jsxs("h3", { className: "text-xl font-black text-white uppercase tracking-tight mb-5 flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(Droplet, { className: "text-primary", size: 24 }),
                      "Como Fazemos a Troca"
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                      "Drenar completamente o oleo antigo do carter",
                      "Substituir o filtro de oleo por um novo",
                      "Abastecer com oleo de alta qualidade",
                      "Verificar nivel de todos os fluidos",
                      "Colar etiqueta de proxima troca",
                      "Garantia total no servico realizado"
                    ].map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-white/70 text-sm", children: [
                      /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" }),
                      item
                    ] }, i)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
                    /* @__PURE__ */ jsxs(
                      "a",
                      {
                        href: "https://wa.me/554130827282?text=Olá! Tenho interesse no serviço de Troca de Óleo e Filtros. Pode me dar mais informações?",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex-1 bg-gradient-to-r from-primary to-yellow-400 text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-tight flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-[1.02]",
                        children: [
                          /* @__PURE__ */ jsx(MessageSquare, { size: 18 }),
                          " Agendar Agora"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: "tel:+554130827282",
                        className: "bg-white/5 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-tight flex items-center justify-center gap-2 hover:bg-white/10 transition-colors",
                        children: "(41) 3082-7282"
                      }
                    )
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "mt-20 grid grid-cols-1 md:grid-cols-3 gap-6",
              children: [
                {
                  icon: /* @__PURE__ */ jsx(Droplet, { className: "w-8 h-8" }),
                  title: "Tipos de Oleo",
                  desc: "Trabalhamos com oleos minerais, semi-sinteticos e 100% sinteticos das melhores marcas: Mobil, Shell, Castrol e Petronas.",
                  color: "amber"
                },
                {
                  icon: /* @__PURE__ */ jsx(Timer, { className: "w-8 h-8" }),
                  title: "Quando Trocar?",
                  desc: "Mineral: 5.000km. Semi-sintetico: 7.500km. Sintetico: 10.000km. Sempre prevalece o que ocorrer primeiro.",
                  color: "primary"
                },
                {
                  icon: /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8" }),
                  title: "Garantia Total",
                  desc: "Servico realizado com nota fiscal, oleos de primeira linha e garantia completa. Descarte ecologico do oleo usado.",
                  color: "primary"
                }
              ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: `bg-[#1a1a1a] border ${item.color === "amber" ? "border-amber-500/30" : "border-white/10"} rounded-3xl p-8 hover:border-primary/30 transition-colors`, children: [
                /* @__PURE__ */ jsx("div", { className: `w-14 h-14 ${item.color === "amber" ? "bg-amber-500/20 text-amber-400" : "bg-primary/20 text-primary"} rounded-2xl flex items-center justify-center mb-4`, children: item.icon }),
                /* @__PURE__ */ jsx("h3", { className: "font-black text-white text-lg uppercase tracking-tight mb-2", children: item.title }),
                /* @__PURE__ */ jsx("p", { className: "text-white/60 text-sm leading-relaxed", children: item.desc })
              ] }, i))
            }
          )
        ] })
      ] }),
      slug === "suspensao-e-freios" && /* @__PURE__ */ jsxs("section", { className: "relative py-24 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a] overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 relative z-10", children: [
          /* @__PURE__ */ jsxs(
            motion.header,
            {
              initial: { opacity: 0, y: -20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-center mb-16",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-orange-500/20 border border-primary/40 text-primary px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg shadow-primary/10", children: [
                  /* @__PURE__ */ jsx(Play, { size: 12, fill: "currentColor" }),
                  "Video Premium Exclusivo"
                ] }),
                /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-normal text-white mb-6 italic leading-snug", children: [
                  "Suspensao e Freios ",
                  /* @__PURE__ */ jsx("span", { className: "text-primary", children: "em Acao" })
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "text-white/50 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed", children: [
                  "Assista ao nosso video e entenda a importancia de manter a ",
                  /* @__PURE__ */ jsx("span", { className: "text-primary font-bold", children: "suspensao e freios" }),
                  " do seu veiculo em perfeito estado."
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
            /* @__PURE__ */ jsxs(
              motion.figure,
              {
                initial: { opacity: 0, x: -40 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.7 },
                className: "relative mx-auto w-full max-w-[380px] lg:max-w-[420px]",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-gradient-to-r from-primary/30 via-orange-500/20 to-primary/30 rounded-[3rem] blur-2xl opacity-60" }),
                  /* @__PURE__ */ jsxs("div", { className: "relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 border-4 border-primary/30", children: [
                    /* @__PURE__ */ jsx(
                      LiteYouTube,
                      {
                        videoId: "OEDrtkA19mY",
                        title: "Carplus Centro Automotivo - Servico de Suspensao e Freios em Curitiba",
                        params: "mute=1&loop=1&playlist=OEDrtkA19mY&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" }),
                    /* @__PURE__ */ jsx("div", { className: "absolute top-5 left-5 z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-primary to-orange-500 text-black px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-primary/40", children: [
                      /* @__PURE__ */ jsx(Play, { size: 12, fill: "currentColor" }),
                      "Video Exclusivo"
                    ] }) }),
                    /* @__PURE__ */ jsx("div", { className: "absolute top-5 right-5 z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-white/90 text-black px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsx(Shield, { size: 10 }),
                      "Seguranca"
                    ] }) }),
                    /* @__PURE__ */ jsxs("figcaption", { className: "absolute bottom-0 left-0 right-0 p-6 z-10 bg-gradient-to-t from-black/90 to-transparent", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-white font-black text-xl uppercase tracking-tight mb-1", children: "Carplus Centro Automotivo" }),
                      /* @__PURE__ */ jsx("p", { className: "text-primary/80 text-sm font-medium", children: "Especialistas em Suspensao e Freios" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 -left-6 w-40 h-40 bg-orange-500/10 rounded-full blur-[50px]" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.article,
              {
                initial: { opacity: 0, x: 40 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.7, delay: 0.2 },
                className: "space-y-8",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: [
                    { icon: /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6" }), title: "Seguranca", desc: "Frenagem precisa" },
                    { icon: /* @__PURE__ */ jsx(Clock, { className: "w-6 h-6" }), title: "1-3 horas", desc: "Servico completo" },
                    { icon: /* @__PURE__ */ jsx(Star, { className: "w-6 h-6" }), title: "Pecas Premium", desc: "Cofap, Monroe" },
                    { icon: /* @__PURE__ */ jsx(Trophy, { className: "w-6 h-6" }), title: "Garantia", desc: "Total no servico" }
                  ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-primary/30 transition-colors group", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-11 h-11 bg-primary/15 rounded-xl flex items-center justify-center mb-3 text-primary group-hover:bg-primary/25 transition-colors", children: item.icon }),
                    /* @__PURE__ */ jsx("h3", { className: "font-bold text-white text-sm uppercase tracking-tight", children: item.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-white/40 text-xs mt-0.5", children: item.desc })
                  ] }, i)) }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-orange-500/10 to-red-900/10 border-2 border-orange-500/40 rounded-3xl p-8 relative overflow-hidden", children: [
                    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" }),
                    /* @__PURE__ */ jsxs("h3", { className: "text-xl font-black text-orange-400 uppercase tracking-tight mb-5 flex items-center gap-3 relative z-10", children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "text-orange-500", size: 24 }),
                      "Sinais de Problema"
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-3 relative z-10", children: [
                      "Carro balancando muito em lombadas e buracos",
                      "Ruidos ao passar em irregularidades na pista",
                      "Vibracao no volante durante a frenagem",
                      "Aumento da distancia para frear o veiculo",
                      "Pneus com desgaste irregular nas bordas",
                      "Carro puxando para um lado ao frear"
                    ].map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-white/80 text-sm", children: [
                      /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-orange-500 rounded-full mt-1.5 shrink-0" }),
                      item
                    ] }, i)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8", children: [
                    /* @__PURE__ */ jsxs("h3", { className: "text-xl font-black text-white uppercase tracking-tight mb-5 flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(Wrench, { className: "text-primary", size: 24 }),
                      "Nossos Servicos"
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                      "Troca de amortecedores dianteiros e traseiros",
                      "Substituicao de pastilhas e discos de freio",
                      "Reparo de pivos, bandejas e bieletas",
                      "Troca de buchas e batentes de suspensao",
                      "Sangria e troca de fluido de freio DOT4",
                      "Diagnostico completo com laudo tecnico"
                    ].map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-white/70 text-sm", children: [
                      /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" }),
                      item
                    ] }, i)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
                    /* @__PURE__ */ jsxs(
                      "a",
                      {
                        href: "https://wa.me/554130827282?text=Olá! Tenho interesse no serviço de Suspensão e Freios. Pode me dar mais informações?",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex-1 bg-gradient-to-r from-primary to-orange-400 text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-tight flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-[1.02]",
                        children: [
                          /* @__PURE__ */ jsx(MessageSquare, { size: 18 }),
                          " Agendar Agora"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: "tel:+554130827282",
                        className: "bg-white/5 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-tight flex items-center justify-center gap-2 hover:bg-white/10 transition-colors",
                        children: "(41) 3082-7282"
                      }
                    )
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "mt-20 grid grid-cols-1 md:grid-cols-3 gap-6",
              children: [
                { icon: /* @__PURE__ */ jsx(Award, { size: 28 }), title: "Pecas de Qualidade", desc: "Trabalhamos com as melhores marcas: Cofap, Monroe, Kayaba, Bosch e pecas originais.", color: "primary" },
                { icon: /* @__PURE__ */ jsx(Shield, { size: 28 }), title: "Garantia Total", desc: "Todos os servicos de suspensao e freios tem garantia de 6 meses ou 10.000 km.", color: "primary" },
                { icon: /* @__PURE__ */ jsx(MapPin, { size: 28 }), title: "Facil Acesso", desc: "Estamos no Portao, Curitiba. Atendemos toda a regiao metropolitana com qualidade.", color: "primary" }
              ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-colors", children: [
                /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mb-4", children: item.icon }),
                /* @__PURE__ */ jsx("h3", { className: "font-black text-white text-lg uppercase tracking-tight mb-2", children: item.title }),
                /* @__PURE__ */ jsx("p", { className: "text-white/60 text-sm leading-relaxed", children: item.desc })
              ] }, i))
            }
          )
        ] })
      ] }),
      slug === "conserto-de-rodas" && /* @__PURE__ */ jsx("section", { className: "py-20 bg-[#0a0a0a]", "aria-labelledby": "wheel-repair-gallery", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "mb-16",
            children: /* @__PURE__ */ jsx("div", { className: "relative rounded-3xl overflow-hidden shadow-2xl", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/images/rodas/recuperacao-rodas.webp",
                alt: "Recuperação e restauração de rodas danificadas na Carplus Centro Automotivo em Curitiba - Serviço especializado de conserto de rodas amassadas, trincadas e deformadas com comparativo antes e depois",
                width: 799,
                height: 1200,
                className: "w-full h-auto object-cover",
                loading: "lazy"
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsxs("header", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block bg-primary/20 border border-primary/40 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4", children: "Trabalhos Realizados" }),
          /* @__PURE__ */ jsxs("h2", { id: "wheel-repair-gallery", className: "text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4 italic", children: [
            "Rodas ",
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Recuperadas" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-white/60 max-w-2xl mx-auto text-lg leading-relaxed", children: "Confira alguns dos nossos trabalhos de recuperacao e restauracao de rodas. Transformamos rodas danificadas em rodas perfeitas novamente." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-12", children: [
          { icon: /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6" }), title: "Garantia", desc: "Em todos os reparos" },
          { icon: /* @__PURE__ */ jsx(Settings, { className: "w-6 h-6" }), title: "Equipamento", desc: "De ultima geracao" },
          { icon: /* @__PURE__ */ jsx(Clock, { className: "w-6 h-6" }), title: "Rapidez", desc: "Entrega em 1-2h" },
          { icon: /* @__PURE__ */ jsx(Star, { className: "w-6 h-6" }), title: "Qualidade", desc: "Acabamento perfeito" }
        ].map((item, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: "bg-[#1a1a1a] border border-white/10 rounded-2xl p-5 text-center",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3 text-primary", children: item.icon }),
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-white text-sm uppercase tracking-tight", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-white/50 text-xs mt-1", children: item.desc })
            ]
          },
          i
        )) }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-12", children: [
          { src: "/images/rodas/roda-polida-1.webp", alt: "Roda de liga leve polida e recuperada na Carplus Centro Automotivo Curitiba - Conserto profissional de rodas amassadas" },
          { src: "/images/rodas/roda-volvo-yokohama.webp", alt: "Detalhe de roda Volvo recuperada com pneu Yokohama na Carplus - Restauracao de acabamento original" },
          { src: "/images/rodas/volvo-xc60-rodas.webp", alt: "Volvo XC60 com rodas restauradas na oficina Carplus Centro Automotivo Curitiba Portao" },
          { src: "/images/rodas/veiculo-rodas-consertadas.webp", alt: "Veiculo com rodas consertadas estacionado na Carplus Pneus Curitiba - Servico de qualidade" }
        ].map((img, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: "relative rounded-2xl overflow-hidden aspect-square group",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: img.src,
                  alt: img.alt,
                  width: 1200,
                  height: 801,
                  className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                  loading: "lazy"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" })
            ]
          },
          i
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 md:p-10 mb-10", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white uppercase tracking-tight mb-6", children: "Tipos de Consertos de Rodas que Realizamos" }),
          /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", role: "list", children: [
            "Rodas amassadas por impacto em buracos",
            "Rodas trincadas ou com fissuras",
            "Rodas com corrosao ou oxidacao",
            "Rodas riscadas ou arranhadas em guias",
            "Rodas com empenamento lateral",
            "Rodas de liga leve e aluminio",
            "Rodas de aco (ferro)",
            "Rodas cromadas ou diamantadas",
            "Restauracao de acabamento original"
          ].map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-white/80", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-primary rounded-full shrink-0", "aria-hidden": "true" }),
            item
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://wa.me/554130827282?text=Olá! Tenho interesse no serviço de Conserto de Rodas. Pode me dar mais informações e orçamento?",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-tight hover:bg-yellow-400 transition-colors shadow-lg shadow-primary/30",
            children: [
              /* @__PURE__ */ jsx(MessageSquare, { size: 18 }),
              " Solicitar Orcamento via WhatsApp"
            ]
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-primary text-black", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 text-center", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl lg:text-5xl mb-4 leading-tight italic uppercase font-bold", children: [
          "Resolva o Problema ",
          /* @__PURE__ */ jsx("br", {}),
          " do seu Carro Hoje"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-base mb-8 max-w-2xl mx-auto opacity-70", children: "Não deixe para depois. Pequenas manutenções evitam gastos altos no futuro." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-center gap-3", children: [
          /* @__PURE__ */ jsxs(
            motion.a,
            {
              whileHover: { scale: 1.03 },
              whileTap: { scale: 0.97 },
              href: "https://wa.me/554130827282",
              className: "bg-black text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-gray-900 transition-all flex items-center justify-center gap-2 shadow-lg uppercase tracking-tight",
              children: [
                /* @__PURE__ */ jsx(MessageSquare, { size: 16 }),
                " Chamar no WhatsApp"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.a,
            {
              whileHover: { scale: 1.03 },
              whileTap: { scale: 0.97 },
              href: "tel:+554130827282",
              className: "bg-black/10 border border-black/20 text-black px-7 py-3 rounded-full font-bold text-sm hover:bg-black/20 transition-all flex items-center justify-center gap-2 uppercase tracking-tight",
              children: [
                /* @__PURE__ */ jsx(Phone, { size: 16 }),
                " (41) 3082-7282"
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-1 bg-primary" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-gray-400", children: "Pneus" }),
            /* @__PURE__ */ jsx("div", { className: "w-12 h-1 bg-primary" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-black text-dark", children: [
            "Pneus em ",
            /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Destaque" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-500 mt-4", children: "Aproveite para conhecer nossos pneus das melhores marcas" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4", children: TIRES.filter((t) => t && t.destaque).slice(0, 6).map((tire) => /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/pneu/${tire.slug}`,
            className: "bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/30 transition-all group",
            children: [
              /* @__PURE__ */ jsx("div", { className: "aspect-square mb-3 overflow-hidden rounded-xl bg-gray-50", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: tire.imagem,
                  alt: tire.nome,
                  width: 600,
                  height: 600,
                  className: "w-full h-full object-contain group-hover:scale-105 transition-transform",
                  loading: "lazy"
                }
              ) }),
              /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-gray-400 uppercase", children: tire.marca }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-dark truncate", children: tire.medida }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 truncate", children: tire.linha })
            ]
          },
          tire.id
        )) }),
        /* @__PURE__ */ jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/pneus",
            className: "inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-full font-bold uppercase tracking-tight hover:bg-yellow-400 transition-all shadow-lg",
            children: [
              "Ver Todos os Pneus ",
              /* @__PURE__ */ jsx(ChevronRight, { size: 20 })
            ]
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-1 bg-primary" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-gray-400", children: "Cobertura" }),
            /* @__PURE__ */ jsx("div", { className: "w-12 h-1 bg-primary" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-black text-dark", children: [
            "Atendemos ",
            /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Toda Curitiba" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-500 mt-4", children: [
            service.title,
            " para moradores de todos os bairros e cidades da regiao"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3", children: NEIGHBORHOODS.slice(0, 18).map((neighborhood) => {
          const neighborhoodSlug = neighborhood.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
          return /* @__PURE__ */ jsxs(
            Link,
            {
              to: `/bairro/${neighborhoodSlug}`,
              className: "bg-gray-50 hover:bg-primary/10 border border-gray-100 hover:border-primary/30 rounded-xl p-3 transition-all group text-center",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
                  /* @__PURE__ */ jsx(MapPin, { size: 14, className: "text-primary flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-dark group-hover:text-primary transition-colors truncate", children: neighborhood.name })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-[10px] text-gray-400", children: neighborhood.tempo })
              ]
            },
            neighborhood.name
          );
        }) }),
        /* @__PURE__ */ jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/como-chegar",
            className: "inline-flex items-center gap-2 text-primary font-bold hover:underline",
            children: [
              "Ver todos os bairros atendidos ",
              /* @__PURE__ */ jsx(ChevronRight, { size: 16 })
            ]
          }
        ) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://wa.me/554130827282?text=Olá!%20Gostaria%20de%20agendar%20um%20serviço.",
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "Fale conosco pelo WhatsApp",
        className: "fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform",
        children: /* @__PURE__ */ jsx(MessageSquare, { className: "w-6 h-6 text-white", fill: "white" })
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  ServiceDetail as default
};
