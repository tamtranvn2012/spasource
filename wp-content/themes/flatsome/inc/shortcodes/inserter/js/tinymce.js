(function() {	
	tinymce.create('tinymce.plugins.ShortcodeMce', {
		init : function(ed, url){
			tinymce.plugins.ShortcodeMce.theurl = url;
		},
		createControl : function(btn, e) {
			if ( btn == "shortcodes_button" ) {
				var a = this;	
				var btn = e.createSplitButton('button', {
	                title: "Insert Shortcode",
					image: tinymce.plugins.ShortcodeMce.theurl +"/images/shortcodes.png",
					icons: false,
	            });
	            btn.onRenderMenu.add(function (c, b) {
	            	
					a.render( b, "UX Banner", "ux_banner" );
					a.render( b, "UX Slider", "ux_slider" );
					a.render( b, "Row - Full Width", "row" );
					a.render( b, "Row - 4 Columns", "row_4" );
					a.render( b, "Row - 3 Columns", "row_3" );
					a.render( b, "Row - 2 columns", "row_2" );
					a.render( b, "Button", "button" );
					a.render( b, "Tabs - Horizontal", "tabs_horizontal" );
					a.render( b, "Tabs - Vertical", "tabs_vertical" );
					a.render( b, "Accordian", "accordian" );
					a.render( b, "Blog posts", "blog_posts" );
					a.render( b, "Google map", "google_map" );
					a.render( b, "Share icons", "share_icons" );
					a.render( b, "Follow icons", "follow_icons" );
					a.render( b, "Team Member", "team_member" );
					a.render( b, "Featured Box", "featured_box" );
					a.render( b, "Title", "title" );
					a.render( b, "Title - Center", "title_center" );
					a.render( b, "Divider", "divider" );
					a.render( b, "Message box", "message_box" );
					a.render( b, "Product Lookbook slider", "product_lookbook" );
					a.render( b, "Product Pinterest Grid", "product_pinterest" );
					a.render( b, "Product Slider - Bestseller", "product_slider_bestseller" );
					a.render( b, "Product Slider - Latest", "product_slider_latest" );
					a.render( b, "Product Slider - Featured", "product_slider_featured" );
					a.render( b, "Product Slider - On Sale", "product_slider_on_sale" );


					
					
				});
	            
	          return btn;
			}
			return null;               
		},
		render : function(ed, title, id) {
			ed.add({
				title: title,
				onclick: function () {
					
					if(id == "ux_banner") {
						tinyMCE.activeEditor.selection.setContent('[ux_banner bg="http://imageurl" height="300px" animation="fadeIn" text_align="center" text_pos="center"] <h1>Banner content</h1>[/ux_banner]');
					}
					
					if(id == "ux_slider") {
						tinyMCE.activeEditor.selection.setContent('[ux_slider timer="4500" arrow="true" bullets="true" auto_slide="true"  nav_color="dark"] <br> <br> Insert slides here <br> <br>[/ux_slider] ');
					}

					if(id == "row") {
						tinyMCE.activeEditor.selection.setContent('[row] [/row]');
					}

					if(id == "row_4") {
						tinyMCE.activeEditor.selection.setContent('[row] <br> [col span="1/4"] Col 1 [/col]  <br>[col span="1/4"] Col 2 [/col] <br> [col span="1/4"] Col 3 [/col] <br> [col span="1/4"] Col 4 [/col] <br> [/row]');
					}

						if(id == "row_3") {
						tinyMCE.activeEditor.selection.setContent('[row] <br> [col span="1/3"] Col 1 [/col] <br> [col span="1/3"] Col 2 [/col] <br> [col span="1/3"] Col 3 [/col] <br> [/row]');
					}

							if(id == "row_2") {
						tinyMCE.activeEditor.selection.setContent('[row] <br> [col span="1/2"] Col 1 [/col] <br> [col span="1/2"] Col 2 [/col] <br> [/row]');
					}


					if(id == "button") {
						tinyMCE.activeEditor.selection.setContent('[button size="medium" style="primary"  text="Button text" link="http://"]');
					}

					if(id == "tabs_horizontal") {
						tinyMCE.activeEditor.selection.setContent('[tabgroup title="Tab group title"]<br>[tab title="Tab 1 Title"] Tab content [/tab]<br>[tab title="Tab 2 Title"] Tab content [/tab]<br>[tab title="Tab 3 Title"] Tab content [/tab]<br>[/tabgroup]');
					}

					if(id == "tabs_vertical") {
						tinyMCE.activeEditor.selection.setContent('[tabgroup_vertical title="Tab title"]<br>[tab title="Tab 1 Title"] Tab content [/tab]<br>[tab title="Tab 2 Title"] Tab content [/tab]<br>[tab title="Tab 3 Title"] Tab content [/tab]<br>[/tabgroup_vertical]');
					}

					if(id == "accordian") {
						tinyMCE.activeEditor.selection.setContent('[accordion title="Accordian title"]<br><br>[accordion-item title="Accordion Item 1 Title"]<br>Accordion Item 1 Content Goes Here<br>[/accordion-item]<br><br>[accordion-item title="Accordion Item 1 Title"]<br>Accordion Item 1 Content Goes Here<br>[/accordion-item]<br><br>[accordion-item title="Accordion Item 1 Title"]<br> Accordion Item 1 Content Goes Here<br> [/accordion-item]<br><br>[/accordion]');
					}
					
					if(id == "blog_posts") {
						tinyMCE.activeEditor.selection.setContent('[blog_posts columns="3"]');
					}
					
					if(id == "google_map") {
						tinyMCE.activeEditor.selection.setContent('[map lat="40.79028" long="-73.95972" height="500px" color="#58728a"] Map content here.. [/map]');
					}
					
					if(id == "share_icons") {
						tinyMCE.activeEditor.selection.setContent('[share title="Share:"]');
					}

					if(id == "follow_icons") {
						tinyMCE.activeEditor.selection.setContent('[follow twitter="http://" facebook="http://" email="email@post.com" pinterest="http://"]');
					}
					
					if(id == "team_member") {
						tinyMCE.activeEditor.selection.setContent('[team_member name="Name" title="Title" facebook="http://" twitter="http://" pinterest="http://"  img="http://imageurl"]<br>Team member description<br>[/team_member]');
					}

					if(id == "featured_box") {
						tinyMCE.activeEditor.selection.setContent('[featured_box title="Title text" img="http://iconurl"  pos="center"]<br>Featured box text<br>[/featured_box]');
					}

					if(id == "title") {
						tinyMCE.activeEditor.selection.setContent('[title text="This is a title"]');
					}

					if(id == "title_center") {
						tinyMCE.activeEditor.selection.setContent('[title text="This is a centered title" style="center"]');
					}

			
					if(id == "divider") {
						tinyMCE.activeEditor.selection.setContent('[divider]');
					}

			
					if(id == "message_box") {
						tinyMCE.activeEditor.selection.setContent('[message_box bg="#hex or http://imageurl"] Message box text [/message_box]');
					}

					if(id == "product_lookbook") {
						tinyMCE.activeEditor.selection.setContent('[product_lookbook cat="category-slug" product="8"]');
					}

					if(id == "product_pinterest") {
						tinyMCE.activeEditor.selection.setContent('[products_pinterest_style cat="category-slug"]');
					}

					if(id == "product_slider_bestseller") {
						tinyMCE.activeEditor.selection.setContent('[ux_bestseller_products title="Check our bestsellers!"]');
					}

					if(id == "product_slider_featured") {
						tinyMCE.activeEditor.selection.setContent('[ux_featured_products title="Check our Featured products!"]');
					}
					if(id == "product_slider_on_sale") {
						tinyMCE.activeEditor.selection.setContent('[ux_sale_products title="Check our Products on Sale!"]');
					}

					if(id == "product_slider_latest") {
						tinyMCE.activeEditor.selection.setContent('[ux_latest_products title="Check our Latest products!"]');
					}

					
					
					
					
					return false;
				}
			})
		}
	
	});
	tinymce.PluginManager.add("shortcodes", tinymce.plugins.ShortcodeMce);
})();  