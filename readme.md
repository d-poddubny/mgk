#DEPLOY SITE

**Prepare for deploy**

1. `brew update`

1. `brew install python3`

1. `pyvenv venv`

1. `. venv/bin/activate`

1. `pip install ghp-import`


**Run deploy**

1. `ghp-import -p dest`


**Exit from (venv)**

1. `deactivate`