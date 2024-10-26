export const loadBackgroundImage = (): { type: string } => ({
    type: 'LOAD_BACKGROUND_IMAGE',
});

// Akcja, aby ustawić URL obrazu po załadowaniu
export const setBackgroundImageLoaded = (url: string): { type: string, payload: string } => ({
    type: 'SET_BACKGROUND_IMAGE_LOADED',
    payload: url,
});