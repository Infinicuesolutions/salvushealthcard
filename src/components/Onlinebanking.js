
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

// const neturl='http://192.168.43.188:8003/';
// const neturl='http://192.168.100.40:8003/';
const neturl='https://salvussequr.com/';


// import { geolocated } from "react-geolocated";
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:'',
      latitude:'',
      ip:'',
    }
  }



  handleClick=async () => {
    // window.open("/login");
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     console.log("%%%%"+JSON.stringify(position.coords.latitude));
  //     console.log("%%%%"+JSON.stringify(position.coords.longitude));
  //     // this.setState({Latitude:position.coords.latitude});
  //     // this.setState({longitude:position.coords.longitude});

  // }, (error) => {
  //     alert(JSON.stringify(error))
  // }, {
  //     enableHighAccuracy: true,
  //     timeout: 20000,
  //     maximumAge: 1000
  // });

    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data.IPv4);
    this.setState({ip:res.data.IPv4})
    // if(this.state.password == 'admin' && this.state.email == 'admin')
    // {
      console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@" + "ENTERED11"+this.state.ip);

      axios.post(neturl+'Hospital', {Card_No:this.state.email,Phone:this.state.password,type_of_transaction:"Health Card",Ip:this.state.ip})
      .then((response) => {
        // .then(function (response) {
        const debitCount = response.data.Data;
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@" + JSON.stringify(debitCount));
  
        if(response.data.Data==="True"){
          alert("Allowed");
        }
        else{
          alert("Not Allowed");
        }
  
      })
      .catch(function (error) {
        // handle error
        console.log('error' +error);
      });
    // }
    // else{
    //   alert("Invalid Credentials\nYou have entered an invalid username or password");
    // }
    
  }

  render() {
    return (
      <div style={{ display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#273558",height:"100vh"}}>
        <MuiThemeProvider>
          <div style={{backgroundColor:"#ffffff",borderRadius:20,width:"90vh"}}>
          {/* <AppBar
             title="Salvus Net Banking"
           /> */}
           <h4 style={{fontWeight:"bold",color:"#273558",margin:15}}>Payee</h4>

                       {/* <img src="http://192.168.100.40:8003/Image/Salvus_Pay1" alt="display image" width={185} height={200} /> */}
                       <br/>

           <TextField
             hintText="Enter your health card number"
             type="username"
             floatingLabelText="Card number"
             onChange = {(event,newValue1) => this.setState({email:newValue1})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your phone number"
             floatingLabelText="Phone number"
             onChange = {(event,newValue2) => this.setState({password:newValue2})}
             />
           <br/>
           <RaisedButton label="Proceed" primary={true} style={style} onClick={() => this.handleClick()}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Register;

