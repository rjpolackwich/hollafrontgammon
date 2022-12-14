import React, { useState } from "react";
import { Form } from "semantic-ui-react";

export const LoginForm = ({ connectPlayer }) => {
  const [name, setUserName] = useState("");
  const [email, setUserEmail] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleNameChange = (e, { name, value }) => {
    setUserName(value);
  };

  const handleEmailChange = (e, { name, value }) => {
    setUserEmail(value);
  };

  const handleSubmit = () => {
    setSubmittedName(name);
    setSubmittedEmail(email);
    connectPlayer(submittedName, submittedEmail);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Input
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
          <Form.Input
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <Form.Button content="Submit" />
        </Form.Group>
      </Form>
    </div>
  );
};
