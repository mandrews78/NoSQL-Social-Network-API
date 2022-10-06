# NoSQL-Social-Network-API
This is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list.

## User Story
```md
AS A social media startup  
I WANT an API for my social network that uses a NoSQL database  
SO THAT my website can handle large amounts of unstructured data 
```  
## Acceptance Criteria
```md
GIVEN a social network API  
WHEN I enter the command to invoke the application   
THEN my server is started and the Mongoose models are synced to the MongoDB database   
WHEN I open API GET routes in Insomnia for users and thoughts   
THEN the data for each of these routes is displayed in a formatted JSON   
WHEN I test API POST, PUT, and DELETE routes in Insomnia   
THEN I am able to successfully create, update, and delete users and thoughts in my database    
WHEN I test API POST and DELETE routes in Insomnia   
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list   
```
## Demo
https://drive.google.com/file/d/1jPJN32seTTo3UOyEHwv0WXxUzNslQqJA/view

## Screenshots
Get All Users
![GetAllUSers](https://user-images.githubusercontent.com/70594281/194210403-0f2ba091-f66b-4f3f-99f7-9b0ed4c7a1ba.png)

Get All Thoughts
![GetAllThoughts](https://user-images.githubusercontent.com/70594281/194210408-c53630cf-15aa-4297-96e3-17b38753c53a.png)

Get User by Id
![FindUSerById](https://user-images.githubusercontent.com/70594281/194210516-9ae0392a-82d6-4b28-80d8-1f67e8c865c7.png)

## Installation
 - Download or clone the repository from Github.
 https://github.com/mandrews78/NoSQL-Social-Network-API.git   
 - Node.js and MongoDB are required to run this application.
 - To install necessary dependencies, navigate to the root directory and type the command:
 ```md
npm install
```

## Usage
Type the command to start the application.
```md
npm start
```
- When the server is started    
- Open MongoDB and connect to the MongoDB URI: ``mongodb://localhost:27017``  
- The Mongoose models are synched to the MongoDB database.    
- On the list of databases, click on socialDB to see thoughts and users data.   
- To create seed data and test the API routes, use Insomnia or Postman.    



## Technology
- MongoDB
- Mongoose
- Node.js
- Express.js
- Moment.js

## Authors
- [@mandrews78](https://www.github.com/mandrews78)