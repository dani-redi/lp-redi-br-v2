import React from 'react';
import { getSignupUrl } from '../utils/url';

interface SignupLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const SignupLink: React.FC<SignupLinkProps> = ({
  children,
  href,
  rel,
  target = '_blank',
  ...props
}) => {
  const signupUrl = href ?? getSignupUrl();
  const anchorRel = target === '_blank' ? 'noopener noreferrer' : rel;

  return (
    <a href={signupUrl} rel={anchorRel} target={target} {...props}>
      {children}
    </a>
  );
};

export default SignupLink;