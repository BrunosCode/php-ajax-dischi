<?php
require __DIR__ . "/../data/database.php";

header("Contet-Type: appliaction/json");

echo json_encode($database);