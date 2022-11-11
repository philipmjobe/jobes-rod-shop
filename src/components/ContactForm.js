import React, { useState } from "react";
import axios from "axios";
import { fieldset, label, input, textarea } from "@formspree/react";

function MyForm() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/xbjbqeee",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <div>
      <h1>Contact Us</h1>
      <form
        id="fs-frm"
        name="complaint-form"
        accept-charset="utf-8"
        action="https://formspree.io/f/{xbjbqeee}"
        method="post"
      >
        <fieldset id="fs-frm-inputs">
          <label for="full-name">Full Name</label>
          <input type="text" name="name" id="full-name" placeholder="First and Last" required="" />
          <label for="email-address">Email Address</label>
          <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="" />
          <label for="telephone">Telephone Number (Optional)</label>
          <input type="telephone" name="telephone" id="telephone" placeholder="(555) 555-5555" />
          <label for="complaint">Mesage</label>
          <textarea rows="6" name="complaint" id="complaint" placeholder="Your Message" required=""></textarea>
          <input type="hidden" name="_subject" id="email-subject" value="Complaint Form Submission" />
        </fieldset>
        <input type="submit" value="Contact Us" />
      </form>
    </div>
  );
}

export default MyForm;
