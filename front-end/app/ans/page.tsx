"use client"


import InputLoader from "@/components/inputLoader";
import { PageTransition } from "@/components/pageTransition";

export default function Home() {

  return (
    <PageTransition >
    <main className="bg-white p-2 flex flex-col items-center">
    <div className="bg-gray-200 p-8 rounded text-center">
    <h2 className="text-lg text-gray-800 mb-2">Antwoorden</h2>
    <ul className="list-disc list-inside mx-auto">
      <li className="text-lg text-gray-800">Vakantie: Turn around the city</li>
      <li className="text-lg text-gray-800">Locatie: Brussel</li>
      <li className="text-lg text-gray-800">Aantal deelnemers: 28</li>
      <li className="text-lg text-gray-800">Verblijf: Jess sleep inn</li>
      <li className="text-lg text-gray-800">Vertrek: 19-08-2024</li>
      <li className="text-lg text-gray-800">Terug: 26-08-2024</li>
      <li>Profilering:<ul>
        <li>Parcour</li>
        <li>Indoor live adventure game</li>
        <li>Workshop grafiti</li>
        <li>Urban hunt</li>
        </ul></li>
    </ul>
  </div>
</main>
    </PageTransition>
  );
}
