<?php get_header(); ?>

<main class="search-results">
    <section class="search-container">
        <div class="search-post">
        <h1 class="search-title">Sökresultat för "<?php echo get_search_query(); ?>"</h1>
        <div class="searchform-wrap"><?php get_search_form(); ?></div>
            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
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
            <?php endwhile; else : ?>
                <p>Inga resultat hittades. Försök med en annan sökterm.</p>
            <?php endif; ?>
        </div>
    </section>
</main>

<?php get_footer(); ?>
