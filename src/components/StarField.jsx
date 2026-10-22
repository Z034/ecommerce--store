import { useMemo } from "react";

function StarField() {
  const stars = useMemo(
    () =>
      Array.from({ length: 90 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 5,
        delay: Math.random() * 5,
        dur: 2 + Math.random() * 4,
        warm: Math.random() > 0.35,
      })),
    []
  );

  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((s, i) => (
        <span
          key={i}
          className={s.warm ? "star warm" : "star"}
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
          }}
        />
      ))}
    </div>
  );
}

export default StarField;