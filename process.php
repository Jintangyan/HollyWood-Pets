<?php
function displayImages() {
    $folder = 'before&after';
    $files = glob($folder . '/*.{jpg,jpeg,png,gif}', GLOB_BRACE);

    foreach ($files as $file) {
        echo '<img src="' . $file . '" alt="Image" width="400" height="300">';
    }
}
?>
