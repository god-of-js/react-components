import 'react-phone-number-input/style.css';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';
// @ts-ignore
import en from 'react-phone-number-input/locale/en';
import { useMemo, useState } from 'react';
import UiSelect from './UiSelect';
export type OnChangeParams = { name: string; value: string | null };
interface Props {
  value: string | null;
  // TODO: change back to OnChangeParams;
  onChange: (event: unknown) => void;
}
export default function UiInput({ value, onChange = () => {} }: Props) {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <div className="relative w-full">
      <div className="input-container overflow-hidden h-11 bg-white rounded-lg border-gray-200 border">
        <div className="flex items-center bg-gray-100 w-fit border-gray-200 border-r">
          <UiSelect
            options={countriesOptions}
            isVisible={isVisible}
            suggestions={suggestions}
            setIsVisible={setIsVisible}
            value={countriesOptions[0].value}
          />
        </div>
      </div>
    </div>
  );
}
