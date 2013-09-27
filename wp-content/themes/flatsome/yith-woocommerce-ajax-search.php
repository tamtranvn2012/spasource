<?php
/**
 * YITH WooCommerce Ajax Search template
 *
 * @author Your Inspiration Themes
 * @package YITH WooCommerce Ajax Search
 * @version 1.0.0
 */

if ( !defined( 'YITH_WCAS' ) ) { exit; } // Exit if accessed directly


wp_enqueue_script('yith_wcas_jquery-autocomplete' );

?>




<div class="row collapse yith-ajaxsearchform-container">
<form role="search" method="get" id="yith-ajaxsearchform" action="<?php echo esc_url( home_url( '/'  ) ) ?>">
      <div class="large-10 small-10 columns">
        <input type="search" value="<?php echo get_search_query() ?>" name="s" id="yith-s" placeholder="<?php echo get_option('yith_wcas_search_input_label') ?>" />
      </div><!-- input -->
      <div class="large-2 small-2 columns">
        <button type="submit" id="yith-searchsubmit" class="button secondary postfix"><i class="icon-search"></i></button>
        <input type="hidden" name="post_type" value="product" />
      </div><!-- button -->
</form>
</div><!-- row -->

<script type="text/javascript">
jQuery(function($){

    $('#yith-s').autocomplete({
        minChars: <?php echo get_option('yith_wcas_min_chars') * 1; ?>,
        appendTo: '.yith-ajaxsearchform-container',
        serviceUrl: woocommerce_params.ajax_url + '?action=yith_ajax_search_products',
        onSearchStart: function(){
            $('.yith-ajaxsearchform-container').append('<div class="loading"><i></i><i></i><i></i><i></i></div>');
        },
        onSearchComplete: function(){
            $('.yith-ajaxsearchform-container .loading').remove();

        },
        onSelect: function (suggestion) {
            if( suggestion.id != -1 ) {
                window.location.href = suggestion.url;
            }
        }
    });
});
</script>