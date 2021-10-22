import React from "react";
import { getData, state$ } from "@app/utility";

export default function Root(props) {
  React.useEffect(() => {
    getData("/data").then((data) => {
      console.log("react ", data);
    });
    const subscription = state$.subscribe((data) => {
      console.log("react ", data);
    });
    state$.next({ name: "React Data" });
    sessionStorage.setItem("shared", "React App data");
    console.log("react storage ", localStorage.getItem("shared"));

    return () => {
      subscription.unsubscribe();
    };
  }, []);
  return (
    <section>
      {props.name} is mounted!
      <br />
      <a href="#/angular">Go to Angular app</a>
    </section>
  );
}
