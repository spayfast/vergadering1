"use client"


import InputLoader from "@/components/inputLoader";
import { PageTransition } from "@/components/pageTransition";

export default function Home() {

  return (
    <PageTransition >
      <main className="">
          <InputLoader vraag="Wat is de naam van deze vakantie" antwoord="turn around the city" />
      </main>
    </PageTransition>
  );
}
