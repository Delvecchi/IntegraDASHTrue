import Chart from "react-apexcharts";

import "../graficoLinha/style.css"

function LinhaHome(props) {

      const options = {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          // categories: [props.data_erro]
        }
      };
      const series = [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 100]
          // data: [k]
        }
      ];
    // console.log(this.props)

    return (
      <div className="app">
        <h2>Erros notificados por período</h2>
        <div className="row">
          <div className="mixed-chart-linha">
            <Chart
              options={options}
              series={series}
              type="line"
              width="800"
              height="400"
            />
          </div>
        </div>
      </div>
    );

    }

export default LinhaHome;
