import React , {useState} from 'react'

// Parameters are passed to the component this way.
export default ({ initialFieldValue }) => {
    // Create some state, the first returned value is the current state value and the second is a function to update it.
    // We pass an initial value to useState
    const [textValue, setTextValue] = useState(initialFieldValue);

    // A function to handle some user interation, here it's the form submission
    const handleSubmit = e => {
        alert("I'm doing something with [" + textValue + "]");
        e.preventDefault(); // Stop the default action of form submission, which is to navigate away from the page
    };

    // A function to update the state of this component when the input text changes
    const handleTextChange = e => {
        setTextValue(e.target.value);
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={textValue} onChange={handleTextChange}></input>
        <button type="submit">Do it!</button>
        <div>You've typed "{textValue}"</div>
    </form>
}