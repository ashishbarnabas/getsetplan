# Get Set Plan

## Installation Steps:

NOTE: you will need a few tools in your system before you can get the repo to work.
1. Homebrew for mac
2. Python2.7
3. Pip
4. Virtualenv

### To install the above:

1. To install HomeBrew:
<br />
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
<br />

2. To install python2.7
<br />
`brew install python`
<br />
this should install Pip as well. to check if pip has been installed
<br />
`pip list`
<br />

3. To install pip - if above step doesnt install pip
<br />
`https://pip.pypa.io/en/stable/installing/`
<br />

4. To install virtualenv
<br />
`pip install virtualenv`
<br />
<br />

### Once you have the above installed do the following:

1. Create virtualenv proj where u want to setup project - we will call it proj_folder for now
<br />
`virtualenv -p python2.7 proj_folder`
<br />

2. Go into folder after vitualenv creates it. You should see bin folder.
<br />
`cd proj_folder`
<br />

3. Activate project
<br />
`. bin/activate`
<br />

4. Create a folder named `src`. cd into it and clone repo within this
<br />
`mkdir src && cd src && git clone https://github.com/ashishbarnabas/getsetplan.git .`
<br />

5. Run Grunt
<br />
`grunt`
<br />

6. Server should be running at:
<br />
`http://127.0.0.1:8000/`


## To find files

### HTML Files
`/src/templates/<html files>`
<br />

### LESS Files
`/src/static_raw/less/<less files>`
Note: Do not edit `/src/static_my_proj` or `../static_cdn` - files get compiled automatically here
<br />

### JS Files
`/src/static_raw/js/<js files>`


## To install dependencies use Bower
`/src/bower.json`
Note: Update this and re run `grunt`



