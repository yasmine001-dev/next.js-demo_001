import React from "react";
import { CustomButton } from "../StyledComponents/MainButton";

function Content() {
  return (
    <>
      <div className="alert alert-primary p-5 ">
        <div className="container">
          <h1 className="mb-5">PageContent</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            voluptate.
          </p>

          {/* <MainButton>Learn More</MainButton> */}
          <CustomButton>Learn More</CustomButton>
          <CustomButton variant="outline">Learn More</CustomButton>
        </div>
      </div>
    </>
  );
}

export default Content;
