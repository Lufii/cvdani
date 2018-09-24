import React, { Component } from 'react';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      ask: 'initial',
    }
  }

passAsk = (passAskVal) => {
  this.setState({ask: passAskVal})
}

  render() {
    return (
      <div className="App">
<div id='leftC'>
  <SVG />
  <Say sayVal={this.state.ask}/>
</div>
<div id='rightC'>
  <Ask askChange={this.passAsk}/>
</div>
</div>

    );
  }
}

class SVG extends Component {
  render() {
    return(
<div id='face'>
      <svg width="100%" height="100%" version="1.1" viewBox="0 0 400 215">
       <g transform="translate(0,-82)">
        <rect x="111.84" y="269.19" width="176.33" height="10.01" />
        <path className='eyes1' d="m106.55 160.41-17.492-0.11004-31.402-46.545-32.857 46.529-17.359 0.0236 40.778-61.281 17.492 0.11004z" />
        <path className='eyes1' d="m392.56 160.51-17.492-0.11004-31.402-46.545-32.857 46.529-17.359 0.0236 40.778-61.281 17.492 0.11004z" />
        <flowRoot transform="matrix(.26458 0 0 .26458 0 82)" ><flowRegion><rect x="340" y="409.74" width="860" height="208.57"/></flowRegion><flowPara/></flowRoot>
        <path className='eyes2' d="m102.91 153.3c0 11.201-2.2356 21.202-8.2032 28.002-4.9447 5.6346-12.934 9.0838-19.99 9.0838-7.7851 0-16.6-2.9597-21.702-9.6707-5.1019-6.7111-6.4917-17.174-6.4917-27.415 0-10.241 3.2131-20.806 8.3154-27.517 5.1019-6.7112 12.093-9.5682 19.878-9.5682s16.258 3.3542 21.36 10.066c5.1019 6.7112 6.8334 16.779 6.8334 27.02z" />
        <path className='eyes2' d="m352.37 152.09c0 11.201-2.2356 21.202-8.2032 28.002-4.9448 5.6346-12.934 9.0838-19.99 9.0838-7.7851 0-16.6-2.9597-21.702-9.6707-5.1019-6.7111-6.4917-17.174-6.4917-27.415 0-10.241 3.2131-20.806 8.3154-27.517 5.1019-6.7112 12.093-9.5682 19.878-9.5682s16.258 3.3542 21.36 10.066c5.1019 6.7112 6.8334 16.779 6.8334 27.02z" />
       </g>
      </svg>
</div>
    );
  }
}

class Ask extends Component{
  constructor(props){
    super(props);
    this.state={
      m1: 0,
      m2: 0
    }
  }
  render(){
    if(this.state.m1===0 && this.state.m2===0)
    return(
<div id='nav'>
      <h1 className="accordion" onClick={()=> {this.setState({m1:1, m2:0})}}>About</h1>
      <h1 className="accordion" onClick={()=> {this.setState({m2:1, m1:0})}}>Projects</h1>
      <h1 className="panel3 accordion" onClick={()=> {this.props.askChange('contact')}}>Contact</h1>
</div>
    );
    else if(this.state.m1===1)
    return(
    <div id='nav'>
      <h1 className="accordion" onClick={()=> {this.setState({m1:1, m2:0})}}>About</h1>
    <div className="panel1">
    <p onClick={()=> {this.props.askChange('techs')}}>Techs</p>
    <p onClick={()=> {this.props.askChange('hobbies')}}>Hobbies</p>
    <p onClick={()=> {this.props.askChange('principles')}}>Principles</p>
    <p onClick={()=> {this.props.askChange('jobhistory')}}>Job history</p>
    </div>
<h1 className="accordion" onClick={()=> {this.setState({m2:1, m1:0})}}>Projects</h1>
    <h1 className="panel3 accordion" onClick={()=> {this.props.askChange('contact')}}>Contact</h1>
    </div>
    );
    else if(this.state.m2===1)
    return(
<div id='nav'>
      <h1 className="accordion" onClick={()=> {this.setState({m1:1, m2:0})}}>About</h1>
<h1 className="accordion" onClick={()=> {this.setState({m2:1, m1:0})}}>Projects</h1>
<div className="panel2">
  <p onClick={()=> {this.props.askChange('cv')}}>This page</p>
  <p onClick={()=> {this.props.askChange('cildecor')}}>CIL Decor</p>
  <p onClick={()=> {this.props.askChange('engulf')}}>Engulf</p>
  <p onClick={()=> {this.props.askChange('hw')}}>HalcyonWeave</p>
</div>
<h1 className="panel3 accordion" onClick={()=> {this.props.askChange('contact')}}>Contact</h1>
</div>
    );
  }
}

class Say extends Component{
  render(){
    if(this.props.sayVal==='contact')
    return(
      <div>
      <p>Full name: Daniel-Petru Achim</p>
      <p>Born: 29th of April, 1991</p>
      <p>Age: value</p>
      <p>email: dani@halcyonweave.com</p>
      <p>linkedin: https://www.linkedin.com/in/dani-a-01167ab6</p>
      <p>github: https://github.com/Lufii</p>
      </div>
    );
    else if(this.props.sayVal==='techs')
    return(
      <div>
      <h3>Commercial experience, 12 months:</h3>
      <p>HTML5</p>
      <p>CSS5</p>
      <p>JavaScript</p>
      <p>jQuery</p>
      <h3>Hobby experience, based on projects:</h3>
      <p>React</p>
      <p>Node</p>
      <p>MongoDB</p>
      </div>
    );
    else if(this.props.sayVal==='hobbies')
    return(
      <div>
      <p>Skiing, reading SF novels(Dune, The Foundation, The Expanse), guitar+voice super privately, post-rock, ambiental, post grunge, pop rock, classical music. SF shows and movies (The Expanse,
        Firefly, Battlestar Galactica, John Carter, The fifth element, Valerian and the City of a Thousand Planets)</p>
      </div>
    );
    else if(this.props.sayVal==='principles')
    return(
      <div>
      <p>Generate positive change</p>
      <p>Take others' perspectives</p>
      <p>Be mindful of others</p>
      <p>Create simple yet thorough experiences</p>
      <p>Concise communication</p>
      </div>
    );
    else if(this.props.sayVal==='cv')
    return(
      <div>
      <h3>CV page</h3>
      <p>Technical: Simple react app. Basic SVG creation and manipulation.</p>
      <p>Design: Menu and content positioning, responsiveness, content creation</p>
      </div>
    );
    else if(this.props.sayVal==='cildecor')
    return(
      <div>
      <h3>CIL Decor presentation page</h3>
      <p>Technical: Domain set-up, hosting and e-mail set-up. Wordpress implementation. Minor javaScript animations.</p>
      <p>Design: significant video and image editing, color pallette selection and information structuring for the presentation website</p>
      </div>
    );
    else if(this.props.sayVal==='engulf')
    return(
      <div>
      <h3>Engulf - warehouse application</h3>
      <p>Technical: MongoDB, Node, React.</p>
      <p>Design: simple CRUD interface</p>
      </div>
    );
    else if(this.props.sayVal==='hw')
    return(
      <div>
      <h3>HalcyonWeave interface for freelancing projects</h3>
      <p>Technical: React</p>
      <p>Design: simple design</p>
      </div>
    );
    else if(this.props.sayVal==='jobhistory')
    return(
      <div>
      <h3>Jobs</h3>
      <p>Book salesman, various construction jobs, lead generation specialist, explore musical side, writing, survey programmer</p>
      </div>
    );
    else
    return(
      null
    );
  }
}

export default App;
