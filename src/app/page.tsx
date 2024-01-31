import styles from "./page.module.css";
import config from "../config/main.json";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to APIM Boilerplate from FrontEnd folder</h1>
      <Box>Hello</Box>
      <a
        href={config.app_host_name}
        // target="_blank"
        rel="noopener noreferrer"
      >
        <h2>Home</h2>
      </a>
    </main>
  );
}
