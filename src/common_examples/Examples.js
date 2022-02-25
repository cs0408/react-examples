import React from "react";
import Calculator from "./calculator_create/Calculator";
import DateTime from "./date_on_refresh/DateTime";
import OrderedList from "./lists_create/OrderedList";
import UnOrderedList from "./lists_create/UnOrderedList";
import PrintGreeting from "./print_greetings/PrintGreeting";
import GoogleFonts from "./use_google_fonts/GoogleFonts";
import WayOfCss from "./ways_of_using_css/WayOfCss";
// All Examples

const Examples = () => {
  return (
    <div>
      {/* calculator examples ==================> */}
      {/* <Calculator /> */}
      {/* print DATE on refresh page ===========> */}
      {/* <DateTime /> */}
      {/* order and unorder list ===============> */}
      {/* <OrderedList /> */}
      {/* <UnOrderedList /> */}
      {/* print Greeting on according to Indian time */}
      {/* <PrintGreeting /> */}
      {/* use google fonts =====================> */}
      {/* <GoogleFonts /> */}
      {/* way of using css =====================> */}
      <WayOfCss />
    </div>
  );
};

export default Examples;
