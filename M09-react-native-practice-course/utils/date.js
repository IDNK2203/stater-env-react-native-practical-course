export function getFormattedDate(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}

export function formatDateInput(input) {
  // if (typeof input !== "string" || input.length < 6) {
  //   return "Invalid input";
  // }

  const matches = input.match(/^(\d{4})([-/])(\d{1,2})([-/])(\d{1,2})$/);
  if (matches) {
    return input;
  }
  console.log(inp);
  const year = input.slice(0, 4);
  const month = input.slice(4, 6);
  const day = input.slice(6);
  const d = `${year}-${month}-${day}`;
  console.log(d);
  return d;
}
