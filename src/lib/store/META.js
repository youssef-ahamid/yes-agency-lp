import { writable } from 'svelte/store';

export const pageColor = writable('tertiary');

export const loaded = writable(false);
