<?php
function filterDatabase( $database, $filterType, $filter ){
    $databaseFiltered = [];
    foreach( $database as $el ) {
        if( $filter == $el[$filterType] ) {
            $databaseFiltered[] = $el;
        }
    }
    return $databaseFiltered;
}

if( !empty($_GET["genre"]) ) {
    $databaseFilter1 = filterDatabase( $database, "genre", $_GET["genre"] );
} else {
    $databaseFilter1 = $database;
}

if( !empty($_GET["author"]) ) {
    $databaseFilter2 = filterDatabase( $databaseFilter1, "author", $_GET["author"] );
} else {
    $databaseFilter2 = $databaseFilter1;
}

if( !empty($_GET["year"]) ) {
    $databaseFilter3 = filterDatabase( $databaseFilter2, "year", $_GET["year"] );
} else {
    $databaseFilter3 = $databaseFilter2;
}
?>