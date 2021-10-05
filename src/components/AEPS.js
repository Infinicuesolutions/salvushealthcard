
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

const neturl='http://192.168.43.188:8003/';
// const neturl='http://192.168.100.40:8003/';
// const neturl='https://salvussequr.com/';

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
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data.IPv4);
    this.setState({ip:res.data.IPv4})
    
      console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@" + "ENTERED11"+this.state.ip);

      axios.post(neturl+'transaction', {Adhaar:this.state.email,type_of_transaction:"AEPS",Ip:this.state.ip})
      .then((response) => {
        const debitCount = response.data.Data;
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@" + JSON.stringify(debitCount));
  
        if(response.data.Data==="Yes"){
          const intervalId = setInterval(() => {
            console.log('you can see me every 1 seconds');
  
        axios.post(neturl+'netbanking/review', {Adhaar:this.state.email,type_of_transaction:"AEPS"})
      .then((res) => {
        console.log("Hello22345678@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        const debitCount1 = res.data.Message;
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@222" + JSON.stringify(debitCount1));
        if(res.data.Message==="True"){
          alert("SUCCESSFUL");
          clearInterval(intervalId);
          clearTimeout(timer);
        }
        else{
          // alert("UNSUCCESSFUL");
        }
      });
        }, 2000);
        
        const timer = setTimeout(() => {
          console.log('This will run after 30 second!');
          alert("Transaction denied");
            clearInterval(intervalId);
        }, 30000);
        }
       else if(response.data.Data==="True"){
          console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@555 SUCCESSFUL");
          alert("SUCCESSFUL");
        }
        else if(response.data.Data==="Unsecured"){
          alert("Not a Salvus user");
        }
        else{
          alert("UNSUCCESSFUL");
        }
      })
      .catch(function (error) {
        // handle error
        console.log('error' +error);
      });
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
           <h4 style={{fontWeight:"bold",color:"#273558",margin:15}}>AEPS</h4>

                       {/* <img src="http://192.168.100.40:8003/Image/Salvus_Pay1" alt="display image" width={185} height={200} /> */}
                       <br/>
           <TextField
             hintText="Enter your Aadhaar number"
             type="username"
             floatingLabelText="Aadhaar number"
             onChange = {(event,newValue1) => this.setState({email:newValue1})}
             />
           <br/>
           {/* <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue2) => this.setState({password:newValue2})}
             /> */}
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
