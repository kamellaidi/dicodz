// Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-around text-teal-500 p-10 mt-10 min-h-[50vh]">
      <div className="flex flex-col p-4 mt-8">
        <h2 className="text-lg font-bold text-teal-500">Acceuil</h2>
      </div>

      <div className="flex flex-col p-4 mt-8">
        <h2 className="text-lg font-bold text-teal-500">Qui sommes-nous ?</h2>
        {/* Contenu de la deuxième colonne */}
      </div>

      <div className="flex flex-col p-4 mt-8">
        <h2 className="text-lg font-bold text-teal-500">Traduction</h2>
        {/* Contenu de la troisième colonne */}
      </div>

      <div className="flex flex-col p-4 mt-8">
        <h2 className="text-lg font-bold text-teal-500">Lexique</h2>
        {/* Contenu de la quatrième colonne */}
      </div>

      <div className="flex flex-col p-4 mt-8 lg:flex-col-2">
        <h2 className="text-lg font-bold text-teal-500">Contact</h2>
        {/* Logo */}
        <div className="logo">
          {/* Insérez votre logo ici */}
        </div>
        {/* Phrase et input pour envoyer un mail */}
        <p className='text-sm'>Restons en contact</p>
        <input type="email" placeholder="Entrez votre e-mail" className="mt-2 p-2 border rounded" />
      </div>

      <div className="w-full text-center pt-4 mt-6">
        <p>&copy; 2023, NOM DU SITE</p>
      </div>
    </footer>
  );
};

export default Footer;
