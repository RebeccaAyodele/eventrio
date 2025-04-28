import { Outlet, Link } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>
      {/* <nav>
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/dashboard/create">Create Event</Link> |{" "}
        <Link to="/dashboard/attendees">Attendees</Link>
      </nav> */}
      <Outlet />
    </div>
  )
}

export default DashboardLayout
