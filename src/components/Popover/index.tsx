import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Wrapper } from './Wrapper';
import { UseFloatingOptions } from '@floating-ui/react';
import { Placement } from '@floating-ui/react';

import {
  useFloating,
  useHover,
  useClick,
  useInteractions,
  FloatingPortal,
  shift,
  flip,
  autoUpdate,
  offset,
  useDismiss,
  safePolygon,
  useFocus,
  useRole,
  hide,
} from '@floating-ui/react';

export type PopoverProps = {
  children?: React.ReactElement;
  content?: ((placement: Placement) => React.ReactNode) | React.ReactNode;
  trigger?: 'click' | 'hover';
  strategy?: 'fixed' | 'absolute';
  openDelay?: number;
  offset?: number;
  enabled?: boolean;
  onOpenChange?: (open: boolean) => void;
  hideWhenContentClick?: boolean;
  floatingStyle?: React.CSSProperties;
} & Pick<UseFloatingOptions, 'placement'>;

const Popover: React.FC<PopoverProps> = ({
  children,
  trigger = 'click',
  openDelay = 0,
  strategy = 'absolute',
  enabled = true,
  onOpenChange,
  hideWhenContentClick,
  ...rest
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const wrapperRef = useRef<Wrapper>(null);
  const isTriggerClick = trigger === 'click';

  useEffect(() => {
    onOpenChange?.(open);
  }, [open]);

  const { placement, refs, floatingStyles, context, middlewareData } =
    useFloating({
      placement: rest.placement,
      strategy,
      open,
      onOpenChange(open) {
        setOpen(open);
      },
      whileElementsMounted: autoUpdate,
      middleware: [hide(), shift(), flip(), offset(rest.offset)],
    });

  const content = useMemo(() => {
    if (typeof rest.content === 'function') {
      return rest.content(placement);
    } else {
      return rest.content;
    }
  }, [placement, rest.content]);

  const focus = useFocus(context);

  const click = useClick(context, {
    enabled: isTriggerClick && enabled,
  });

  const role = useRole(context);

  const hover = useHover(context, {
    delay: {
      open: openDelay,
    },
    enabled: !isTriggerClick && enabled,
    handleClose: safePolygon(),
  });
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    hover,
    dismiss,
    focus,
    role,
  ]);

  useEffect(() => {
    refs.setReference(wrapperRef?.current?.element as any);
  }, []);

  return (
    <>
      <Wrapper ref={wrapperRef} {...getReferenceProps()}>
        {children}
      </Wrapper>
      {open && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={{
              zIndex: 1,
              visibility: middlewareData.hide?.referenceHidden
                ? 'hidden'
                : 'visible',
              outline: 'none',
              ...floatingStyles,
              ...rest.floatingStyle,
            }}
            {...getFloatingProps()}
            onClick={
              hideWhenContentClick
                ? () => {
                    setOpen(false);
                  }
                : undefined
            }
          >
            {content}
          </div>
        </FloatingPortal>
      )}
    </>
  );
};

export default Popover;
