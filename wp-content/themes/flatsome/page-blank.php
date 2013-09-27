<?php
/*
Template name: Full Width (100%)
*/
get_header(); ?>

<div class="page-header">
<?php the_excerpt();?>
</div>

<div id="content" role="main">

			<?php while ( have_posts() ) : the_post(); ?>

				<?php the_content(); ?>
			
			<?php endwhile; // end of the loop. ?>
			
</div>
<?php get_footer(); ?>
