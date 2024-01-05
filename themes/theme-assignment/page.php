<?php 
    get_header();?>

<main class="home">

    <div class="home-container">
        <div class="home-image"> <?php the_post_thumbnail() ?> 
            <div class="home-content">
                    <?php the_content() ?>
                    <h2> <?php the_field("sub_title") ?></h2>

                </div>
        </div>
    </div>   
</main>
    <?php get_footer();
?>