# Dior2


# Quick Compo
​
<img src="https://i.pinimg.com/474x/b2/f3/d4/b2f3d44d05896e32c6ee834c7821f80a.jpg" alt="minilogo" style="zoom:75%;" />

## Description


User profile:
​
- see my profile
- see exit point
- have a cart
- pay the prodact

# Client / Frontend
​
## React Router Routes (React App)

## Components
​
- LoginPage
- SignupPage
- Navbar
- home
- cart
- admin page
- jadore
- joy
- miss dior

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous

  - Exit Point Service
  - exitPoint.list()
  - exitPoint.detail(id)
  - exitPoint.add(id)
  - exitPoint.delete(id)

  - User Service
  - user.detail(id)

  # Server / Backend

  # Server / Backend
​
## Models
​
User model
​
```
{
  user: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  favorites: [{type: Schema.Types.ObjectId,ref:'Exit'}]
  userAgreement: {type: boolean, required: true, default: false}
}
```
Exit model
​
```
 {
   name: {type: String, required: true},
   img: {type: String},
   aproachLat: {type: Number, required: true}
   aproachLong: {type: Number, required: true}
   aproachDescription: {type: String}
   exitLat: {type: Number, required: true}
   exitLong: {type: Number, required: true}
   exitDescription: {type: String}
   landiZoneLat: {type: Number, required: true}
   landingZoneLong: {type: Number, required: true}
   landingZoneDescription: {type: String}
   creator: {type: Schema.Types.ObjectId,ref:'User'}
   altitud: {type: number}
   
 }
 ```