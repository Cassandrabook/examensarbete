<?php 
    get_header();?>

<div class="content">
    <h2><?php the_title(); ?></h2>
    <div> <?php the_post_thumbnail() ?></div>
    <div>
        <?php the_content() ?>
        <h2> <?php the_field("sub_title") ?></h2>
    </div>
    </div>

    <?php get_footer();
?>