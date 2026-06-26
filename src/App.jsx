import "./App.css";

const whatsapp = "https://wa.me/523339159117";
const mapsUrl = "https://maps.app.goo.gl/Sr6L2EeYHEnzvJfv5";

const specialties = [
  { img: "/chicharron.jpg", title: "Chicharrón de pescado", price: "$140", desc: "Crujiente, doradito y servido con el sazón tradicional de la casa." },
  { img: "/aguachile.jpg", title: "Aguachiles", price: "$190", desc: "Verde, rojo o negro: frescos, picositos y preparados al momento." },
  { img: "/caldo.jpg", title: "Caldo de pescado", price: "$115", desc: "Calientito, sustancioso y con sabor de mar para levantar el ánimo." },
  { img: "/pulpo.jpg", title: "Aguachile de pulpo", price: "$220", desc: "Pulpo suave con limón, chile y vegetales frescos." },
  { img: "/galeria1.jpg", title: "Aguachile loco", price: "$210", desc: "Camarón, pulpo y callo en una mezcla intensa y muy botanera." },
  { img: "/galeria2.jpg", title: "Birria", price: "$125", desc: "Un clásico de la casa para quienes buscan sabor mexicano de tradición." },
  { img: "/galeria3.jpg", title: "Sopa loca", price: "$180", desc: "Porción generosa con mariscos, caldo y todo el sabor popular." },
  { img: "/galeria4.jpg", title: "Caguamanta", price: "$125", desc: "Receta de costa, servida caliente y con el toque de El Jarocho." },
];

const menuItems = [
  ["Surtido", "$130"],
  ["Aguachile verde, rojo y negro", "$190"],
  ["Aguachile de pulpo", "$220"],
  ["Aguachile loco", "$210"],
  ["Sopa loca", "$180"],
  ["Albóndigas (3)", "$105"],
  ["Pacholas (2)", "$130"],
  ["Caldo de pescado", "$115"],
  ["Caguamanta", "$125"],
  ["Birria", "$125"],
  ["Agua chile de atún", "$190"],
  ["Chicharrón de pescado", "$140"],
  ["Agua chile de callo de hacha", "$250"],
  ["Dorado o besugo", "Según tamaño"],
];

const experiences = [
  ["🌊", "Mariscos frescos", "Ingredientes con sabor de costa y preparaciones llenas de frescura."],
  ["🐟", "Desde 1960", "Una tradición familiar reconocida por generaciones en Guadalajara."],
  ["🔥", "Preparado al momento", "Platillos servidos con sazón casero, porciones claras y buen precio."],
  ["⭐", "Chicharrón de pescado", "La especialidad de la casa: crujiente, popular y con identidad propia."],
];

const gallery = ["/local.jpg", "/galeria1.jpg", "/galeria2.jpg", "/galeria3.jpg", "/galeria4.jpg"];

export default function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <a className="brand" href="#inicio"><span>Mariscos</span> El Jarocho</a>
        <div>
          <a href="#especialidades">Especialidades</a>
          <a href="#menu">Menú</a>
          <a href="#ubicacion">Ubicación</a>
          <a className="nav-order" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </nav>

      <header className="hero" id="inicio">
        <div className="hero-content">
          <p className="eyebrow">Desde 1960 · Guadalajara, Jalisco</p>
          <h1>Mariscos El Jarocho</h1>
          <p className="hero-copy">Desde 1960 sirviendo mariscos frescos, chicharrón de pescado y platillos con sabor de costa.</p>
          <strong className="house-special">Especialidad de la casa: Chicharrón de pescado</strong>
          <div className="hero-buttons">
            <a href="#menu">Ver menú</a>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="whats-btn">Pedir por WhatsApp</a>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="secondary">Cómo llegar</a>
          </div>
        </div>
        <div className="hero-badge">
          <img src="/logo.png" alt="Logo Mariscos El Jarocho" />
          <span>Chicharrón de pescado</span>
        </div>
      </header>

      <section className="quick-info">
        <InfoCard title="Horario" text="Lunes a sábado · 11:00 AM - 6:00 PM" />
        <InfoCard title="Teléfono" text="33 3915 9117" />
        <InfoCard title="Ubicación" text="Guadalajara, Jalisco · abre mapa para llegar" />
      </section>

      <section className="section specialties" id="especialidades">
        <p className="section-label">Especialidades</p>
        <h2>Favoritos con sabor de costa</h2>
        <div className="specialty-grid">
          {specialties.map((item) => <FoodCard key={item.title} {...item} />)}
        </div>
      </section>

      <section className="section menu" id="menu">
        <p className="section-label">Menú destacado</p>
        <h2>Platillos y precios</h2>
        <div className="menu-board">
          <h3>Platos</h3>
          {menuItems.map(([name, price]) => <MenuRow key={name} name={name} price={price} />)}
          <h3>Postres</h3>
          <MenuRow name="Flan de cajeta/caramelo" price="$40" />
        </div>
      </section>

      <section className="section experience">
        <p className="section-label">Experiencia El Jarocho</p>
        <h2>Tradición, frescura y sazón familiar</h2>
        <div className="experience-grid">
          {experiences.map(([icon, title, text]) => <InfoCard key={title} icon={icon} title={title} text={text} />)}
        </div>
      </section>

      <section className="section gallery" id="galeria">
        <p className="section-label">Galería</p>
        <h2>Ambiente popular y platillos de mar</h2>
        <div className="gallery-grid">
          {gallery.map((img, index) => <ImageTile key={img} img={img} label={`El Jarocho ${index + 1}`} />)}
        </div>
      </section>

      <section className="location" id="ubicacion">
        <div>
          <p className="section-label">Ubicación y horario</p>
          <h2>Ven por tu chicharrón de pescado</h2>
          <p><strong>Lunes a sábado</strong><br />11:00 AM - 6:00 PM</p>
          <a href={mapsUrl} target="_blank" rel="noreferrer">Abrir en Google Maps</a>
        </div>
        <iframe title="Mapa aproximado de Guadalajara" src="https://www.google.com/maps?q=Guadalajara,Jalisco,Mexico&output=embed" loading="lazy"></iframe>
      </section>

      <section className="cta" id="contacto">
        <p className="section-label">Contacto</p>
        <h2>¿Listo para pedir?</h2>
        <p>Haz tu pedido por WhatsApp o llámanos al <strong>33 3915 9117</strong>.</p>
        <a href={whatsapp} target="_blank" rel="noreferrer">Pedir por WhatsApp</a>
      </section>

      <footer>
        <h3>Mariscos El Jarocho</h3>
        <p>Desde 1960 · Chicharrón de pescado · Restaurante de mariscos</p>
        <p>Tel. 33 3915 9117 · Lunes a sábado, 11:00 AM - 6:00 PM · Guadalajara, Jalisco</p>
      </footer>

      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Pedir por WhatsApp">💬</a>
    </div>
  );
}

function InfoCard({ icon = "⚓", title, text }) {
  return <article className="info-card"><span>{icon}</span><h3>{title}</h3><p>{text}</p></article>;
}

function FoodCard({ img, title, desc, price }) {
  return <article className="food-card"><ImageTile img={img} label={title} /><div><h3>{title}</h3><p>{desc}</p><strong>{price}</strong></div></article>;
}

function ImageTile({ img, label }) {
  return <div className="image-tile" style={{ backgroundImage: `linear-gradient(135deg, rgba(0,45,90,.55), rgba(215,35,45,.35)), url(${img})` }} role="img" aria-label={label}><span>{label}</span></div>;
}

function MenuRow({ name, price }) {
  return <div className="menu-row"><span>{name}</span><strong>{price}</strong></div>;
}
