# Quest-Profile
## Overview

This repository contains the code for a mobile screen UI designed using React for an assignment given by Quest Labs.

## Technologies Used

### 1. React

React is a JavaScript library for building Ssamless UI. Its component-based architecture makes it easy to manage and organize UI elements, promoting reusability and maintainability.React Provide SOC ( Seperation of Concerns ) so we can separate our app.

### 2. Axios

Axios is a promise-based HTTP client for making asynchronous requests in JavaScript. It simplifies data fetching and handling HTTP responses, making it a reliable choice for API interactions in React applications.


## Deployment

The application is deployed on Vercel and can be accessed [here](https://quest-labs-profile.netlify.app/).

# Profile Page 

![Profile](https://github.com/JahirPendhari09/Quest-Profile/assets/128920395/e8aded39-3dfc-4fee-8b8d-904289c46b03)


 # How to Run <br/>
   <h2>Installation</h2>
     Clone the repository:   ``` git clone https://github.com/JahirPendhari09/Quest-Profile.git ``` <br/>
     Navigate to the project directory:   ``` cd quest-profile ``` <br/>
     Install the dependencies:   ``` npm install ``` <br/>
     Start the development server:   ``` npm start ``` <br/>
     Open your browser and visit:   ``` http://localhost:3000 ``` <br/>

   <h2>Endpoints</h2>
   <h3>Get User Details</h3>
   <pre><code>GET api/users/:userId</code></pre>

   <h3>GET User Points and Level</h3>
   <pre><code>GET  api/entities/{entityId}/users/{userId}/xp</code></pre>
  
   <h3>GET User Rank</h3>
   <pre><code>GET api/entities/{entityId}/users/{userId}/xp-leaderboard-rank</code></pre>

   <h3>GET User Point History</h3>
   <pre><code>GET api/entities/{entityId}/users/{userId}/xp-history</code></pre>

   <h3>GET User Badges</h3>
   <pre><code>GET api/entities/{entityId}/users/{userId}/badges</code></pre>
  

   # Credits <br/>
   This project was developed by ```Jahir Pendhari``` as a part of ```Masai School``` training program.

   <p>Feel free to explore and integrate these endpoints into your application.</p>
  

