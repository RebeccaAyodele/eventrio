const API_BASE_URL = "https://eventrio.onrender.com"

export const loginUser = async (loginData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/login/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
          });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error loggging in:', error);
        throw error
    }
};

export const getEvents = async (token) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/events/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};

export const getEventAttendees = async (id, token) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/events/${id}/attendees/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching event attendees:', error)
        throw error;
    }
}