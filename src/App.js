// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import Team from "./scenes/team";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoice";
import Form from "./components/forms";
import Calendar from "./scenes/calendar";
import Faq from "./scenes/faq";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import Pie from "./scenes/pie";

function App() {
  const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack direction="row">
        <Sidebar/>
          <main className="content">
            <Topbar />
            <Stack p={2}>
            <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/form" element={<Form />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/line" element={<Line />} />
            <Route path="/pie" element={<Pie />} />
            </Routes>
            </Stack>
            
          </main>
        </Stack>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
