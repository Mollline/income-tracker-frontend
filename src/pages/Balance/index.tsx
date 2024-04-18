/* eslint-disable max-lines */
import { Stepper, Step, StepLabel } from "@material-ui/core";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const steps = ["Currency", "Balance", "Finish"];
  const activeStep = 1;
  const [cash, setCash] = useState<string>('');

  const router = useRouter();

const handleCash = (e: React.ChangeEvent<HTMLInputElement>) => {
  setCash(e.target.value);
}

const balance = () => {
  if (cash.trim() === "") {
    alert("Please fill in the cash field.");
  } else {
    localStorage.setItem("cash", cash);
    router.push("/finish");
  }
};

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center'
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
            height: "325px",
            marginTop: "140px",
            left: "528px",
            gap: "32px",
            display: "flex",
            justifyContent: "center  ",
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="24" fill="#0166FF" />
                <path
                  d="M31 19.1962V18.5C31 15.365 26.2712 13 20 13C13.7288 13 9 15.365 9 18.5V23.5C9 26.1112 12.2812 28.1863 17 28.8075V29.5C17 32.635 21.7288 35 28 35C34.2712 35 39 32.635 39 29.5V24.5C39 21.9125 35.8225 19.835 31 19.1962ZM15 26.3587C12.5512 25.675 11 24.5487 11 23.5V21.7413C12.02 22.4637 13.3863 23.0463 15 23.4375V26.3587ZM25 23.4375C26.6138 23.0463 27.98 22.4637 29 21.7413V23.5C29 24.5487 27.4487 25.675 25 26.3587V23.4375ZM23 32.3587C20.5513 31.675 19 30.5487 19 29.5V28.9788C19.3287 28.9913 19.6613 29 20 29C20.485 29 20.9587 28.9837 21.4237 28.9562C21.9403 29.1412 22.4665 29.2981 23 29.4263V32.3587ZM23 26.7812C22.0068 26.928 21.004 27.0011 20 27C18.996 27.0011 17.9932 26.928 17 26.7812V23.8075C17.9947 23.9371 18.9969 24.0014 20 24C21.0031 24.0014 22.0053 23.9371 23 23.8075V26.7812ZM31 32.7812C29.0106 33.0729 26.9894 33.0729 25 32.7812V29.8C25.9944 29.9337 26.9967 30.0005 28 30C29.0031 30.0014 30.0053 29.9371 31 29.8075V32.7812ZM37 29.5C37 30.5487 35.4487 31.675 33 32.3587V29.4375C34.6138 29.0462 35.98 28.4637 37 27.7412V29.5Z"
                  fill="white"
                />
              </svg>
            </div>
            <div
              style={{
                width: "272px",
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
              Set up your cash balance
            </div>
          </div>
          <div>
            <div style={{ width: '384px', height: '48px' }}>
              <input
                style={{
                  width: "384px",
                  height: "48px",
                  padding: "16px",
                  borderRadius: "8px",
                  backgroundColor: "#F3F4F6",
                  border: '1px solid #D1D5DB'
                }}
                onChange={handleCash}
                value={cash}
                placeholder="cash"
                type="number"
              ></input>
            </div>
            <div
              style={{
                width: "384px",
                height: "48px",
                fontFamily: "Roboto",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "16px",
                color: '#475569',
                margin: "10px 10px"
              }}
            >
              How much cash do you have in your wallet?
            </div>
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
            onClick={balance}
          >
            Confirm
          </div>
        </div>
      </div>
    </div>
  );
}
