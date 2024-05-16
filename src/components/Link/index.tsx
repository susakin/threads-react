import React, { useMemo } from 'react';

type LinkProps = {
  className?: string;
  href?: string;
  shortenHref?: boolean;
};

const removeProtcol = (url: string) => {
  try {
    return url
      .replace(/^https?:\/\//i, '')
      .replace(/^www\./i, '')
      .replace(/\/$/, '');
  } catch (e) {
    return url;
  }
};

const getDisplayURL = (url: string): string => {
  const ellipsis: string = '\u2026';
  const maxLength: number = 40;
  const maxPathLength: number = 6;

  const parsedURL: URL = new URL(normalizeURL(url));
  if (parsedURL == null) return url;
  const hostname: string = parsedURL.hostname.replace(/^www\./, '');
  if (hostname.length > maxLength)
    return `${hostname.substr(0, maxLength)}${ellipsis}`;
  const path: string = parsedURL.pathname.replace(/\/$/, '');
  if (path.length <= maxPathLength) {
    const hasSearchParams: boolean = parsedURL.search.length > 0;
    return hasSearchParams
      ? `${hostname}${path}${ellipsis}`
      : `${hostname}${path}`;
  }
  let truncatedPath: string = path.slice(0, maxPathLength);
  while (truncatedPath.length > 1 && /[^a-zA-Z0-9]$/.test(truncatedPath)) {
    truncatedPath = truncatedPath.slice(0, -1);
  }
  return `${hostname}${truncatedPath}${ellipsis}`;
};

const normalizeURL = (url: string): string => {
  if (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('//')
  ) {
    return url;
  }
  return /^https?:\/\//i.test(url)
    ? url.replace(/^https?:\/\//i, (match: string) => match.toLowerCase())
    : `http://${url}`;
};

const Link: React.FC<LinkProps> = ({ className, href, shortenHref }) => {
  const _href = useMemo(() => {
    try {
      return shortenHref
        ? getDisplayURL(href as string)
        : removeProtcol(href as string);
    } catch (e) {
      return href;
    }
  }, [href]);

  return (
    <a
      className={className}
      href={normalizeURL(href as string)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {_href}
    </a>
  );
};

export default Link;
