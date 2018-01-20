#Get Set Plan

##Installation Steps:

NOTE: you will need a few tools in your system before you can get the repo to work.
1. Homebrew for mac
2. Python2.7
3. Pip
4. Virtualenv

###To install the above:

1. To install HomeBrew:
#### /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

2. To install python2.7
#### brew install python 
- this should install Pip as well. to check if pip has been installed 
#### pip list

3. To install pip - if above step doesnt install pip
#### https://pip.pypa.io/en/stable/installing/

4. To install virtualenv
#### pip install virtualenv

### Once you have the above installed do the following:

1. Create virtualenv proj where u want to setup project - we will call it proj_folder for now
#### virtualenv -p python2.7 proj_folder

2. Go into folder after vitualenv creates it. You should see bin folder.
#### cd proj_folder

3. Activate project
#### . bin/activate

4. Create a folder named `src`. cd into it and clone repo within this
#### mkdir src && cd src && git clone https://github.com/ashishbarnabas/getsetplan.git .

5. Run Grunt
#### grunt

6. Server should be running at `http://127.0.0.1:8000/`
#### http://127.0.0.1:8000/


##To find files

###HTML Files
#### /src/templates/<html files>

###LESS Files
#### /src/static_raw/less/<less files>
Note: Do not edit `/src/static_my_proj` or `../static_cdn` - files get compiled automatically here

###JS Files
#### /src/static_raw/js/<js files>


##To install dependencies use Bower
#### /src/bower.json
Note: Update this and re run `grunt`



