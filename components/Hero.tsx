import Image from 'next/image';
import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
      {/* <div className='hero-map' /> */}
      {/* <div className='sahara-map' /> */}
      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        <h1 className='bold-52 lg:bold-77'>Tarjaama</h1>
        <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]:'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          eius placeat distinctio ipsa, ab impedit magnam eveniet voluptas
          quibusdam, fuga, labore soluta? Minima eligendi inventore incidunt
          quae quia iste esse.
        </p>
        <div className='my-11 flex flex-wrap gap-5'>
          <div className='flex items-center gap2'>
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src='/star.svg'
                  alt='stars'
                  key={index}
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className='bold-16 lg:bold-20 text-blue-70'>
            198k
            <span className='regular-16 lg:regular-20 ml-1'>
              {' '}
              Excellent reviews
            </span>
          </p>
        </div>
        <div className='flex flex-col w-full gap-3 sm:flex-row'>
          <Button
            type='button'
            title='Rechercher'
            icon='/search2.svg'
            variant='btn_light_green'
          />
          <Button
            type='button'
            title='En savoir plus'
            icon='/play.svg'
            variant='btn_white_text'
          />
        </div>

        {/* <div className='relative flex flex-1 items-start'>
          <div className='relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>
            <div className='flex flex-col'>
                <div className='flexBetween'>
                    <p className='regular-16 text-gray-20'>
                        Location
                    </p>
                    <Image src="/close.svg" alt='close' width={24} height={24} />

                </div>

            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
