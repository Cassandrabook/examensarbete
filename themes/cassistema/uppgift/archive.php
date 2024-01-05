<?php get_header(); ?>

<main class="blog">
    <section class="blog-container">
            <div class="post">
                <h1 class="blog-title"><?php echo get_the_archive_title()?></h1>
                <?php 
                    $args = array(
                        'post_type' => 'post',
                        'orderby' => 'date',
                        'order' => 'DESC'
                    );

                    if (is_date()) {
                        $args['year'] = get_query_var('year');
                        $args['monthnum'] = get_query_var('monthnum');
                        $args['day'] = get_query_var('day');
                    }

                    $archive_posts = new WP_Query($args);

                    while ($archive_posts->have_posts()) {
                        $archive_posts->the_post();
                ?>
                    <article class="post-container">
                        <div class="post-image"> <?php the_post_thumbnail() ?> </div>
                        <h2 class="post-title"> <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
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
                        <div class="post-content"><?php the_content(); ?></div>
                    </article>
                <?php } 
                    wp_reset_postdata();
                ?>
            </div>
            <aside class="sidebar">
                <div class="sidebar-container">
                    <?php get_sidebar() ?>
                </div>
            </aside>
        
    </section>
    <div>
        <?php  ?>
    </div>
</main>

<?php get_footer(); ?>
