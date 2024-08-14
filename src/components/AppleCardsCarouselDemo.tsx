"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} layout={false} link={card.link} />
      ));
      

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Últimos lanzamientos
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
    return (
      <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Sumérgete en el futuro del análisis deportivo con nuestro innovador sistema de predicción de resultados en partidos de fútbol.
         Utilizando un enfoque basado en la analítica de datos, este proyecto recopila y procesa estadísticas históricas y en tiempo real,
         combinando modelos de machine learning avanzados para ofrecer predicciones precisas y actualizadas. Ideal tanto para analistas deportivos como para fanáticos del fútbol,
         este proyecto ofrece una herramienta poderosa para anticipar resultados, identificar patrones de juego y tomar decisiones informadas. 
         Descubre cómo la inteligencia artificial está transformando el mundo del deporte y mantente un paso adelante en cada partido.{" "}
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Explora más en{" "}
          <a
            href="https://intellibetfront.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-white-600 dark:text-white-400"
          >
            intellibet
          </a>
          .
        </span>
        </p>
        <Image
          src="/sspryfut.png"
          alt="Bienvenida"
          height="1000"
          width="1000"
          className="md:w-3/4 md:h-3/4 h-full w-full mx-auto object-contain mt-8"
        />
        <Image
          src="/ss2pryfut.png"
          alt="Próximo encuentro"
          height="1000"
          width="1000"
          className="md:w-3/4 md:h-3/4 h-full w-full mx-auto object-contain mt-8"
        />
        <Image
          src="/ss3pryfut.png"
          alt="Partidos agendados"
          height="1000"
          width="1000"
          className="md:w-3/4 md:h-3/4 h-full w-full mx-auto object-contain mt-8"
        />
      </div>
    );
  };
  
 const DummyContentRev = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        Accede al conocimiento científico como nunca antes. Nuestro repositorio
        digital es un espacio dedicado a la recopilación y difusión de revistas
        y documentos científicos de alto impacto. Diseñado para académicos,
        investigadores y entusiastas del conocimiento, este repositorio ofrece
        una plataforma intuitiva y organizada donde puedes encontrar
        investigaciones relevantes en diversas disciplinas. Con herramientas
        avanzadas de búsqueda y categorización, exploramos las fronteras del
        conocimiento, facilitando el acceso a trabajos científicos de calidad.
        Mantente informado y conectado con los últimos avances en el mundo de
        la ciencia.{" "}
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Explora más{" "}
          <a
            href="https://revistad-1.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-white-600 dark:text-white-400"
          >
            aquí
          </a>
          .
        </span>
      </p>
      <Image
          src="/sspryrev.png"
          alt="Bienvenida page"
          height="1000"
          width="1000"
          className="md:w-3/4 md:h-3/4 h-full w-full mx-auto object-contain mt-8"
        />
    </div>
  );
};


  const DummyContentAir = () => {
    return (
      <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Conoce el futuro de la salud ambiental con nuestro sistema de monitoreo y predicción de la calidad del aire.
          Este proyecto está diseñado para analizar los niveles de contaminación en tiempo real,
          ofreciendo predicciones basadas en datos históricos y modelos meteorológicos avanzados. Es una herramienta esencial para gobiernos,
          organizaciones ambientales y ciudadanos conscientes de su entorno. No solo proporciona datos precisos,
          sino que también alerta sobre posibles riesgos para la salud, permitiendo tomar decisiones informadas para mejorar la calidad de vida.
          Mantente al tanto del aire que respiras y contribuye a un ambiente más limpio y saludable.{" "}
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Explora más{" "}
          <a
            href="https://air-proyect-1.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-white-600 dark:text-white-400"
          >
            aquí
          </a>
          .
        </span>
        </p>
        <Image
          src="/sspryair.png"
          alt="Bienvenida page"
          height="1000"
          width="1000"
          className="md:w-3/4 md:h-3/4 h-full w-full mx-auto object-contain mt-8"
        />
      </div>
    );
  };

  const DummyContentCht = () => {
    return (
      <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Haz de las escuelas un lugar más seguro con nuestro chatbot inteligente,
          diseñado para la prevención del bullying. Este proyecto combina tecnología avanzada de procesamiento de lenguaje natural (NLP) con un enfoque en la seguridad y el bienestar de los estudiantes.
          Permite que alumnos, padres y personal educativo reporten incidentes de manera anónima y segura,
          facilitando la intervención temprana y el apoyo necesario. Nuestro chatbot guía a los usuarios a través del proceso de denuncia,
          proporcionando respuestas automatizadas y dirigiendo los casos a las autoridades o consejeros escolares pertinentes.
          Únete a la lucha contra el bullying y contribuye a crear un entorno escolar más inclusivo y protegido.{" "}
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Explora más{" "}
          <a
            href="https://prychatfriend-1-a9zh.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-white-600 dark:text-white-400"
          >
            aquí
          </a>
          .
        </span>
        </p>
        <Image
          src="/ss1prychat.png"
          alt="Bienvenida page"
          height="1000"
          width="1000"
          className="md:w-3/4 md:h-3/4 h-full w-full mx-auto object-contain mt-8"
        />
        <Image
          src="/ss2prychat.png"
          alt="Chat Bot page"
          height="1000"
          width="1000"
          className="md:w-3/4 md:h-3/4 h-full w-full mx-auto object-contain mt-8"
        />
      </div>
    );
  };
  
const data = [
    {
      category: "Deportes y Analítica de Datose",
      title: "Predicción Avanzada de Resultados en Partidos de Fútbol",
      src: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
      link:"https://intellibetfront.onrender.com/", 
    },
    {
      category: "Ciencia y Publicaciones Académicas",
      title: "Repositorio Digital de Revistas y Documentos Científicos.",
      src: "https://plus.unsplash.com/premium_photo-1681487433878-d5c4bedd7a57?q=80&w=2661&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContentRev />,
      link: "https://revistad-1.onrender.com/", // Añade el enlace aquí
    },
    {
      category: "Tecnología y Salud Ambiental",
      title: "Monitoreo y Predicción Inteligente de la Calidad del Aire",
      src: "https://images.unsplash.com/photo-1701146125128-b0b03267e58a?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContentAir />,
      link: "https://air-proyect-1.onrender.com/",
    },
    {
      category: "Educación y Seguridad",
      title: "Chatbot Inteligente para la Prevención del Bullying Escolar",
      src: "https://plus.unsplash.com/premium_photo-1682024745224-2edf92747598?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContentCht />,
      link: "https://prychatfriend-1-a9zh.onrender.com", 
    },
  ];
  