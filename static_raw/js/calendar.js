$(document).ready(function() {

    $('#calendar').fullCalendar(
      {
        defaultView: 'agendaTwoDay',
        defaultDate: '2018-02-07',
        resourceLabelText: 'Rooms',
        editable: true,
        selectable: true,
        eventLimit: true,
        groupByResource: true,

        header: {
            left: 'prev,next',
            center: 'Title',
            right: ''
          },

        views: {
          agendaTwoDay: {
              type: 'agenda',
              duration: { days: 4 }
            },
          },

      events: [
          {start: '2018-02-07', end: '2018-02-07', className: 'destination', title: 'New Delhi' },
          {start: '2018-02-08', end: '2018-02-08', className: 'destination', title: 'Agra' },
          {start: '2018-02-09', end: '2018-02-09', className: 'destination', title: 'jaipur' },
          { id: '1', start: '2018-02-08T09:00:00', end: '2018-02-08T14:00:00', className: 'visitEvent', title: 'event 2', description: 'FullCalendar with Event Modal Dialog Example. This demo shows how to have a jQuery UI modal dialog on event-click when using FullCalendar' },
          { id: '2', start: '2018-02-09T12:00:00', end: '2018-02-09T06:00:00', className: 'visitEvent', title: 'event 3', description: 'FullCalendar with Event Modal Dialog Example. This demo shows how to have a jQuery UI modal dialog on event-click when using FullCalendar' },
          { id: '3', start: '2018-02-10T07:30:00', end: '2018-02-10T09:30:00', className: 'visitEvent', title: 'event 4', description: 'FullCalendar with Event Modal Dialog Example. This demo shows how to have a jQuery UI modal dialog on event-click when using FullCalendar' },
          { id: '4', start: '2018-02-11T10:00:00', end: '2018-02-11T15:00:00', className: 'visitEvent', title: 'event 5', description: 'FullCalendar with Event Modal Dialog Example. This demo shows how to have a jQuery UI modal dialog on event-click when using FullCalendar' }
        ],

        eventClick: function (event, jsEvent, view) {

            $("#title").text(event.title);
            $("#description").text(event.description);

            $('#dialog').css('display', 'block');
        }

    });

    $('.close').click(function(){
      $('#dialog').css('display', 'none');
    });

  });
