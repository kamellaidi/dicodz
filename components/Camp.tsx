import React from 'react';
import Card from './Card';
import {
    AcademicCapIcon,
  ArrowPathIcon,
  ChatBubbleBottomCenterIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  GlobeEuropeAfricaIcon,
  LockClosedIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import TitleCamp from './TitleCamp';

  
export const features = [
    {
      name: 'Un vocabulaire riche',
      description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
      icon: <GlobeEuropeAfricaIcon />,
    },
    {
      name: "Des phrases prêtes à l'emploi",
      description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
      icon: <AcademicCapIcon />,
    },
    {
      name: 'Une communauté active',
      description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
      icon: <UserGroupIcon />,
    },
    {
      name: 'Devenez contributeur !',
      description:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
      icon: <ChatBubbleBottomCenterIcon />,
    },
  ];

const Camp = () => {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <TitleCamp />
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {features.map((feature) => (
              <Card key={feature.name} {...feature} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Camp;
