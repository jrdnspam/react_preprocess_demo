var Temperature = function Temperature(props) {
  return React.createElement(
    "p",
    null,
    "The current temperature in ",
    props.city,
    " is ",
    props.degree,
    " degree ",
    props.unit
  );
};

var App = function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(Temperature, { city: "London", degree: 20, unit: "celsius" }),
    React.createElement(Temperature, { city: "New York", degree: 25, unit: "celsius" }),
    React.createElement(Temperature, { city: "Dubai", degree: 32, unit: "celsius" })
  );
};
var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);
root.render(React.createElement(App, null));