'use client';
import React, { useState, ChangeEvent } from 'react';

interface BaseDeDonnees {
  [mot: string]: {
    traduction: string;
    exempleAnglais: string;
    traductionExempleFrancais: string;
  };
}

const Traduction: React.FC = () => {
  // Mini base de données de mots
  const baseDeDonnees: BaseDeDonnees = {
    voiture: {
      traduction: 'car',
      exempleAnglais: 'I drive a car.',
      traductionExempleFrancais: 'Je conduis une voiture.',
    },
    maison: {
      traduction: 'house',
      exempleAnglais: 'This is my house.',
      traductionExempleFrancais: 'Ceci est ma maison.',
    },
    chat: {
      traduction: 'cat',
      exempleAnglais: 'The cat is sleeping.',
      traductionExempleFrancais: 'Le chat dort.',
    },
    chien: {
      traduction: 'dog',
      exempleAnglais: 'My dog barks loudly.',
      traductionExempleFrancais: 'Mon chien aboie fort.',
    },
    livre: {
      traduction: 'book',
      exempleAnglais: 'I love reading books.',
      traductionExempleFrancais: "J'adore lire des livres.",
    },
    manger: {
      traduction: 'eat',
      exempleAnglais: 'I like to eat pizza.',
      traductionExempleFrancais: "J'aime manger de la pizza.",
    },
  };

  const [traduction, setTraduction] = useState<string>('');
  const [exempleAnglais, setExempleAnglais] = useState<string>('');
  const [traductionExempleFrancais, setTraductionExempleFrancais] = useState<string>('');

  const handleRecherche = (mot: string) => {
    const motLowerCase = mot.toLowerCase();
    const motEnBaseDeDonnees = baseDeDonnees[motLowerCase];

    if (motEnBaseDeDonnees) {
      setTraduction(motEnBaseDeDonnees.traduction);
      setExempleAnglais(motEnBaseDeDonnees.exempleAnglais);
      setTraductionExempleFrancais(
        motEnBaseDeDonnees.traductionExempleFrancais
      );
    } else {
      setTraduction('Aucune traduction trouvée');
      setExempleAnglais('');
      setTraductionExempleFrancais('');
    }
  };

  // Event listener appelée à chaque changement dans le champ de recherche
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const motRecherche = e.target.value;
    handleRecherche(motRecherche);
  };

  return (
    <div className='flex flex-col md:flex-row h-screen'>
      {/* Bloc de recherche à gauche */}
      <div className='w-full md:w-1/3 bg-teal-500 p-8 flex items-start justify-start h-full'>
        <div>
          <div className='relative'>
            <input
              type='text'
              id='recherche'
              className='w-full py-2 px-4 bg-transparent text-white placeholder-white border-none outline-none text-3xl font-bold'
              placeholder='Rechercher'
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      {/* Bloc de traduction à droite */}
      <div className='w-full md:w-2/3 bg-white p-8 h-full'>
        <h1 className='text-3xl mb-4 text-teal-500 font-bold'>Traduction</h1>
        {traduction && (
          <div>
            <p>{traduction}</p>
          </div>
        )}
        {exempleAnglais && (
          <div className='mb-4'>
            <h2 className='text-xl italic text-teal-500 m-2'>
              Exemple en anglais
            </h2>
            <p>{exempleAnglais}</p>
          </div>
        )}
        {traductionExempleFrancais && (
          <div>
            <h2 className='text-xl italic text-teal-500 m-2'>
              Exemple en français
            </h2>
            <p>{traductionExempleFrancais}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Traduction;
