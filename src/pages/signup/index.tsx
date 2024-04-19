
import { SignupInput } from "@/components/signupinput";
import { Signupdata } from '@/components/signupData';
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter(
  )
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
                }}
              >
                <div
                  style={{
                    width: "384px",
                    gap: "40px",
                    height: "554.31px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                 >
                 <Signupdata/>
                  <div
                    style={{
                      width: "384px",
                      height: "176px",
                    }}
                  >
                    <SignupInput/>
                    
                  </div>
                  <div
                    style={{
                      width: "240px",
                      height: "32px",
                      display: "flex",
                    }}
                   >
                    <div
                      style={{
                        marginTop:'50px',
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "24px",
                        letterSpacing: "0em",
                        textAlign: "left",
                        color:'black'
                      }}
                     >
                      Already have an account
                    </div>
                    <div
                      style={{
                        width: "77px",
                        height: "32px",
                        padding: "0px 12px",
                        borderRadius: "20px",
                        gap: "4px",
                      }}
                     >
                      <div
                        style={{
                          fontFamily: "Roboto",
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "24px",
                          letterSpacing: "0em",
                          textAlign: "left",
                          color:'#0166FF',
                          marginTop:'50px'
                        }}
                        onClick={()=>{router.push('login')}}
                      >Log in</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
  ); 
}
