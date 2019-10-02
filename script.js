$(document).ready(function() {
    var $div = $(".container");

    var arr = [
        {
            time: "9am",
            event: "",
        },
        {
            time: "10am",
            event: "",
        },
        {
            time: "11am",
            event: "",
        },
        {
            time: "12am",
            event: "",
        },
        {
            time: "1pm",
            event: "",
        },
        {
            time: "2pm",
            event: "",
        },
        {
            time: "3pm",
            event: "",
        },
        {
            time: "4pm",
            event: "",
        },
        {
            time: "5pm",
            event: "",
        },
    ];

    for(var i = 0; i < arr.length; i++){
        var timeBlock = $("<form>").attr("class", "row");

        

        timeBlock.text(arr[i].time);
        console.log(arr[i].time);

        $($div).append(timeBlock);
    }

    var present = moment().format('h: mm: s')
    console.log(present);

   
})