# NavBar-Router-Test

This is a React.js test app that's suppose to test the implementation of React-Router-DOM a& React Bootstrap Navigation components into a frontend React.js project. Sources used:
- [https://v5.reactrouter.com/web/guides/quick-start](https://v5.reactrouter.com/web/guides/quick-start)
- [https://www.youtube.com/watch?v=0wJCxEDDetE](https://www.youtube.com/watch?v=0wJCxEDDetE)
- [https://www.youtube.com/watch?v=SLfhMt5OUPI&t=19s](https://www.youtube.com/watch?v=SLfhMt5OUPI&t=19s)

## Technologies Used
- React.js
- JavaScript
- React-Router-DOM
- React-Bootstrap

## Installation
1) Create a directory on your machine, open terminal, and clone the repository:

        $git clone git@github.com:jermeewinn/NavBar-Router-Test.git

2) Navigate into project root directory:

        $cd NavBar-Router-Test

3) Install all node package manager dependencies:

        $npm install

4) Initialize localhost:3000:

        $npm run start

## Demo
![React NavBar_Router-DOM Test, 06_21_2022 (1)](https://user-images.githubusercontent.com/88342540/176579918-7815798f-ed0b-48d9-999a-cceaff389913.gif)

## Notes to Self

Most documentation on react-router-dom mention use of Switch exports, but as of v6, Switch is now Routes. This is not found in official documentation for React-Router-DOM as of v6. More information can be found here:<br/>
        - https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
<br/>
<br/>

If you work off the react-router-dom documentation, you will get the following error:

                [About] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>

You will need to place the component import w/i an element tag in order to import them. More info can be found here:<br/>
https://stackoverflow.com/questions/69864165/error-privateroute-is-not-a-route-component-all-component-children-of-rou

## Author

This application was created by [Jeremy Huynh](https://www.linkedin.com/in/jeremy-huynh/). For inquiries, please reach out at jeahuynh18@gmail.com.
