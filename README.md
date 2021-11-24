# CxJS CodeMirror

  

<!-- #### Chout out out [Demo](https://angry-kirch-e6040c.netlify.app/dashboard) -->

  

<!-- Text Field component that allows you to add a custom mask on it. **_You need to bind the value to the store!_**

  

## Install

  

Mask Input Field can be installed with both Yarn and NPM:

  

`yarn add cx-mask-input-field`

  

`npm install cx-mask-input-field`

### You need to change the following loder in webpack.config.js:
  ```jsx
rules: [
	{
		test: /\.js$/,
		include: [p('common'), p('app'), /packages[\\\/]cx/, /node_modules[\\\/](cx|cx-react|cx-theme-\w*|cx-google-maps)[\\\/]/,
		use: { loader:  'babel-loader', options:  babelCfg },
	}
	...
```

Into: 

  ```jsx
{
	test: /\.js$/,
	include: [p('common'), p('app'), /packages[\\\/]cx/, /node_modules[\\\/](cx|cx-.+)[\\\/]/,],
	use: { loader:  'babel-loader', options:  babelCfg },
}
...
```
## Properties

  

#### `mask` : `string`

  

Mask string. Default format characters are:<br/>

  

`9`: `0-9`<br/>

  

`a`: `A-Z, a-z`<br/>

  

`*`: `A-Z, a-z, 0-9`

  

Any character can be escaped with a backslash. It will appear as a double backslash in JS strings. For example, a German phone mask with unremoveable prefix +49 will look like

  

```jsx

<MaskInputField  value-bind="data"  mask="+4\\9 99 999 99"  />;

<MaskInputField  value-bind="data"  mask={'+4\\\\9 99 999 99'}  />;

```

  

### `maskPlaceholder` : `string`

  

Character to cover unfilled parts of the mask. Default character is "\_". If set to null or empty string, unfilled parts will be empty as in ordinary input.

  

## Packages and Libraries

  

### react-input-mask

  

Component is based on [react-input-mask](https://www.npmjs.com/package/react-input-mask) component, which is wrapped in CxJS Widget. This makes it functional out-of-the-box, once you have bind value in the store.

  

## Example

  

```jsx

import { MaskInputField } from 'cx-mask-input-field';

<MaskInputField value-bind="data" mask="99.99.99.99" maskPlaceholder="_" />;

```

  

## License

  

This component is available under the terms of [the MIT license](LICENSE.md). -->