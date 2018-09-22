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
        <path className='eyes2' d="m100.02 163.51c0 15.517-3.3687 29.371-12.361 38.792-7.451 7.8057-19.49 12.584-30.122 12.584-11.731 0-25.013-4.1001-32.701-13.397-7.6878-9.2971-9.782-23.791-9.782-37.978 0-14.187 4.8417-28.823 12.53-38.12 7.6878-9.2971 18.222-13.255 29.953-13.255 11.731 0 24.498 4.6466 32.186 13.944 7.6878 9.2971 10.297 23.245 10.297 37.432z" />
        <path className='eyes2' d="m386.06 162.63c0 15.517-3.3687 29.371-12.361 38.792-7.451 7.8057-19.49 12.584-30.122 12.584-11.731 0-25.013-4.1001-32.701-13.397-7.6878-9.2971-9.782-23.791-9.782-37.978 0-14.187 4.8417-28.823 12.53-38.12 7.6878-9.2971 18.222-13.255 29.953-13.255 11.731 0 24.498 4.6466 32.186 13.944 7.6878 9.2971 10.297 23.245 10.297 37.432z" />
       </g>
      </svg>
</div>
    );
  }
}

class Ask extends Component{
  render(){
    return(
<div id='nav'>
      <h1 class="accordion">About</h1>
<div class="panel">
  <p onClick={()=> {this.props.askChange('techs')}}>Techs</p>
  <p onClick={()=> {this.props.askChange('hobbies')}}>Hobbies</p>
  <p onClick={()=> {this.props.askChange('principles')}}>Principles</p>
</div>
<h1 class="accordion">Projects</h1>
<div class="panel">
  <p onClick={()=> {this.props.askChange('cv')}}>This page</p>
  <p onClick={()=> {this.props.askChange('cildecor')}}>CILDecor</p>
  <p onClick={()=> {this.props.askChange('engulf')}}>Engulf</p>
  <p onClick={()=> {this.props.askChange('hw')}}>HalcyonWeave</p>
</div>
<h1 class="accordion" onClick={()=> {this.props.askChange('contact')}}>Contact</h1>
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
    else
    return(
      "ICESat-2 (Ice, Cloud, and land Elevation Satellite 2), part of NASA's Earth Observing System, is a satellite mission for measuring ice sheet elevation and sea ice thickness, as well as land topography and vegetation characteristics.[7] ICESat-2, a follow-on to the ICESat mission, was launched on 15 September 2018 from Vandenberg Air Force Base in California,[3] into a near-circular, near-polar orbit with an altitude of approximately 496 km (308 mi). It was designed to operate for three years and carry enough propellant for seven years.[8]"
    );
  }
}

export default App;
