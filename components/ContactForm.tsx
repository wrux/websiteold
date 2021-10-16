import React, { FC, useState } from 'react';
import { FormiumForm, defaultComponents } from '@formium/react';
import { formium } from 'lib/formium';
import { Form } from '@formium/types';

interface ContactFormProps {
  form: Form;
}

const ContactForm: FC<ContactFormProps> = ({ form }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div>
        <h1>Looks like there was an error. Please try again.</h1>
      </div>
    );
  }
  if (success) {
    return (
      <div>
        <h1>Thank you! Your response has been recorded.</h1>
      </div>
    );
  }
  return (
    <FormiumForm
      data={form}
      onSubmit={async (values) =>
        formium
          .submitForm('contact', values)
          .then(() => setSuccess(true))
          .catch(() => setError(true))
      }
    />
  );
};

export default ContactForm;
