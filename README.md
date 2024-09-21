# AI_Concept_React_App
**AI Concept** is a simple React website that demonstrates static routing, dynamic routing, error handling (404 page), and a contact form that sends messages via EmailJS. This project was built to explore basic React and routing functionalities.

### Live: https://ai-concept-react-app.netlify.app/

## Features
- Static and Dynamic Routing using `react-router-dom`
- 7 Pages (Home, About AI, Applications, Future of AI, Blogs AI, Blog Details, Contact)
- 404 Error page handling for invalid routes
- Contact form that sends an email using EmailJS

## Purpose
The purpose of **AI Concept** is to provide a practical learning project for understanding the key concepts of React routing, form handling, and error page management. This project was created to practice:
- Static and dynamic routing in React using `react-router-dom`
- Handling a 404 error page for undefined routes
- Creating and managing a contact form that sends messages via EmailJS
- Building a small-scale web application with multiple pages

## Pages
1. Home
2. About AI
3. AI Applications
4. Future of AI
5. Contact
6. Blogs AI
7. Blog Details
8. 404 Error Page (for any undefined routes)

## Technologies Used
- **React**: JavaScript library for building user interfaces
- **React Router**: For routing between pages
- **EmailJS**: Service for sending emails directly from your website
- **HTML/CSS**: Basic styling and layout

## Installation

To run these apps locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ShawonBarman/AI_Concept_React_App.git
   cd AI_Concept_React_App
   ```

2. **Install dependencies:**

   Make sure you have Node.js and npm installed.

   ```bash
   npm install
   ```

3. **Change EmailJS credentials:**

   From Home.jsx and Contact.jsx, change the service id, template id, and public key.

   ```bash
   emailjs.send(
      '<your_service_id>',
      '<your_template_id>',
      templateParams,
      '<your_public_key>'
   )
   ```

4. **Run the applications:**

   ```bash
   npm start
   ```
This will start the app at http://localhost:3000.

## License

This project is open-source and available under the MIT License.
