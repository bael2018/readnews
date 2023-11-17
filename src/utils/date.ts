export const fullDate = (date: string) => {
  const currentDate = new Date(date)

  const day = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const hours = currentDate.getHours()
  const minutes = currentDate.getMinutes()
  
  return {
    date: `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year}`,
    time: `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`
  };
}