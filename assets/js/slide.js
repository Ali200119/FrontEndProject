$(document).ready(function () {
    
    let itemCount = $("#Suggestions .Images .Item").length;
    let Count = 0;
    
    $(document).on("click", "#Suggestions .Right", Right);

    function Right() {
        if (Count<itemCount-1) {
            Count++;
            $("#Suggestions .Images").animate({
                "margin-left": `-${Count*100}%`
            })
        }

        else {
            Count = 0;
            $("#Suggestions .Images").animate({
                "margin-left": `-${Count*100}%`
            })
        }
    }

    $(document).on("click", "#Suggestions .Left", Left);

    function Left() {
        if (Count>0) {
            Count--;
            $("#Suggestions .Images").animate({
                "margin-left": `-${Count*100}%`
            })
        }

        else {
            Count = itemCount - 1;
            $("#Suggestions .Images").animate({
                "margin-left": `-${Count*100}%`
            })
        }
    }
})