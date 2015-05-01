$('.editable').summernote({
  toolbar: [
    ['style', ['bold', 'italic', 'underline', 'clear']],
    ['font', ['strikethrough']],
    ['fontsize', ['fontsize']],
    ['para', ['ul', 'ol', 'paragraph']],
  ]
});
$('.editable').on('summernote.change', function(customEvent, contents, $editable) {
	var content = $('.editable').code();
	$('input[name="description"]').val(content);
});