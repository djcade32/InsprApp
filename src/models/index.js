// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AllQuotes, Quote, User } = initSchema(schema);

export {
  AllQuotes,
  Quote,
  User
};