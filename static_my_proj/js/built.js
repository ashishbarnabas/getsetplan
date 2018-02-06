$(document).ready(function() {

    $('#calendar').fullCalendar({
      header: {
        left: '',
        center: 'Title',
        right: ''
      },
      views: {
        agendaFourDay: {
            type: 'agenda',
            duration: { days: 4 },
            buttonText: '4 day'
        },
        month: { 
            titleFormat: 'MMM'
        }
    },
        defaultView: 'agendaFourDay',
        /* minTime: "00:00:00"  show as 12 AM and 24:00:00 as 11PM */
        minTime: "00:00:00",
        maxTime: "24:00:00",
        slotDuration: "00:30:00",
        defaultDate: '2018-01-01',
        allDay: false,
        editable: true,      

        events: [
        {
          title: 'Business Lunch',
          start: '2018-01-01T01:00:00',
          color: '#ff9f89',
          description: 'This is a cool event'
        },
        {
          title: 'Meeting',
          start: '2018-01-06T11:00:00',
          color: '#257e4a',
          description: 'This is a cool event'
        },
        {
          title: 'Conference',
          start: '2018-01-02T11:00:00',
          end: '2018-01-02T03:00:00',
          description: 'This is a cool event'
        },
        {
          title: 'Party',
          start: '2018-01-01T20:00:00',
          description: 'This is a cool event'
        }
      ],
    eventClick: function(event, element) {
        element.qtip({
            content: event.description
        });
    }
    });
 
  });