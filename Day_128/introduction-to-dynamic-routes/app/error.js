"use client";
const error = ({ error, reset }) => {
  return (
    <>
      <div>Some Runtime Error Occured</div>
      <button
        onClick={() => {
          reset();
        }}
      >
        Try Again
      </button>
    </>
  );
};

export default error;
