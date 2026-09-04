document.addEventListener('DOMContentLoaded', () => {

    const boton = document.getElementById('btn__idioma');
    
    // Variable global para que otros scripts la lean
    window.idiomaActual = 'es';

    const traducciones = {
        en: {
            // Navegación
            nav_sobre: 'About me',
            nav_skills: 'Skills',
            nav_hobbies: 'Hobbies',
            nav_formacion: 'Education',
            nav_proyectos: 'Projects',
            nav_contacto: 'Contact',

            // Presentación
            subtitulo: 'Web Dev & Mechanical Engineer',
            presentacion: 'Mechanical Engineer transitioning into the world of web development. I have participated in programs such as Oracle ONE in collaboration with Alura Latam and corporate training programs like Riwi.',

            // CTAs Hero
            cta_proyectos: '<span>View Projects</span> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
            cta_cv: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg> <span>Download CV</span>',
            cta_contacto: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg> <span>Contact Me</span>',

            // Títulos de sección
            titulo_sobre: 'About me',
            titulo_skills: 'Skills',
            titulo_hobbies: 'Hobbies',
            titulo_formacion: 'Education',
            titulo_proyectos: 'Experience & Projects',
            titulo_contacto: 'Contact',

            // Sobre mí
            texto_sobre: `From mechanical design and physical systems to code and interactive user interfaces. As a Mechanical Engineer, I have always been fascinated by understanding how things work; discovering web development provided the perfect intersection between structured logic and visual creativity.<br><br>After completing a diploma in software development and graduating from the <strong>Oracle Next Education (ONE) program with Alura Latam</strong>, I decided to focus my career on building digital products. Currently, I am further honing my technical skills and agile methodologies in the intensive developer training at <strong>Riwi</strong>. I am characterized by my adaptability, continuous curiosity, and a steadfast focus on code quality, ready to deliver real value to challenging projects.`,

            // Aficiones
            hobby_ciclismo: 'Cycling',
            hobby_videojuegos: 'Gaming',
            hobby_pintar: 'Painting',
            hobby_series: 'Watching series',
            hobby_viajar: 'Traveling',
            hobby_senderismo: 'Hiking',

            // Mascotas Card
            mascotas_badge: 'My Special Space',
            mascotas_titulo: 'My Pets',
            mascotas_desc: 'Luke, Kikin, Titi, and Bingo are an essential part of my daily life. I built an interactive gallery dedicated especially to them with responsive layout and dynamic carousel.',
            mascotas_btn: '<span>Explore Pet Gallery</span> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',

            // Formación (solo títulos)
            formacion_ONE: 'Web Development - Front end',
            formacion_UA: 'Mechanical Engineering',
            formacion_uninorte: 'Basic Programming & Software Development Diploma',

            // Bloques de Proyectos
            subtitulo_experiencia: '💼 Work & Freelance Experience',
            desc_experiencia: 'Technical evaluation of AI models and operational support in remote international environments.',
            subtitulo_software: '💻 Software Projects & Applications',
            desc_software: 'Web and mobile applications built with React, vanilla JavaScript, and Android.',

            // Proyectos
            proyecto_affinity: "Affinity Pet - Mobile App",
            proyecto_encriptador: "Text Encryptor",
            proyecto_pong: "Pong Game",
            proyecto_aluraflix: "AluraFlix Project",

            // Botones
            btn_ver: 'See more',
            btn_enviar: 'Send',

            // Contacto
            texto_contacto: `I'm available to discuss <strong>new opportunities</strong> and <strong>projects</strong>. <em>Send me a message!</em>`,

            // Placeholders
            ph_nombre: 'Name',
            ph_email: 'Email',
            ph_asunto: 'Subject',
            ph_mensaje: 'Message'
        },

        es: {
            nav_sobre: 'Sobre mí',
            nav_skills: 'Habilidades',
            nav_hobbies: 'Aficiones',
            nav_formacion: 'Formación',
            nav_proyectos: 'Proyectos',
            nav_contacto: 'Contacto',

            subtitulo: 'Web Dev & Mechanical Engineer',
            presentacion: 'Ingeniero Mecánico en transicion al mundo del desarrollo web, he participado en algunos programas como Oracle ONE en conjunto con Alura Latam y entrenamientos empresariales como Riwi.',

            // CTAs Hero
            cta_proyectos: '<span>Ver Proyectos</span> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
            cta_cv: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg> <span>Descargar CV</span>',
            cta_contacto: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg> <span>Contáctame</span>',

            titulo_sobre: 'Sobre mí',
            titulo_skills: 'Habilidades',
            titulo_hobbies: 'Aficiones',
            titulo_formacion: 'Formación académica',
            titulo_proyectos: 'Experiencia y Proyectos',
            titulo_contacto: 'Contacto',

            texto_sobre: `De los engranajes y el diseño mecánico al código y las interfaces interactivas. Como Ingeniero Mecánico, siempre me ha fascinado entender cómo funcionan las cosas; al descubrir el desarrollo web, encontré el punto de encuentro perfecto entre la lógica estructurada y la creatividad visual.<br><br>Tras completar un diplomado en desarrollo de software y certificarme en el programa <strong>Oracle Next Education (ONE) con Alura Latam</strong>, decidí enfocar mi carrera en la construcción de productos digitales. Actualmente continúo perfeccionando mis habilidades técnicas y metodologías en el entrenamiento para desarrolladores de <strong>Riwi</strong>. Me caracterizo por mi adaptabilidad, curiosidad constante y un firme enfoque en la calidad del código, listo para aportar valor en proyectos desafiantes.`,

            hobby_ciclismo: 'Ciclismo',
            hobby_videojuegos: 'Videojuegos',
            hobby_pintar: 'Pintar',
            hobby_series: 'Ver series',
            hobby_viajar: 'Viajar',
            hobby_senderismo: 'Senderismo',

            // Mascotas Card
            mascotas_badge: 'Mi Espacio Especial',
            mascotas_titulo: 'Mis Mascotas',
            mascotas_desc: 'Luke, Kikin, Titi y Bingo son una parte esencial de mi día a día. Creé una galería interactiva dedicada especialmente a ellos con diseño responsivo y carrusel dinámico.',
            mascotas_btn: '<span>Explorar Galería de Mascotas</span> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',

            formacion_ONE: 'Desarrollo Web - Front end',
            formacion_UA: 'Ingeniería Mecánica',
            formacion_uninorte: 'Diplomado en programación Básica & Software Development',

            // Bloques de Proyectos
            subtitulo_experiencia: '💼 Experiencia Laboral & Freelance',
            desc_experiencia: 'Evaluación técnica de modelos de IA y soporte en operaciones remotas internacionales.',
            subtitulo_software: '💻 Proyectos de Software & Aplicaciones',
            desc_software: 'Aplicaciones web y móviles construidas con React, JavaScript vanilla y Android.',

            proyecto_affinity: 'Affinity Pet - App móvil',
            proyecto_encriptador: 'Encriptador de texto',
            proyecto_pong: 'Juego de Pong',
            proyecto_aluraflix: 'Proyecto Aluraflix',

            btn_ver: 'Ver más',
            btn_enviar: 'Enviar',

            texto_contacto: `Estoy disponible para discutir <strong>nuevas oportunidades</strong> y <strong>proyectos</strong> <em>¡Enviame un mensaje!</em>`,

            ph_nombre: 'Nombre',
            ph_email: 'Correo Electrónico',
            ph_asunto: 'Asunto',
            ph_mensaje: 'Mensaje'
        }
    };

    function cambiarIdioma(idioma) {
        const elementos = document.querySelectorAll('[data-lang]');
        elementos.forEach(elemento => {
            const clave = elemento.getAttribute('data-lang');
            if (traducciones[idioma][clave]) {
                elemento.innerHTML = traducciones[idioma][clave];
            }
        });

        const placeholders = document.querySelectorAll('[data-lang-placeholder]');
        placeholders.forEach(elemento => {
            const clave = elemento.getAttribute('data-lang-placeholder');
            if (traducciones[idioma][clave]) {
                elemento.placeholder = traducciones[idioma][clave];
            }
        });
    }

    boton.addEventListener('click', () => {
        window.idiomaActual = window.idiomaActual === 'es' ? 'en' : 'es';

        boton.title = window.idiomaActual === 'es' 
            ? 'Translate to English' 
            : 'Traducir a Español';

        cambiarIdioma(window.idiomaActual);

        console.log(`🌐 Idioma cambiado a: ${window.idiomaActual.toUpperCase()}`);
    });

});