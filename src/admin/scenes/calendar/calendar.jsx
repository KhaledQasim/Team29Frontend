import { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import axios from "axios";


const Calendar = () => {
  const loadedEvents = useRef();
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  useEffect(() => {
    loadCalendar();
    
  }, [currentEvents]);
  const loadCalendar = async () => {
    const result = await axios.get("/api/calendar/get");
    setCurrentEvents(result.data);
   
  };
  
  const deleteEvent = async (id) => {
    
    await axios.delete(`/api/calendar/delete/${id}`);
    // window.location.reload();
  }
  // const onSubmit=async(event)=>{
  //   event.preventDefault();
  //   await axios.post("http://localhost:8080/product",product);
  //   navigate("/");  
  // }
  const addEvent = async (createdEvent) => {
    await axios.post("/api/calendar/post", createdEvent);
    window.location.reload();
  }

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
      const createdEvent = {
        title: title,
        date: selected.startStr,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      };
      addEvent(createdEvent).then(
        

        calendarApi.render()

      
      );
      
     
    }
    
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      // console.log(selected.event.id)
      selected.event.remove();
      deleteEvent(selected.event.id);
     
    }
  };


  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events ({currentEvents.length})</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.date, {
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
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px" >
          <FullCalendar ref={loadedEvents}
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
            initialView="dayGridMonth"
            editable={true}
            eventStartEditable={false}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventSources={
              "/api/calendar/get"
            }
           
       
            // eventRemove={
               
            // }
            // events={"/api/calendar/get"}
            // eventsSet={(events) => setCurrentEvents(events)}
            // {currentEvents.map((event) => (
            //   initialEvents =
            //     [
            //       {
            //         id: event.id,
            //         title: event.title,
            //         date: event.date,
            //       }
            //     ]

            // ))}
            // initialEvents={[{"id": "12315","title": "All-day event","date": "2023-03-01"},]
            // }
            // initialEvents={JSON.stringify(loadCalendarR())}
            // events={[
            //   { id: "2"title: 'event 1', date: '2023-03-01' },
            //   { title: 'event 2', date: '2023-03-02' }
            // ]
         
            // events={
            //   currentEvents.map((event) => (
            //   [
            //     {
            //       id: event.id, title: event.title, date: event.date
            //     },
                
            //     { id: "2", title: 'event 1', date: '2023-03-01' }
            //   ]
            //   ))
            // }
            
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
