import { ArrowLeft } from "lucide-react";
import { NavArrowButton } from "../components/NavArrowButton";
import { ReferencesCard } from "../components/ReferencesCard";
import { TeamCard } from "../components/TeamCard";
import { photos } from "../constants/photos";
import { references } from "../constants/references";

export function CreditsAndReference() {
  return (
    <main className="bg-lime-900 min-h-screen flex flex-col justify-center items-center">
      <div className="  p-2 md:p-6 my-0 mx-auto h-full w-full md:h-[90%] lg:w-[90%] flex flex-col justify-center md:gap-5 items-center relative">
        <div className="absolute top-2 left-2 md:top-0 md:left-2">
          <NavArrowButton
            to="/" 
            color="bg-yellow-600"
            children={ 
              <ArrowLeft 
                color="#394f21" 
                size={60} 
              /> 
            }
          />
        </div>
        
        <h1 className="text-yellow-600 font-bold text-5xl text-center">
          Créditos
        </h1>
        
        <div className="flex flex-col md:flex-row justify-around w-full mt-8 md:mt-0 gap-2 lg:gap-0"> 
          <section className="bg-yellow-600 h-auto w-full md:w-[400px] lg:w-[500px] rounded-[30px] flex flex-col justify-evenly items-center mb-8 md:mb-0 p-4">
            <h2 className="text-orange-600 text-4xl font-bold text-center mb-4">
              Equipe
            </h2>

            <div className="w-full flex flex-col gap-5 justify-center p-4">
              {photos.map((photo, index) => (
                <TeamCard 
                  key={index}
                  url={photo.url}
                  name={photo.name}
                />
              ))}
            </div>
          </section>

          <section className="bg-yellow-600 h-auto w-full md:w-[400px] lg:w-[500px] rounded-[30px] flex flex-col items-center p-4">
            <h2 className="text-orange-600 text-4xl font-bold text-center mb-4">
              Referências
            </h2>

            <ul className="w-full flex flex-col gap-5 justify-center p-4">
              {references.map((reference, index) => (
                <li className="list-disc" key={index}>
                  <a href={reference} target="_blank" rel="noopener noreferrer">
                    <ReferencesCard url={reference} />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}