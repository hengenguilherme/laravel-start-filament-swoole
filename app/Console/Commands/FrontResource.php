<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Database\Eloquent\Model;

class FrontResource extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:front-resource {model}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate front-end resource';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $modelClass = '\\App\\Models\\'.$this->argument('model');
        if (! class_exists($modelClass)) {
            $this->info('place the model class');

            return;
        }
        /** @var Model $model */
        $model = app($modelClass);
        $tablename = $model->getTable();
        $stubDirectory = 'stubs/front-end/boilerplate-page';
        $dir = new \DirectoryIterator($stubDirectory);
        $resourcePageDir = 'resources/js/pages/';
        $resourceDirname = $resourcePageDir.$tablename;
        if (file_exists($resourceDirname)) {
            $this->info('directory '.$resourceDirname.' already exists!');

            return;
        }
        mkdir($resourceDirname, recursive: true);
        foreach ($dir as $finfo) {
            if ($finfo->getExtension() === 'stub') {
                copy(
                    $finfo->getPathName(),
                    sprintf(
                        '%s/%s',
                        $resourceDirname,
                        str_replace('.stub', '', $finfo->getFileName())
                    )
                );
            }
        }

        $indexToImportFiles = file_get_contents($resourcePageDir.'/index.ts');
        $strReplaced = preg_replace(
            ["/(\nexport)/m", "/,\n(})/"],
            ["import * as $tablename from './$tablename';\n$1", ",\n    $tablename,\n$1"],
            $indexToImportFiles
        );

        file_put_contents($resourcePageDir.'/index.ts', $strReplaced);
    }
}
