export const pluralize = (i, singular = '', plural = 's') => { return i % 2 == 0? singular:plural }