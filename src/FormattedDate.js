function getOrdinalSuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

function FormattedDate({ date }) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateObject = new Date(date);
  const day = dateObject.getDate();
  const month = dateObject.toLocaleString('default', { month: 'long' });
  const year = dateObject.getFullYear();
  const ordinalSuffix = getOrdinalSuffix(day);

  return (
    <span>
      {`${day}${ordinalSuffix} ${month} ${year}`}
    </span>
  );
}

export default FormattedDate;
