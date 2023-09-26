export function dateMask(date: string) {
  const value = date.replace(/\D/g, "");

  const dateRegex = /^(\d{1,2})(\d{0,2})(\d{0,4})$/;

  const formattedDate = value.replace(dateRegex, "$1/$2/$3");
  return formattedDate;
}

export function hourMask(hour: string) {
  const value = hour.replace(/\D/g, "");

  const hourRegex = /^([0-1]?[0-9]|2[0-3])([0-5][0-9]$)/;

  const formattedHour = value.replace(hourRegex, "$1:$2");
  return formattedHour;
}

