import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
  const location = useLocation();
  const pathnameWithoutSlash = location.pathname.startsWith('/') ? location.pathname.slice(1) : location.pathname;


  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from gadget.json
    fetch('./gadgets.json')
      .then((response) => response.json())
      .then((jsonData) => {
        const chartData = jsonData.map((item) => ({
          name: item.product_title,
          price: item.price,
        }));
        setData(chartData);
      })
      .catch((error) => console.error('Error fetching gadget data:', error));
  }, []);

  return (
    <div>
       <Helmet>
        <title>Gadgets | {pathnameWithoutSlash} </title>
      </Helmet>
      <div className="mx-auto bg-[#9538E2] space-y-8">
        {/* Header Section */}
        <div className="text-white py-8 text-center rounded-lg">
          <h1 className="text-3xl font-bold">Statistics</h1>
          <p className="mt-2">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="container mx-auto my-8">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="price" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
