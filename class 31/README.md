# Context API:
> The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.

### - Describe use cases useState() vs useReducer()?

> useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--1ICd6TAL--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/k0z9r0fyhojaytokogf2.JPG)


### - Why do custom hooks need the use prefix?

> This is mainly to have an extra option for sharing state and logic between components. ... Custom hooks are normal JS functions, named with the prefix 'use', that can use hooks inside of it and contain a common stateful logic to be reused in other components.

### - What do custom hooks usually do?

> Custom hooks allow us to have cleaner functional components, remove logic from the UI layer, and prevent code duplication by bringing common use cases to reusable hooks. 
![](https://res.cloudinary.com/practicaldev/image/fetch/s--B8Z7hRuP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/rr3mrbjgm2bp16815gw6.png)

### - Using any list of custom hooks, research and name one that you think will be useful in your applications? 
> Custom React Hooks allow us to extract component logic into reusable functions. Custom Hooks look very much like normal helper functions, except they can maintain component state and perform effects. ... So if you find yourself using a lot of these Hooks, you might as well import the package.

### - Describe how a hook that fetches API data might work ? 
> Put the fetchData function above in the useEffect hook and call it, like so: useEffect(() => { const url = "https://api.adviceslip.com/advice"; const fetchData = async () => { try { const response = await fetch(url); const json = await response. json(); console. log(json); } catch (error) { console.


![](https://miro.medium.com/max/1400/1*l1aSQHON7q1zpHY2mY6VCg.png)

## Document the following Vocabulary Terms

**reducer** :
> The concept of a Reducer became popular in JavaScript with the rise of Redux as state management solution for React. ... Basically reducers are there to manage state in an application. For instance, if a user writes something in an HTML input field, the application has to manage this UI state (e.g. controlled components).
