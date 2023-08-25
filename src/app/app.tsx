import { useEffect, useRef } from 'react';

export function App() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleDragEvent = (event: DragEvent) => {
      const eventData = {
        type: event.type,
      };

      window.parent.postMessage({ ...eventData }, '*');
    };

    const element = ref.current as HTMLDivElement;
    element.addEventListener('dragstart', handleDragEvent);
    element.addEventListener('dragend', handleDragEvent);

    return () => {
      element.removeEventListener('dragstart', handleDragEvent);
      element.removeEventListener('dragend', handleDragEvent);
    };
  }, []);

  return (
    <div>
      <div draggable ref={ref} style={{ backgroundColor: 'lightblue' }}>
        Draggable Panel Header
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolore
        quidem molestias, voluptatum officia officiis, ex sit odit a laudantium
        ipsa. Iure nam saepe, corrupti dolore architecto soluta iusto accusamus!
      </div>
    </div>
  );
}

export default App;
