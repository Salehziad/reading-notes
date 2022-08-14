# Component Lifecycle / useEffect()
> If you're familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount , componentDidUpdate , and componentWillUnmount combined


![](https://i.stack.imgur.com/7Qcxe.jpg)
<br/>

# Review, Research, and Discussion

**>> Why do we not need more .html pages in a multi-page React app?**

- becuase the React is a single page application and only contains and renders one HTML page always.

**>> If we wanted a component to show up on every page, where would we put it and why?
Outside the <BrowserRouter/>
Inside the <BrowserRouter />, outside a <Route />
Inside a <Route />**

- will be inside the Route that will be as an instance of BrowserRouter, to allow the React App render needed component that is exisiting inside the Route, and each time the active route "by path" will be rendered.

**>> What does routing do with the components that were rendered when a new route is requested**

- in switch component from React-router, first route will match the clicked path will be rendered, and will go out the switch and will not see or render the other components.

**>> What does props.children contain?**

- we get props.childern by components composition and contains all props or things that the parent component has in JSX or render region.
- the good thing is will render the children that the component doesn't know them even.

![](https://soshace.com/wp-content/uploads/2019/08/React-Children-Cheat-Sheet.png)

**>> How do useState() and this.setState() differ?**

- setState is merging the previous state with the new one, it means that you dont have to pass the full state object every time you want to change some part of the state. React will update given properties and won't touch the rest. The useState's updater rewrites a previous state with a new one and it does not perform any merging. Its just replacement instead of merging.


<br/>

# Document the following Vocabulary Terms

### State Hook : 
>built in function in react that allows you to add and update states to your stateless components.

![](https://miro.medium.com/proxy/1*xGHdt-0F2jtUUNSB93O3JQ.png)


### Mounting and Un-Mounting :
> "mounting" (adding nodes to the DOM) or render the component, "unmounting" (removing them from the DOM) stop render or unrender the component , and "updating" (making changes to nodes already in the DOM) or edit the exist render of component.

![](https://1.bp.blogspot.com/-eL2sbdeL9Qc/XdPR4RscrjI/AAAAAAAAVfc/zVXHv6vrPsswu5sZhGCYeOUAEZVGapSxgCLcBGAsYHQ/s1600/React-Components-Lifecycle.png)
<br/>

# Preparation Materials

# effects hook

- The Effect Hook lets you perform side effects in function components

- The majority of effects don’t need to happen synchronously.

### Tips with useEffect Hook :

    - use Multiple Effects to Separate Concerns.

    - In some cases, cleaning up or applying the effect after every render might create a performance problem.

- useEffect equals life cycle methods in class components.



## External resources :

- [https://www.reddit.com/r/reactjs/comments/b46fv0/the_difference_between_setstate_and_usestate/](https://www.reddit.com/r/reactjs/comments/b46fv0/the_difference_between_setstate_and_usestate/)


- [https://medium.com/the-guild/under-the-hood-of-reacts-hooks-system-eb59638c9dba](https://medium.com/the-guild/under-the-hood-of-reacts-hooks-system-eb59638c9dba)

- [https://react-bootstrap.github.io/components/navbar/](https://react-bootstrap.github.io/components/navbar/)

- [https://reactrouter.com/web/guides/quick-start](https://reactrouter.com/web/guides/quick-start)