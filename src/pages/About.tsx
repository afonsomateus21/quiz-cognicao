import SeriousBrain from "../assets/serious-brain.png";
import { CustomLink } from "../components/CustomLink";

export function About() {
  return (
    <main className="bg-yellow-600 min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="p-2 md:p-6 lg:p-0 my-0 ml-auto h-full w-full md:h-[90%] lg:w-[90%] flex flex-col justify-center gap-6 overflow-y-auto">
        <div className="w-full flex">
          <h1 className="text-white font-bold text-2xl md:text-6xl text-left">
            Olá, <span className="text-lime-900">cognauta</span>!
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-3/4 md:pr-6 h-[500px] overflow-x-hidden">
            <p className="text-white text-sm md:text-xl text-justify font-bold">
              Sou o <span className="text-lime-900 font-bold">Cog</span><span className="text-orange-600 font-bold">Brain</span>. Você está pronto para mergulhar no fascinante mundo da psicologia comportamental? Se sim, você veio ao 
              lugar certo! Nosso quiz sobre o Condicionamento Operante, proposto por B.F. Skinner, irá desafiar seus 
              conhecimentos e aprofundar sua compreensão sobre os conceitos de reforço positivo e negativo. 
            </p>

            <p className="text-white text-sm md:text-xl text-justify font-bold mt-2">
              Neste 
              jogo educativo, você terá a oportunidade de testar sua capacidade de reconhecer e aplicar esses 
              importantes conceitos no comportamento humano. Esteja preparado para desvendar situações hipotéticas, 
              identificar exemplos do uso de reforço positivo e negativo, e consolidar seu entendimento sobre como 
              esses princípios influenciam o comportamento de indivíduos em diversas situações.
            </p>

            <p className="text-white text-sm md:text-xl text-justify font-bold mt-2">
              Se você é um estudante ávido por conhecimento, um profissional da área de psicologia, ou simplesmente alguém 
              interessado em entender melhor como nós, seres humanos, aprendemos e nos comportamos, este quiz é para você!
              Então, prepare-se para desafiar sua mente e expandir seus horizontes. Vamos começar essa jornada de aprendizado e diversão juntos!
            </p>
          </div>

          <div className="w-full md:w-1/4 flex justify-center mt-6 md:mt-0">
            <div className="bg-lime-900 rounded-3xl h-full w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] ml-auto flex justify-center items-center">
              <img className="h-72 w-56 lg:h-96 md:w-72" src={SeriousBrain} alt="Ilustração de um cérebro com rosto sério" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-3 md:right-16 top-12 md:top-24 lg:top-36 hidden md:block">
        <CustomLink 
          to="/"
          title="Voltar"
          color="bg-orange-600"
        />
      </div>

      <div className="h-[600px] hidden md:block lg:w-12 bg-orange-600 rounded-r-[30px] absolute" />

      <div className="size-[300px] md:size-[400px] bg-orange-600 rounded-full absolute right-[-170px] bottom-[-80px]" />
    </main>
  );
}