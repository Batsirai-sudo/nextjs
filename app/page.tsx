import Image from "next/image";
import { Fragment } from "react";
import { Loader } from "@/components/loader";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
export default function Home() {
  return (
    <Fragment>
      <Loader />
      <Container>
        <Header />
      </Container>
    </Fragment>
  );
}
