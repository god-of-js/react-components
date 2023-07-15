import 'react-phone-number-input/style.css'
import { getCountries, getCountryCallingCode } from 'react-phone-number-input'
// @ts-ignore
import en from 'react-phone-number-input/locale/en'
import { useMemo } from 'react';
import UiSelect from './UiSelect';
export type OnChangeParams = { name: string; value: string | null };
interface Props {
    value: string | null;
    // TODO: change back to OnChangeParams;
    onChange: (event: unknown) => void;
}
export default function UiInput({ value, onChange = () => { } }: Props) {
    const countryShortCodes = getCountries()
    const countriesOptions = useMemo(() => {
        return countryShortCodes.map((shortCode) => {
            const callingCode = `+${getCountryCallingCode(shortCode)}`;
            return {
                label: `${en[shortCode]} (${callingCode})`,
                value: callingCode,
                img: `https://purecatamphetamine.github.io/country-flag-icons/3x2/${shortCode}.svg`
            };
        })
    }, [countryShortCodes])
    return (<div>
        <UiSelect options={countriesOptions} isVisible value='' />

    </div>)
}
