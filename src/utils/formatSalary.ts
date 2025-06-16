export const formatSalary = (salary: number | string) => {
  let numericSalary: number;

  if (typeof salary === 'string') {
    const sanitized = salary.replace(/[^\d,]/g, '').replace(',', '.');
    numericSalary = parseFloat(sanitized);
  } else {
    numericSalary = salary;
  }

  if (isNaN(numericSalary)) return 'Invalid value';

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(numericSalary);
};
