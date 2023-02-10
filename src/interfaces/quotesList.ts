import {Quote} from '../API';

export interface IQuotesList {
  data: (Quote | null)[] | undefined;
  color?: string;
}

export interface IQuote {
  item: {
    author?: string | undefined | null;
    quote: string;
    category: string;
    favorite: boolean;
  } | null;
  color?: string;
  screen?: string;
}
