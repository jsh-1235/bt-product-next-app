import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  console.log(process.env.ENV_VARIABLE);

  return <div>Test</div>;
}
