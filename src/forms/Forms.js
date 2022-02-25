import React from "react";
// with single input field
import Input from "./1_input_field/Input";
import PrintText from "./1_input_field/PrintText";
import PrintText2 from "./1_input_field/PrintText2";
import PrintText3 from "./1_input_field/PrintText3";
// with single input field --- with form tag
import UseFormTag from "./2_form_tag/UseFormTag";
import UseFormTag2 from "./2_form_tag/UseFormTag2";
// login form
import LoginForm from "./3_login_form/LoginForm";
// login form -- simplify form with 2 input fields
import LoginForm1 from "./4_simplify_two_fields/LoginForm1";
import LoginForm2 from "./4_simplify_two_fields/LoginForm2";
// login form -- simplify form with 4 input fields
import SignupForm1 from "./5_simplify_four_fields/SignupForm1";
import SignupForm2 from "./5_simplify_four_fields/SignupForm2";
// Simplify Completed Form -- with less numbers of lines of code.
import Form from "./simplify_form/Form";
import CompletedForm from "./simplify_form/CompletedForm";

const Forms = () => {
  return (
    <div>
      {/* with single Input ============================> */}
      {/* <Input /> */}
      {/* <PrintText /> */}
      {/* <PrintText2 /> */}
      {/* <PrintText3 /> */}

      {/* single Input with form tag ==================> */}
      {/* <UseFormTag /> */}
      {/* <UseFormTag2 /> */}

      {/* login form with two input fields ============> */}
      {/* <LoginForm /> */}

      {/* login form - simplify form with 2 input fields*/}
      {/* <LoginForm1 /> */}
      {/* <LoginForm2 /> */}

      {/* signup form - simplify form with 4 input fields */}
      {/* <SignupForm1 /> */}
      {/* <SignupForm2 /> */}

      {/* Simplify Completed Form -- with less numbers of lines of code. */}
      {/* <Form /> */}
      <CompletedForm />
    </div>
  );
};

export default Forms;
