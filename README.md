# React Event Handler Example

This component shows a simple event handler in React.
A function is triggered when the button is clicked, logging "Checked." to the console.
The text placed between <MyButton>...</MyButton> is rendered inside the button using props.children.

# React Multiple Event Handlers Example

This component shows how to use multiple event handlers on a single input element in React.
The onChange handler logs a message when the input value changes,
and the onBlur handler logs a message when the input loses focus.
The label text is passed via props.children.

# React Generic Function and List Reversal Example

This component demonstrates using a generic reverse function imported from another file.
The reverse function reverses the order of items in the list.
Clicking the button triggers an event handler that reverses the list displayed.
The button text is passed via props.children.

# ClickableList Component

This React component renders a list of clickable items passed via the items prop.
When an item is clicked, the component finds the clicked item by its id and logs the item's name to the console.

It demonstrates how to handle click events on list elements in React.

# MultiButtonCounter Component

A simple React component that provides Like and Dislike buttons with individual counters.  
FontAwesome icons are used for clear visual representation, and each click increases the appropriate counter.

## Features

- Like and Dislike buttons
- Individual counters for each reaction
- Clean and minimal UI
- FontAwesome icons (Thumbs Up / Thumbs Down)
- Generic increment function for updating counters
- Added spacing between icons and counters for better readability

## Installation

Install FontAwesome packages:

npm install @fortawesome/react-fontawesome
npm install @fortawesome/free-solid-svg-icons

## Usage

Import and render the component:

```js
import MultiButtonCounter from "./MultiButtonCounter";

function App() {
  return <MultiButtonCounter />;
}
```

# ClickCounter Component

This React component demonstrates the use of inline event handlers with arrow functions.

## Features

- Displays a counter initialized to zero.
- "+" button increases the counter by 1 using an inline arrow function in the onClick handler.
- "Reset" button resets the counter to zero, also using an inline arrow function.
- Simple and clean example of managing state with useState and inline event handlers.

## Usage

Import and use the ClickCounter component in your React app:

```js
import ClickCounter from "./ClickCounter";

function App() {
  return <ClickCounter />;
}
```