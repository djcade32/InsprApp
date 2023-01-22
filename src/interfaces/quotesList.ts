export interface IQuotesList {
  data: IQuote[];
  color?: string;
}

export interface IQuote {
  item: {
    key: string;
    author?: string;
    text: string;
    category: string;
    favorite: boolean;
  };
  color?: string;
}
