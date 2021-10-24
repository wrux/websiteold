import { FC, useState } from 'react';
import { Form } from '@formium/types';
import { Brand, ContactForm, IconLink, Modal } from 'components/ui';

interface AppLayoutProps {
  contactForm?: Form;
}

const App: FC<AppLayoutProps> = ({ children, contactForm }) => {
  let [contactIsOpen, setContactIsOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <div className="flex container py-8">
          <Brand to="/" />
          <IconLink
            as={contactForm ? 'button' : 'Link'}
            icon="MailIcon"
            className="ml-auto"
            href={'mailto:callum@wrux.com'}
            onClick={contactForm ? () => setContactIsOpen(true) : null}
          >
            callum@wrux.com
          </IconLink>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-black">
        <div className="flex container py-8">wrux</div>{' '}
      </footer>
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
    </div>
  );
};

export default App;
