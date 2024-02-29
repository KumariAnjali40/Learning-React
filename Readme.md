** React**

# React is a library.

# Topic to learn

- core of react (state or UI manipulation , jsx)
- component Reusability.
- Reusing of Component (props)
- How to Propagate change (hooks) => UseEffect

# Addition Addon To React .
- Router (React don't have Router) => React Router DOM.
- State Management (React Don't have State Management) => Redux, Redux toolkit , Zustand , context API. (State Management)



# if installing form basic react app

 - npx create-react-app foldername.

 # if installing form vite 

 - npm create vite@latest 



# createReact

``` react

const reactElement = React.createElement(
    'a', => first parameter should be tag.
    {key:value} => second parameter should be an object.
    direct_text (children)
    variable inject 

)

<hr>

function ReactElement(type, key, ref, self, source, owner, props) {
  const element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type,
    key,
    ref,
    props,

    // Record the component responsible for creating this element.
    _owner: owner,
  };
}

```

<hr>

``` 
function App() {
  
  const username="Chunnu"


  return (
    <>
    <Anjali/>
     <p>Hello guys {username}</p>  => here we can only write evalution expression . 
    </>
  )
}


```

<hr>


** React Fiber Architecture**
- React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over two years of research by the React team.

- The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

- Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

# What is reconciliation?
- reconciliation
- The algorithm React uses to diff one tree with another to determine which parts need to be changed.
update
- A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.


- Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

**HOOKS RULES**

- Always write it inside the component or function.
- Component name must be PascalCase(first letter should be uppercase)
- We can directly import or we can directly write it using React.hookName.
- Don't call Hooks inside loops, conditions, or nested function.

** useCallback HOOK **

- useCallback is a React Hook that let's you cache a funtion defination between re-renders.

- useCallback(fn, dependencies)

** useEffect HOOK ** 

- useEffect is a hook in React, a JavaScript library for building user interfaces. It is used to perform side effects in functional components  Side effects can include data fetching, subscriptions, manually changing the DOM, and more. useEffect is the primary way to manage side effects in functional components compared to class components.

# Dependency List in UseEffect.

- In React's useEffect hook, the dependency list is an optional second argument that determines when the effect function should run. It's an array of values that the effect depends on. The effect will only re-run if any of the values in the dependency list change between renders. If the dependency list is omitted, the effect runs after every render.

``` react 


  import React, { useEffect } from 'react';

function MyComponent(props) {
  useEffect(() => {
    // Effect code here
    // This code will run after the initial render and after every re-render
    // if any value in the dependency list changes.

    return () => {
      // Cleanup code here
      // This code will run when the component is unmounted or before the next effect runs.
    };
  }, [/*dependencies*/]);

  return (
    // JSX for the component
  );
}


``` 

# Why Dependency List is Important 


- 1. Preventing Unnecessary Re-renders:

- By specifying dependencies, you can avoid unnecessary re-execution of the effect function when certain values haven't changed. This can lead to better performance.

- 2. Avoiding Stale Closures:

- When using variables or props inside the useEffect function, React captures them in a closure. If these variables change and are not part of the dependency list, the effect will use stale values. Including them in the dependency list ensures the effect always has access to the latest values.


# example 1 
- No Dependancy List..

``` react 

 useEffect(() => {
  console.log('Effect ran');
  // This effect runs after every render
});

``` 
# example 2
- Empty Dependency List:

```

useEffect(() => {
  console.log('Effect ran');
  // This effect runs once after the initial render
}, []);

``` 

# example -3 

- Dependency List with a Variable:

```
  useEffect(() => {
  console.log('Effect ran with count:', count);
  // This effect runs if the 'count' variable changes
  }, [count]);


```


# example -4 
- Dependency List with Multiple Variables:

```
  useEffect(() => {
  console.log('Effect ran with count and data:', count, data);
  // This effect runs if either 'count' or 'data' changes
  }, [count, data]);
  


``` 




** useRef Hook **

- 

