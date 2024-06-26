import React, { ReactNode } from 'react';
//@ts-ignore
import { isFragment } from 'react-is';

export function traverseReactNode(
  children: ReactNode,
  fn: (child: ReactNode, index: number) => void,
) {
  let i = 0;
  function handle(target: ReactNode) {
    React.Children.forEach(target, child => {
      if (!isFragment(child)) {
        fn(child, i);
        i += 1;
      } else {
        handle((child as any)?.props?.children);
      }
    });
  }
  handle(children);
}
