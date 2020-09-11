
# React Node App
React and Node Combined in same project.

# Use this project settings to run your ReactJs and NodeJs (front-end & back-end) together.


"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm run install-client && npm run build"

If you don't add NPM_CONFIG_PRODUCTION=false then the modules installations will result in an error on Heroku.

# This project is also configured for Heroku. You can easily deploy it without any additional setup.

**NOTE**: Make sure to run npm install if you want to run this on localhost.

Example: localhost
 - cd react_node_app
 - npm install
 - npm run dev
