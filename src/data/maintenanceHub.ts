// Editorial review: 2026-10-18. Technical references are linked visibly in the hub.
export const HUB_FAQS = [
  {
    "question": "Preciso saber qual peça está com problema antes de procurar a oficina?",
    "answer": "Não. Descreva o sintoma, o modelo e o ano. A avaliação é necessária para identificar a origem e definir o serviço, porque sinais parecidos podem ter causas diferentes."
  },
  {
    "question": "Volante vibrando significa que preciso de balanceamento?",
    "answer": "Pode haver desbalanceamento, mas pneus, rodas, suspensão e freios também podem precisar de verificação, dependendo de quando a vibração ocorre. Não acelere para testar."
  },
  {
    "question": "Carro puxando é sempre falta de alinhamento?",
    "answer": "Não. Pressão dos pneus, suspensão e freios também podem estar envolvidos. É preciso avaliar o conjunto antes de indicar um reparo."
  },
  {
    "question": "Posso dirigir até a oficina com barulho no freio?",
    "answer": "O ruído sozinho não permite confirmar se é seguro circular. Se houver perda de eficiência, alteração importante no pedal ou dificuldade de controle, pare assim que for seguro e solicite assistência. Não use uma conversa por mensagem como liberação para dirigir."
  },
  {
    "question": "A Carplus atende carros antigos?",
    "answer": "Sim. A Carplus trabalha com manutenção e reparos de carros antigos. Informe modelo, ano, histórico e necessidade para confirmar o atendimento adequado ao seu caso."
  },
  {
    "question": "O scanner identifica sozinho a peça que precisa ser trocada?",
    "answer": "Não. Os códigos e dados ajudam na investigação, mas precisam ser interpretados junto à avaliação do veículo. A compatibilidade depende do modelo e do sistema."
  },
  {
    "question": "Onde fica a Carplus em Curitiba?",
    "answer": "Na Av. Presidente Arthur da Silva Bernardes, 1323, no bairro Portão. Consulte a página Como chegar e fale com a equipe antes de planejar o atendimento."
  }
];

export const HUB_SYMPTOMS = [
  {
    "title": "Volante vibrando",
    "paragraphs": [
      "O conjunto de pneus e rodas pode estar desbalanceado. Também é importante avaliar seu estado e os componentes de direção e suspensão. Quando a vibração aparece ao frear, o sistema de freios entra na investigação. Não é possível escolher o reparo apenas pela descrição.",
      "Conte quando percebeu a vibração e se começou depois de um impacto ou serviço. Não aumente a velocidade para testar."
    ],
    "links": [
      {
        "label": "Alinhamento e balanceamento",
        "to": "/servico/alinhamento-e-balanceamento"
      },
      {
        "label": "Manutenção de freios",
        "to": "/servico/manutencao-de-freios"
      }
    ]
  },
  {
    "title": "Carro puxando para um lado",
    "paragraphs": [
      "Pressão dos pneus, alinhamento e condições da suspensão são pontos possíveis de verificação. Se o desvio ocorre durante a frenagem, os freios também precisam ser avaliados. Um alinhamento não corrige automaticamente todas essas situações.",
      "Informe se já percebeu o desvio ao frear ou durante o uso normal. Nunca solte o volante para conferir a trajetória."
    ],
    "links": [
      {
        "label": "Alinhamento 3D",
        "to": "/servico/alinhamento-3d"
      },
      {
        "label": "Revisão de suspensão",
        "to": "/servico/revisao-de-suspensao"
      }
    ]
  },
  {
    "title": "Barulho ao frear",
    "paragraphs": [
      "Chiados e ruídos metálicos podem envolver pastilhas, discos e outros componentes do freio. O som sozinho não identifica a peça nem a gravidade. Mudança na resposta do pedal ou perda de eficiência exige atenção imediata, não apenas agendamento de rotina."
    ],
    "links": [
      {
        "label": "Avaliação dos freios",
        "to": "/servico/manutencao-de-freios"
      }
    ]
  },
  {
    "title": "Barulho na suspensão",
    "paragraphs": [
      "Batidas, estalos e ruídos em piso irregular podem envolver componentes da suspensão e suas fixações. A inspeção precisa localizar a origem, em vez de assumir que todo barulho vem do amortecedor.",
      "Se o carro ficou instável ou a direção mudou, não tente repetir o ruído passando em buracos ou lombadas."
    ],
    "links": [
      {
        "label": "Revisão de suspensão",
        "to": "/servico/revisao-de-suspensao"
      }
    ]
  },
  {
    "title": "Luz no painel ou falhas no funcionamento",
    "paragraphs": [
      "O significado do aviso depende do veículo e deve ser conferido no manual. Em sistemas compatíveis, o scanner ajuda a ler informações e códigos de falha. Essa leitura faz parte da investigação e não determina, sozinha, qual peça substituir.",
      "Informe qual luz apareceu e o que mudou no funcionamento. Não apague o aviso como forma de resolver o problema."
    ],
    "links": [
      {
        "label": "Scanner automotivo",
        "to": "/servico/scanner-automotivo"
      },
      {
        "label": "Revisão geral",
        "to": "/servico/revisao-geral"
      }
    ]
  }
];
