<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Eleven
 */

//get_header(); 

if (!defined(THEME_PATH))
	define('THEME_PATH', '/wp-content/themes/earth/');
?>

<html>
	<head>
		<meta charset="utf-8" />
		<link rel="stylesheet" type="text/css" href="<?php echo THEME_PATH; ?>css/earth.css" />
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js"></script>
	</head>
	<body>
		<div id="earth-container">
			<div class="controls">
				<div class="up"></div>
				<div class="right"></div>
				<div class="left"></div>
				<div class="down"></div>
			</div>
			<div class="earth"></div>
		</div>
		<script type="text/javascript" src="<?php echo THEME_PATH; ?>js/earth.js"></script>
	</body>
</html>