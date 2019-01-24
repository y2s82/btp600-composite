import React, { Component } from 'react';
import { Impress, Step} from 'react-impressjs';
import 'react-impressjs/styles/impress-demo.css';
import './App.css';
import workerpng from './worker.png';
import diagrampng from './diagram.png';

class App extends Component {
    render() {
        return (
            <Impress fallbackMessage={<p>Browser update required</p>}>

            <Step id={'Title'} className={'step','slide'} data={{x:0,y:0,z:0,rotateX:90}}>
            <h1>Composite</h1>
            <h3>By Tony Sim</h3>
            </Step>

            <Step className={'step'} data={{x:0,y:-1300,z:0}}>
            <h1>Worker</h1>
            <Worker/>
            </Step>

            <Step className={'step'} data={{x:500,y:-1300,z:100}}>
            <h1>A Team of Workers</h1>
            <Team/>
            </Step>

            <Step className={'step'} data={{x:1200,y:-1300,z:700}}>
            <h1>A Department of Teams of Workers</h1>
            <Dept className={'dep'}/>
            </Step>

            <Step className={'step'} data={{x:0,y:-3000,z:0}}>
            <h1>Worker</h1>
            <Worker/>
            </Step>

            <Step className={'step'} data={{x:500,y:-3000,z:100}}>
            <h1>A Team of Workers</h1>
            <Team/>
            <p>public:<br/>work()</p>
            </Step>

            <Step className={'step'} data={{x:1200,y:-3000,z:700}}>
            <h1>A Department of Teams of Workers</h1>
            <Dept className={'dep'}/>
            <p>public:<br/>work()</p>
            </Step>

            <Step className={'step'} data={{x:2200,y:-3000,z:1400}}>
            <div id={'compositebox'}> Composite </div>
            <p>public:<br/>work()</p>
            </Step>

            <Step className={'step','slide'} data={{x:4000,y:-3000,z:0}}>
            <img src={diagrampng} alt={'Diagram Missing'}/>
            </Step>

            <Step className={'step','slide'} data={{x:5000,y:-2500,z:0,rotateZ:20}}>
            <h2>Consequences</h2>
            <ul>
            <li>+ Defines class hierarchies</li>
            <li>+ Simplifies client code</li>
            <li>+ Simplifies addition of new component</li>
            <li>- Tougher to restrict components of a composite</li>
            </ul>
            </Step>

            <Step className={'step','slide'} data={{x:6000,y:-2000,z:0,rotateZ:40}}>
            <h2>Implementation p1</h2>
            <ul>
            <li>Explicit Parent Reference</li>
            <li>Sharing Components</li>
            <li>Maximizing the Component Interface</li>
            <li>Declaring the Child Management Operations</li>
            </ul>
            </Step>

            <Step className={'step','slide'} data={{x:7000,y:-1500,z:0,rotateZ:60}}>
            <h2>Implementation p2</h2>
            <ul>
            <li>Avoid reference to Leaf/Composite in Component</li>
            <li>Ordering Child</li>
            <li>Caching for Performance</li>
            <li>Deleting by composite, not leaf</li>
            <li>Choosing Data Structure</li>
            </ul>
            </Step>


            <Step className={'step','center'} data={{x:6000,y:-1000,z:0,scale:8}}>
            <div>
            <h1 className={'center'}>Question?</h1>
            </div>
            </Step>

            </Impress>
        );
    }
}


class Worker extends Component {
    render() {
        return (
            <div className={'worker'}>
            <img src={workerpng} alt={"Worker"}/>
            <p>public:<br/>work()</p>
            </div>
        );
    }
}
class Team extends Component {
    render() {
        return (
            <div className={'team'}>
            <Worker className={'worker'}/>
            <Worker className={'worker'}/>
            <Worker className={'worker'}/>
            </div>
        );
    }
}

class Dept extends Component {
    render() {
        return (
            <div className={'dep'}>
            <Team className={'team'}/>
            <Team className={'team'}/>
            <div className={'dephead'}>
            <Worker className={'dephead'}/>
            </div>
            </div>
        );
    }
}

export default App;
