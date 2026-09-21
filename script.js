const products = [
  {name:"Taladro percutor 18V",store:"Leroy Merlin",category:"Herramientas",price:"129,99 €",old:"159,99 €",icon:"🔧",url:"https://www.leroymerlin.es/"},
  {name:"Kit de herramientas",store:"Leroy Merlin",category:"Herramientas",price:"79,99 €",old:"99,99 €",icon:"🧰",url:"https://www.leroymerlin.es/"},
  {name:"Columna de ducha",store:"Leroy Merlin",category:"Baño",price:"149,00 €",old:"189,00 €",icon:"🚿",url:"https://www.leroymerlin.es/"},
  {name:"Lámpara LED de techo",store:"El Corte Inglés",category:"Iluminación",price:"39,99 €",old:"59,99 €",icon:"💡",url:"https://www.elcorteingles.es/"},
  {name:"Grifo de cocina",store:"Leroy Merlin",category:"Cocina",price:"64,99 €",old:"79,99 €",icon:"🚰",url:"https://www.leroymerlin.es/"},
  {name:"Pintura interior 10L",store:"Leroy Merlin",category:"Pintura",price:"42,99 €",old:"52,99 €",icon:"🎨",url:"https://www.leroymerlin.es/"},
  {name:"Aire acondicionado",store:"El Corte Inglés",category:"Climatización",price:"499,00 €",old:"599,00 €",icon:"❄️",url:"https://www.elcorteingles.es/"},
  {name:"Organizador para baño",store:"El Corte Inglés",category:"Baño",price:"24,99 €",old:"34,99 €",icon:"🧺",url:"https://www.elcorteingles.es/"}
];

let category="Todas";
const container=document.querySelector("#products");
const search=document.querySelector("#search");

function render(){
  const q=search.value.toLowerCase().trim();
  const list=products.filter(p=>
    (category==="Todas"||p.category===category) &&
    (p.name.toLowerCase().includes(q)||p.store.toLowerCase().includes(q))
  );
  container.innerHTML=list.map(p=>`
    <article class="product">
      <div class="product-img">${p.icon}</div>
      <div class="product-body">
        <span class="store">${p.store}</span>
        <h3>${p.name}</h3>
        <div><span class="price">${p.price}</span> <span class="old">${p.old}</span></div>
        <a class="btn primary" href="${p.url}" target="_blank" rel="nofollow sponsored noopener">Ver oferta →</a>
      </div>
    </article>
  `).join("") || "<p>No encontramos productos con esa búsqueda.</p>";
}
document.querySelectorAll("[data-category]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    category=btn.dataset.category;
    document.querySelectorAll("[data-category]").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active"); render();
  });
});
document.querySelector('[data-category="Todas"]').classList.add("active");
search.addEventListener("input",render);
document.querySelector("#year").textContent=new Date().getFullYear();
render();
