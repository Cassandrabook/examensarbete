<?php 
    get_header();?>

<main class="underpage">
    <div class="underpage-container">
    <aside class="underpage-menu">
            <ul class="side-menu">
                <?php
                    $page_slugs = array('undersida', 'undersida-2', 'undersida-3', 'undersida-4');
                    foreach ($page_slugs as $slug) {
                        $page = get_page_by_path($slug);
                        if ($page) {
                            $page_url = get_permalink($page);
                            $page_title = get_the_title($page);
                            echo '<li><a href="' . esc_url($page_url) . '">' . esc_html($page_title) . '</a></li>';
                        } else {
                            echo '<li>Page not found.</li>';
                        }
                    }
                ?>
            </ul>
        </aside>
        <div class="underpage-content">
            <h1 class="underpage-title"><?php the_title(); ?></h1>
            <?php the_content() ?>
        </div>
    </div>
</main>

    <?php get_footer();
?>