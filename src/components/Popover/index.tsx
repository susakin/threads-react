import React, { useEffect, useRef, useState } from 'react';
import { Wrapper } from './Wrapper';
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
} from '@floating-ui/react';

export type PopoverProps = {
  children?: React.ReactElement;
  content?: React.ReactNode;
  trigger?: 'click' | 'hover';
  strategy?: 'fixed' | 'absolute';
  openDelay?: number;
  offset?: number;
  enabled?: boolean;
  onVisibleChange?: (open: boolean) => void;
  hideWhenContentClick?: boolean;
  placement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end';
};

const Popover: React.FC<PopoverProps> = ({
  children,
  content,
  trigger = 'click',
  openDelay = 0,
  strategy = 'absolute',
  placement,
  enabled = true,
  onVisibleChange,
  hideWhenContentClick,
  ...rest
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [transformOrigin, setTransformOrigin] = useState<string>('');
  const wrapperRef = useRef<Wrapper>(null);
  const isTriggerClick = trigger === 'click';

  useEffect(() => {
    onVisibleChange?.(open);
  }, [open]);

  const {
    placement: _placement,
    refs,
    floatingStyles,
    context,
    update,
    elements,
  } = useFloating({
    placement,
    strategy,
    open,
    onOpenChange(open) {
      setOpen(open);
    },
    whileElementsMounted: autoUpdate,
    middleware: [shift(), flip(), offset(rest.offset)],
  });

  const focus = useFocus(context);

  const click = useClick(context, {
    enabled: isTriggerClick && enabled,
  });

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
  ]);

  useEffect(() => {
    if (_placement.includes('start')) {
      setTransformOrigin('left top');
    }

    if (_placement.includes('end')) {
      setTransformOrigin('right top');
    }
  }, [_placement]);

  useEffect(() => {
    const resize = () => {
      if (elements.reference && elements.floating) {
        autoUpdate(elements.reference, elements.floating as any, update);
      }
    };
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [elements]);

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
              zIndex: 5,
              outline: 'none',
              ...floatingStyles,
              transformOrigin,
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
