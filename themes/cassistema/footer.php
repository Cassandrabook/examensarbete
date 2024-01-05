<footer>
    <?php wp_nav_menu(array('footer-menu' => 'footer-menu')); ?>

    <p class="last-post-headline">Senaste inläggen:</p>
    <div class="last-posts">
    <?php
        $args = array(
            'post_type' => 'post', // Du kan ändra detta till den posttyp du använder om det inte är standardinlägg
            'posts_per_page' => 3, // Antal inlägg att hämta (de senaste tre)
            'orderby' => 'date', // Sortera efter datum
            'order' => 'DESC', // Sorteringsordning, senaste först
        );

        $recent_posts = new WP_Query($args);

        if ($recent_posts->have_posts()) {
            while ($recent_posts->have_posts()) {
                $recent_posts->the_post(); ?>
                <a href="<?php the_permalink(); ?>">
                    <?php the_title(); ?>
                </a>
            <?php }
            wp_reset_postdata(); // Återställer postdata till den ursprungliga loopen
        }
    ?>
    </div>
</footer>
</body>
</html>
