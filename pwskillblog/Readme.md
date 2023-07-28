# Blogging Web Application Readme

## Introduction

This is a blogging web application that allows users to create, view, and manage blog posts. The application consists of two main pages: the home page and the blog page.

## Folder Structure
|-index.html
    |-Contains all the Html Elements
|-style.css
    |-Styling for the page
|-script.js
    |-localstorage setup
    |-stucture of the blogs 
    |-Logic for creating and reading a blog in UI
## Home Page

On the home page, users can see a list of all existing blog posts with their titles and brief summaries. Clicking on a blog post will redirect users to a separate page where they can view the full content of the blog post.

### Adding New Blog Post

To add a new blog post, there is a "+" icon on the header. Clicking on this icon will open a modal window.

#### Add Blog Modal

The add blog modal contains a form with fields to input the following details:

- Blog Title: The title of the new blog post.
- Blog Poster: The name or username of the blog post author.
- Description: A brief description or summary of the blog post.
- Blog Content: The main content of the blog post.

Upon submitting the add blog form, the new blog post will be added to the list of existing blogs on the home page, and the data will be stored in the LocalStorage.

## Usage

To use the blogging web application, follow these steps:

1. Open the home page of the application.
2. Explore the list of existing blog posts and their summaries.
3. Click on any blog post to view its full content on a separate page.
4. To add a new blog post, click on the "+" icon in the header to open the add blog modal.
5. Fill in the required fields in the add blog form.
6. Upon submission, the new blog post will be added to the list of existing blogs on the home page, and the data will be stored in the LocalStorage.

## Development

The web application is built using HTML, CSS, and JavaScript. It uses LocalStorage to store the blog data. The application can be extended and customized further based on specific requirements.

## Credits

This blogging web application is created by [Your Name]. Feel free to reach out for any suggestions or improvements. Happy blogging!