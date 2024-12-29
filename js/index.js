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
 * Cria as categorias com cards
 * Itera sobre as categorias e cria um container com um título
 * e um link para cada uma delas, adicionando-os na div com id
 * "cards-categories"
 */

function renderCardsCategories() {
  const cardsCategories = document.querySelector("#cards-categories");

  categories.forEach((category) => {
    const categoryFormated = formatString(category);

    const divCategory = document.createElement("div");
    divCategory.classList.add("col-12", "pt-2", "pb-5");
    divCategory.innerHTML = `
        <div class="container">
          <div class="row" id="${categoryFormated}">
            <div class="col-12">
              <a class="fw-bold fs-5 link-category" href="#${categoryFormated}">
                ${category} <i class="bi bi-play-fill"></i>
              </a>
            </div>
            
          </div>
        </div>
    `;

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
 * Cria um card para um vídeo
 *
 * @param {Object} video - O vídeo que vai ser renderizado
 * @param {string} video.img - A imagem do vídeo
 * @param {string} video.title - O título do vídeo
 * @param {string} video.link - O link do vídeo
 * @param {string} video.category - A categoria do vídeo
 *
 * @returns {HTMLElement} O card do vídeo
 */

function createCard(video) {
  const category = formatString(video.category);
  const id = `#${category}`;

  const card = document.createElement("div");
  card.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "col-video");
  card.innerHTML = `
    <div class="video-card" id="${id}">
      <img src="${video.img}" class="img-fluid" alt="Imagem do video ${video.title}" >
      <div class="video-card-body text-light" onClick="openVideo('${video.link}')">
        <p class="d-flex align-items-center gap-2"><i class="bi bi-play-circle fs-1"></i>${video.title}</p>
      </div>
    </div>
  `;

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
