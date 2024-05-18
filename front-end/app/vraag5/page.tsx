"use client"


import CheckboxLoader from "@/components/checkboxloader";
import InputLoader from "@/components/inputLoader";
import { PageTransition } from "@/components/pageTransition";

export default function Home() {

  return (
    <PageTransition >
    <main className="bg-white p-2 flex flex-col items-center">
    <div className="bg-gray-200 p-4 mb-5 rounded text-center">
    <h2 className="text-lg text-gray-800 mb-2">Antwoorden</h2>
    <ul className="list-disc list-inside mx-auto">
      <li className="text-lg text-gray-800">Vakantie: Turn around the city</li>
      <li className="text-lg text-gray-800">Locatie: Brussel</li>
      <li className="text-lg text-gray-800">Aantal deelnemers: 28</li>
      <li className="text-lg text-gray-800">Verblijf: Jess sleep inn</li>
      <li className="text-lg text-gray-800">Vertrek: 19-08-2024</li>
      <li className="text-lg text-gray-800">Terug: 26-08-2024</li>
    </ul>
  </div>
  <CheckboxLoader 
  vraag="Wat zijn de profileringsactiviteiten?" 
  antwoorden={["Urban Hunt", "Escape Room", "Indoor live adventure game","Workshop grafiti", "Aqualibi", "Rondleiding Europese wijk", "Initiatie Parcour"]} 
  correctAntwoorden={["Urban Hunt", "Workshop grafiti", "Initiatie Parcour", "Indoor live adventure game"]} 
  next_q="/ans"/>
  
</main>
    </PageTransition>
  );
}
