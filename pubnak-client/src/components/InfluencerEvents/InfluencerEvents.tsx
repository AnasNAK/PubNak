import React from 'react';

interface InfluencerEventProps {
  title: string;
  date: string;
  icon: string;
}

const InfluencerEvent: React.FC<InfluencerEventProps> = ({ title, date, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center ">
      <div className={`bg-green-500 text-white rounded-full p-2 mr-4 ${icon}`}></div>
      <div>
        <h3 className="text-sm font-bold">{title}</h3>
        <p className="text-gray-500">{date}</p>
      </div>
    </div>
  );
};

const InfluencerEvents: React.FC = () => {
  const events = [
    { title: 'Influencer Product', date: 'Sat 16 June, Product Launch', icon: 'fa fa-box' },
    { title: 'Influencer Campaign', date: 'Sat 16 June, Campaign', icon: 'fa fa-bullhorn' },
    { title: 'Influencer Music', date: 'Sat 16 June, Music Event', icon: 'fa fa-music' },
    { title: 'Influencer Stand-up', date: 'Sat 16 June, Comedy Club', icon: 'fa fa-laugh' },
    { title: 'Influencer Festival', date: 'Sat 16 June, Festival', icon: 'fa fa-calendar' },
  ];

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md fixed h-max">
      <h2 className="text-lg font-bold mb-4">Influencer Events</h2>
      <div className="space-y-4">
        {events.map((event, index) => (
          <InfluencerEvent
            key={index}
            title={event.title}
            date={event.date}
            icon={event.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default InfluencerEvents;