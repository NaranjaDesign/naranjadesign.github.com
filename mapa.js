var map;
		$(document).ready(function(){
			map=new GMaps({
				div: '#map',
				lat: -12.05993,
				lng: -76.994583
			});
			map.addMarker({
				lat: -12.05993,
				lng: -76.994583,
				title: 'Edificio de Balanzas Levis'
						
			
			});
			
			
			map.setContextMenu({
				control:'map',
				options:[{
					title:'Add Marker',
					name:'add_marker',
					action: function(e){
						this.addMarker({
						lat: e.latLng.lat(),
						lng: e.latLng.lng(),
						title: 'New Marker'
						});
					this.hideContextMenu();
					}
				},{
					title:'Centre here',
					name:'center_here',
					action: function(e){
						this.setCentre(e.latLng.lat(),e.latLng.lng());
					}
				}]
			});
		});

