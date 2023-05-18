$(function(){
    $.ajax({
        url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-0B14BC89-5959-4A6C-8520-9E23D9127060&format=JSON&locationName=%E5%85%A7%E6%B9%96%E5%8D%80&elementName=T',
        type: 'GET', //api打什麼方法就寫什麼
        datatype: 'json',
        success: function(resource){
            console.log(resource); //會看到回傳資料
            //console.log(resource.records.locations[0].location[0].locationName); //地區名

            let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            let j = 0;

            $('#city_name').html(resource.records.locations[0].locationsName);
            $('#district').html(resource.records.locations[0].location[0].locationName);
            $('#tempture').html(resource.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value + '&#176');

            for(let i = 0; i < 10; i++){
                //console.log($('.block').eq(i).find('small').html());
                //console.log($('.block').eq(i).find('h6').html());
                if(i % 2 == 0){
                    let T = resource.records.locations[0].location[0].weatherElement[0].time[i].elementValue[0].value
                    let tempture = `<strong>${T}&#176;</strong>`
                    let wd = resource.records.locations[0].location[0].weatherElement[0].time[i].startTime;
                    //console.log(tempture);
                    $('.block').eq(j).find('h6').html(tempture);

                    const d = new Date(wd);
                    let day_i = d.getDay();
                    console.log(d);

                    $('.block').eq(j).find('small').html(weekday[day_i]);

                    j++;
                }
            }
        },
        error: function(error){
            console.log(error)
        }
    })
});