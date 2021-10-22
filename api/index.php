<?php
require __DIR__ . "/../data/database.php";

header( "Contet-Type: appliaction/json" );

require __DIR__ . "/../functions/databaseFilters.php";

echo json_encode($databaseFilter3);