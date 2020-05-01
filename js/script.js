$(function(){
    $.fn.cropper();
    let $image = $('#image');
    
    $image.cropper({
        crop: function(event) {
            console.log(event.detail.x);
            console.log(event.detail.y);
            console.log(event.detail.width);
            console.log(event.detail.height);
            console.log(event.detail.rotate);
            console.log(event.detail.scaleX);
            console.log(event.detail.scaleY);
        }
    });
    
    let cropper = $image.data('cropper');
    console.log('This is cropper', cropper);
});