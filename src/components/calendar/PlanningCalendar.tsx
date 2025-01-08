import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay, } from 'date-fns';
import { fr } from 'date-fns/locale/fr';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'fr': fr,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface Props {
  events: Array<{
    id: number;
    title: string;
    start: Date;
    end: Date;
  }>;
  onEventSelect: (event: any) => void;
}

export const PlanningCalendar: React.FC<Props> = ({ events, onEventSelect }) => {
  return (
    <div className="bg-black rounded-lg py-2 mx-auto w-1/2 h-[35vh] text-white opacity-70">

    <div className="h-[600px] ml-[2vh]">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '50%', 
                  width: '97%', 
                  color: 'white'
               }}
        onSelectEvent={onEventSelect}
        messages={{
          next: 'Suivant',
          previous: 'Précédent',
          today: "Aujourd'hui",
          month: 'Mois',
          week: 'Semaine',
          day: 'Jour',
        }}
        culture="fr"
        components={{
          toolbar: (toolbar) => {
            return (
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}>
                <div>{toolbar.label}</div>
                <div style={{ display: 'flex', gap: '2vh' }}>
                  <button
                    type="button"
                    onClick={() => toolbar.onNavigate('PREV')}
                    style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    Précédent
                  </button>
                  <button
                    type="button"
                    onClick={() => toolbar.onNavigate('NEXT')}
                    style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    Suivant
                  </button>
                  <button
                    type="button"
                    onClick={() => toolbar.onNavigate('TODAY')}
                    style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    Aujourd'hui
                  </button>
                  <button
                    type="button"
                    onClick={() => toolbar.onView('month')}
                    style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    Mois
                  </button>
                  <button
                    type="button"
                    onClick={() => toolbar.onView('week')}
                    style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    Semaine
                  </button>
                  <button
                    type="button"
                    onClick={() => toolbar.onView('day')}
                    style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    Jour
                  </button>
                </div>
              </div>
            );
          },
        }}      />
    </div>
    </div>
  );
};