import React from "react";

function MyForm() {
  return (
    <div>
      <h1>Contact Us</h1>
      <form
        id="fs-frm"
        name="complaint-form"
        accept-charset="utf-8"
        action="https://formspree.io/f/xbjbqeee"
        method="post"
      >
        <fieldset id="fs-frm-inputs">
          <h2 for="full-name">Full Name</h2>
          <input type="text" name="name" id="full-name" placeholder="First and Last" required="" />
          <h2 for="email-address">Email Address</h2>
          <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="" />
          <h2 for="telephone">Telephone Number (Optional)</h2>
          <input type="telephone" name="telephone" id="telephone" placeholder="(555) 555-5555" />
          <h2 for="complaint">Message</h2>
          <textarea rows="6" name="complaint" id="complaint" placeholder="Your Message" required=""></textarea>
          <input type="hidden" name="_subject" id="email-subject" value="Complaint Form Submission" />
        </fieldset>
        <input type="submit" value="Contact Us" />
      </form>
    </div>
  );
}

export default MyForm;
