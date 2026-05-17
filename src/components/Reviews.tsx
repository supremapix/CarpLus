
import { Star } from 'lucide-react';

// Função para gerar tempo aleatório entre 1 dia e 3 meses
const TIME_OPTIONS = [
  '1 dia atrás',
  '2 dias atrás',
  '3 dias atrás',
  '4 dias atrás',
  '5 dias atrás',
  '6 dias atrás',
  '1 semana atrás',
  '2 semanas atrás',
  '3 semanas atrás',
  '1 mês atrás',
  '2 meses atrás',
  '3 meses atrás',
];

// Função para gerar timeAgo baseado no índice (para consistência)
const getTimeAgo = (index: number) => TIME_OPTIONS[index % TIME_OPTIONS.length];

const ALL_REVIEWS = [
  { 
    name: 'Isaac Coelho', 
    text: 'Fui muito bem atendido na loja. Iniciei meu atendimento após uma pesquisa na internet e foi tudo pelo WhatsApp. O Vinicius foi muito profissional no atendimento e interessado em ajudar e fechar o negócio. A loja tem água, café, banheiros limpos e até uma área kids. Recomendo a loja sem medo de arrependimento.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjXH7o9djHNOpGuiD0lDabNj69e_3HTPQljvoCvaj4vNoerFoWI=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Adriana Rocha', 
    text: 'Fui muito bem atendida, muito bem recepcionada. Pessoal atencioso e tudo bem explicado. A forma como somos atendidos, com toda certeza faz toda diferença. Vinicíos super atencioso, enviando vídeos e me deixando muito a par de todos os detalhes. Com toda certeza ganharam uma cliente.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjXY90QN7H_RuaMWR7-JY3coGcZZeO_vyW3_XP4GXotTMMc-9bPA=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Luiz Gustavo Vaz', 
    text: 'Ótimo atendimento, desde o fechamento da proposta até o pagamento do serviço. Local muito limpo e organizado.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjX28m0Qm4YFz8ciRA2LZ1aSdnSrndOchXhvYC4qLzg7_lL9SpzQGA=w36-h36-p-rp-mo-ba2-br100'
  },
  { 
    name: 'Wellinton felipe gomes', 
    text: 'Ótimo profissionais. Sou cliente deles desde o tempo que trabalhavam com a marca da GoodYear. Agora com a Pirelli mantendo sua qualidade nos serviços.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjXq3z6FnpWBJHqdT2oZV1GtNX4l4huDkhjeAnOUPkZUwQzYouva=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Bernardo', 
    text: 'Atendimento nota 10. Matheus muito solicito e atencioso. Melhores preços!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocIINvhCkLTC9zAnE6gkBM1feUSyxMxnKX_3EM7adLO1hOd3SA=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'odair afonso rein', 
    text: 'Ótimo atendimento, estou muito satisfeito. Com certeza indico.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocLlRIhaLUTaqDpYWJRKBGYDWTMO8xzCxZd5GbzHMr7H308ZCw=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Caio', 
    text: 'Além de amigo e irmão em Cristo. Quero deixar meus parabéns pelo profissionalismo em serviço e atendimento. Também qualidade na mercadoria. Sai muito satisfeito e seguro!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjU6CGCJrh70basZUXXNX5smwj_tPnmd5Z0b-Fzn9lONOrCVgyx_=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Marcelo Ribeiro', 
    text: 'Ótimo atendimento e preço justo. Sou cliente a muitos anos.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKz-nw3I9uy0zwWlEm5UGla4yIeMYhP01wj5S4Lq4WXIhkY-Q=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Thiago Knop', 
    text: 'Atendimento nota 10, equipe prestativa atenciosa e rápida, preço justo. Parabéns.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjVH0Foj3ZG7Ub7l4vjBYygj0NsUfK-PTFUcf3y1eeUGAlnuHjge5w=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Anderson Collini', 
    text: 'Muito bom o atendimento! Em todos os aspectos e serviços. Obrigado!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocIuDlY_4_95PgA72fGKJS6_1GGxJzSPhGJOaQcu9A51_H5mLw=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Jeferson Camilo', 
    text: 'Mateus cara muito atencioso, a loja top demais. Certo que voltarei novamente, e indicarei para amigos e familiares.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjVXl9ybHvhHXYLgEFwtPWccauU1BtkQ50z10CneVkkYEU1IrASh=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Edson Lara', 
    text: 'Loja com atendimento honesto e excelente. Sem rodeios ou invenção de defeitos.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjVi-cU5DwYKifB8XR4R9HuVvSOVVFG3FwYtONdv4tFH9nLRJTJndA=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Rogerio Lima Pinho', 
    text: 'Atendimento bastante profissional, fiquei muito satisfeito com o trabalho realizado. Indico com certeza. Nota 100!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjUtYvPa9A-T8ZCVxELxxtnsFzjzUD9EbEJOIK_bnWGEG8JpVEc=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Haiko Abrahams', 
    text: 'Ótimo atendimento. Serviço de qualidade e de confiança. Preço justo. Recomendo!!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjXKD7Dvj_xyw2oq590qJ92ut9FzzZXpfG2uwPKRY91HV-Y1IYku=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Guilherme Salim', 
    text: 'Ótimo atendimento e profissionalismo, honestidade e transparência com cliente.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocJzTqtLzdtxiVk-fE5jYvpvNKSnQc9KuG2-jE2ZbSsNlaLnSA=w36-h36-p-rp-mo-ba4-br100'
  },
  { 
    name: 'Alexandre Quelhante', 
    text: 'Atendimento impecável do inicio ao fim! Equipe muito atenciosa e prestativa.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjV04pEaPhQJaG267HEfDNNcyMwlJNee0fPqCUNAKPx7LvqaN-I=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Viviane Prado', 
    text: 'Ótimo atendimento, profissionais capacitados e preço justo.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjV-_HvTiPLYEnY8_SloD0JhucKq8Tu0Lbh4YnAYkF6-bBhxuLNLDQ=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Edson Medeiros Junior', 
    text: 'Atendimento e técnicos excelentes. Sempre muito corretos e prestativos.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjVd9HbVfqIH0KDpxIJcfdy9wR7Id1GPCc7f76KR68P_8Zmbba8aIA=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Elias M.E. Brasil', 
    text: 'Bons profissionais, recepção ótima desde o início até a entrega. Parabéns a toda equipe.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjW6kR285W_dm948LG_WRG-1SEclrU1odJIGe_WyjS45p-B4e4Y-Zg=w36-h36-p-rp-mo-ba3-br100'
  },
  { 
    name: 'Eliane Malhadas', 
    text: 'Gentileza e rapidez no atendimento. Preço compatível com os serviços prestados.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocJxNj2BiN1hqe8rCmP16BJU-4-bGyO5e9xIVorD6rFiM_7BCg=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Anderson Oliveira', 
    text: 'Muito bom ótimo atendimento serviço de qualidade.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocJpf49GARzluMlxHRgxCIUkNAL9n9O99sdfzADEqLQtXBO-nQ=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Jacir Junior', 
    text: 'Atendimento muito bom, Rápido e preciso. Recomendo com tranquilidade.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocI8qpOkKtfdNg_8j2HsZszBVwddc-M-wyw7Tdo7yJdh0LBe7Q=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Gabriel Fernando', 
    text: 'Profissionais qualificados, loja limpa organizada nota 10.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWMJd3eh6mGkAiEs3-b2oTujhlb7T2RjEPyYJsEml2omhTyAag=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'wanderson Farias', 
    text: 'Um excelente atendimento, com qualidade em geral. Parabéns à todos!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjUy2hd-9NBA3jKfxjkQw61TqYaY7J4sHLSbjHhS_LdphybVJ9sXLw=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Rafael Marmol', 
    text: 'Serviço e atendimento muito bom!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocL_M--t8WC8EZaUjOrqRvf82ExsOO4-IaLvO6JbcRwBYaeQKw=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'CLAUDENIR ALMEIDA', 
    text: 'Ótimo atendimento, preço honesto, e serviços de primeira.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocIu49iK-ZR1VbOugmaqoD4ShbIE3Uym0xsNRTrQV-E4M9a3WA=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Roseli Ney', 
    text: 'Super recomendado, Rafael arrumou meu carro, ficou impecável, super indico!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKf46351CAYpLarJ7r3jZqNscH7ld0XnTe2Q7FmwXyhxO4Vxg=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Otaviano Mocellin', 
    text: 'Serviço espetacular. Atendimento top do Matheus e equipe!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKTtkKUmyd1Vd6nMEw8mZkRKwlpDzBr50T5JpfZ-nDrvCZOD_g=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Leandro Rodrigues Pinto', 
    text: 'Bom atendimento! Tudo que foi feito no carro foi bem explicado! Recomendo.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjUHY5y8WYLBVOYDEMj3KJQNtb17kMfeBFV8A839FElbDXF_cWM=w36-h36-p-rp-mo-ba2-br100'
  },
  { 
    name: 'diane taise', 
    text: 'Ótimos profissionais, excelente atendimento. Conserto de rodas excelente, melhor serviço da região.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjU5X-l4SSNnyPHW898BwAB4HueLsdy-tOOFVDAkxfOr-9_kzD-Lfg=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Contas Casa', 
    text: 'Lugar excelente!! São muito ágeis e o preço justo!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjURORwg94W_e44Rrz3M2E2jtfAVqm7lE6NnCQmpsC9qWXH-aag=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Yonel Adelson', 
    text: 'Atendimento super atencioso e simpática!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKkDCq1WPgDzIKI0I7X6778ZsaliRmRiriQgVlgzrGpwjrLhg=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Hiago Rennee', 
    text: 'Atendentes muito atenciosos e preço justo.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWWODxJ-raqz99uz2ofEo32HOSys_ngOncoUa0zV-DFT-DFtQ=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Elaine Navarro', 
    text: 'Profissionais qualificados e ótimos preços. Obrigada Josimar pelo profissionalismo e dedicação.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocLDAv63-GnU_SeDAZ4-xInjxoQ_XXpgKF9QIkivWE_ws6295A=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'emerson costa', 
    text: 'Excelente atendimento e serviços!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKgskvHeA1SHz0HGhT5xzDsyQK5eMs6EBiM-jt5RUz1bmWSug=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Vilson Lencim', 
    text: 'Excelente ótimo atendimento. Recomendo principalmente o funcionário Jocimar.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocJqc2U7Ju4GWHm38nvUkNOzR_TdyWPoJsqM9osfLSKEP_-GKw=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Jose Faria', 
    text: 'Ótimo. Josimar um ótimo profissional. Parabéns pelo seu trabalho...', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocIvsa973vkBleuJxiNO39_Rr2ib9hB6H-dc8RWEblHOqHx2Tw=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Liane Borges', 
    text: 'Ótimo atendimento. Completo e com agilidade. Super recomendo.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocJEqWhbEd_y5CCYiVPKT6kjP5cjzp7MSmtTtW6svRX7V7pTrg=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Gustavoh Hosty', 
    text: 'Excelente atendimento, profissionais qualificados e preço justo!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWCaRGF_DK1wb1-9e1KGJcvecLsivE0pK5Zl9qobXGgfwKSwPOg=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Caroline Silva', 
    text: 'Bom atendimento e serviço excelente.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocIBko4DmHyqxBZ974cbysZAAlwqUrs5VQ8OkMIESOeCqEwGtA=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'jamel abdo', 
    text: 'Atendimento cordial, agilidade nos serviços e bons preços.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocLB1QQnPz7zENSGcFhh4MMcZSh65GS9fCEMOphzjy-4T6ss6g=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Kiko Macarini', 
    text: 'Excelente atendimento, serviço e valores.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjUzdxtOs8yyjTqvhYKn-LksumRSGPhJ4LXorwX2bi6p3z1_yzPiiQ=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Magistall Corretora', 
    text: 'Ótimo atendimento do Matheus! Serviço também, com parcelamento. Recomendo.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjUP_vHHfZHL-85JJ5U2r9ucFlWKlU-2wjXYWS_1grZhRLJY0yUi=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'João Pedro Schmitz', 
    text: 'Um ótimo atendimento em especial pelo Vinicius.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjW_RspDeOrBWy2_5zsLqURCGXqoeoFguGR7PXgs32Icr0f3csuD=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Gabriel Cavalcanti de Albuquerque', 
    text: 'Fiz um contato inicial por telefone e já me passaram orçamento para a troca dos pneus por whatsapp mesmo. Além do valor ter sido o melhor dentro da pesquisa que fiz, ainda me ofereceram uma espécie de revisão a cada 10.000 km rodados ou pelo prazo de 6 meses. Foram ágeis no atendimento e ainda pude pagar parcelado sem juros. Com certeza voltarei outras vezes.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjV4BKmeU718QGwCzvc930-4MeVr9vMeb8UR45x9KRldzay_UBsL=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'eliane Cristina. Pereira de Souza', 
    text: 'Ótimo atendimento. Gostei bastante da receptividade e qualidade na solução do problema. A Jaqueline do caixa foi muito atenciosa. Parabéns!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjV3IqcqOkzNOkE9d1MMoRhpZ37E6ve8jz_G8Nu_hRyJm70rGI_u=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Alexandre Marcon', 
    text: 'Excelente atendimento. Vinícius e Matheus representam um dos mais altos níveis de atendimento ao cliente, com informações precisas, comunicação eficiente e rápida resposta. Estão de Parabéns. Recomendo!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocI5La5b43M6azbSLMzbaUeXGATHVrIPH0A2yHrvgOzwIHkbyg=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Gilberto Bueno', 
    text: 'Foi muito boa, já sou cliente tem alguns anos. Hoje fui atendido muito bem pelo colaborador Matheus, muito atencioso, educado e muito bom profissional.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocL0qpP9CsxbgEQ_hod0vnWOt3-JIppTTufmTvqQNk8KeNn7RQ=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Israel Souza', 
    text: 'Excelente atendimento preço justo e com garantia! O atendimento do senhor Matheus foi de qualidade, fica aqui o meu muitíssimo obrigado a todos.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKp1MVd0dWogjPMziPKQqhZYlO8En6-zbrIyvMnaIOrDbE9D5kq=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Andre Lüis', 
    text: 'Fui atendido pelo Matheus. Super atencioso e simpático. Super prestativo. Todas as minhas dúvidas ele respondeu com uma simpatia inigualável. Toda a equipe super atenciosa e prestativa. Super recomendo.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjXwO6dg-3_X3sZzHFsd7lBz_xiKT6_KW9W6vrCIBDtkq1AjVsMSdA=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Luiz Tapias', 
    text: 'A minha primeira experiência com eles foi bem positiva, o atendimento via WhatsApp foi rápido. O atendimento ocorreu conforme o agendado e fui muito bem atendido. Indico.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjVeH7YRPFTpC-FfYLudFSFxtc8QwusfG-gXrbNA_LEOWHLaFgB6kg=w36-h36-p-rp-mo-ba3-br100'
  },
  { 
    name: 'Hamilton Keller', 
    text: 'A empresa tem uma estrutura adequada para a execução dos trabalhos, com profissionais muito qualificados. Fui muito bem atendido. A sala de espera é muito agradável, com café e chá para os clientes, enquanto aguardamos o serviço. As negociações são realizadas com total transparência, honestidade e respeito.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocJGx4m7i7_qCphWm6fg4I2lghWaMLYBcRkd9x-n2n5U5OtTAg=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Brian Goncalves', 
    text: 'Sempre atendido com excelência. Serviço muito bom e rápido, sempre se comunicando sobre possíveis contratempos com clareza. Qualidade e excelência em todas as etapas.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjUAM7oDtVQNCzgEcmcyUZBFiXTlA-FA-79IFApoDu0_m-PrqdZ0=w36-h36-p-rp-mo-ba3-br100'
  },
  { 
    name: 'Silvanir Silva', 
    text: 'Como sempre excelente, atendimento e serviços de qualidade, com toda atenção necessária.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjVYiQjwVbNQEpyAoNFwaofGxFbk3nBRASwEtS1TVY8bBfsKjL5m=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'luiz fernando nascimento', 
    text: 'Atendimento super 10, desde o atendimento inicial até o diagnóstico final, em especial ao Matheus que mostrou exato o problema no meu carro, desde então serviço bem executado por ele e os demais colaboradores, super recomendo. Amplo espaço de espera e equipamentos de ponta.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjVVtIONTttO7P1KJqmCVrTKKhpmLrGQAe2Ul3ouVzROIlFv3tuW=w36-h36-p-rp-mo-ba3-br100'
  },
  { 
    name: 'Sergio Epifanio', 
    text: 'Excelente atendimento do funcionário Vinicius, muito atencioso e prestativo, muito obrigado pelo excelente serviço prestado.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocK-dtCBG_5fTZIOeoBkVpVxKR91rstUZQstdWrKthWUCkRMXA=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Aldebaran Mendes', 
    text: 'Bom dia, recomendo a todos. Excelente atendimento pelo Matheus, saboroso cafezinho. Serviço rápido bem feito, te apontam o que tem de errado a ser corrigido.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocJtdHuQCWkQPaQxFwd9XW1dCPo6rAg0lcv00htAQ-IQ0nL-1Q=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Airton Alba', 
    text: 'Bom dia! Recomendo a todos. Sou cliente há mais de 10 anos, sempre satisfeito. Super bem atendido pelo Vinicius.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWroeUqFnxvndGiaeZ-_R6pxH2L6X3Br_4IynMKz4vsHa-kLIyg=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Leonardo Baziuk', 
    text: 'Ótimo atendimento de todos, em atenção do Vinicius, um ótimo profissional que nos atendeu e ajudou no que precisei, voltarei sempre que precisar!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKHQscErEEkyFzITVaqtDX_MjQ79ncuwbXAGfvAgf3VxXFtbw=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Jessica Fernanda Lima', 
    text: 'Fui muito bem atendida e recebida. Pelo whatsapp foram ágeis, claros, e receptivos. Ambiente aconchegante. Nos deixam a vontade, com água, café e wifi, num ambiente agradável. São honestos. Preço justo e transparentes. Vale a pena.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWZVJb2smtcJeeaVtAL4UeWrE4_q2ECnnATq6FwqTc5ZSiRuVms=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Daniel Dias Januário', 
    text: 'Devidas as recomendações do Google eu fui na loja. E minhas expectativas foram muito bem atendidas. O Jucemar, na troca dos pneus, e o Rafael em verificar a mecânica e o Vinicius em atender super bem. Recomendo.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjXi5W-_npKTYZheLxfqHLDQxgWbJd0ZrQBb3E9gG6cOv-WRwIhgRw=w36-h36-p-rp-mo-ba3-br100'
  },
  { 
    name: 'JULIANO JORIO', 
    text: 'Excelente atendimento, com apontamento de todas as necessidades extras que o veículo precisa, além de outros serviços de recuperação e pintura das rodas. Parabéns.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjVSEPWMxmzjyk0TmTc_AA1KYFqJ5xZt6KpCiQAxVh0A8w5wrk8=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Kaio Machowski', 
    text: 'Excelente espaço, especialista explicou o problema com uma solução assertiva. Me passando total confiança e credibilidade.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjW9Zi8fLiSon_MZkKa-eEi_CCb8MwoSQtztmKr-KoW8cXOJrWLa=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'gelson Dalvi', 
    text: 'A minha experiência foi a mais positiva possível. O serviço de troca dos pneus foi realizado de forma muito eficiente e profissional. Parabéns a toda equipe.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocI4_flISsmHFkqO29q8nXFcCOLTi81Ux--QUpleTQctBXux2g=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Eliane Nazario', 
    text: 'Ótimos profissionais, em especial o Jocimar foi muito atencioso, sai satisfeita com o serviço. Super recomendo.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWHZ_P-JVUJA4b4g4q7m9RclzTISOYxLOVKVg3pqeclEl4h3uxj=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Pedro Ayres', 
    text: 'Oficina muito boa, atendentes e mecânicos muito atenciosos, me emprestaram até carregador pra esperar lá! Vinícius resolveu meu problema bem e explicou certinho o que aconteceu!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjUXkLB2D5YyLZw8HhUVYN_ZP14CYAJuUHphmSFmxJfyg1O3pBgg=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Dione Sampaio', 
    text: 'Super recomendo! Fomos muito bem atendidos pelo Jocimar! Produtos de qualidade! Ótimos preços!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocJnZUn2ehcCc4oUmjDSrq7fBEL-Ntk0puqf80RMkdgvvhvsNA=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Ellen Amanda', 
    text: 'Excelente atendimento na Carplus Pneus e Oficina Mecânica. Equipe profissional, organizada e muito atenciosa. Destaque especial para a Jaqueline, do caixa, que me atendeu com muita educação, simpatia e eficiência, esclarecendo todas as dúvidas e tornando a experiência ainda melhor. Recomendo!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjXMS6yPaR9TxmYcy_ystYGuuN-Alm3K9p7Sd_ArnXzqjEYSdoerpw=w36-h36-p-rp-mo-ba2-br100'
  },
  { 
    name: 'Fernanda Paula', 
    text: 'Atendimento Excelente pelo técnico Vinícius, que demonstra ter alto conhecimento técnico, sempre esclarecendo as dúvidas, ambiente limpo e confortável.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjUfmtyLlOMNgw-0ccWKBTyxEhqCvG0NOIB8OvsvNXENusrlJfyt=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Janeterribas Ribas', 
    text: 'Atendimento excelente! O gerente Emerson muito atencioso! O Vinícius excelente profissional! Recomendo!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjVVCR5YG73AyJyyWQt9FcSEAUi9tN-Egq2qWA1_-Jfuoa31PkkMWg=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Marcio Santos', 
    text: 'Excelente atendimento do Vinícius, rapaz bem prestativo, super educado!! Com certeza voltarei mais vezes!! E o serviço dos mecânicos nota 10!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjV96fiRVsqXNCXsSISRs23hycbTL4Wpipae-ZaNOALh4D0Ue0pQ=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'eduardo alves dos santos', 
    text: 'Atendimento, dedicação e preço justo, o capricho no ambiente e na organização da loja diz muito sobre o trabalho aplicado no carro. Trago meu carro aqui e fico tranquilo que está em boas mãos com profissionais exigentes e dedicados.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjVFQ6JtswZYA7Y5uZud68HGTlQKibKqGryC6w5xF-mmuNEZ_5Fi=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Maria Cristina', 
    text: 'Gostei muito! Atendimento nota 1000 do mecânico Dolair, muito atencioso! Já tinha levado em outros lugares e não tive resultado satisfatório, mas dessa me mostraram e resolveram o problema, tive um ótimo resultado! Além do ótimo preço.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjW0y2_gq2NBrgAXDMkmAaEa5IZn-TL6-8_WBu-hL-Ao-ocf7bLm=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Rosangela Dias', 
    text: 'Lugar com atendimento excelente! Agradeço ao profissional Jocimar pelo ótimo trabalho, serviço de qualidade, rápido e eficiente. Jocimar trabalha muito bem, é caprichoso e atencioso. Recomendo de olhos fechados.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjXPyxaIOThmNr_Dzy-Px08RvRp4Db8ofeFMo0MCsjBba-zbmkZZxw=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Isabel Schmidt', 
    text: 'Levei meu carro e fui bem atendida, vendedor atencioso e o mecânico descreveu o problema com clareza. Consegui um orçamento ótimo que facilitou o pagamento. Muito feliz com a experiência!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKNZO-Fz4hhL7x5hjBJSA8SqZ3Fqs3jurmXh3Z0cknURq1mqg=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Eduardo Seiti', 
    text: 'Quero elogiar o excelente atendimento da loja. Sempre sou atendido pelo Matheus que se destaca pela transparência, proatividade e agilidade, sempre explicando tudo de forma clara e segura.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocK0SaZzjpysRzAj0qkCbCwfRKf_lMlu7Fcfvw9j1Ll4EGcu_w=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Hellen Zampronio', 
    text: 'Além do custo beneficio ter sido muito bom, tive um ótimo atendimento com vendedor Vinicius.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKoJU8iyhsGHMGzPTiZQXG4ss4izvOsakdSKF0r0xXkSMJagQ=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Juliane Freitas', 
    text: 'Melhor loja da região, preços acessíveis e com produto de qualidade, o atendimento do Matheus é excelente, muito simpático e prestativo.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjXF3uplODIBfzQN7DmXsa2tSYUkIWYVbrOIFDFPpAi2LQVOP-AsqA=w36-h36-p-rp-mo-ba3-br100'
  },
  { 
    name: 'Cesar Felix', 
    text: 'Boa noite deixei as rodas do meu carro para realizar a reforma me surpreendi pela qualidade do serviço que foi realizado, obrigado Josimar pela indicação e atenção que todos vocês tem pelos os clientes.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocI78LG6WfuwWKHC-2dxhzpa-u9BDqMuo0yV_glr7PGEDTEA6w=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Robson Maciel', 
    text: 'Boa tarde! Fui atendido excepcionalmente bem pelo Sr. Vinícius. Apesar de não nos conhecermos, tratamos de uma compra de pneus muito importante para mim. Tive dois pneus danificados e o Sr. Vinícius não mediu esforços para que os referidos pneus me fossem entregues. Agradeço ao Sr. Vinícius e a empresa Carplus pelo excelente atendimento.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocIdOnKCURY5LRDPqBdAZGATHTa19Hh1IFwXq-XdHG6G-QH7IA=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Quédima Motta', 
    text: 'Lugar com ótimo atendimento. Agradeço o profissional Jocimar que fez a reforma de rodas do meu carro com qualidade e eficiência. Super recomendo!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjVl9DkB0z0aGjuAputMIuqbGgZh8I_n6Yl6IYU0OcdtsNcR1zA=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Janderson Brasil', 
    text: 'Atendimento ótimo, agradeço o gerente Emerson e sua equipe, prestaram serviço com muita simpatia e honestidade, pneus Pirelli com melhor preço de Curitiba, recomendo.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKhmjrbRV86rHprKIJAv6hTIogs0fjQpjGTAsWeb4E5UsQuVw=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'DANIEL NEUMANN', 
    text: 'Atendimento excelente! Levei meu carro para revisão e fui muito bem atendido desde o primeiro contato. A equipe é profissional, honesta e transparente sobre os serviços e valores. Entregaram o carro no prazo combinado e o serviço ficou impecável. Super recomendo a oficina para quem busca qualidade e confiança!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjVqWmo69zgXzWvv8gcR3P7zO3VuO_SbLee2iCPqsIZNCyWDFl0g2w=w36-h36-p-rp-mo-ba4-br100'
  },
  { 
    name: 'Fabio Souza', 
    text: 'Em todas vezes que estive na CarPlus da Arthur Bernardes, fui muito bem atendido pelo vendedor Matheus e a moça que atende no caixa, de um modo geral todos lá lhe atendem bem. O local é muito bem localizado e de fácil acesso, além de limpo.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjVum3rAufjeU49_0OFZx2q5vAOXHLewsXFLGwzzrSkgbU6lKMrO=w36-h36-p-rp-mo-ba2-br100'
  },
  { 
    name: 'Flávia Motta', 
    text: 'Excelente atendimento! Atendente Vinícius, excelente pessoa e extremamente atencioso! Obrigada à Carplus pelo serviço de excelência!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjUj-R_k0VQx5c2nLVll8gCu_yt-B_wlbVCAPdwmmsOhPmFCF_62=w36-h36-p-rp-mo-ba2-br100'
  },
  { 
    name: 'Emerson Siqueira', 
    text: 'Ótimo serviço com atendente exemplar, fez o serviço conforme orçado, recomendo!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWIbfyGy91PtgnziCKlgMrKkE-gqhOEvlF5F5LbRpFzYRmEjJZe=w36-h36-p-rp-mo-ba2-br100'
  },
  { 
    name: 'Salvador Luiz Zoreck', 
    text: 'Atendimento excelente. O consultor Matheus foi muito atencioso. Acompanhei o serviço de manutenção de freios, e gostei da forma com que o mecânico caprichou na limpeza, lubrificação e até pintou as partes da panela de freios traseiros. Quando a prestação de serviços realiza um serviço como se estivesse fazendo pra si mesmo, mostra a excelência no serviço. Parabéns para a Carplus da Arthur Bernardes.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocLQ-V7Y-CDQ9hmvAaIWdc1RLuToJiYoQj7sSAWN6WXeQ762UQ=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Jose Pereira', 
    text: 'Recomendo! Precisei trocar os pneus e o Matheus me atendeu muito bem, transparência e agilidade no serviço.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocLYaHC8aTLs_NV2hsliR9jymTDXB-MTArUQLBpaZDp5iPglOQ=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Edenilson Maia da Silva', 
    text: 'Empresa muito top. Honestidade e transparência na relação comercial para este segmento é fundamental. Estão de parabéns.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWYXXGxoX2srCJ2w6yDBHYi1EQzilDqBbARhcGjEK2-dLr2yLxw=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Elaine Cristina', 
    text: 'Loja top, atendimento maravilhoso, atenciosos demais, muito satisfeita com o trabalho deles.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWf8vm_YEb9ac4TsCyIRwbLRUB5HoEgzPDv4DbXRa4CMJUyTh4g=w36-h36-p-rp-mo-ba3-br100'
  },
  { 
    name: 'Robert', 
    text: 'Atendimento impecável, desde o primeiro contato com o Consultor Matheus, Mecânicos qualificados, limpeza e organização nota 10.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocLj76KhbOpuqsSSTzq7fzfLYZXTMklSFV2iJZpLV3mtcLr2DQ=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Germano Rutz', 
    text: 'Serviço nota 1000 do Jocimar, da Carplus Pneus! Fez um excelente trabalho nas rodas do meu carro, capricho, atenção e muito profissionalismo! Recomendo demais!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjX6Yt9abFRiZuI94S-Q8EycKMs9ev4xv28x3c2XsTGEBmA8VBUL=w36-h36-p-rp-mo-ba5-br100'
  },
  { 
    name: 'McTG', 
    text: 'Levei meu carro com problemas e o mecânico Dollair é sem palavras, atencioso, educado e deixou meu carro impecável. Recomendo sempre.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWtMOcjCHOSASTDdIzq_hQHf0Md8Eilqr72CIk0vLLVPsgbNZwT=w36-h36-p-rp-mo-br100'
  },
  { 
    name: 'Hiago Henrique', 
    text: 'Fiz um serviço de reforma nas minhas rodas com o Jocemar, ficou muito top, ótimo profissional.', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKH2qenI52QCmNEDTl2f76pDhaeoeg8QzWFO6UQ-qQ2kDMsNAI=w36-h36-p-rp-mo-ba3-br100'
  },
  { 
    name: 'Ingrid Rigamonte', 
    text: 'O mecânico Rafael Henrique, ótimo profissional, educado, faz um excelente trabalho e o melhor orçamento, super acessível. SUPER RECOMENDO!', 
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocIgWKBXqDVmljxnJFs9_XAQl373YJjjP0D05T2VcBU-TV3xuw=w36-h36-p-rp-mo-br100'
  },
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

function ReviewCard({ review, colorIdx, reviewIdx }: { review: typeof ALL_REVIEWS[0]; colorIdx: number; reviewIdx: number }) {
  const avatar = AVATAR_COLORS[colorIdx % AVATAR_COLORS.length];
  return (
    <div className="bg-white p-4 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow flex-shrink-0 w-full border border-gray-100">
      {/* Header estilo Google Maps */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          {review.avatar ? (
            <img
              src={review.avatar}
              alt={review.name}
              className="w-9 h-9 rounded-full flex-shrink-0 object-cover"
              crossOrigin="anonymous"
            />
          ) : (
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm uppercase flex-shrink-0"
              style={{ backgroundColor: avatar.bg, color: avatar.text }}
            >
              {review.name[0]}
            </div>
          )}
          <div className="min-w-0">
            <h4 className="text-[#202124] font-medium text-sm truncate leading-tight">{review.name}</h4>
            <p className="text-[#70757a] text-[11px] truncate leading-tight">{getTimeAgo(reviewIdx)}</p>
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
        <span className="text-[#70757a] text-[11px]">Google</span>
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
        {doubled.map((r, i) => <ReviewCard key={i} review={r} colorIdx={(i + offset) % 6} reviewIdx={i} />)}
      </div>
    </div>
  );
}

const COL1 = ALL_REVIEWS.slice(0, 24);
const COL2 = ALL_REVIEWS.slice(24, 48);
const COL3 = ALL_REVIEWS.slice(48, 72);
const COL4 = ALL_REVIEWS.slice(72);

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
