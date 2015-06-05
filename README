Georges
=======

Well Bookmarks, as old as the Internet itself, how long since we had a fresh tools? Like forever right? Here comes Georges…  
  
Hand-crafted by a passionate french team, Georges is a **simple yet powerful bookmark management solution**.  
Stop managing your bookmarks like it’s 1999 again. Georges helps go straight into 2015 using tag, advanced search options, saved list of links, TL;DR versions, etc.  
  
Once you skim through interesting link simply add it. Then you can add tags to retrieve it. Georges takes it from here so you stop losing time finding this article your friend sent you or this video you saw last week… Simply ask Georges.  
- Georges takes care of your bookmarks in one click thanks to Chrome and Firefox extensions.  
- Georges sorts out your bookmarks based on their popularity to quickly spot your favorite links.  
- Don’t bother skim thought an article, Georges does it for you and creates automagic TL;DR versions of your bookmarks.  
- Georges search tool is great and lets you save your search results to easily access a bucket of links. folders are sooo 1998 (hi yahoo!).  

Requirements
------------

Georges needs some friends to play along with:
  - [nginx](http://nginx.org/)
  - [nodejs](https://nodejs.org/)
  - [meteor](https://www.meteor.com/)
  - [supervisor](http://supervisord.org/)
  - [mongodb](https://www.mongodb.org/)

These are out of the scope of the installation section below.

Installation
------------

This procedure has been tested on a [Linux Debian](https://www.debian.org/) environment. It should work the same on any Linux flavor, and probably any environment compatible with the requirements.

You are supposed:
 - to create the database on your MongoDB server with proper credential (user & password);
 - to have a working key to use [texapi](https://github.com/blumug/texapi);
 - to have a working account on [Mandill](http://mandrill.com/).

## Create a dedicated user and its homedir
```
$ sudo mkdir -p /var/www/georges.io/logs
$ sudo useradd -g www-data -s /bin/bash -d /var/www/georges.io -m georges
$ sudo chown -R georges:www-data /var/www/georges.io
```

## Configure environment script

Create the following file `/var/www/georges.io/vars.sh` with your favorite editor:
```
export MONGO_URL="mongodb://DB_USER:DB_PASSWD@DB_HOST/DB_NAME"
export ROOT_URL="http://YOUR_URL/"
export PORT=3000
export METEOR_SETTINGS='{"texapi": "TEXAPI_KEY"}'
export MAIL_URL=smtp://MANDRILL_LOGIN:MANDRILL_APIKEY@smtp.mandrillapp.com:587/
```

Where:
  - `DB_USER` is the MongoDB user for Georges;
  - `DB_PASSWD` is the password for your MongoDB user;
  - `DB_HOST` is the IP or hostname of your MongoDB server;
  - `DB_NAME` is the name of your database on MongoDB;
  - `YOUR_URL` is the hostname associated with your Georges instance;
  - `TEXAPI_KEY` is the API key to access your [texapi](https://github.com/blumug/texapi) instance
  - `MANDRILL_LOGIN` is your login on MandrillApp;
  - `MANDRILL_APIKEY` is an API key associated with your MandrillApp account.

## Deploy the Georges code

Just grab the code:
```
$ cd /var/www/georges.io/
$ sudo -u georges -H git clone https://github.com/blumug/georges.git root
$ cd root/
```

Use your favorite editor to adjust the script `run.sh` accoring to your setup.

Then compile and install (meteor way):
```
$ sudo -u georges -H mkdir deploy
$ sudo -u georges -H meteor build deploy
$ cd deploy
$ sudo -u georges -H tar xzf root.tar.gz
$ cd bundle/programs/server/
$ sudo -u georges -H npm install
```

## Configure supervisord

Use your favorite editor to create the configuration file `/etc/supervisor/conf.d/georges.conf`:

```
[program:georges]
directory=/var/www/georges.io/root
user=georges
environment=HOME=/var/www/georges,
command = /var/www/georges.io/root/run.sh
stdout_logfile=/var/www/georges.io/logs/supervisor-logfile.log
stderr_logfile=/var/www/georges.io/logs/supervisor-error-logfile.log
chown=georges:www-data
```

Then restart supervisord:
```
$ sudo service supervisor restart
```

## Configure nginx

You may have to adapt this config, but the idea is to create a proxy to your Georges instance:

```
# this section is needed to proxy web-socket connections
map $http_upgrade $connection_upgrade {
    default upgrade;
    ''      close;
}

upstream georges_server {
    server 127.0.0.1:3000 fail_timeout=0;
}

server {
    listen 80;
#### UNCOMMENT TO FORCE HTTPS
#    server_name .georges.io ;
#    # enforce https
#    return 301 https://georges.io$request_uri;
#}
#
#server {
#   listen 443 ssl;
#       server_name .georges.io ;
#   ssl_certificate /etc/nginx/ssl/georges.io.crt;
#   ssl_certificate_key /etc/nginx/ssl/georges.io.key;

    server_name .georges.io ;
    client_max_body_size 10M;
    access_log  /var/www/georges.io/nginx-access.log;

    location / {
        proxy_pass http://georges_server;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade; # allow websockets
        proxy_set_header Connection $connection_upgrade;
        proxy_set_header X-Forwarded-For $remote_addr; # preserve client IP

        # this setting allows the browser to cache the application in a way compatible with Meteor
        # on every applicaiton update the name of CSS and JS file is different, so they can be cache infinitely (here: 30 days)
        # the root path (/) MUST NOT be cached
        if ($uri != '/') {
            expires 30d;
        }
    }
}

## redirect www.georges.io to georges.io
server {
    server_name www.georges.io;
    return 302 $scheme://georges.io;
}    
```

Then, restart your nginx:
```
$ sudo service nginx reload
```

Et voilà!

License
-------

See [LICENSE](LICENSE) file.
