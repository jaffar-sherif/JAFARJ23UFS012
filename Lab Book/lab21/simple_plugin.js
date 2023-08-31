(function($){
    $.fn.simplePlugin=function(){
        // alert("cool Plugin");
        this.each(function(){
            $(this).click(function(e){
                alert("Element Class: "+this.className);
            });
        });
    }
}(jQuery));