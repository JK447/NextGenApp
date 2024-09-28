"use client";

const ClientComponents = () => {
  try {
    console.log("ClientComponents");
    return <div>ClientComponents</div>;
  } catch (error) {
    console.error(error);
    throw new Error("ClientComponents error");
  }
};

export default ClientComponents;
