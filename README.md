# bot-jalea

Simple WhatsApp Bot

## FOR TERMUX USER

```bash
> pkg update && pkg upgrade
> pkg install git -y
> pkg install nodejs -y
> pkg install ffmpeg -y
> pkg install imagemagick -y
> https://github.com/Jaleaxd19/bot-jale-.git
> cd bot-jale-
> npm install
```

---------

## FOR WINDOWS/VPS/RDP USER

* Download And Install Git [`Click Here`](https://git-scm.com/downloads)
* Download And Install NodeJS [`Click Here`](https://nodejs.org/en/download)
* Download And Install FFMPEG [`Click Here`](https://ffmpeg.org/download.html) (don't forget to path)
* Download And Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php) (if nulis want work,  checklist columns 1,2,3,5,6)

```bash
> https://github.com/Jaleaxd19/bot-jale-.git
> cd bot-jale-
> npm install
```

---------

## Run

```bash
> node . [<session name>] (session name is optional)
```

---------

## Arguments `node . [--options] [<session name>]`

### `--self`

Activate self mode (Ignores other)

### `--prefix <prefixes>`

* `prefixes` are seperated by each character
Set prefix

### `--server`

Used for [heroku](https://heroku.com/) or scan through website

### `--big-qr`

If small qr unicode doesn't support

### `--restrict`

Enables restricted plugins (which can lead your number to be **banned** if used too often)

* Group Administration `add, kick`

### `--img`

Enable image inspector through terminal

### `--nyimak`

No bot, just print received messages and add users to database

### `--test`

**Development** Testing Mode

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```

---------

#### Powered By : [`XTEAM`](https://api.xteam.xyz)

#### Author / Creator : [`Nurutomo`](https://github.com/Nurutomo)

#### Moddified : [`Nita`](https://github.com/Jaleaxd19/)
