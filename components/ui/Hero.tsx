import React, { FC } from 'react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle?: string;
}

const Hero: FC<HeroProps> = ({ title, subtitle }) => (
  <section className="py-8 md:py-16 px-8">
    <div className="max-w-4xl mx-auto text-center">
      <div className="block mx-auto mb-6">
        <Image
          className="rounded-full shadow-md"
          src="/callum-bonnyman-square.jpg"
          alt="Callum Bonnyman"
          width={192}
          height={192}
        />
      </div>
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <h2 className="mt-8 text-4xl leading-snug">{subtitle}</h2>}
    </div>
  </section>
);

export default Hero;
