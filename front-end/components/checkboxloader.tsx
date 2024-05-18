import {useRouter} from 'next/navigation';
import React, { useState } from 'react';
import { Button } from './ui/button';

interface CheckboxLoaderProps {
  vraag: string;
  antwoorden: string[];
  correctAntwoorden: string[];
  next_q: string;
}

const CheckboxLoader: React.FC<CheckboxLoaderProps> = ({
  vraag,
  antwoorden,
  correctAntwoorden,
  next_q,
}:CheckboxLoaderProps) => {
    const router = useRouter();
  const [selectedAntwoorden, setSelectedAntwoorden] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  const handleCheckboxChange = (antwoord: string) => {
    if (selectedAntwoorden.includes(antwoord)) {
      setSelectedAntwoorden(selectedAntwoorden.filter((a) => a!== antwoord));
    } else {
      setSelectedAntwoorden([...selectedAntwoorden, antwoord]);
    }
  };

  const handleSubmit = () => {
    setShow(true)
    if (selectedAntwoorden.length === correctAntwoorden.length) {
      const isAllCorrect = correctAntwoorden.every((ca) => selectedAntwoorden.includes(ca));
      setIsCorrect(isAllCorrect);
      if (isAllCorrect){
        setTimeout(()=>router.push(next_q), 1500);
      }
    }
  };

  return (
    <div className="bg-card p-4 rounded text-center">
      <h2 className="text-lg text-white mb-2">{vraag}</h2>
      <ul className="list-inside mx-auto">
        {antwoorden.map((antwoord, index) => (
          <li key={index} className="text-lg text-white flex items-center">
            <input
              type="checkbox"
              checked={selectedAntwoorden.includes(antwoord)}
              onChange={() => handleCheckboxChange(antwoord)}
              className="mr-2"
            />
            {antwoord}
          </li>
        ))}
      </ul>
      <Button
        variant="default" size="default" type="submit" className="w-full bg-input"
        onClick={handleSubmit}
      >
        Controleer
      </Button>
      {show && (isCorrect? (
        <p className="text-green-300">Goed gedaan! Alle antwoorden correct!</p>
      ) : (
        <p className="text-white">Helaas, Niet alles is juist</p>
      ))}
    </div>
  );
};

export default CheckboxLoader;