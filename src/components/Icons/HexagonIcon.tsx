import Icon from '../UI/Icon/Icon.tsx';

interface HexagonIconProps {
    pathClassName?: string;
    className?: string;
}

function HexagonIcon({ className, pathClassName }: HexagonIconProps) {
  return (
    <Icon width="288" height="56" viewBox="0 0 288 56" fill="none" className={className}>
      <path
        className={pathClassName}
        d="M16.8175 5.31576C18.9762 2.29361 22.4615 0.5 26.1754 0.5H261.825C265.539 0.5 269.024 2.29361 271.183 5.31576L287.386 28L271.183 50.6842C269.024 53.7064 265.539 55.5 261.825 55.5H26.1754C22.4615 55.5 18.9762 53.7064 16.8175 50.6842L0.614452 28L16.8175 5.31576Z"
        fill="white"
        stroke="#D0D0D8"
      />
    </Icon>
  );
}

export default HexagonIcon;
