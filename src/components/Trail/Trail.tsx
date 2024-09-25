import React, { ReactNode } from 'react';
import { useTrail, a } from '@react-spring/web';

const Trail: React.FC<{
  open: boolean;
  className?: string;
  height: number | string;
  delay?: number;
  children: ReactNode;
}> = ({
  open,
  className,
  height,
  delay,
  children
}) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 2000, friction: 200 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      y: open ? 0 : -20,
      height: open ? height : 0,
      from: { opacity: 0, x: 20, y: -20, height: 0 },
      delay: delay
    });
    return (
      <div className={className}>
        {trail.map(({ height, ...style }, index) => (
          <a.div
            key={index}
            className="trailsText"
            style={style}>
            <a.div
              style={{ height }}
            >{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    );
  };

export default Trail;
