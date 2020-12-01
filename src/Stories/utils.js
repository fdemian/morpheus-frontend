const LOCALSTORAGE_EDITING_KEY = "editing.story";

export const setIsEditingState = () => localStorage.setItem(LOCALSTORAGE_EDITING_KEY, true);
export const clearIsEditingState = () => localStorage.removeItem(LOCALSTORAGE_EDITING_KEY);
export const isEditing = () => localStorage.getItem(LOCALSTORAGE_EDITING_KEY) !== null;
