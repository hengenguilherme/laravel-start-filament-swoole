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

### Seed database
````bash
sail artisan db:seed
````

### Restart application
```bash
sail restart
```
