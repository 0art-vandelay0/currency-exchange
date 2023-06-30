# &#x1F4B5; **Currency Exchange** &#x1F4B4;

#### **By Casey Hill**

#### A calculator tool that will calculate the exchange rate from USD to a chosen currency. &#x1F4B2; &#x27A1; &#x1F4B1;

#### ...._"Money is the universal self-established value of all things. It has, therefore, robbed the whole world... of its proper value."_ - Karl Marx

## **Technologies Used**

-   ExchangeRate API integration
-   Asyncronous programming
-   JavaScript
-   CSS
-   HTML
-   VS Code
-   git
-   GitHub
-   Node Package Manager (npm)
-   JSON
-   Babel (v7.18.6)
-   EsLint v(8.18.0)
-   Jest (v24.9.0)
-   webpack (v4.46.0)
    -   webpack-cli (v3.3.12)
    -   webpack-dev-server (v3.11.3)
    -   clean-webpack-plugin (v3.0.0)
    -   dotenv-webpack (v2.0.0)
-   Loaders
    -   css-loader (v3.6.0)
    -   file-loader (v6.2.0)
    -   html-loader (v1.3.2)
    -   style-loader (v1.3.0)

## **Description**

The Currency Converter is a web application that allows you to convert USD to other currencies based on the latest exchange rates. You can easily calculate the exchange rate, making it convenient for travel planning, international transactions, and financial planning.

## **Setup/Installation Requirements** &#x1F4BB;

### **In IDE** (this serves as instructions for VS Code)

-   Clone this repository to your local machine.
-   Open VS Code.
-   Open the top level directory you just cloned.
-   In your terminal enter commands:
    -   `npm install`
    -   `npm run build`
-   Get API key
    -   In you browser navigate to [https://www.exchangerate-api.com](https://www.exchangerate-api.com/)
    -   Enter your email and click the "Get Free Key!" button.
    -   Once logged in, select &#x1F511; <strong>API Keys</strong> on left hand side menu.
    -   Copy the access key code under &#x2705; Active.
-   At the root directory, create a `.env` file and enter:
    -   `API_KEY=<paste_your_api_key_here>`<br>
        make sure to remove the angle brackets as well as any whitespaces or extra punctuation.
-   Save and enter `npm run start` into terminal.
-   A new window will open in your browser at port 8080.

    -   Enter the amount in USD you want converted.
    -   Select the end point conversion by code.
    -   Hit the "Submit" button.

    That's it!

#### Debugging

If the program does not run, try the following:

-   Check for error messages
    -   All errors will be routed to the DOM and read on the page.
    -   If 404 error:
        -   Check that the API_KEY variable in your .env file has no trailing whitespace or any punctuation. This includes no semicolon at the end of declaration.
        -   Check that your API key/access code from [https://www.exchangerate-api.com](https://www.exchangerate-api.com/) is valid.
        -   Try generating the GET request in an API development/testing app or in your browser URL:<br>
            `https://v6.exchangerate-api.com/v6/`<strong>`<your_api_key_goes_here>`</strong>`/latest/USD`
-   Ensure dotenv is installed
    -   In your Terminal enter `npm install dotenv-webpack@2.0.0 --save-dev`

## **Known Bugs**

-   No known bugs.

## License

Please contact [caseyfhill1@gmail.com](mailto:caseyfhill1@gmail.com?subject=Hello%20Casey,&body=You%20are%20amazing...) with any the following:

-   Found bugs &#x1F41E;
-   Alterations and improvements
-   General Questions
-   Any contributions you would like to make! &#x1F5DD;

Copyright (c) 06/16/2023 Casey Hill
