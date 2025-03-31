
export type Character =   {
    "isAlive":boolean,
    "message": string,
    "name": string,
    "family": string,
    "age": number,
    "reignYears": number,
    "reignYear"?: number,
    "weapon"?: string,
    "skillLevel"?: number,
    "adviseTo"?: Character
    "serveLevel"?: number,
    "servesTo"?: Character,
    "category": "king"|"queen"|"fighter"|"adviser"|"squire",
  }