## Laravel + Filament + Octane + Swoole

### Copy .env.example to .env
```shell
cp .env.example .env
```
### Change the environment variables

### Get start
To install dependencies:
```shell
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php82-composer:latest \
    composer install --ignore-platform-reqs
```
### Export sail to bashrc
```bash
echo "alias sail='[ -f sail ] && sh sail || sh vendor/bin/sail'" >> ~/.bashrc;
source ~/.bashrc
```
### Up the application
```bash
sail up -d
```

### Create app key

```bash
sail artisan key:generate
```
### Migrate database

```bash
sail artisan migrate
```

### Run the shield seeder
```bash
sail artisan db:seed --class=ShieldSeeder
```

### Create the panel-user
```bash
sail artisan make:filament-user
```

### Make the super-admin
Get the user id and run the command ```sail artisan shield:super-admin --user=<user_id>```
```bash
sail artisan shield:super-admin --user=1
```

### Restart application
```bash
sail restart
```

### Install npm dependencies
```bash
sail npm install
```

### Build the front end scripts
```bash
sail npm run build
```

### Test the websocket server

After logging in, open the browser console and call the /testEvent route. Then, observe in the console that there should be a {ping: true}.
