$(document).ready(function() {
	
	//hidden otp section
	$(".hide-otp").click(function()
		{
			$(".hidden-otp").show('slow');
			$(".hide-otp").hide('slow')
			return false;
		}); 
		
		//Data Table JS
		$('#example').DataTable( {
			responsive: {
				details: {
					display: $.fn.dataTable.Responsive.display.modal( {
						header: function ( row ) {
							var data = row.data();
							return 'Details for '+data[0]+' '+data[1];
						}
					} ),
					renderer: $.fn.dataTable.Responsive.renderer.tableAll( {
						tableClass: 'table'
					} )
				}
			}
			} );
	
	
	
	
	//SideBar JS
	$('.sidebar-close-logo').hide();
	$("#close-sidebar-btn").click(function(){
		$(this).find('i').toggleClass("close-btn-left")  ; 
	})
	$("#close-sidebar-btn").click(function() {
		if($('#sidebar').hasClass("sidebar-open")){
			$('#sidebar').removeClass("sidebar-open");
			$("#sidebar").css('width', '4%');
			$("#dashboard-right-body").css('width', '96%');
			$('.sidebar-open-logo').hide();
			$('.sidebar-close-logo').show();
			$('.sidebar-label').hide();
			$('.sidebar-icon').css('width', '100%').css('margin-right', '2px');
			$('.sidebar-icon img').css('width', '20px');
			}else{
			$('#sidebar').addClass("sidebar-open");
			$('#sidebar').css('width', '12%');
			$("#dashboard-right-body").css('width', '88%');
			$("#dashboard-right-body").animate({right: "0%"});
			$('.sidebar-open-logo').show();
			$('.sidebar-close-logo').hide();
			$('.sidebar-label').show();
			$('.sidebar-icon').css('width', '30px').css('margin-right', '10px');;
			$('.sidebar-icon img').css('width', '20px').css('min-height', '30px');;
		}
	});
	
	$("#close-sidebar-btn-responsive").click(function() {
		$(this).find('i').toggleClass("close-btn-left")  ; 
		$('#sidebar').toggleClass("responsive-sidebar");
	});
	
	
	$( function() {
		// $( "#custom-tab" ).tabs();
		$('.nav-tabs').responsiveTabs();
	} );
	
	$('.custom-select').select2({
		minimumResultsForSearch: Infinity,
	});
	
});


//Date Picker JS
$(function () {
	$("#datepicker").datepicker({ 
        autoclose: true, 
        clearBtn: true
	})//.datepicker('update', new Date());
});

//ToolTip
$('[data-toggle="tooltip"]').tooltip();

//Responsive Tab
$('.nav-tabs').responsiveTabs();