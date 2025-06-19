import { ReactNode } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import * as S from './styles';
import { useRouter } from 'next/navigation';
interface BackButtonProps {
  children?: ReactNode;
  to?: string;
}

export const BackButton = ({ children = 'Voltar', to }: BackButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (to) {
      router.push(to);
    } else {
      router.back();
    }
  };

  return (
    <S.BackButtonContainer onClick={handleClick}>
      <IoArrowBack size={18} />
      <span>{children}</span>
    </S.BackButtonContainer>
  );
};