# hive-slug

The following options exist:

```
{
    removeTrailingSpaces: true,
    remove: /[^0-9A-Za-z\-\+\_]+/g,
    replacement: '-',
    lower: true
}
```

## Usage

```
const slug = require('hive-slug');

slug(' Hello World '); // output: hello-world
slug(' Hello World ', { replacement: '_ '}); // output: hello_world
```

## Options

### Replacement

You can pass in any string of your choice. Trailing hyphens and underscores will be removed.

### Remove trailing spaces

If you don't want trailing spaces to be removed, you can pass `removeTrailingSpaces: false` in the options object

### `Remove`

By default, all characters that are not alphanumeric, underscores and hyphens
