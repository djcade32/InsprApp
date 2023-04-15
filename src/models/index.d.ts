import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerAllQuotes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AllQuotes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Quotes?: (Quote | null)[] | null;
  readonly User?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly allQuotesUserId?: string | null;
}

type LazyAllQuotes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AllQuotes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Quotes: AsyncCollection<Quote>;
  readonly User: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly allQuotesUserId?: string | null;
}

export declare type AllQuotes = LazyLoading extends LazyLoadingDisabled ? EagerAllQuotes : LazyAllQuotes

export declare const AllQuotes: (new (init: ModelInit<AllQuotes>) => AllQuotes) & {
  copyOf(source: AllQuotes, mutator: (draft: MutableModel<AllQuotes>) => MutableModel<AllQuotes> | void): AllQuotes;
}

type EagerQuote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Quote, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly quote: string;
  readonly author?: string | null;
  readonly category: string;
  readonly userID: string;
  readonly User?: User | null;
  readonly allquotesID: string;
  readonly favorite: boolean;
  readonly updatedAt?: string | null;
}

type LazyQuote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Quote, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly quote: string;
  readonly author?: string | null;
  readonly category: string;
  readonly userID: string;
  readonly User: AsyncItem<User | undefined>;
  readonly allquotesID: string;
  readonly favorite: boolean;
  readonly updatedAt?: string | null;
}

export declare type Quote = LazyLoading extends LazyLoadingDisabled ? EagerQuote : LazyQuote

export declare const Quote: (new (init: ModelInit<Quote>) => Quote) & {
  copyOf(source: Quote, mutator: (draft: MutableModel<Quote>) => MutableModel<Quote> | void): Quote;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly Quotes?: (Quote | null)[] | null;
  readonly categories?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly Quotes: AsyncCollection<Quote>;
  readonly categories?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}