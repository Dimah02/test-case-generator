import { writable } from 'svelte/store';
import { IntegerTest } from "$lib/models/IntegerTest.js";

export const writableArray = writable([{type:"Integer",value:new IntegerTest(1, 10)}]);

export const testsNumber = writable(1);