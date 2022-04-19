# Deployment

### Important Things to Keep in Mind
-   We want to deploy each microfrontend independently (including the container)
-   Location of child app `remoteEntry.js` files must be known at _built time_!
-   Many frontend deployment solutions assume you're deploying a single project - we need something that can handle multiple different ones
-   Need a CI/CD pipeline of some sort
-   _At present_, the _remoteEntry.js_ file name is fixed! Need to think about caching issues.


### We will use AWS S3 and AWS CloudFront:
<img src="./../lecture-pics/49.1.png">