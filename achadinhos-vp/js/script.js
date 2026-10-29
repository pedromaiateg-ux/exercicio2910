
const products = [
  {
    id: 1,
    name: "Fone sem fio com estojo",
    category: "tecnologia",
    price: 39.90,
    old: 59.90,
    rating: "4,8",
    label: "ACHADINHO",
    color: "#e8f3ff",
    image: "assets/fone.png",
    link: "#"
  },
  {
    id: 2,
    name: "Organizador multiuso para casa",
    category: "casa",
    price: 29.90,
    old: 39.90,
    rating: "4,7",
    label: "OFERTA",
    color: "#fff0e1",
    image: "assets/organizador.png",
    link: "#"
  },
  {
    id: 3,
    name: "Relógio casual minimalista",
    category: "moda",
    price: 49.90,
    old: 69.90,
    rating: "4,6",
    label: "DESTAQUE",
    color: "#eee9ff",
    image: "assets/relogio.png",
    link: "#"
  },
  {
    id: 4,
    name: "Kit de cuidados pessoais",
    category: "beleza",
    price: 34.90,
    old: 44.90,
    rating: "4,9",
    label: "ACHADINHO",
    color: "#e5f6ed",
    image: "assets/beleza.png",
    link: "#"
  }
];

const grid = document.getElementById("productGrid");
const search = document.getElementById("searchInput");
const empty = document.getElementById("emptyState");
const count = document.getElementById("resultCount");
const favCount = document.getElementById("favCount");

let active = "todos";
const saved = new Set();

function money(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function toast(message) {
  const element = document.getElementById("toast");
  element.textContent = message;
  element.classList.add("show");

  setTimeout(() => {
    element.classList.remove("show");
  }, 2500);
}

function render() {
  const query = search.value.trim().toLowerCase();

  let list = products.filter(product => {
    const categoryMatches =
      active === "todos" ||
      (active === "baratos"
        ? product.price <= 50
        : product.category === active);

    const textMatches =
      product.name.toLowerCase().includes(query) ||
      product.category.includes(query);

    return categoryMatches && textMatches;
  });

  const sort = document.getElementById("sortSelect").value;

  if (sort === "low") {
    list.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    list.sort((a, b) => b.price - a.price);
  }

  if (sort === "name") {
    list.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }

  grid.innerHTML = "";

  count.textContent =
    `${list.length} ${list.length === 1 ? "produto" : "produtos"}`;

  empty.hidden = list.length > 0;

  list.forEach(product => {
    const card = document.createElement("article");
    card.className = "product";

    card.innerHTML = `
      <div class="product-image" style="background:${product.color}">
        <span class="tag">${product.label}</span>

        <button
          class="heart ${saved.has(product.id) ? "saved" : ""}"
          data-fav="${product.id}"
          aria-label="Favoritar produto">
          ${saved.has(product.id) ? "♥" : "♡"}
        </button>

        <img
          src="${product.image}"
          alt="${product.name}"
          onerror="this.style.display='none';
          this.parentElement.insertAdjacentHTML(
            'beforeend',
            '<span style=&quot;font-size:65px&quot;>🛍️</span>'
          )">
      </div>

      <div class="product-body">
        <div class="product-category">${product.category}</div>
        <h3>${product.name}</h3>

        <div class="rating">★ ${product.rating}</div>

        <div class="oldprice">${money(product.old)}</div>
        <div class="price">${money(product.price)}</div>

        <div class="installments">
          Confira o preço na loja
        </div>

        <div class="product-bottom">
          <span class="shipping">↗ Loja parceira</span>
          <button class="offerbtn" data-offer="${product.id}">
            Ver oferta
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  favCount.textContent = saved.size;
}

function setFilter(category) {
  active = category;

  document.querySelectorAll("[data-cat]").forEach(button => {
    button.classList.toggle("active", button.dataset.cat === category);
  });

  document.querySelectorAll("[data-filter]").forEach(button => {
    button.classList.toggle("active", button.dataset.filter === category);
  });

  render();
}

document.querySelectorAll("[data-cat]").forEach(button => {
  button.addEventListener("click", () => {
    setFilter(button.dataset.cat);
    document.getElementById("ofertas").scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.querySelectorAll("[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    setFilter(button.dataset.filter);
  });
});

search.addEventListener("input", render);

document.getElementById("searchForm").addEventListener("submit", event => {
  event.preventDefault();
  document.getElementById("ofertas").scrollIntoView({
    behavior: "smooth"
  });
  render();
});

document.getElementById("sortSelect").addEventListener("change", render);

grid.addEventListener("click", event => {
  const favoriteButton = event.target.closest("[data-fav]");

  if (favoriteButton) {
    const id = Number(favoriteButton.dataset.fav);

    if (saved.has(id)) {
      saved.delete(id);
    } else {
      saved.add(id);
    }

    render();
    toast("Favoritos atualizados!");
  }

  const offerButton = event.target.closest("[data-offer]");

  if (offerButton) {
    const id = Number(offerButton.dataset.offer);
    const product = products.find(item => item.id === id);

    if (product.link === "#") {
      toast("Este produto ainda não tem link de afiliado.");
      return;
    }

    window.open(product.link, "_blank", "noopener,noreferrer");
  }
});

render();
