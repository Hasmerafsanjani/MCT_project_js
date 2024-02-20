## My MCT Project
Welcome to the documentation for the MCT (Mobile Phone Catalog) project. This project is a simple web application built using JavaScript that allows users to search for mobile phones using a keyword and view detailed information about each phone. Below, you'll find an overview of the project structure and instructions on how to use it.

# Deployment link : https://hasmerafsanjani.github.io/Phone_Buying_Website/

### Table of Contents
* Project Overview
* Getting Started
* How to Use
* Project Overview
The MCT project is a web application that leverages JavaScript to fetch and display information about mobile phones. It consists of several key components:

🚀 Search Handler (searchHandler): This function is responsible for handling user searches. It retrieves the search text from the input field and then calls the loadPhone function to fetch and display phone data.

🚀 Loading Indicator (loading): The loading function manages the visibility of a loading spinner. It takes a boolean parameter to show or hide the spinner.

🚀 Load Phone Data (loadPhone): This asynchronous function fetches phone data from an external API based on the search text provided. It then calls the displayPhones function to display the retrieved data.

🚀 Display Phones (displayPhones): This function takes the phone data and displays it on the web page. It creates a card for each phone, including an image, name, and a "Show Details" button. It also handles pagination if there are more than 12 results.

🚀 Show All Button (showBtn): This function is called when the "Show All" button is clicked, allowing users to see all search results.

🚀 Show Details Handler (showDetailsHandler): This asynchronous function is responsible for fetching and displaying detailed information about a specific phone when the "Show Details" button is clicked.

🚀 Show Phone Details (showPhoneDetails): This function displays detailed information about a phone, including its name, brand, specifications, release date, and an image.

🚀 Getting Started
To get started with the MCT project, follow these steps:

Clone or download this repository to your local machine.

Open the project directory in your code editor of choice.

Ensure you have an internet connection, as the project fetches data from external APIs.

Open the index.html file in a web browser to view the application.

### *** How to Use

Open the application in your web browser by opening the index.html file.

You will see a search input field at the top of the page. Enter a keyword related to the mobile phone you want to search for (e.g., "Samsung," "iPhone," "Android").

Press the "Enter" key or click the search icon to initiate the search.

The application will display a list of mobile phones that match your search query. Each phone will be presented in a card format with an image, name, and a "Show Details" button.

To view detailed information about a specific phone, click the "Show Details" button on the respective phone card.

A modal will pop up displaying detailed information about the selected phone, including its name, brand, specifications, release date, and an image.

You can also click the "Show All" button to display all search results at once if there are more than 12 results.
