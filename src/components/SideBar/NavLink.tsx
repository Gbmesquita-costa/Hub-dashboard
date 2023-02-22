import React, { ElementType } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { LinkProps, TextLinks } from './styles';

interface NavLinkProps {
  children: string;
  href: string;
  Icon: ElementType | any;
}

export function NavLink({ children, href, Icon }: NavLinkProps) {
  const { pathname } = useLocation()
  let activeLink = false

  if (pathname === href) {
      activeLink = true
  }

  return (
    <div>
      <Link to={href}>
        <LinkProps>
          <Icon />
          <TextLinks active={activeLink}>
            {children}
          </TextLinks>
        </LinkProps>
      </Link>
    </div>
  )
}
