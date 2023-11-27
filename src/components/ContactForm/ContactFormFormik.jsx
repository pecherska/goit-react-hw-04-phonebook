import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useFormik } from 'formik';

import { nanoid } from 'nanoid';
import { useState } from 'react';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(5, 'Too Long!')
    .required('Required'),
  number: yup.number().required('Required number'),
});

export const ContactFormFormik = ({ onSubmit }) => {
  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor={nameId}>
            Name
            <Field
              id={nameId}
              type="text"
              name="name"
              required
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            ></Field>
            <ErrorMessage name="name" component="div" />
          </label>

          <label htmlFor={numberId}>
            Number
            <Field
              id={numberId}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            ></Field>
            <ErrorMessage name="number" component="div" />
          </label>

          <button type="submit" disabled={isSubmitting}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};
