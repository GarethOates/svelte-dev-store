import {Store} from 'svelte/store';
import Redux from './redux';

export default class SvelteDevStore extends Store {
    set(object) {
        super.set(object);
        Redux.store.dispatch(Redux.updateStore(object));
    }
}
