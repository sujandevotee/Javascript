let arr = {
    json: [
      {
        StateName: "Rajasthan",
        Area: "342239",
        product: "Smartphone",
        Price: "15000",
        month: "jan",
        income: "5000",
        subject: "english",
        marks: 80,
      },
      {
        StateName: "Bihar",
        Area: "308252",
        product: "Laptop",
        Price: "29000",
        month: "feb",
        income: "10000",
        subject: "Gujarati",
        marks: 77,
      },
      {
        StateName: "Maharashtra",
        Area: "307713",
        product: "Tablet",
        Price: "15000",
        month: "march",
        income: "20000",
        subject: "Hindi",
        marks: 60,
      },
      {
        StateName: "Telengana",
        Area: "112077",
        product: "Headphones",
        Price: "7000",
        month: "april",
        income: "40000",
        subject: "Science",
        marks: 55,
      },
      {
        StateName: "Gujarat",
        Area: "196244",
        product: "Smartwatch",
        Price: "25000",
        month: "may",
        income: "30000",
        subject: "social-science",
        marks: 40,
      },
      {
        StateName: "Odisha",
        Area: "155707",
        product: "Camera",
        Price: "150000",
        month: "june",
        income: "50000",
        subject: "drawing",
        marks: 48,
      },
      {
        StateName: "Assam",
        Area: "78438",
        product: "Printer",
        Price: "25000",
        month: "jul",
        income: "70000",
        subject: "maths",
        marks: 85,
      },
      {
        StateName: "Ladakh",
        Area: "59000",
        product: "Computer",
        Price: "75000",
        month: "aug",
        income: "40000",
        subject: "account",
        marks: 41,
      },
      {
        StateName: "Punjab",
        Area: "50362",
        product: "Power_bank",
        Price: "5000",
        month: "sep",
        income: "5000",
        subject: "state",
        marks: 68,
      },
    ],
  };

  let submit = document.getElementById("submit");

  // click Event
  submit.addEventListener("click", function (event) {
    event.preventDefault();
    let xValue = document.getElementById("x").value;
    let yValue = document.getElementById("y").value;

    updateChart(
      "myChart",
      arr.json.map((item) => item[xValue]),
      arr.json.map((item) => parseFloat(item[yValue])),
      "State Area",
      "bar"
    );
    updateChart(
      "myChart2",
      arr.json.map((item) => item[xValue]),
      arr.json.map((item) => parseFloat(item.Price)),
      "Product Price",
      "line"
    );
    updateChart(
      "myChart3",
      arr.json.map((item) => item[xValue]),
      arr.json.map((item) => parseFloat(item.income)),
      "Income",
      "doughnut"
    );
    updateChart(
      "myChart4",
      arr.json.map((item) => item[xValue]),
      arr.json.map((item) => item.marks),
      "Subject Marks",
      "line"
    );
  });

  function updateChart(chartId, labels, data, label, type) {
    let ctx = document.getElementById(chartId).getContext("2d");

    if (window.myCharts && window.myCharts[chartId]) {
      window.myCharts[chartId].destroy();
    }
    window.myCharts = window.myCharts || {};
    window.myCharts[chartId] = new Chart(ctx, {
      type: type,
      data: {
        labels: labels,
        datasets: [
          
          {
            label: label,
            data: data,
            
            backgroundColor: [
              "#3e95cd",
              "#8e5ea2",
              "#3cba9f",
              "#e8c3b9",
              "#c45850",
              "#CD5C5C",
              "#40E0D0",
              "#e08040",
              "#e04050",
            ],
            borderWidth: 1,
          },

        ],
      },
      options: {
        responsive: false,
      },
    });
  }

  // New data show the chart
  updateChart(
    "myChart",
    arr.json.map((item) => item.StateName),
    arr.json.map((item) => parseFloat(item.Area)),
    "State Area",
    "bar"
  );
  updateChart(
    "myChart2",
    arr.json.map((item) => item.product),
    arr.json.map((item) => parseFloat(item.Price)),
    "Product Price",
    "line"
  );
  updateChart(
    "myChart3",
    arr.json.map((item) => item.month),
    arr.json.map((item) => parseFloat(item.income)),
    "Income",
    "doughnut"
  );
  updateChart(
    "myChart4",
    arr.json.map((item) => item.subject),
    arr.json.map((item) => item.marks),
    "Subject Marks",
    "line"
  );