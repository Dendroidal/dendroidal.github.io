const BUTTONS =[
  {id:"add",
  text:"+",
  value:"+",
  class:"oper",
  func:null},
  {id:"subtract",
  text:"-",
   value:"-",
  class:"oper",
  func:null},
  {id:"multiply",
  text:"x",
  value:"*",
  class:"oper",
  func:null},
  {id:"divide",
  text:"/",
  value:"/",
  class:"oper",
  func:null},
  {id:"seven",
  text:"7",
  value:"7",
  class:"num",
  func:((e)=>eval("this.addDigit")(e))},
  {id:"eight",
  text:"8",
  value:"8",
  class:"num",
  func:null},
  {id:"nine",
  text:"9",
  value:"9",
  class:"num",
  func:null},
  {id:"four",
  text:"4",
  value:"4",
  class:"num",
  func:null},
  {id:"five",
  text:"5",
  value:"5",
  class:"num",
  func:null},
  {id:"six",
  text:"6",
  value:"6",
  class:"num",
  func:null},
  {id:"one",
  text:"1",
  value:"1",
  class:"num",
  func:null},
  {id:"two",
  text:"2",
  value:"2",
  class:"num",
  func:null},
  {id:"three",
  text:"3",
  value:"3",
  class:"num",
  func:null},
  {id:"equals",
  text:"=",
  value:"=",
  class:"none",
  func:null},
  {id:"zero",
  text:"0",
  value:"0",
  class:"num",
  func:null},
  {id:"decimal",
  text:".",
  value:".",
  class:"num",
  func:null},
  {id:"clear",
  text:"AC",
  value: null,
  class:"none",
  func:eval("this.clear")}
]

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      display:"0",
      lastValue:"0"
    };
    this.handleChange = this.handleChange.bind(this);
    this.addDigit = this.addDigit.bind(this);
    this.addOperator = this.addOperator.bind(this);
    this.handleDot = this.handleDot.bind(this);
    this.clear = this.clear.bind(this)
  }
  handleChange(e){
    if (e.target.id == 'clear'){
      this.clear(e)
    } else if (['+','-','*','/'].includes(e.target.value)){
      this.addOperator(e)
    } else if (e.target.value == "=") {
      this.equal(e)
    }
    else if (e.target.value == ".") {
      this.handleDot(e)  
      } else {
      this.addDigit(e)
    }    
  }
  addDigit(e) {
    if (this.state.lastValue == "0") {
      this.setState(
      {
        display: this.state.display.slice(0,-1) + e.target.value,
        lastValue: e.target.value
      })
    } else {
    this.setState({
      display: this.state.display + e.target.value,
      lastValue: this.state.lastValue+e.target.value
    })
  }
  }
  addOperator(e){
   if (
    ['+-','*-',"/-"].includes(this.state.display.slice(-2))) {
    this.setState({
      display: this.state.display.slice(0,-2) + e.target.value
    }
    )      
    }
     else     if ('+-*/'.includes(this.state.display.slice(-1)) &&
       '+*/'.includes(e.target.value)) {
    this.setState({
      display: this.state.display.slice(0,-1) + e.target.value
    })      
    } else{
    this.setState({
      display: this.state.display + e.target.value,
      lastValue: ""
    })
    }
  }
  handleDot(e){
    if (!this.state.lastValue.includes('.')) {
      this.setState({
        display: this.state.display + '.',
        lastValue: this.state.lastValue + e.target.value
      }
      )
    }
  }
  equal(e){
    this.setState({
      display: eval(this.state.display).toString(),
      lastValue: eval(this.state.display).toString()
    })
  }
  clear(e) {
    this.setState({
      display:"0",
      lastValue:"0"
    });
  }
  render() {
    return(
  <div id="wrapper">
    <div id="display">
      {this.state.display}
    </div>
    <div class="container">
      {BUTTONS.map(b=>(
      <button 
        id={b.id}
        class={b.class}
        value={b.value}
        onClick={this.handleChange}>
        {b.text}
       </button>))}
    </div>
  </div>
   )
  }
}

ReactDOM.render(
  <App />, document.getElementById('root'))