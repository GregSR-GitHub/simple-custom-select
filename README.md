# Simple custom select

A simple react custom select.

## Install

You can install this component with this command:
```
npm install @greg-dev/simple-custom-select
```

## Use

This component use 3 props.

```
<SimpleCustomSelect options={optionArray} name="name(string)" setState={function}" />
```

### `options` (required)

You need to add an array with the list of options.\
Each option can be a string "option A" or an object {name: "option A", value: "Cat"}.\
Object must always have name and value propriety.

### `name`  (required)

ID and name of the select (`<button>`).\
You will be able to customize the select via those classes:\
For the wrapper `<div>` :
```
{name}-wrapper
```
For `<button>` :
```
{name}-button
```
For `<ul>` :
```
{name}-list
```
For `<li>` :
```
{name}-option
```

### `setState`

By default you can get the select value via the DOM. You can also use React useState via this option.