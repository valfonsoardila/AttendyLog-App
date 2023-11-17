import { useEffect } from "react";
import "./HomePage.css";
import { motion } from "framer-motion";
import * as echarts from "echarts";
import SimpleTable from "../../../components/uiElements/table/SimpleTable";
import Users from "../../../assets/json/Users.json";
import AttendifyLog from "../../../assets/json/AttendifyLog.json";

const HomePage = () => {
  useEffect(() => {
    // Procesar los datos del JSON para organizarlos por mes y contar la cantidad de registros por mes
    const processedData = processData(AttendifyLog);

    // Crear el gráfico de ECharts con los datos procesados
    var chartDom = document.getElementById("chart");
    var myChart = echarts.init(chartDom);
    var option = {
      title: {
        text: "Attendances by Month",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Total Attendances", "Total Registrations"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: processedData.months,
      },
      yAxis: [
        {
          type: "value",
          name: "Total Attendances",
        },
        {
          type: "value",
          name: "Total Registrations",
        },
      ],
      series: [
        {
          name: "Total Attendances",
          type: "line",
          stack: "Total",
          symbol: "circle",
          symbolSize: 8,
          lineStyle: {
            width: 2,
          },
          itemStyle: {
            color: "#61a0a8",
          },
          data: processedData.attendances,
        },
        {
          name: "Total Registrations",
          type: "line",
          stack: "Total",
          symbol: "circle",
          symbolSize: 8,
          lineStyle: {
            width: 2,
          },
          itemStyle: {
            color: "#d48265",
          },
          yAxisIndex: 1,
          data: processedData.totalRegistrations,
        },
      ],
    };
    myChart.setOption(option);
  }, []);

  // Función para procesar los datos del JSON y organizarlos por mes
  const processData = (data) => {
    const months = [];
    const attendances = Array(12).fill(0);
    const totalRegistrations = Array(12).fill(0);
    let cumulativeTotal = 0;

    data.attendances.forEach((record) => {
      const date = new Date(record.registrationDate);
      const month = date.getMonth();
      attendances[month]++;
      cumulativeTotal++;
      totalRegistrations[month] = cumulativeTotal;
    });

    // Obtener nombres de los meses
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    months.push(...monthNames.slice(0, new Date().getMonth() + 1));
    months.push(...monthNames.slice(new Date().getMonth() + 1));

    return { months, attendances, totalRegistrations };
  };
  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="columnOne">
        <div className="columnOne-rowOne">
          <div id="chart" className="chart-lineal" />
        </div>
        <div className="columnOne-rowTwo">
          <div className="columnOne-rowTwo-header">
            <h3>Attendances</h3>
          </div>
          <div className="columnOne-rowTwo-body">
            
          </div>
        </div>
      </div>
      <div className="columnTwo">
        <div className="columnTwo-header">
          <h3>Users</h3>
        </div>
        <div className="columnTwo-body">
          <SimpleTable data={Users} />
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
