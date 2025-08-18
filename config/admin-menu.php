<?php

/**
 * Vvveb
 *
 * Copyright (C) 2022  Ziadin Givan
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 */

use function Vvveb\__;
//use current path
if (APP == 'admin') {
	$admin_path = Vvveb\Url([]);
} else {
	$admin_path = \Vvveb\adminPath();
}
$admin_path .= strpos($admin_path, 'index.php') === false ? 'index.php' : '';
$homeUrl     = Vvveb\Url('index/index');

return
 [
 	'dashboard' => [
 		'name'   => __('Dashboards'),
 		'url'    => $admin_path,
 		'module' => 'index',
 		'action' => 'index',
 		'icon'   => 'icon-pulse-outline',
 	],
 	'users' => [
 		'name'   => __('Users'),
 		'url'    => $admin_path . '?module=user/users',
 		'module' => 'user/users',
 		'action' => 'index',
 		'icon'   => 'icon-people-outline',
 		'items'  => [
 			'users' => [
 				'name'   => __('Users'),
 				'url'    => $admin_path . '?module=user/users',
 				'module' => 'user/users',
 				'action' => 'index',
 				'icon'   => 'la la-user',
 			]
 		],
 	],
 	
 ];
