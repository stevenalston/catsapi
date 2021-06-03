# Steve Alston Warner Media Code Challenge

Below find the scripts to bootstrap the app

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Design Choices & Features

Find information about the app's styling and design choices, as well as technologies used to build this app.

### Design

There is minimal styling was accomplished utilizing react-bootstrap. There was also some custom styling using external stylesheets and inline css.

#### Cat Details Information

I chose to add the cat details below the picture, adding some positioning to tie the details to the selected cat. I believe this to be the most common placement a user would expect to find these details. It also is not obstructing the view of the image.

### Technologies

The Cats API app uses a variety of technologies, most importantly it uses the Redux library to accomplish state management within the App.

I felt it was also important to add some navigational features to the Application. To accomplish this I implemented 'react-router-dom', which is typically the preferred module, versus other modules, such as 'react-router'.

Cats API also is setup for unit and/or integeration tests with dependencies on enzyme, moxios, and the built-in JestJS library. 

