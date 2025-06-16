export const formatTelephone = (telephone: string) => {
    return telephone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };