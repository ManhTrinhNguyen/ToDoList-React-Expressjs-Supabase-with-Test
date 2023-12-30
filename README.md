# App Name 
TODO List 

## Front end 
Reactjs
Installing React : create-react-app project-name

#### React Form (https://www.w3schools.com/react/react_forms.asp)
onChange: occurs when the value of an HTML element is changed.  
onSubmit : triggers a form submission when it is added to a form element.

### State Management in React
#### Redux
Redux is a state management library that allows you to manage the state of your JavaScript applications more efficiently and predictably.

All components in your application can access this store and update or retrieve data from it as needed.

1. Store : The Redux store is like a giant container that holds all the data for your application.
2. Actions : An action is an object that describes what changes need to be made to the state of your application. It sends data from your application to the Redux store and serves as the only way to update the store.
An action must have a "type" property describing the action being performed. This "type" property is typically defined as a string constant to ensure consistency and avoid typos.

In addition to the "type" property, an action can have a "payload" property. The "payload" property represents the data that provides additional information about the action being performed. For example, if an action type is ADD_TASK, the payload might be an object containing a new task item's "id", "text", and "completed status".
Example : 
    {
      type: 'ADD_TASK',
      payload: {
        id: 1,
        text: 'Buy groceries',
        completed: false
      }
}
Note that to create actions, we use action creators. Action creators are functions that create and return action objects.

Here is an example of an action creator that takes in a task's text and returns an action object to add the task to the Redux store:

    function addTask(taskText) {
      return {
        type: 'ADD_TASK',
        payload: {
          id: 1,
          text: taskText,
          completed: false
        }
      }
    }

3. Dispatch 
In Redux, dispatch is a function provided by the store that allows you to send an action to update the state of your application. When you call dispatch, the store runs an action through all of the available reducers, which in turn update the state accordingly.

4. Reducers 
In Redux, a reducer is a function that takes in the current state of an application and an action as arguments, and returns a new state based on the action.
Here's an example of a simple reducer:

    const initialState = {
      count: 0
    };

    function counterReducer(state = initialState, action) {
      switch(action.type) {
        case 'INCREMENT':
          return { ...state, count: state.count + 1 };
        case 'DECREMENT':
          return { ...state, count: state.count - 1 };
        default:
          return state;
      }
    }


## Back end
### Server 
Nodejs, Expressjs 

### Database and Auth 
Supabase 

## Test 
Jest

### Installation 
This is is a nodejs project which uses standard npm for installation of dependencies.

npm install or npm i as the shortcut will install the node_modules that the code depends on.

The ./.gitignore file tells git not to commit the node_modules folder. Each new pull from git may require a new execution of npm i to install any newly added dependencies where have been added to ./package.json

To test that we have pulled down working code, we run npm test to test the code. This way if any changes result in errors we know the changes made locally have broken the code or outdated one or more tests.

As a shortcut we can also run both commands as one as npm it for install and test. See npm docs for more about this and other commands and shortcuts.

## Development 

### Connect Supabase CLI 
1. Install Supabase in MacOS : brew install supabase/tap/supabase

#### Initialize project
2. Login Supabase CLI : supabase login
3. create your project folder and cd your-project
4. start a new git repository — important, don't skip this step : git init

#### Start Supabase Services 
5. Supabase init ( Make sure Docker running )
6. Supabase start : Once all of the Supabase services are running, you'll see output containing your local Supabase credentials. It should look like this, with urls and keys that you'll use in your local project

              Started supabase local development setup.

                      API URL: http://localhost:54321
                        DB URL: postgresql://postgres:postgres@localhost:54322/postgres
                    Studio URL: http://localhost:54323
                  Inbucket URL: http://localhost:54324
                      anon key: eyJh......
              service_role key: eyJh......

7. Create Table Schema
#### Database Migrations (https://www.youtube.com/watch?v=Kx5nHBmIxyQ)
Database changes are managed through "migrations." Database migrations are a common way of tracking changes to your database over time.
8. Create migration file : supabase db diff --use-migra initial_schema -f initial_schema 
9. If changed Database Schema we can run : supabase db diff -use-migra initial_schema -f initial_schema   again to generate another migration file to take care of the newly introduced column

### Sync different Supabase Instances with Supabase Migrations / CLI 
  https://www.youtube.com/watch?v=nyX_EygplXQ

## Create Server (Expressjs)
1. Create Server : http.createServer().listen(PORT)
2. Create App (Express) : const app = express() -> then put app into create Server
3. Query Data from Database (Supabase) 
   import { createClient } from "@supabase/supabase-js"
   const supabase = createClient("https://<project>.supabase.co", "<your-anon-key>");
   Fetch, Insert, Update, Delete, Upsert in Supabase : https://supabase.com/docs/reference/javascript/select
4. Create CRUD to CREATE, READ, UPDATE, DELETE Todo lists 
  GET /something - Get Data 
  POST /something - Create Data 
  PUT /something - Update Data
  DELETE /something - Delete Data
  HTTP Request Method : https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods for more infomation !

## Testing in Nodejs .
1. Install Jest(https://jestjs.io/) and Superjest (https://www.npmjs.com/package/supertest)

## Testing in Supabase 
https://supabase.com/docs/guides/database/extensions/pgtap#testing-tables

## Front end with React 
Install react app : create-react-app 


## Contact 
Email : trinhnguyen511998@gmail.com 
Phone : 571-331-8824
Linkedin : https://www.linkedin.com/in/manh-trinh-nguyen/