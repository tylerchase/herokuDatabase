-- STEPS TO ADD A DATABASE TO HEROKU

> mkdir herokuDB
> cd herokuDB

> express --hbs --git // installs handlebars and adds a .gitignore
> npm install

- Go to github and create a repo and copy the

> git init
> git add .
> git commit -m "first commit"
> git remote add origin "blah blah blah"
> git push origin master

> heroku create [name of application]
> npm install knex --save
> npm install pg -S
> knex init
