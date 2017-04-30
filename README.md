# feathers-admin
An admin SPA for [FeathersJS](feathersjs.com) applications

> WARNING: This project is currently under heavy development and might be undergoing deep changes in its API. Until this message dissappears you will be using it at your own risk. 

Welcome to the home of feathers-admin, a simple and usable administration UI for your FeathersJS application. The goal of this project is to provide a simple and extensible UI to handle potentially any service defined in your feathers application.

## Goals

* Provide a nice web application that allows anyone to administrate any FeathersJS service, very much what django-admin does for django. 
* Define a developer-friendly programmatic interface that allows anyone to add services that can be both database-related and process-related. 
* Give people a friendly jump-start into a real life Feathers application.

## Roadmap

> Since this is in its early stages, I have nothing to show, just have a lot of work to do :)

* Create an SPA based on Vue (possibly using brunch-with-vuety as a template) that integrates well with feathers-client and allows our admin users to log-in. 
* Provide a convention as to what an admin user is, and create a way for a feathers application to create admins, verify a user is an admin, and possibly deny services if not. This convention should be somewhat configurable (at least, the field's name).
* Create a simple interface for adding new database-services to the admin. 
* Create a more generic interface for adding services that might not be database-related to the admin (might not cover all scenarios).
* Allow for some visual customization (color palette?)
* Provide a guide on how to build the SPA (should be as easy as `npm run build`).
