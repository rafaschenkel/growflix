const navBarNav = document.querySelector(".navbar-nav");

const myModal = new bootstrap.Modal(document.getElementById("myModal"), {
  keyboard: false,
});

const btbBannerGrowcast = document.querySelector("#btn-banner-growcast");
btbBannerGrowcast.addEventListener("click", () => {
  openVideo("https://www.youtube.com/embed/aJ-HZuLcKeA");
});

const categories = [];
videos.map((video) =>
  categories.includes(video.category) ? "" : categories.push(video.category)
);

/**
 * Cria os links de navegação para as categorias
 * Itera sobre as categorias e cria um link para cada uma delas,
 * adicionando-os na navbar
 */
function renderNavLinks() {
  categories.forEach((category) => {
    const categoryFormated = formatString(category);
    const li = document.createElement("li");
    li.classList.add("nav-item");
    const a = document.createElement("a");
    a.classList.add("nav-link");
    a.setAttribute("href", `#${categoryFormated}`);
    a.textContent = category;
    li.appendChild(a);
    navBarNav.appendChild(li);
  });
}

/**
 * Renderiza as categorias
 * Itera sobre as categorias e cria um link para cada uma delas,
 * adicionando-os na section de categorias
 */

function renderCardsCategories() {
  const cardsCategories = document.querySelector("#cards-categories");

  categories.forEach((category) => {
    const categoryFormated = formatString(category);

    const divCategory = document.createElement("div");
    divCategory.classList.add("col-12", "pt-2", "pb-5");

    const container = document.createElement("div");
    container.classList.add("container");

    const row = document.createElement("div");
    row.classList.add("row");
    row.setAttribute("id", categoryFormated);

    const divCol = document.createElement("div");
    divCol.classList.add("col-12");

    const link = document.createElement("a");
    link.classList.add("fw-bold", "fs-5", "link-category");
    link.setAttribute("href", `#${categoryFormated}`);

    const icon = document.createElement("i");
    icon.classList.add("bi", "bi-play-fill");

    divCategory.appendChild(container);
    container.appendChild(row);
    row.appendChild(divCol);
    divCol.appendChild(link);
    link.textContent = category + icon;

    cardsCategories.appendChild(divCategory);
  });
}

/**
 * Adiciona os cards de vídeos nas respectivas categorias
 * Itera sobre a lista de vídeos e verifica em qual categoria ele se encaixa,
 * adicionando-o na categoria respectiva.
 */

function renderCards() {
  videos.forEach((video) => {
    const category = formatString(video.category);
    const id = `#${category}`;

    const card = createCard(video);

    document.querySelector(id).appendChild(card);
  });
}

/**
 * Cria um card de vídeo com a imagem, título e link
 * do vídeo, e adiciona um evento de clique que abre o
 * vídeo no modal
 * @param {Object} video - objeto com as informações do vídeo
 * @returns {HTMLElement} - o card de vídeo criado
 */

function createCard(video) {
  const category = formatString(video.category);
  const id = `#${category}`;
  const videoCard = document.createElement("div");
  videoCard.classList.add("video-card");

  const img = document.createElement("img");
  img.src = video.img;
  img.alt = `Imagem do video ${video.title}`;
  img.classList.add("img-fluid");

  const divLink = document.createElement("div");
  divLink.classList.add("video-card-body", "text-light");

  const divTitle = document.createElement("div");
  divTitle.classList.add("d-flex", "align-items-center", "gap-2");

  const icon = document.createElement("i");
  icon.classList.add("bi", "bi-play-circle", "fs-1");

  const title = document.createElement("span");
  title.classList.add("text-light");
  title.textContent = video.title;

  const card = document.createElement("div");
  card.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "col-video");
  card.appendChild(videoCard);
  videoCard.setAttribute("id", id);
  videoCard.appendChild(img);
  videoCard.appendChild(divLink);
  divLink.appendChild(divTitle);
  divTitle.appendChild(icon);
  divTitle.appendChild(title);

  divLink.addEventListener("click", () => {
    openVideo(video.link);
  });

  return card;
}

/**
 * Formata uma string para ser utilizada como ID de um elemento
 *
 * - Normaliza a string para NFD (preparando-a para a remoção de acentos)
 * - Substitui espaços vazios por hifens
 * - Substitui barras ( / ) por hifens
 * - Remove colchetes ( [ ] )
 * - Remove acentos e outros diacríticos
 * - Converte para letras minúsculas
 *
 * @param {string} string - A string a ser formatada
 * @returns {string} A string formatada
 */

function formatString(string) {
  return string
    .normalize("NFD")
    .replaceAll(" ", "-")
    .replaceAll("/", "-")
    .replaceAll("[", "")
    .replaceAll("]", "")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

/**
 * Abre um modal com o vídeo do YouTube
 *
 * @param {string} link - O link do vídeo do YouTube
 */

function openVideo(link) {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("src", link);
  myModal._element.querySelector("#iframe").appendChild(iframe);
  myModal.show();
}

/**
 * Executa funções quando a página termina de carregar
 *
 * Cria os links de navega o e as categorias de vídeos
 * Adiciona os cards de vídeos
 */
window.onload = () => {
  renderNavLinks();
  renderCardsCategories();
  renderCards();
};
