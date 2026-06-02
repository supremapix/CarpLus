
import { Star, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionTitle from './SectionTitle';

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
    avatar: null,
    avatarColorIdx: 6
  }
];

// Total de avaliações reais no Google (exibido ao usuário)
const TOTAL_REVIEWS = 215;

const AVATAR_COLORS = [
  { bg: '#4285f4', text: '#fff' }, // azul Google
  { bg: '#ea4335', text: '#fff' }, // vermelho Google
  { bg: '#34a853', text: '#fff' }, // verde Google
  { bg: '#fbbc04', text: '#fff' }, // amarelo Google
  { bg: '#0f9d58', text: '#fff' }, // verde escuro
  { bg: '#7b1fa2', text: '#fff' }, // roxo
  { bg: '#795548', text: '#fff' }, // marrom Google Maps
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

function ReviewCard({ review, colorIdx, reviewIdx, onClick }: { review: typeof ALL_REVIEWS[0]; colorIdx: number; reviewIdx: number; onClick: () => void }) {
  const avatarIdx = review.avatarColorIdx !== undefined ? review.avatarColorIdx : colorIdx;
  const avatar = AVATAR_COLORS[avatarIdx % AVATAR_COLORS.length];
  return (
    <div 
      onClick={onClick}
      className="bg-white p-4 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow flex-shrink-0 w-full border border-gray-100 cursor-pointer"
    >
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
      <p className="text-[#3c4043] text-[13px] leading-relaxed line-clamp-3">{review.text}</p>
    </div>
  );
}

function ReviewColumn({ reviews, duration, delay = 0, offset = 0, onReviewClick }: { reviews: typeof ALL_REVIEWS; duration: number; delay?: number; offset?: number; onReviewClick: (review: typeof ALL_REVIEWS[0], index: number) => void }) {
  const doubled = [...reviews, ...reviews];
  return (
    <div className="flex flex-col gap-3 overflow-hidden" style={{ maxHeight: '680px' }}>
      <div
        className="flex flex-col gap-3 will-change-transform"
        style={{ animation: `scrollUp ${duration}s linear ${delay}s infinite` }}
        onMouseEnter={(e) => {
          e.currentTarget.style.animationPlayState = 'paused';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationPlayState = 'running';
        }}
      >
        {doubled.map((r, i) => (
          <ReviewCard 
            key={i} 
            review={r} 
            colorIdx={(i + offset) % 6} 
            reviewIdx={i} 
            onClick={() => onReviewClick(r, i % reviews.length)}
          />
        ))}
      </div>
    </div>
  );
}

// Dividir reviews dinamicamente em 4 colunas para desktop
const getColumns = () => {
  const cols: (typeof ALL_REVIEWS)[] = [[], [], [], []];
  ALL_REVIEWS.forEach((review, idx) => {
    cols[idx % 4].push(review);
  });
  return cols;
};

const [COL1, COL2, COL3, COL4] = getColumns();

export default function Reviews() {
  const [selectedReview, setSelectedReview] = useState<{ review: typeof ALL_REVIEWS[0], index: number } | null>(null);

  const openReview = (review: typeof ALL_REVIEWS[0], index: number) => {
    setSelectedReview({ review, index });
  };

  const closeReview = () => {
    setSelectedReview(null);
  };

  const nextReview = useCallback(() => {
    if (selectedReview) {
      const nextIdx = (selectedReview.index + 1) % ALL_REVIEWS.length;
      setSelectedReview({ review: ALL_REVIEWS[nextIdx], index: nextIdx });
    }
  }, [selectedReview]);

  const prevReview = useCallback(() => {
    if (selectedReview) {
      const prevIdx = (selectedReview.index - 1 + ALL_REVIEWS.length) % ALL_REVIEWS.length;
      setSelectedReview({ review: ALL_REVIEWS[prevIdx], index: prevIdx });
    }
  }, [selectedReview]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedReview) {
        if (e.key === 'ArrowRight') nextReview();
        if (e.key === 'ArrowLeft') prevReview();
        if (e.key === 'Escape') closeReview();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedReview, nextReview, prevReview]);

  return (
    <section className="py-24 bg-[#f8f9fa] relative overflow-hidden">
      <style>{`
        @keyframes scrollUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center md:text-left max-w-[640px] mb-14 mx-auto md:mx-0">
          {/* Badge estilo Google */}
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 shadow-sm px-5 py-2.5 rounded-full mb-6 mx-auto md:mx-0">
            <GoogleLogo />
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#fbbc04" color="#fbbc04" />)}
            </div>
            <span className="text-[#202124] font-semibold text-sm">4,9 DE 5 ESTRELAS</span>
            <span className="text-[#70757a] text-sm">• {TOTAL_REVIEWS} avaliações</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <SectionTitle prefix="O QUE NOSSOS CLIENTES" highlight="DIZEM" />
            <p className="text-gray-500 text-lg sm:text-xl md:text-2xl font-light text-center md:text-left">Transparência em cada diagnóstico, satisfação em cada entrega.</p>
          </div>
        </div>

        {/* Colunas de scroll infinito */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]">
          <ReviewColumn reviews={COL1} duration={60} delay={0} offset={0} onReviewClick={openReview} />
          <ReviewColumn reviews={COL2} duration={55} delay={-15} offset={2} onReviewClick={openReview} />
          <div className="hidden lg:block">
            <ReviewColumn reviews={COL3} duration={65} delay={-30} offset={4} onReviewClick={openReview} />
          </div>
          <div className="hidden lg:block">
            <ReviewColumn reviews={COL4} duration={50} delay={-10} offset={1} onReviewClick={openReview} />
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

      {/* Modal de Review Ampliado */}
      <AnimatePresence>
        {selectedReview && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeReview}
              className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botão Fechar */}
              <button 
                onClick={closeReview}
                className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-20"
              >
                <X size={20} className="text-gray-600" />
              </button>

              {/* Conteúdo do Modal */}
              <div className="p-8 sm:p-12">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    {selectedReview.review.avatar ? (
                      <img
                        src={selectedReview.review.avatar}
                        alt={selectedReview.review.name}
                        className="w-16 h-16 rounded-full object-cover shadow-md"
                        crossOrigin="anonymous"
                      />
                    ) : (
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl uppercase shadow-md"
                        style={{ 
                          backgroundColor: AVATAR_COLORS[selectedReview.review.avatarColorIdx || 0].bg, 
                          color: AVATAR_COLORS[selectedReview.review.avatarColorIdx || 0].text 
                        }}
                      >
                        {selectedReview.review.name[0]}
                      </div>
                    )}
                    <div>
                      <h4 className="text-xl font-bold text-dark">{selectedReview.review.name}</h4>
                      <p className="text-gray-500 text-sm flex items-center gap-2">
                        <GoogleLogo /> Local Guide • {getTimeAgo(selectedReview.index)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(selectedReview.review.stars)].map((_, j) => (
                    <Star key={j} size={24} fill="#fbbc04" color="#fbbc04" />
                  ))}
                </div>

                <p className="text-gray-700 text-lg sm:text-xl leading-relaxed italic font-medium">
                  "{selectedReview.review.text}"
                </p>

                {/* Navegação */}
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-100">
                  <button 
                    onClick={prevReview}
                    className="flex items-center gap-2 text-gray-500 hover:text-primary font-bold transition-colors group"
                  >
                    <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                    Anterior
                  </button>
                  <div className="text-gray-300 font-mono text-sm">
                    {selectedReview.index + 1} / {TOTAL_REVIEWS}
                  </div>
                  <button 
                    onClick={nextReview}
                    className="flex items-center gap-2 text-gray-500 hover:text-primary font-bold transition-colors group"
                  >
                    Próximo
                    <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
