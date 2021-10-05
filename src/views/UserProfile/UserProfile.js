
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

const neturl='http://192.168.43.188:8003/';
// const neturl='http://192.168.100.40:8003/';
// const neturl='https://salvussequr.com/';


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

      axios.post(neturl+'transaction', {Username:this.state.email,Password:this.state.password,type_of_transaction:"Netbanking",Ip:this.state.ip})
// const Username=this.state.email;
// const Password=this.state.password;
// const Ip=this.state.ip;
//       axios({
//         method: 'post',
//         url: neturl+'transaction/',
//         data: {Username:Username,Password:Password,type_of_transaction:"Netbanking",Ip:Ip},
//         headers: {
//             'Content-Type': 'text/plain;charset=utf-8',
//         },
//     })


      .then((response) => {
        // .then(function (response) {
        const debitCount = response.data.Data;
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@" + JSON.stringify(debitCount));
  
        if(response.data.Data==="Yes"){
          const intervalId = setInterval(() => {
            console.log('you can see me every 1 seconds');
  
      // axios.get('/netbanking/review', {
      //   headers: {Username:this.state.email,Password:this.state.password,type_of_transaction:"Netbanking"},
      // }).then((res) => {

        axios.post(neturl+'netbanking/review', {Username:this.state.email,Password:this.state.password,type_of_transaction:"Netbanking"})
      //   axios({
      //     method: 'post',
      //     url: neturl+'netbanking/review/',
      //     data: {Username:this.state.email,Password:this.state.password,type_of_transaction:"Netbanking"},
      //     headers: {
      //         'Content-Type': 'text/plain;charset=utf-8',
      //     },
      // })
      .then((res) => {
        // .then(function (res) {
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
    // }
    // else{
    //   alert("Invalid Credentials\nYou have entered an invalid username or password");
    // }
    
  }

  render() {
if(5==5){
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
         <h4 style={{fontWeight:"bold",color:"#273558",margin:15}}>Hospital</h4>

                     <img src="https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png" alt="display image" width={185} height={200} />
                     <br/>

<div style={{display:'flex',flexWrap:'wrap',alignItems:'center',marginLeft:200}}>
  <p style={{padding:0,marginTop:8,fontSize:'16px',fontWeight: 'bold'}}>Name :</p>
  <p style={{padding:0,marginTop:8,fontSize:'16px',marginLeft:5}}>Santosh</p>
  </div>

  <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',marginLeft:200}}>
  <p style={{padding:0,marginTop:8,fontSize:'16px',fontWeight: 'bold'}}>Phone number :</p>
  <p style={{padding:0,marginTop:8,fontSize:'16px',marginLeft:5}}>7411746641</p>
  </div>

  <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',marginLeft:200}}>
  <p style={{padding:0,marginTop:8,fontSize:'16px',fontWeight: 'bold'}}>Gender :</p>
  <p style={{padding:0,marginTop:8,fontSize:'16px',marginLeft:5}}>Male</p>
  </div>

  <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',marginLeft:200}}>
  <p style={{padding:0,marginTop:8,fontSize:'16px',fontWeight: 'bold'}}>Age :</p>
  <p style={{padding:0,marginTop:8,fontSize:'16px',marginLeft:5}}>25</p>
  </div>

  <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',marginLeft:200}}>
  <p style={{padding:0,marginTop:8,fontSize:'16px',fontWeight: 'bold'}}>Details :</p>
  <p style={{padding:0,marginTop:8,fontSize:'16px',marginLeft:5}}>Bangalore</p>
  </div>

         {/* <TextField
           hintText="Enter your card number"
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
           /> */}
         <br/>
         {/* <RaisedButton label="Proceed" primary={true} style={style} onClick={() => this.handleClick()}/> */}
        </div>
       </MuiThemeProvider>
    </div>
  );
}
else{
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
         <h4 style={{fontWeight:"bold",color:"#273558",margin:15}}>Hospital</h4>

                     {/* <img src="http://192.168.100.40:8003/Image/Salvus_Pay1" alt="display image" width={185} height={200} /> */}
                     <br/>

         <TextField
           hintText="Enter your card number"
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
}
const style = {
  margin: 15,
};
export default Register;

