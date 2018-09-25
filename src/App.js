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
    <p onClick={()=> {this.props.askChange('techs')}}>Tools</p>
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
  <p onClick={()=> {this.props.askChange('engulf')}}>Engulf</p>
  <p onClick={()=> {this.props.askChange('cildecor')}}>CIL Decor</p>
  <p onClick={()=> {this.props.askChange('hw')}}>HalcyonWeave</p>
  <p onClick={()=> {this.props.askChange('cv')}}>This page</p>
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
      <h3>Commercial experience</h3>
      <p>HTML5, CSS3, JavaScript, jQuery, SQL, regex, media formatting and design, full website design</p>
      <h3>Personal experience</h3>
      <p>React, Node, MongoDB, GitHub, heroku, SVG, webmail, Google Apps Script, API development and usage</p>
      </div>
    );
    else if(this.props.sayVal==='hobbies')
    return(
      <div>
      <h3>Skiing</h3>
      <p>The steeper and longer the slope, the better</p>
      <h3>Science Fiction</h3>
      <p>Novels(Dune, The Foundation, The Expanse), shows(Firefly, The Expanse, Battlestar Galactica), movies and games(EVE Online)</p>
      <h3>Music</h3>
      <p>Post-rock, post-grunge, pop rock, classical. I may or may not play guitar+voice privately (*shy*)</p>
      </div>
    );
    else if(this.props.sayVal==='principles')
    return(
      <div>
      <p>Generate positive change</p>
      <p>Understand other perspectives</p>
      <p>Concise communication</p>
      <p>Be mindful of others</p>
      <p>Live to learn</p>
      </div>
    );
    else if(this.props.sayVal==='cv')
    return(
      <div>
      <h3>CV page</h3>
      <p>Simple app meant to streamline my job application process.</p>
      <p>Relevant aspects: written in react, has SVG sample(the smiley above), information structuring, content creation.</p>
      </div>
    );
    else if(this.props.sayVal==='cildecor')
    return(
      <div>
      <h3>CIL Decor</h3>
      <p>Presentation page for my brother-in-law's wallpaper mounting business</p>
      <p>Made in wordpress with custom CSS and JS plugins, hosted on GoDaddy. The creation process involved complete web page design with information structuring, google fonts setup, color pallete selection and distribution, considerable video and image editing, domain, webmail and hosting setup.</p>
      </div>
    );
    else if(this.props.sayVal==='engulf')
    return(
      <div>
      <h3>Engulf</h3>
      <p>Inventory app written to help me keep track of warehouse stock during my brief stay with Design Resource. Two working parts: back-end(Pluck on GitHub) and front-end(Engulf on GitHub)</p>
      <h3>Pluck</h3>
      <p>Written in node+express and hosted on heroku. Coomunicates with a MongoDB hosted on mLab. Has a few API endpoints for simple CRUD operations</p>
      <h3>Engulf</h3>
      <p>My first fully functional react project which I am looking to improve. Straightforward interface for managing stock via CRUD operations. The build is currently hosted on GoDaddy</p>
      </div>
    );
    else if(this.props.sayVal==='hw')
    return(
      <div>
      <h3>HalcyonWeave</h3>
      <p>Landing page for freelancing work I plan to undertake.</p>
      <p>Design: simple design</p>
      </div>
    );
    else if(this.props.sayVal==='jobhistory')
    return(
      <div>
      <h3>2010-2013</h3>
      <p>Bachelors degree in business administration from West University of Timisoara(3 years programme). Studied for 1 year in Nottingham, UK, via an Erasmus scholarship during this time</p>
      <h3>2012-2017</h3>
      <p>Took time to work on creative projects(music, writing and an unhealthy amount of gaming) while working various jobs including warehouse work, street sales, sales and construction work</p>
      <h3>2015</h3>
      <p>Lead Generation Specialist at Lingo24(3 months). An extension of the contract was possible but I was unsure about my desire to continue working in sales</p>
      <h3>2017</h3>
      <p>Returned to my programming roots from highschool and realised I enjoy JavaScript very much. Studied HTML, CSS and js for a few months before landing my first job in the sector</p>
      <h3>2017-2018</h3>
      <p>Junior Survey Programmer at Toluna(12 months). I loved it, but aimed to expand my horizons beyond market research and the framework in use</p>
      <h3>2018</h3>
      <p>Administrative Assistant at Design Resource(2 months). Light schedule, fixed term contract that gave me time and resources to dive deeper into React, basic Node and basic MongoDB</p>
      </div>
    );
    else
    return(
      null
    );
  }
}

export default App;
