import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { useScrollRestoration } from '../hooks/useScrollRestoration';

interface EnhancedLinkProps extends LinkProps {
  preserveScroll?: boolean;
  children: React.ReactNode;
}

export const EnhancedLink: React.FC<EnhancedLinkProps> = ({ 
  preserveScroll = true, 
  onClick,
  ...props 
}) => {
  const { saveScrollPosition } = useScrollRestoration();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (preserveScroll) {
      saveScrollPosition();
    }
    
    if (onClick) {
      onClick(event);
    }
  };

  return <Link {...props} onClick={handleClick} />;
};

export default EnhancedLink;