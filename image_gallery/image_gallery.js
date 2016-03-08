$(document).ready(function(){
    $("#image_list").find('a').each(function(i){
        if(i == 0){
            $(this).focus()
        }
        var url = $(this).attr("href")
        var title = $(this).attr("title")

        $(this).click(function(evt){
            $('#caption').text(title)
            $('#gallery').find('img').attr('src',url)
            evt.preventDefault()

        })
    })
})