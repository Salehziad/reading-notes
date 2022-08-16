# Advanced State with Reducers

## Review, Research, and Discussion

1- How can we ensure that an effect hook runs only once?

  React has a built-in hook called useEffect. Hooks are used in function components. The Class component comparison to useEffect are the methods componentDidMount , componentDidUpdate .

2- Can useState() update more than one state variable at the same time?

  we could do one setState call and there will only be one render. Unlike the setState in class components, the setState returned from useState doesn’t merge objects with existing state, it replaces the object entirely.

3- Is useState() synchronous?

  No, it is asynchronous.

## Document the following Vocabulary Terms

- **State Hook** is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components.

- **Component Lifecycle** is the series of methods that are invoked in different stages of the component’s existence.

## Preparation Materials

### useReducer hook

  An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)

  useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

### Ultimate Guide to useReducer

  useReducer is one of the additional Hooks that shipped with React 16.8. An alternative to the useState Hook, it helps you manage complex state logic in React applications. When combined with other Hooks like useContext, useReducer can be a good alternative to Redux or MobX — indeed, it can sometimes be an outright better option.

  This is not to knock Redux and MobX, as they are usually the best options to manage global state in large React applications. But more often than necessary, many React developers jump into these third-party state management libraries when they could have effectively handled their state with Hooks.

  Coupled with the complexity of getting started with a third-party library like Redux and the amount of boilerplate code needed, managing state with React Hooks and the Context API is quite an appealing option since there’s no need to install an external package or add a bunch of files and folders to manage global state in our application.

  But the golden rule still remains: component state for component state, Redux for application state.
  

  
- [https://medium.com/the-guild/under-the-hood-of-reacts-hooks-system-eb59638c9dba](https://medium.com/the-guild/under-the-hood-of-reacts-hooks-system-eb59638c9dba)

- [https://react-bootstrap.github.io/components/navbar/](https://react-bootstrap.github.io/components/navbar/)

- [https://reactrouter.com/web/guides/quick-start](https://reactrouter.com/web/guides/quick-start)