<?php get_header(); ?>


<main class="post">
    <?php if ( have_posts() ) {
            while ( have_posts() ) {
                the_post(); ?>
                <div class="post-container">
                    <span class="post-date"><?php echo get_the_date(); ?></span>
                    <h2 class="post-title"><?php the_title(); ?></h2>
                    <div class="post-content"><?php the_content(); ?></div>
                </div>
            <?php }
        } ?>
</main>

<?php get_footer(); ?>