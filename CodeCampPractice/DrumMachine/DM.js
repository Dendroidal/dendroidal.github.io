const KEYS = "QWEASDZXC".split('');

const CLIPS = [
  "Heater-1",
  "Heater-2",
  "Heater-3",
  "Heater-4_1",
  "Heater-6",
  "Dsc_Oh",
  "Kick_n_Hat",
  "RP4_KICK_1",
  "Cev_H2"
]

function buttons (){
  JSX=""
  for (var i=0; i<9;i++)
    JSX.concat(<div>1</div>)
}

function playElem(x){
  return ()=>document.getElementById(x).play()
}

class App extends React.Component{
    constructor(props) {
      super(props);
     this.state = {
      message: ''
    };
    this.handleKey = this.handleKey.bind(this)
    this.playElem = this.playElem.bind(this)
  };
  componentDidMount() {
document.addEventListener("keydown",this.handleKey)   
  };
  handleKey(event) {
    for (var i=0; i<9;i++){
     let KEY = KEYS[i]
     if (event.key.toUpperCase() == KEY) {
      playElem(KEY)();
      this.setState(
      {message:CLIPS[KEYS.indexOf(KEY)]})
    };     
    }
  }
  playElem(e) {
      this.setState(
      {message:CLIPS[KEYS.indexOf(e.target.id[6])]});
    var el = document.getElementById(e.target.id[6]);
el.play()
}
  render() {
    return(
    <div>
      <div id="display">
         {this.state.message}
      </div>
      {KEYS.map((x,i)=>(
          <div class="drum-pad" id={"button"+x} onClick={this.playElem}>
            <audio class="clip" id={x}
src={`https://s3.amazonaws.com/freecodecamp/drums/${CLIPS[i]}.mp3`}/>
          {x}</div>))}
    </div>
    );
  }
}

ReactDOM.render(<App />,
 document.getElementById("drum-machine"))


// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 
