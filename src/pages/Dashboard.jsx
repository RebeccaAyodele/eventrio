import React from 'react'
import { useState } from 'react';

const Dashboard = () => {
    const [activePage, setActivePage] = useState("My Events");
  return (
    <nav>
      <ul>
        <li className={`cursor-pointer ${activePage === "My Events" || activePage === "My Events" ? "text-purple-600" : ''}`}
          onClick={() => setActivePage('My Events')}>My Events</li>

        <li className={`cursor-pointer ${activePage === 'Attendees' ? 'text-purple-600' : ''}`}
          onClick={() => setActivePage('Attendees')}>Attendees</li>
      </ul>

      <div className='mt-4'>
        {activePage === "My Events" ? (
          <div>
            <h1>This is the page for my events</h1>
          </div>
        ) : (
          <div>
            This is the page for attendees
          </div>
        ) }
      </div>
    </nav>
  )
}

export default Dashboard