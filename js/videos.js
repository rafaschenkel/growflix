const videos = [
  {
    img: "https://i.ytimg.com/vi/aJ-HZuLcKeA/sddefault.jpg",
    title: "Growcast #00 | Conheça a Growdev",
    link: "https://www.youtube.com/embed/aJ-HZuLcKeA",
    category: "Growcast [Episódios]",
  },
  {
    img: "https://i.ytimg.com/vi/7OWT3lfHYvE/sddefault.jpg",
    title: "Growcast #01 | As profissões do futuro",
    link: "https://www.youtube.com/embed/7OWT3lfHYvE",
    category: "Growcast [Episódios]",
  },
  {
    img: "https://i.ytimg.com/vi/ci1eQGPK89o/sddefault.jpg",
    title: "Growcast #02 | Como seguir a carreira internacional?",
    link: "https://www.youtube.com/embed/ci1eQGPK89o",
    category: "Growcast [Episódios]",
  },
  {
    img: "https://i.ytimg.com/vi/WM7pGG7OicQ/sddefault.jpg",
    title: "Growcast #03 | Superando os desafios da carreira de Dev!",
    link: "https://www.youtube.com/embed/WM7pGG7OicQ",
    category: "Growcast [Episódios]",
  },
  {
    img: "https://i.ytimg.com/vi/2c8VOBZ160Y/sddefault.jpg",
    title: "Growcast #04 | Agile Master: tudo sobre a profissão!",
    link: "https://www.youtube.com/embed/2c8VOBZ160Y",
    category: "Growcast [Episódios]",
  },
  {
    img: "https://i.ytimg.com/vi/mxnEm03cYPc/sddefault.jpg",
    title:
      "Growcast #5 | Como iniciar na carreira em Desenvolvimento de Softwares?",
    link: "https://www.youtube.com/embed/mxnEm03cYPc",
    category: "Growcast [Episódios]",
  },
  {
    img: "https://i.ytimg.com/vi/m7DyR07KrOE/sddefault.jpg",
    title: "Growcast #06 |  Mulheres e inclusão na tecnologia",
    link: "https://www.youtube.com/embed/m7DyR07KrOE",
    category: "Growcast [Episódios]",
  },
  {
    img: "https://i.ytimg.com/vi/vW8G9KPwRL0/sddefault.jpg",
    title: "Growcast #07 | Desenvolvendo profissionais na área de TI",
    link: "https://www.youtube.com/embed/vW8G9KPwRL0",
    category: "Growcast [Episódios]",
  },
  {
    img: "https://i.ytimg.com/vi/_Ut2KqAqPyk/sddefault.jpg",
    title:
      "Growcast #8  |  A solução que está transformando o mercado de TI no Brasil",
    link: "https://www.youtube.com/embed/_Ut2KqAqPyk",
    category: "Growcast [Episódios]",
  },
  {
    img: "https://i.ytimg.com/vi/dfDgs0Ive2Q/sddefault.jpg",
    title:
      "Growcast #9 | Acompanhe com quem realmente entende, tudo sobre o mercado de trabalho no mundo da TI.",
    link: "https://www.youtube.com/embed/dfDgs0Ive2Q",
    category: "Growcast [Episódios]",
  },
  {
    img: "https://i.ytimg.com/vi/WKbLXuP9S-c/sddefault.jpg",
    title: "Webinar - Recriando a interface do Linkedin com Flutter",
    link: "https://www.youtube.com/embed/WKbLXuP9S-c",
    category: "Webinar em Flutter",
  },
  {
    img: "https://i.ytimg.com/vi/dJ6y1zMjVXU/sddefault.jpg",
    title: "Webinar - Recriando a interface do Instagram com Flutter",
    link: "https://www.youtube.com/embed/dJ6y1zMjVXU",
    category: "Webinar em Flutter",
  },
  {
    img: "https://i.ytimg.com/vi/8rdJsqUjsGg/sddefault.jpg",
    title: "Webinar - Recriando a interface do iFood com Flutter",
    link: "https://www.youtube.com/embed/8rdJsqUjsGg",
    category: "Webinar em Flutter",
  },
  {
    img: "https://i.ytimg.com/vi/C4p_7qBsECw/sddefault.jpg",
    title: "Webinar - Recriando a interface do PicPay com Flutter",
    link: "https://www.youtube.com/embed/C4p_7qBsECw",
    category: "Webinar em Flutter",
  },
  {
    img: "https://i.ytimg.com/vi/L1pKoMC6hWk/sddefault.jpg",
    title: "Webinar - Recriando o layout do WhatsApp com Flutter",
    link: "https://www.youtube.com/embed/L1pKoMC6hWk",
    category: "Webinar em Flutter",
  },
  {
    img: "https://i.ytimg.com/vi/FiZMowbaiJA/sddefault.jpg",
    title: "Live #5 Jornada UX/UI: O UX/UI Design é para todos?",
    link: "https://www.youtube.com/embed/FiZMowbaiJA",
    category: "Jornada UX/UI",
  },
  {
    img: "https://i.ytimg.com/vi/cwqDu0ZzbYE/sddefault.jpg",
    title:
      "Live #4 Jornada UX/UI:  Como migrar para o UX/UI Design: a trajetória de uma designer - Growdev",
    link: "https://www.youtube.com/embed/cwqDu0ZzbYE",
    category: "Jornada UX/UI",
  },
  {
    img: "https://i.ytimg.com/vi/ZMZjQ9aRuIY/sddefault.jpg",
    title:
      "Live #3 Jornada UX/UI: As oportunidades de estudar um programa de formação pagando após formado",
    link: "https://www.youtube.com/embed/ZMZjQ9aRuIY",
    category: "Jornada UX/UI",
  },
  {
    img: "https://i.ytimg.com/vi/8sd3wuKTZMA/sddefault.jpg",
    title:
      "Live #2 Jornada UX/UI: O profissional de UX/UI Design no mercado digital - Growdev",
    link: "https://www.youtube.com/embed/8sd3wuKTZMA",
    category: "Jornada UX/UI",
  },
  {
    img: "https://i.ytimg.com/vi/-26aqPtgoEY/sddefault.jpg",
    title:
      "Live #1 Jornada UX/UI: O papel do UX/UI Designer no desenvolvimento de um produto digital - Growdev",
    link: "https://www.youtube.com/embed/-26aqPtgoEY",
    category: "Jornada UX/UI",
  },
  {
    img: "https://i.ytimg.com/vi/QsuhYgsSYQo/sddefault.jpg",
    title: "Célula de talentos - Uma solução Growdev",
    link: "https://www.youtube.com/embed/QsuhYgsSYQo",
    category: "Diversos",
  },
  {
    img: "https://i.ytimg.com/vi/ouDn8z3PSqs/sddefault.jpg",
    title: "Como é o dia a dia de um dev? Live Growdev com Marcelo Eltz",
    link: "https://www.youtube.com/embed/ouDn8z3PSqs",
    category: "Diversos",
  },
  {
    img: "https://i.ytimg.com/vi/cQDQNX6NXYo/sddefault.jpg",
    title:
      "Onde trabalhar com qualidade de software? Conheça a Testing Company, empresa parceira da Growdev",
    link: "https://www.youtube.com/embed/cQDQNX6NXYo",
    category: "Diversos",
  },
  {
    img: "https://i.ytimg.com/vi/nKGbolkirBM/sddefault.jpg",
    title: "WEBINAR ANALISTA DE DADOS - com Paulo Marcon da Arezzo&Co",
    link: "https://www.youtube.com/embed/nKGbolkirBM",
    category: "Diversos",
  },
  {
    img: "https://i.ytimg.com/vi/6sZPsqNjeek/sddefault.jpg",
    title: "Tecnologia trazendo soluções para a Arezzo & CO | Ricardo Pinho",
    link: "https://www.youtube.com/embed/6sZPsqNjeek",
    category: "Diversos",
  },
];
