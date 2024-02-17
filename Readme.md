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

 - npm create vite@lates  my-react-app --template



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