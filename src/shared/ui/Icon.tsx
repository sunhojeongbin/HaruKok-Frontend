import * as icons from '../assets/icons';

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
}

export const Icon = ({ name, size = 24, color }: IconProps) => {
  const Svg = icons[name];

  return <Svg width={size} height={size} style={{ color }} />;
};
