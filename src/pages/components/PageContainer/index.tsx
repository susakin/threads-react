import React from 'react';
import cs from 'classnames';
import styles from './index.module.less';
import LoadingContainer from '../LoadingContainer';
import { useHeaderHeightStyle } from '@hooks/useHeaderHeightStyle';

type PageContainerProps = {
  children?: React.ReactNode;
  loading?: boolean;
  hasTop?: boolean;
  className?: string;
};

const classNamePrefix = 'page-container';

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  loading,
  hasTop = true,
  className,
}) => {
  const style = useHeaderHeightStyle();
  return (
    <LoadingContainer
      className={cs(
        styles[`${classNamePrefix}`],
        {
          [styles[`${classNamePrefix}-has-top`]]: hasTop,
        },
        className,
      )}
      loading={loading}
      style={hasTop ? (style as any) : undefined}
    >
      {children}
    </LoadingContainer>
  );
};

export default PageContainer;
