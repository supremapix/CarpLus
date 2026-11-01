// Conteúdo editorial por serviço: sintomas não são diagnósticos nem promessas de reparo.
export interface ServiceAdviceData {
  signs: string;
  tip: string;
  process: string;
  questions: { question: string; answer: string }[];
}

export const SERVICE_ADVICE: Record<string, ServiceAdviceData> = {
  "venda-de-pneus": {
    "signs": "Desgaste irregular, danos visíveis ou dúvida sobre a medida são motivos para avaliar a troca.",
    "tip": "Antes de pedir orçamento, fotografe a medida e os índices na lateral; confirme também ano, versão e recomendações do manual.",
    "process": "A consulta compara a aplicação do veículo e o uso pretendido. Preço, disponibilidade e serviços de instalação devem constar do orçamento.",
    "questions": [
      {
        "question": "Basta informar o aro?",
        "answer": "Não. Largura, perfil, índices e características exigidas pelo veículo também precisam ser conferidos."
      },
      {
        "question": "Preciso trocar todos os pneus?",
        "answer": "A decisão depende do estado do conjunto e das orientações do fabricante; envie as informações para iniciar a avaliação."
      }
    ]
  },
  "alinhamento-e-balanceamento": {
    "signs": "Volante fora de centro, puxada lateral ou vibração podem envolver pneus, rodas, geometria ou suspensão.",
    "tip": "Anote quando o sintoma aparece, sem tentar reproduzi-lo em velocidade. Informe impactos e serviços recentes.",
    "process": "A avaliação separa medição de geometria do equilíbrio do conjunto roda e pneu, antes de indicar os ajustes.",
    "questions": [
      {
        "question": "Balanceamento corrige carro puxando?",
        "answer": "Não se deve presumir essa solução. A puxada precisa de avaliação da pressão, pneus, geometria e outros componentes."
      },
      {
        "question": "Posso pedir os dois no orçamento?",
        "answer": "Sim. Peça que a proposta discrimine os procedimentos indicados e eventuais reparos necessários antes dos ajustes."
      }
    ]
  },
  "alinhamento-3d": {
    "signs": "Desgaste nas bordas e direção fora de centro pedem inspeção, especialmente depois de um impacto.",
    "tip": "Leve o histórico de troca de peças da suspensão e informe se a alteração começou após passar por um buraco.",
    "process": "A medição dos ângulos deve ser comparada à especificação do veículo; folgas e danos podem impedir um ajuste adequado.",
    "questions": [
      {
        "question": "Todo ângulo pode ser regulado?",
        "answer": "Não. As possibilidades dependem do projeto do veículo e das condições das peças."
      },
      {
        "question": "Alinhar resolve qualquer desgaste?",
        "answer": "Não. Pressão, pneus, rodas e suspensão também precisam ser considerados no diagnóstico."
      }
    ]
  },
  "montagem-de-pneu": {
    "signs": "Vazamento após troca, vibração ou dúvida sobre montagem direcional merecem inspeção do conjunto.",
    "tip": "Informe se a roda possui sensor de pressão e se o pneu exige tecnologia específica; não tente desmontar em casa.",
    "process": "A consulta verifica compatibilidade de pneu e roda, válvula e requisitos de montagem. Confirme balanceamento e demais itens na proposta.",
    "questions": [
      {
        "question": "Pneu direcional tem posição?",
        "answer": "Há marcações de montagem que precisam ser respeitadas pelo profissional, conforme o produto."
      },
      {
        "question": "Montagem inclui balanceamento?",
        "answer": "Consulte os itens do orçamento: são procedimentos distintos e a inclusão não deve ser presumida."
      }
    ]
  },
  "rodizio-de-pneus": {
    "signs": "Diferenças de desgaste entre eixos podem motivar uma avaliação de rodízio e das causas do desgaste.",
    "tip": "Confira o plano do manual; medidas diferentes por eixo e pneus direcionais podem restringir as posições.",
    "process": "Antes de trocar as posições, é necessário avaliar o estado dos pneus e o esquema permitido para o conjunto.",
    "questions": [
      {
        "question": "Rodízio recupera pneu gasto?",
        "answer": "Não. Ele não repõe borracha nem corrige dano estrutural."
      },
      {
        "question": "Todos os carros usam o mesmo esquema?",
        "answer": "Não. Tração, medidas por eixo e desenho do pneu precisam ser considerados."
      }
    ]
  },
  "conserto-de-pneu": {
    "signs": "Perda de pressão, objeto na banda ou dano lateral exigem avaliação antes de decidir pelo reparo.",
    "tip": "Não continue rodando com pneu vazio ou visivelmente danificado. Busque assistência e siga o manual do veículo.",
    "process": "A inspeção externa e interna determina se existe reparo tecnicamente admissível ou necessidade de substituição.",
    "questions": [
      {
        "question": "Bolha lateral pode receber remendo?",
        "answer": "Bolha é um sinal de dano que não deve ser tratado como furo simples; solicite avaliação para substituição."
      },
      {
        "question": "Todo furo tem conserto?",
        "answer": "Não. Localização, extensão, estado interno e recomendações do fabricante limitam a possibilidade de reparo."
      }
    ]
  },
  "manutencao-e-calibragem-de-pneus": {
    "signs": "Queda repetida de pressão, desgaste desigual ou alerta do monitoramento pedem mais que completar o ar.",
    "tip": "Use a pressão indicada pelo fabricante do veículo para a condição de carga e inclua o estepe na rotina prevista no manual.",
    "process": "A avaliação considera pressão, válvulas, sinais de vazamento e estado visual dos pneus.",
    "questions": [
      {
        "question": "Posso usar a mesma pressão em qualquer carro?",
        "answer": "Não. Consulte a etiqueta ou o manual do seu veículo."
      },
      {
        "question": "A luz de pressão significa pneu furado?",
        "answer": "Não necessariamente; pressão, sensores e o procedimento previsto no manual precisam ser verificados."
      }
    ]
  },
  "conserto-de-rodas": {
    "signs": "Vibração após impacto, amassado ou perda de pressão perto do aro pedem análise da roda.",
    "tip": "Envie fotos apenas para uma triagem inicial; uma imagem não comprova integridade estrutural.",
    "process": "O atendimento deve avaliar o dano e a viabilidade técnica antes de propor recuperação ou substituição.",
    "questions": [
      {
        "question": "Toda roda trincada pode ser recuperada?",
        "answer": "Não. Segurança e limites técnicos devem prevalecer; alguns danos exigem substituição."
      },
      {
        "question": "Balanceamento elimina empeno?",
        "answer": "Não se deve usar contrapesos como substituto de uma avaliação estrutural da roda."
      }
    ]
  },
  "reforma-de-roda": {
    "signs": "Corrosão, acabamento deteriorado e danos anteriores precisam ser distinguidos de problemas estruturais.",
    "tip": "Informe reparos já realizados e não esconda trincas com tinta antes da avaliação.",
    "process": "A consulta separa o que é estético do que compromete a roda e define se a reforma é apropriada.",
    "questions": [
      {
        "question": "Reforma sempre evita uma roda nova?",
        "answer": "Não. A substituição pode ser a opção indicada quando a integridade não puder ser assegurada."
      },
      {
        "question": "Posso escolher acabamento antes da inspeção?",
        "answer": "Você pode apresentar referências, mas a viabilidade e os limites do serviço devem ser avaliados primeiro."
      }
    ]
  },
  "diamante-de-roda": {
    "signs": "Riscos e perda do acabamento diamantado podem motivar consulta estética, sem excluir inspeção da roda.",
    "tip": "Informe se a roda já passou por usinagem; intervenções anteriores são importantes para avaliar novos trabalhos.",
    "process": "A análise considera material, desenho e condição da roda antes de indicar um processo de acabamento.",
    "questions": [
      {
        "question": "Posso diamantá-la várias vezes?",
        "answer": "Não há uma quantidade universal segura; a condição e os limites da roda precisam ser avaliados."
      },
      {
        "question": "Diamantação corrige trinca?",
        "answer": "Não é uma solução para dano estrutural. Acabamento e integridade são avaliações diferentes."
      }
    ]
  },
  "pintura-de-roda": {
    "signs": "Descascamento, manchas e oxidação aparente podem exigir preparação de superfície e avaliação do material.",
    "tip": "Evite produtos agressivos sem recomendação do fabricante e informe qualquer reparo anterior.",
    "process": "Consulte as opções de acabamento e a preparação necessária, após distinguir dano estético de estrutural.",
    "questions": [
      {
        "question": "Pintura resolve roda empenada?",
        "answer": "Não. Alteração da geometria precisa de diagnóstico separado."
      },
      {
        "question": "A cor final será idêntica à original?",
        "answer": "Confirme amostra, referência e limites do acabamento na proposta, sem presumir correspondência exata."
      }
    ]
  },
  "manutencao-de-freios": {
    "signs": "Ruídos, mudança no pedal, alerta no painel ou redução de frenagem exigem atenção profissional.",
    "tip": "Se a frenagem estiver comprometida, pare em local seguro e solicite assistência; não faça testes de frenagem no trânsito.",
    "process": "O diagnóstico deve considerar componentes de atrito, circuito hidráulico e sistemas eletrônicos presentes no veículo.",
    "questions": [
      {
        "question": "Ruído significa trocar pastilhas?",
        "answer": "Não necessariamente. O conjunto precisa ser inspecionado antes da escolha de peças."
      },
      {
        "question": "Posso seguir viagem com pedal diferente?",
        "answer": "Não ignore uma alteração na frenagem. Solicite orientação profissional e assistência se houver insegurança para conduzir."
      }
    ]
  },
  "retifica-de-disco-de-freio": {
    "signs": "Vibração ao frear ou superfície marcada do disco pode exigir medição, sem determinar automaticamente uma retífica.",
    "tip": "Não tente lixar ou usinar o disco em casa; informe quando a vibração começou e se houve troca recente de pastilhas.",
    "process": "A avaliação deve conferir condição e limites dimensionais do fabricante antes de decidir entre usinagem admissível e substituição.",
    "questions": [
      {
        "question": "Todo disco pode ser retificado?",
        "answer": "Não. Espessura, danos e limites do fabricante podem impedir o procedimento."
      },
      {
        "question": "A retífica aumenta a espessura?",
        "answer": "Não. Usinagem remove material; a decisão depende dos limites técnicos do disco."
      }
    ]
  },
  "troca-de-fluido-de-freio": {
    "signs": "Histórico desconhecido do fluido, intervalo vencido ou alteração no pedal justificam avaliação do sistema.",
    "tip": "Siga o intervalo e a especificação do manual. Não misture fluidos por aparência ou apenas pela embalagem.",
    "process": "A consulta deve identificar o fluido exigido, condição do circuito e procedimento adequado ao veículo.",
    "questions": [
      {
        "question": "Posso escolher qualquer DOT?",
        "answer": "Não. A especificação e a compatibilidade devem seguir o fabricante do veículo."
      },
      {
        "question": "Basta completar se o nível baixar?",
        "answer": "Não presuma que sim. A redução pode exigir inspeção do desgaste e de possíveis vazamentos."
      }
    ]
  },
  "troca-de-pastilha-de-freio": {
    "signs": "Chiado, alerta de desgaste ou ruído metálico precisam ser avaliados junto com discos e demais componentes.",
    "tip": "Informe ao profissional se o ruído aparece a frio, após chuva ou durante toda a frenagem, sem desmontar o conjunto.",
    "process": "A indicação de troca deve partir da inspeção, identificação da aplicação correta e avaliação das condições associadas.",
    "questions": [
      {
        "question": "Posso trocar só a pastilha que faz barulho?",
        "answer": "A substituição deve seguir o procedimento do fabricante e a avaliação do conjunto, não apenas o lado audível."
      },
      {
        "question": "Pastilha nova elimina qualquer ruído?",
        "answer": "Não há essa garantia. Outras peças e condições do sistema podem participar do sintoma."
      }
    ]
  },
  "revisao-de-suspensao": {
    "signs": "Batidas em irregularidades, instabilidade ou desgaste irregular podem ter origem em diferentes componentes.",
    "tip": "Registre se o ruído ocorre em curvas, lombadas ou piso irregular; não entre sob o carro sem estrutura profissional.",
    "process": "A revisão procura folgas, desgaste e danos antes de definir quais componentes precisam de intervenção.",
    "questions": [
      {
        "question": "Barulho é sempre amortecedor?",
        "answer": "Não. Buchas, suportes, articulações e outros elementos também devem ser avaliados."
      },
      {
        "question": "Preciso trocar tudo de uma vez?",
        "answer": "O orçamento deve explicar as peças indicadas pelo diagnóstico e eventuais recomendações de substituição em conjunto."
      }
    ]
  },
  "troca-de-amortecedores": {
    "signs": "Oscilações anormais, vazamento aparente e perda de estabilidade podem motivar avaliação dos amortecedores e suportes.",
    "tip": "Não use apenas a quilometragem ou um teste caseiro de balanço como diagnóstico definitivo.",
    "process": "A análise considera o conjunto da suspensão, aplicação das peças e recomendações do fabricante para a substituição.",
    "questions": [
      {
        "question": "Trocar amortecedor resolve qualquer batida?",
        "answer": "Não. O ruído pode vir de outros componentes que precisam ser examinados."
      },
      {
        "question": "É necessário avaliar coxins e batentes?",
        "answer": "Sim, esses itens fazem parte do conjunto a inspecionar; a troca depende do estado encontrado."
      }
    ]
  },
  "cambagem-e-caster": {
    "signs": "Inclinação aparente da roda ou desgaste lateral pede medição e inspeção, não correção por tentativa.",
    "tip": "Informe impactos e alterações na suspensão; evite propostas de modificação sem explicação técnica.",
    "process": "Os valores medidos devem ser comparados à especificação, respeitando os ajustes previstos para o modelo.",
    "questions": [
      {
        "question": "Todo veículo permite regular cambagem?",
        "answer": "Não. Alguns projetos não oferecem ajuste direto; a causa do desvio precisa ser investigada."
      },
      {
        "question": "Caster e cambagem são a mesma coisa?",
        "answer": "Não. São parâmetros distintos de geometria, avaliados segundo os valores previstos para o veículo."
      }
    ]
  },
  "gabaritagem-de-eixo": {
    "signs": "Desvio de trajetória após impacto ou dificuldade para atingir medidas de alinhamento pode exigir análise da geometria.",
    "tip": "Leve o histórico de colisões e reparos. Não presuma que um ajuste simples eliminará danos de impacto.",
    "process": "A consulta deve esclarecer quais medições são necessárias e se o dano admite reparo ou exige substituição de componentes.",
    "questions": [
      {
        "question": "Precisa fazer depois de qualquer buraco?",
        "answer": "Não automaticamente. A indicação depende dos sintomas, da inspeção e das medições."
      },
      {
        "question": "O serviço substitui uma avaliação pós-colisão?",
        "answer": "Não. Uma colisão pode envolver outros sistemas e requerer avaliação mais abrangente."
      }
    ]
  },
  "reparo-de-direcao-hidraulica": {
    "signs": "Direção pesada, ruído ao esterçar ou manchas de fluido podem ter causas diferentes no sistema hidráulico.",
    "tip": "Informe se o sintoma é constante ou aparece a frio. Não complete com um fluido escolhido sem conferir a especificação.",
    "process": "A investigação deve localizar a origem do problema antes de indicar intervenção em mangueiras, bomba, caixa ou outros componentes.",
    "questions": [
      {
        "question": "Toda direção usa fluido hidráulico?",
        "answer": "Não. Há sistemas elétricos e outras configurações; identifique o sistema do veículo antes da consulta."
      },
      {
        "question": "Direção pesada pode esperar?",
        "answer": "Se o controle do veículo estiver comprometido, não continue o trajeto; procure assistência."
      }
    ]
  },
  "revisao-geral": {
    "signs": "Revisões atrasadas, histórico incompleto ou mudanças de uso justificam organizar uma avaliação preventiva.",
    "tip": "Leve o manual e comprovantes anteriores para evitar decisões baseadas apenas em pacotes genéricos.",
    "process": "A revisão deve priorizar segurança, itens previstos no plano do fabricante e sintomas relatados, com orçamento dos achados.",
    "questions": [
      {
        "question": "Revisão é igual para todos os carros?",
        "answer": "Não. Ano, motorização, quilometragem e condições de uso mudam o plano de manutenção."
      },
      {
        "question": "Revisão garante que nada vai quebrar?",
        "answer": "Não. A inspeção tem limites e não elimina todas as falhas futuras; peça orientação sobre o acompanhamento."
      }
    ]
  },
  "troca-de-oleo": {
    "signs": "Intervalo de manutenção vencido, histórico incerto ou consumo anormal de óleo pedem consulta.",
    "tip": "Confira a especificação completa e o intervalo do manual, não apenas a viscosidade impressa na embalagem.",
    "process": "O atendimento deve identificar a aplicação correta e avaliar filtro, quantidade e sinais que exijam diagnóstico adicional.",
    "questions": [
      {
        "question": "Óleo escuro sozinho define a troca?",
        "answer": "Não. O plano do fabricante e o histórico de uso são fundamentais; aparência isolada não substitui avaliação."
      },
      {
        "question": "Luz de óleo se resolve com uma troca?",
        "answer": "Não presuma isso. Siga o alerta do manual e procure assistência, pois pode haver problema de pressão ou outra falha."
      }
    ]
  },
  "troca-de-correia-dentada": {
    "signs": "Prazo desconhecido, manutenção vencida ou ruído próximo ao acionamento exigem verificar o sistema do motor.",
    "tip": "Guarde a data e a quilometragem da última intervenção. Não espere a correia apresentar dano visível para consultar o plano.",
    "process": "A avaliação identifica o motor, os componentes associados e o procedimento previsto antes de definir o orçamento.",
    "questions": [
      {
        "question": "Todo carro tem correia dentada?",
        "answer": "Não. O tipo de acionamento varia conforme o motor, por isso ano e versão são necessários."
      },
      {
        "question": "Troca só a correia?",
        "answer": "O conjunto e as orientações do fabricante devem ser avaliados; tensores e outros itens podem exigir intervenção."
      }
    ]
  },
  "injecao-eletronica": {
    "signs": "Falhas de funcionamento, dificuldade de partida ou luz de avaria podem envolver diferentes sistemas do motor.",
    "tip": "Anote combustível usado, condições da falha e mensagens no painel. Não apague códigos antes de avaliar a causa.",
    "process": "O diagnóstico combina o relato com inspeção e testes pertinentes; uma peça não deve ser condenada apenas por um código.",
    "questions": [
      {
        "question": "Luz da injeção significa bico sujo?",
        "answer": "Não. O aviso pode corresponder a diferentes falhas e exige investigação."
      },
      {
        "question": "Limpeza resolve toda falha?",
        "answer": "Não. O procedimento só deve ser indicado quando houver fundamento no diagnóstico."
      }
    ]
  },
  "sistema-de-arrefecimento": {
    "signs": "Aumento de temperatura, perda de líquido ou manchas próximas ao sistema pedem avaliação.",
    "tip": "Com superaquecimento, interrompa a condução em local seguro e peça assistência. Não abra reservatório ou tampa com o sistema quente.",
    "process": "A inspeção deve buscar a origem da perda ou da variação de temperatura antes de indicar reparos e fluido adequado.",
    "questions": [
      {
        "question": "Posso apenas completar repetidamente?",
        "answer": "Perda recorrente precisa de investigação; completar não resolve a causa."
      },
      {
        "question": "Qual aditivo devo usar?",
        "answer": "A especificação e o procedimento dependem do fabricante do veículo, não apenas da cor do produto."
      }
    ]
  },
  "troca-de-filtros": {
    "signs": "Intervalo vencido, fluxo de ventilação reduzido ou histórico desconhecido podem justificar verificar filtros específicos.",
    "tip": "Identifique qual filtro está em pauta: óleo, ar do motor, combustível ou cabine têm funções e planos distintos.",
    "process": "A consulta relaciona aplicação, condição e plano de manutenção para definir quais filtros precisam ser substituídos.",
    "questions": [
      {
        "question": "Todos os filtros são trocados juntos?",
        "answer": "Não necessariamente. Cada item deve seguir o plano e a avaliação aplicáveis."
      },
      {
        "question": "Filtro de cabine é o mesmo do motor?",
        "answer": "Não. O primeiro integra a ventilação interna; o filtro de ar do motor atende outro sistema."
      }
    ]
  },
  "reparo-de-motor": {
    "signs": "Ruídos novos, fumaça, perda de desempenho ou consumo anormal de fluidos precisam de diagnóstico, não de troca por tentativa.",
    "tip": "Informe quando o sintoma ocorre e o histórico de manutenção. Alertas de óleo ou temperatura exigem seguir imediatamente o manual.",
    "process": "A investigação define os testes necessários e a extensão do reparo antes de aprovar desmontagens e peças.",
    "questions": [
      {
        "question": "Fumaça significa retífica completa?",
        "answer": "Não é possível concluir apenas pela descrição. A causa e a extensão devem ser avaliadas."
      },
      {
        "question": "Dá para fechar preço só por mensagem?",
        "answer": "Uma triagem pode começar pelo WhatsApp, mas reparos internos podem depender de testes e inspeção autorizada."
      }
    ]
  },
  "troca-de-oleo-de-cambio-automatico": {
    "signs": "Histórico de fluido desconhecido, manutenção prevista ou mudanças nas trocas de marcha pedem avaliação da transmissão.",
    "tip": "Informe tipo de câmbio, ano e versão. Não use intervalo ou fluido genérico para todas as transmissões.",
    "process": "A consulta deve verificar a especificação, o procedimento de manutenção e se há sintomas que exijam diagnóstico antes da troca.",
    "questions": [
      {
        "question": "Troca de fluido resolve trancos?",
        "answer": "Não há essa garantia. Trancos podem ter outras causas que precisam ser investigadas."
      },
      {
        "question": "Automático e CVT usam o mesmo fluido?",
        "answer": "Não se deve presumir compatibilidade; consulte a especificação exata da transmissão."
      }
    ]
  },
  "sistema-de-escapamento": {
    "signs": "Ruído diferente, vibração por baixo do carro ou cheiro de gases pedem inspeção do escapamento e das vedações.",
    "tip": "Não mantenha o veículo funcionando em local fechado. Se houver gases na cabine, interrompa o uso e procure assistência.",
    "process": "A avaliação localiza danos, fixações e possíveis vazamentos antes de indicar reparo ou substituição.",
    "questions": [
      {
        "question": "Escapamento barulhento é só o silencioso?",
        "answer": "Não necessariamente. Junções, suportes e outros componentes podem estar envolvidos."
      },
      {
        "question": "Retirar componentes é solução?",
        "answer": "Não trate a remoção de componentes de controle de emissões como reparo; solicite uma solução tecnicamente adequada."
      }
    ]
  },
  "ajuste-de-motor": {
    "signs": "Marcha lenta irregular ou resposta diferente do habitual precisam ser avaliadas conforme o sistema do veículo.",
    "tip": "Descreva se a alteração acontece a frio, com ar-condicionado ligado ou após manutenção; evite regulagens por tentativa.",
    "process": "O atendimento deve esclarecer o significado do ajuste para aquele motor e verificar a causa antes de alterar parâmetros.",
    "questions": [
      {
        "question": "Todo motor permite regulagem manual?",
        "answer": "Não. Sistemas e procedimentos variam; alguns parâmetros são controlados eletronicamente."
      },
      {
        "question": "Ajuste é sinônimo de aumentar potência?",
        "answer": "Não. Esta consulta trata de funcionamento e manutenção conforme a aplicação, não de promessa de ganho de desempenho."
      }
    ]
  },
  "scanner-automotivo": {
    "signs": "Avisos eletrônicos, falhas intermitentes ou comportamento irregular podem justificar leitura de dados dos módulos.",
    "tip": "Registre a mensagem do painel e as condições do evento; não apague falhas apenas para apagar a luz.",
    "process": "A leitura orienta a investigação, que pode precisar de inspeções e testes adicionais antes de identificar a causa.",
    "questions": [
      {
        "question": "O scanner aponta a peça exata?",
        "answer": "Nem sempre. Um código é uma informação para o diagnóstico, não uma ordem automática de substituição."
      },
      {
        "question": "Apagar o código conserta o problema?",
        "answer": "Não. A causa deve ser tratada e o resultado verificado segundo o procedimento aplicável."
      }
    ]
  },
  "reparo-eletrico": {
    "signs": "Partida irregular, iluminação falhando ou acessórios que param de funcionar podem ter origem em conexões, alimentação ou componentes.",
    "tip": "Informe acessórios instalados e intervenções recentes. Não substitua fusíveis por valores diferentes nem improvise pontes.",
    "process": "A investigação deve localizar o circuito afetado e testar a causa antes de trocar componentes.",
    "questions": [
      {
        "question": "Falha elétrica é sempre bateria?",
        "answer": "Não. Alimentação, conexões, carregamento e outros circuitos podem participar."
      },
      {
        "question": "Cheiro de queimado pode esperar?",
        "answer": "Interrompa o uso em segurança e procure assistência; não tente desmontar um circuito energizado."
      }
    ]
  },
  "bateria-automotiva": {
    "signs": "Partida lenta, falhas após ficar estacionado ou aviso de carga exigem distinguir bateria de problemas no carregamento.",
    "tip": "Informe idade da bateria e frequência de uso. Veículos com start-stop podem exigir aplicação e procedimentos específicos.",
    "process": "A consulta deve avaliar bateria, conexões e sistema de carga antes de indicar uma substituição compatível.",
    "questions": [
      {
        "question": "Basta escolher a mesma amperagem?",
        "answer": "Não. Dimensões, tecnologia, terminais e requisitos do veículo também precisam ser conferidos."
      },
      {
        "question": "Uma bateria nova resolve descarga recorrente?",
        "answer": "Não necessariamente. É preciso investigar a origem da descarga para evitar repetir o problema."
      }
    ]
  },
  "higienizacao-de-ar-condicionado": {
    "signs": "Odor ao ligar a ventilação ou sujeira no sistema pode motivar inspeção do filtro e dos componentes acessíveis.",
    "tip": "Não tente mascarar o odor com perfume; informe se há umidade ou retorno frequente do problema.",
    "process": "A consulta define os pontos a inspecionar e o procedimento de limpeza, sem prometer eliminação de todos os agentes ou benefícios médicos.",
    "questions": [
      {
        "question": "Higienização faz o ar gelar mais?",
        "answer": "Não substitui diagnóstico de refrigeração quando o sistema não resfria adequadamente."
      },
      {
        "question": "O filtro está incluído?",
        "answer": "Confirme no orçamento a necessidade e o fornecimento do filtro, além do escopo da limpeza."
      }
    ]
  },
  "manutencao-de-ar-condicionado": {
    "signs": "Resfriamento reduzido, funcionamento intermitente ou ruído ao acionar o sistema precisam de avaliação.",
    "tip": "Informe quando o problema aparece e se já houve recarga; não manipule o circuito refrigerante em casa.",
    "process": "O diagnóstico deve considerar vazamentos e funcionamento dos componentes antes de indicar fluido ou reparo.",
    "questions": [
      {
        "question": "Basta completar o gás?",
        "answer": "Não se deve presumir isso. A causa da perda ou da falta de refrigeração precisa ser investigada."
      },
      {
        "question": "Qual gás meu carro usa?",
        "answer": "A identificação deve seguir a etiqueta e a especificação do veículo; produtos não são escolhidos apenas por preço."
      }
    ]
  },
  "inspecao-veicular": {
    "signs": "Antes de comprar um usado ou iniciar uma viagem, dúvidas sobre o histórico justificam uma avaliação organizada.",
    "tip": "Leve registros de manutenção e relate o objetivo da inspeção para combinar o escopo previamente.",
    "process": "A consulta deve esclarecer os sistemas verificados, achados e limites da inspeção, distinguindo-a de laudos e certificações oficiais.",
    "questions": [
      {
        "question": "A inspeção garante que o usado não tem defeitos?",
        "answer": "Não. Há limitações de acesso e falhas intermitentes; peça o registro do que foi efetivamente avaliado."
      },
      {
        "question": "Vale como vistoria oficial?",
        "answer": "Não presuma equivalência. Confirme o documento exigido e o serviço apropriado à sua finalidade."
      }
    ]
  },
  "vans-e-utilitarios": {
    "signs": "Uso com carga, trajetos frequentes e paradas constantes exigem atenção ao plano específico do veículo.",
    "tip": "Informe modelo, versão, capacidade de carga e rotina de trabalho; a aplicação dos pneus não depende apenas do aro.",
    "process": "A triagem confirma o atendimento ao veículo e organiza a avaliação dos sistemas prioritários conforme o uso.",
    "questions": [
      {
        "question": "Posso usar pneu de passeio na van?",
        "answer": "A compatibilidade deve respeitar medidas, índices e requisitos do fabricante; não escolha apenas pela aparência."
      },
      {
        "question": "Como planejar uma parada de manutenção?",
        "answer": "Envie o histórico e a disponibilidade do veículo para consultar escopo, peças e agenda, sem presumir prazo fechado."
      }
    ]
  },
  "carros-classicos": {
    "signs": "Longos períodos parado, histórico incompleto ou peças adaptadas pedem avaliação cuidadosa antes de retomar o uso.",
    "tip": "Registre modificações e referências das peças; aparência preservada não comprova condição de pneus, fluidos ou componentes.",
    "process": "A consulta deve confirmar a viabilidade do atendimento e discutir disponibilidade de peças e intervenções compatíveis com o projeto.",
    "questions": [
      {
        "question": "Pouca quilometragem dispensa manutenção?",
        "answer": "Não. Tempo parado e envelhecimento também precisam ser considerados no plano do veículo."
      },
      {
        "question": "A oficina garante peças originais para qualquer clássico?",
        "answer": "Não. Disponibilidade, procedência e alternativas devem ser discutidas caso a caso antes da autorização."
      }
    ]
  },
  "palhetas-de-para-brisa": {
    "signs": "Riscos de água, trepidação ou borracha solta podem prejudicar a visibilidade e exigem avaliar palhetas e vidro.",
    "tip": "Antes da chuva, observe o estado do conjunto e consulte o manual sobre limpeza e posição de manutenção.",
    "process": "A consulta verifica tamanho, encaixe e estado dos braços e do vidro para indicar a substituição apropriada.",
    "questions": [
      {
        "question": "Qualquer palheta do mesmo tamanho serve?",
        "answer": "Não. O encaixe e a aplicação do veículo também devem ser conferidos."
      },
      {
        "question": "Palheta nova elimina todos os riscos no vidro?",
        "answer": "Não. Sujeira, dano no vidro ou problema no braço podem exigir outra providência."
      }
    ]
  },
  "loja-online": {
    "signs": "Dúvidas de aplicação, medidas diferentes no carro ou anúncios com itens pouco claros devem ser resolvidos antes da compra.",
    "tip": "Envie a medida completa, ano e versão; peça orçamento com marca, modelo, índices e serviços discriminados.",
    "process": "O catálogo inicia a escolha e o WhatsApp permite consultar compatibilidade, disponibilidade, condições e atendimento na unidade do Portão.",
    "questions": [
      {
        "question": "O catálogo confirma estoque imediato?",
        "answer": "Não. Confirme disponibilidade e condições com a equipe antes de se deslocar ou concluir a compra."
      },
      {
        "question": "O valor inclui instalação?",
        "answer": "Solicite a proposta detalhada; montagem, balanceamento e outros serviços não devem ser considerados incluídos sem confirmação."
      }
    ]
  },
  "loja-de-pneus": {
    "signs": "Chegar à loja com dúvida de aplicação, desgaste ou perda de pressão é diferente de escolher apenas uma marca.",
    "tip": "Para preparar a visita ao Portão, envie a medida completa e diga se quer avaliar os pneus atuais ou consultar uma substituição.",
    "process": "A conversa pode organizar as opções do catálogo e os itens do orçamento. A inspeção do conjunto ajuda a definir a necessidade de troca e serviços associados.",
    "questions": [
      {
        "question": "Preciso escolher uma marca antes de conversar?",
        "answer": "Não. Comece pela aplicação correta do veículo e pelo tipo de uso; depois compare as opções disponíveis."
      },
      {
        "question": "Posso reservar atendimento pelo catálogo?",
        "answer": "Consulte a equipe para confirmar disponibilidade e agenda. Visualizar um produto não confirma reserva nem instalação imediata."
      }
    ]
  },
  "suspensao-e-freios": {
    "signs": "Vibração durante a frenagem acompanhada de ruídos na suspensão exige olhar para mais de um sistema.",
    "tip": "Explique separadamente os sinais: quando o ruído surge, se o pedal mudou e se houve impacto. Não tente provocar o defeito dirigindo.",
    "process": "A avaliação conjunta distingue problemas de estabilidade e de frenagem, estabelecendo prioridades e reparos conforme os achados.",
    "questions": [
      {
        "question": "Uma revisão conjunta significa trocar os dois sistemas?",
        "answer": "Não. O diagnóstico deve apontar os componentes envolvidos e justificar cada item do orçamento."
      },
      {
        "question": "Qual problema deve ser atendido primeiro?",
        "answer": "Alterações que comprometem controle ou frenagem exigem atenção imediata; se conduzir não for seguro, solicite assistência em vez de seguir até a oficina."
      }
    ]
  },
  "ar-condicionado": {
    "signs": "Mau cheiro, pouca ventilação e falta de refrigeração são queixas distintas, mesmo quando aparecem juntas.",
    "tip": "Ao pedir atendimento, diga se o ar sai fraco, sai quente ou apresenta odor, e se o problema é contínuo.",
    "process": "A triagem diferencia necessidade de limpeza, avaliação do filtro e diagnóstico de refrigeração para evitar contratar um procedimento inadequado.",
    "questions": [
      {
        "question": "Higienização e manutenção são o mesmo serviço?",
        "answer": "Não. A limpeza tem finalidade diferente da investigação de uma falha no resfriamento. Confirme o escopo necessário."
      },
      {
        "question": "Preciso autorizar recarga antes da avaliação?",
        "answer": "Não presuma que a recarga é a solução. Solicite primeiro uma avaliação da causa e a proposta correspondente."
      }
    ]
  },
  "manutencao-motor": {
    "signs": "Manutenção atrasada e falhas atuais precisam ser separadas: uma troca preventiva não substitui investigar um sintoma novo.",
    "tip": "Organize notas de revisões, consumo de fluidos e alertas observados. Informe mudanças recentes no funcionamento ou no abastecimento.",
    "process": "A consulta relaciona o plano do fabricante aos sintomas para definir se o próximo passo é manutenção programada ou diagnóstico específico.",
    "questions": [
      {
        "question": "Manutenção preventiva evita qualquer pane?",
        "answer": "Não existe essa garantia. Ela acompanha o plano do veículo, mas falhas novas ou intermitentes ainda podem ocorrer."
      },
      {
        "question": "Preciso autorizar abertura do motor logo de início?",
        "answer": "Peça uma explicação sobre os testes e as etapas propostas. Qualquer desmontagem deve ter escopo e autorização claros."
      }
    ]
  },
  "correia-dentada": {
    "signs": "Quando não há registro confiável da correia, a prioridade é identificar o plano de manutenção daquele motor.",
    "tip": "Ao comprar um usado, procure comprovante da intervenção com data, quilometragem e itens substituídos; adesivo isolado pode não esclarecer o histórico.",
    "process": "A equipe pode iniciar a consulta pelo modelo e motor, para verificar o procedimento e os componentes associados antes de propor a manutenção.",
    "questions": [
      {
        "question": "A aparência externa prova que a correia está boa?",
        "answer": "Não use apenas a aparência para adiar a manutenção prevista; o histórico e as orientações do fabricante são essenciais."
      },
      {
        "question": "Existe prazo único para todos os motores?",
        "answer": "Não. Intervalo, condições de uso e composição do conjunto variam; consulte o manual e a aplicação exata do veículo."
      }
    ]
  }
};
