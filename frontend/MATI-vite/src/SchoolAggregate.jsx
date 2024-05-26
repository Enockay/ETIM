import React, { useEffect, useState } from 'react';
import "../css/App.css";

const SchoolAggregate = () => {
    const [data, setData] = useState({
        totalMales: 0,
        totalFemales: 0,
        totalStudents: 0,
        forms: {
            form4: { east: 0, west: 0 },
            form3: { east: 0, west: 0 },
            form2: { east: 0, west: 0 },
            form1: { east: 0, west: 0 },
        },
    });

    useEffect(() => {
        // Replace with your actual API endpoint
        fetch('')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="aggregate-container">
            <center><h2 className="h2">The School Aggregate</h2></center>
            <div className="aggregate-details">
                <div className="aggregate-gender">
                    <h3>Total Males: {data.totalMales}</h3>
                    <h3>Total Females: {data.totalFemales}</h3>
                </div>
                <h3>Total Students: {data.totalStudents}</h3>
                <div className="more-d">More On Wide Screen</div>
                <div className="form-d">
                    {Object.keys(data.forms).map(form => (
                        <div key={form} className="form">
                            <h4>{form.toUpperCase()}</h4>
                            <p>East: {data.forms[form].east}</p>
                            <p>West: {data.forms[form].west}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SchoolAggregate;
