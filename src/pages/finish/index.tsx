/* eslint-disable max-lines */
import { Stepper, Step, StepLabel } from "@material-ui/core";
import { useRouter } from "next/router";

export default function Home() {
  const steps = ["Currency", "Balance", "Finish"];
  const activeStep = 2;
  const router = useRouter();

  const finish = () => {
    router.push("/income_tracker");
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        alignItems:'center',
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
                  d="M36.7076 17.7076L20.7076 33.7076C20.6147 33.8005 20.5044 33.8743 20.383 33.9246C20.2616 33.975 20.1315 34.0009 20.0001 34.0009C19.8687 34.0009 19.7385 33.975 19.6171 33.9246C19.4957 33.8743 19.3854 33.8005 19.2926 33.7076L12.2926 26.7076C12.1049 26.5199 11.9995 26.2654 11.9995 26.0001C11.9995 25.7347 12.1049 25.4802 12.2926 25.2926C12.4802 25.1049 12.7347 24.9995 13.0001 24.9995C13.2654 24.9995 13.5199 25.1049 13.7076 25.2926L20.0001 31.5863L35.2926 16.2926C35.4802 16.1049 35.7347 15.9995 36.0001 15.9995C36.2654 15.9995 36.5199 16.1049 36.7076 16.2926C36.8952 16.4802 37.0006 16.7347 37.0006 17.0001C37.0006 17.2654 36.8952 17.5199 36.7076 17.7076Z"
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
              Good Job!
            </div>
          </div>
          <div
            style={{
              width: "384px",
              height: "48px",
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#475569",
              textAlign: "center",
            }}
          >
            Your very first account has been created. Now continue to dashboard
            and start tracking
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
            onClick={finish}
          >
            Go to Dashboard
          </div>
        </div>
      </div>
    </div>
  );
}
