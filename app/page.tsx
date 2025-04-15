import Image from "next/image";
import { Fragment } from "react";
import { Scrollbar } from "./components/scrollbar";
import { Slider } from "./components/slider";


export default function Home() {

    return (
    <Fragment>
        <Scrollbar>
             <Slider />
            </Scrollbar>
    </Fragment>
  );
}
