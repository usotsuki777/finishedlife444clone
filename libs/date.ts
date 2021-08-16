// libs/date.ts

/**
 * get age from datetime
 * @param string birthday
 * @returns
 */
function getAge(birthday: string): number {
  const ageDate = new Date(Date.now() - new Date(birthday).getTime());
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export { getAge };
