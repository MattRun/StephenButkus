'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  text: string;
}

export default function TypewriterDescription({ text }: Props) {
  const [displayed, setDisplayed] = useState('');
  const index = useRef(0);
  const interval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setDisplayed('');
    index.current = 0;

    if (interval.current) clearInterval(interval.current);

    interval.current = setInterval(() => {
      setDisplayed((prev) => prev + text[index.current]);
      index.current += 1;

      if (index.current >= text.length) {
        if (interval.current) clearInterval(interval.current);
      }
    }, 40); // Speed of typing (lower = faster)

    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, [text]);

  return (
    <p className="whitespace-pre-line text-sm text-gray-800 leading-relaxed mt-2">
      {displayed}
      <span className="animate-pulse text-gray-400">|</span>
    </p>
  );
}
