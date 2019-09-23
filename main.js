import { writable as svelteWritable } from 'svelte/store';
import Redux from './redux';

export function writable(object) {
  Redux.store.dispatch(Redux.updateStore(object));

  return svelteWritable(object);
}