# Task-api-elRed

This api provides endpoints for user to register,login and create tasks with properties like date,task,status. 

User can use the patch endpoint to update an existing task and the delete endpoint to delete an existing task.

Both patching and deleting are done using the task's unique id which is provided as an output whenever a task is created or updated.

Following info can be taken as a ref :

 
## 1. Signup : POST {{host}}/users/signup
 
    takes the following(All mandatory) as request body in JSON :
    
    - username : String
    - email : String, unique
    - password : String, minlength = 8
    
    This will register the user in the DB and send an OTP to the email registered. User has to verify the OTP at /users/verify to begin the session.
    
## 2. Login : POST {{host}}/users/login

     takes the following(All mandatory) as request body in JSON :

    - email : String
    - password : String
    
    It sends an OTP to the registered email (if the provided credentials are valid), user has to verify the OTP at /users/verify to begin the session.
    
## 3. verify OTP : POST {{host}}/users/verify

    takes the following(All mandatory) as request body in JSON :

    - email : String
    - otp : String
    
    It verifies the otp. If valid, user session begins. If invalid, user can retry. To regenerate the OTP user has to login via /users/login route.
    It returns a JWT token which has to be provided in the Authorization header for every subsequent request.
    
## 4. Logout : POST {{host}}/users/login

    logs out the current logged in user. Have to provide the JWT token in Authorization header to perform this action
    
## 5. Create Task : POST {{host}}/tasks/create

    takes the following as request body in JSON :
    
    - task : String, required
    - date : String, required ( YYYY-MM-DD format)
    - status : String, required, valid values - 'incomplete','complete'
    
     Headers : Authorization : Bearer {{JWT_TOKEN}}
    
## 6. Update Task : PATCH {{host}}/tasks/{taskId}
    
    takes {taskId} as path param. refers to id of the task to be updated
    
    takes the following as request body in JSON :
    
    - task : String
    - date : String( YYYY-MM-DD format)
    - status : valid values - 'incomplete','complete'
    
     Headers : Authorization : Bearer {{JWT_TOKEN}}
    
## 7. Delete Task : DELETE {{host}}/tasks/{taskId}
    
    takes {taskId} as path param. refers to id of the task to be updated
    
     Headers : Authorization : Bearer {{JWT_TOKEN}}
    

### Please note that a user session is active only for 30secs. after that user has to login and verify OTP again
 
 
