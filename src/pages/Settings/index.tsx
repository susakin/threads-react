import React, { useEffect, useState } from 'react';
import styles from './index.module.less';
import { PageContainer } from '@pages/components';
import { useParams, useNavigate } from 'react-router-dom';
import Tabs from '@components/Tabs';
import Privacy from './Privacy';
import Account from './Account';

const classNamePrefix = 'settings';

type Params = {
  action: string;
};

const Settings: React.FC = () => {
  const { action } = useParams<Params>();
  const navigate = useNavigate();
  const settingsType = ['privacy', 'account'];
  const [activeKey, setActiveKey] = useState<string>();
  useEffect(() => {
    if (!settingsType.includes(action as string)) {
      navigate(`/settings/privacy`, { replace: true });
      setActiveKey('privacy');
    } else {
      setActiveKey(action);
    }
  }, []);

  function changeUrl(key: string) {
    setActiveKey(key);
    navigate(`/settings/${key}`, { replace: true });
  }

  return (
    <PageContainer>
      <div className={styles[`${classNamePrefix}`]}>
        <div className={styles[`${classNamePrefix}-title`]}>设置</div>
        <Tabs
          activeKey={activeKey}
          onChange={key => {
            changeUrl(key);
          }}
        >
          <Tabs.Tab title="隐私" key="privacy">
            <Privacy />
          </Tabs.Tab>
          <Tabs.Tab title="账户" key="account">
            <Account />
          </Tabs.Tab>
        </Tabs>
      </div>
    </PageContainer>
  );
};

export default Settings;
