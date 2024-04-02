import SeriousBrain from "../assets/serious-brain.png";

export function About() {
  return (
    <main className="bg-yellow-600 h-screen flex flex-col justify-center relative overflow-hidden">
      <div className=" p-2 md:p-6 lg:p-0 my-0 ml-auto h-full w-full md:h-[90%] lg:w-[90%] flex flex-col justify-center gap-6">
        <div className="w-full">
          <h1 className="text-white font-bold text-6xl text-left">
            Olá, <span className="text-lime-900">cognauta</span>!
          </h1>
        </div>

        <div className="flex justify-between w-full">
          <div className="w-3/4">
            <p className="text-white text-xl text-justify font-bold">
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

            <p className="text-white text-xl text-justify mt-5 font-bold">
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

          <div className=" flex-1">
            <div className="bg-lime-900 rounded-3xl h-full w-[400px] ml-auto flex flex-col justify-center items-center">
              <img className="h-96 w-72 flex justify-center items-center" src={ SeriousBrain } alt="Ilustração de um cérebro com rosto sério" />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[600px] w-24 bg-orange-600 rounded-r-[30px] absolute" />

      <div className="size-[400px] bg-orange-600 rounded-full absolute right-[-150px] bottom-[-150px]"/>
    </main>
  );
}