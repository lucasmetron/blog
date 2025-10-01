import { toast } from 'react-toastify';
import { styleText } from 'util';

export function formatDate(
  isoString: string | number,
  includeTime: boolean = true,
): string {
  const date = new Date(isoString);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // meses começam do zero
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const formattedDate = `${day}/${month}/${year}`;
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return includeTime ? `${formattedDate} ${formattedTime}` : formattedDate;
}

export function cutString(text: string, maxLength = 30): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
}

export const canShowHeaderAndFooter = (pathname: string) => {
  const hiddenPaths = ['/login'];
  return !hiddenPaths.includes(pathname);
};

export function logColor(...msg: (string | number)[]) {
  const messages = msg
    .map(message => styleText(['bgGreen', 'whiteBright'], `${message}`))
    .join(' ');
  console.log(styleText('green', messages));
}

export async function simulateWait(
  mileseconds: number = 0,
  showConsole = false,
) {
  if (mileseconds <= 0) return;

  if (showConsole) {
    logColor(`Delay de ${mileseconds / 1000}s`);
  }

  await new Promise(resolve => {
    setTimeout(resolve, mileseconds);
  });
}

export function notify(
  message: string,
  type: 'info' | 'success' | 'warning' | 'error' | 'default' = 'default',
  position:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right' = 'top-center',
  autoClose = 2000,
) {
  toast(message, {
    type: type,
    position: position,
    autoClose: autoClose,
  });
}
