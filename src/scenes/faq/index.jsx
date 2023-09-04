import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { faqAccordion } from "../../utils/faqObject";
import { tokens } from "../../theme";
import Header from "../../components/common/Header";
import { MdExpandMore } from "react-icons/md";

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Stack spacing={2}>
      <Header title="FAQ" subTitle="Frequently Asked Questions" />
      {faqAccordion.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<MdExpandMore />}>
            <Typography color={colors.greenAccent[500]} level="h4">
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails expandIcon={<MdExpandMore />}>
            <Typography color={colors.greenAccent[500]}>
              {item.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
};

export default Faq;
