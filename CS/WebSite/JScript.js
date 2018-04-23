function btn_OnClick(s, e) {
    if (!ASPxClientEdit.ValidateEditorsInContainer(null))
        return;
    var year = cmbYear.GetValue();
    var month = cmbMonth.GetValue();
    var day = spDay.GetValue(); ;
    var myDate = new Date(year, month, day);

    calendar.SetVisibleDate(myDate); // make the date visible
    calendar.SetSelectedDate(myDate); // select the date
}

function cmbMonth_OnSelectedIndexChanged(s, e) {
    var month = parseInt(cmbMonth.GetValue());
    var maxDay;
    switch (month) {
        case 1:
            maxDay = 28;
            break;
        case 3:
            maxDay = 30;
            break;
        case 5:
            maxDay = 30;
            break;
        case 8:
            maxDay = 30;
            break;
        case 10:
            maxDay = 30;
            break;
        default:
            maxDay = 31;
    }

    spDay.SetMinValue(1);
    spDay.SetMaxValue(maxDay);
}