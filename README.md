# Profile Listing App

## Setup
1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.

## Features
- Fetch and display profiles from an API.
- View profile details.
- Search functionality.
- Pagination.
- Responsive design.

### state managment explanation 
•	Redux is used as the state management library.
•	The state is stored in a central Redux store.
•	Components (like Profile List Page) read data
•	Components update the state by dispatching actions

1.	Initial Load:
o	The Profile List Page component dispatches fetchProfiles to load the full list of clients.
o	The Redux store updates with the fetched data.
2.	Search:
o	The user types in the search box.
o	The setSearchQuery action is dispatched, updating the searchQuery and filtering the filteredData.
3.	Navigate to Detail Page:
o	The user clicks on a client to view details.
o	The app navigates to the detail page without losing the state in the Redux store.
4.	Navigate Back:	When the user returns to the profile page, the filteredData is still available in the Redux store, so the search results are preserved.
