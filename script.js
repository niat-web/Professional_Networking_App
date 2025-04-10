// script.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. Core Concepts:
    // Primitive types
    const userName = "JohnDoe"; // string
    const userAge = 30; // number
    const isEmployed = true; // boolean
    let salary = null; // null
    let address; // undefined
    const uniqueID = Symbol("id"); // symbol

    // Type conversion
    const ageString = String(userAge);
    const pi = "3.14";
    const piNumber = parseFloat(pi);

    // Type coercion
    console.log("Age: " + userAge); // number coerced to string

    // Template literals
    const greeting = `Hello, my name is ${userName} and I am ${userAge} years old.`;
    console.log(greeting);

    // Variable scoping (let, const, var)
    function exampleScope() {
        if (true) {
            var functionScoped = "I am function-scoped";
            let blockScoped = "I am block-scoped";
            const constantValue = 10;
        }
        console.log(functionScoped); // Accessible
        // console.log(blockScoped); // Not Accessible - Block scope issue
        // console.log(constantValue); // Not Accessible - Block scope issue
    }

    exampleScope();

    // 2. Control Flow:
    const userRole = "admin";
    if (userRole === "admin") {
        console.log("Admin access granted.");
    } else if (userRole === "moderator") {
        console.log("Moderator access granted.");
    } else {
        console.log("Access denied.");
    }

    switch (userRole) {
        case "admin":
            console.log("Admin privileges");
            break;
        case "moderator":
            console.log("Moderator privileges");
            break;
        default:
            console.log("Limited privileges");
    }

    // Ternary operator
    const access = (userRole === "admin") ? "Full access" : "Read-only access";
    console.log(access);

    // Error Handling
    try {
        // code that might throw an error
    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        // code that always runs
    }

    // 3. User Input & Math:
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailInput = document.getElementById('email');
        const email = emailInput.value;

        if (!validateEmail(email)) {
            emailInput.classList.add('is-invalid');
            return;
        } else {
            emailInput.classList.remove('is-invalid');
        }

        console.log('Subscribed with email:', email);
        displayNotification('Successfully subscribed!');
        newsletterForm.reset(); // Clear the form
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    const feedbackForm = document.getElementById('feedbackForm');
    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const feedbackText = document.getElementById('feedbackText').value;
        if (!feedbackText) {
            document.getElementById('feedbackText').classList.add('is-invalid');
            return;
        } else {
            document.getElementById('feedbackText').classList.remove('is-invalid');
        }

        console.log('Feedback submitted:', feedbackText);
        displayNotification('Feedback submitted successfully!');
        feedbackForm.reset(); // Clear the form
    });

    // Math functions
    console.log("Random number:", Math.random());
    console.log("Rounded value:", Math.round(3.5));

    // 4. Arrays & Objects:
    const users = ["Alice", "Bob", "Charlie"];
    users.push("David"); // CRUD - Create
    console.log("Users:", users);

    users.splice(1, 1); // CRUD - Delete (remove Bob)
    console.log("Users after deletion:", users);

    users[0] = "Alicia"; // CRUD - Update
    console.log("Users after update:", users);

    // Map
    const userGreetings = users.map(user => `Hello, ${user}!`);
    console.log("Greetings:", userGreetings);

    // Filter
    const longNames = users.filter(user => user.length > 5);
    console.log("Long names:", longNames);

    // Reduce
    const nameLengths = users.reduce((acc, user) => {
        acc[user] = user.length;
        return acc;
    }, {});
    console.log("Name lengths:", nameLengths);

    // Spread/Rest
    const newUsers = [...users, "Eve", "Frank"];
    console.log("New users:", newUsers);

    function restFunction(first, ...rest) {
        console.log("First:", first);
        console.log("Rest:", rest);
    }

    restFunction(1, 2, 3, 4);

    const userObject = {
        name: "John Doe",
        age: 30,
        occupation: "Software Engineer",
        greet: function() {
            console.log(`Hello, I am ${this.name}`);
        }
    };

    console.log("User name:", userObject.name);
    userObject.greet();

    // 5. Functions & Events:
    function namedFunction(name) {
        console.log("Hello, " + name);
    }

    namedFunction("World");

    const arrowFunction = (name) => {
        console.log("Hello, " + name);
    };

    arrowFunction("Arrow");

    function callbackExample(name, callback) {
        console.log("Performing operation on " + name);
        callback(name);
    }

    callbackExample("CallbackUser", (name) => {
        console.log("Callback executed for " + name);
    });

    // Event Listeners
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const theme = document.body.getAttribute('data-theme');
        if (theme === 'dark') {
            document.body.removeAttribute('data-theme');
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';

        } else {
            document.body.setAttribute('data-theme', 'dark');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        }
    });

    // Keyboard/Mouse interactions
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            console.log("Enter key pressed");
        }
    });

    // Event Delegation
    document.querySelector('body').addEventListener('click', (event) => {
        if (event.target.classList.contains('nav-link')) {
            event.preventDefault();
            console.log("Nav link clicked");
        }
    });

    // 6. Async Operations & API Integration:
    const userCardsContainer = document.getElementById('userCards');
    const refreshDataButton = document.getElementById('refreshData');

     // Function to fetch data, handling CORS and errors
    async function fetchData(url) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                return await response.json();
            } else {
                console.error("Failed to fetch data:", response.status);
                return null;
            }
        } catch (error) {
            console.error("Network error or CORS issue:", error);
            // Attempt to use the AllOrigins proxy
            const proxyUrl = `https://api.allorigins.win/raw?url=${url}`;
            try {
                const proxyResponse = await fetch(proxyUrl);
                if (proxyResponse.ok) {
                    return await proxyResponse.json();
                } else {
                    console.error("Failed to fetch data via proxy:", proxyResponse.status);
                    return null;
                }
            } catch (proxyError) {
                console.error("Proxy fetch failed:", proxyError);
                displayNotification("Failed to load data. Check your internet connection.");
                return null;
            }
        }
    }
    
    async function loadUserData() {
        const apiUrl = "https://freetestapi.com/api/v1/users";
        userCardsContainer.innerHTML = '<p>Loading data...</p>';

        const data = await fetchData(apiUrl);

        if (data) {
            const shuffledData = data.sort(() => Math.random() - 0.5);
            displayUsers(shuffledData);
        } else {
            userCardsContainer.innerHTML = '<p>Failed to load user data.</p>';
        }
    }

    function displayUsers(users) {
    userCardsContainer.innerHTML = ''; // Clear existing cards

    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                    <p class="card-text"><strong>Username:</strong> ${user.username}</p>
                    <p class="card-text"><strong>Email:</strong> ${user.email}</p>
                    <p class="card-text"><strong>Occupation:</strong> ${user.occupation}</p>
                    <p class="card-text"><strong>Hobbies:</strong> ${user.hobbies.join(', ')}</p>
                    <a href="#" class="btn btn-primary">Connect</a>
                </div>
            </div>
        `;
        userCardsContainer.appendChild(card);
    });
    }


    refreshDataButton.addEventListener('click', loadUserData);

    loadUserData();

    // 8. DOM Manipulation:
    function displayNotification(message) {
        const notificationDiv = document.getElementById('notification');
        notificationDiv.textContent = message;
        notificationDiv.style.display = 'block';
        setTimeout(() => {
            notificationDiv.style.display = 'none';
        }, 3000);
    }

    // 9. Forms & Storage (already demonstrated in form validation):
    // Example of local storage usage:
    localStorage.setItem('userName', 'JohnDoe');
    const storedName = localStorage.getItem('userName');
    console.log("Stored name:", storedName);
    localStorage.removeItem('userName');

    // 10. UI Enhancements:
    // Dark/light mode toggle (implemented above)
    // Notification (implemented above)

    // 11. Best Practices:
    // Modular code (organized into functions)
    // Clean separation of concerns (separate functions for different tasks)
});