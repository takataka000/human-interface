//active追加
// $(".gnav__item").on("click", function () {
//   $(".gnav__item").removeClass("active");
//   $(this).addClass("active");
// });

// $(document).ready(function(){
//   $(".gnav__item").on("click", function () {
//     $(".gnav__item").removeClass("active");
//     $(this).addClass("active");
//   });
// });

//addClassの挙動がおかしい
// $(document).ready(function(){
//   for(i=1;i<10;i++){
//     var num1 = "." + i;
//     $(num).on("click", function () {
//       for(j=1;j<10;j++){
//         var num2 = "." + j;
//         $(num2).removeClass("active");
//       }
//       $(".1").addClass("active");
//     });
//   }
// });

//背景制御
$(document).ready(function(){
  $(".0").on("click", function () {
    $(".0").removeClass("active");
    $(".1").removeClass("active");
    $(".2").removeClass("active");
    $(".3").removeClass("active");
    $(".4").removeClass("active");
    $(".5").removeClass("active");
    $(".6").removeClass("active");
    $(".7").removeClass("active");
    $(".0").addClass("active");
  });
});
$(document).ready(function(){
  $(".1").on("click", function () {
    $(".0").removeClass("active");
    $(".1").removeClass("active");
    $(".2").removeClass("active");
    $(".3").removeClass("active");
    $(".4").removeClass("active");
    $(".5").removeClass("active");
    $(".6").removeClass("active");
    $(".7").removeClass("active");
    $(".1").addClass("active");
  });
});
$(document).ready(function(){
  $(".2").on("click", function () {
    $(".0").removeClass("active");
    $(".1").removeClass("active");
    $(".2").removeClass("active");
    $(".3").removeClass("active");
    $(".4").removeClass("active");
    $(".5").removeClass("active");
    $(".6").removeClass("active");
    $(".7").removeClass("active");
    $(".2").addClass("active");
  });
});
$(document).ready(function(){
  $(".3").on("click", function () {
    $(".0").removeClass("active");
    $(".1").removeClass("active");
    $(".2").removeClass("active");
    $(".3").removeClass("active");
    $(".4").removeClass("active");
    $(".5").removeClass("active");
    $(".6").removeClass("active");
    $(".7").removeClass("active");
    $(".3").addClass("active");
  });
});
$(document).ready(function(){
  $(".4").on("click", function () {
    $(".0").removeClass("active");
    $(".1").removeClass("active");
    $(".2").removeClass("active");
    $(".3").removeClass("active");
    $(".4").removeClass("active");
    $(".5").removeClass("active");
    $(".6").removeClass("active");
    $(".7").removeClass("active");
    $(".4").addClass("active");
  });
});
$(document).ready(function(){
  $(".5").on("click", function () {
    $(".0").removeClass("active");
    $(".1").removeClass("active");
    $(".2").removeClass("active");
    $(".3").removeClass("active");
    $(".4").removeClass("active");
    $(".5").removeClass("active");
    $(".6").removeClass("active");
    $(".7").removeClass("active");
    $(".5").addClass("active");
  });
});
$(document).ready(function(){
  $(".6").on("click", function () {
    $(".0").removeClass("active");
    $(".1").removeClass("active");
    $(".2").removeClass("active");
    $(".3").removeClass("active");
    $(".4").removeClass("active");
    $(".5").removeClass("active");
    $(".6").removeClass("active");
    $(".7").removeClass("active");
    $(".6").addClass("active");
  });
});
$(document).ready(function(){
  $(".7").on("click", function () {
    $(".0").removeClass("active");
    $(".1").removeClass("active");
    $(".2").removeClass("active");
    $(".3").removeClass("active");
    $(".4").removeClass("active");
    $(".5").removeClass("active");
    $(".6").removeClass("active");
    $(".7").removeClass("active");
    $(".7").addClass("active");
  });
});


//スムーススクロール
$(function(){
  // #で始まるa要素をクリックした場合に処理
  $('a[href^=#]').click(function(){
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    var adjust = 0;
    // スクロールの速度（ミリ秒）
    var speed = 400;
    // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    var href= $(this).attr("href");
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    var position = target.offset().top + adjust;
    // スムーススクロール linear（等速） or swing（変速）
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});


//chart.js
//myChart0 インターネット普及率
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart0").getContext("2d");
ctx.canvas.height = 280;
var myChart0 = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["平成28年","平成29年","平成30年","令和元年","コロナ"],
    datasets: [
      {
        label: "平成28年",
        data: [
          83.5,
          80.9,
          79.8,
          89.8,
          97.2
          ],
        backgroundColor: [
          "#A7D895",
          "#72C5D9",
          "#33A9F2",
          "#5852E5",
          "#FF597A",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
      // {
      //   label: "平成29年",
      //   data: [
      //     80.9,],
      //   backgroundColor: [
      //     "#72C5D9",
      //     "#72C5D9",
      //     "#72C5D9",
      //     "#72C5D9",
      //     "#72C5D9",
      //     "#72C5D9",
      //     "#72C5D9",
      //     "#72C5D9",
      //     "#72C5D9",
      //     "#72C5D9",
      //   ],
      //   // borderColor: [
      //   //   "rgba(255, 99, 132, 1)",
      //   //   "rgba(54, 162, 235, 1)",
      //   //   "rgba(255, 206, 86, 1)",
      //   //   "rgba(75, 192, 192, 1)",
      //   //   "rgba(153, 102, 255, 1)",
      //   //   "rgba(255, 159, 64, 1)",
      //   // ],
      //   borderWidth: 1,
      // },
      // {
      //   label: "平成30年",
      //   data: [
      //     79.8,
      //     ],
      //   backgroundColor: [
      //     "#33A9F2",
      //     "#33A9F2",
      //     "#33A9F2",
      //     "#33A9F2",
      //     "#33A9F2",
      //     "#33A9F2",
      //     "#33A9F2",
      //     "#33A9F2",
      //     "#33A9F2",
      //     "#33A9F2",
      //   ],
      //   // borderColor: [
      //   //   "rgba(255, 99, 132, 1)",
      //   //   "rgba(54, 162, 235, 1)",
      //   //   "rgba(255, 206, 86, 1)",
      //   //   "rgba(75, 192, 192, 1)",
      //   //   "rgba(153, 102, 255, 1)",
      //   //   "rgba(255, 159, 64, 1)",
      //   // ],
      //   borderWidth: 1,
      // },
      // {
      //   label: "令和元年",
      //   data: [
      //     89.8,
      //     ],
      //   backgroundColor: [
      //     "#5852E5",
      //     "#5852E5",
      //     "#5852E5",
      //     "#5852E5",
      //     "#5852E5",
      //     "#5852E5",
      //     "#5852E5",
      //     "#5852E5",
      //     "#5852E5",
      //     "#5852E5",
      //   ],
      //   // borderColor: [
      //   //   "rgba(255, 99, 132, 1)",
      //   //   "rgba(54, 162, 235, 1)",
      //   //   "rgba(255, 206, 86, 1)",
      //   //   "rgba(75, 192, 192, 1)",
      //   //   "rgba(153, 102, 255, 1)",
      //   //   "rgba(255, 159, 64, 1)",
      //   // ],
      //   borderWidth: 1,
      // },
      // {
      //   label: "令和2年6月",
      //   data: [
      //     95.2,
      //     ],
      //   backgroundColor: [
      //     "#FF597A",
      //   ],
      //   // borderColor: [
      //   //   "rgba(255, 99, 132, 1)",
      //   //   "rgba(54, 162, 235, 1)",
      //   //   "rgba(255, 206, 86, 1)",
      //   //   "rgba(75, 192, 192, 1)",
      //   //   "rgba(153, 102, 255, 1)",
      //   //   "rgba(255, 159, 64, 1)",
      //   // ],
      //   borderWidth: 1,
      // },
      ],
  },
  options: {
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 10
      },
    },
    legend: {
      display: false,
      position: 'bottom',
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 10,
        fontColor: '#000',
        padding: 10
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
            min: 0,
            max: 100,
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.05)',
            borderDash: [6, 4],
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
          },
          gridLines: {
            display: false,
            color: 'rgba(0, 0, 0, 0.05)'
          },
        },
      ],
    },
    animation: {
      duration: 2000
    },
  },
});




//myChart1 年齢層別インターネット普及率
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart1").getContext("2d");
ctx.canvas.height = 280;
var myChart1 = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["全体", "6~12歳", "13~19", "20~29", "30~39", "40~49","50~59", "60~69", "70~79", "80歳以上"],
    datasets: [
      {
        label: "平成28年",
        data: [
          83.5,
          82.6,
          98.4,
          99.2,
          97.5,
          96.7,
          93.0,
          75.7,
          53.6,
          23.4,
          ],
        backgroundColor: [
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
      {
        label: "平成29年",
        data: [
          80.9,
          73.6,
          96.9,
          98.7,
          97.8,
          96.8,
          92.4,
          73.9,
          46.7,
          20.1],
        backgroundColor: [
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
      {
        label: "平成30年",
        data: [
          79.8,
          67.1,
          96.6,
          98.7,
          97.9,
          96.7,
          93.0,
          76.6,
          51.0,
          21.5],
        backgroundColor: [
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
      {
        label: "令和元年",
        data: [
          89.8,
          80.2,
          98.4,
          99.1,
          99.0,
          98.3,
          97.7,
          90.5,
          74.2,
          57.5],
        backgroundColor: [
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
      {
        label: "コロナ",
        data: [
          85.5,
          85.6,
          98.4,
          99.2,
          99.5,
          98.7,
          95.0,
          80.7,
          60.6,
          50.4,
          ],
        backgroundColor: [
          "#FF597A",
          "#FF597A",
          "#FF597A",
          "#FF597A",
          "#FF597A",
          "#FF597A",
          "#FF597A",
          "#FF597A",
          "#FF597A",
          "#FF597A"
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 10
      },
    },
    legend: {
      position: 'bottom',
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 10,
        fontColor: '#000',
        padding: 10
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
            min: 0,
            max: 100,
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.05)',
            borderDash: [6, 4],
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
          },
          gridLines: {
            display: false,
            color: 'rgba(0, 0, 0, 0.05)'
          },
        },
      ],
    },
    animation: {
      duration: 2000
    },
  },
});

//chart.js
//myChart2　所得層別インターネット普及率
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart2").getContext("2d");
ctx.canvas.height = 280;
var myChart2 = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["~200万円", "200~400", "400~600", "600~800", "800~1000", "1000万円~"],
    datasets: [
      {
        label: "平成28年",
        data: [],
        backgroundColor: [
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
      {
        label: "平成29年",
        data: [
          54.2,
          74.1,
          85.5,
          89.1,
          90.5,
          91.9,
        ],
        backgroundColor: [
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
      {
        label: "平成30年",
        data: [
          54.4,
          70.6,
          83.9,
          87.8,
          89.7,
          90.3,],
        backgroundColor: [
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
      {
        label: "令和元年",
        data: [
          80.7,
          86.5,
          90.8,
          92.7,
          93.4,
          94.5],
        backgroundColor: [
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
      {
        label: "コロナ",
        data: [
          85.7,
          89.5,
          95.8,
          95.7,
          95.4,
          96.5
        ],
        backgroundColor: [
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 10
      },
    },
    legend: {
      position: 'bottom',
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 10,
        fontColor: '#000',
        padding: 10
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
            min: 0,
            max: 100,
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.05)',
            borderDash: [6, 4],
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
          },
          gridLines: {
            display: false,
            color: 'rgba(0, 0, 0, 0.05)'
          },
        },
      ],
    },
    animation: {
      duration: 2000
    },
  },
});


//chart.js
//myChart3
////////////////////////////////////////////////////////////////////////////
///////////////　　　　　/////////////////////////////////////////////////////
///////////////////   //////////////////////////////////////////////////////
/////////////////  /////////////////////////////////////////////////////////
//////////////////    //////////////////////////////////////////////////////
//////////////        //////////////////////////////////////////////////////
var ctx = document.getElementById("myChart3").getContext("2d");
ctx.canvas.height = 280;
var myChart3 = new Chart(ctx, {
  type: "horizontalBar",
  data: {
    labels: ["スマートフォン", "パソコン", "タブレット型端末", "携帯電話・PHS"],
    datasets: [
      {
        label: "平成28年",
        data: [
          57.9,
          58.6,
          23.6,
          13.3],
        backgroundColor: [
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
      {
        label: "平成29年",
        data: [
          59.7,
          52.5,
          20.9,
          9.9],
        backgroundColor: [
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
      {
        label: "平成30年",
        data: [
          59.5,
          48.2,
          20.8,
          8.8],
        backgroundColor: [
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
      {
        label: "令和元年",
        data: [
          63.3,
          50.4,
          23.2,
          10.5],
        backgroundColor: [
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 30
      },
    },
    legend: {
      position: 'bottom',
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 10,
        fontColor: '#000',
        padding: 5
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.05)',
            display: false,
            // borderDash: [6, 4],
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
            min: 0,
            max: 100,
          },
          gridLines: {
            display: true,
            borderDash: [6, 4],
            color: 'rgba(0, 0, 0, 0.05)'
          },
        },
      ],
    },
    animation: {
      duration: 2000
    },
  },
});

//chart.js
//myChart4 通信機器の世帯保有状況
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart4").getContext("2d");
ctx.canvas.height = 280;
var myChart4 = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["平成22年", "平成23年", "平成24年", "平成25年", "平成26年", "平成27年","平成28年", "平成29年", "平成30年", "令和元年"],
    datasets: [
      {
        label: "固定電話",
        data: [85.8	,83.8, 79.3, 79.1,	75.7,	75.6,	72.2,	70.6,	64.5,	69.0],
        backgroundColor: [
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
        ],
        borderColor: [
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
        ],
        borderWidth: 1,
      },
      {
        label: "パソコン",
        data: [83.4,	77.4,	75.8,	81.7,	78.0,	76.8, 73.0,	72.5,	74.0,	69.1],
        backgroundColor: [
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
        ],
        borderColor: [
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
        ],
        borderWidth: 1,
      },
      {
        label: "スマートフォン",
        data: [9.7,	29.3,	49.5,	62.6,	64.2,	72.0,	71.8,	75.1,	79.2,	83.4],
        backgroundColor: [
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
        ],
        borderColor: [
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
        ],
        borderWidth: 1,
      },
      {
        label: "モバイル端末",
        data: [93.2,	94.5,	94.5,	94.8,	94.6,	95.8,	94.7,	94.8,	95.7,	96.1],
        backgroundColor: [
          "#3B7ABA",
          "#3B7ABA",
          "#3B7ABA",
          "#3B7ABA",
          "#3B7ABA",
          "#3B7ABA",
          "#3B7ABA",
          "#3B7ABA",
          "#3B7ABA",
          "#3B7ABA",
        ],
        borderColor: [
          "#3B7ABA",
          "#3B7ABA",
          "#3B7ABA",
          "#3B7ABA",
          "#3B7ABA",
          "#3B7ABA",
          "#3B7ABA",
          "#3B7ABA",
          "#3B7ABA",
          "#3B7ABA",
        ],
        borderWidth: 1,
      },
      {
        label: "タブレット端末",
        data: [7.2,	8.5,	8.5,	21.9,	26.3,	33.3,	34.4,	36.4,	40.1,	37.4],
        backgroundColor: [
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
        ],
        borderColor: [
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    elements: {
      line: {
          tension: 0, // ベジェ曲線を無効にする
          fill: false,
          "stack": 1,
        // "fill": "-1"
      },
  },
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 10
      },
    },
    legend: {
      position: 'bottom',
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 10,
        fontColor: '#000',
        padding: 10
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
            min: 0,
            max: 100,
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.05)',
            borderDash: [6, 4],
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
          },
          gridLines: {
            display: false,
            color: 'rgba(0, 0, 0, 0.05)'
          },
        },
      ],
    },
    animation: {
      duration: 2000
    },
  },
});

//chart.js
//myChart5
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart5").getContext("2d");
ctx.canvas.height = 280;
var myChart5 = new Chart(ctx, {
  type: "horizontalBar",
  data: {
    labels: ["ブロードバンド回線", "光回線", "携帯電話回線", "ケーブルテレビ回線", "DSL回線", "固定電話回線"],
    datasets: [
      {
        label: "平成28年",
        data: [
          97.4,
          60.0,
          51.0,
          17.0,
          9.6,
          1.4],
        backgroundColor: [
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
      {
        label: "平成29年",
        data: [
          96.9,
          61.1,
          49.2,
          16.9,
          6.0,
          1.5],
        backgroundColor: [
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
      {
        label: "平成30年",
        data: [
          97.4,
          63.4,
          51.3,
          17.3,
          4.6,
          1.7],
        backgroundColor: [
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
      {
        label: "令和元年",
        data: [
          89.0,
          54.5,
          50.8,
          16.4,
          3.2,
          1.9],
        backgroundColor: [
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    elements: {
      line: {
          tension: 0, // ベジェ曲線を無効にする
          fill: false
      },
  },
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 30
      },
    },
    legend: {
      position: 'bottom',
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 10,
        fontColor: '#000',
        padding: 10
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
          },
          gridLines: {
            display: false,
            color: 'rgba(0, 0, 0, 0.05)',
            borderDash: [6, 4],
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
            min: 0,
            max: 100,
          },
          gridLines: {
            borderDash: [6, 4],
            color: 'rgba(0, 0, 0, 0.05)'
          },
        },
      ],
    },
    animation: {
      duration: 2000
    },
  },
});


//chart.js
//myChart6 マーケット
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart6").getContext("2d");
ctx.canvas.height = 280;
var myChart6 = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["平成28年","平成29年","平成30年","令和元年","コロナ"],
    datasets: [
      {
        label: "平成28年",
        data: [
          21.5,
          20.9,
          21.8,
          23.8,
          45.2
          ],
        backgroundColor: [
          "#A7D895",
          "#72C5D9",
          "#33A9F2",
          "#5852E5",
          "#FF597A",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
      ],
  },
  options: {
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 10
      },
    },
    legend: {
      display: false,
      position: 'bottom',
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 10,
        fontColor: '#000',
        padding: 10
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
            min: 0,
            max: 100,
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.05)',
            borderDash: [6, 4],
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
          },
          gridLines: {
            display: false,
            color: 'rgba(0, 0, 0, 0.05)'
          },
        },
      ],
    },
    animation: {
      duration: 2000
    },
  },
});


//chart.js
//myChart6
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// $(function(){
//   $("#map-container").japanMap({
//       onSelect : function(data){
//           alert(data.name);
//       }
//   });
// });


// $(function(){

//   var areas = [
//       // {"code": 1 , "name":"北海道地方", "color":"#ca93ea", "hoverColor":"#e0b1fb", "prefectures":[1]},
//       // {"code": 2 , "name":"東北地方",   "color":"#a7a5ea", "hoverColor":"#d6d4fd", "prefectures":[2,3,4,5,6,7]},
//       // {"code": 3 , "name":"関東地方",   "color":"#84b0f6", "hoverColor":"#c1d8fd", "prefectures":[8,9,10,11,12,13,14]},
//       // {"code": 4 , "name":"北陸・甲信越地方",   "color":"#52d49c", "hoverColor":"#93ecc5", "prefectures":[15,16,17,18,19,20]},
//       // {"code": 4 , "name":"東海地方",   "color":"#77e18e", "hoverColor":"#aff9bf", "prefectures":[21,22,23,24]},
//       // {"code": 6 , "name":"近畿地方",   "color":"#f2db7b", "hoverColor":"#f6e8ac", "prefectures":[25,26,27,28,29,30]},
//       // {"code": 7 , "name":"中国地方",   "color":"#f9ca6c", "hoverColor":"#ffe5b0", "prefectures":[31,32,33,34,35]},
//       // {"code": 8 , "name":"四国地方",   "color":"#fbad8b", "hoverColor":"#ffd7c5", "prefectures":[36,37,38,39]},
//       // {"code": 9 , "name":"九州地方",   "color":"#f7a6a6", "hoverColor":"#ffcece", "prefectures":[40,41,42,43,44,45,46]},
//       // {"code":10 , "name":"沖縄地方",   "color":"#ea89c4", "hoverColor":"#fdcae9", "prefectures":[47]}
//       {"code": 1 , "name":"北海道地方", "color":"#3B7ABA", "hoverColor":"#e0b1fb", "prefectures":[1]},
//       {"code": 2 , "name":"東北地方",   "color":"#3BBA93", "hoverColor":"#d6d4fd", "prefectures":[2,3,4,5,6,7]},
//       {"code": 3 , "name":"関東地方",   "color":"#3BABBA", "hoverColor":"#c1d8fd", "prefectures":[8,9,10,11,12,13,14]},
//       {"code": 4 , "name":"北陸・甲信越地方",   "color":"#3B93BA", "hoverColor":"#93ecc5", "prefectures":[15,16,17,18,19,20]},
//       {"code": 4 , "name":"東海地方",   "color":"#3B7ABA", "hoverColor":"#aff9bf", "prefectures":[21,22,23,24]},
//       {"code": 6 , "name":"近畿地方",   "color":"#3BBA93", "hoverColor":"#f6e8ac", "prefectures":[25,26,27,28,29,30]},
//       {"code": 7 , "name":"中国地方",   "color":"#3BABBA", "hoverColor":"#ffe5b0", "prefectures":[31,32,33,34,35]},
//       {"code": 8 , "name":"四国地方",   "color":"#3B93BA", "hoverColor":"#ffd7c5", "prefectures":[36,37,38,39]},
//       {"code": 9 , "name":"九州地方",   "color":"#3BABBA", "hoverColor":"#ffcece", "prefectures":[40,41,42,43,44,45,46]},
//       {"code":10 , "name":"沖縄地方",   "color":"#3B93BA", "hoverColor":"#fdcae9", "prefectures":[47]}
//   ];

//   $("#map").japanMap(
//       {
//           areas  : areas,
//           selection : "prefecture",
//           borderLineWidth: 0.25,
//           drawsBoxLine : false,
//           movesIslands : true,
//           showsAreaName : false,
//           width: 280,
//           font : "MS Mincho",
//           fontSize : 10,
//           fontColor : "areaColor",
//           fontShadowColor : "black",
//           // onSelect:function(data){
//           //     alert(data.name);
//           // },
//           onSelect:function(data){ //選択範囲をクリックしたときに実行
//             location.href = areaLinks[data.area.name]; //data.area.nameは選択したエリアの名前
//           },
//       }
//   );
// });


//chart.js
//myChart7 ECサイト
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart7").getContext("2d");
ctx.canvas.height = 280;
var myChart7 = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["平成23年", "平成24年", "平成25年", "平成26年", "平成27年", "平成28年", "平成29年", "平成30年", "令和元年"],
    datasets: [
      {
        label: "Amazon",
        data: [9.7,	11.5,	9.3,	11.5,	16.2,	13.3,	13.9,	19.1,	20.2],
        backgroundColor: [
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
        ],
        borderColor: [
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
        ],
        borderWidth: 1,
      },
      {
        label: "楽天市場",
        data: [3.9,	2.9,	3.3,	3.5,	3.4,	3.3,	4.3,	7.2,	9.4],
        backgroundColor: [
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
        ],
        borderColor: [
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
        ],
        borderWidth: 1,
      },
      {
        label: "Yahoo",
        data: [3.9,	2.9,	3.3,	3.5,	3.4,	3.3,	4.3,	7.2,	9.4],
        backgroundColor: [
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
        ],
        borderColor: [
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    elements: {
      line: {
          tension: 0, // ベジェ曲線を無効にする
          fill: false,
          "stack": 1,
        // "fill": "-1"
      },
  },
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 30
      },
    },
    legend: {
      position: 'bottom',
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 10,
        fontColor: '#000',
        padding: 10
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            // fontColor: '#000',
            fontSize: 10,
            min: 0,
            max: 100,
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.05)',
            borderDash: [6, 4],
          },
          stacked: true,
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
          },
          gridLines: {
            display: false,
            color: 'rgba(0, 0, 0, 0.05)'
          },
        },
      ],
    },
    "plugins": {
      "filler": {
        "propagate": true
      },
    },
    animation: {
      duration: 2000
    },
  },
});