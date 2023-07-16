import ChevronDown from './icons/chevron-down.svg';
import Hand from './icons/hand.svg';

const icons = {
  ChevronDown,
  Hand,
};

export type Icons = keyof typeof icons;

interface Props {
  /** Name of the icon as stored in the icons object */
  icon: Icons;
}

const UiIcon: React.FC<Props> = ({ icon }) => {
  const DynamicIcon = icons[icon];
  return <div className="icon">{DynamicIcon && <DynamicIcon />}</div>;
};

export default UiIcon;
