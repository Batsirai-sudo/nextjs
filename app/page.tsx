import Image from "next/image";
import { Fragment } from "react";
import { Loader } from "@/components/loader";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import ScriptLoader from "@/components/script-loader";
import { Scrollbar } from "@/components/scrollbar";
import { Slider } from "@/components/slider";

export default function Home() {

    return (
    <Fragment>
        <ScriptLoader />
        <Loader />
        <Container>
            <Header />
            <Scrollbar>
                <Slider />
            </Scrollbar>
        </Container>
    </Fragment>
  );
}
