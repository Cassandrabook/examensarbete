<?php get_header(); ?>

<main class="blog">
    <section class="blog-container">
        <div class="post">
            <?php
            if (have_posts()) {
                while (have_posts()) {
                    the_post(); ?>
                    <article class="post-container">
                        <div class="post-image"> <?php the_post_thumbnail() ?> </div>
                        <h1 class="post-title"><?php the_title(); ?></h1>
                        <ul class="post-info">
                            <li class="post-date"><i class="fa-solid fa-calendar-days"></i><?php echo get_the_date(); ?></li>
                            <li class="post-author"><i class="fa fa-user"></i><?php echo the_author_posts_link() ?></li>
                            <li class="post-category"><i class="fa fa-tag"></i>
                                <?php
                                $categories = get_the_category();
                                if ($categories) {
                                    $category_names = array();
                                    foreach ($categories as $category) {
                                        $category_names[] = '<a href="' . esc_url(get_category_link($category->term_id)) . '">' . esc_html($category->name) . '</a>';
                                    }
                                    echo implode(', ', $category_names);
                                }
                                ?>
                            </li>
                        </ul>
                        <div class="post-content">
                            <?php 
                                the_content();
                            ?>
                        </div>
                    </article>
                <?php }
            } ?>
        </div>
        <aside class="sidebar">
            <div class="sidebar-container">
                <?php get_sidebar() ?>
            </div>
        </aside>
    </section>
</main>

<?php get_footer(); ?>
