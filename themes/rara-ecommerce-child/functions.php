<?php
/**
 * Rara eCommerce functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Rara_eCommerce
 */

$rara_ecommerce_theme_data = wp_get_theme();
if( ! defined( 'RARA_ECOMMERCE_THEME_VERSION' ) ) define( 'RARA_ECOMMERCE_THEME_VERSION', $rara_ecommerce_theme_data->get( 'Version' ) );
if( ! defined( 'RARA_ECOMMERCE_THEME_NAME' ) ) define( 'RARA_ECOMMERCE_THEME_NAME', $rara_ecommerce_theme_data->get( 'Name' ) );
if( ! defined( 'RARA_ECOMMERCE_THEME_TEXTDOMAIN' ) ) define( 'RARA_ECOMMERCE_THEME_TEXTDOMAIN', $rara_ecommerce_theme_data->get( 'TextDomain' ) );

/**
 * Custom Functions.
 */
require get_template_directory() . '/inc/custom-functions.php';

/**
 * Standalone Functions.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Template Functions.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Custom functions for selective refresh.
 */
require get_template_directory() . '/inc/partials.php';

/**
 * Fontawesome
 */
require get_template_directory() . '/inc/fontawesome.php';

/**
 * Custom Controls
 */
require get_template_directory() . '/inc/custom-controls/custom-control.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer/customizer.php';

/**
 * Widgets
 */
require get_template_directory() . '/inc/widgets.php';

/**
 * Metabox
 */
require get_template_directory() . '/inc/metabox.php';

/**
 * Typography Functions
 */
require get_template_directory() . '/inc/typography.php';

/**
 * Dynamic Styles
 */
require get_template_directory() . '/css/style.php';

/**
 * raratheme companion filters
 */
if( rara_ecommerce_is_rtc_activated() ){
	require get_template_directory() . '/inc/rtc-filters.php';
}

/**
 * Plugin Recommendation
*/
require get_template_directory() . '/inc/tgmpa/recommended-plugins.php';

/**
 * Getting Started
*/
require get_template_directory() . '/inc/getting-started/getting-started.php';

/**
 * Add theme compatibility function for woocommerce if active
*/
if( rara_ecommerce_is_woocommerce_activated() ){
    require get_template_directory() . '/inc/woocommerce-functions.php';    
}

/**
 * Implement Local Font Method functions.
 */
require get_template_directory() . '/inc/class-webfont-loader.php';      

function remove_standard_shipping( $rates, $package ) {
    $free_shipping = false;
    foreach ( $rates as $rate ) {
        if ( 'free_shipping' === $rate->method_id ) {
            $free_shipping = true;
            break;
        }
    }
 
    if ( $free_shipping ) {
        foreach ( $rates as $rate_key => $rate ) {
            if ( 'free_shipping' !== $rate->method_id ) {
                unset( $rates[ $rate_key ] );
            }
        }
    }
 
    return $rates;
}
add_filter( 'woocommerce_package_rates', 'remove_standard_shipping', 10, 2 );

// Lägg till alla produkter med rabatt i kategorin "REA"
function add_existing_products_to_rea_category() {
    // Hämta alla produkter med rabatt
    $args = array(
        'post_type'      => 'product',
        'posts_per_page' => -1,
        'meta_query'     => array(
            array(
                'key'     => '_sale_price',
                'value'   => '',
                'compare' => '!=',
            ),
        ),
    );

    $products = new WP_Query( $args );

    // Lägg till produkterna i kategorin "REA"
    if ( $products->have_posts() ) {
        $rea_category = get_term_by( 'name', 'REA', 'product_cat' );

        while ( $products->have_posts() ) {
            $products->the_post();
            wp_set_object_terms( get_the_ID(), 'REA', 'product_cat', true );
        }

        wp_reset_postdata();
    }
}

// Kör funktionen när koden aktiveras
add_action( 'after_switch_theme', 'add_existing_products_to_rea_category' );


