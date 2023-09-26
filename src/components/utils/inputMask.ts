export function dateMask(date: string) {
  const value = date.replace(/\D/g, "");

  const regex = /^(\d{1,2})(\d{0,2})(\d{0,4})$/;

  const formattedDate = value.replace(regex, "$1/$2/$3");
  return formattedDate;
}
