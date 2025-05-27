import css from "./Section.module.css";
import Box from "@mui/material/Box";

export default function Section({ children }) {
  return (
    <Box component="section" className={css.section}>
      {children}
    </Box>
  );
}
