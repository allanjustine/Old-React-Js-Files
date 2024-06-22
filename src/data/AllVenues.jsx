import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../index.css";
const GetData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    fetch("https://sis.materdeicollege.com/api/venues")
      .then((res) => res.json())
      .then((res) => {
        // destructuring the data response from api
        const { venues } = res;

        setLoading(false);
        setData(venues);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const goSingleVenue = (venue) => {
    navigate(`/api/venues/${venue}`);
  };

  return (
    <>
      <h1 className="text-center m-4">Mater Dei College Venues</h1>

      {loading && (
        <div className="text-center bg-success text-white">
          Loading Venues...
        </div>
      )}
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Building</th>
            <th scope="col">Capacity</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data)?.map((venue, index) => {
            return (
              <tr key={index} className="hover-effect">
                <td>{data[venue].id}</td>
                <td>{data[venue].name}</td>
                <td>{data[venue].building}</td>
                <td className="d-flex justify-content-between  align-items-center">
                  <div>{data[venue].capacity}</div>
                  <FaEdit
                    className="go-to"
                    onClick={() => {
                      goSingleVenue(data[venue].id);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default GetData;
