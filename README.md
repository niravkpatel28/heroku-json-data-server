![Nirav Patel](https://cdn.fs.teachablecdn.com/mCT5A6Z1ReeavARaYGRD)

# GitHub Based JSON data server

Use json data files for mimicking a backend server. This data can be served to a front-end application, which can use it to render its UI. This backend server makes use of npm module json-server.
The respository leverages the functionality of module to create a backend server using json data files.

# Advantages

This repository is a simple tool for anyone who wants to test out a front end feature with static data. The [previous version](https://github.com/niravkpatel28/json-data-server) made use simple static files. This repo overcomes the limitations by allowing route paramters and query parameters.

## Api End Points

[/books](https://heroku-json-data-server.herokuapp.com/books)
[/categories](https://heroku-json-data-server.herokuapp.com/categories)
[/employees](https://heroku-json-data-server.herokuapp.com/employees)
[/blogs](https://heroku-json-data-server.herokuapp.com/blogs)
[/companies](https://heroku-json-data-server.herokuapp.com/companies)

    Route parameter supported  /:id

    {
        "id":"blog unique id",
        "data": " blog data "
    }

Example for blogs end point will fetch entry with **_id="2rvqpdbpka3n3fhd"_**

[/blogs/2rvqpdbpka3n3fhd](https://heroku-json-data-server.herokuapp.com/blogs/2rvqpdbpka3n3fhd)

# Limitations

One limitation is that this has to be deployed on a backend server. For this implementation it is deployed on [Heroku.](https://www.heroku.com/)
