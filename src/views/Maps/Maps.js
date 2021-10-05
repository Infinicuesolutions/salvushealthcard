// import React from "react";

// const Maps = () => {
//   const mapRef = React.useRef(null);
//   React.useEffect(() => {
//     let google = window.google;
//     let map = mapRef.current;
//     let lat = "40.748817";
//     let lng = "-73.985428";
//     const myLatlng = new google.maps.LatLng(lat, lng);
//     const mapOptions = {
//       zoom: 12,
//       center: myLatlng,
//       scrollwheel: false,
//       zoomControl: true,
//       styles: [
//         {
//           featureType: "water",
//           stylers: [{ saturation: 43 }, { lightness: -11 }, { hue: "#0088ff" }],
//         },
//         {
//           featureType: "road",
//           elementType: "geometry.fill",
//           stylers: [
//             { hue: "#ff0000" },
//             { saturation: -100 },
//             { lightness: 99 },
//           ],
//         },
//         {
//           featureType: "road",
//           elementType: "geometry.stroke",
//           stylers: [{ color: "#808080" }, { lightness: 54 }],
//         },
//         {
//           featureType: "landscape.man_made",
//           elementType: "geometry.fill",
//           stylers: [{ color: "#ece2d9" }],
//         },
//         {
//           featureType: "poi.park",
//           elementType: "geometry.fill",
//           stylers: [{ color: "#ccdca1" }],
//         },
//         {
//           featureType: "road",
//           elementType: "labels.text.fill",
//           stylers: [{ color: "#767676" }],
//         },
//         {
//           featureType: "road",
//           elementType: "labels.text.stroke",
//           stylers: [{ color: "#ffffff" }],
//         },
//         { featureType: "poi", stylers: [{ visibility: "off" }] },
//         {
//           featureType: "landscape.natural",
//           elementType: "geometry.fill",
//           stylers: [{ visibility: "on" }, { color: "#b8cb93" }],
//         },
//         { featureType: "poi.park", stylers: [{ visibility: "on" }] },
//         {
//           featureType: "poi.sports_complex",
//           stylers: [{ visibility: "on" }],
//         },
//         { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
//         {
//           featureType: "poi.business",
//           stylers: [{ visibility: "simplified" }],
//         },
//       ],
//     };

//     map = new google.maps.Map(map, mapOptions);

//     const marker = new google.maps.Marker({
//       position: myLatlng,
//       map: map,
//       animation: google.maps.Animation.DROP,
//       title: "Material Dashboard React!",
//     });

//     const contentString =
//       '<div class="info-window-content"><h2>Material Dashboard React</h2>' +
//       "<p>A premium Admin for React, Material-UI, and React Hooks.</p></div>";

//     const infowindow = new google.maps.InfoWindow({
//       content: contentString,
//     });

//     google.maps.event.addListener(marker, "click", function () {
//       infowindow.open(map, marker);
//     });
//   });
//   return (
//     <>
//       <div style={{ height: `100vh` }} ref={mapRef}></div>
//     </>
//   );
// };

// export default Maps;
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

const useStyles = makeStyles(styles);

export default function CreditCard() {
  const [countDebit, debitCounts] = useState(0);
  const [countCredit, creditCounts] = useState(0);
  const [countOnline, onlinrCounts] = useState(0);
  const [countNet, netCounts] = useState(0);
  useEffect(() => {
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
  });
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
              marginLeft:30,
              boxShadow: "1px 3px 1px #9E9E9E",
            }}
          >
            <CardHeader color="danger">
              <ChartistGraph
                className={classes.cardView}
                data={{
                  labels: ["12am", "4am", "9am", "1pm", "6pm", "9pm", "12pm"],
                  series: [[0, 0, 0, 0, 0, 0, 0]],
                }}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>
                Attempted Credit Card Frauds
              </h4>
              {/* <p className={classes.cardCategory}>Last Campaign Performance</p> */}
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 40 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
