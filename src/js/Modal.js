document.addEventListener("DOMContentLoaded", () => {

    // Proyectos en ambos idiomas con tags y enlaces a repositorios/demos
    const misProyectos = {
        outlier: {
            es: {
                titulo: "AI Content Evaluator - Outlier",
                descripcion: "Este fue un empleo como freelancer en la plataforma de Outlier en el cual participé en el entrenamiento y evaluación de modelos de inteligencia artificial o LLMs. En este pude poner a prueba mis conocimientos en desarrollo web, pero en general se trató de evaluar las respuestas de los modelos a partir de rúbricas diseñadas para establecer la respuesta correcta al prompt proporcionado.",
                tipo: "💼 Experiencia Profesional / Freelance"
            },
            en: {
                titulo: "AI Content Evaluator - Outlier",
                descripcion: "This was a freelance role on the Outlier platform where I participated in the training and evaluation of artificial intelligence models (LLMs). I put my web development knowledge to the test, evaluating model responses based on strict rubrics designed to determine accuracy and relevance.",
                tipo: "💼 Professional Experience / Freelance"
            },
            imagen: "public/imgs/Outlier_logo.png",
            clase: "",
            tags: ["AI / LLMs", "Prompt Evaluation", "Quality Assurance", "Web Testing"],
            demoUrl: null,
            repoUrl: null
        },
        upwork: {
            es: {
                titulo: "Operator Support Agent - Upwork",
                descripcion: "Trabajé durante 2 años como operator support agent para una empresa estadounidense a través de la plataforma Upwork. Fue en esta época donde comencé a sentirme atraído por el mundo de la programación e inicié mis primeros estudios en desarrollo de software.",
                tipo: "💼 Experiencia Profesional / Freelance"
            },
            en: {
                titulo: "Operator Support Agent - Upwork",
                descripcion: "I worked for 2 years as an operator support agent for an American company through Upwork. It was during this period that I discovered my passion for programming and began my formal transition into software development.",
                tipo: "💼 Professional Experience / Freelance"
            },
            imagen: "public/imgs/Upwork_logo.png",
            clase: "",
            tags: ["Operations Support", "Client Communication", "Problem Solving", "Remote Work"],
            demoUrl: null,
            repoUrl: null
        },
        affinity: {
            es: {
                titulo: "App Red Social - Mascotas (Affinity Pet)",
                descripcion: "Es una app de red social para dueños de mascotas desarrollada durante mi formación de programación con MinTIC. Fue mi primer proyecto creado en Android Studio durante mi aprendizaje en desarrollo móvil; representó un reto técnico enriquecedor para aprender arquitectura de interfaces móviles y gestión de vistas.",
                tipo: "📱 Aplicación Móvil"
            },
            en: {
                titulo: "Pet Social Network App (Affinity Pet)",
                descripcion: "A social network mobile application for pet owners created during my programming training with MinTIC. This was my first project built in Android Studio, providing valuable hands-on experience in mobile UI architecture and view management.",
                tipo: "📱 Mobile Application"
            },
            imagen: "public/imgs/Imagine_Dragons_Landing.png",
            clase: "img_large",
            tags: ["Android Studio", "Java", "Mobile UI", "XML Layouts"],
            demoUrl: null,
            repoUrl: "https://github.com/smendozab097/Landing_Page_Imagine_Dragons"
        },
        encriptador: {
            es: {
                titulo: "Encriptador de Texto",
                descripcion: "Este fue mi primer proyecto desarrollado en el programa Alura ONE, en el cual se debía encriptar y desencriptar texto intercambiando vocales por secuencias de caracteres específicas. Desarrollado con JavaScript vanilla, HTML5 y CSS3 responsivo.",
                tipo: "🌐 Aplicación Web"
            },
            en: {
                titulo: "Text Encryptor",
                descripcion: "My first project developed within the Alura ONE program, where the challenge was to encrypt and decrypt text by swapping vowels with custom character sequences. Built with vanilla JavaScript, semantic HTML5, and responsive CSS3.",
                tipo: "🌐 Web Application"
            },
            imagen: "public/imgs/encriptador.png",
            clase: "img_large",
            tags: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
            demoUrl: "https://smendozab097.github.io/Proyecto-encriptador-de-texto/",
            repoUrl: "https://github.com/smendozab097/Proyecto-encriptador-de-texto"
        },
        juego: {
            es: {
                titulo: "Juego de Pong",
                descripcion: "Proyecto interactivo desarrollado con Alura explorando el uso de Inteligencia Artificial (ChatGPT / Copilot) como asistente de programación. El objetivo fue partir de un prototipo asistido por IA para luego implementar refactorizaciones, física de colisiones y mejoras en la lógica del juego.",
                tipo: "🎮 Juego Web Interactivo"
            },
            en: {
                titulo: "Pong Game",
                descripcion: "Interactive game project developed with Alura exploring the use of AI (ChatGPT / Copilot) as a coding partner. The goal was to take an AI-generated base and refine collision physics, game loops, and responsive controls.",
                tipo: "🎮 Interactive Web Game"
            },
            imagen: "public/imgs/pong_game.png",
            clase: "img_large",
            tags: ["JavaScript", "HTML5 Canvas", "Game Loop", "AI Assisted"],
            demoUrl: null,
            repoUrl: "https://github.com/smendozab097"
        },
        alura: {
            es: {
                titulo: "Proyecto AluraFlix",
                descripcion: "Proyecto final de graduación de Alura Latam construido con React. Es una Single Page Application (SPA) inspirada en Netflix que permite visualizar, categorizar y gestionar trailers y videos formativos de desarrollo web.",
                tipo: "⚛️ Single Page Application (SPA)"
            },
            en: {
                titulo: "AluraFlix Project",
                descripcion: "Final capstone project at Alura Latam built with React. A Netflix-inspired Single Page Application (SPA) that organizes, filters, and manages educational web development videos and trailers.",
                tipo: "⚛️ Single Page Application (SPA)"
            },
            imagen: "public/imgs/Aluraflix.webp",
            clase: "img_large",
            tags: ["React", "JavaScript", "Styled Components", "SPA", "Vite"],
            demoUrl: null,
            repoUrl: "https://github.com/smendozab097/Aluraflix"
        }
    };

    const modal = document.getElementById("modal__proyectos");
    const modalBody = document.getElementById("modal__info");
    const closeBtn = document.querySelector(".close_button");

    // Función para cerrar modal
    function cerrarModal() {
        modal.style.display = "none";
        document.body.style.overflow = ""; // Restaura el scroll de fondo
    }

    document.querySelectorAll(".btn_abrir_modal").forEach(boton => {
        boton.addEventListener("click", () => {
            const idProyecto = boton.getAttribute("data-proyecto");
            const proyecto = misProyectos[idProyecto];
            if (!proyecto) return;

            // Lee el idioma actual (viene de cambioIdioma.js)
            const idioma = window.idiomaActual || 'es';
            const info = proyecto[idioma];

            // Renderizar etiquetas de tecnología
            const tagsHtml = (proyecto.tags && proyecto.tags.length > 0)
                ? `<div class="modal__tags">
                    ${proyecto.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                   </div>`
                : '';

            // Renderizar botones de acción
            let accionesHtml = '<div class="modal__acciones">';
            
            if (proyecto.demoUrl) {
                accionesHtml += `
                    <a href="${proyecto.demoUrl}" target="_blank" rel="noopener noreferrer" class="modal__btn modal__btn--demo">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                        <span>${idioma === 'es' ? 'Ver Demo en Vivo' : 'Live Demo'}</span>
                    </a>
                `;
            }

            if (proyecto.repoUrl) {
                accionesHtml += `
                    <a href="${proyecto.repoUrl}" target="_blank" rel="noopener noreferrer" class="modal__btn modal__btn--repo">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                        <span>${idioma === 'es' ? 'Ver en GitHub' : 'View on GitHub'}</span>
                    </a>
                `;
            }

            if (!proyecto.demoUrl && !proyecto.repoUrl) {
                accionesHtml += `
                    <span class="modal__nota">
                        🔒 ${idioma === 'es' ? 'Proyecto profesional interno / protegido por confidencialidad' : 'Professional project under NDA / internal platform'}
                    </span>
                `;
            }

            accionesHtml += '</div>';

            modalBody.innerHTML = `
                <img src="${proyecto.imagen}" class="modal_img ${proyecto.clase}" alt="${info.titulo}">
                <span class="modal__tipo">${info.tipo}</span>
                <h2 class="titulos modal__titulo">${info.titulo}</h2>
                ${tagsHtml}
                <p class="textos modal__desc">${info.descripcion}</p>
                ${accionesHtml}
            `;

            modal.style.display = "flex";
            document.body.style.overflow = "hidden"; // Previene scroll de fondo cuando el modal está abierto
        });
    });

    closeBtn.onclick = () => cerrarModal();
    window.onclick = (event) => {
        if (event.target == modal) cerrarModal();
    };

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') cerrarModal();
    });

});