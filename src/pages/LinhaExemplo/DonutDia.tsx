import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

function DonutDia() {
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [availableMonths, setAvailableMonths] = useState([]);
  const [availableDays, setAvailableDays] = useState([]);

  useEffect(() => {
    fetchData();
  }, [selectedYear, selectedMonth, selectedDay]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/alertas");
      const data = response.data;
      const filterList = data.map(item => ({
        status: item.nivel_criticidade,
        year: new Date(item.data_alerta).getFullYear(),
        month: new Date(item.data_alerta).getMonth() + 1,
        day: new Date(item.data_alerta).getDate(),
        contagem: 1
      }));

      const uniqueYears = [...new Set(filterList.map(item => item.year))];
      setYears(uniqueYears);

      if (selectedYear !== '') {
        const availableMonthsForSelectedYear = filterList
          .filter(item => item.year === parseInt(selectedYear))
          .map(item => item.month);
        setAvailableMonths([...new Set(availableMonthsForSelectedYear)]);
      }

      if (selectedYear !== '' && selectedMonth !== '') {
        const availableDaysForSelectedMonth = filterList
          .filter(item => item.year === parseInt(selectedYear) && item.month === parseInt(selectedMonth))
          .map(item => item.day);
        setAvailableDays([...new Set(availableDaysForSelectedMonth)]);
      }

      const filteredData = filterList.filter(item => 
        item.year === parseInt(selectedYear) && item.month === parseInt(selectedMonth) && item.day === parseInt(selectedDay)
      );
      const groupedData = groupByStatus(filteredData);

      AlimentarLista(groupedData);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  const groupByStatus = (data) => {
    return data.reduce((acc, { status }) => {
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {});
  };

  const AlimentarLista = (data) => {
    const labels = Object.keys(data);
    const counts = Object.values(data);

    const colors = labels.map(status => {
        switch (status) {
          case 'Crítico':
          return '#FF0000'; // Red for "Critico"
        case 'Sério':
          return '#FFA500'; // Orange for "Serio"
        case 'Moderado':
          return '#fcec4f'; // Yellow for "Moderado"
        default:
          return '#000000'; // Default color
        }
      });

    const options = {
      labels,
      colors,
      dataLabels: {
        enabled: true,
        formatter: (val) => `${val.toFixed(1)}%`
      },
    };

    setOptions(options);
    setSeries(counts);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    setSelectedMonth('');
    setSelectedDay('');
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
    setSelectedDay('');
  };

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  return (
    <div className="donut">
      <h2 className='em-bold'>Alertas - Status Mensal</h2>
      <div>
        <select value={selectedYear} onChange={handleYearChange}>
          <option value="">Selecione um ano</option>
          {years.map(year => <option key={year} value={year}>{year}</option>)}
        </select>
      </div>
      <div>
        <select value={selectedMonth} onChange={handleMonthChange}>
          <option value="">Selecione um mês</option>
          {availableMonths.map(month => 
            <option key={month} value={month}>{getMonthName(month)}</option>
          )}
        </select>
      </div>
      <div>
        <select value={selectedDay} onChange={handleDayChange}>
          <option value="">Selecione um dia</option>
          {availableDays.map(day => 
            <option key={day} value={day}>{day}</option>
          )}
        </select>
      </div>
      <Chart options={options} series={series} type="donut" width="400" />
    </div>
  );
}

function getMonthName(month) {
  const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  return monthNames[month - 1];
}

export default DonutDia;
