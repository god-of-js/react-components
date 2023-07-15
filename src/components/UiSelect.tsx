import { useMemo } from "react";
import Image from 'next/Image';

interface Option {
    value: string,
    label: string;
    img?: string;
}
interface Props {
    options: Option[]
    value: string;
    isVisible: boolean;
}
export default function UiSelect({ options, value, isVisible }: Props) {
    const selectedOption = useMemo(() => {
        return options.find(({ value: optionValue }) => optionValue === value);
    }, [value]);

    return <div className="">
        <div className="d-flex items-center gap-2">
            {selectedOption && <div>
                {selectedOption.img && <Image src={selectedOption.img} alt="flag" width={50} height={50}  />}
                <span>{selectedOption.label}</span></div>}

        </div>
        {isVisible && (<ul>
            {options.map((option, index) => (<li key={index} className="d-flex items-center gap-2 absolute bottom-0">
                {option.img && <Image src={option.img} alt="flag" width={50} height={50} />}
                <span>{option.label}</span>
            </li>))}
        </ul>)}
    </div>
}