import { writable } from 'svelte/store';
import { StringTest } from "$lib/models/StringTest.js";

export const writableArray = writable([{type:"String",value:new StringTest(1, 10)}]);

export const testsNumber = writable(1);