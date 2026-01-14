import * as icons from '../assets/icons';

export type TIconName = keyof typeof icons;

interface IIconProps {
  name: TIconName;
  size?: number;
}

export const Icon = ({ name, size = 24 }: IIconProps) => {
  const Svg = icons[name];

  return <Svg width={size} height={size} />;
};
