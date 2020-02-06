import React from "react";
import "./styles.css";
import ReCAPTCHA from "react-google-recaptcha";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form
        onSubmit={() => {
          this.recaptchaRef.current.execute();
        }}
      >
        <ReCAPTCHA
          ref={r => (this.recaptcha = r)}
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          size="invisible"
          onChange={() => {
            console.log("Captcha value:", this.recaptchaRef.current.getValue());
          }}
        />
      </form>
    </div>
  );
}
