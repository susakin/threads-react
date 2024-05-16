import ReactDOM from 'react-dom';
class RenderToContainer {
  private div: HTMLElement | null = null;
  private container: HTMLElement | null = null;
  constructor() {
    this.div = null;
    this.container = document.body;
  }

  render(element: React.ReactElement, container: HTMLElement = document.body) {
    this.container = container;
    this.div = document.createElement('div');
    ReactDOM.render(element, this.div);
    this.container.appendChild(this.div);
  }

  unmount() {
    try {
      ReactDOM.unmountComponentAtNode(this.div as HTMLElement);
      this.container?.removeChild(this.div as HTMLElement);
      this.div = null;
    } catch (e) {
      console.log(e);
    }
  }
}

function renderToContainer(
  element: React.ReactElement,
  container: HTMLElement = document.body,
) {
  const render = new RenderToContainer();
  render.render(element, container);
  return render.unmount.bind(render);
}

export default renderToContainer;
