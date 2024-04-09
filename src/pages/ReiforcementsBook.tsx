import { FlippingPages } from 'flipping-pages';
import 'flipping-pages/dist/style.css';
import { useState } from 'react';
import { BookCover } from '../components/BookCover';
import PositiveReinforcementCartoon from '../assets/positive-reinforcement-cartoon.jpg';
import { NavArrowButton } from '../components/NavArrowButton';
import { ArrowLeft, FileQuestion } from 'lucide-react';

export function ReinforcementsBook() {
  const [selected, setSelected] = useState(0);

  const back = () => {
    setSelected(selected => Math.max(selected - 1, 0));
  };

  const next = () => {
    setSelected(selected => Math.min(selected + 1, 5));
  };

  return (
    <main className="bg-orange-600 h-[160vh] md:h-screen flex flex-col justify-center relative">
        <div className='absolute left-2 top-2 md:left-1 md:top-1 lg:left-5 lg:top-5'> 
          <NavArrowButton 
            to="/reinforcements"
            children={
              <ArrowLeft color="#394f21" size={60} />
            } 
            color="bg-yellow-600" 
          />
        </div> 

        <div className='absolute right-2 top-2 md:right-1 md:top-1 lg:right-5 lg:top-5'>
          <NavArrowButton 
            to="/questions"
            children={
              <FileQuestion color="#EA580C" size={60} />
            } 
            color="bg-lime-900" 
          />
        </div>

      <div className="mx-auto my-0 h-[90%] w-[90%] md:w-[600px] bg-lime-900">
        <FlippingPages
          direction="right-to-left"
          onSwipeEnd={setSelected}
          selected={selected}
        >
          <BookCover />
          <div className="bg-[#F5F5F5] h-full">
            <h1 className="text-2xl font-bold font-roboto text-center">Reforço Positivo</h1>
            <p className="text-sm p-2 text-justify md:p-6">
              O <span className='font-bold text-orange-600'>reforço positivo</span>, conforme proposto por B.F. Skinner no contexto do condicionamento operante, 
              é uma técnica comportamental que visa aumentar a ocorrência de um comportamento desejado através da 
              apresentação de um estímulo positivo ou recompensa após a realização desse comportamento. Esse tipo de 
              reforço é uma das ferramentas fundamentais na modificação do comportamento e tem implicações 
              significativas na educação, na psicologia clínica e em várias outras áreas.<br/><br/>
              Quando um comportamento é seguido por uma consequência agradável ou recompensadora, a probabilidade de 
              que esse comportamento seja repetido no futuro aumenta. Em outras palavras, o indivíduo associa a 
              realização do comportamento com uma experiência positiva, o que fortalece a conexão entre o estímulo e 
              a resposta. Por exemplo, se um aluno receber elogios e reconhecimento de seu professor por participar 
              ativamente em sala de aula, é mais provável que ele continue participando no futuro.<br/><br/>
              O <span className='font-bold text-orange-600'>reforço positivo</span> pode assumir diversas formas, desde elogios verbais e reconhecimento social até 
              recompensas tangíveis, como pontos de recompensa, adesivos, privilégios ou qualquer outro tipo de 
              recompensa que seja significativa para o indivíduo. O importante é que a recompensa seja percebida como 
              agradável e desejável pelo indivíduo, de modo a fortalecer a associação entre o comportamento e a 
              consequência positiva.
            </p>

            <img className='w-full h-80' src={PositiveReinforcementCartoon} alt='Tirinha sobre reforço positivo' />
          </div>

          <div className="bg-[#F5F5F5] h-full">
            <p className="text-justify p-6">
              É importante ressaltar que o <span className='font-bold text-orange-600'>reforço positivo</span> deve ser aplicado de forma consistente e oportuna, 
              de modo que o indivíduo possa facilmente associar a recompensa ao comportamento desejado. 
              Além disso, o reforço positivo deve ser usado de maneira seletiva e estratégica, focando nos 
              comportamentos específicos que se deseja promover ou fortalecer.
              Ao utilizar o <span className='font-bold text-orange-600'>reforço positivo</span> de maneira eficaz, é possível criar um ambiente de aprendizado e 
              desenvolvimento que seja encorajador, motivador e gratificante para todos os envolvidos. 
              Isso não apenas facilita o alcance de objetivos educacionais e comportamentais, mas também promove 
              um senso de autoestima, autoconfiança e bem-estar emocional nos indivíduos, contribuindo assim para 
              um crescimento pessoal e profissional sustentável ao longo do tempo.
            </p>
          </div>

          <div className="bg-[#F5F5F5] h-full">
            <h1 className="text-2xl font-bold font-roboto text-center">Reforço Negativo</h1>
            <p className="text-justify p-6">
              O <span className='font-bold text-yellow-600'>reforço negativo</span>, uma das principais concepções do condicionamento operante proposto por B.F. 
              Skinner, representa uma forma de modificação de comportamento na qual a frequência de um comportamento 
              desejado é aumentada pela remoção ou redução de um estímulo aversivo ou desagradável após a realização 
              desse comportamento. Em outras palavras, o <span className='font-bold text-yellow-600'>reforço negativo</span> envolve a eliminação de uma consequência 
              indesejada como resultado da realização do comportamento desejado, o que fortalece a probabilidade de 
              que o comportamento seja repetido no futuro.<br/><br/>
              Um exemplo clássico de <span className='font-bold text-yellow-600'>reforço negativo</span> é quando um condutor de um veículo para de tocar uma buzina 
              irritante assim que o passageiro coloca o cinto de segurança. Neste caso, a remoção do som desagradável 
              da buzina serve como uma consequência reforçadora para a ação de colocar o cinto de segurança, 
              tornando mais provável que o passageiro repita esse comportamento no futuro para evitar a buzina.<br/><br/>
              É importante destacar que o <span className='font-bold text-yellow-600'>reforço negativo</span> não envolve punição ou consequências adversas pelo 
              comportamento indesejado, mas sim a remoção de um estímulo aversivo como consequência do comportamento 
              desejado. Isso significa que o objetivo do <span className='font-bold text-yellow-600'>reforço negativo</span> não é apenas suprimir um comportamento 
              indesejado, mas sim incentivar a ocorrência de um comportamento alternativo que leve à eliminação do 
              estímulo aversivo.
            </p>
          </div>

          <div className="bg-[#F5F5F5] h-full">
            <p className="text-justify p-6">
              É importante destacar que o <span className='font-bold text-yellow-600'>reforço negativo</span> não envolve punição ou consequências adversas pelo 
              comportamento indesejado, mas sim a remoção de um estímulo aversivo como consequência do comportamento 
              desejado. Isso significa que o objetivo do <span className='font-bold text-yellow-600'>reforço negativo</span> não é apenas suprimir um comportamento 
              indesejado, mas sim incentivar a ocorrência de um comportamento alternativo que leve à eliminação do 
              estímulo aversivo.
              O <span className='font-bold text-yellow-600'>reforço negativo</span> pode assumir diversas formas, desde a remoção de dor física ou desconforto até a 
              eliminação de pressões sociais ou responsabilidades. Por exemplo, um estudante pode evitar uma punição 
              (estímulo aversivo) como resultado da entrega de uma tarefa no prazo (comportamento desejado), o que 
              reforça a probabilidade de que ele continue entregando tarefas no prazo no futuro.
              Ao utilizar o <span className='font-bold text-yellow-600'>reforço negativo</span> de forma adequada e consistente, é possível promover comportamentos 
              desejados, fortalecer habilidades e estabelecer padrões de conduta positivos em uma variedade de 
              contextos, incluindo educação, treinamento de animais, gestão de equipes e terapia comportamental. 
              No entanto, é essencial garantir que o <span className='font-bold text-yellow-600'>reforço negativo</span> seja aplicado de maneira ética e responsável, 
              respeitando sempre o bem-estar e a dignidade dos indivíduos envolvidos.
            </p>
          </div>

          <div className="h-full w-full select-none touch-none bg-lime-900" />
        </FlippingPages>

        <div className="flex justify-between">
          <button className="text-white" onClick={back}>Anterior</button>
          <button className="text-white" onClick={next}>Próximo</button>
        </div>
      </div>
    </main>
  );
}