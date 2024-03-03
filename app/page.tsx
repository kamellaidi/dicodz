import Camp from '@/components/Camp';
import Traduction from '@/components/Traduction';
import GetApp from '@/components/GetApp';
import Guide from '@/components/Guide';
import Hero from '@/components/Hero';
import Image from 'next/image';

export default function Home() {
  return <>
    <Hero />
    <Camp />
    {/* <Guide /> */}
    <Traduction />
    {/* <GetApp /> */}

  </>;
}
