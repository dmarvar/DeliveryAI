import config from "@/config/main.json";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <section>
      <Box
        sx={{
          backgroundColor:
            "rgba(238.99999999999997, 238.99999999999997, 238.99999999999997, 1)",
        }}
      >
        <Box>
          <a
            href={config.footer_links.about_us}
            target="_blank"
            rel="noopener noreferrer"
          >
            About us
          </a>
          <a
            href={config.footer_links.about_us}
            target="_blank"
            rel="noopener noreferrer"
          >
            Cegid Cloud
          </a>
          <a
            href={config.footer_links.about_us}
            target="_blank"
            rel="noopener noreferrer"
          >
            Cegid Innovation Store
          </a>
        </Box>
        <Box>
          <Typography variant="h4">Resources</Typography>
          <a
            href={config.footer_links.about_us}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled="true"
          >
            E-books
          </a>
          <a
            href={config.footer_links.blog}
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
          <a
            href={config.footer_links.faq}
            target="_blank"
            rel="noopener noreferrer"
          >
            FAQ
          </a>
        </Box>
        <Box>
          <Stack alignItems="center">
            <Typography variant="h4">Terms and Conditions</Typography>
            <a
              href={config.footer_links.about_us}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled="true"
            >
              E-books
            </a>
            <a
              href={config.footer_links.blog}
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
            <a
              href={config.footer_links.faq}
              target="_blank"
              rel="noopener noreferrer"
            >
              FAQ
            </a>
          </Stack>
        </Box>
        <Box>
          <Typography variant="h4">Follow us</Typography>
          <Stack>
            <a
              href={config.footer_links.about_us}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled="true"
            >
              E-books
            </a>
            <a
              href={config.footer_links.blog}
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
            <a
              href={config.footer_links.faq}
              target="_blank"
              rel="noopener noreferrer"
            >
              FAQ
            </a>
          </Stack>
        </Box>
      </Box>
      <Box p={1.7} sx={{ backgroundColor: "blue" }}>
        <Stack>
          <Typography align="center" color="white">
            Copyright Cegid 2020
          </Typography>
        </Stack>
      </Box>
    </section>
  );
};
