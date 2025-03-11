export type Category = 'king' | 'fighter' | 'adviser' | 'squire'

export type Char = {
  isAlive: boolean;
  message: string;
  name: string;
  family: string;
  age: number;
  category: Category;
  reignYears?: number;
  weapon?: string;
  skillLevel?: number;
  adviseTo?: Char;
  serveLevel?: number;
  servesTo?: Char;
};
