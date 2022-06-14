const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

  const downside1_buttons = document.querySelectorAll(".downside1 .head");
  const downside2 = document.querySelectorAll(".downside2");
  const down = document.querySelector(".data-container");
  var data_daily_container_html = "";
  var data_weekly_container_html = "";
  var data_monthly_container_html = "";


  const white_button = (button)=>{
    downside1_buttons.forEach(b=>{
        b.classList.remove("active");
    })
    button.classList.add("active");
  }

  const daily_data = ()=>{

data_daily_container_html="";
    for (let index = 0; index < data.length; index++) {
            data_daily_container_html +=        
            ` 
            <div class="item${index+2}">
            <div class="downside2">
            <div class="sub-head">
            <p>${data[index].title}</p>
            <a href="#"><img src="./images/icon-ellipsis.svg" alt=""></a>
          </div>
          <div class="content">
            <h1>${data[index].timeframes.daily.current}hrs</h1>
            <p>Last Day - ${data[index].timeframes.daily.previous}hrs</p>
          </div>
            </div>
          </div>
           `

    }

    down.innerHTML = data_daily_container_html;
    data_weekly_container_html="";
    data_monthly_container_html="";
  }

  const weekly_data = ()=>{
    data_weekly_container_html="";
    for (let index = 0; index < data.length; index++) {
        data_weekly_container_html +=        
            ` 
            <div class="item${index+2}">
            <div class="downside2">
            <div class="sub-head">
            <p>${data[index].title}</p>
            <a href="#"><img src="./images/icon-ellipsis.svg" alt=""></a>
          </div>
          <div class="content">
            <h1>${data[index].timeframes.weekly.current}hrs</h1>
            <p>Last Week - ${data[index].timeframes.weekly.previous}hrs</p>
          </div>
            </div>
          </div>
           `

    }

    down.innerHTML = data_weekly_container_html;
    data_daily_container_html="";
    data_monthly_container_html="";
  }

  const monthly_data = ()=>{
    data_monthly_container_html="";
    for (let index = 0; index < data.length; index++) {
        data_monthly_container_html +=        
            ` 
            <div class="item${index+2}">
            <div class="downside2">
            <div class="sub-head">
            <p>${data[index].title}</p>
            <a href="#"><img src="./images/icon-ellipsis.svg" alt=""></a>
          </div>
          <div class="content">
            <h1>${data[index].timeframes.monthly.current}hrs</h1>
            <p>Last Month - ${data[index].timeframes.monthly.previous}hrs</p>
          </div>
            </div>
          </div>
           `

    }

    down.innerHTML = data_monthly_container_html;
    data_daily_container_html="";
    data_weekly_container_html="";

  }





  downside1_buttons.forEach(button =>{
    button.addEventListener("click",()=>{
        white_button(button);
        const button_name = button.innerHTML;
        // console.log(button_name);
        
        if(button_name=="Daily"){
            daily_data();
        }else if(button_name =="Weekly"){
            weekly_data();
        }else if(button_name=="Monthly"){
            monthly_data();
        }


    })
  })