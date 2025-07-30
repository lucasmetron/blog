import clsx from 'clsx';

export default function Home() {
  return (
    <div
      className={clsx(
        'bg-amber-300',
        'text-black',
        'hover:bg-white',
        'hover:text-red-500',
        'transition',
        'duration-500',
      )}
    >
      index
    </div>
  );
}
