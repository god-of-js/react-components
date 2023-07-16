import ChevronDown from './icons/chevron-down.svg';

const icons = {
  ChevronDown,
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
