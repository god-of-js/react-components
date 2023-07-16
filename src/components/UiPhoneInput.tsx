import 'react-phone-number-input/style.css';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';
// @ts-ignore
import en from 'react-phone-number-input/locale/en';
import { useMemo, useState } from 'react';
import UiSelect from './UiSelect';
import UiField from './UiField';
import UiIcon from './UiIcon';

export type OnChangeParams = { name: string; value: string };
export interface Props {
  /***
   * This is the current value of the variable
   */
  value: string;
  defaultCountry?: string;
  /***
   * This is the error message. In most cases, it would come from the UiForm.tsx component.
   */
  error?: string;
  /**
   * This is the name of the field in the object. e.g if {gender: male}, the name would be gender.
   */
  name: string;
  /**
   * This method receives an object of type { name: string, value: string}
   */
  onChange: (event: OnChangeParams) => void;
}
export default function UiInput({
  value,
  defaultCountry = '+39',
  error,
  name,
  onChange,
}: Props) {
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const countryShortCodes = getCountries();
  const suggestions = ['+39', '+386'];

  const countriesOptions = useMemo(() => {
    return countryShortCodes.map((shortCode) => {
      const callingCode = `+${getCountryCallingCode(shortCode)}`;
      return {
        label: `${en[shortCode]} (${callingCode})`,
        value: callingCode,
        img: `https://purecatamphetamine.github.io/country-flag-icons/3x2/${shortCode}.svg`,
        secondaryText: callingCode,
      };
    });
  }, [countryShortCodes]);

  function sendValue(e: { target: { value: string } }) {
    onChange({ name, value: e.target.value });
  }

  return (
    <UiField error={error}>
      <div className="relative w-full">
        <div
          className={`input-container overflow-hidden h-11 flex rounded-lg ${
            !!error
              ? 'bg-danger-100 border-danger-600'
              : 'border-gray-200 bg-white '
          } border`}
        >
          <div
            className={`flex items-center  w-fit  border-r ${
              !!error
                ? 'bg-danger-100 border-danger-600'
                : 'bg-gray-100 border-gray-200'
            }`}
          >
            <UiSelect
              options={countriesOptions}
              name="country"
              suggestions={suggestions}
              value={selectedCountry}
              onChange={({ value }) => setSelectedCountry(value)}
            />
          </div>
          <div className="flex items-center justify-between pr-4">
            <input
              placeholder={!!error ? 'Insert Input' : '000 0000000'}
              name={name}
              value={value}
              className={`w-full pl-2 outline-none bg-transparent text-black ${
                !!error ? 'placeholder:text-red-600' : ''
              }`}
              onChange={sendValue}
            />
            {!!error && <UiIcon icon="Hand" />}
          </div>
        </div>
      </div>
    </UiField>
  );
}
