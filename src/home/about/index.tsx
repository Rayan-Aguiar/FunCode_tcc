import Kid2 from "../../assets/kid2.png";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center text-white mt-12">
      <h2 className="font-bold text-4xl text-limeyellow">Sobre nós</h2>
      <div className="w-20 h-1 bg-limeyellow rounded-full"></div>

      <div className="flex items-center gap-8 mt-8">
        <div className="md:block hidden">
          <img src={Kid2} alt="Segunda criança" />
        </div>
        <div className="flex flex-col md:w-2/4 p-4 md:p-0 ">
          <p className="text-justify font-light">
            Na Funcode, acreditamos que a programação é a linguagem do futuro, e
            queremos ajudar crianças de 8 a 12 anos a dominarem essa habilidade
            desde cedo. Somos uma plataforma de ensino de projeção projetada
            exclusivamente para crianças, combinando diversão e aprendizado para
            despertar o gênio da força nelas.
            <br />
            <br />
            Nosso objetivo é capacitar as crianças a se tornarem criadores de
            tecnologia, não apenas consumidores. Sabemos que a programação não é
            apenas um conjunto de comandos, mas uma maneira de pensar, resolver
            problemas e expressar a criatividade. Queremos inspirar nossos
            alunos a serem curiosos, perseverantes e inovadores.
            <br />
            <br />
            Com uma abordagem pedagógica centrada no aluno, nossas aulas são
            interativas, envolventes e repletas de projetos práticos. Utilizamos
            jogos, desafios e ferramentas de aprendizado visual para tornar a
            programação acessível e divertida. Cada criança é única, por isso
            personalizamos o aprendizado para atender às necessidades
            individuais e estimulamos o desenvolvimento de habilidades
            essenciais, como pensamento lógico, resolução de problemas e
            colaboração.
          </p>
        </div>
      </div>
    </div>
  );
}
