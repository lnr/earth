<?php
/**
 * Основные параметры WordPress.
 *
 * Этот файл содержит следующие параметры: настройки MySQL, префикс таблиц,
 * секретные ключи, язык WordPress и ABSPATH. Дополнительную информацию можно найти
 * на странице {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Кодекса. Настройки MySQL можно узнать у хостинг-провайдера.
 *
 * Этот файл используется сценарием создания wp-config.php в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать этот файл
 * с именем "wp-config.php" и заполнить значения.
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'femto_cold');

/** Имя пользователя MySQL */
define('DB_USER', 'root');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', '');

/** Имя сервера MySQL */
define('DB_HOST', 'openserver:3306');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется снова авторизоваться.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'rR]u_`rEooeF+^_#W,+cKQ1|7t/BR~ofg{1<*@!hP2Wq47mQk&(IhJ}a %hMLh%i');
define('SECURE_AUTH_KEY',  'k?d@1z 4!tj/,41}Xdl?F(eux%xLJ%%L9PO%CP{+0^U/rsBPk?nh]S[wZCFOG+D;');
define('LOGGED_IN_KEY',    '#<0/<C~Z<Gq?6IXZ-O(g[-@w{/|RUy[/9Imp-deB2G+v`Kv0;?3|y?B<!IO*7grg');
define('NONCE_KEY',        ')!Grm/R)E^~[hF@X]FZ)Y@oQhNY1?n6]eOp(I3]Y9Zoc[|d% ]l`VcHsaC}HPO]=');
define('AUTH_SALT',        '1nouC#;i.2mGJo(NVWywsui9iK23d|[&7^U6q9b@.dig7*s|)fbkm5a.S)I!.chX');
define('SECURE_AUTH_SALT', 'HiOZs%/O6RA=rR9<]hH(f-+oP@PQ_!iVW6O[V||#(/%:Q6Jc(>$pavuUF~<xgu6<');
define('LOGGED_IN_SALT',   'g)v!;.M&`f]pwN6zhe{}4,D h] PW;j{cv2Mhg2<ko2X (p5?2`B^J}GuEI<<EA9');
define('NONCE_SALT',       '? <!by61yXE@Mx:ezCI8oD9VR}uJ+49ncT*w.>r;kDN8qan)9ywcLg,*<ubT.S}Y');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько блогов в одну базу данных, если вы будете использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Язык локализации WordPress, по умолчанию английский.
 *
 * Измените этот параметр, чтобы настроить локализацию. Соответствующий MO-файл
 * для выбранного языка должен быть установлен в wp-content/languages. Например,
 * чтобы включить поддержку русского языка, скопируйте ru_RU.mo в wp-content/languages
 * и присвойте WPLANG значение 'ru_RU'.
 */
define('WPLANG', 'ru_RU');

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Настоятельно рекомендуется, чтобы разработчики плагинов и тем использовали WP_DEBUG
 * в своём рабочем окружении.
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
