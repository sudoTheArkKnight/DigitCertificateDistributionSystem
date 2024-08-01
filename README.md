# Certifications Viewer

==========================


A simple web application that allows users to view their certifications by entering their roll number.


## Overview

------------


This application consists of a single HTML file (`index.html`) that contains a form to input the roll number, and a JavaScript file (`checking.js`) that handles the form submission and redirects the user to the corresponding PDF certificate.


## Features

------------


*   **Roll Number Input**: Users can enter their roll number in the input field.

*   **Form Submission**: When the user submits the form, the application prevents the default form submission behavior and instead redirects the user to the corresponding PDF certificate.

*   **PDF Certificate Viewer**: The application assumes that PDF certificates are stored in a `/certificates` folder, with each certificate named after the roll number (e.g., `12345.pdf`).


## Technical Details

--------------------


### HTML Structure


The HTML structure consists of a single `form` element with an input field for the roll number and a submit button. The form is styled using CSS to center it vertically and horizontally on the page.


```html

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Certifications</title>

    <style>

        *{

            background-color: bisque;

        }

        body {

            display: flex;

            justify-content: center;

            align-items: center;

            height: 100vh;

            margin: 0;

        }

        form {

            display: flex;

            flex-direction: column;

            align-items: center;

        }

    </style>

</head>

<body>

    <form action="/checking.js" method="get">


        Enter the Roll number:

        <input type="text" name="rollno" id="rollno"> <br/>

        <input type="submit" name="submit" value="Submit">

        

    </form>

    <script>


        const form = document.querySelector('form');

        const rollnoInput = document.querySelector('#rollno');

        form.addEventListener('submit', (e) => {

            e.preventDefault(); // prevent default form submission

            const rollno = rollnoInput.value.trim();

            const pdfUrl = `/certificates/${rollno}.pdf`; // assuming PDF files are in /certificates folder

            window.location.href = pdfUrl;

        });


    </script>

</body>

</html>

JavaScript Logic

The JavaScript code uses the following logic:

    Form Submission Event Listener: An event listener is attached to the form submission event to prevent the default form submission behavior.
    Roll Number Extraction: The roll number is extracted from the input field and trimmed to remove any whitespace.
    PDF URL Construction: The PDF URL is constructed by concatenating the /certificates/ path with the roll number and the .pdf extension.
    Redirect to PDF: The user is redirected to the constructed PDF URL using the window.location.href property.

Vercel Configuration

The vercel.json file contains a rewrite rule that maps the /api/checking path to the /api/checking.js file. This allows the application to handle requests to the /api/checking endpoint.

json

{

  "rewrites": [{ "source": "/api/checking", "destination": "/api/checking.js" }]

}

Installation and Deployment

To deploy this application, follow these steps:

    Clone the repository to your local machine.
    Create a new Vercel project and link it to your GitHub repository.
    Configure the vercel.json file to point to the correct /api/checking.js file.
    Deploy the application to Vercel using the vercel build and vercel deploy commands.

Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.
License

This project is licensed under the MIT License. See the LICENSE file for details.
