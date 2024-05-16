import React from 'react';
import numberFormat from './numberFormat';

type ShortenNumberProps = {
  value: number;
};

export function shortenNumber(value: number = 0 as any) {
  return value > 9999
    ? `${numberFormat.formatLargeNumberForCJKLocale(
        value,
      )}${numberFormat.getSuffixForCJKLocale(value)}`
    : numberFormat.withThousandDelimiters(value);
}

const ShortenNumber: React.FC<ShortenNumberProps> = ({ value }) => {
  return <>{shortenNumber(value)}</>;
};

export default ShortenNumber;
