import { UserForm } from '../modules/Form/Form';

export const checkUserForm = (data: UserForm) => {
  const errorArray = [] as string[];
  const nameLength = data.name.trim().split(' ').length;

  if (nameLength !== 2) errorArray.push('Enter file name through space');
  if (!data.country) errorArray.push('Enter country');
  if (!data.agreement) errorArray.push('You should agree');
  if (!data.avatar) errorArray.push('Choose avatar');
  if (!data.gender) errorArray.push('Choose a gender');
  if (!data.birthday || isNaN(data.birthday.getTime())) {
    errorArray.push('Enter birthday data');
  }
  return errorArray;
};
