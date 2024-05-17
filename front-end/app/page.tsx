"use client"


import InputLoader from "@/components/inputLoader";
import { PageTransition } from "@/components/pageTransition";

export default function Home() {

  return (
    <PageTransition >
      <main className="">
          <InputLoader vraag="Wat is de naam van deze vakantie" antwoord="turn around the city" next_q="/vraag1" given_hint="whatsapp"/>
      </main>
    </PageTransition>
  );
}
