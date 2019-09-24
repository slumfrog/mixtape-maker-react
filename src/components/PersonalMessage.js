import React from "react";

const PersonalMessage = props => {
  return (
    <>
      <div>
        <form>
          <input
            type="text"
            value={props.personalMessage}
            name="personalMessage"
            placeholder="Why did you make this mixtape"
            onChange={props.handlePersonalMessage}
          />
        </form>
      </div>
    </>
  );
};

export default PersonalMessage;
