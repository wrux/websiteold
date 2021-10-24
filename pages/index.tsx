import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { formium } from 'lib/formium';
import { AppLayout } from 'components/layouts';
import { Hero, Navigation, NavigationItem } from 'components/ui';
import { Form } from '@formium/types';

interface HomeProps {
  contactForm?: Form;
}

const Home: NextPage<HomeProps> = ({ contactForm }) => (
  <AppLayout contactForm={contactForm}>
    <Hero
      title="Hi, I'm Callum"
      subtitle="I'm currently working remote somewhere in Europe. I love building performant and accessible websites and solving complex problems in the browser."
    />
    <Navigation label="Find me on other platforms">
      <NavigationItem href="https://instagram.com/etocallum" target="_blank">
        Instagram
      </NavigationItem>
    </Navigation>
  </AppLayout>
);

export const getStaticProps = async () => {
  try {
    const form = await formium.getFormBySlug('contact');
    return {
      props: {
        contactForm: form || null,
      },
    };
  } catch (e) {
    console.log(e);
  }
  return {
    props: {},
  };
};

export default Home;
