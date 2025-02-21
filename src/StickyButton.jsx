import { useEffect, useState } from 'react';

const StickyButton = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.sticky-top');
      if (section) {
        const { top } = section.getBoundingClientRect();
        setIsSticky(top === 0); // Se activa solo cuando el elemento realmente está pegajoso
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="sticky-top">
      <div 
        className="bg-cyan d-flex justify-content-center"
        style={{
          visibility: isSticky ? 'visible' : 'hidden', // Hace que el botón desaparezca sin ocupar espacio
          opacity: isSticky ? 1 : 0, // Agrega una transición suave
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        <a href="https://carminavarelapsicologa.tiendup.com/curso/sanando-las-heridas-emocionales-recursos-integrales-para-psicologos" target='blanck' className="btn btn-outline-light bg-hot-sale btn-lg px-4 gap-3 mt-3">
          INSCRIBIRSE AHORA
        </a>
      </div>
    </section>
  );
};

export default StickyButton;
