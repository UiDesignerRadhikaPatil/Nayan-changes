import React, { useState, useEffect } from "react";

function Sum() {
    const [pf, setPF] = useState(0);
    const [pt, setPT] = useState(0);
    const [labourwelfare, setLabourwelfare] = useState(0);
    const [esi, setESI] = useState(0);
    const [totaldeduction, setTotaldeduction] = useState(0);

    // Function to calculate the sum of specified values
    const calculatesum = () => {
        const Sum = parseFloat(pf) + parseFloat(pt) + parseFloat(labourwelfare) + parseFloat(esi);
        return isNaN(Sum) ? 0 : Sum;
    };

    // Update Gross Salary whenever relevant values change
    useEffect(() => {
        const Sum = calculatesum();
        setTotaldeduction(Sum);
    }, [pf, pt, labourwelfare, esi]);

    return (
        <div className="d-flex">
            <div className="col-12 col-sm-4">
                <div className="form-group local-forms">
                    <label> PF </label>
                    <input value={pf} onChange={e => setPF(parseFloat(e.target.value) || 0)} type="text" className="form-control" />
                </div>
            </div>

            <div className="col-12 col-sm-4">
                <div className="form-group local-forms">
                    <label> PT </label>
                    <input value={pt} onChange={e => setPT(parseFloat(e.target.value) || 0)} type="number" className="form-control" />
                </div>
            </div>

            <div className="col-12 col-sm-4">
                <div className="form-group local-forms">
                    <label>Total Deduction </label>
                    <input value={totaldeduction} type="text" className="form-control" readOnly />
                </div>
            </div>
        </div>
    );
}

export default Sum;
