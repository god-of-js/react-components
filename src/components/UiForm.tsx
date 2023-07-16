import { Formik, FormikErrors } from 'formik';
import React from 'react';
/**
 * This component wraps the Formik package and eliminates boiler the plate code of validating.
 */
interface Props {
  /**
   * The formData is the data the form is helping collect. this is needed for validation purposes.
   */
  formData: Record<string, any>;
  /**
   * The schema is a yup schema which is used to set the ideal structure of the expected object.
   */
  schema?: any;
  children: (props: {
    errors: FormikErrors<Record<string, string>>;
    hasErrors?: boolean;
    isSubmitting?: boolean;
  }) => React.ReactNode;
  onSubmit: () => void;
}
export default function UiForm({
  schema,
  formData,
  children,
  onSubmit,
}: Props) {
  function validateForm() {
    if (!schema) return {};
    let errors = {};
    try {
      schema.validateSync(formData, { abortEarly: false });
    } catch (error: any) {
      errors = error.inner.reduce(
        (
          acc: Record<string, string>,
          { path, message }: { path: string; message: string },
        ) => {
          acc[path] = message;
          return acc;
        },
        {},
      );
    }
    return errors;
  }

  return (
    <Formik
      initialValues={formData}
      validate={validateForm}
      onSubmit={onSubmit}
    >
      {({ errors, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          {children({
            errors,
            hasErrors: !!errors.length,
            isSubmitting,
          })}
        </form>
      )}
    </Formik>
  );
}
