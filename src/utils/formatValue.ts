const formatValue = (value: number): string =>
  Intl.NumberFormat('in-EN', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(value)
    .replace(/^(\D+)/, '$1 ');

export default formatValue;
