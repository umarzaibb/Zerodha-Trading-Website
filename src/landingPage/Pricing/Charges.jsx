import React from 'react';

function Charges() {
    return ( 
        <>
            <h4 className='charges-table-h'>Charges for account opening</h4>
            <table className='ChargesTable-Pricing'>
                <tr>
                    <td><b>Type of account</b></td>
                    <td><b>Charges</b></td>
                </tr>

                <tr>
                    <td>Online account</td>
                    <td><span>Free</span></td>
                </tr>

                <tr>
                    <td>Offline account</td>
                    <td><span>Free</span></td>
                </tr>

                <tr>
                    <td>NRI account &#10088;offline only&#10089;</td>
                    <td>&#8377; 500</td>
                </tr>

                <tr>
                    <td>Partnership, LLP, HUF, or Corporate accounts &#10088;offline only&#10089;</td>
                    <td>&#8377; 500</td>
                </tr>
            </table>
        </>
     );
}

export default Charges;