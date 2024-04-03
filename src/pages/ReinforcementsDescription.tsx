import { CustomLink } from "../components/CustomLink";
import { ReinforcementDescriptionCard } from "../components/ReinforcementDescriptionCard";

export function ReinforcementsDescription() {
  return (
    <main className="bg-yellow-600 h-[200vh] md:h-screen flex flex-col justify-center relative overflow-x-hidden">
      <div className="p-2 md:p-0 my-0 mx-auto h-full w-full md:h-3/4 md:w-3/4 flex flex-col justify-between items-center">
        <div>
          <h1 className="text-3xl text-center text-white font-bold">Reforço 
            <span className="text-lime-900"> positivo </span> 
            ou <span className="text-orange-600">negativo</span>?
          </h1>

          <h2 className="text-xl text-center mt-4 text-white font-bold">
            Conceitos presentes no Condicionamento Operante, proposto por B.F. Skinner.
          </h2>
        </div>

        <span 
          className="text-9xl font-bold text-lime-900 absolute right-0 top-36 lg:right-36 lg:top-32 rotate-[-30deg]" 
        >
          ?
        </span>

        <span 
          className="text-9xl font-bold text-orange-600 absolute left-0 top-36 lg:left-36 lg:top-36 rotate-180" 
        >
          ?
        </span>

        <ReinforcementDescriptionCard 
          color="bg-lime-900"
          title="Reforço Positivo" 
          text="O reforço positivo fortalece uma resposta quando se apresenta um estímulo. São eventos ou resultados favoráveis que são apresentados após o comportamento."
          children={
            <CustomLink 
              to="/reinforcements/positive-reinforcement" 
              color="bg-orange-600" 
              title="Quero saber mais!" 
            />
          } 
        />

        <ReinforcementDescriptionCard 
          color="bg-orange-600" 
          title="Reforço Negativo"
          text="Remove-se o estímulo quando aumenta a frequência de uma resposta. Envolvem a remoção de eventos ou resultados desfavoráveis após a exibição de um comportamento. Nessas situações, uma resposta é fortalecida pela remoção de algo considerado desagradável."
          children={
            <CustomLink 
              to="/reinforcements/negative-reinforcement" 
              color="bg-lime-900" 
              title="Quero saber mais!" 
            />
          } 
        />

        <div className="w-full flex flex-col md:flex-row gap-2 md:gap-0 items-center md:justify-between">
          <CustomLink to="/" color="bg-orange-600" title="Início!" />
          <CustomLink to="/questions" color="bg-lime-900" title="Vamos lá!" />
        </div>
      </div>
    </main>
  );
}