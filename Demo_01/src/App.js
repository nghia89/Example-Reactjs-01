import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Product from './Components/Product.js'
import Reset from './Components/Reset.js'
import Resurt from './Components/Result.js'
import SizeSetting from './Components/SizeSetting'
import ColorBicker from './Components/ColorBicker.js'
class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
          color:'red',
          fontSize:15
        };

        this.onChangeSize=this.onChangeSize.bind(this);
        this.onSettingDefault=this.onSettingDefault.bind(this);
  }

  onSetColor=(params)=>
  {
   this.setState({
      color:params
   });
  }

  onChangeSize (value)
  {
    //8<size>36
    
    if(this.state.fontSize+value>=8&&this.state.fontSize+value<=36)
    {
      this.setState({
        fontSize:this.state.fontSize+value
      });
    }
  }

  onSettingDefault(value){
    if(value)
    {
      this.setState({
          color:'red',
          fontSize:15
      });
    }
  }

  render() { 
    return (
       <div className="container">      
            <Header/>
            <Product/>
            <hr/>
             <div className="row">
               <ColorBicker color={this.state.color} onReceiveColor={this.onSetColor}/>
               <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                 <SizeSetting
                  fontSize={this.state.fontSize}
                  onChangeSize={this.onChangeSize}
                  />
                 <Reset onSettingDefault={this.onSettingDefault}/>
               </div>
               <Resurt color={this.state.color} fontSize={this.state.fontSize} />
             </div>
       </div>
    );
  }
}

export default App;
