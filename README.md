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

 <h2>Installation</h2>
   <p>Follow these steps to run locally:</p>
    
   <pre><code>Clone:- </code></pre>
   <pre><code>Go inside app : cd/quest_profile</code></pre>
   <pre><code>npm install</code></pre>
   <pre><code>npm start</code></pre>
   <hr>

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
  
   <h2>Usage</h2>
   <p>Feel free to explore and integrate these endpoints into your application.</p>
   <hr>


  

