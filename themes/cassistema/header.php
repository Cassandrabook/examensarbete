<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo("name");  ?></title>

    <link rel="stylesheet" href="<?php bloginfo("stylesheet_url"); ?>">
</head>
<body>
    <div class="panel">
        <?php wp_footer(array('footer-menu' => 'footer-menu')); ?>
    </div>
    <header class="header">
        <h1 class="blog-name">
            <a href="<?php echo esc_url(home_url('/')); ?>">
                <?php bloginfo("name"); ?>
            </a>
        </h1>
        <?php wp_nav_menu(array('header-menu' => 'header-menu')); ?>
    </header>
    