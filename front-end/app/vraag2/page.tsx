"use client"


import InputLoader from "@/components/inputLoader";
import { PageTransition } from "@/components/pageTransition";

export default function Home() {

  return (
    <PageTransition >
      <main className="bg-white p-2 flex flex-col items-center">
    <div className="bg-gray-200 p-4 rounded text-center">
    <h2 className="text-lg text-gray-800 mb-2">Antwoorden</h2>
    <ul className="list-disc list-inside mx-auto">
      <li className="text-lg text-gray-800">Vakantie: Turn around the city</li>
      <li className="text-lg text-gray-800">Locatie: Brussel</li>
    </ul>
  </div>
        <InputLoader vraag="Hoeveel deelnemers gaan er mee?" antwoord="28" next_q="vraag3" given_hint="hoeveel spelkaarten?"/>
      </main>
    </PageTransition>
  );
}
