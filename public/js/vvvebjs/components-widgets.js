/*
Copyright 2017 Ziadin Givan

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

https://github.com/givanz/VvvebJs
*/

Vvveb.ComponentsGroup['Widgets'] = ["widgets/googlemaps", "widgets/embed-video", "widgets/chartjs", "widgets/lottie",/* "widgets/facebookpage", */"widgets/paypal", /*"widgets/instagram",*/ "widgets/twitter", "widgets/openstreetmap"/*, "widgets/facebookcomments"*/];

Vvveb.Components.extend("_base", "widgets/googlemaps", {
	name: "Google Maps",
	attributes: ["data-component-maps"],
	image: "icons/maps.png",
	dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/maps.png">',
	html: '<div data-component-maps><iframe frameborder="0" src="https://maps.google.com/maps?q=Bucharest&z=15&t=q&key=&output=embed" width="100%" height="100%" style="width:100%;height:100%;left:0px"></iframe></div>',
	resizable: true,//show select box resize handlers
	resizeMode: "css",


	//url parameters
	z: 3, //zoom
	q: 'Paris',//location
	t: 'q', //map type q = roadmap, w = satellite
	key: '',

	init: function (node) {
		let iframe = node.querySelector('iframe');
		let url = new URL(iframe.getAttribute("src"));
		let params = new URLSearchParams(url.search);

		this.z = params.get("z");
		this.q = params.get("q");
		this.t = params.get("t");
		this.key = params.get("key");

		document.querySelector(".component-properties input[name=z]").value = this.z;
		document.querySelector(".component-properties input[name=q]").value = this.q;
		document.querySelector(".component-properties select[name=t]").value = this.t;
		document.querySelector(".component-properties input[name=key]").value = this.key;
	},

	onChange: function (node, property, value) {
		map_iframe = node.querySelector('iframe');

		this[property.key] = value;

		mapurl = 'https://maps.google.com/maps?q=' + this.q + '&z=' + this.z + '&t=' + this.t + '&output=embed';

		map_iframe.setAttribute("src", mapurl);

		return node;
	},

	properties: [{
		name: "Address",
		key: "q",
		inputtype: TextInput
	}, {
		name: "Map type",
		key: "t",
		inputtype: SelectInput,
		data: {
			options: [{
				value: "q",
				text: "Roadmap"
			}, {
				value: "w",
				text: "Satellite"
			}]
		},
	}, {
		name: "Zoom",
		key: "z",
		inputtype: RangeInput,
		data: {
			max: 20, //max zoom level
			min: 1,
			step: 1
		}
	}, {
		name: "Key",
		key: "key",
		inputtype: TextInput
	}]
});

Vvveb.Components.extend("_base", "widgets/openstreetmap", {
	name: "Open Street Map",
	attributes: ["data-component-openstreetmap"],
	image: "icons/maps.png",
	dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/maps.png">',
	html: `<div data-component-openstreetmap><iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-62.04673002474011%2C16.95487694424327%2C-61.60521696321666%2C17.196751341562923&layer=mapnik"></iframe></div>`,
	resizable: true,//show select box resize handlers
	resizeMode: "css",


	//url parameters
	bbox: '',//location
	layer: 'mapnik', //map type

	init: function (node) {
		let iframe = node.querySelector('iframe');
		let url = new URL(iframe.getAttribute("src"));
		let params = new URLSearchParams(url.search);

		this.bbox = params.get("bbox");
		this.layer = params.get("layer");

		document.querySelector(".component-properties input[name=bbox]").value = this.bbox;
		document.querySelector(".component-properties input[name=layer]").value = this.layer;
	},

	onChange: function (node, property, value) {
		map_iframe = node.querySelector('iframe');

		this[property.key] = value;

		mapurl = 'https://www.openstreetmap.org/export/embed.html?bbox=' + this.bbox + '&layer=' + this.layer;

		map_iframe.setAttribute("src", mapurl);

		return node;
	},

	properties: [{
		name: "Map",
		key: "bbox",
		inputtype: TextInput
		/*    },{
				name: "Layer",
				key: "layer",
				inputtype: SelectInput,
				data:{
					options: [{
						value: "",
						text: "Default"
					},{
						value: "Y",
						text: "CyclOSM"
					},{
						value: "C",
						text: "Cycle Map"
					},{
						value: "T",
						text: "Transport Map"
					}]
			   }*/
	}]
});

Vvveb.Components.extend("_base", "widgets/embed-video", {
	name: "Embed Video",
	attributes: ["data-component-video"],
	image: "icons/youtube.png",
	dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/youtube.png" width="100" height="100">', //use image for drag and swap with iframe on drop for drag performance
	html: '<div data-component-video style="width:100%;height:280px;"><iframe frameborder="0" src="https://player.vimeo.com/video/24253126?autoplay=false&controls=false&loop=false&playsinline=true&muted=false" width="100%" height="100%"></iframe></div>',


	//url parameters set with onChange
	t: 'y',//video type
	video_id: '',//video id
	url: '', //html5 video src
	autoplay: false,
	controls: false,
	loop: false,
	playsinline: true,
	muted: false,
	resizable: true,//show select box resize handlers
	resizeMode: "css",//div unlike img/iframe etc does not have width,height attributes need to use css
	youtubeRegex: /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]+)/i,
	vimeoRegex: /(?:vimeo\.com(?:[^\d]+))(\d+)/i,

	init: function (node) {
		iframe = node.querySelector('iframe');
		video = node.querySelector('video');

		document.querySelector(".component-properties [data-key=url]").style.display = "none";
		document.querySelector(".component-properties [data-key=poster]").style.display = "none";

		//check if html5
		if (video) {
			this.url = video.src;
		} else if (iframe) {//vimeo or youtube
			let src = iframe.getAttribute("src");
			let match;

			if (src && src.indexOf("youtube") && (match = src.match(this.youtubeRegex))) {//youtube
				this.video_id = match[1];
				this.t = "y";
			} else if (src && src.indexOf("vimeo") && (match = src.match(this.vimeoRegex))) { //vimeo
				this.video_id = match[1];
				this.t = "v";
			} else {
				this.t = "h";
			}
		}

		document.querySelector(".component-properties input[name=video_id]").value = this.video_id;
		document.querySelector(".component-properties input[name=url]").value = this.url;
		document.querySelector(".component-properties select[name=t]").value = this.t;
	},

	onChange: function (node, property, value) {
		this[property.key] = value;
		//if (property.key == "t")
		{
			switch (this.t) {
				case 'y':
					document.querySelector(".component-properties [data-key=video_id]").style.display = "";
					document.querySelector(".component-properties [data-key=url]").style.display = "none";
					document.querySelector(".component-properties [data-key=poster]").style.display = "none";

					newnode = generateElements(`<iframe width="100%" height="100%" allowfullscreen="true" frameborder="0" allow="autoplay" 
										src="https://www.youtube.com/embed/${this.video_id}?autoplay=${this.autoplay}&controls=${this.controls}&loop=${this.loop}&playsinline=${this.playsinline}&muted=${this.muted}">
								</iframe>`)[0];
					break;
				case 'v':
					document.querySelector(".component-properties [data-key=video_id]").style.display = "";
					document.querySelector(".component-properties [data-key=url]").style.display = "none";
					document.querySelector(".component-properties [data-key=poster]").style.display = "none";
					newnode = generateElements(`<iframe width="100%" height="100%" allowfullscreen="true" frameborder="0" allow="autoplay" 
										src="https://player.vimeo.com/video/${this.video_id}?autoplay=${this.autoplay}&controls=${this.controls}&loop=${this.loop}&playsinline=${this.playsinline}&muted=${this.muted}">
								</iframe>`)[0];
					break;
				case 'h':
					document.querySelector(".component-properties [data-key=video_id]").style.display = "none";
					document.querySelector(".component-properties [data-key=url]").style.display = "";
					document.querySelector(".component-properties [data-key=poster]").style.display = "";
					newnode = generateElements('<video poster="' + this.poster + '" src="' + this.url + '" ' + (this.autoplay ? ' autoplay ' : '') + (this.controls ? ' controls ' : '') + (this.loop ? ' loop ' : '') + (this.playsinline ? ' playsinline ' : '') + (this.muted ? ' muted ' : '') + ' style="height: 100%; width: 100%;"></video>')[0];
					break;
			}

			node.querySelector(":scope > iframe,:scope  > video").replaceWith(newnode);
			return node;
		}

		return node;
	},

	properties: [{
		name: "Provider",
		key: "t",
		inputtype: SelectInput,
		data: {
			options: [{
				text: "Youtube",
				value: "y"
			}, {
				text: "Vimeo",
				value: "v"
			}, {
				text: "HTML5",
				value: "h"
			}]
		},
	}, {
		name: "Video",
		key: "video_id",
		inputtype: TextInput,
		onChange: function (node, value, input, component) {

			let youtube = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]+)/i;
			let vimeo = /(?:vimeo\.com(?:[^\d]+))(\d+)/i;
			let id = false;
			let t = false;

			if (((id = value.match(youtube)) && (t = "y")) || ((id = value.match(vimeo)) && (t = "v"))) {
				document.querySelector(".component-properties select[name=t]").value = t;
				document.querySelector(".component-properties select[name=video_id]").value = id[1];

				component.t = t;
				component.video_id = id[1];

				return id[1];
			}

			return node;
		}
	}, {
		name: "Poster",
		key: "poster",
		htmlAttr: "poster",
		inputtype: ImageInput
	}, {
		name: "Url",
		key: "url",
		inputtype: TextInput
	}, {
		name: "Width",
		key: "width",
		htmlAttr: "style",
		inline: false,
		col: 6,
		inputtype: CssUnitInput
	}, {
		name: "Height",
		key: "height",
		htmlAttr: "style",
		inline: false,
		col: 6,
		inputtype: CssUnitInput
	}, {
		key: "video_options",
		inputtype: SectionInput,
		name: false,
		data: { header: "Options" },
	}, {
		name: "Auto play",
		key: "autoplay",
		htmlAttr: "autoplay",
		inline: true,
		col: 4,
		inputtype: CheckboxInput
	}, {
		name: "Plays inline",
		key: "playsinline",
		htmlAttr: "playsinline",
		inline: true,
		col: 4,
		inputtype: CheckboxInput
	}, {
		name: "Controls",
		key: "controls",
		htmlAttr: "controls",
		inline: true,
		col: 4,
		inputtype: CheckboxInput
	}, {
		name: "Loop",
		key: "loop",
		htmlAttr: "loop",
		inline: true,
		col: 4,
		inputtype: CheckboxInput
	}, {
		name: "Muted",
		key: "muted",
		htmlAttr: "muted",
		inline: true,
		col: 4,
		inputtype: CheckboxInput
	}, {
		name: "",
		key: "autoplay_warning",
		inline: false,
		col: 12,
		inputtype: NoticeInput,
		data: {
			type: 'warning',
			title: 'Autoplay',
			text: 'Most browsers allow auto play only if video is muted and plays inline'
		}
	}]
});
