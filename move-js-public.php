<?php

$rootDir = dirname(__FILE__);


$manifest = json_decode(file_get_contents($rootDir . '/public/build/manifest.json'), true);

$filename = $manifest['resources/js/app.js']['file'];

copy($rootDir . '/public/build'. DIRECTORY_SEPARATOR . $filename, $rootDir . '/public/js/app/app.js');
