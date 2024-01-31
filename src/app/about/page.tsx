import Link from "next/link";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  console.log("This content is generated server side rendered");
  return (
    <div>
      <Link href="/">Home</Link>
      <br />
      <p>This is my home app</p>
    </div>
  );
};

export default Page;
