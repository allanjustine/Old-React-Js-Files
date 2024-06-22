import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const VenueSinglePage = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState({});
  const [schedule, setSchedule] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // destructuring the data response from api
        const {
          venue,
          schedules: [sched],
        } = data;

        setLoading(false);
        setVenue(venue);
        setSchedule(sched);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-item-center">
        <h1 className="text-center m-4">Mater Dei College {venue.building}</h1>
        {loading && (
          <p className="text-white bg-success text-center">
            Loading building and schedule record ....
          </p>
        )}
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Building</th>
              <th scope="col">Capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{venue.id}</td>
              <td>{venue.name}</td>
              <td>{venue.building}</td>
              <td>{venue.capacity}</td>
            </tr>
          </tbody>
        </table>
        <h1 className="text-center m-4">
          {schedule ? "Schedules" : "No Schedule Found"}
        </h1>
        {schedule && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Course No.</th>
                <th scope="col">Description</th>
                <th scope="col">Schedule</th>
                <th scope="col">Size</th>
                <th scope="col">Teacher</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(schedule)?.map((_, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{schedule.id}</td>
                      <td>{schedule.course_no}</td>
                      <td>{schedule.description}</td>
                      <td>{schedule.schedule}</td>
                      <td>{schedule.size}</td>
                      <td>{schedule.teacher}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <Link to="/" className="btn btn-sm btn-primary mt-1">
        back to venues
      </Link>
    </>
  );
};

export default VenueSinglePage;
