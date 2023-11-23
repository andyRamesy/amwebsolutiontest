/** validateNewPatienForm check if all form are filled properly
 * return boolean 
 * 
 */

export const validateNewPatienForm = ({
  firstName,
  lastName,
  email,
  phon,
  address,
}: any): boolean => {
  const isFirstValid = validateFirstName(firstName);
  const isLastValid = validateLast(lastName);
  const isEmailValid = validateEmail(email);
  const isPhonValid = validatePhon(phon);
  const isAddressValid = validateAddress(address);

  return (
    isFirstValid && isLastValid && isEmailValid && isPhonValid && isAddressValid
  );
};

const validateFirstName = (firstName: string): boolean => {
  return firstName?.length >= 3;
};
const validateLast = (lastName: string): boolean => {
  return lastName?.length >= 3;
};
const validateEmail = (email: string): boolean => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};
const validatePhon = (phon: string): boolean => {
  return phon?.length >= 10;
};
const validateAddress = (address: object): boolean => {
  return Object.keys(address).length !== 0;
};
