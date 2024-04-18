/* eslint-disable max-lines */
import { Stepper, Step, StepLabel } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useRouter } from "next/router";
import axios from "axios";

export default function Home() {
  const steps = ["Currency", "Balance", "Finish"];
  const activeStep = 0;
  const router = useRouter();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null as Country | null);
  console.log(selectedCountry)
  const curr = selectedCountry?.value
  const country = selectedCountry?.label;
  if (curr !== undefined) {
    localStorage.setItem("currency", curr);
  }
  if (country !== undefined) {
    localStorage.setItem("country", country);
  }


  const currency = () => {
    if (selectedCountry !== null) {
      router.push("/Balance");
    } else {
      alert("Please select a country.");
    }
  };

  interface Value {
    cca3: string;
    name: {
      common: string;
    };
  }
  type Country = {
    value: string;
    label: string;
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countriesData = response.data.map((country: Value) => ({
          value: country.cca3,
          label: country.name.common,
        }));
        setCountries(countriesData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
      }}
    >
      <div
        style={{
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "370px",
            height: "136px",
            top: "40px",
            left: "600px",
            gap: "48px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "107.65px",
              height: "40px",
              padding: "6.3px",
              gap: "11.03px",
            }}
          >
            <svg
              width="108"
              height="40"
              viewBox="0 0 108 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.0069 15.3677V6.30078H15.7425V15.3677H6.47803V24.6322H15.7425V33.6991H25.0069V24.6322H34.2714V15.3677H25.0069ZM25.0069 24.4347H15.7425V15.5666H25.0069V24.4347Z"
                fill="#0166FF"
              />
              <path
                d="M54.1946 19.5715H63.041V27.0821C61.2516 28.8211 58.5296 29.7284 55.354 29.7284C49.1792 29.7284 45.2979 26.1748 45.2979 20.4536C45.2979 14.7325 49.1792 11.1536 54.9759 11.1536C58.202 11.1536 60.6467 12.1365 62.3605 13.7243L60.1174 16.2447C58.9077 15.1861 57.0678 14.5056 55.0011 14.5056C51.3971 14.5056 49.0027 16.7991 49.0027 20.4536C49.0027 24.2341 51.4979 26.452 55.48 26.452C57.0678 26.452 58.5044 26.1748 59.689 25.2927V22.6967H54.1946V19.5715Z"
                fill="black"
              />
              <path
                d="M79.052 22.4951C79.052 22.7219 79.052 23.2512 79.0268 23.5284H68.3406C68.7187 25.5699 70.13 26.7292 72.3983 26.7292C74.0114 26.7292 75.4479 26.1244 76.3805 24.965L78.5732 26.8301C77.313 28.5691 75.2967 29.6528 72.1463 29.6528C67.5341 29.6528 64.8121 26.8301 64.8121 22.4447C64.8121 18.0845 67.7609 15.2365 71.9699 15.2365C76.7081 15.2365 79.052 18.2609 79.052 22.4951ZM71.9699 18.1349C70.2056 18.1349 68.7943 19.017 68.3658 21.0081H75.6496C75.4479 19.4959 74.3642 18.1349 71.9699 18.1349Z"
                fill="black"
              />
              <path
                d="M81.3203 29.3756V10.2715H84.7984V29.3756H81.3203Z"
                fill="black"
              />
              <path
                d="M94.011 29.678C89.9785 29.678 87.3573 26.8805 87.3573 22.4699C87.3573 18.0593 90.0037 15.2869 93.8598 15.2869C95.2712 15.2869 96.9598 15.6902 98.0939 16.7991V10.2715H101.522V29.3756H98.1443V28.0398C97.0606 29.3504 95.3468 29.678 94.011 29.678ZM94.7671 26.5528C96.0777 26.5528 97.4387 26.0236 98.1443 24.7382V20.1764C97.4387 19.0422 96.0273 18.4122 94.6915 18.4122C92.4988 18.4122 90.9362 19.8739 90.9362 22.4699C90.9362 25.0154 92.4484 26.5528 94.7671 26.5528Z"
                fill="black"
              />
            </svg>
          </div>
          <div
            style={{
              width: "270px",
              height: "48px",
              gap: "25px",
              display: "flex",
            }}
          >
            <div style={{ width: "100vw" }}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                  <Step key={index}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "384px",
            height: "308px",
            marginTop: "140px",
            left: "528px",
            gap: "32px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "384px",
              height: "96px",
              gap: "16px",
              display: "flex",
              alignItems: "center  ",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#0166FF",
                borderRadius: "50%",
                padding: "8px",
                gap: "8px",
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 16C21 16.9889 20.7068 17.9556 20.1573 18.7779C19.6079 19.6001 18.827 20.241 17.9134 20.6194C16.9998 20.9978 15.9945 21.0969 15.0245 20.9039C14.0546 20.711 13.1637 20.2348 12.4645 19.5355C11.7652 18.8363 11.289 17.9454 11.0961 16.9755C10.9031 16.0055 11.0022 15.0002 11.3806 14.0866C11.759 13.173 12.3999 12.3921 13.2221 11.8427C14.0444 11.2932 15.0111 11 16 11C17.3261 11 18.5979 11.5268 19.5355 12.4645C20.4732 13.4021 21 14.6739 21 16ZM31 8V24C31 24.2652 30.8946 24.5196 30.7071 24.7071C30.5196 24.8946 30.2652 25 30 25H2C1.73478 25 1.48043 24.8946 1.29289 24.7071C1.10536 24.5196 1 24.2652 1 24V8C1 7.73478 1.10536 7.48043 1.29289 7.29289C1.48043 7.10536 1.73478 7 2 7H30C30.2652 7 30.5196 7.10536 30.7071 7.29289C30.8946 7.48043 31 7.73478 31 8ZM29 13.7937C27.8645 13.458 26.8311 12.8435 25.9938 12.0062C25.1565 11.1689 24.542 10.1355 24.2062 9H7.79375C7.45801 10.1355 6.84351 11.1689 6.00623 12.0062C5.16895 12.8435 4.1355 13.458 3 13.7937V18.2062C4.1355 18.542 5.16895 19.1565 6.00623 19.9938C6.84351 20.8311 7.45801 21.8645 7.79375 23H24.2062C24.542 21.8645 25.1565 20.8311 25.9938 19.9938C26.8311 19.1565 27.8645 18.542 29 18.2062V13.7937Z"
                  fill="white"
                />
              </svg>{" "}
            </div>

            <div
              style={{
                width: "225px",
                height: "32px",
                fontFamily: "Roboto",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "32px",
                alignItems: "center  ",
                justifyContent: "center",
                display: "flex",
              }}
            >
              Select base currency
            </div>
          </div>
          <div>
            <Select
              options={countries}
              value={selectedCountry}
              onChange={(selectedOption) => setSelectedCountry(selectedOption)}
              placeholder="Select a country"
            />
            {selectedCountry && (
              <p>
                You selected: {selectedCountry.label} ({selectedCountry.value})
              </p>
            )}
          </div>
          <div
            style={{
              width: "384px",
              height: "32px",
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "16px",
              marginTop: '-20px',
              color: '#475569'
            }}
          >
            Your base currency should be the one you use most often. All
            transactions in other currencies will be calculated based on this
            one.
          </div>
          <div
            style={{
              width: "384px",
              height: "48px",
              padding: "0px 16px",
              borderRadius: "20px",
              gap: "4px",
              backgroundColor: "#0166FF",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontStyle: "60px",
            }}
            onClick={currency}
          >
            Confirm
          </div>
        </div>
      </div>
    </div>
  );
}
