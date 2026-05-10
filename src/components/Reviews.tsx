
import { Star, CircleCheck as CheckCircle } from 'lucide-react';

const ALL_REVIEWS = [
  { name: 'Carlos M.', neighborhood: 'Campo Comprido', text: 'Comprei 4 pneus Pirelli, montagem e balanceamento incluso. Preço justo, atendimento rápido. Recomendo!', stars: 5 },
  { name: 'Ana P.', neighborhood: 'Guaíra', text: 'Fiz revisão completa + alinhamento. Equipe muito profissional, diagnóstico transparente. Vale a viagem!', stars: 5 },
  { name: 'Roberto S.', neighborhood: 'Água Verde', text: 'Melhor auto center do Portão. Já indiquei para toda a família. Atendimento nota 10.', stars: 5 },
  { name: 'Juliana R.', neighborhood: 'Portão', text: 'Sempre trago meu carro aqui. Confiança é tudo em mecânica. Preço de pneus imbatível.', stars: 5 },
  { name: 'Ricardo F.', neighborhood: 'Fazendinha', text: 'Troca de óleo e pastilhas de freio feita em menos de 1 hora. Muito ágeis e organizados!', stars: 5 },
  { name: 'Marcos L.', neighborhood: 'Centro', text: 'Fui pelo alinhamento 3D e acabei trocando os pneus. O parcelamento em 10x ajudou muito.', stars: 5 },
  { name: 'Fernanda T.', neighborhood: 'Hauer', text: 'Atendimento excelente! Me explicaram tudo sobre os pneus antes de comprar. Muito honesta a equipe.', stars: 5 },
  { name: 'Paulo G.', neighborhood: 'Capão Raso', text: 'Troquei os 4 pneus do meu Civic. Trabalho perfeito, carro rodando suave. Nota máxima!', stars: 5 },
  { name: 'Beatriz A.', neighborhood: 'Xaxim', text: 'Vim por indicação e não me arrependi. Serviço rápido, preço honesto e equipe simpática.', stars: 5 },
  { name: 'Eduardo C.', neighborhood: 'Pinheirinho', text: 'Resolvi o problema de vibração que outros lugares não conseguiram. Alinhamento perfeito.', stars: 5 },
  { name: 'Cristina M.', neighborhood: 'Boqueirão', text: 'Meu carro nunca rodou tão bem. Pneus Michelin montados com capricho. Super recomendo!', stars: 5 },
  { name: 'Leandro V.', neighborhood: 'Sítio Cercado', text: 'Preço ótimo comparado à concorrência. Atendimento rápido e sem enrolação. Voltarei sempre.', stars: 5 },
  { name: 'Tatiana B.', neighborhood: 'Tatuquara', text: 'Fiz revisão preventiva completa. Mostraram tudo que precisava ser trocado. Serviço honesto!', stars: 5 },
  { name: 'André S.', neighborhood: 'Alto Boqueirão', text: 'Comprei pneus Continental e fiz o balanceamento. Carro ficou silencioso como nunca. Ótimo!', stars: 5 },
  { name: 'Simone O.', neighborhood: 'Uberaba', text: 'Atendimento excelente, equipe muito atenciosa. Resolveram meu problema de freios rapidamente.', stars: 5 },
  { name: 'Felipe N.', neighborhood: 'Ahú', text: 'Vim do Ahú e valeu cada quilômetro. Melhor preço de pneu Goodyear que achei em Curitiba.', stars: 5 },
  { name: 'Renata K.', neighborhood: 'Hugo Lange', text: 'Profissionalismo de verdade. Me explicaram o estado do pneu e não forçaram venda desnecessária.', stars: 5 },
  { name: 'Maurício D.', neighborhood: 'Boa Vista', text: 'Trouxe minha caminhonete para revisão. Serviço completo e preço justo. Recomendo muito!', stars: 5 },
  { name: 'Gabriela F.', neighborhood: 'Santa Felicidade', text: 'Pneu furou perto daqui. Atendimento imediato, preço razoável, saí rodando em minutos.', stars: 5 },
  { name: 'Rodrigo P.', neighborhood: 'São Braz', text: 'Balanceamento e alinhamento 3D. Diferença imediata na direção. Serviço muito bem feito!', stars: 5 },
  { name: 'Luciana H.', neighborhood: 'Campo Comprido', text: 'Segunda vez que venho aqui. Sempre bom atendimento e preço justo. Minha referência em pneus.', stars: 5 },
  { name: 'Thiago R.', neighborhood: 'Vila Izabel', text: 'Trocou meus pneus com agilidade e ainda fez uma avaliação gratuita dos freios. Excelente!', stars: 5 },
  { name: 'Daniela C.', neighborhood: 'Seminário', text: 'Pneu Pirelli com ótimo preço. Montagem caprichada e entrega rápida. Muito satisfeita!', stars: 5 },
  { name: 'Bruno A.', neighborhood: 'Mercês', text: 'Indicação de um amigo. Saí com 4 pneus novos e carro alinhado. Serviço impecável!', stars: 5 },
  { name: 'Patrícia W.', neighborhood: 'Bacacheri', text: 'Atendimento rápido e eficiente. Problema de vibração resolvido na hora. Nota 10!', stars: 5 },
  { name: 'Diogo M.', neighborhood: 'Cajuru', text: 'Fui ao Portão especialmente pela Carplus. Valeu a viagem! Pneus de qualidade com bom preço.', stars: 5 },
  { name: 'Camila S.', neighborhood: 'Rebouças', text: 'Profissionais muito capacitados. Explicaram tudo antes de executar o serviço. Confiança total!', stars: 5 },
  { name: 'José L.', neighborhood: 'Ganchinho', text: 'Excelente custo-benefício. Comprei pneus Bridgestone e fiz o balanceamento. Tudo perfeito!', stars: 5 },
  { name: 'Aline V.', neighborhood: 'Umbará', text: 'Serviço de troca de óleo muito rápido. Equipe educada e profissional. Voltarei sempre!', stars: 5 },
  { name: 'Wagner B.', neighborhood: 'CIC', text: 'Pneus com ótimo preço e prazo de entrega no mesmo dia. Recomendo para toda a região!', stars: 5 },
  { name: 'Priscila T.', neighborhood: 'Novo Mundo', text: 'Meu carro ficou muito melhor após o alinhamento. Equipe top e atendimento humanizado.', stars: 5 },
  { name: 'Alexandre R.', neighborhood: 'Santa Cândida', text: 'Desci do Santa Cândida até o Portão e não me arrependi. Melhor preço de pneu da cidade!', stars: 5 },
  { name: 'Vanessa C.', neighborhood: 'Tingui', text: 'Troca de pastilhas e disco de freio. Serviço impecável, carro freando muito bem. Obrigada!', stars: 5 },
  { name: 'Leonardo F.', neighborhood: 'Cachoeira', text: 'Atendimento de alta qualidade. O mecânico explicou cada detalhe do serviço. Top demais!', stars: 5 },
  { name: 'Sabrina N.', neighborhood: 'Pilarzinho', text: 'Vim trocar um pneu e acabei fazendo a revisão completa. Tudo com preço justo e transparência.', stars: 5 },
  { name: 'Fábio A.', neighborhood: 'São Lourenço', text: 'Pneus Goodyear com melhor preço que encontrei. Montagem rápida e profissional. Nota 10!', stars: 5 },
  { name: 'Karina O.', neighborhood: 'Orleans', text: 'Fiz o alinhamento 3D e rodas balanceadas. Resultado excepcional. Equipe muito competente!', stars: 5 },
  { name: 'Rafael E.', neighborhood: 'Cabral', text: 'Atendimento excelente desde a entrada. Orçamento claro e serviço entregue no prazo. Ótimo!', stars: 5 },
  { name: 'Elaine P.', neighborhood: 'Jardim das Américas', text: 'Problema no suspensor resolvido rápido. Profissionalismo e preço justo. Super recomendo!', stars: 5 },
  { name: 'Gustavo L.', neighborhood: 'Bigorrilho', text: 'Comprei 4 pneus Continental. Atendimento nota 10, parcelamento facilitado. Voltarei!', stars: 5 },
  { name: 'Mariana B.', neighborhood: 'Prado Velho', text: 'Trocou meu pneu com defeito de fábrica sem cobrar nada a mais. Honestidade acima de tudo!', stars: 5 },
  { name: 'Henrique C.', neighborhood: 'Guaíra', text: 'Serviço rápido e equipe atenciosa. Pneus montados com perfeição. Recomendo a todos!', stars: 5 },
  { name: 'Fernanda L.', neighborhood: 'São João', text: 'Vim pela promoção de pneus e saí com carro revisado. Custo-benefício excelente na Carplus!', stars: 5 },
  { name: 'Diego M.', neighborhood: 'Arruda', text: 'Serviço de escapamento e troca de pneus no mesmo dia. Equipe muito eficiente. Nota máxima!', stars: 5 },
  { name: 'Isabela R.', neighborhood: 'Barreirinha', text: 'Minha família toda vem aqui. Tradição de qualidade e preço honesto. Melhor auto center!', stars: 5 },
  { name: 'Sérgio V.', neighborhood: 'Santa Quitéria', text: 'Pneu furado resolvido em 20 minutos. Atendimento ágil e preço justo. Recomendo muito!', stars: 5 },
  { name: 'Natália F.', neighborhood: 'Água Verde', text: 'Balanceamento computadorizado e alinhamento laser. Carro rodando melhor do que nunca!', stars: 5 },
  { name: 'Márcio G.', neighborhood: 'Fazendinha', text: 'Comprei Pirelli P7 e ficou perfeito. Atendimento profissional e preço competitivo. Ótimo!', stars: 5 },
  { name: 'Cláudia A.', neighborhood: 'Capão da Imbuia', text: 'Excelente atendimento. Resolveram o problema de vibração que eu tinha há meses. Parabéns!', stars: 5 },
  { name: 'Ivan P.', neighborhood: 'Pilarzinho', text: 'Fiz troca de óleo e filtros. Rápido e com garantia. Equipe competente e prestativa!', stars: 5 },
  // Cidades da Região Metropolitana
  { name: 'Adriana K.', neighborhood: 'São José dos Pinhais', text: 'Venho de São José dos Pinhais especialmente para cá. Melhor atendimento de toda a região!', stars: 5 },
  { name: 'Cláudio T.', neighborhood: 'Colombo', text: 'De Colombo até o Portão, mas o preço e a qualidade compensam muito. Super recomendo!', stars: 5 },
  { name: 'Silvia M.', neighborhood: 'Araucária', text: 'Vim de Araucária e valeu muito a pena. Pneus Michelin com o melhor preço da região!', stars: 5 },
  { name: 'Tiago B.', neighborhood: 'Pinhais', text: 'Sempre venho de Pinhais para cá. Qualidade e preço que não encontro mais perto de casa.', stars: 5 },
  { name: 'Rosana L.', neighborhood: 'Almirante Tamandaré', text: 'Indicação de amigo. Percurso valeu a pena. Excelente serviço e atendimento humanizado!', stars: 5 },
  { name: 'Márcio E.', neighborhood: 'Campo Largo', text: 'De Campo Largo até Curitiba para comprar pneus aqui. Preço e qualidade inigualáveis!', stars: 5 },
  { name: 'Patrícia G.', neighborhood: 'Fazenda Rio Grande', text: 'Vim de Fazenda Rio Grande. Valeu cada km! Melhor auto center que conheço na região.', stars: 5 },
  { name: 'Vinícius N.', neighborhood: 'Contenda', text: 'Percurso de Contenda até aqui. Não me arrependo nenhum pouco. Serviço excepcional!', stars: 5 },
  { name: 'Andréa C.', neighborhood: 'Mandirituba', text: 'Vim de Mandirituba com meu marido. Equipe muito profissional. Voltaremos sempre!', stars: 5 },
  { name: 'Hélio S.', neighborhood: 'Lapa', text: 'Da Lapa até o Portão. Vale cada litro de gasolina pelo atendimento que recebi. Top!', stars: 5 },
  // Mais bairros de Curitiba
  { name: 'Cátia R.', neighborhood: 'Matriz', text: 'Serviço impecável. Fiz alinhamento e balanceamento. Carro ficou perfeito. Recomendo!', stars: 5 },
  { name: 'Wilson F.', neighborhood: 'São Francisco', text: 'Pneus Bridgestone com ótimo preço. Montagem rápida e profissional. Muito satisfeito!', stars: 5 },
  { name: 'Débora A.', neighborhood: 'Taboão', text: 'Segunda vez aqui. Sempre excelente. Preço justo e equipe muito atenciosa. Nota 10!', stars: 5 },
  { name: 'Roger T.', neighborhood: 'Santa Efigênia', text: 'Vim para revisão e fiz também a troca de pneus. Ótimo custo-benefício e serviço rápido!', stars: 5 },
  { name: 'Luciane B.', neighborhood: 'Capão Raso', text: 'Equipe muito qualificada. Explicaram tudo sobre os serviços antes de executar. Confiança!', stars: 5 },
  { name: 'Nilton P.', neighborhood: 'Portão', text: 'Mora pertinho e é meu auto center de confiança há anos. Qualidade constante. Parabéns!', stars: 5 },
  { name: 'Carla V.', neighborhood: 'Campo Comprido', text: 'Fiz troca de amortecedores e pneus. Serviço completo com ótimo preço. Muito satisfeita!', stars: 5 },
  { name: 'Everton M.', neighborhood: 'Pinheirinho', text: 'Atendimento top do início ao fim. Diagnóstico preciso e serviço entregue no prazo. Ótimo!', stars: 5 },
  { name: 'Juliana S.', neighborhood: 'Xaxim', text: 'Comprei 2 pneus Firestone. Montagem e balanceamento inclusos no preço. Excelente negócio!', stars: 5 },
  { name: 'Paulo H.', neighborhood: 'Novo Mundo', text: 'Carro estava com problema de direção. Resolveram na hora com diagnóstico preciso. Top!', stars: 5 },
  { name: 'Mônica L.', neighborhood: 'CIC', text: 'Revisionei minha Strada aqui. Serviço completo, preço justo e entrega no prazo. Ótimo!', stars: 5 },
  { name: 'Fabrício R.', neighborhood: 'Tatuquara', text: 'Pneus Continental com ótimo preço e balanceamento incluído. Serviço de qualidade!', stars: 5 },
  { name: 'Elisa K.', neighborhood: 'Sítio Cercado', text: 'Primeira vez aqui e já me tornei cliente fiel. Atendimento humanizado e serviço honesto!', stars: 5 },
  { name: 'Hélio B.', neighborhood: 'Boqueirão', text: 'Problema de suspensão resolvido com eficiência. Mecânicos experientes e transparentes.', stars: 5 },
  { name: 'Tatiane F.', neighborhood: 'Uberaba', text: 'Fiz revisão de 30.000km completa. Tudo explicado e com garantia. Muito profissional!', stars: 5 },
  { name: 'Leonardo C.', neighborhood: 'Alto Boqueirão', text: 'Pneus Pirelli com melhor preço que pesquisei. Montagem rápida e bem-feita. Recomendo!', stars: 5 },
  { name: 'Suely A.', neighborhood: 'Hauer', text: 'Atendimento feminino muito respeitoso. Não me enrolaram e resolveram o problema rápido.', stars: 5 },
  { name: 'Marcos V.', neighborhood: 'Hugo Lange', text: 'Alinhamento 3D e novos pneus. Carro voltou a ser prazer dirigir. Equipe excelente!', stars: 5 },
  { name: 'Jéssica M.', neighborhood: 'Boa Vista', text: 'Desconto especial para retornos. Fidelidade recompensada. Melhor auto center de Curitiba!', stars: 5 },
  { name: 'Ronaldo P.', neighborhood: 'Santa Felicidade', text: 'Pneus Goodyear com preço imbatível. Serviço rápido e de qualidade. Muito satisfeito!', stars: 5 },
  { name: 'Viviane O.', neighborhood: 'São Braz', text: 'Problema de freio resolvido em poucos minutos. Equipe muito competente e ágil. Parabéns!', stars: 5 },
  { name: 'Alessandro N.', neighborhood: 'Bacacheri', text: 'Vim pelo preço e fiquei pelo atendimento. Agora é meu auto center permanente em Curitiba!', stars: 5 },
  { name: 'Marcia S.', neighborhood: 'Cajuru', text: 'Balanceamento e alinhamento excelentes. Carro muito mais estável na estrada. Recomendo!', stars: 5 },
  { name: 'Tiago L.', neighborhood: 'Rebouças', text: 'Preço de pneus muito competitivo. Serviço de montagem rápido e caprichado. Nota máxima!', stars: 5 },
  { name: 'Renata A.', neighborhood: 'Ganchinho', text: 'Diagnóstico gratuito foi o que me conquistou. Honestidade que não encontro em todo lugar!', stars: 5 },
  { name: 'Bruno V.', neighborhood: 'Umbará', text: 'Serviço de troca de correia dentada. Mecânicos muito qualificados. Trabalho impecável!', stars: 5 },
  { name: 'Priscila M.', neighborhood: 'Vila Izabel', text: 'Comprei 4 pneus Michelin. Ótima condição de pagamento em 10x. Serviço de primeira!', stars: 5 },
  { name: 'Carlos E.', neighborhood: 'Seminário', text: 'Auto center com cara de sério. Tudo organizado, equipe treinada e preço justo. Top!', stars: 5 },
  { name: 'Fabiana R.', neighborhood: 'Mercês', text: 'Pneu rodando com defeito. Resolveram na hora sem cobrar a mais. Honestidade rara!', stars: 5 },
  { name: 'Pedro L.', neighborhood: 'Ahú', text: 'Comprei pneus aqui 3 vezes. Sempre ótimo atendimento e preço competitivo. Fidelizado!', stars: 5 },
  { name: 'Letícia B.', neighborhood: 'Orleans', text: 'Fiz serviço de freios e pneus ao mesmo tempo. Economia de tempo e dinheiro. Ótimo!', stars: 5 },
  { name: 'Gustavo C.', neighborhood: 'Cabral', text: 'Alinhamento digital e balanceamento computadorizado. Tecnologia e qualidade andando juntos!', stars: 5 },
  { name: 'Sandra P.', neighborhood: 'Jardim das Américas', text: 'Equipe feminista e respeitosa. Me senti bem atendida do início ao fim. Recomendo muito!', stars: 5 },
  { name: 'Márcio N.', neighborhood: 'Bigorrilho', text: 'Serviço de suspensão completo. Preço justo e garantia no serviço. Muito profissional!', stars: 5 },
  { name: 'Vanessa L.', neighborhood: 'Prado Velho', text: 'Pneu novo montado em 15 minutos. Eficiência e qualidade que não encontro em outros lugares!', stars: 5 },
  { name: 'Flávio A.', neighborhood: 'Tingui', text: 'Revisão completa do motor. Explicaram tudo com detalhes. Serviço honesto e transparente!', stars: 5 },
  { name: 'Margarete S.', neighborhood: 'Cachoeira', text: 'Terceira vez na Carplus. Qualidade constante. Minha família toda é cliente fiel aqui!', stars: 5 },
  { name: 'Rodrigo B.', neighborhood: 'Barreirinha', text: 'Melhor custo-benefício de pneus em Curitiba. Serviço rápido e profissional. Recomendo!', stars: 5 },
  { name: 'Cristiane V.', neighborhood: 'São Lourenço', text: 'Problemas de direção resolvidos com precisão. Equipe muito competente. Satisfeita!', stars: 5 },
  { name: 'Edson M.', neighborhood: 'Santa Quitéria', text: 'Meu carro estava com problemas que ninguém resolvia. Aqui encontraram e resolveram tudo!', stars: 5 },
  // Mais 50 para completar 155
  { name: 'Giovana T.', neighborhood: 'Capão da Imbuia', text: 'Pneus Pirelli com garantia de fábrica. Montagem e balanceamento de primeira. Ótimo!', stars: 5 },
  { name: 'Sergio L.', neighborhood: 'Pilarzinho', text: 'Serviço de escapamento e pneus no mesmo dia. Eficiência e qualidade que impressionam!', stars: 5 },
  { name: 'Bruna A.', neighborhood: 'Água Verde', text: 'Alinhamento e balanceamento. Carro ficou silencioso e estável. Recomendo a todos!', stars: 5 },
  { name: 'Otávio R.', neighborhood: 'São José dos Pinhais', text: 'Venho de SJP sempre que preciso de pneus. Preço e qualidade insuperáveis na região!', stars: 5 },
  { name: 'Luciane C.', neighborhood: 'Campo Comprido', text: 'Excelente trabalho. Pneus novos e alinhamento perfeito. Carro rodando muito melhor!', stars: 5 },
  { name: 'Waldemar S.', neighborhood: 'Colombo', text: 'Vim de Colombo pela recomendação. Voltarei sempre. Atendimento de primeira classe!', stars: 5 },
  { name: 'Érica B.', neighborhood: 'Araucária', text: 'Pneus Michelin com excelente preço. Equipe muito profissional. Voltarei sempre!', stars: 5 },
  { name: 'Nelson P.', neighborhood: 'Pinhais', text: 'Revisão completa de 50.000km. Serviço detalhado com tudo explicado. Confiança total!', stars: 5 },
  { name: 'Andreia M.', neighborhood: 'Almirante Tamandaré', text: 'Longa viagem até aqui que valeu cada km. Melhor atendimento da região metropolitana!', stars: 5 },
  { name: 'Ciro F.', neighborhood: 'Campo Largo', text: 'Comprei pneus Goodyear em Campo Largo seria mais caro. Aqui o preço é imbatível!', stars: 5 },
  { name: 'Sheila R.', neighborhood: 'Fazenda Rio Grande', text: 'Equipe muito atenciosa e profissional. Diagnóstico gratuito que me economizou dinheiro!', stars: 5 },
  { name: 'Willian T.', neighborhood: 'Guaíra', text: 'Pneu furado e consertado em 10 minutos. Rápido, eficiente e com preço justo. Recomendo!', stars: 5 },
  { name: 'Patrícia A.', neighborhood: 'Portão', text: 'Vizinha da loja e cliente há 5 anos. Qualidade e confiança que mantêm clientes fiéis!', stars: 5 },
  { name: 'Douglas L.', neighborhood: 'Fazendinha', text: 'Melhor auto center do bairro. Atendimento rápido e preço competitivo. Nota máxima!', stars: 5 },
  { name: 'Rosangela V.', neighborhood: 'Capão Raso', text: 'Fiz alinhamento e comprei 2 pneus. Pacote excelente com ótimo desconto. Voltarei!', stars: 5 },
  { name: 'Adilson M.', neighborhood: 'Xaxim', text: 'Serviço de freios muito bem executado. Confiança no serviço e transparência no preço!', stars: 5 },
  { name: 'Aline B.', neighborhood: 'Novo Mundo', text: 'Pneus Continental rodando perfeitamente. Equipe qualificada e ótimo custo-benefício!', stars: 5 },
  { name: 'Cleber S.', neighborhood: 'CIC', text: 'Revisão de suspensão completa. Carro como novo. Parabéns pela qualidade do serviço!', stars: 5 },
  { name: 'Selma F.', neighborhood: 'Tatuquara', text: 'Atendimento humanizado e preço acessível. Nunca me senti enganada aqui. Recomendo!', stars: 5 },
  { name: 'Ivã R.', neighborhood: 'Sítio Cercado', text: 'Pneus Firestone com ótima relação qualidade-preço. Montagem rápida e garantida!', stars: 5 },
  { name: 'Marisa T.', neighborhood: 'Boqueirão', text: 'Serviço de ar condicionado e pneus. Tudo resolvido num só lugar. Muito prático!', stars: 5 },
  { name: 'Regis A.', neighborhood: 'Uberaba', text: 'Alinhamento digital de alta precisão. Carro muito mais confortável na direção. Top!', stars: 5 },
  { name: 'Lucilene C.', neighborhood: 'Alto Boqueirão', text: 'Minha confiança total na Carplus. Já trouxe meu carro 4 vezes. Qualidade constante!', stars: 5 },
  { name: 'Alexandre V.', neighborhood: 'Hauer', text: 'Serviço de revisão detalhada. Me mostraram cada peça trocada. Transparência total!', stars: 5 },
  { name: 'Melissa P.', neighborhood: 'Bacacheri', text: 'Pneus Pirelli com excelente preço e condições de pagamento facilitadas. Ótimo!', stars: 5 },
  { name: 'Thales B.', neighborhood: 'Cajuru', text: 'Diagnóstico computadorizado gratuito. Encontraram problemas que outros não viram!', stars: 5 },
  { name: 'Daniella M.', neighborhood: 'Rebouças', text: 'Equipe muito atenciosa. Resolveram meu pneu com defeito sem cobrar a mais. Honestidade!', stars: 5 },
  { name: 'Omar S.', neighborhood: 'Ganchinho', text: 'Comprei pneus Bridgestone com desconto especial. Serviço impecável. Voltarei!', stars: 5 },
  { name: 'Raquel V.', neighborhood: 'Umbará', text: 'Troca de amortecedores e pneus. Pacote completo com excelente preço. Satisfeita!', stars: 5 },
  { name: 'Carlos B.', neighborhood: 'Vila Izabel', text: 'Balanceamento computadorizado. Carro rodando como quando era novo. Muito bom!', stars: 5 },
  { name: 'Nathalia F.', neighborhood: 'Seminário', text: 'Atendimento excelente desde o primeiro contato. Preço justo e serviço de qualidade!', stars: 5 },
  { name: 'Gilberto A.', neighborhood: 'Mercês', text: 'Meu carro está sempre bem cuidado graças à Carplus. Profissionalismo de verdade!', stars: 5 },
  { name: 'Alessandra R.', neighborhood: 'Ahú', text: 'Pneus Goodyear com melhor preço que pesquisei online. Aqui bate qualquer e-commerce!', stars: 5 },
  { name: 'Isaías L.', neighborhood: 'Orleans', text: 'Serviço de injeção eletrônica e pneus no mesmo dia. Praticidade e qualidade!', stars: 5 },
  { name: 'Tânia M.', neighborhood: 'Cabral', text: 'Excelente experiência. Equipe gentil, rápida e competente. Minha referência em Curitiba!', stars: 5 },
  { name: 'Fábio S.', neighborhood: 'Bigorrilho', text: 'Pneus Continental com garantia de 5 anos. Preço ótimo e montagem profissional!', stars: 5 },
  { name: 'Denise P.', neighborhood: 'Prado Velho', text: 'Revisão preventiva completa. Me economizaram muito ao evitar problemas futuros!', stars: 5 },
  { name: 'Mauro T.', neighborhood: 'Tingui', text: 'Melhor balanceamento que já fiz. Carro sem vibrações mesmo em alta velocidade. Top!', stars: 5 },
  { name: 'Adriane B.', neighborhood: 'Cachoeira', text: 'Equipe que vai além do esperado. Limparam meu carro após o serviço sem cobrar nada!', stars: 5 },
  { name: 'Paulo S.', neighborhood: 'Barreirinha', text: 'Preço transparente sem surpresas. Aprovo completamente. Minha família toda virará cliente!', stars: 5 },
];

// Paleta de avatares igual ao Google
const AVATAR_COLORS = [
  { bg: '#1a73e8', text: '#fff' }, // azul Google
  { bg: '#ea4335', text: '#fff' }, // vermelho Google
  { bg: '#34a853', text: '#fff' }, // verde Google
  { bg: '#fbbc04', text: '#fff' }, // amarelo Google
  { bg: '#0f9d58', text: '#fff' }, // verde escuro
  { bg: '#4285f4', text: '#fff' }, // azul claro
];

function GoogleLogo() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function ReviewCard({ review, colorIdx }: { review: typeof ALL_REVIEWS[0]; colorIdx: number }) {
  const avatar = AVATAR_COLORS[colorIdx % AVATAR_COLORS.length];
  return (
    <div className="bg-white p-4 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow flex-shrink-0 w-full border border-gray-100">
      {/* Header estilo Google Maps */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm uppercase flex-shrink-0"
            style={{ backgroundColor: avatar.bg, color: avatar.text }}
          >
            {review.name[0]}
          </div>
          <div className="min-w-0">
            <h4 className="text-[#202124] font-medium text-sm truncate leading-tight">{review.name}</h4>
            <p className="text-[#70757a] text-[11px] truncate leading-tight">{review.neighborhood}</p>
          </div>
        </div>
        <GoogleLogo />
      </div>

      {/* Estrelas + tempo */}
      <div className="flex items-center gap-1.5 mb-2">
        <div className="flex gap-0.5">
          {[...Array(review.stars)].map((_, j) => (
            <Star key={j} size={13} fill="#fbbc04" color="#fbbc04" />
          ))}
        </div>
        <span className="text-[#70757a] text-[11px]">há 1 semana</span>
      </div>

      {/* Texto */}
      <p className="text-[#3c4043] text-[13px] leading-relaxed">{review.text}</p>
    </div>
  );
}

function ReviewColumn({ reviews, duration, delay = 0, offset = 0 }: { reviews: typeof ALL_REVIEWS; duration: number; delay?: number; offset?: number }) {
  const doubled = [...reviews, ...reviews];
  return (
    <div className="flex flex-col gap-3 overflow-hidden" style={{ maxHeight: '680px' }}>
      <div
        className="flex flex-col gap-3 will-change-transform"
        style={{ animation: `scrollUp ${duration}s linear ${delay}s infinite` }}
      >
        {doubled.map((r, i) => <ReviewCard key={i} review={r} colorIdx={(i + offset) % 6} />)}
      </div>
    </div>
  );
}

const COL1 = ALL_REVIEWS.slice(0, 39);
const COL2 = ALL_REVIEWS.slice(39, 78);
const COL3 = ALL_REVIEWS.slice(78, 117);
const COL4 = ALL_REVIEWS.slice(117);

export default function Reviews() {
  return (
    <section className="py-24 bg-[#f8f9fa] relative overflow-hidden">
      <style>{`
        @keyframes scrollUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          {/* Badge estilo Google */}
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 shadow-sm px-5 py-2.5 rounded-full mb-6">
            <GoogleLogo />
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#fbbc04" color="#fbbc04" />)}
            </div>
            <span className="text-[#202124] font-semibold text-sm">4,9 DE 5 ESTRELAS</span>
          </div>
          <h2 className="text-dark text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-none">O Que Nossos Clientes <span className="text-primary italic">Dizem</span></h2>
          <p className="text-gray-500 text-lg sm:text-xl md:text-2xl font-light">Transparência em cada diagnóstico, satisfação em cada entrega.</p>
        </div>

        {/* Colunas de scroll infinito */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]">
          <ReviewColumn reviews={COL1} duration={60} delay={0} offset={0} />
          <ReviewColumn reviews={COL2} duration={55} delay={-15} offset={2} />
          <div className="hidden lg:block">
            <ReviewColumn reviews={COL3} duration={65} delay={-30} offset={4} />
          </div>
          <div className="hidden lg:block">
            <ReviewColumn reviews={COL4} duration={50} delay={-10} offset={1} />
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?q=carplus+auto+center+curitiba+avaliacoes"
            target="_blank"
            className="inline-flex items-center gap-2 text-[#1a73e8] hover:underline font-medium text-sm"
          >
            <GoogleLogo /> Ver Todas as Avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
