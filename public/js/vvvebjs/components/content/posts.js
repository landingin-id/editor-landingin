/**
 * Vvveb
 *
 * Copyright (C) 2021  Ziadin Givan
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



import { ServerComponent } from '../server-component.js';


let template =
	`
<div class="container" data-v-component-posts="popular" data-v-limit="4">      
<div class="row">

	<div class="col-12" style="padding-left:0px;padding-right:0px" data-v-post="" data-v-id="6" data-v-type="post">

	  	<div id="card-3" class="card cards card-float" style="display: flex;">
			<div class="card-image">
				<img data-v-post-image="" class="card-img-top bg-body-secondary" src="/public/media/noimage-post.jpg" alt="Card image cap" width="357" height="341">
			</div>
			<div class="card-body"><section title="two columns" class="py-4">
			</section><p class=""></p><a href="/contoh-postingan-pertama-3" data-v-post-url="" title="Tips Perancangan Landing page yang baik dan benar"><h3 data-v-post-name="">Tips Perancangan Landing page yang baik dan benar.</h3></a>
				<span data-v-post-excerpt="">Konten ini hanya contoh</span>
			</div>
    	</div>

	</div>

	<div data-pagination data-v-parent-component="posts" data-v-parent-index="0" data-v-parameters='{}'>

            <nav data-v-if="pagecount > 1">
              <ul class="pagination pagination-sm justify-content-end" style="--bs-pagination-border-color:transparent;border-top: 1px solid var(--bs-border-color);padding-top: 1rem;">

                <!--
			<li class="page-item pager-first" data-first>
				<a class="page-link" title="First page" href="#" data-page-url data-v-if="current_page > 1">
					<span aria-hidden="true" class="la la-angle-double-left"></span>
					<span class="sr-only">First</span>
				</a>
			</li>
			-->

                <li class="page-item pager-prev" data-prev>

                  <a class="page-link" href="#" aria-label="Previous" title="Previous page" data-page-url data-scroll="top" data-v-if="current_page > 1">
                    <span aria-hidden="true" class="la la-angle-left la-lg"></span>
                    <!-- <span>Newer Posts</span> -->
                  </a>

                </li>



                <li class="page-item" data-page>
                  <a class="page-link" href="#" data-page-no data-page-url data-scroll="top">1</a>
                </li>
                <li class="page-item" data-page>
                  <a class="page-link" href="#" data-page-no data-page-url data-scroll="top">2</a>
                </li>
                <li class="page-item" data-page>
                  <a class="page-link" href="#" data-page-no data-page-url data-scroll="top">3</a>
                </li>
                <li class="page-item" data-page>
                  <a class="page-link" href="#" data-page-no data-page-url data-scroll="top">4</a>
                </li>
                <li class="page-item" data-page>
                  <a class="page-link" href="#" data-page-no data-page-url data-scroll="top">5</a>
                </li>

                <li class="page-item pager-next" data-next>
                  <a class="page-link" href="#" aria-label="Next" title="Next page" data-page-url data-scroll="top" data-v-if="current_page < pagecount">
                    <!-- <span>Older Posts</span> -->
                    <span aria-hidden="true" class="la la-angle-right la-lg"></span>
                  </a>
                </li>

                <!--
			<li class="page-item pager-last" data-last>
				<a class="page-link" title="Last page" href="#" data-page-url data-v-if="current_page < pagecount">
				<span aria-hidden="true" class="la la-angle-double-right"></span>
					<span class="sr-only">Last</span>
				</a>
			</li>
			-->

              </ul>
            </nav>
    </div>

  </div>
</div>
`;

class PostsComponent extends ServerComponent {
	constructor() {
		super();

		this.name = "Posts";
		this.attributes = ["data-v-component-posts"],

			this.image = "icons/posts.png";
		this.html = template;

		this.properties = [{
			name: false,
			key: "source",
			inputtype: RadioButtonInput,
			inline: false,
			col: 12,
			htmlAttr: "data-v-source",
			data: {
				inline: true,
				extraclass: "btn-group-fullwidth",
				options: [{
					value: "automatic",
					icon: "la la-cog",
					text: "Configuration",
					title: "Configuration",
					extraclass: "btn-sm",
					checked: true,
				}, {
					value: "autocomplete",
					text: "Autocomplete",
					title: "Autocomplete",
					icon: "la la-search",
					extraclass: "btn-sm",
				}],
			},
			setGroup: group => {
				document.querySelectorAll('.mb-3[data-group]').forEach(e => e.classList.add("d-none"));
				document.querySelectorAll('.mb-3[data-group="' + group + '"].d-none').forEach((el, i) => {
					el.classList.remove("d-none");
				});
				//return element;
			},
			onChange: function (element, value, input) {
				this.setGroup(input.value);
				return element;
			},
			init: function (node) {
				//this.setGroup(node.dataset.vType);
				//return 'autocomplete';
				return node.dataset.vSource;
			},
		}, {
			name: "Start from page",
			group: "automatic",
			col: 6,
			inline: false,
			key: "page",
			htmlAttr: "data-v-page",
			data: {
				value: "1",//default
				min: "1",
				max: "1024",
				step: "1"
			},
			inputtype: NumberInput,
		}, {
			name: "Nr. of posts",
			group: "automatic",
			col: 6,
			inline: false,
			key: "limit",
			htmlAttr: "data-v-limit",
			inputtype: NumberInput,
			data: {
				value: "8",//default
				min: "1",
				max: "1024",
				step: "1"
			},
		}, {
			name: "Order by",
			group: "automatic",
			key: "order",
			col: 6,
			inline: false,
			htmlAttr: "data-v-order_by",
			inputtype: SelectInput,
			data: {
				options: [{
					value: "NULL",
					text: "Default"
				}, {
					value: "created_at",
					text: "Date added"
				}, {
					value: "updated_at",
					text: "Date modified"
				}/*, {
					value: "sales",
					text: "Sales"
				}*/]
			}
		}, {
			name: "Order direction",
			group: "automatic",
			key: "order",
			col: 6,
			inline: false,
			htmlAttr: "data-v-direction",
			inputtype: SelectInput,
			data: {
				options: [{
					value: "asc",
					text: "Ascending"
				}, {
					value: "desc",
					text: "Descending"
				}]
			}
		}, {
			name: "Limit to categories",
			group: "automatic",
			key: "category",
			htmlAttr: "data-v-category",
			inline: false,
			col: 12,
			inputtype: TagsInput,
			data: {
				url: "/admin/?module=editor/autocomplete&action=categories",
			},

		}, {
			name: "Limit to manufacturers",
			group: "automatic",
			key: "manufacturer",
			htmlAttr: "data-v-manufacturer",
			inline: false,
			col: 12,
			inputtype: TagsInput,
			data: {
				url: "/admin/?module=editor/autocomplete&action=manufacturers",
			}
		}, {
			name: "Posts",
			key: "posts",
			group: "autocomplete",
			htmlAttr: "data-v-post_id",
			inline: false,
			col: 12,
			inputtype: AutocompleteList,
			data: {
				url: "/admin/?module=editor/autocomplete&action=posts",
			},

		}];
	}

	init(node) {
		document.querySelectorAll('.mb-3[data-group]').forEach((el, i) => {
			el.classList.add("d-none");
		});

		let source = node.dataset.vSource;
		if (!source) {
			source = "automatic";
		}

		document.querySelectorAll('.mb-3[data-group="' + source + '"]').forEach(e => e.classList.remove("d-none"));
	}
}

let postsComponent = new PostsComponent;

export {
	postsComponent
};
