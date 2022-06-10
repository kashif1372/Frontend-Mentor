const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]



const chart = document.querySelector(".chart");

var chart_html = "";
var max_index = 0;
var data_amount = 0;


for (let index = 0; index < data.length; index++) {
    if(data[index].amount>data_amount){
        data_amount=data[index].amount;
        max_index = index;
    }
}

console.log(max_index,data_amount);


for (let index = 0; index < data.length; index++) {
    if(index==max_index){
        chart_html += '<div class="column">'
        chart_html += '<div class="title">$'+data[index].amount+'</div>'
        chart_html += '<div class="col-box blue" style="height: '+((data[index].amount*100)/data_amount)+'px;"></div>'
        chart_html += '<p>'+data[index].day+'</p>'
        chart_html += '</div>';
    }else{
        chart_html += '<div class="column">'
        chart_html += '<div class="title">$'+data[index].amount+'</div>'
        chart_html += '<div class="col-box" style="height: '+((data[index].amount*100)/data_amount)+'px;"></div>'
        chart_html += '<p>'+data[index].day+'</p>'
        chart_html += '</div>';

    }
}

chart.innerHTML = chart_html;

console.log(chart_html);