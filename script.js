const sections = {
  inicio: document.getElementById("inicio"),
  contacto: document.getElementById("contacto"),
  vehiculos: document.getElementById("vehiculos"),
  success: document.getElementById("success")
};

const openButtons = document.querySelectorAll("[data-open]");
const backButtons = document.querySelectorAll("[data-back]");
const resetButtons = document.querySelectorAll("[data-reset]");
const successWhatsapp = document.getElementById("successWhatsapp");

const WHATSAPP_NUMBER = "595982228182";

function showSection(name) {
  Object.keys(sections).forEach(key => {
    const section = sections[key];
    section.classList.toggle("hidden", key !== name);

    if (key === name && key !== "inicio") {
      section.classList.remove("panel-enter");
      void section.offsetWidth;
      section.classList.add("panel-enter");
    }
  });
}

openButtons.forEach(button => {
  button.addEventListener("click", () => showSection(button.dataset.open));
});

backButtons.forEach(button => {
  button.addEventListener("click", () => showSection("inicio"));
});

resetButtons.forEach(button => {
  button.addEventListener("click", () => showSection("inicio"));
});

function openSuccess(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  successWhatsapp.href = url;
  showSection("success");
}

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const unit = document.getElementById("unit").value.trim() || "No especificó";
  const interest = document.getElementById("interest").value;
  const message = document.getElementById("message").value.trim() || "Sin mensaje adicional";

  const whatsappMessage =
`Hola, vi una unidad en el showroom de Exclusive Motors fuera del horario de atención.

Nombre: ${name}
WhatsApp: ${phone}
Unidad de interés: ${unit}
Consulta: ${interest}
Mensaje: ${message}`;

  openSuccess(whatsappMessage);
});

document.getElementById("stockForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("stockName").value.trim();
  const phone = document.getElementById("stockPhone").value.trim();
  const stockType = document.getElementById("stockType").value;
  const budget = document.getElementById("budget").value.trim() || "No especificó";

  const whatsappMessage =
`Hola, escaneé el QR de Exclusive Motors fuera del horario de atención.

Nombre: ${name}
WhatsApp: ${phone}
Estoy buscando: ${stockType}
Presupuesto aproximado: ${budget}

Quisiera recibir el stock disponible actualizado.`;

  openSuccess(whatsappMessage);
});
