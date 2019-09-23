# Svelte Dev Store
[![npm](https://img.shields.io/npm/v/svelte-dev-store.svg)]()
[![npm](https://img.shields.io/npm/dm/svelte-dev-store.svg)]()
[![Twitter Follow](https://img.shields.io/twitter/follow/garethoates.svg?style=social&label=Follow)](https://www.twitter.com/garethoates)

This project allows you to use the Redux Dev Tools browser plugin when working with a writable svelte store instance.

To use this package in your project as you develop, you simply import this package's writable
function instead of from svelte/store and use it to create a writable store.

```
import { writeable } from 'svelte-dev-store';

export const myStore = writeable({});
```

When you open up the Redux dev tools, you should find a store is available and
the chart should show the structure of your writable store.

the writable function from svelte-dev-store has the exact same return type as the actual
svelte/store writable function.  It just extends it to incorporate sending actions to a
very simple redux store, that enables you to see it in the dev tools.
