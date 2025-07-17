import { useEffect, useState } from 'react';

const colorMap: Record<string, string> = {
  red: 'text-red-500',
  blue: 'text-blue-500',
  green: 'text-green-500',
  yellow: 'text-yellow-500',
  white: 'text-white',
};
interface TypingEffectProps {
  text: string;
  speed?: number;
  startAt?: number;
  clearAfter?: number;
  color?: keyof typeof colorMap
}

const TypingEffect = ({
  text,
  speed = 0.1,
  startAt = 0,
  clearAfter = 1,
  color = "white"
}: TypingEffectProps): JSX.Element => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let isMounted = true;
    let timeoutId: any;

    const runEffect = async () => {
      await new Promise(resolve => {
        timeoutId = setTimeout(resolve, startAt * 1000);
      });
      if (!isMounted) return;
      for (const char of text) {
        if (!isMounted) return;
        setDisplayedText(prev => prev + char);
        await new Promise(resolve => {
          timeoutId = setTimeout(resolve, speed * 1000);
        });
      }
      await new Promise(resolve => {
        timeoutId = setTimeout(resolve, clearAfter * 1000);
      });
      if (!isMounted) return;
      setDisplayedText('');
    };

    runEffect().catch(console.error);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [text, speed, startAt, clearAfter]);

  return (
    <div className="absolute text-center">
      <div className={`${colorMap[color] ?? 'text-white'} text-[30px] font-minecraft`}>{displayedText}</div>
    </div>
  );
};

export default TypingEffect;