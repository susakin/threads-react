import React from 'react';
import cs from 'classnames';
import xss from 'xss';
import Linkify from 'linkify-react';
import 'linkify-plugin-mention';
import './hashtag';
import Username from '../Username';
import styles from './index.module.less';
import { Link } from '@components/index';
import { Link as RouterLink } from 'react-router-dom';
import { TextEntity } from '@typings/index';

type LinkifyTextProps = {
  text?: string;
  className?: string;
  textEntities?: TextEntity[];
};

const classNamePrefix = 'linkify-text';

const LinkifyText: React.FC<LinkifyTextProps> = ({
  text,
  className,
  textEntities,
}) => {
  const options = {
    rel: 'nofollow noreferrer noopener',
    defaultProtocol: 'https',
    target: '_blank',
    render: {
      mention({ content }: any) {
        return (
          <Username
            username={content as string}
            hasVerified={false}
            className={styles[`${classNamePrefix}-username`]}
          />
        );
      },
      url({ content }: any) {
        return <Link href={xss(content)} shortenHref />;
      },
      hashtag(data: any) {
        const { content } = data;
        return (
          <RouterLink
            to={`/search?serp_type=tag&q=${`${content}`?.substring(1)}`}
            onClick={e => {
              e.stopPropagation();
            }}
          >
            {content}
          </RouterLink>
        );
      },
    },
    validate(value: any, type: string, token: any) {
      if (
        type === 'hashtag' &&
        textEntities?.some(
          tag => tag.displayText === value && tag.offset === token?.tk?.[0]?.s,
        )
      ) {
        return true;
      }
      return type === 'url' || type === 'mention';
    },
  };

  return (
    <Linkify
      as="div"
      options={options}
      className={cs(styles[`${classNamePrefix}`], className)}
    >
      {text}
    </Linkify>
  );
};

export default LinkifyText;
