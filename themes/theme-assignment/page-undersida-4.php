<?php 
    get_header();?>

<main class="underpage">
    <div class="underpage-container">
        <div class="underpage-4-content">
            <h1 class="underpage-title"><?php the_title(); ?></h1>
            <?php the_content() ?>
        </div>
        <div class="underpage-4-image"> 
            <?php the_post_thumbnail() ?>
        </div>
    </div>
    
</main>

    <?php get_footer();
?>