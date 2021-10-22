<?php 
    require __DIR__ . "/../data/database.php";
    function getFilters($array, $filterType) {
        $filterList = [];
        foreach($array as $el) {
            $filterList[] = $el[$filterType];
        }
        $filterSet = array_unique($filterList);
        return $filterSet;
    }

    $collectionGenres = getFilters($database, "genre");
    $collectionAuthors = getFilters($database, "author");
    $collectionYears = getFilters($database, "year");
?>

<div class="c-header__filters">
    <form>
        <label class="c-header__input">
            <span class="c-header__label">Filter Genres</span>
            <select class="c-filter" name="genre" id="genre" placeholder>
                <option value="" selected>All</option>
                <?php foreach($collectionGenres as $option) { ?>
                <option value="<?= $option ?>"><?= $option ?></option>
                <?php } ?>
            </select>
        </label>
        <label class="c-header__input">
            <span class="c-header__label">Filter Authors</span>
            <select class="c-filter" name="author" id="author" placeholder>
                <option value="" selected>All</option>
                <?php foreach($collectionAuthors as $option) { ?>
                <option value="<?= $option ?>"><?= $option ?></option>
                <?php } ?>        
            </select>
        </label>
        <label class="c-header__input">
            <span class="c-header__label">Filter Years</span>
            <select class="c-filter" name="year" id="year" placeholder>
                <option value="" selected>All</option>
                <?php foreach($collectionYears as $option) { ?>
                <option value="<?= $option ?>"><?= $option ?></option>
                <?php } ?>        
            </select>
        </label>
        <button type="submit">Filter</button>
    </form>
</div>