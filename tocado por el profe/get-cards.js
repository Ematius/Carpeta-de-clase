import { createCard } from "./cards";
import { getCharactersFromBackend } from "./get-card-api";

export function loadCards() {
    const CARDS = getCharactersFromBackend();

    CARDS.forEach(card => createCard(card))

    return CARDS
}