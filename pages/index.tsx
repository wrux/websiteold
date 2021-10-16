import { useState, Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { formium } from 'lib/formium';
import { ContactForm, Modal } from 'components';
import { Form } from '@formium/types';

interface HomeProps {
  contactForm?: Form;
}

const Home: NextPage<HomeProps> = ({ contactForm }) => {
  let [contactIsOpen, setContactIsOpen] = useState(false);
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Head>
        <title>wrux</title>
        <meta name="description" content="wrux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {contactForm && (
        <Modal
          isOpen={contactIsOpen}
          onClose={() => setContactIsOpen(false)}
          title="Interested in working together?"
          description="Tell me a little bit about you and your project and I will get back to you."
        >
          <ContactForm form={contactForm} />
        </Modal>
      )}
      <button onClick={() => setContactIsOpen(true)}>
        open ({contactIsOpen ? 'y' : 'n'})
      </button>
      <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Next + Tailwind ❤️</div>
          <p className="text-grey-darker text-base">
            Next and Tailwind CSS are a match made in heaven, check out this
            article on how you can combine these two for your next app.
          </p>
        </div>
      </div>
    </div>
  );
};

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
