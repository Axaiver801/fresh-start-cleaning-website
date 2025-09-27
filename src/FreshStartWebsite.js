import React, { useState } from "react";

// FreshStart Cleaning Website + Business Model with Spanish Translation Option

export default function FreshStartWebsite() {
  const [lang, setLang] = useState("en");

  const t = {
    en: {
      title: "FreshStart Cleaning Solutions",
      subtitle: "Sofas • Rugs — Pickup & Deep Cleaning",
      heroHeading: "Breathe new life into your home.",
      heroText:
        "We specialize in cleaning fabric sofas and rugs. Our pickup and drop-off rug service makes cleaning convenient for busy families, pet owners, and homeowners.",
      seePrices: "See Prices",
      contactUs: "Contact Us",
      quickBooking: "Quick Booking",
      name: "Full name",
      phone: "Phone number",
      service: "Service",
      sofa: "Sofa Cleaning",
      rug: "Rug Pickup & Cleaning",
      notes: "Notes (rug size, sofa type, address)",
      submit: "Submit Request",
      pricing: "Pricing",
      rugs: "Rug Cleaning",
      sofas: "Sofa Cleaning",
      why: "Why Us?",
      smallRug: "Small (car mat, bath, hallway): $10",
      mediumRug: "Medium (5×7, 6×9): $50",
      largeRug: "Large (8×10, 9×12): $80–$100",
      smallSofa: "Small (Recliner): $60",
      mediumSofa: "Medium (Loveseat/Standard Sofa): $100–$150",
      largeSofa: "Large (Sectional): $200–$250",
      why1: "✔ Rug pickup & delivery",
      why2: "✔ Safe for kids & pets",
      why3: "✔ Trained local staff",
      model: "Business Model & Team",
      modelText:
        "FreshStart Cleaning Solutions sells direct-to-customer cleaning services. We market by approaching families, parents, pet owners, and homeowners in public settings, handing them flyers and directing them to this website for bookings.",
      labor: "Labor",
      laborText:
        "Cleaners who perform sofa and rug cleaning and manage pickups/deliveries.",
      marketing: "Marketing",
      marketingText:
        "Street outreach, flyer distribution, social media, and community engagement.",
      support: "Support & Admin",
      supportText:
        "Customer support, appointment setting, payroll, and bookkeeping.",
      contact: "Contact",
      contactText: "Call us today to schedule your cleaning or pickup.",
      phoneLabel: "📞 Phone:",
      websiteLabel: "🌐 Website:",
    },
    es: {
      title: "FreshStart Soluciones de Limpieza",
      subtitle: "Sofás • Alfombras — Recogida y Limpieza Profunda",
      heroHeading: "Devuelve vida nueva a tu hogar.",
      heroText:
        "Nos especializamos en la limpieza de sofás de tela y alfombras. Nuestro servicio de recogida y entrega de alfombras hace que la limpieza sea conveniente para familias ocupadas, dueños de mascotas y propietarios de viviendas.",
      seePrices: "Ver Precios",
      contactUs: "Contáctanos",
      quickBooking: "Reserva Rápida",
      name: "Nombre completo",
      phone: "Número de teléfono",
      service: "Servicio",
      sofa: "Limpieza de Sofá",
      rug: "Recogida y Limpieza de Alfombra",
      notes: "Notas (tamaño de alfombra, tipo de sofá, dirección)",
      submit: "Enviar Solicitud",
      pricing: "Precios",
      rugs: "Limpieza de Alfombras",
      sofas: "Limpieza de Sofás",
      why: "¿Por qué Nosotros?",
      smallRug: "Pequeña (tapete, baño, pasillo): $10",
      mediumRug: "Mediana (5×7, 6×9): $50",
      largeRug: "Grande (8×10, 9×12): $80–$100",
      smallSofa: "Pequeño (Reclinable): $60",
      mediumSofa: "Mediano (Loveseat/Sofá Estándar): $100–$150",
      largeSofa: "Grande (Seccional): $200–$250",
      why1: "✔ Recogida y entrega de alfombras",
      why2: "✔ Seguro para niños y mascotas",
      why3: "✔ Personal local capacitado",
      model: "Modelo de Negocio y Equipo",
      modelText:
        "FreshStart Cleaning Solutions vende servicios de limpieza directamente al cliente. Nos promocionamos acercándonos a familias, padres, dueños de mascotas y propietarios en lugares públicos, entregando volantes y dirigiéndolos a este sitio web para reservar.",
      labor: "Trabajo",
      laborText:
        "Limpiadores que realizan la limpieza de sofás y alfombras y manejan recogidas/entregas.",
      marketing: "Marketing",
      marketingText:
        "Alcance en la calle, distribución de volantes, redes sociales y participación comunitaria.",
      support: "Soporte y Administración",
      supportText:
        "Atención al cliente, programación de citas, nómina y contabilidad.",
      contact: "Contacto",
      contactText: "Llámanos hoy para programar tu limpieza o recogida.",
      phoneLabel: "📞 Teléfono:",
      websiteLabel: "🌐 Sitio Web:",
    },
  };

  const tr = t[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Header */}
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-amber-400 flex items-center justify-center font-bold text-white">FS</div>
          <div>
            <h1 className="text-2xl font-extrabold">{tr.title}</h1>
            <p className="text-sm text-gray-600">{tr.subtitle}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1 rounded ${lang === "en" ? "bg-amber-400 text-white" : "border"}`}
          >
            EN
          </button>
          <button
            onClick={() => setLang("es")}
            className={`px-3 py-1 rounded ${lang === "es" ? "bg-amber-400 text-white" : "border"}`}
          >
            ES
          </button>
          <a href="#contact" className="px-4 py-2 bg-amber-400 text-white rounded-lg">{tr.contactUs}</a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center p-6">
        <div>
          <h2 className="text-4xl font-extrabold leading-tight">{tr.heroHeading}</h2>
          <p className="mt-4 text-gray-600">{tr.heroText}</p>
          <div className="mt-6 flex gap-3">
            <a href="#pricing" className="px-5 py-3 bg-amber-400 text-white rounded-lg font-semibold">{tr.seePrices}</a>
            <a href="#contact" className="px-5 py-3 border rounded-lg">{tr.contactUs}</a>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="font-bold text-lg">{tr.quickBooking}</h3>
          <form
            className="mt-4 grid gap-3"
            action="https://formspree.io/f/mnngjoav"
            method="POST"
          >
            <input
              className="border rounded p-2"
              name="name"
              placeholder={tr.name}
              required
            />
            <input
              className="border rounded p-2"
              name="phone"
              placeholder={tr.phone}
              required
            />
            <select
              className="border rounded p-2"
              name="service"
              required
            >
              <option value="">{tr.service}</option>
              <option value="sofa">{tr.sofa}</option>
              <option value="rug">{tr.rug}</option>
            </select>
            <textarea
              className="border rounded p-2"
              name="notes"
              placeholder={tr.notes}
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 bg-amber-400 text-white rounded-lg"
            >
              {tr.submit}
            </button>
          </form>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto p-6">
        <h3 className="text-2xl font-bold">{tr.pricing}</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg bg-white">
            <h4 className="font-semibold">{tr.rugs}</h4>
            <ul className="mt-2 text-sm space-y-1 text-gray-700">
              <li>{tr.smallRug}</li>
              <li>{tr.mediumRug}</li>
              <li>{tr.largeRug}</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg bg-white">
            <h4 className="font-semibold">{tr.sofas}</h4>
            <ul className="mt-2 text-sm space-y-1 text-gray-700">
              <li>{tr.smallSofa}</li>
              <li>{tr.mediumSofa}</li>
              <li>{tr.largeSofa}</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg bg-white">
            <h4 className="font-semibold">{tr.why}</h4>
            <ul className="mt-2 text-sm space-y-1 text-gray-700">
              <li>{tr.why1}</li>
              <li>{tr.why2}</li>
              <li>{tr.why3}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Roles / Business Model */}
      <section id="team" className="max-w-6xl mx-auto p-6">
        <h3 className="text-2xl font-bold">{tr.model}</h3>
        <p className="mt-3 text-gray-600">{tr.modelText}</p>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg bg-white">
            <h5 className="font-semibold">{tr.labor}</h5>
            <p className="text-sm text-gray-600">{tr.laborText}</p>
          </div>
          <div className="p-4 border rounded-lg bg-white">
            <h5 className="font-semibold">{tr.marketing}</h5>
            <p className="text-sm text-gray-600">{tr.marketingText}</p>
          </div>
          <div className="p-4 border rounded-lg bg-white">
            <h5 className="font-semibold">{tr.support}</h5>
            <p className="text-sm text-gray-600">{tr.supportText}</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto p-6">
        <h3 className="text-2xl font-bold">{tr.contact}</h3>
        <p className="mt-2 text-gray-600">{tr.contactText}</p>
        <div className="mt-4 p-4 border rounded-lg bg-white">
          <p className="text-sm text-gray-700">{tr.phoneLabel} <strong>(801) 205-8746</strong></p>
          <p className="text-sm text-gray-700 mt-1">{tr.websiteLabel} <strong>www.freshstartcleaningslc.com</strong></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t mt-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">© {new Date().getFullYear()} FreshStart Cleaning Solutions</div>
          <div className="text-sm text-gray-600">Sofas & Rugs • Pickup & Delivery • Trusted Local Service</div>
        </div>
      </footer>
    </div>
  );
}