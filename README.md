# Svelte Dev Store
[![npm](https://img.shields.io/npm/v/svelte-dev-store.svg)]()
[![npm](https://img.shields.io/npm/dm/svelte-dev-store.svg)]()

This project allows you to use the Redux Dev Tools browser plugin when working with a Svelte store instance.

To use this package in your project as you develop, you simply import this package instead
of the svelte/store and create an instance of the exported class, instead of 'Store'.

```
import SvelteDevStore from 'svelte-dev-store';

const myStore = new SvelteDevStore({name: 'Gareth'});

myStore.set({name: 'Bob'});
myStore.set({name: 'Jim'});
myStore.set({name: 'Jeff'});
```

Then when you open up the Redux dev tools, you should see 3 newState actions
and the chart should show the structure of your svelte store.

svelteDevStore has the exact same API as the actual svelte/store.  It just extends it to incorporate
sending actions to a very simple redux store, that enables you to see it in the dev tools.
