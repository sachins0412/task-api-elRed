# Task-api-elRed

This api provides endpoints for user to register,login and create tasks with properties like date,task,status. 

User can use the patch endpoint to update an existing task and the delete endpoint to delete an existing task.

Both patching and deleting are done using the task's unique id which is provided as an output whenever a task is created or updated.

Postman collection for the api is given in the repo. the following info can also be taken as a ref :

 
## 1. Signup : POST {{host}}/users/signup
 
    takes the following(All mandatory) as request body in JSON :
    
    - username : String
    - email : String, unique
    - password : String, minlength = 8
    
    this will register the user as well as logs in the user at the same time
    
## 2. Login : POST {{host}}/users/login

     takes the following(All mandatory) as request body in JSON :

    - email : String
    - password : String
    
    Logs in the already registered user
    
## 3. Logout : POST {{host}}/users/login

    logs out the current logged in user
    
## 3. Create Task : POST {{host}}/tasks/create

    takes the following as request body in JSON :
    
    - task : String, required
    - date : String, default - today's date ( YYYY-MM-DD format)
    - status : String, default - 'incomplete', valid values - 'incomplete,complete'
    
## 4. Update Task : PATCH {{host}}/tasks/{taskId}
    
    takes {taskId} as path param. refers to id of the task to be updated
    
    takes the following as request body in JSON :
    
    - task : String
    - date : String( YYYY-MM-DD format)
    - status :valid values - 'incomplete,complete'
    
## 4. Delete Task : DELETE {{host}}/tasks/{taskId}
    
    takes {taskId} as path param. refers to id of the task to be updated
    

### Please note that a user session is active only for 30secs. after that user has to login again
 
 
