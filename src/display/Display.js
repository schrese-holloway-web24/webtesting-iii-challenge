import React from 'react';

const Display = ({ closed, locked }) => {
  const closedClass = `led ${closed ? 'red-led' : 'green-led'}`;
  const lockedClass = `led ${locked ? 'red-led' : 'green-led'}`;
  console.log(Display.defaultProps)
  return (
    <div className="display panel">
      <div data-testid = 'locker' className={lockedClass}>{locked ? 'Locked' : 'Unlocked'}</div>
      <div data-testid = 'opener' className={closedClass}>{closed ? 'Closed' : 'Open'}</div>
    </div>
  );
};

Display.defaultProps = {
  closed: false,
  locked: false,
};

//JUST MY OWN NOTES FOR FUTURE REFERENCE: 

//My Question: Why are we using "Display.defaultProps" and what is it doing? If it's commented out, everything behaves the same way, but i'm confused about why it's there and why it's not called anywhere? 

//The Answers: 
//Brianna: It allows the component to have access to props for conditional rendering if those props were not accessible so the component doesn't break. 

//Me: Ahh, so it's basically a backup? How does it get called, though? I'm not seeing anywhere in this app where it gets called (even conditionally)

//Kevin: Yes, it's just at way of passing default values for props. It's handy for testing, so you can do something like "render(<Component />)" without having to send explicit props. It's not really called anywhere, they're just defined 

//Brianna: https://blog.bitsrc.io/understanding-react-default-props-5c50401ed37d 

//Kevin: Any React component (ie. a function that returns JSX, or a class component) will have a property called "defaultProps", and if you don't explicitly define the props, all of them are set to undefined until you pass props from a parent

export default Display;
