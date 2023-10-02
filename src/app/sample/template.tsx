import {PropsWithChildren} from "react";

export default function Template({ children }: PropsWithChildren) {
  return <div>
    <h2>Sample Template</h2>
    <>{children}</>
  </div>
}