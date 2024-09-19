import { NavLink } from 'react-router-dom';
import { a } from '@react-spring/web';
import './iconNavLink.css';

interface IconNavLinkProps {
  to: string;
  icon: JSX.Element;
  label: string;
  className?: string;
  style?: unknown;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const IconNavLink = ({
  to,
  icon,
  label,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  style,
  ...props
}: IconNavLinkProps) => {

  return (
    <NavLink {...props}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      to={to}
    >
      <a.div style={style ? style : {}} className={`icon-navlink ${className}`}>
        {icon}
        <span>{label}</span>
      </a.div>

    </NavLink>
  );
};

export default IconNavLink;
