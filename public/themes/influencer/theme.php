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

/*
Name: Influencer
Parent: influencer
URI: https://nodebuilder.id
Author: Fajar Riza Fauzi
Author URI: https://vvveb.com
Description: Influencer is a one product landing page template.
Version: 1.0
License:  MIT
License URI: https://nodebuilder.id/license
Tags: blog, ecommerce
Text Domain: influencer
*/

/*
Landing child theme.
Parent theme is set using by using Parent: parent_theme_directory
*/
use function Vvveb\__;

return
	[
		'pages' => [
			'index' => [
				'name'        => 'index',
				'file'        => 'index.html',
				'url'         => '/themes/influencer/index.html',
				'title' =>  __('Home page'),
				'folder'      => '',
				'description' => 'Website homepage',
			],
			'tentang-kami' => [
				'name'        => 'tentang-kami',
				'file'        => 'tentang-kami.html',
				'url'         => '/themes/influencer/tentang-kami.html',
				'title' =>  __('Tentang Kami'),
				'folder'      => '',
				'description' => 'Contoh Halaman yang bisa kamu edit',
			],
			'produk' => [
				'name'        => 'produk',
				'file'        => 'produk.html',
				'url'         => '/themes/influencer/produk.html',
				'title' =>  __('Produk'),
				'folder'      => '',
				'description' => 'Contoh Halaman yang bisa kamu edit',
			],
			'kontak' => [
				'name'        => 'kontak',
				'file'        => 'kontak.html',
				'url'         => '/themes/influencer/kontak.html',
				'title' =>  __('Produk'),
				'folder'      => '',
				'description' => 'Contoh Halaman yang bisa kamu edit',
			],
		 
		],
		'components' => [
			['title' =>  __('Content'), 'name' =>  'content'],
			['title' => __('Ecommerce'), 'name' =>  'ecommerce'],
			['title' => __('Bootstrap 5'), 'name' =>  'bootstrap5'],
			['title' => __('Landing theme components'), 'name' =>  'landing', 'file'=> 'landing-components.js'],
		],
		'inputs' => [
			['title' =>  __('Slider inputs'), 'name' =>  'slider', 'file'=> 'slider-inputs.js'],
		],
		'ignoreFolders' => ['backup'],
	];
