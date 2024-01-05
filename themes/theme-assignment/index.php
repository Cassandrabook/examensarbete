<?php get_header(); ?>

<main class="blog">
    <section class="blog-container">
            <div class="post">
            <h1 class="blog-title"><?php WP_title("")?></h1>
                <?php
                 if (have_posts()) {
                    while (have_posts()) {
                        the_post(); ?>
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
                            <div class="post-content">
                                <?php 
                                    $post_content = get_the_content();
                                    $paragraphs = explode('</p>', $post_content);
                                    echo '<p>' . strip_tags($paragraphs[0]) . '</p>';
                                ?>
                            </div>
                        </article>
                    <?php }
                } ?>
                <div class="pagination-container">
                    <?php the_posts_pagination();?>
                    
                </div>
            </div>
            <aside class="sidebar">
                <div class="sidebar-container">
                    <?php get_sidebar() ?>
                </div>
            </aside>
        
    </section>
</main>

<?php get_footer(); ?>
