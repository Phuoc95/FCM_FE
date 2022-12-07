/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'tools' },
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others' },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'about' }
	];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Subscript,Superscript';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';

	config.height = '400px';
	config.extraPlugins = 'youtube, imageresponsive';
  config.allowedContent = true;
  config.defaultLanguage = 'ko';

	// config.language = 'ko';
	// config.extraPlugins = 'imageresponsive';
};

// window.parent.CKEDITOR.tools.callFunction(callback, "/images/upload.jpg", function() {
//     // Get the reference to a dialog window.
//     var element,
//         dialog = this.getDialog();
//     // Check if this is the Image dialog window.
//     if ( dialog.getName() == 'imageresponsive' ) {
//         // Get the reference to a text field that holds the "srcset" attribute.
//         element = dialog.getContentElement( 'info', 'srcset' );
//         // Assign the new value.
//         if ( element )
//             element.setValue( 'upload-small.jpg 100w, upload-medium.jpg 500w, upload-big.jpg 1000w' );
//     }
// });
