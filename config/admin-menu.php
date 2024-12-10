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
 	'edit' => [
 		'name'   => __('Edit websites'),
 		'url'    => $admin_path . "?module=editor/editor&url=$homeUrl&template=index.html",
 		'module' => 'editor/editor',
 		'action' => 'index',
 		'icon'   => 'icon-color-wand-outline',
 	],
 	'pages' => [
 		'name'     => __('Pages'),
 		'url'      => $admin_path . '?module=content/posts&type=page',
 		'module'   => 'content/posts',
 		'action'   => 'index',
 		'icon' 		  => 'icon-document-outline',
 		//'icon-img' => $admin_path . 'themes/default/img/svg/ionicons/ios-document-outline.svg',
 		//'icon-img' => $admin_path . 'themes/default/img/svg/ionicons/ios-photos-outline.svg',
 		'show_on_modules' => ['posts', 'post', 'pages', 'categories'],
 		'items'           => [
 			'pages' => [
 				'name'   => __('Pages'),
 				'url'    => $admin_path . '?module=content/posts&type=page',
 				'module' => 'content/posts',
 				'action' => 'index',
 				'icon'   => 'la la-file-invoice',
 			],
 			'addpage' => [
 				'name'   => __('Add new page'),
 				'url'    => $admin_path . '?module=content/post&type=page',
 				'module' => 'content/post',
 				'action' => 'save',
 				'icon'   => 'la la-plus-circle',
 			],
 			'taxonomy-heading' => [
 				'name'    => __('Taxonomy'),
 				'heading' => true,
 			],
 			'menus' => [
 				'name'   => __('Menus'),
 				'url'    => $admin_path . '?module=content/menus&type=page',
 				'module' => 'content/menus',
 				'action' => 'index',
 				'icon'   => 'la la-boxes',
 			],
 		],
 	],
 	'medialibrary' => [
 		'name'   => __('Media library'),
 		'url'    => $admin_path . '?module=media/media',
 		'module' => 'media/media',
 		'action' => 'index',
 		'icon'   => 'icon-images-outline',
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
 			],
 			'add-user' => [
 				'name'   => __('Add new user'),
 				'url'    => $admin_path . '?module=user/user',
 				'module' => 'user/user',
 				'action' => 'save',
 				'icon'   => 'la la-plus-circle',
 			],
 			'groups' => [
 				'name'    => __('Groups'),
 				'heading' => true,
 			],
 			'user-groups' => [
 				'name'   => __('User groups'),
 				'url'    => $admin_path . '?module=user/user-groups',
 				'module' => 'user/user-groups',
 				'action' => 'index',
 				'icon'   => 'la la-user-friends',
 			],
 			'add-group' => [
 				'name'   => __('Add new group'),
 				'url'    => $admin_path . '?module=user/user-group',
 				'module' => 'user/user-group',
 				'action' => 'save',
 				'icon'   => 'la la-plus-circle',
 			],
 		],
 	],
 	'configuration' => [
 		'name'    => __('Configuration'),
 		'url'     => $admin_path . '?module=settings/sites',
 		'module'  => 'settings/sites',
 		'heading' => true,
 	],
 	'plugins' => [
 		'name'   => __('Plugins'),
 		'url'    => $admin_path . '?module=plugin/plugins',
 		'module' => 'plugin/plugins',
 		'action' => 'index',
 		'icon'   => 'icon-extension-puzzle-outline',
 		'class'  => 'align-top',
 		'items'  => [
 			'installed' => [
 				'name'   => __('Installed Plugins'),
 				'url'    => $admin_path . '?module=plugin/plugins',
 				'module' => 'plugin/plugins',
 				'action' => 'index',
 				'icon'   => 'la la-plug',
 			],
 			'plugins-heading' => [
 				'name'    => __('Plugins'),
 				'heading' => true,
 			],
 		],
 	],
 	'settings' => [
 		'name'   => __('Settings'),
 		'url'    => $admin_path . '?module=settings/sites',
 		'module' => 'settings/sites',
 		'action' => 'index',
 		'icon'   => 'icon-settings-outline',
 		'class'  => 'align-top mega-menu',
 		'items'  => [
 			'admins' => [
 				'name'   => __('Admin users'),
 				'url'    => $admin_path . '?module=admin/users',
 				'module' => 'admin/users',
 				'action' => 'index',
 				'icon'   => 'la la-user',
 				'items'  => [
 					'users' => [
 						'name'   => __('Users'),
 						'url'    => $admin_path . '?module=admin/users',
 						'module' => 'admin/users',
 						'action' => 'index',
 						'icon'   => 'la la-user',
 					],
 					'add' => [
 						'name'   => __('Add new user'),
 						'url'    => $admin_path . '?module=admin/user',
 						'module' => 'admin/user',
 						'action' => 'index',
 						'icon'   => 'la la-user-plus',
 					],
 					'roles-heading' => [
 						'name'    => __('Roles'),
 						'heading' => true,
 					],
 					'role' => [
 						'name'   => __('Manage Roles'),
 						'url'    => $admin_path . '?module=admin/roles',
 						'module' => 'admin/roles',
 						'action' => 'index',
 						'icon'   => 'la la-user-cog',
 					],
 					'add-role' => [
 						'name'   => __('Add Role'),
 						'url'    => $admin_path . '?module=admin/role',
 						'module' => 'admin/role',
 						'action' => 'index',
 						'icon'   => 'la la-user-tag',
 					],
 				],
 			],
 			'system' => [
 				'name'   => __('System'),
 				'url'    => $admin_path . '?module=settings/email',
 				'module' => 'settings/email',
 				'action' => 'index',
 				'icon'   => 'la la-tools',
 				'items'  => [
 					'email' => [
 						'name'   => __('Email settings'),
 						'icon'   => 'la la-envelope',
 						'url'    => $admin_path . '?module=settings/email',
 						'module' => 'settings/email',
 						'action' => 'index',
 					],
 				],
 			],
 		],
 	],
 	'tools' => [
 		'name'   => __('Tools'),
 		'url'    => $admin_path . '?module=tools/cache',
 		'module' => 'tools/cache',
 		'action' => 'index',
 		'icon'   => 'icon-build-outline',
 		'class'  => 'align-top',
 		'items'  => [
 			'cache' => [
 				'name'   => __('Cache'),
 				'url'    => $admin_path . '?module=tools/cache',
 				'module' => 'tools/cache',
 				'action' => 'index',
 				'icon'   => 'la la-circle-notch',
 			],
 			'cron' => [
 				'name'   => __('Cron job'),
 				'url'    => $admin_path . '?module=tools/cron',
 				'module' => 'tools/cron',
 				'action' => 'index',
 				'icon'   => 'la la-history la-90',
 			],
 			'import-export' => [
 				'name'   => __('Import/Export'),
 				'url'    => $admin_path . '?module=tools/import',
 				'module' => 'tools/import',
 				'action' => 'index',
 				'icon'   => 'la la-upload',
 				'items'  => [
 					'content-heading' => [
 						'name'    => __('Content'),
 						'heading' => true,
 					],
 					'import' => [
 						'name'   => __('Import content'),
 						'icon'   => 'la la-file-import',
 						'url'    => $admin_path . '?module=tools/import',
 						'module' => 'tools/import',
 						'action' => 'index',
 					],
 					'export' => [
 						'name'   => __('Export content'),
 						'icon'   => 'la la-file-export',
 						'url'    => $admin_path . '?module=tools/export',
 						'module' => 'tools/export',
 						'action' => 'index',
 					],
 					/*
					'media-heading' => [
						'name'    => __('Media'),
						'heading' => true,
					],
					'import-media' => [
						'name'   => __('Import media'),
						'icon'   => 'la la-caret-square-left',
						'url'    => $admin_path . '?module=tools/import',
						'module' => 'tools/import',
						'action' => 'index',
					],
					'export-media' => [
						'name'   => __('Export media'),
						'icon'   => 'la la-caret-square-right',
						'url'    => $admin_path . '?module=tools/export',
						'module' => 'tools/export',
						'action' => 'index',
					],
					 */
 				],
 			],
 			/*
			'security' => [
				'name'   => __('Security'),
				'url'    => $admin_path . '?module=tools/security',
				'module' => 'tools/security',
				'action' => 'index',
				'icon'   => 'la la-shield-alt',
			],
			*/
 			'system' => [
 				'name'   => __('System info'),
 				'url'    => $admin_path . '?module=tools/systeminfo',
 				'module' => 'tools/systeminfo',
 				'action' => 'index',
 				'icon'   => 'la la-info-circle',
 				'items'  => [
 					'info' => [
 						'name'   => __('System Info'),
 						'icon'   => 'la la-info',
 						'url'    => $admin_path . '?module=tools/systeminfo',
 						'module' => 'tools/systeminfo',
 						'action' => 'index',
 					],
 					'error-log' => [
 						'name'   => __('Error log'),
 						'url'    => $admin_path . '?module=tools/errorlog',
 						'module' => 'tools/errorlog',
 						'action' => 'index',
 						'icon'   => 'la la-bug',
 					],
 				],
 			],
 		],
 	],
 ];
