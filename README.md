# Environment
### Homebrew
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### nodejs

At the moment, I'm using v6.10.1
```
brew install node@6
```

you can always search for versions available on brew.
e.g.
```
brew search node
```

### Running Server
```
node app.js
```
OR
```
npm start # defined in package.json
```

# Data 
data module
* holds data 
* create data and convert to JSON 
* normally data module is injected into each contollers for retrieving data.
```
App/components/projectlist/data/appdata.js
```

# Views
resume is pretty much a static page. The content doesn't change much over time. 
In this case, each section such as Work, Education, Contact are served by individual partial views, which are located at
```
App/components/projectlist/partials/*
```
The place where hooks up all the partial views are at
```
views/index.pug
```

Usually each partial views created corresponding Controller in AngularJS, which dealing with business logic when presenting view.
```
App/components/projectlist/controllers/*
```

# CSS
* Bootstrap 3
* customize fontsize, fontfamily using bootstrap.less
* Build bootstrap with less
* modify variables.less to suit the needs

Tutorial
* http://www.helloerik.com/bootstrap-3-less-workflow-tutorial
* https://doc.bccnsoft.com/docs/bootstrap-docs/less.html#compiling

```
npm install -g less less-plugin-clean-css
cd less
lessc --clean-css bootstrap.less ../App/css/bootstrap.min.css
```

## Changing the icon font location
Bootstrap assumes icon font files will be located in the ../fonts/ directory, relative to the compiled CSS files.


# Directory Layout
```
├── App
│   ├── components
│   │   ├── app.js      --> declare top-level app module
│   │   ├── projectlist 
│   │   │   ├── controllers
│   │   │   │   └── controllers.js         --> application controllers
│   │   │   ├── data
│   │   │   │   └── appdata.js             --> custom data module 
│   │   │   └── partials
│   │   │       ├── contact.pug            --> angular view partials (partial jade templates) 
│   │   │       ├── education.pug
│   │   │       ├── imalso.pug
│   │   │       └── workExperience.pug
│   │   └── thirdParty                    
│   │       ├── angular-ui-router.min.js
│   │       ├── angular.min.js             --> latest angular js
│   │       └── angular.min.js.map
│   ├── css
│   │   └── default.css
│   └── images
│       └── logo.png
├── README.md
├── app.js             --> app config
├── package.json       --> for npm
├── routes            
│   └── index.js       --> route for serving HTML pages and partials
└── views
    ├── index.pug      --> main page for app

```

### Memo
1. integrate jade template engine (done)
