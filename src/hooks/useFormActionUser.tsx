import { UseFormReturn } from 'react-hook-form';
import { UserSchema } from '../schemas/user.schema';

export interface FieldUser {
  label: string;
  name: keyof UserSchema; 
  type?: string; 
  isNumericOnly?: boolean;
  allowDecimal?: boolean;
}

export const useFormActionUser = (form: UseFormReturn<UserSchema>) => {
  const { errors } = form.formState;

  const fieldsToRender: FieldUser[] = [
    {
      label: 'Nome',
      name: 'name',
      type: 'text',
    },
    {
      label: 'E-mail',
      name: 'email',
      type: 'email',
    },
    {
      label: 'Telefone',
      name: 'telephone',
      type: 'tel',
    },
    {
      label: 'Cargo',
      name: 'role',
      type: 'text',
    },
    {
      label: 'Idade',
      name: 'age',
      type: 'number',
      isNumericOnly: true,
      allowDecimal: false,
    },
    {
      label: 'Salário',
      name: 'salary',
      type: 'text',
      isNumericOnly: true,
      allowDecimal: true,
    },
  ];

  return { fieldsToRender, errors };
};