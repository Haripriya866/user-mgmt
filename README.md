### Setup Instructions

* Prerequisites:
	Node.js (v20.18.0)
	npm (comes with Node.js)
	Git

* Initial Setup:
    open root folder for project in vs code:
        cd user management dashboard
    
    initialize git in this folder (user management dashboard):
        git init

    Set Up the Frontend:

        Run the following command to generate a React app (npx create-react-app frontend)

        Navigate to the frontend folder:
        cd ../frontend

        Install the necessary dependencies:
        npm install axios react-router-dom

    Set Up the Backend:

        Create a new folder for the backend:
        mkdir backend

        Navigate to the backend folder:
        cd ../backend

        Initialize the backend project:
	    npm init -y

        Install required dependencies:
	    npm install axios cors express

* Folder Structure and Logic:
    Frontend:

        The src folder contains the main logic for the React application.
		Components for the project are created in the components/ folder within src.

    Backend:

        The backend uses Express.js to set up APIs and CORS to share cross-origin resources.
		axios is used for making HTTP requests.

* Running the Application:
    Start the Backend:

        Navigate to the backend folder:
		cd backend

        Run the server (you can add a server.js file to define your logic):	
		node server.js

    Start the Frontend:

        Navigate to the frontend folder:
		cd ../frontend

        Start the React development server:
		npm start

# Title
ReactJS Full Stack Assignment - User Management Dashboard

## Objective
Develop a simple web application where users can view, add, edit, and delete user details from a mock backend API.


## Tech Stack
Use ReactJS, React Router, HTML, CSS, JavaScript, and GitHub to host the repository.

## Completion Instructions

### Functionality
#### Must Have
* View: Display all users by fetching data from the '/users' endpoint.
* Add: Allow adding a new user by posting to the '/users' endpoint. (Note: JSONPlaceholder won't add the user, but will simulate a successful response.)
* Edit: Allow editing of an existing user. This should involve fetching the current data for a user, allowing for edits, and then putting the updated data back via the API.
* Delete: Allow users to be deleted, by sending a delete request to the API.

#### Nice to Have
* Implement pagination or infinite scrolling for the user list.
* Add client-side validation for the user input form.
* Make the interface responsive.

### Guidelines to develop a project
#### Must Have
* Your primary focus should be on functionality. However, a clean UI will be appreciated.
* You may use vanilla JavaScript or any JavaScript framework/library of your choice like React, Angular, Vue, etc.
* Consider using tools like Axios or Fetch API for HTTP requests.
* Ensure the solution is modular and scalable.
* Document any assumptions you make.

### Submission Instructions
* Share the above implementation using a public git repo
* Include a README detailing setup and run instructions.
* Reflect on the challenges faced during the development process and any improvements you would make if given more time.

## Resources
## Design files
AddUser, UpdateUser, UserList

## APIS
* Use JSONPlaceholder, a free online REST API that you can use for demonstration and test purposes.
* Specifically, use the '/users' endpoint to fetch and manipulate user data.
