# Burger Munch App

# Problem
Have a number of burgers in front of you ready to eat, but don't know which one to start with or which ones you have already eaten? This Burger Munch App is perfect for keeping track of any and all burger ingestions.

# Overview
In a fashion similar to a task checklist or ToDo list, this app keeps track of all "tasks" (read "burger") that needs to be completed. On one side of the application, there is a list of burgers that need to be consumed. On the right side of the application, there is a list of burgers that have _already_ been consumed. At the bottom of the page, there lies the ability to create a _new_ burger to be consumed. And here, on this page, lies your ToDo list. With the help of express routing and MySQL, all of your tasks are kept up to date and rendered in real time.

# Instructions

### Eating Burgers
In order to consume a burger on the list, click on the "NOM" button to the right of the list element on the left side of the page. The page with reload with that burger in the column on the right side of the page that contains all of the burgers that have already been eaten.

### Adding New Burgers
If you would like to add more burgers to your "to-do" list. Type the name of the burger in the text field at the bottom of the page and the click the "Yeet" button underneath. Once again, the page will reload, but this time with the new burger in your "to-do" column on the left side of the page.


# Technology
The [mysql npm package](https://www.npmjs.com/package/mysql) was used to parse through the database and manipulate and grab the data to be presented to the user.

The [express npm package](https://www.npmjs.com/package/express) was used to run html, routing between pages and elements in the application and API routing, routing getting information from and posting to/updating/deleting from the database, for the app.

The [express-handlebars npm package](https://www.npmjs.com/package/express-handlebars) was used to create templates for the page and significantly reduce coding of the html elements of the application.

# Role
Lead Developer