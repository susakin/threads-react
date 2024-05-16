import React from 'react';
import { findDOMNode } from 'react-dom';

export class Wrapper extends React.Component<
  {
    children?: React.ReactNode;
  },
  {
    element: Element | null;
  }
> {
  element: Element | null = null;
  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    // eslint-disable-next-line
    const node = findDOMNode(this);
    if (node instanceof Element) {
      this.element = node;
    } else {
      this.element = null;
    }
  }

  render() {
    const { children, ...rest } = this.props;
    return React.cloneElement(React.Children.only(children) as any, rest);
  }
}
