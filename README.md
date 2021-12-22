# Dior2



# Quick Compo
​
<img src="https://i.pinimg.com/474x/b2/f3/d4/b2f3d44d05896e32c6ee834c7821f80a.jpg" alt="minilogo" style="zoom:75%;" />

## Description

This project is an e-commerce platform for the well established perfume brand Dior. It's held to the standards of design established by the identity of the brand and caters a predominantly female market.





###Wireframe: https://miro.com/welcomeonboard/aURhNklSOXVkUEFMU1BjaUduVUIwVlBSaHhlMldIeWk2YjVlbUpIRmh2NlZ1c0Z2QTN3ekRDWlpHVWJuRDdUdnwzNDU4NzY0NTE1NjE2OTQ5MDQ5?invite_link_id=791896065981

###Trello:
https://trello.com/b/0Czc9ake/dior

## User Stories

- **Signup:** As a user I can sign up in the platform so that I can start playing into competition
- **Login:** As a user I can login to the platform so that I can log my exit points
- **Logout:** As a user I can logout from the platform so no one else can use it
- **Cart:** As a user I can have a cart to pay my order
- **Cart:** As a user I can delet from caccrt
- **Cart:** As a user I can add to cart
- **Cart:** As a user I can viwe my cart 
- **order:** As a user I can viwe my order

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
| `/MissD`      | miss dior      | user only `<PrivateRoute>`  | to see miss dior collaction                                  | |
| `*`           | error          | user only `<PrivateRoute>`  | send the user to error page                                  |
| `/Cart`       | cart           | user only `<PrivateRoute>`  | to see the pall                                              |
|               |                |                             |                                                              |
|               |                |                             |                                                              |
|               |                |                             |                                                              |

## Components

- Login 
- user 
- admin 
- Signup 
-  prodact
- Cart 
- Navbar
- home
- order
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
     product: [
        {
          items: { type: Schema.Types.ObjectId, ref: "perfume" },
          subtotal: Number,
          quantity: Number,
        },
      ],
    
      total: {
        type: Number,
      },
  });

 ```
 collection model
 ```
module.exports =  new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Author name should be provided']
    },
    Parfume: [ParfumeSchema],
    img: {
      type:String
    },
    hederImg:{
      type:String
    },
    vidourl:{
      type:String
    },
    stickyimg:{
      type:String
    }
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

 Order model
```
module.exports = new mongoose.Schema({


        carts: { },
      
        userId: {
            type: Schema.Types.ObjectId,
            ref: "user",
          },
  });
```

## Backend routes

| HTTP Method | URL                                                          | Request Body                            | Success status | Error Status         | Description                                                  |
| ----------- | ------------------------------------------------------------ | --------------------------------------- | -------------- | -------------------- | ------------------------------------------------------------ |
| GET         | `/auth/me`                                                   |                                         | 200            | 404                  | Check if user is logged in and return profile page           |
| POST        | `/user/signup`                          | {name, email, password}                 | 201            | 404                  | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/user/login`                           | {username, password}                    | 200            | 401                  | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/user/logout`                                               | (empty)                                 | 204            | 400                  | Logs out the user                                            |
| get         | `/Admin/collection`                     | {name, img}                             |                |                      | to choos which collection                                    |
| get         | `/Dior/collection/:colId`             | {name, img, vido, hederimg , stkiy img} |                |                      | to see the collection he choos                               |
| post        | `/user/cart/:uid/:colId/:item._id` | {userId,collectionId,ParfumeId}         |                |                      | to add to cart by id                                         |
| get         | `/user/cart/:id`                      | {name , img,subtotal,quantity, total}   |                |                      | too see the cart by hes id                                   |
| delet       | `/user/delet/:id/:_id`              | {item_id}                               |                |                      | to delet from the cart by id                                 |
| post        | {userid, cartid }                                            |                                         |                | to chekout the order |                                                              |


