import { useEffect, useRef, useState } from 'react';
import './ProjectContent.css';
import './ScrollImageAnimation.css'; // Importando o CSS para animação
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import ImageLogo1 from '../assets/image-removebg-preview.png';
import logo2 from '../assets/image-removebg-preview (1).png';


const sections = [
  {
    id: 'introducao',
    title: 'Introdução',
    content: (
      <>
        <p>A crescente demanda por dispositivos móveis e veículos elétricos destaca a importância do desenvolvimento de tecnologias de armazenamento de energia mais eficientes. Este artigo discute a problemática da baixa durabilidade e lentidão no carregamento das baterias atuais, abordando limitações tecnológicas e socioeconômicas. Em seguida, apresenta-se a nanotecnologia como uma solução promissora para o gerenciamento inteligente de energia, por meio da redistribuição de clusters ativos em baterias, com impacto direto na eficiência, durabilidade e tempo de recarga.</p>
        <p>O mundo contemporâneo é fortemente dependente de dispositivos que operam com energia elétrica portátil. Desde smartphones e relógios até veículos elétricos (VE), todos compartilham um mesmo obstáculo técnico: a limitação das baterias atuais. Embora existam avanços nas tecnologias de lítio, grafeno e estados sólidos, ainda não há uma solução que combine <b>alta densidade energética</b>, <b>baixo custo</b>, <b>sustentabilidade ambiental</b> e <b>carregamento ultrarrápido</b> de forma satisfatória.</p>
        <p>A carência de infraestrutura em regiões como América do Sul e África intensifica essa problemática, especialmente no setor automotivo, onde a ausência de estações de carregamento inviabiliza a popularização dos veículos elétricos.</p>
      </>
    ),
    image: image1,
  },
  {
    id: 'problematica',
    title: 'Problemática',
    content: (
      <>
        <p>As baterias de íon-lítio, predominantes no mercado, sofrem com:</p>
        <ul>
          <li><b>Degradação química ao longo do tempo</b>;</li>
          <li><b>Alta sensibilidade térmica</b>;</li>
          <li><b>Longos períodos de carregamento</b>;</li>
          <li><b>Custo elevado de produção e reciclagem</b>;</li>
          <li><b>Desigualdade de consumo interno</b>, resultando em subutilização de partes da bateria.</li>
        </ul>
        <p>Além disso, a dependência de metais raros e a complexidade de seu descarte sustentável criam barreiras econômicas e ambientais.</p>
        <p>Nos continentes em desenvolvimento, a situação é agravada pela ausência de infraestrutura elétrica para recarga, prejudicando iniciativas de mobilidade sustentável e criando um ciclo de atraso tecnológico.</p>
      </>
    ),
    image: image2,
  },
  {
    id: 'solucao',
    title: 'Solução',
    content: (
      <>
        <p>A <b>nanotecnologia</b> oferece uma abordagem revolucionária para reconfigurar a arquitetura e a utilização das baterias. Ao atuar na escala dos nanômetros (10⁻⁹ m), permite:</p>
        <ul>
          <li><b>Manipulação atômica de materiais condutores e semicondutores</b>;</li>
          <li><b>Construção de interfaces energéticas mais eficientes</b>;</li>
          <li><b>Criação de sistemas de controle energético inteligente</b>.</li>
        </ul>

        <h3>Sistema de Controle Baseado em Clusters</h3>
        <p>A proposta consiste na instalação de um sistema inteligente dentro da bateria capaz de monitorar e redirecionar o uso dos <b>clusters energéticos</b> — regiões da bateria com concentrações específicas de capacidade elétrica.</p>
        <p>Esse sistema identificaria as áreas:</p>
        <ul>
          <li><b>Mais desgastadas</b> e de menor eficiência;</li>
          <li><b>Menos desgastadas</b> e com maior capacidade ativa.</li>
        </ul>
        <p>Com essas informações, o sistema direcionaria o consumo elétrico para os clusters com maior integridade, <b>otimizando o uso e aumentando a durabilidade da bateria como um todo</b>.</p>

        <h3>Redução do Desperdício e Aumento da Performance</h3>
        <p>A abordagem permite reduzir o estresse elétrico nas regiões mais desgastadas, evitando o colapso prematuro da bateria. Em termos práticos, isso significa:</p>
        <ul>
          <li><b>Aumento da vida útil operacional</b>;</li>
          <li><b>Melhor distribuição de carga elétrica</b>;</li>
          <li><b>Possível redução do tempo de carregamento</b>, ao focar energia em áreas de melhor condutividade.</li>
        </ul>
      </>
    ),
    image: image3,
  },
  {
    id: 'viabilidade',
    title: 'Viabilidade',
    content: (
      <>
        <p>As aplicações dessa tecnologia são amplas:</p>
        <ul>
          <li><b>Veículos elétricos</b>: maior autonomia e menor dependência de estações de carregamento.</li>
          <li><b>Dispositivos móveis</b>: maior tempo de uso diário e menor deterioração ao longo do tempo.</li>
          <li><b>Armazenamento estacionário de energia</b>: baterias inteligentes para residências ou plantas solares.</li>
        </ul>
        <p>Do ponto de vista de viabilidade, a nanotecnologia já vem sendo explorada na construção de materiais catódicos e anódicos com propriedades superiores, como o uso de <b>nanotubos de carbono</b>, <b>nanofios de silício</b> e <b>materiais grafênicos</b>.</p>
      </>
    ),
    image: image4,
  },
  {
    id: 'conclusao',
    title: 'Considerações Finais',
    content: (
      <>
        <p>A evolução das baterias é essencial para o progresso tecnológico sustentável. A proposta de implementação de <b>nanotecnologia com gestão inteligente de clusters energéticos</b> representa um salto em direção à eficiência energética, adaptabilidade e prolongamento da vida útil das baterias.</p>
        <p>Embora ainda haja desafios técnicos e econômicos para a implementação em escala, os benefícios potenciais — especialmente para regiões com infraestrutura limitada — são significativos. A inovação nesse campo não apenas impulsionaria o avanço tecnológico, mas também contribuiria para uma transição energética mais justa e acessível globalmente.</p>
      </>
    ),
    image: image5,
  },
  {
    id: 'referencias',
    title: 'Referências',
    content: (
      <>
        <ul>
          <li>Tarascon, J.-M., & Armand, M. (2001). Issues and challenges facing rechargeable lithium batteries. <i>Nature</i>.</li>
          <li>Zhang, Q., et al. (2018). Nanostructured materials for advanced energy storage. <i>Advanced Materials</i>.</li>
          <li>Goodenough, J. B., & Kim, Y. (2010). Challenges for rechargeable batteries. <i>Chemistry of Materials</i>.</li>
        </ul>
      </>
    ),
    image: image6,
  },
];


export default function ScrollImageAnimation() {
    const refs = useRef([]);
    const [visibleSections, setVisibleSections] = useState([]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          setVisibleSections((prevVisible) => {
            const updated = [...prevVisible];
            entries.forEach((entry) => {
              const index = refs.current.indexOf(entry.target);
              if (entry.isIntersecting && !updated.includes(index)) {
                updated.push(index);
              }
            });
            return updated;
          });
        },
        { threshold: 0.3 }
      );
  
      // Observa os elementos após garantir que eles existem
      refs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
  
      return () => {
        observer.disconnect(); // Desconecta tudo corretamente na desmontagem
      };
    }, []);
  
    const handleScrollTop = () => {
      const introSection = document.getElementById('introducao');
      if (introSection) {
        introSection.scrollIntoView({ behavior: 'smooth' });
      }
    
      // Reseta apenas as seções depois da introdução
      setTimeout(() => {
        setVisibleSections((prev) => prev.filter((index) => index <= 0));
      }, 600);
    };

    useEffect(() => {
      const handleScroll = () => {
        const nav = document.querySelector('.nav-header');
        if (window.scrollY > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      };
    
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

 return (
    <>
      <div className="nav-header">
        <img src={ImageLogo1} alt="Logo1" />
        <img src={logo2} alt="Logo2" />
        <div className="nav-links">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>{section.title}</a>
          ))}
        </div>
      </div>

        <header className="main-header">
        <h1>O Avanço da Nanotecnologia no Aumento da Eficiência Energética de Baterias</h1>
        </header>

        <section>
            {sections.map((section, idx) => (
            <section
                key={section.id}
                id={section.id}
                ref={(el) => (refs.current[idx] = el)}
                className={`content-section ${visibleSections.includes(idx) ? 'visible' : ''} ${idx % 2 === 0 ? 'left' : 'right'}`}
            >
                <div className="text-content">
                <h2>{section.title}</h2>
                {section.content}
                </div>
                <img src={section.image} alt={section.title} className="section-image" />
            </section>
            ))}
        </section>

        <footer>
            <h2></h2>
            <ul>
            </ul>
            <p><b>Desenvolvido para fins acadêmicos e de pesquisa. © 2025 Vortex Solutions</b></p>
        </footer>

        <button className="scroll-top-button" onClick={handleScrollTop}>
            Voltar ao Topo
        </button>
        </>
 );
}
 
