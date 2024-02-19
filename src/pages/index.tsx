
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function LoadingPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const isUserLoggedIn = () => {
      const user = localStorage.getItem("email");
      if (!user) [router.push("/login")];
    };
    isUserLoggedIn();
  });
  useEffect(() => {

    const redirectAfterDelay = setTimeout(() => {
      router.push("/currency"); // Redirect to the login page
      setLoading(false); // Set loading to false before redirecting
    }, 2000);

    return () => clearTimeout(redirectAfterDelay);
  }, [router]);

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div style={{ width: "172.2px", height: "184px" }}>
          <div>
            <svg
              width="173"
              height="64"
              viewBox="0 0 173 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.7273 24.5887V10.0815H24.9042V24.5887H10.0811V39.4118H24.9042V53.9189H39.7273V39.4118H54.5505V24.5887H39.7273ZM39.7273 39.0958H24.9042V24.9069H39.7273V39.0958Z"
                fill="#0166FF"
              />
              <path
                d="M86.428 31.3146H100.582V43.3316C97.719 46.114 93.3639 47.5657 88.2829 47.5657C78.4032 47.5657 72.1931 41.8798 72.1931 32.726C72.1931 23.5722 78.4032 17.846 87.678 17.846C92.8397 17.846 96.7512 19.4186 99.4934 21.9591L95.9044 25.9917C93.9688 24.298 91.025 23.2092 87.7184 23.2092C81.9518 23.2092 78.1209 26.8788 78.1209 32.726C78.1209 38.7748 82.1131 42.3234 88.4845 42.3234C91.025 42.3234 93.3236 41.8798 95.2189 40.4685V36.315H86.428V31.3146Z"
                fill="black"
              />
              <path
                d="M126.2 35.9923C126.2 36.3553 126.2 37.2021 126.159 37.6457H109.061C109.666 40.912 111.925 42.767 115.554 42.767C118.135 42.767 120.433 41.7992 121.925 39.9442L125.434 42.9283C123.417 45.7108 120.191 47.4447 115.151 47.4447C107.771 47.4447 103.416 42.9283 103.416 35.9117C103.416 28.9354 108.134 24.3787 114.868 24.3787C122.449 24.3787 126.2 29.2177 126.2 35.9923ZM114.868 29.0161C112.046 29.0161 109.787 30.4275 109.102 33.6132H120.756C120.433 31.1936 118.699 29.0161 114.868 29.0161Z"
                fill="black"
              />
              <path
                d="M129.829 47.0012V16.4346H135.394V47.0012H129.829Z"
                fill="black"
              />
              <path
                d="M150.134 47.4851C143.682 47.4851 139.488 43.009 139.488 35.952C139.488 28.8951 143.722 24.4593 149.892 24.4593C152.15 24.4593 154.852 25.1045 156.667 26.8788V16.4346H162.151V47.0012H156.747V44.8639C155.013 46.9608 152.271 47.4851 150.134 47.4851ZM151.344 42.4847C153.441 42.4847 155.618 41.6379 156.747 39.5813V32.2824C155.618 30.4678 153.36 29.4596 151.223 29.4596C147.715 29.4596 145.214 31.7985 145.214 35.952C145.214 40.0249 147.634 42.4847 151.344 42.4847Z"
                fill="black"
              />
            </svg>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: "40px",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {" "}
              <ClipLoader
                color="#3498db"
                loading={loading}
                size={32}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              Түр хүлээнэ үү...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
