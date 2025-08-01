import Button from '@/components/Button';
import clsx from 'clsx';

export default function Home() {
  console.log('✌️Home --->');
  return (
    <div
      className={clsx(
        'bg-amber-300',
        'text-black',
        'hover:bg-white',
        'hover:text-red-500',
        'transition',
        'duration-500',
        'flex',
      )}
    >
      index
      <Button />
    </div>
  );
}
