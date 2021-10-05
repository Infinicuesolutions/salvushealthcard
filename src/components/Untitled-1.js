
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

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

      axios.post('/transaction', {Username:this.state.email,Password:this.state.password,type_of_transaction:"Netbanking",Ip:this.state.ip})
      .then((response) => {
        const debitCount = response.data.Data;
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@" + JSON.stringify(debitCount));
  
        if(response.data.Data==="Yes"){
          const intervalId = setInterval(() => {
            console.log('you can see me every 1 seconds');
  
      // axios.get('/netbanking/review', {
      //   headers: {Username:this.state.email,Password:this.state.password,type_of_transaction:"Netbanking"},
      // }).then((res) => {

        axios.post('/netbanking/review', {Username:this.state.email,Password:this.state.password,type_of_transaction:"Netbanking"})
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
        }, 1000);
        
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
           <h4 style={{fontWeight:"bold",color:"#273558",margin:15}}>Net Banking</h4>

                       <img src="/Image/salvus-R_logo_blue" alt="display image" width={185} height={200} />
                       <br/>

           <TextField
             hintText="Enter your username"
             type="username"
             floatingLabelText="username"
             onChange = {(event,newValue1) => this.setState({email:newValue1})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue2) => this.setState({password:newValue2})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={() => this.handleClick()}/>
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















// import React, { useEffect, useState } from "react";
// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// // core components
// import GridItem from "components/Grid/GridItem.js";
// import GridContainer from "components/Grid/GridContainer.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";
// import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardAvatar from "components/Card/CardAvatar.js";
// import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";
// import axios from "axios";

// import avatar from "assets/img/faces/marc.jpg";

// const styles = {
//   cardCategoryWhite: {
//     color: "rgba(255,255,255,.62)",
//     margin: "0",
//     fontSize: "14px",
//     marginTop: "0",
//     marginBottom: "0",
//   },
//   cardTitleWhite: {
//     color: "#FFFFFF",
//     marginTop: "0px",
//     minHeight: "auto",
//     fontWeight: "300",
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     marginBottom: "3px",
//     textDecoration: "none",
//   },
// };

// const useStyles = makeStyles(styles);

// export default function UserProfile() {
//   const [mobile, mobilenumber] = useState(0);

//   const onChangeHandler = event => {
//     mobilenumber(event.target.value);
//     console.log("Hello22##############%%%%%%%%%%%%%%%%%%%%%%%%%%%%"+event.target.value+"&&&&&&&&&&");

//   };

//   useEffect(() => {


//     axios.post('/transaction', {phone:"8867614095",type_of_transaction:"Netbanking",})
//     .then((response) => {
//       const debitCount = response.data.Data;
//       console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@" + JSON.stringify(debitCount));

//       if(response.data.Data==="Yes"){
//         const intervalId = setInterval(() => {
//           console.log('you can see me every 1 seconds');

//     axios.get('/netbanking/review', {
//       headers: {phone: "8867614095"},
//     }).then((res) => {
//       console.log("Hello22345678@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
//       const debitCount1 = res.data.Message;
//       console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@222" + JSON.stringify(debitCount1));
//       if(res.data.Message==="True"){
//         console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@222 SUCCESSFUL");
//         clearInterval(intervalId);
//         clearTimeout(timer);
//       }
//       else{
//         console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@222 UNSUCCESSFUL");
//       }
//     });
//       }, 1000);
      
//       const timer = setTimeout(() => {
//         console.log('This will run after 30 second!');
//           clearInterval(intervalId);
//       }, 30000);
//       }
//      else if(response.data.Data==="True"){
//         console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@555 SUCCESSFUL");
//       }
//       else{
//         console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@444 UNSUCCESSFUL");
//       }

//     })
//     .catch(function (error) {
//       // handle error
//       console.log('error' +error);
//     });

//   });

//   const classes = useStyles();
//   return (
//     <div>
//       <GridContainer>
//         <GridItem xs={12} sm={12} md={11}
//         style={{margin:20}}>
//           <Card>
//             <CardHeader color="primary">
//               <h4 className={classes.cardTitleWhite}>Net Banking</h4>
//               <p className={classes.cardCategoryWhite}>Complete your Net Banking</p>
//             </CardHeader>
//             <CardBody>
//               <GridContainer>
//                 <GridItem xs={12} sm={12} md={6}>
//                   <CustomInput
//                     labelText="Bank name"
//                     id="username"
//                     formControlProps={{
//                       fullWidth: true,
//                     }}
//                   />
//                 </GridItem>
//                 <GridItem xs={12} sm={12} md={6}>
//                   <CustomInput
//                     labelText="Card name"
//                     id="email-address"
//                     formControlProps={{
//                       fullWidth: true,
//                     }}
//                   />
//                 </GridItem>
//               </GridContainer>
//               {/* <GridContainer>
//                 <GridItem xs={12} sm={12} md={6}>
//                   <CustomInput
//                     labelText="Card type"
//                     id="first-name"
//                     formControlProps={{
//                       fullWidth: true,
//                     }}
//                   />
//                 </GridItem>
//                 <GridItem xs={12} sm={12} md={6}>
//                   <CustomInput
//                     labelText="Acc Holder name"
//                     id="last-name"
//                     formControlProps={{
//                       fullWidth: true,
//                     }}
//                   />
//                 </GridItem>
//               </GridContainer> */}
//               <GridContainer>
//                 <GridItem xs={12} sm={12} md={4}>
//                   <CustomInput
//                     labelText="CVV"
//                     id="city"
//                     formControlProps={{
//                       fullWidth: true,
//                     }}
//                   />
//                 </GridItem>
//                 <GridItem xs={12} sm={12} md={4}>
//                   <CustomInput
//                     labelText="Expiry Date"
//                     id="country"
//                     formControlProps={{
//                       fullWidth: true,
//                     }}
//                   />
//                 </GridItem>
//                 <GridItem xs={12} sm={12} md={4}>
//                   <CustomInput
//                     labelText="Mobile number"
//                     id="postal-code"
//                     value={mobile}
//                     onChange={onChangeHandler}
//                     formControlProps={{
//                       fullWidth: true,
//                     }}
//                     value={"hello"}
//                   />
//                 </GridItem>
//               </GridContainer>
              
//             </CardBody>
//             <CardFooter>
//               <Button color="primary">SUBMIT</Button>
//             </CardFooter>
//           </Card>
//         </GridItem>
//       </GridContainer>
//     </div>
//   );
// }
