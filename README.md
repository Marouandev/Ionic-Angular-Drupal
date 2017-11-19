# Ionic-Angular-Drupal
Ionic 3 application using webservices API drupal 8

### Install

git clone https://github.com/Marouandev/Ionic-Angular-Drupal.git
cd Ionic-Angular-Drupal

### Use npm 
npm install

### Configuration
You will need to change the following code in src/app/app.config.ts

  export const AppConfig: IAppConfig = {
    urlApi: "http://dev-domain.com",
    viewApi: "/list/nodes",
  };
  
### Run Ionic
run serve
