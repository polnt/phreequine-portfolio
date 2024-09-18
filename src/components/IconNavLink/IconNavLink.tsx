import { NavLink } from 'react-router-dom';
import './iconNavLink.css';

interface IconNavLinkProps {
  to: string;
  icon: JSX.Element;
  label: string;
  className?: string;
  onClick?: () => void;
}

const IconNavLink = ({ 
  to, 
  icon, 
  label, 
  className, 
  onClick, 
  ...props 
}: IconNavLinkProps) => {
  
  return (
    <NavLink {...props}
      className={`icon-navlink ${className}`}
      onClick={onClick}
      to={to}
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
};

export default IconNavLink;
