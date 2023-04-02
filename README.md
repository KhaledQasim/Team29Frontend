# React setup

First install npm and node on your system, this link should explain it all:
https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl


Then clone the project code
```
git clone https://github.com/KhaledQasim/team29frontend
```
if the above commnad does not work try
```
git clone https://github.com/KhaledQasim/team29frontend.git
```

Then make sure your working directory is inside the newly cloned "team29frontend" folder

Then run 

```
npm install --legacy-peer-deps
```

Then to start a local hosted react server  , this might take anywhere from 1 to 5 minutes
```
npm run start
```

# For Mac Users
https://dev.to/code_jedi/how-to-install-reactjs-on-macos-4hio

# Note

The Backend Java Spring Boot app is online 24/7 and so is the Database, so all is required to use this project are the steps above.


# Features

### Inventory Managment View And Export

The inventory managemt system will always be shown on the navbar (both admin and homepage) as a bell icon with the number of notifications displayed next to it

Inventory Management System data along with Orders and Products and Users can all be exported as a csv (excel) file containing all the displayed data.

This can be down as shown below:

![alt text](https://github.com/KhaledQasim/Team29Backend/blob/main/ReadMeImages/Export.png?raw=true)


### User Demograpich

A world map is available to show from where our users are connecting from.

![alt text](https://github.com/KhaledQasim/Team29Backend/blob/main/ReadMeImages/WorldMap.png?raw=true)


### Fully Working Calender App

This Calendar app can be used to coordinate all the admin users into making sure they complete their required tasks, like ordering new stock for a specific product or hosting a team meeting

![alt text](https://github.com/KhaledQasim/Team29Backend/blob/main/ReadMeImages/Calender.png?raw=true)
