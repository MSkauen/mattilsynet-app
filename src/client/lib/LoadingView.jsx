import React from "react";
import spinner  from "../../public/img/Spinner.svg"

export function LoadingView() {
  return (
      <>
        <div id="error-view">
            <img src={spinner} alt="Loading" />
        </div>
      </>
  );
}
