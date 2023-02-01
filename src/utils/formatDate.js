export default function (timetamp, showTime = false) {
  const date = new Date(+timetamp);
  const month = (date.getMonth() + 1)
    .toString()
    .padStart(2, "0");
  const day = date.getDate()
    .toString()
    .padStart(2, "0");
  let time = `${date.getFullYear()}-${month}-${day}`;
  if (showTime) {
    const hour = date.getHours()
      .toString()
      .padStart(2, "0");
    const min = date.getMinutes()
      .toString()
      .padStart(2, "0");
    const sec = date.getSeconds()
      .toString()
      .padStart(2, "0");
    time += ` ${hour}:${min}:${sec}`
  }
  return time;
}