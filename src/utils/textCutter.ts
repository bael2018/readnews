export const textCutter = (str: string, amount: number): string => {
  return str.length < amount ? str : str.split('').slice(0, amount).join('') + ' ...'
} 