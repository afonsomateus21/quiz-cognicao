import { ArrowLeft, ArrowRight } from "lucide-react";
import { NavArrowButton } from "../components/NavArrowButton";

export function PositiveReinforcement() {
  return (
    <main className="bg-lime-900 h-screen flex flex-col justify-center overflow-hidden p-4 md:p-0">
      <div className=" p-2 md:p-0 my-0 mx-auto h-full w-full md:h-3/4 md:w-3/4 flex flex-col gap-10 justify-between items-center">
        <div className="w-full flex justify-between items-center">
          <NavArrowButton 
            to="/reinforcements"
            children={
              <ArrowLeft color="#394f21" size={60} />
            } 
            color="bg-yellow-600" 
          />
          <h1 className="text-3xl text-center md:text-5xl font-roboto font-bold text-white">Reforço Positivo</h1>
          <NavArrowButton 
            to="/reinforcements/negative-reinforcement"
            children={
              <ArrowRight color="#394f21" size={60} />
            } 
            color="bg-orange-600" 
          />
        </div>

        <section className="h-4/5 flex flex-col justify-center  bg-yellow-600 rounded-3xl p-3 md:p-8">
          <div className="p-2 md:p-4 overflow-scroll overflow-y-scroll h-[95%] md:h-4/5 overflow-x-hidden">
            <p className="text-justify text-md text-white font-roboto">
            O reforço positivo, conforme proposto por B.F. Skinner no contexto do condicionamento operante, 
            é uma técnica comportamental que visa aumentar a ocorrência de um comportamento desejado através da 
            apresentação de um estímulo positivo ou recompensa após a realização desse comportamento. Esse tipo de 
            reforço é uma das ferramentas fundamentais na modificação do comportamento e tem implicações 
            significativas na educação, na psicologia clínica e em várias outras áreas.
            Quando um comportamento é seguido por uma consequência agradável ou recompensadora, a probabilidade de 
            que esse comportamento seja repetido no futuro aumenta. Em outras palavras, o indivíduo associa a 
            realização do comportamento com uma experiência positiva, o que fortalece a conexão entre o estímulo e 
            a resposta. Por exemplo, se um aluno receber elogios e reconhecimento de seu professor por participar 
            ativamente em sala de aula, é mais provável que ele continue participando no futuro.
            O reforço positivo pode assumir diversas formas, desde elogios verbais e reconhecimento social até 
            recompensas tangíveis, como pontos de recompensa, adesivos, privilégios ou qualquer outro tipo de 
            recompensa que seja significativa para o indivíduo. O importante é que a recompensa seja percebida como 
            agradável e desejável pelo indivíduo, de modo a fortalecer a associação entre o comportamento e a 
            consequência positiva.
            É importante ressaltar que o reforço positivo deve ser aplicado de forma consistente e oportuna, 
            de modo que o indivíduo possa facilmente associar a recompensa ao comportamento desejado. 
            Além disso, o reforço positivo deve ser usado de maneira seletiva e estratégica, focando nos 
            comportamentos específicos que se deseja promover ou fortalecer.
            Ao utilizar o reforço positivo de maneira eficaz, é possível criar um ambiente de aprendizado e 
            desenvolvimento que seja encorajador, motivador e gratificante para todos os envolvidos. 
            Isso não apenas facilita o alcance de objetivos educacionais e comportamentais, mas também promove 
            um senso de autoestima, autoconfiança e bem-estar emocional nos indivíduos, contribuindo assim para 
            um crescimento pessoal e profissional sustentável ao longo do tempo.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}