/**
 * 
 */
function left_tab_click(a,index) {
	var old_key="#left-tab-"+index;
	$(".left_tab_after_click").removeClass("left_tab_after_click");
	$(a).addClass("left_tab_after_click");
	$("main .is-active").removeClass("is-active");
	$(old_key).addClass("is-active");
}