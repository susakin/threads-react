import React from 'react';
import { toolbarItems } from './Toolbar';
import { ShouldRender } from '@utils/ShouldRender';
import ActivityList from './ActivityList';
import { EventEmitter } from 'ahooks/lib/useEventEmitter';

type ActivityPanesProps = {
  activePath?: string;
  emitter?: EventEmitter<string | undefined>;
};

const ActivityPanes: React.FC<ActivityPanesProps> = ({
  activePath,
  emitter,
}) => {
  return (
    <>
      {toolbarItems.map(({ path, key }) => {
        const active = activePath === path;
        return (
          <ShouldRender key={path} active={active} forceRender={false}>
            <div style={{ display: active ? 'block' : 'none' }}>
              <ActivityList
                type={key}
                emitter={emitter}
                path={path}
                active={active}
              />
            </div>
          </ShouldRender>
        );
      })}
    </>
  );
};

export default ActivityPanes;
