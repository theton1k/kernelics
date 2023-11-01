export const dateToHumanFormat = (date: Date) => {
  return Intl.DateTimeFormat('en-us', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);
};
