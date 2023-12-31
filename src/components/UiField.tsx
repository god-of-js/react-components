import React from 'react';
/**
 * This component is used to sync error and labels round all form components. it could potentially be used in other components like UiSelect, UiWysiwyg, UiTextArea, e.t.c.
 */
interface Props {
  error?: string;
  label?: string;
  children: React.ReactNode;
}
export default function UiField({ error, label, children }: Props) {
  return (
    <div className="ui-field">
      {label && <label>{label}</label>}
      {children}
      <p className="mt-3 text-danger-600 text-sm font-normal leading-5">
        {error}
      </p>
    </div>
  );
}
