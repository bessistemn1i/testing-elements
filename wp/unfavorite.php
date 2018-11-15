<?php 
    /*
        Template Name: Unfavorite Session
    */

    session_start();

    if(!isset($_SESSION['favorite'])) { $_SESSION['favorite'] = []; }

    function is_ajax_request() {
        return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest';
    }
    // Add function for removing elements from an array
    function array_remove($element, $array) {
        $index = array_search($element, $array);
        array_splice($array, $index, 1);
        return $array;
    }

    if(!is_ajax_request()) { exit; }

    $raw_id = isset($_POST['id']) ? $_POST['id'] : '';

    if(preg_match("/blog-post(\d+)/", $raw_id, $matches)) {
        $id = $matches[1];
        
        if(in_array($id, $_SESSION['favorite'])) {
            $_SESSION['favorite'] = array_remove($id, $_SESSION['favorite']);
        }

        echo 'true';
    }
    else {
        echo "false";
    }
?>