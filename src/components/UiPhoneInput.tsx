import 'react-phone-number-input/style.css';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';
// @ts-ignore
import en from 'react-phone-number-input/locale/en';
import { useMemo, useState } from 'react';
import UiSelect from './UiSelect';

export type OnChangeParams = { name: string; value: string};
interface Props {
  value: string;
  defaultCountry?: string;
  onChange: (event: OnChangeParams) => void;
}
export default function UiInput({ value, defaultCountry = '+39', onChange = () => {} }: Props) {
  const [isVisible, setIsVisible] = useState(false);
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

  function sendValue(e: { target: { name: string; value: string } }) {
    onChange({ name: e.target.name, value: e.target.value });
  }
  return (
    <div className="relative w-full">
      <div className="input-container overflow-hidden h-11 flex bg-white rounded-lg border-gray-200 border">
        <div className="flex items-center bg-gray-100 w-fit border-gray-200 border-r">
          <UiSelect
            options={countriesOptions}
            isVisible={isVisible}
            name="country"
            suggestions={suggestions}
            value={selectedCountry}
            setIsVisible={setIsVisible}
            onChange={({ value }) => setSelectedCountry(value)}
          />
        </div>
        <input placeholder='000 0000000' value={value || ''} className="w-full pl-2 outline-none text-black" onChange={sendValue}/>
      </div>
    </div>
  );
}
