import { useMemo } from 'react';
import Image from 'next/image';
import UiIcon from './UiIcon';
import OutsideClickHandler from 'react-outside-click-handler';

interface Option {
  value: string;
  label: string;
  img?: string;
  secondaryText?: string;
}
interface Props {
  options: Option[];
  value: string;
  isVisible: boolean;
  suggestions?: string[];
  setIsVisible: (status: boolean) => void;
}
export default function UiSelect({
  options,
  value,
  isVisible,
  suggestions,
  setIsVisible,
}: Props) {
  const selectedOption = useMemo(() => {
    return options.find(({ value: optionValue }) => optionValue === value);
  }, [value, options]);

  const suggestionData = useMemo(() => {
      if (!suggestions) return;
      return options.filter(({ value: optionValue }) => suggestions.includes(optionValue))
  }, [suggestions, options])

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <OutsideClickHandler onOutsideClick={() => setIsVisible(false)}>
      <button
        type="button"
        className="flex justify-between gap-2 h-full px-4 py-3 "
        onClick={toggleVisibility}
      >
        {selectedOption && (
          <div className="flex items-center gap-2">
            {selectedOption.img && (
              <Image
                src={selectedOption.img}
                alt="flag"
                width={30}
                height={30}
                className="border-r-4"
              />
            )}
            <span className="text-base text-black leading-5 font-normal">
              {selectedOption.secondaryText
                ? selectedOption.secondaryText
                : selectedOption.label}
            </span>
          </div>
        )}
        <UiIcon icon="ChevronDown" />
      </button>
      {isVisible && (
        <div className="text-dark-500 bg-white max-h-80 overflow-y-auto rounded-lg z-50 pr-4 mt-2 w-full border-gray-200  absolute border ">
          {suggestionData &&<ul className="p-4 grid gap-3 border-b border-gray-200">
            {suggestionData.map((option, index) => (
              <li key={index} className="text-sm flex gap-2 hover:bg-gray-50 p-1 cursor-pointer">
                {option.img && (
                <Image src={option.img} alt="flag" width={20} height={20} />
              )}
                <span>{option.label}</span>
              </li>
            ))}
          </ul>}
          <ul className="p-4 grid gap-3 ">
            {options.map((option, index) => (
              <li key={index} className="text-sm flex gap-2 hover:bg-gray-50 p-1 cursor-pointer">
                {option.img && (
                <Image src={option.img} alt="flag" width={20} height={20} />
              )}
                <span>{option.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </OutsideClickHandler>
  );
}
