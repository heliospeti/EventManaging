PROJECT: EVENT REGISTRATION PLATFORM
Description: Develop an event registration platform that allows users
to create and manage events. Users can register for events, and
event organizers can view and manage their events, including
attendee lists and event details. An admin user will have the
authority to manage all events and users.

ENTITIES:
User: Represents a registered user with basic details like name, email, and password.
Event: Contains information about an event, such as event name, description, date,
location, and the organizer’s ID.
Attendee: Represents a user registered for a particular event, with the attendee’s ID
and the event they are attending.

RELATIONSHIPS:
One-to-Many: Each user can organize multiple events. Events are associated with a
specific user (the organizer).
Many-to-Many: Each event can have multiple attendees, and each attendee can
attend multiple events.

MAIN FEATURES:
Event Listing (React frontend to display events retrieved from the Node.js backend
based on the logged-in user or admin)
Event Creation (React frontend form for event organizers to add new events, saved
to DB with the organizer’s ID as a reference)
Event Editing (React frontend form to edit event details and update DB records)
Event Deletion (React frontend button to delete events from DB)
User Registration for Events (React frontend form to allow users to register for
events)

Attendee List (React frontend to display the list of attendees for each event)
Admin Dashboard (React frontend with additional admin privileges to manage all
events and users)
Technology Stack: React, Node.js, Express, React Router, Axios (for API calls),
JSON Web Tokens (JWT) for authentication, DB of choice.

BONUS FEATURES
Add unit tests and integration tests
Deploy in a host
Use docker and docker-compose to build the project
