---

# Sublime Data Systems Full-Time Pre-Screening Assessment

## Project Overview

This project is a pre-screening assessment for Sublime Data Systems Private Limited. It consists of both frontend and backend components aimed at managing customer data.

### Backend

#### Routes

- `/search`: GET request to search for customers with pagination.
- `/getCustomerDetails/:customerId`: GET request to retrieve details of a single customer by their ID.
- `/uniqueCityWithCount`: GET request to list all unique cities with the number of customers from each city.

#### Data Management

- Customers are stored in a JSON file with sample customer data.
- Alternatively, a database can be used to store and manage customer data.

### Frontend

#### Routes

- `/`: Dashboard displaying a list of all customers with search and pagination features.
- `/customerDetails/:customerId`: Route to display detailed information about a specific customer. Includes a back button to return to the dashboard.
- `/uniqueCities`: Route to display a list of cities with the number of customers from each city.

---

## Frontend Implementation

The frontend is implemented using React with React Router for routing. The `App` component defines the frontend routes and their corresponding components:

```jsx
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route
        path="/customerDetails/:customerId"
        element={<CustomerDetails />}
      />
      <Route path="/uniqueCities" element={<CityList />} />
    </Routes>
  );
}
```

### Features

1. **Dashboard**: Displays a list of all customers with search and pagination functionality.
2. **Customer Details**: Shows detailed information about a specific customer. Includes a back button to return to the dashboard.
3. **Unique Cities**: Displays a list of cities with the number of customers from each city.

---

## Backend Implementation

The backend is implemented using Express.js for handling routes and APIs.

### Routes

1. **Search**: GET request to search for customers with pagination.
2. **Get Customer Details**: GET request to retrieve details of a single customer by their ID.
3. **List Unique Cities with Count**: GET request to list all unique cities with the number of customers from each city.

### Data Management

- Customer data can be managed using a JSON file or a database of choice.
- I have used the same json file in mongodb By created DB name "subline_data" and collection "customers".

---

## Getting Started

### Prerequisites

- Node.js installed on your system.
- NPM or Yarn package manager.

### Installation

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install` or `yarn install`.

### Running the Application

1. Start the backend server: `npm run server` or `yarn server`.
2. Start the frontend development server: `npm start` or `yarn start`.

---

## Conclusion

This project serves as a pre-screening assessment for Full-Time positions at Sublime Data Systems Private Limited. It demonstrates the ability to implement both frontend and backend components for managing customer data effectively.

For any inquiries or assistance, please contact [your name or email].

---
