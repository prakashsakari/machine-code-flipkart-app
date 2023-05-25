

import { Fragment } from "react";
import { vendor_data } from "../../db/vendordb";
import { Navbar } from "../../components/";

import '../VendorPage/vendor.css';

const vendors = vendor_data;

export const Vendor = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="vendor__scroll">
        <div className="vendor__container">
          {vendors.map((vendor) => (
            <div className="vendor__card" key={vendor.id}>
              <div className="vendor__name">{vendor.name}</div>
              <div className="vendor__location">{vendor.location}</div>
              <div className="vendor__contact">{vendor.contact}</div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};