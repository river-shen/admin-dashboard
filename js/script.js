// SIDEBAR TOOGLE

var sidebarOpen = false;
var sideBar = document.getElementById("sidebar");

function openSidebar() {
    if (!sideBarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}

// --------------------------CHART------------------------------

// Bar Chart
var options = {
    series: [{
    data: [10,8,6,4,2],
    name: "Products",
  }],
    chart: {
    type: 'bar',
    background: "transparent",
    height: 350,
    toolbar: {
        show: false,
    }
  },
  colors: [
    "#2962ff",
    "#d50000",
    "#2e7d32",
    "#ff6d00",
    "#583cb3"
  ],
  plotOptions: {
    bar: {
        distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: "40%",
    }
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
        lines: {
            show: true,
        },
    },
    xaxis: {
        lines: {
            show: true,
        }
    },
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    labels: {
        colors: "#f5f7ff",
    },
    show: true,
    position: "top",
  },
  stroke: {
    colors: ["transparent"],
    show: true,
    width: 2
  },
  tooltip: {
    share: true,
    intersect: false,
    theme: "dark",
  },
  xaxis: {
    categories: [
        "Laptop","Phone","Monitor","Headphones","Camera"
    ],
    title: {
        style: {
            colors:"#f5f7ff",
        },
    },
    axisBorder: {
        show: true,
        color: "#55596e",
    },
    axisTicks: {
        show: true,
        color: "#55596e",
    },
    labels: {
        style: {
            color: "#f5f7ff",
        },
    },
  },
  yaxis: {
    title: {
        text:"Count",
        style: {
            color: "#f5f7ff"
        },
    },
    axisBorder: {
        color: "#55596e",
        show: true
    },
    axisTicks: {
        show: true,
        color: "#55596e",
    },
    labels: {
        style: {
            color: "#f5f7ff",
        },
    },
  },
  };

  var chart = new ApexCharts(document.querySelector("#bar-chart"), options);
  chart.render();

//   AREA CHART
var options = {
    series: [{
    name: 'Purchase Orders',
    data: [31,40,28,51,42,109,100],
  }, {
    name: 'Sales Orders',
    data: [11,32,45,32,34,52,41],
  }],
    chart: {
    height: 350,
    type: 'area',
    background: "transparent",
    stacked: false,
    toolbar: {
        show: false,
    },
  },
  colors: ["#00ab57","#d50000"],
  labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul"],
  datalabels: {
    enabled: false,
  },
  fill: {
    gradient: {
        opacityForm: 0.4,
        opacityTo: 0.1,
        shadeIntensity: 1,
        stops: [0, 100],
        type: "vertical",
    },
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
        lines: {
            show: true,
        },
    },
    xaxis: {
        lines: {
            show: true,
        }
    },
  },
  legend: {
    labels: {
        colors: "#f5f7ff",
    },
    show: true,
    position: "top",
  },  
  markers: {
    size: 6,
    strokeColors: "#1b2635",
    strokeWidth: 3,
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis:    {
    axisBorder: {
        color:"#55596e",
        show: true,
    },
    axisTicks: {
        color: "#55596e",
        show: true,
    },
    labels: {
        offsetY: 5,
        style: {
            colors: "f5f7ff",
        },
    },
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
        style: {
            color: '#f5f7ff'
        }
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
        style: {
            color: '#f5f7ff'
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  }
  };

  var chart = new ApexCharts(document.querySelector("#area-chart"), options);
  chart.render();