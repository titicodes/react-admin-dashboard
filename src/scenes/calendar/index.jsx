import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  Stack,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/common/Header";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const handleDateClick = (selected) => {
    const title = prompt("Please Enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    // Triggered if user create a titile
    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  // Triggered when event is clicked
  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <Stack spacing={3}>
      <Header title="CALENDAR" subTitle="Full Calendar Interactive Page" />
      <Stack justifyContent="space-between" direction="row">
        <Stack
          sx={{
            flex: "1 1 20%",
            backgroundColor: colors.primary[400],
            p: "15px",
            borderRadius: "4px",
          }}
        >
          <Typography variant="h5">Events</Typography>
          <List
            sx={{
              height: "70vh",
              overflow: "auto",
              "&::-webkit-scrollbar": {
                display: "none",
                scrollbarWidth: "none",
              },
            }}
          >
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[600],
                  margin: "10px 0px",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Stack>
        <Stack sx={{ flex: "1 1 100%", ml: "15px" }}>
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialValue="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: "1", title: "Milestone 1 due date", date: "2023-04-07" },
              { id: "2", title: "All-day-event", date: "2023-05-01" },
            ]}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Calendar;
