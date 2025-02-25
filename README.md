# Marina Resort & Spa

## Overview

**Marina Resort & Spa** is a private hotel booking web application built using **React**. This platform is exclusively designed for hotel employees, ensuring a secure and efficient way to manage hotel bookings, cabins, and administrative settings.

## Features

-   **User Authentication**: Only authenticated users can access the platform. New users can only be created by existing authorized users.
-   **Admin Privileges**:
    -   Create, update, and delete cabins.
    -   Delete bookings.
    -   Modify hotel settings.
    -   Update personal details.
    -   Manage user access.
    -   Check-in and check-out guests.
-   **Secure Access**: The application is private and restricted to hotel employees only.
-   **Filter**: Authenticated user can filter the bookings based on displayed options.
-   **Sorting**: Authenticated user can sort the data based on displayed options.
-   **Dashboard**: A beautifull dashboard to displays the today activity, and charts to display stays of guests and sales made by the hotel.

## Technology Stack

-   **Frontend**: React.js, react-router-dom
-   **Authentication**: Secure authentication system for authorized access.
-   **State Management**: TanStack Query
-   **Backend & Database**: Supabase
-   **Form Management**: React Hook Form
-   **Charts**: Recharts
-   **Styling**: styled-components
-   **Notifications**: react-hot-toast

## Installation & Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/marina-resort-spa.git
    ```
2. Navigate to the project directory:
    ```sh
    cd marina-resort-spa
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Start the development server:
    ```sh
    npm run dev
    ```

## Usage

-   **Admin Access** Email: test@test.com Password: test.com
-   **Login with valid credentials** to access the system.
-   **Admins can perform administrative tasks**, including booking management, cabin creation, and settings modification.
-   **Check-in and Check-out functionality** is available to manage guest stays.

---
