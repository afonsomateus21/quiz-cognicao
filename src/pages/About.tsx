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
          <div className="w-full md:w-3/4 md:pr-6 h-[500px] overflow-scroll overflow-x-hidden">
            <p className="text-white text-sm md:text-xl text-justify font-bold">
              Contrary to popular belief, Lorem Ipsum is not simply random text. 
              It has roots in a piece of classical Latin literature from 45 BC, 
              making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
              looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
              and going through the cites of the word in classical literature, discovered the undoubtable source. 
              Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
              (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, 
              very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
              comes from a line in section 1.10.32.
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
              Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their 
              exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </p>

            <p className="text-white text-sm md:text-xl text-justify font-bold">
              Contrary to popular belief, Lorem Ipsum is not simply random text. 
              It has roots in a piece of classical Latin literature from 45 BC, 
              making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
              looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
              and going through the cites of the word in classical literature, discovered the undoubtable source. 
              Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
              (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, 
              very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
              comes from a line in section 1.10.32.
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
              Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their 
              exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </p>
          </div>

          <div className="w-full md:w-1/4 flex justify-center mt-6 md:mt-0">
            <div className="bg-lime-900 rounded-3xl h-full w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] ml-auto flex justify-center items-center">
              <img className="h-72 w-56 lg:h-96 md:w-72" src={SeriousBrain} alt="Ilustração de um cérebro com rosto sério" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-3 md:right-16 top-12 md:top-24 lg:top-36">
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