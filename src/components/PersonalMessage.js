import React from "react";
import { Textarea } from "react-rainbow-components";

const PersonalMessage = props => {
  const containerStyles = {
    maxWidth: 700
  };

  return (
    <>
      <div className>
        <Textarea
          id="example-textarea-1"
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
