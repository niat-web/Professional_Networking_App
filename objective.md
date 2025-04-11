# Professional_Networking_App

## Objective
This JavaScript code demonstrates fundamental JavaScript concepts and their application in building a simple professional networking application. It covers core concepts like primitive types, type conversion, and variable scoping. It also focuses on UI enhancements like dark/light mode and notifications. The application includes form validation, user data fetching from an API, DOM manipulation for displaying user cards, and local storage usage.

## Output
<iframe src="https://niat-web.github.io/Professional_Networking_App/" height="1000" width="300" title="Professional_Networking_App"></iframe>

## Project Requirements
**Technologies:** HTML, CSS, JavaScript

## Features to Implement
- Display a list of user profiles fetched from an external API.
- Implement form validation for newsletter and feedback forms.
- Add a dark/light mode toggle for UI enhancement.

## UI Enhancements
- Display notifications for successful form submissions.
- Style user cards for better presentation.

## Project Tasks & Expected Outcomes
| Task | Expected Outcome |
|------|------------------|
| Fetch user data from API | Display a list of user cards with fetched data. |
| Validate newsletter form | Display error messages for invalid email format, and display notification for successful submission. |
| Implement dark/light mode toggle | Toggle between dark and light themes on the page. |
| Validate feedback form | Display error message if the feedback text is empty and display a notification for successful submission. |

## JavaScript Concepts
| Concept | Implementation |
|---------|----------------|
| Primitive Data Types | Declaration and usage of `string`, `number`, `boolean`, `null`, `undefined`, and `symbol`. |
| Type Conversion & Coercion | Explicit conversion using `String()`, `parseFloat()`, and implicit coercion with string concatenation. |
| Variable Scoping | Demonstration of `var`, `let`, and `const` scoping rules within functions and blocks. |
| Control Flow | Usage of `if...else if...else`, `switch` statements, and ternary operators to control program flow. |
| Error Handling | Implementation of `try...catch...finally` blocks for handling potential errors. |
| Arrays | Creation, manipulation (CRUD operations), and iteration using `push`, `splice`, and array methods like `map`, `filter`, `reduce`. |
| Objects | Object creation, property access, and method invocation. |
| Functions | Declaration of named functions, arrow functions, and usage of callback functions. |
| Event Listeners | Attaching event listeners to DOM elements for user interactions such as `click`, `submit`, and `keydown`. |
| DOM Manipulation | Selecting DOM elements, modifying their content, and manipulating their classes. |
| Async Operations | Using `async/await` to fetch data from an API and handle the response. |
| Local Storage | Storing and retrieving data from local storage. |

## API Details
| API | Endpoint | Description |
|-----|----------|-------------|
| freetestapi.com | https://freetestapi.com/api/v1/users | Fetches a list of users, including name, username, email, occupation and hobbies. |