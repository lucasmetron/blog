export function formatDate(
  isoString: string,
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
