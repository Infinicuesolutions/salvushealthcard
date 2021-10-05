// /*eslint-disable*/
// import React from "react";
// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// import Hidden from "@material-ui/core/Hidden";
// // core components
// import GridItem from "components/Grid/GridItem.js";
// import GridContainer from "components/Grid/GridContainer.js";
// import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardBody from "components/Card/CardBody.js";

// import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";

// const useStyles = makeStyles(styles);

// export default function Icons() {
//   const classes = useStyles();
//   return (
//     <GridContainer>
//       <GridItem xs={12} sm={12} md={12}>
//         <Card plain>
//           <CardHeader plain color="primary">
//             <h4 className={classes.cardTitleWhite}>Material Design Icons</h4>
//             <p className={classes.cardCategoryWhite}>
//               Handcrafted by our friends from{" "}
//               <a
//                 href="https://design.google.com/icons/?ref=creativetime"
//                 target="_blank"
//               >
//                 Google
//               </a>
//             </p>
//           </CardHeader>
//           <CardBody>
//             <Hidden only={["sm", "xs"]}>
//               <iframe
//                 className={classes.iframe}
//                 src="https://material.io/icons/"
//                 title="Icons iframe"
//               >
//                 <p>Your browser does not support iframes.</p>
//               </iframe>
//             </Hidden>
//             <Hidden only={["lg", "md"]}>
//               <GridItem xs={12} sm={12} md={6}>
//                 <h5>
//                   The icons are visible on Desktop mode inside an iframe. Since
//                   the iframe is not working on Mobile and Tablets please visit
//                   the icons on their original page on Google. Check the
//                   <a
//                     href="https://design.google.com/icons/?ref=creativetime"
//                     target="_blank"
//                   >
//                     Material Icons
//                   </a>
//                 </h5>
//               </GridItem>
//             </Hidden>
//           </CardBody>
//         </Card>
//       </GridItem>
//     </GridContainer>
//   );
// }
import React, { useEffect, useState } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import CreditCardIcon from "@material-ui/icons/CreditCard";
// import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
// import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
// import Tasks from "components/Tasks/Tasks.js";
// import CustomTabs from "components/CustomTabs/CustomTabs.js";
// import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import axios from "axios";

// import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";


const neturl='http://192.168.43.188:8003/';
// const neturl='http://192.168.100.40:8003/';
// const neturl='https://salvussequr.com/';

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const [countDebit, debitCounts] = useState(0);
  const [countCredit, creditCounts] = useState(0);
  const [countOnline, onlinrCounts] = useState(0);
  const [countNet, netCounts] = useState(0);

  const [grp11, gr11] = useState(0);
  const [grp12, gr12] = useState(0);
  const [grp13, gr13] = useState(0);
  const [grp14, gr14] = useState(0);
  const [grp15, gr15] = useState(0);
  const [grp16, gr16] = useState(0);
  const [grp17, gr17] = useState(0);

  useEffect(() => {

    {
      const headers = {'Type': "Emids Card"};
        axios.get(neturl+"Emidsfraud/", { headers })
          .then((res) => {
          console.log("DATA  Emids Card@@@@@@@@@@@" + JSON.stringify(res.data));
    
          const gr1 = res.data.AM12;
          const gr2 = res.data.AM4;
          const gr3 = res.data.AM9;
          const gr4 = res.data.PM1;
          const gr5 = res.data.PM6;
          const gr6 = res.data.PM9;
          const gr7 = res.data.PM12;
          gr11(gr1);
          gr12(gr2);
          gr13(gr3);
          gr14(gr4);
          gr15(gr5);
          gr16(gr6);
          gr17(gr7);
        });
      }

    console.log("Hello22");
    axios.get("/Test").then((res) => {
      const debitCount = res.data.result;
      const creditCount = res.data.result;
      const onlinrCount = res.data.result;
      const netCount = res.data.result;
      console.log("DATA3333333333" + JSON.stringify(debitCount));
      debitCounts(debitCount);
      creditCounts(creditCount);
      onlinrCounts(onlinrCount);
      netCounts(netCount);
    });
  },[]);
  const classes = useStyles();
  console.log("Hello");
  return (
    <div>
      <GridContainer>
        <GridItem>
          <Card
            chart
            style={{
              backgroundColor: "#1d2d53",
              boxShadow: "1px 3px 1px #9E9E9E",
            }}
          >
            <CardHeader color="danger">
              <ChartistGraph
                className={classes.cardView}
                // data={dailySalesChart.data}
                data={{
                  labels: ["12am", "4am", "9am", "1pm", "6pm", "9pm", "12pm"],
                  series: [[grp11, grp12, grp13, grp14, grp15, grp16, grp17]],
                }}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Attempted Health Card Frauds</h4>
              {/* <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today.
              </p> */}
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

