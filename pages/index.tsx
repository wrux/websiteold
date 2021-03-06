import type { NextPage } from 'next';
import Head from 'next/head';
import { formium } from 'lib/formium';
import { Form } from '@formium/types';
import { AppLayout } from '@/components/layouts';
import { Container, Hero, Navigation, NavigationItem } from '@/components/ui';
import { Highlight } from '@/components/common';

interface HomeProps {
  contactForm?: Form;
}

const Home: NextPage<HomeProps> = ({ contactForm }) => (
  <AppLayout contactForm={contactForm}>
    <Head>
      <title>Callum Bonnyma, Web developer | wrux.com</title>
      <meta
        name="description"
        content="I'm currently working as a frontend developer somewhere in Europe. I love building performant and accessible websites and solving complex problems in the browser."
      />
    </Head>
    <Hero title="Hi, I'm Callum">
      {`I'm`} currently working as a <Highlight>Frontend Developer</Highlight>{' '}
      somewhere in Europe. I love building performant and accessible websites
      and solving complex problems in the browser.
    </Hero>
    <Container>
      <Navigation className="mb-12 md:mb-24" label="Find me on other platforms">
        <NavigationItem href="https://github.com/wrux" target="_blank">
          GitHub
        </NavigationItem>
        <NavigationItem
          href="https://www.linkedin.com/in/wrux/"
          target="_blank"
        >
          LinkedIn
        </NavigationItem>
        <NavigationItem
          href="https://www.instagram.com/etocallum/"
          target="_blank"
        >
          Instagram
        </NavigationItem>
        <NavigationItem href="https://bloke.blog" target="_blank">
          Blog
        </NavigationItem>
      </Navigation>
    </Container>
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
