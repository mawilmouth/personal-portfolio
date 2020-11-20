import { ContactFormEntries } from '../../../types/helpers/components/homepage/HomepageHelpersTypes';

export function validateContactEntries(entries: ContactFormEntries): string[] {
  let errors: string[] = [];

  if (!entries.firstName) errors.push('First name must be provided.');
  if (!entries.lastName) errors.push('Last name must be provided.');
  if (!entries.email) errors.push('Email must be provided.');
  if (!entries.message) errors.push('Message must be provided.');
  
  return errors;
}