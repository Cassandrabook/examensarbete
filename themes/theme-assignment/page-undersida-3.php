<?php 
    get_header();?>

<main class="underpage">
    <div class="underpage-container">
        <div>
        <h1 class="underpage-title"><?php the_title(); ?></h1>
            <?php the_content() ?>
        </div>
    </div>
</main>

    <?php get_footer();
?>