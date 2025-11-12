# MyButton Component

A simple React component that displays a button and uses a declarative approach to handle the click event.  
When the user clicks the button, the message "Clicked" is logged in the console.

# React Multiple Event Handlers Example

This component shows how to use multiple event handlers on a single input element in React.  
The `onChange` handler logs a message when the input value changes,  
and the `onBlur` handler logs a message when the input loses focus.

# MyList Component with Immutable Reverse

This React component displays a list of items and includes a button to reverse the order of the list.  
The reversal is done immutably by creating a copy of the array with the spread operator before applying `.reverse()`.  
This approach ensures React correctly detects state changes and updates the UI efficiently.