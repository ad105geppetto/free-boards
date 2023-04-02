export function getDate() {
  const date = new Date();
  const yyyy = date.getFullYear();
  const month = date.getMonth() + 1;
  const mm = month >= 10 ? month : `0${month}`;
  const day = date.getDate();
  const dd = day >= 10 ? day : `0${day}`;
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return `${yyyy}.${mm}.${dd}. ${hour}:${minutes}`;
}
