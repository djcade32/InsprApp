import React, {useMemo} from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  ApolloLink,
  createHttpLink,
} from '@apollo/client';
import {createAuthLink, AuthOptions, AUTH_TYPE} from 'aws-appsync-auth-link';
import {createSubscriptionHandshakeLink} from 'aws-appsync-subscription-link';
import config from '../aws-exports';
import {useAuthContext} from '../contexts/AuthContext';

interface IClient {
  children: React.ReactNode;
}

const url = config.aws_appsync_graphqlEndpoint;
const region = config.aws_appsync_region;

const httpLink = createHttpLink({uri: url});

const typePolicies: TypePolicies = {
  // Query: {
  //   fields: {
  //     getUser: {
  //       merge: (existing = {}, incoming) => {
  //         return {
  //           ...existing,
  //           ...incoming,
  //           items: [...(existing.items || []), ...incoming.items],
  //         };
  //       },
  //     },

  //     // postsByDate: {
  //     //   keyArgs: ['createdAt', 'sortDirection', 'filter', 'type'],
  //     //   merge: (existing = {}, incoming) => {
  //     //     return {
  //     //       ...existing,
  //     //       ...incoming,
  //     //       items: [...(existing.items || []), ...incoming.items],
  //     //     };
  //     //   },
  //     // },
  //   },
  // },
  Query: {
    fields: {
      quotesByUserIDAndCreatedAt: {
        keyArgs: false,
        merge: true,
      },
    },
  },
};

const Client = ({children}: IClient) => {
  const {user} = useAuthContext();

  // const client = useMemo(() => {
  //   const jwtToken =
  //     user?.getSignInUserSession()?.getAccessToken().getJwtToken() || '';

  //   const auth: AuthOptions = {
  //     type: config.aws_appsync_authenticationType as AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
  //     jwtToken,
  //   };
  const auth: AuthOptions = {
    type: config.aws_appsync_authenticationType as AUTH_TYPE.API_KEY,
    apiKey: config.aws_appsync_apiKey,
  };

  const link = ApolloLink.from([
    createAuthLink({url, region, auth}),
    createSubscriptionHandshakeLink({url, region, auth}, httpLink),
  ]);
  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    // cache: new InMemoryCache({typePolicies}),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Client;
