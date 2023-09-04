import { Box } from "@mui/material";
import Header from "../../components/common/Header";
import Barchart from "../../components/charts/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subTitle="Simple Bar Chart" />
      <Box height="75vh">
        <Barchart />
      </Box>
    </Box>
  );
};

export default Bar;