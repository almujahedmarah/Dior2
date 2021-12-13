# Dior2



# Quick Compo
​
<img src="https://i.pinimg.com/474x/b2/f3/d4/b2f3d44d05896e32c6ee834c7821f80a.jpg" alt="minilogo" style="zoom:75%;" />

## Description

###Wireframe:
Trello:
https://trello.com/b/0Czc9ake/dior

User profile:
​
- see my profile
- see exit point
- have a cart
- pay the prodact


​Admin

- can add , delete , update products.


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
  - auth.getUser() 

  - Exit Point Service
  - exitPoint.list()
  - exitPoint.detail(id)
  - exitPoint.add(id)
  - exitPoint.delete(id)

  - User Service
  - user.detail(id)

​
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