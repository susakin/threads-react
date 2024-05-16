import React, { useState } from 'react';
import Toolbar from './Toolbar';
import styles from './index.module.less';
import { useHeaderHeightStyle } from '@hooks/useHeaderHeightStyle';
import ActivityPanes from './ActivityPanes';
import { PageContainer } from '@pages/components';
import { useEventEmitter } from 'ahooks';
import { useTitle } from '@hooks/useTitle';

const classNamePrefix = 'activity';

const Activity: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('');
  const style = useHeaderHeightStyle();
  const tabEmitter = useEventEmitter<string | undefined>();

  const { setTitle } = useTitle();

  setTitle('动态 • Threads');

  return (
    <div className={styles[`${classNamePrefix}`]} style={style}>
      <Toolbar
        emitter={tabEmitter}
        onChange={key => {
          setActiveTab(key);
        }}
      />
      <PageContainer hasTop={false}>
        <ActivityPanes activePath={activeTab} emitter={tabEmitter} />
      </PageContainer>
    </div>
  );
};

export default Activity;
