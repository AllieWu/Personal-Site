Hello Katie!

# Personal-Site README

### Last updated 11/16/2020

Personal resume website hosted by GitHub pages.
Files are public if you'd like to use code as inspiration!

Access at www.allisonwu.com

<br/>

## SETUP INSTRUCTIONS

1. Download this repository to a local file path (https://github.com/AllieWu/Personal-Site/)

2. Download Node JS/NPM (https://nodejs.org/en/download/)

3. Download Git (https://git-scm.com/downloads)

4. Make sure all packages are installed by opening up the 'Node.js Command Prompt' and running
   `npm install`

5. Download your favorite code editor, I recommend Visual Studio Code (https://code.visualstudio.com/Download)

<br/>

## SETUP GITHUB PAGES

1. To host the website through GitHub, you have to make sure that a copy of this code or other working React website code is in a repository of your own

2. Make sure the gh-pages module is installed, and update your package.json to have

   `"homepage": "http://alliewu.github.io/"`

   and in scripts, add:
   `"predeploy": "npm run build",`
   `"deploy": "gh-pages -d build" `

3. In the repository's settings, scroll to the 'GitHub Pages' section, enable GitHub Pages, and choose the 'gh-pages branch' for the source

4. Make sure the most recent version of the code is updated to the repository's Master Branch with `npm run deploy`

5. You should now be able to see your website at the link in the 'Github Pages' section of the repository's settings (defaulted to https://USER.github.io/REPONAME/)

6. **If you have a custom domain, you must replace the default website link with your custom domain link after every npm deployment. Sometimes, you also have to update the CNAME file in the gh-pages branch with several variations of your domain.**

   My CNAME file is the following:

   `allisonwu.com `

   `www.allisonwu.com`

 <br/>

## DEVELOPMENT

The 'Node.js Command Prompt' will be used to run, test, build, and deploy the React website code

1. First, setup Git by authenticating your account for HTTPS (recommended) or SSH connection to the repository

   Open up a Git Terminal and run the following:

   `git config --global user.name "UserForWholePC"`

   `git config --global user.email "GitEmail"`

   Then go to the path of your GitHub repository (defaulted to ~/Documents/USER/LOCALREPO) and run the following:

   `git remote add REPONAME URLTOREPO`

2. To run locally: `npm run start` (defaulted to https://localhost:3000/)

3. To deploy to GitHub pages: `npm run deploy`

   _npm run deploy should be set up for you in the package.json, where deploy is `gh-pages -d build`_

   _The first run should require authentication through a Github pop up_

<br/>
