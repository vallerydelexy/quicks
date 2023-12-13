import { useState, useMemo, useEffect } from "react";

export function useOnScreen(getTargetElement) {
  const [isIntersecting, setIntersecting] = useState(false);
  const observer = useMemo(() => new IntersectionObserver(handleIntersect), []);

  function handleIntersect(entries) {
    const entry = entries[0];
    setIntersecting(entry.isIntersecting);
  }

  useEffect(() => {
    const targetElement = getTargetElement();
    if (targetElement) {
      observer.observe(targetElement);
      return () => observer.unobserve(targetElement);
    }
  }, [observer, getTargetElement]);

  return isIntersecting;
}