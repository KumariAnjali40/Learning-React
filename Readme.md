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




