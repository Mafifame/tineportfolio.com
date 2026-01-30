import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [lang, setLang] = useState("fr");
  const [open, setOpen] = useState(false);

  const content = {
  fr: {
    title: "Développeuse Front-End",
    about: "À propos de moi",
    skills: "Mes Compétences",
    experience: "Expériences Professionnelles",
    projects: "Mes réalisations",
    certifications: "Mes Certifications",
    download: "Mon CV",
  },
  en: {
    title: "Front-End Developer",
    about: "About me",
    skills: "Skills",
    experience: "Professional experiences",
    projects: "Projects",
    certifications: "Certifications",
    download: "Download CV",
  },
};

  const projects = [
    {
      name: "BizEduSante",
      img: "/images/bes.png",
      img: `${import.meta.env.BASE_URL}images/bes.png`,
      link: "https://mafifame.github.io/bizedusante.com/",
      descriptionFR:
        "Interfaces créées pour un client du secteur de la santé dans le but d’améliorer ses services.",
      descriptionEN:
        "Web interface creation and database design contribution.",
      tech: "HTML, CSS, JavaScript, MySQL",
    },
    {
      name: "XXmaTECH",
      img: "/images/xxma.png",
      img: `${import.meta.env.BASE_URL}images/xxma.png`,
      link: "https://mafifame.github.io/xxmatech.com/",
      descriptionFR:
        "Site web développé pour une entreprise en collaboration avec la Direction générale des impôts du Niger, puis transformé en template.",
      descriptionEN:
        "Modern interface development, API integration and code reviews.",
      tech: "HTML, CSS, JavaScript, Bootstrap",
    },
    {
      name: "Wsite (en cours)",
      img: "/images/wsite.png",
      img: `${import.meta.env.BASE_URL}images/wsite.png`,
      link: "#",
      descriptionFR:
        "Création d’un site web pour une entreprise du secteur de la restauration.",
      descriptionEN:
        "Responsive web interfaces, mockup integration and back-end collaboration.",
      tech: "HTML, CSS, JavaScript, Bootstrap",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white">
  {/* Navigation */}
  <nav className="flex justify-between items-center px-8 py-4 bg-black/20 backdrop-blur">
    <h1 className="font-bold text-xl">Martine Fifame DETE</h1>

    {/* Hamburger button (mobile) */}
    <button
      className="md:hidden text-white text-2xl"
      onClick={() => setOpen(!open)}
    >
      {open ? "✕" : "☰"}
    </button>

    {/* Menu desktop */}
    <ul className="hidden md:flex gap-6 text-sm font-semibold">
      <li>
        <a
          href="/images/CV-DETE-MARTINE.pdf"
          href={`${import.meta.env.BASE_URL}images/CV-DETE-MARTINE.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-300"
        >
          {content[lang].download}
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-pink-300">
          {content[lang].about}
        </a>
      </li>
      <li>
        <a href="#experience" className="hover:text-pink-300">
          {content[lang].experience}
        </a>
      </li>
      <li>
        <a href="#skills" className="hover:text-pink-300">
          {content[lang].skills}
        </a>
      </li>
      <li>
        <a href="#certifications" className="hover:text-pink-300">
          {content[lang].certifications}
        </a>
      </li>
      <li>
        <a href="#projects" className="hover:text-pink-300">
          {content[lang].projects}
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-pink-300">
          Contact
        </a>
      </li>

      {/* Lang switch */}
      {/*<li>
        <button
          onClick={() => setLang(lang === "fr" ? "en" : "fr")}
          className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 transition"
        >
          {lang === "fr" ? "FR" : "EN"}
        </button>
      </li>*/}
    </ul>

    {/* Menu mobile */}
    {open && (
      <motion.ul
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-16 left-0 w-full bg-indigo-700 backdrop-blur md:hidden flex flex-col gap-4 p-6 text-sm font-semibold"
      >
        <li>
          <a
            href={`${import.meta.env.BASE_URL}images/CV-DETE-MARTINE.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300"
            onClick={() => setOpen(false)}
          >
            {content[lang].download}
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-pink-300" onClick={() => setOpen(false)}>
            {content[lang].about}
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:text-pink-300" onClick={() => setOpen(false)}>
            {content[lang].experience}
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-pink-300" onClick={() => setOpen(false)}>
            {content[lang].skills}
          </a>
        </li>
        <li>
          <a href="#certifications" className="hover:text-pink-300" onClick={() => setOpen(false)}>
            {content[lang].certifications}
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-pink-300" onClick={() => setOpen(false)}>
            {content[lang].projects}
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-pink-300" onClick={() => setOpen(false)}>
            Contact
          </a>
        </li>

        {/* Lang switch */}
        {/*<li>
          <button
            onClick={() => {
              setLang(lang === "fr" ? "en" : "fr");
              setOpen(false);
            }}
            className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 transition"
          >
            {lang === "fr" ? "FR" : "EN"}
          </button>
        </li>*/}
      </motion.ul>
    )}
  </nav>
</header>


{/* About */}
<section id="about" className="max-w-5xl mx-auto p-8">
  <div className="flex flex-col md:flex-row items-center gap-10">
    {/* Texte */}
    <div className="md:w-3/5">
      <h2 className="text-3xl font-bold text-indigo-600 mb-10 text-center">
         {content[lang].about}
      </h2>
      <p className="text-lg text-justify">
        Très passionnée par la création d’applications performantes, fiables, intuitives
        et véritablement centrées sur l’utilisateur, je suis développeuse Front-end
        avec 4 ans d’expérience et j’ai choisi de me tourner vers un parcours fullstack 
        afin d’élargir mes compétences techniques.
        Je crée des interfaces dynamiques et responsives tout en collaborant 
        étroitement avec les parties prenantes. J’accorde une grande importance au 
        travail en équipe, aussi bien avec les designers qu’avec les développeurs 
        back-end. Dotée d'une grande capacité d'adaptabilité, curieuse, rigoureuse et très 
        motivée, j’aime explorer de nouvelles technologies et évoluer dans des environnements 
        où l’innovation, la collaboration et le partage de connaissances sont valorisés.
      </p>
    </div>

    {/* Image */}
    <div className="md:w-2/5 flex justify-center">
      <img
        src="/images/profil.jpeg"
        src={`${import.meta.env.BASE_URL}images/profil.jpeg`}
        alt="Profil"
        className="w-72 h-72 object-cover rounded-2xl shadow-lg"
      />
    </div>
  </div>
</section>

{/* Expériences professionnelles */}
<section id="experience" className="py-16 bg-gradient-to-r from-indigo-50 to-pink-50">
  <div className="max-w-5xl mx-auto px-8">
    <h2 className="text-3xl font-bold text-indigo-600 mb-10">
      {content[lang].experience}
    </h2>

    <div className="grid md:grid-cols-2 gap-10">
      {/* Multi Soft (2022-2025) */}
      <div className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-lg min-h-[280px]">
        <h3 className="text-xl font-bold mb-2">
          Développeuse front-end / Technicienne informatique
        </h3>
        <p className="text-sm text-gray-600 mt-1 mb-4">
          <span className="font-semibold">Janvier 2022 à août 2025</span> – Multi Soft Sarl
        </p>
        <ul className="list-disc list-inside text-sm leading-relaxed space-y-2">
          <li>Réalisation d’interfaces web responsives de Wsite avec HTML5, CSS3, JavaScript, Bootstrap3</li>
          <li>Intégration de maquettes et collaboration back-end</li>
          <li>Assistance technique à distance et maintenance des MECeF avec support aux fournisseurs</li>
        </ul>
      </div>

      {/* ISAHIT (2021-2023) */}
      <div className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-lg min-h-[280px]">
        <h3 className="text-xl font-bold mb-2">Hiteuse</h3>
        <p className="text-sm text-gray-600 mt-1 mb-4">
          <span className="font-semibold">Mai 2021 à septembre 2023</span> – ISAHIT SAS, St-Mandé (France)
        </p>
        <ul className="list-disc list-inside text-sm leading-relaxed space-y-2">
          <li>Annotation de contenus (textes, images, vidéos) et gestion du back-office</li>
          <li>Recherches stratégiques sur LinkedIn pour enrichissement et catégorisation de données</li>
        </ul>
      </div>

      {/* Multi Soft (2021) */}
      <div className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-lg min-h-[260px]">
        <h3 className="text-xl font-bold mb-2">Consultante en développement web</h3>
        <p className="text-sm text-gray-600 mt-1 mb-4">
          <span className="font-semibold">Septembre 2021 à décembre 2021</span> – Multi Soft Sarl
        </p>
        <ul className="list-disc list-inside text-sm leading-relaxed space-y-2">
          <li>Développement d’interfaces web responsives de XXmaTECH avec HTML5, CSS3, JavaScript et Bootstrap3</li>
          <li>Intégration de maquettes et d'API, collaboration back-end et participation aux revues de code</li>
        </ul>
      </div>

      {/* Multi Soft (2020-2021) */}
      <div className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-lg min-h-[260px]">
        <h3 className="text-xl font-bold mb-2">Stage professionnel</h3>
        <p className="text-sm text-gray-600 mt-1 mb-4">
          <span className="font-semibold">Juillet 2020 à juillet 2021</span> – Multi Soft Sarl
        </p>
        <ul className="list-disc list-inside text-sm leading-relaxed space-y-2">
          <li>Création d’interfaces pour BizEduSante avec HTML5, CSS3, JavaScript</li>
          <li>Participation à la conception de la base de données sous PhpMyAdmin</li>
          <li>Gestion complète du parc informatique : installation, configuration et mise à jour des équipements et logiciels</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Compétences */}
<section id="skills" className="bg-white py-10">
  <div className="max-w-5xl mx-auto px-4 sm:px-8">
    <motion.h2
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="text-3xl font-bold text-pink-500 mb-12 text-center"
    >
      {content[lang].skills}
    </motion.h2>

    <div className="flex flex-col items-center gap-32">
      {/* Ligne 1 */}
      <div className="flex flex-wrap justify-center gap-16 md:gap-20 lg:gap-32">
        {["html5", "css3", "javascript", "react", "vuejs"].map((skill) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, type: "spring", stiffness: 120 }}
            whileHover={{ rotate: 8, scale: 1.2, transition: { type: "spring", stiffness: 150 } }}
            className="flex flex-col items-center gap-2 w-1/2 sm:w-1/2 md:w-auto"
          >
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill}/${skill}-original.svg`}
              alt={skill}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
            />
            <span className="text-xs sm:text-sm font-medium capitalize text-center">{skill}</span>
          </motion.div>
        ))}
      </div>

      {/* Ligne 2 */}
      <div className="flex flex-wrap justify-center gap-16 md:gap-20 lg:gap-32">
        {["bootstrap", "nodejs", "python", "mysql", "tailwindcss"].map((skill) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, type: "spring", stiffness: 120 }}
            whileHover={{ rotate: 8, scale: 1.2, transition: { type: "spring", stiffness: 150 } }}
            className="flex flex-col items-center gap-2 w-1/2 sm:w-1/2 md:w-auto"
          >
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill}/${skill}-original.svg`}
              alt={skill}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
            />
            <span className="text-xs sm:text-sm font-medium capitalize text-center">{skill}</span>
          </motion.div>
        ))}
      </div>

      {/* Ligne 3 centrée */}
      <div className="flex flex-wrap justify-center gap-16 md:gap-20 lg:gap-32">
        {["php", "github", "wordpress", "responsive-web"].map((skill) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, type: "spring", stiffness: 120 }}
            whileHover={{ rotate: 8, scale: 1.2, transition: { type: "spring", stiffness: 150 } }}
            className="flex flex-col items-center gap-2 w-1/2 sm:w-1/2 md:w-auto"
          >
            {skill === "responsive-web" ? (
              <img
                src="images/responsive-web.svg"
                alt="Responsive Web"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
              />
            ) : (
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill}/${skill}-original.svg`}
                alt={skill}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
              />
            )}
            <span className="text-xs sm:text-sm font-medium capitalize text-center">
              {skill === "responsive-web" ? "Responsive Web" : skill}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Certifications */}
<section id="certifications" className="bg-white py-10">
  <div className="max-w-5xl mx-auto px-8">
    <motion.h2
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="text-3xl font-bold text-pink-500 mb-6 text-center"
    >
      {content[lang].certifications}
    </motion.h2>

    <ul className="grid md:grid-cols-2 gap-6">
      <li className="bg-indigo-50 p-6 rounded-2xl shadow">
        <h3 className="font-bold text-indigo-700">L'essentiel de React.js</h3>
        <p className="text-sm text-gray-600 mt-2">Linkedin Learning</p>
      </li>

      <li className="bg-indigo-50 p-6 rounded-2xl shadow">
        <h3 className="font-bold text-indigo-700">JavaScript Essentials 1</h3>
        <p className="text-sm text-gray-600 mt-2">JS INSTITUTE</p>
      </li>

      <li className="bg-indigo-50 p-6 rounded-2xl shadow">
        <h3 className="font-bold text-indigo-700">L'essentiel de JavaScript</h3>
        <p className="text-sm text-gray-600 mt-2">Linkedin Learning</p>
      </li>

      <li className="bg-indigo-50 p-6 rounded-2xl shadow">
        <h3 className="font-bold text-indigo-700">L'essentiel de Vue.js</h3>
        <p className="text-sm text-gray-600 mt-2">Linkedin Learning</p>
      </li>
    </ul>
  </div>
</section>

{/* Realisations */}
<section id="projects" className="py-12 bg-gradient-to-r from-pink-50 to-indigo-50">
  <div className="max-w-5xl mx-auto px-8">
    <motion.h2 whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} className="text-3xl font-bold text-pink-500 mb-6 text-center">
      {content[lang].projects}
    </motion.h2>
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((project) => (
        <motion.a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          key={project.name}
          className="bg-white rounded-2xl shadow overflow-hidden"
        >
          <img src={project.img} alt={project.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-indigo-600">{project.name}</h3>
            <p className="text-sm mt-2">
              {lang === "fr" ? project.descriptionFR : project.descriptionEN}
            </p>
            <p className="text-xs mt-3 text-pink-500 font-semibold">{project.tech}</p>
          </div>
        </motion.a>
      ))}
    </div>
  </div>
</section>

{/* Contact */}
<section id="contact" className="bg-indigo-600 text-white p-10">
  <h2 className="text-2xl font-bold mb-8 text-center">Contact</h2>

  <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10">
    {/* Colonne 1 */}
    <div className="md:w-1/2 space-y-4 text-center">
      <p className="flex items-center justify-center gap-3">
        <span>📧</span>
        <span>mafifame@gmail.com</span>
      </p>
      <p className="flex items-center justify-center gap-3">
        <span>🔗</span>
        <span>linkedin.com/in/martine-dete</span>
      </p>
    </div>

    {/* Colonne 2 */}
    <div className="md:w-1/2 space-y-4 text-center">
      <p className="flex items-center justify-center gap-3">
        <span>📞</span>
        <span>07 83 78 80 70</span>
      </p>
      <p className="flex items-center justify-center gap-3">
        <span>📍</span>
        <span>Lyon, France</span>
      </p>
    </div>
  </div>
</section>

{/* Footer */}
    <footer className="bg-indigo-700 text-white text-center p-4">
        © {new Date().getFullYear()} Martine DETE – Développeuse Front-End
    </footer>
    </div>
  );
}