
var myfunction = function() {

/* MAIN MENU */
    $('#menuTop').addClass('collapse navbar-collapse navbar-left');
    $('#menuTop ul li ul').parent().parent().addClass('nav navbar-nav');
    $('#menuTop ul li ul').parent().addClass('dropdown');
    $('#menuTop ul li ul').addClass('dropdown-menu');
    $('#menuTop ul li ul').parent().find('a:first').addClass('dropdown-toggle');
    $('#menuTop ul li ul').parent().find('a:first').attr({ 'data-toggle':'dropdown','aria-haspopup':'true','aria-expanded':'false' });

/* BUTTONS */
    $('button').addClass('btn');
    $('.submit').not('p.submit').addClass('btn btn-primary');
    $('input[type=submit]').addClass('btn btn-primary');
    $('button[type=submit]').addClass('btn-primary');
    $('.button').addClass('btn btn-default');
    $('table .button').addClass('btn-xs');
    $('.action-button').addClass('btn btn-lg btn-primary');
    $('.reset').addClass('btn btn-link');
    
/* FORMS */
    $('input[type=text],input[type=password]').addClass('form-control');
    $('#login-form td').addClass('input-group input-group-lg');
    $('div.login').addClass('input-group input-group-sm');
    $('div.login p').contents().unwrap().wrap('<span id=helpBlock class=help-block/>');
    $('input[name=forgotpassword]').attr('aria-describedby','helpblock');
    $('#login-form input[type=submit]').addClass('btn-lg');
    $('#forgotpassword-form input[type=submit]').addClass('btn-sm');

/* COLLAPSIBLE */
    $('.accordion').addClass('panel-group');
    $('.accordion').attr({ 'aria-multiselectable':'true', 'id':'accordion','role':'tablist' });
    $('.accordion h3').addClass('panel-title');
    $('.accordion h3').each(function(){ $(this).next('div').andSelf().wrapAll('<div class="panel panel-default"/>'); });
    $('.accordion h3 a').addClass('collapsed');
    $('.accordion h3 a').attr({ "role":"button", "data-toggle":"collapse", "data-parent":"#accordion", "aria-expanded":"false",
        "aria-controls":function(i) { return 'collapse'+(i+1); }, "href":function(i) { return '#collapse'+(i+1);} });
    $('.accordion .panel-default:first h3 a').attr('aria-expanded','true');
    $('.accordion .panel-default div').not('.accordion .panel-default div div').addClass('panel-collapse collapse');
    $('.accordion .panel-default:first .panel-collapse').addClass(' in ');
    $('.accordion .panel-default .panel-collapse').wrapInner('<div class="panel-body"/>');
    $('.accordion .panel-default .panel-collapse').attr({ 'role':'tabpanel', 'id':function(i) { return 'collapse'+(i+1); },
        'aria-labelledby':function(i) { return 'heading'+(i+1); } });
    $('.accordion h3').wrap('<div class="panel-heading"/>');
    $('.accordion .panel-heading').attr({ 'id':function(i) { return 'heading'+(i+1);}, 'role':'tab' });

/* TABS*/
    $('.tabbed ul:first').addClass('nav nav-tabs');
    $('.tabbed ul.nav-tabs').attr('role','tablist');
    $('.tabbed ul.nav-tabs li').attr('role','presentation');
    $('.tabbed ul.nav-tabs li a').attr({ 'role':'tab', 'data-toggle':'tab' });
    $('.tabbed div[id]').not('.tabbed ul div').wrapAll('<div class="tab-content"/>');
    $('.tabbed .tab-content div[id]').addClass('tab-pane fade');
    $('.tabbed .tab-pane').attr('role','tabpanel');
    $('.tabbed ul.nav-tabs li a:first').tab('show');
/* #sendtabs */
    $('#sendtabs ul li').css({'height':'100px'});
    $('#sendtabs ul li a').not('li.current a').addClass('btn btn-default');
    $('#sendtabs ul li.current a').addClass('btn btn-danger');

/* ALERTS */
    $('div.note').addClass('alert alert-warning');
    $('div.result').addClass('alert alert-danger');

/* typography */
    $('.pagetitle').addClass('page-header');

/* icons */
    /* dashboard */
    $('span.listingname a').addClass('btn btn-xs btn-info');
    $('span.listingelement a').not('.home span.listingelement a').addClass('btn btn-xs btn-warning');
    $('.send-campaign span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-send"/>');
    $('.manage-campaigns span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-cog"/>');
    $('.manage-users span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-user"/>');
    $('.view-statistics span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-stats"/>');
    $('.manage-lists span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-th-list"/>');
    $('.list-users span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-user"/>');
    $('.import-users span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-import"/>');
    $('.export-users span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-export"/>');
    $('.reconcileusers span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-heart"/>');
    $('.configure span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-cog"/>');
    $('.configure-attributes span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-tags"/>');
    $('.custom-attribute span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-tag"/>');
    $('.spage span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-pencil"/>');
    $('.admins span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-king"/>');
    $('.adminattributes span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-equalizer"/>');
    $('.send-message span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-envelope"/>');
    $('.templates span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-modal-window"/>');
    $('.list-all-msg span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-list"/>');
    $('.processqueue span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-time"/>');
    $('.processbounces span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-hourglass"/>');
    $('.bounces span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-ban-circle"/>');
    $('.plugin span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-pushpin"/>');
    $('.setup span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-wrench"/>');
    $('.dbcheck span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-tasks"/>');
    $('.view-log span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-list-alt"/>');
    /*buttons*/
    $('span.edit a, .edit-list a').html('<span aria-hidden="true" class="glyphicon glyphicon-edit"/>');
    $('.send-list a').html('<span aria-hidden="true" class="glyphicon glyphicon-send"/>');
    $('.add_member a').html('<span aria-hidden="true" class="glyphicon glyphicon-user"/>');
    $('.configEdit a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-edit"/>');
    $('span.delete a').html('<span aria-hidden="true" class="glyphicon glyphicon-trash"/>');
    $('a.del, a[title=Del]').html('<span aria-hidden="true" class="glyphicon glyphicon-trash"/>');
    $('span.view a').html('<span aria-hidden="true" class="glyphicon glyphicon-eye-open"/>');
    $('span.resend a').html('<span aria-hidden="true" class="glyphicon glyphicon-repeat"/>');
    $('span.suspend a').html('<span aria-hidden="true" class="glyphicon glyphicon-pause"/>');
    $('a.opendialog span.view').prepend('<span aria-hidden="true" class="glyphicon glyphicon-eye-open"/>');
    $('a.hide').html('x');$('a.hide').addClass('close');$('a.hide.close').removeClass('hide');

     
/* modals */
    $('.opendialog').each(function(k,val){
        var value = $(this).attr('href');
        $(this).attr({ 'data-target':'#mymodal'+k, 'data-toggle':'modal', 'href':value + '&embed=yes&omitall=yes'});
        $('#footer').append('<div class="modal fade" id="mymodal'+k+'" tabindex="-1" role="dialog" aria-labelledby="mymodalLabel" aria-hidden="true"><div class="modal-dialog modal-lg"><button type="button" class="close externo" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button><div class="modal-content well col-lg-12"></div></div></div>');
    });

/* tables*/
//    $('.content').addClass('table-responsive');
    $('table').not('.home table, table.loginPassUpdate').addClass('table');
    $('table.listing').not('.home table.listing').addClass('table-striped');
    $('table.templateForm').addClass('table-striped');
    $('table.importadmin').addClass('table-striped');
    $('table.messageView').addClass('table-bordered');
    $('table.setupMain').addClass('table-hover');

/* show page after loading */
    $('body').removeClass('invisible');
    
 }

$( window ).load(myfunction);


/******** RESPONSIVE TABS *******/
$.getScript("ui/bootlist/js/bootstrap-tabcollapse.js", function(){
    $('.tabbed').tabCollapse();
});


/******** modals instead of dialog *******/

function openHelpDialog(url) {
    $("#dialog").html('<div class="modal fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="mymodalLabel" aria-hidden="true"><div class="modal-dialog modal-lg"><button type="button" class="close externo" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button><div class="modal-content well col-lg-12"><div class="openhelpimage">'+busyImage+'</div></div></div></div>');
    var destpage = urlParameter('page',url);
    url = url.replace(/page=/,'origpage=');
    $("#dialog .modal-content").load(url+'&ajaxed=true&page=pageaction&action='+destpage);
    $("#dialog #mymodal").modal('show');
}

function initialiseTranslation(text) {
    $("#dialog").html('<div class="modal fade" id="mymodaltrans" tabindex="-1" role="dialog" aria-labelledby="mymodaltransLabel" aria-hidden="true"><div class="modal-dialog modal-lg"><button type="button" class="close externo" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button><div class="modal-content well col-lg-12"><div class="openhelpimage">'+text+'<br />'+busyImage+'</div></div></div></div>');
    $("#dialog .modal-content").load('./?ajaxed=true&page=pageaction&action=initlanguage');
    $("#dialog #mymodaltrans").modal('show');
    $('#dialog #mymodaltrans').bind("DOMSubtreeModified",function(){ $('#dialog #mymodaltrans').modal('hide'); });
}



