/** * What is wrong with this example, and how would you go  
* about fixing or improving the component? 
*/ 
class App extends React.Component {  
    constructor(props) {
      super(props);
      this.state = {
        name: this.props.name || 'Anonymous'
      }
    }    
    render() {
      return (
        <p>Hello {this.state.name}</p>
      );  
    }
  }

  
  const App = (props) => {
      return (
          <p>Hello {props.name ? props.name : 'Anonymous'}</p>
      )
  }