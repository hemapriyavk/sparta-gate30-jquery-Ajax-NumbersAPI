function showNumMeaning() {
    let targetNum = $('#magic-num').val();

    if (targetNum == '') {
        alert('Insert a number');
        return;
    }

    let targetUrl = 'http://numbersapi.com/' + targetNum;
    $.ajax({
        type: "GET",
        url: targetUrl,
        data: {},
        success: function (response) {
            $("#meaning").text(response);
        }
    })
}