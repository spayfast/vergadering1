"use client"


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
    </ul>
  </div>
  <InputLoader 
    vraag="Wanneer vertrekken we?" 
    antwoord="2024-08-19" next_q="/vraag5" 
    given_hint="limburg.kazou.be mijn groepen" 
    ans_type="date"
    second_q="Wanneer komen we terug?"
    second_ans="2024-08-26"
  />
</main>
    </PageTransition>
  );
}
