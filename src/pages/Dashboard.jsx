import React, { useEffect } from 'react'
import { useState } from 'react';

const Dashboard = () => {
    const [activePage, setActivePage] = useState("My Events");

    const [attendees, setAttendees] = useState([])
    const [attendeeCount, setAttendeeCount] = useState(0);

    const fetchAttendees = async () => {
      return [
        {id: 1, name: "John Doe", phone: "123-456-7890", registrationTime: '2025-04-06 10:00 AM'},
        {id: 1, name: "Janet Doe", phone: "124-457-7891", registrationTime: '2025-04-06 10:00 AM'}
      ]
    };

    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchAttendees();
        setAttendees(data);
        setAttendeeCount(data.length);
      };
      fetchData();
    }, [])
  return (
    <nav className='p-6'>
      <ul className='flex justify-evenly items-center'>
        <li className={`cursor-pointer ${activePage === 'My Events' || activePage === 'My Events' ? "text-purple-600" : ''}`}
          onClick={() => setActivePage('My Events')}>My Events</li>

        <li className={`cursor-pointer ${activePage === 'Attendees' ? 'text-purple-600' : ''}`}
          onClick={() => setActivePage('Attendees')}>Attendees </li><div className='px-4 py-2 rounded-xl'>{attendeeCount}</div>
      </ul>

      <div className='mt-4'>
        {activePage === 'My Events' ? (
          <div>
            <h1>This is the page for my events</h1>
          </div>
        ) : (
          <table className="min-w-full table-auto mt-8 border-collapse flex flex-col justify-center itmes-center">
          <thead className="bg-purple-600">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Phone Number</th>
              <th className="px-4 py-2 text-left">Registration Time</th>
            </tr>
          </thead>
          <tbody>
            {attendees.map((attendee) => (
              <tr key={attendee.id}>
                <td className="px-4 py-2">{attendee.name}</td>
                <td className="px-4 py-2">{attendee.phone}</td>
                <td className="px-4 py-2">{attendee.registrationTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
        ) }
      </div>
    </nav>
  )
}

export default Dashboard