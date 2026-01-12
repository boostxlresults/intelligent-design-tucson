'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ObfuscatedEmailProps {
  user?: string;
  domain?: string;
  className?: string;
  showIcon?: boolean;
  'data-testid'?: string;
}

export function ObfuscatedEmail({
  user = 'info',
  domain = 'idesignac.com',
  className,
  showIcon = false,
  'data-testid': testId,
}: ObfuscatedEmailProps) {
  const [email, setEmail] = useState('Contact Us');

  useEffect(() => {
    const parts = [user, domain];
    setEmail(parts.join('@'));
  }, [user, domain]);

  const handleClick = () => {
    const parts = [user, domain];
    window.location.href = `mailto:${parts.join('@')}`;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  };

  const isLoaded = email !== 'Contact Us';

  if (isLoaded) {
    return (
      <a
        href={`mailto:${email}`}
        className={cn('hover-elevate px-2 py-1 rounded-md inline-block', className)}
        data-testid={testId}
      >
        {email}
      </a>
    );
  }

  return (
    <span 
      className={cn('hover-elevate px-2 py-1 rounded-md inline-block cursor-pointer', className)} 
      data-testid={testId}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      suppressHydrationWarning
    >
      {email}
    </span>
  );
}

export function getObfuscatedEmailHref(user = 'info', domain = 'idesignac.com'): string {
  return `mailto:${user}@${domain}`;
}
