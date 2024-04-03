import { ArrowLeft } from "lucide-react";
import { NavArrowButton } from "../components/NavArrowButton";
import { CustomLink } from "../components/CustomLink";

export function NegativeReinforcement() {
  return (
    <main className="bg-orange-600 h-screen flex flex-col justify-center overflow-hidden p-4 md:p-0">
      <div className=" p-2 md:p-0 my-0 mx-auto h-full w-full md:h-3/4 md:w-3/4 flex flex-col gap-10 justify-between items-center">
        <div className="w-full flex justify-between items-center">
          <NavArrowButton 
            to="/reinforcements/positive-reinforcement"
            children={
              <ArrowLeft color="#394f21" size={60} />
            } 
            color="bg-yellow-600" 
          />
          
          <h1 className="text-3xl text-center md:text-5xl font-roboto font-bold text-white">Reforço Negativo</h1>
      
          <CustomLink 
            to="/questions" 
            title="Vamos lá!"
            color="bg-lime-900"
          />
        </div>

        <section className="h-4/5 flex flex-col justify-center  bg-yellow-600 rounded-3xl p-3 md:p-8">
          <div className="p-2 md:p-4 overflow-scroll overflow-y-scroll h-[95%] md:h-4/5 overflow-x-hidden">
            <p className="text-justify text-md text-white font-roboto">
              O reforço negativo, uma das principais concepções do condicionamento operante proposto por B.F. 
              Skinner, representa uma forma de modificação de comportamento na qual a frequência de um comportamento 
              desejado é aumentada pela remoção ou redução de um estímulo aversivo ou desagradável após a realização 
              desse comportamento. Em outras palavras, o reforço negativo envolve a eliminação de uma consequência 
              indesejada como resultado da realização do comportamento desejado, o que fortalece a probabilidade de 
              que o comportamento seja repetido no futuro.
              Um exemplo clássico de reforço negativo é quando um condutor de um veículo para de tocar uma buzina 
              irritante assim que o passageiro coloca o cinto de segurança. Neste caso, a remoção do som desagradável 
              da buzina serve como uma consequência reforçadora para a ação de colocar o cinto de segurança, 
              tornando mais provável que o passageiro repita esse comportamento no futuro para evitar a buzina.
              É importante destacar que o reforço negativo não envolve punição ou consequências adversas pelo 
              comportamento indesejado, mas sim a remoção de um estímulo aversivo como consequência do comportamento 
              desejado. Isso significa que o objetivo do reforço negativo não é apenas suprimir um comportamento 
              indesejado, mas sim incentivar a ocorrência de um comportamento alternativo que leve à eliminação do 
              estímulo aversivo.
              O reforço negativo pode assumir diversas formas, desde a remoção de dor física ou desconforto até a 
              eliminação de pressões sociais ou responsabilidades. Por exemplo, um estudante pode evitar uma punição 
              (estímulo aversivo) como resultado da entrega de uma tarefa no prazo (comportamento desejado), o que 
              reforça a probabilidade de que ele continue entregando tarefas no prazo no futuro.
              Ao utilizar o reforço negativo de forma adequada e consistente, é possível promover comportamentos 
              desejados, fortalecer habilidades e estabelecer padrões de conduta positivos em uma variedade de 
              contextos, incluindo educação, treinamento de animais, gestão de equipes e terapia comportamental. 
              No entanto, é essencial garantir que o reforço negativo seja aplicado de maneira ética e responsável, 
              respeitando sempre o bem-estar e a dignidade dos indivíduos envolvidos.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}