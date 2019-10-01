import React from "react";
import { Textarea } from "react-rainbow-components";

const PersonalMessage = props => {
  const containerStyles = {
    maxWidth: 700
  };

  return (
    <>
      <div>
        <Textarea
          id="example-textarea-1"
          label="Enter a personal message for your receipient"
          name="personalMessage"
          rows={2}
          placeholder="I made you this mixtape because..."
          style={containerStyles}
          className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
          onChange={props.handlePersonalMessage}
          value={props.personalMessage}
        />
      </div>
    </>
  );
};

export default PersonalMessage;
