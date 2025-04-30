// App.js
import React from "react";

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log("Constructor: Component is being constructed");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps: Called before render");
    return null; // No state change
  }

  componentDidMount() {
    console.log("componentDidMount: Component mounted");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: Should component update?");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate: Snapshot before update");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: Component updated");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Component is being removed");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log("Render: Rendering component");
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>React Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default LifecycleDemo;
