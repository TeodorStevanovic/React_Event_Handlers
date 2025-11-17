# React Event Handler Example

This component shows a simple event handler in React.
A function is triggered when the button is clicked, logging "Checked." to the console.
The text placed between <MyButton>...</MyButton> is rendered inside the button using props.children.

# React Multiple Event Handlers Example

This component shows how to use multiple event handlers on a single input element in React.  
The `onChange` handler logs a message when the input value changes,  
and the `onBlur` handler logs a message when the input loses focus.

# Mylist Component

## Description

`Mylist` is a React functional component that receives an array of objects as a prop called `items`. Each object in the array should have the properties `id` and `name`.

The component renders a dynamic list (`<ul>`) where each list item (`<li>`) displays the `name` of the object and has a unique React `key` based on the `id`.

Each list item also has a click event handler (`onClick`) that, when clicked, finds the corresponding object by `id` and logs its name to the console.

## Usage

```jsx
const items = [
  { id: 0, name: "First" },
  { id: 1, name: "Second" },
  { id: 2, name: "Third" },
];

<Mylist items={items} />;
```
