export type Character = {
    id: number;
    isAlive: boolean;
    message: string;
    name: string;
    family: string;
    age: number;
    reignYears?: number;
    weapon?: string;
    skillLevel?: number;
    adviseTo?: Character;
    serveLevel?: number;
    servesTo?: Character;
    category: 'king' | 'fighter' | 'adviser' | 'squire';
};
