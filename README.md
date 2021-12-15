# Dior2



# Quick Compo
​
<img src="https://i.pinimg.com/474x/b2/f3/d4/b2f3d44d05896e32c6ee834c7821f80a.jpg" alt="minilogo" style="zoom:75%;" />

## Description

###Wireframe:
Trello:
https://trello.com/b/0Czc9ake/dior

## User Stories

- **Signup:** As a user I can sign up in the platform so that I can start playing into competition
- **Login:** As a user I can login to the platform so that I can log my exit points
- **Logout:** As a user I can logout from the platform so no one else can use it
- **Cart:** As a user I can have a cart to pay my order

## Backlog

User profile:

- see my profile



# Client / Frontend

## React Router Routes (React App)

| Path          | Component      | Permissions                 | Behavior                                                     |
| ------------- | -------------- | --------------------------- | ------------------------------------------------------------ |
| `/`           | SplashPage     | public `<Route>`            | Home page                                                    |
| `/signup`     | SignupPage     | anon only `<AnonRoute>`     | Signup form, link to login, navigate to homepage after signup |
| `/login`      | LoginPage      | anon only `<AnonRoute>`     | Login form, link to signup, navigate to homepage after login |
| `/admin`      | adminPage      | admin only `<PrivateRoute>` | to login navigate to admin home page                         |
| `/addprodact` | addprodactPage | admin only `<PrivateRoute>` | to add prodact                                               |
| `/AHome`      | admin homePage | admin only `<PrivateRoute>` | home page for the admin                                      |
| `/Jadore`     | jador          | user only `<PrivateRoute>`  | to see jadore collaction                                     |
| `/MissD`      | miss dior      | user only `<PrivateRoute>`  | to see miss dior collaction                                  |
| `/Joy`        | joy            | user only `<PrivateRoute>`  | to see joy collaction                                        |
| `*`           | error          | user only `<PrivateRoute>`  | send the user to error page                                  |
| `/Cart`       | cart           | user only `<PrivateRoute>`  | to see the pall                                              |
|               |                |                             |                                                              |
|               |                |                             |                                                              |
|               |                |                             |                                                              |

## Components

- Login Page
- user Page
- admin Page
- Signup Page
- Jadore Page
-  MissD Page
- Joy Page
- Cart Page
- Navbar
- home
- add prodact page
- edit prodact page

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Admin Service
  - Admin.list()
  - Admin.detail(id)
  - Admin.add(id)
  - Admin.delete(id)
- User Service
  - user.detail(id)


## Models
​
User model
​
```
{
name: {
      type: String,
      required: [true, 'user name should be provided']
    },
    email: {
      type: String,
      required: [true, 'user email should be provided'],
      unique: true,
      lowercase: true,
      validate: [isEmail, 'is invalid']
    },
    password: {
      type: String,
      required: [true, 'user password should be provided'],
      minlength: [6, 'pass more than 6 digits']
      },
      cart:{
        type: Schema.Types.ObjectId,
        ref:'Cart'
    },
  });
}
```
admin model
​
```
 {
      name: {
      type: String,
      required: [true, 'Admin name should be provided']
    },
    email: {
      type: String,
      required: [true, 'Admin email should be provided'],
      unique: true,
      lowercase: true,
      validate: [isEmail, 'is invalid']
    },
    password: {
      type: String,
      required: [true, 'Admin password should be provided'],
      minlength: [6, 'pass more than 6 digits']
      },

 }
 ```
 cart model
 ```
    product:[{
        type: Schema.Types.ObjectId,
        ref:'perfume'
    }],
    qty:{
        type:Number,
        default:1,
    },
  });
 ```
 collection model
 ```
  name: {
      type: String,
      required: [true, 'Author name should be provided']
    },
    Parfume: [ParfumeSchema],
    
  });
 ```
Parfume model

 ```
    name:{
      type: String,
      required: [true, 'perfume name should be provided']
    },
    image: {
      type: String,
      required: [true, 'perfume image should be provided']
    },
    price: Number,
    description: {
      type: String,
      required: [true, 'perfume description should be provided']
    },
  });
 ```