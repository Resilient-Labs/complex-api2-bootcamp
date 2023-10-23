# Define and Display 📝📸

Web application that allows users to input a word and receive its definition along with an image related to that word. It utilizes two APIs, one for retrieving word definitions and another for fetching related images.

## Features

- **Word Definition**: Enter a word in the input field and click the "Generate" button to get its definition.

- **Image Display**: After retrieving the word's definition, the application fetches an image related to the word and displays it.

## How to Use

1. Enter a word in the text input field.
2. Click the "Generate" button.
3. The application will fetch and display the word's definition and an image associated with it.

## Technologies Used

- HTML
- CSS
- JavaScript

## API Usage

This project uses two APIs:

1. **Dictionary API**: It retrieves word definitions using the [Dictionary API](https://dictionaryapi.dev/). The API URL is generated based on the word entered by the user.

2. **Unsplash API**: It fetches images related to the word using the [Unsplash API](https://unsplash.com/developers). The API URL is generated using the word retrieved from the dictionary API.
