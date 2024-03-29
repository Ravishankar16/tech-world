
# Developer Community Forum
## Introduction
Created a Developer Community Forum which is a web application built with React that provides a platform for developers to interact, ask questions, share knowledge, and engage in discussions. Users can add new questions also they can answer to the aleady existing question, which is 2 way nested comments.

## Technologies Used
 
- React: Frontend library for building user interfaces.
- React Router: For handling routing within the application.
- TailwindCSS: For styling components.
- lucide-react: For icons
- react-paginate: For Pagination

## Features
- Add Question:  Users can add new questions, which popup the modal and add the input in the form.
    On submitting the form, new question is added and it is pushed to the top. Recently added question will be seen in the top of the list.
- Search Functionality: Search for specific questions using keywords, so that it will show the respective question in the top of the list. This work fine for the newly added questions as well.
- Category Filtering: Questions can be filtered based on categories (e.g., JavaScript, Python, React).
    This work fine for the newly added questions as well.
- AnswerPage: In Answer page whatever the question selected by the user, respective question will redirect 
    to the new page where it shows the answers for the question and allows the users to add answer. 
- 2way nested comments: first answer and we can comment on the first answer as well.
- Pagination for easy navigation through the list of questions.
-Side navbar and head navbar: There are no functionality for now and can be scaled in future.
 
## Usage
 
1. Run the application using `npm start`.
2. Navigate to the "Home" page to view and interact with questions.
3. Use the search bar to search for specific questions.
4. Use the Filter options for filtering with category. 
5. Click on "Add Question" to add a new question.
6. Click on Question list wil redirect to the answer page where we can add our answer.
7. Click on "Home " in the side nave bar which redirects to the dev community home page. 

## Project Structure

The project is structured as follows:

- `src/components`: Contains React components for different parts of the application.
- `src/data`: Placeholder data file (`queList.js`) for initial questions.
- `src/App.js`: Main entry point of the application.

## Features to be added
 - Top user: Based on number of questions resolved by the users, they will get a points and based on points we can make top 5 users.
 - answered/unanswered: For each question will we can filter by answered/unanswered.
 - recent: where all the recent question will be posted as per the time stamp.
 - solved/unsolved: Filtered based on this.
 - liked/unliked: we can add likes and dislikes for the question ans answers.

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/developer-community-forum.git

    
"npm start" to start development server