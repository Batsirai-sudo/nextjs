import Image from "next/image";
import { Fragment } from "react";
import { Loader } from "@/components/loader";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import ScriptLoader from "@/components/script-loader";

export default function Home() {

    return (
    <Fragment>
        <ScriptLoader />
        <Loader />
        <Container>
            <Header />
        </Container>
    </Fragment>
  );
}
