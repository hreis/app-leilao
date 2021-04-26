# github-finder
this is a simply app that get GitHub user's infos;

To start the project follow the steps below:

on /server folder run: ```npm install``` & ```npm run start```
on /web run ```npm install``` & ```ng serve```

so, thats it. On that project you will find some soft skills like:

- RxJs async subscribe and pipe manipulations;
- A route architeture that is based on loading children modules (lazy loading);
- communication between parents components (Input(), Output(), ViewChield(), EventEmmiter);
- Architeture based on module/components to make reusable stuffs possible without rewriting;
- Error handling;
- SOLID pattern on node.js backend
- utils folders that has cache structure, error handling, logger and secrets (DB data);


Things to upgrade:

- Apparently github api is confused about watchers/stars/forks info on user repositories. 
  So they retrieving the same value. So calling like contributors endpoint by repository we can make a
  Math that will return right value about forks, etc...
- Cache is a big question on this project. 
  Since i don't know if it is viable to use cache when the data can be changed on every minute.
  Thats why i developed the /util/cache but not using yet;
- The project are not using NgRx as state management tool yet;
- Project don't have tests yet;
- resilience on api;

DataBase to save notes:

- Using https://www.elephantsql.com;
- KnexJs as QueryBuilder
