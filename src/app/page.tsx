import styles from "./page.module.css";
import config from "../config/main.json";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <main className={styles.main}>
      <Box m={5}>
        <Typography variant="h1">Hi common components TEAM</Typography>
        <Typography variant="body1">
          This is a presentation o f how to use ChatGPT
        </Typography>
        <Box>Hello</Box>
        {/* <a
          href={config.app_host_name}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Home</h2>
        </a> */}
      </Box>
    </main>
  );
}
