import {Quote} from '../API';

export interface IQuotesList {
  data: (Quote | null)[] | undefined;
  color?: string;
}

export interface IQuote {
  item: Quote | null;
  color?: string;
  screen?: string;
  index: number;
}
