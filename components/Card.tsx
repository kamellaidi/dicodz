import Image from 'next/image';
import React from 'react';

interface CardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const Card = ({ icon, name, description }: CardProps) => {
  const iconWithClasses = React.cloneElement(icon as React.ReactElement, {
    className: 'h-6 w-6 text-white',
    'aria-hidden': true,
  });

  return (
    <div className='relative pl-16'>
      <dt className='text-base font-semibold leading-7 text-gray-900'>
        <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500'>
          {iconWithClasses}
        </div>
        {name}
      </dt>
      <dd className='mt-2 text-base leading-7 text-gray-600'>{description}</dd>
    </div>
  );
};

export default Card;
