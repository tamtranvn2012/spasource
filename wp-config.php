<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'spasource');

/** MySQL database username */
define('DB_USER', 'spasource');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Z*S;p2unh=KGR59jZ.t!ie>FmV/$<A$vb{,S$u&uv2X?PI`/Hl4|A8Hyi;m)`K|l');
define('SECURE_AUTH_KEY',  'Wex@=]-%HKG#Qjpw3( CNm)2B],]5$ldGMnz2N]^-!@2&  |!OQ -+udygG);!bm');
define('LOGGED_IN_KEY',    '7#K@|25&KltZ,GuQrCxx=GFCYy$~(.(=3q9.LKDc,Y/LUX9l[WHrC(8iGC 69;GK');
define('NONCE_KEY',        'l[%%Aj?1kD;q?zLQf/>7K{@ ;<6a=oF21=,yER 2m6hhOi-Y&?7_^N43QZRu4<H^');
define('AUTH_SALT',        '=Fa`o4h)ZK 98Nw!=FH8%*t[|9WC@O@)[DuC4{H?Z:r:6OSNZ=[~kfV<Ti&{NkZ!');
define('SECURE_AUTH_SALT', '$#1z(#@CgOxT^38c^O>hr]t6AcXKz:s,VL~9s.lKB`U863Ws.^=sh>?: >%eY]iZ');
define('LOGGED_IN_SALT',   'c2V&zzXKA,qF2%P`LhOC2&2x1JNFQWeK5JqYVZZ7c@ fNOQQVo=3bFdx_eW2SpT7');
define('NONCE_SALT',       't.cT8lRBbPSbZ>0UeGUGt?{cudN#U F]Z;H,2yP9aCt?kx9uEMJYE/ltU-y-thyv');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
