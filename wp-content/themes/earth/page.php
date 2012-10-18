<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package WordPress
 * @subpackage Twenty_Eleven
 * @since Twenty Eleven 1.0
 */
if ($_SERVER['HTTP_X_REQUESTED_WITH'] != 'xmlhttprequest') die;

while ( have_posts() ) : the_post();
	get_template_part( 'content', 'page' );
endwhile; // end of the loop. 
