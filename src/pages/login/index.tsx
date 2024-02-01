import { Data } from "@/components/loginData";
import { useRouter } from "next/router";
import { LoginInput } from "@/components/loginInput";

export default function Home() {
    const router = useRouter();

    return (
        <div
            style={{
                backgroundColor: "blue",
                height: "100vh",
                width: "100vw",
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    height: "100vh",
                    width: "50vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
             >
                <div
                    style={{
                        width: "384px",
                        gap: "40px",
                        height: "426.31px",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                 >
                    <Data />
                    <LoginInput/>
                 </div>
                 <div
                    style={{
                        width: "220px",
                        height: "32px",
                        display: "flex",
                        marginTop:'-40px'
                    }}
                 >
                    <div
                        style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            lineHeight: "24px",
                            letterSpacing: "0em",
                            textAlign: "left",
                        }}
                    >
                        Dont have an account
                    </div>
                    <div
                        style={{
                            width: "77px",
                            height: "32px",
                            padding: "0px 12px",
                            borderRadius: "20px",
                            gap: "4px",
                        }}
                    >      <div
                        style={{
                            fontFamily: "Roboto",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                            letterSpacing: "0em",
                            textAlign: "left",
                            color: '#0166FF'
                        }}
                        onClick={() => { router.push('signup') }}
                    >
                            Sign up
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
