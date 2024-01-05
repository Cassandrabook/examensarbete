<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo("name");  ?></title>

    <link rel="stylesheet" href="<?php bloginfo("stylesheet_url"); ?>">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/fontawesome/css/fontawesome.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/fontawesome/css/brands.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/fontawesome/css/solid.css">

</head>
<body>

    <header class="header">
        <div class="title-search-container">
            <h1 class="blog-name">
                <a href="<?php echo esc_url(home_url('/')); ?>">
                    <?php bloginfo("name"); ?>
                </a>
            </h1>
            <div class="header-search"><?php get_search_form(); ?></div>
        </div>
        <nav class="menu-content">
            <?php wp_nav_menu(array('header-menu' => 'header-menu')); ?>
        </nav>
    </header>
    