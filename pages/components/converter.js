import { useEffect, useState } from 'react';
import Axios from 'axios';
import Select from 'react-select'
import { HiSwitchHorizontal } from 'react-icons/hi';
import Heading from "./heading"

const Converter = () => {
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("btcb");
  const [to, setTo] = useState("usd");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
      .then((res) => {
        setInfo(res.data[from]);
      })
  }, [from]);


  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info])


  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }


  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }

  return (
    <section className=" ml-5 mr-5 lg:mr-28 lg:mt-5 lg:ml-28 mt-10">
      <div className="w-auto h-auto border-2 bg-blue-500">
        <div className="w-[25rem] h-[30rem] border-2 bg-white mx-4 my-4 lg:mx-20 lg:my-20 px-10 py-1 lg:py-5">
          <h1 className="text-center text-xl lg:text-2xl text-black font-bold mt-1 lg:mt-10">Currency converter</h1>

          <div className="flex flex-col  lg:ml-0   mt-5 text-sm lg:text-base">
            <div className="">
              <h3 className="">Amount</h3>

              <input type="text" className="border-gray-500 bg-gray-200 my-5" placeholder="Enter the amount" onChange={(e) => setInput(e.target.value)} />

            </div>


            <div className="flex lg:flex-row flex-col justify-around my-1 lg:my-5">
              <div className="">
                <h3 className="text-black">From</h3>
                <Select className="my-2 box"
                  options={options}
                  onChange={(e) => { setFrom(e.value) }}
                  value={from} placeholder="btcb" />
              </div>

              <div className="text-blue-600 my-1 lg:my-8">
                <HiSwitchHorizontal size="30px" onClick={() => { flip() }} />
              </div>

              <div className="my-5 lg:my-0">
                <h3 className="text-black">To</h3>
                <Select className="my-2 box"
                  options={options}
                  onChange={(e) => { setTo(e.value) }}
                  value={to} placeholder="usd" />

              </div>
            </div>

          </div>
          <div className="text-sm lg:text-lg">
            <button className="bg-blue-500 h-12 w-full px-5 text-base  text-center text-white rounded-lg" onClick={() => { convert() }}>Get Exchange Rate</button>
            <h2 className="text-black  my-5 text-base">Converted Amount:</h2>
            <p className="text-blue-500 text-base mb-10">{input + " " + from + " = " + output.toFixed(2) + " " + to}</p>

          </div>

        </div>
      </div>
    </section>


  )
}

export default Converter