import { Link } from "react-router-dom"

const EventRegister = () => {
    return (
          <div className="w-full flex justify-center items-center">
                <form action="" className="mx-auto border space-y-4 border-[#9B4DFF] rounded-xl w-2xl px-8 p-6">
                      <div className="border border-[#9B4DFF] flex items-center justify-center rounded-lg h-[160px]">
                            <div className="h-[100px] w-[136px] border border-[#9B4DFF] rounded-lg bg-[#9B4DFF1F] flex items-center justify-center">
                                  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Icon / cloud-download">
                                              <g id="icon">
                                                    <path d="M29.2116 17.1312C28.5379 11.8247 23.9931 7.7085 18.5063 7.7085C14.2574 7.7085 10.5667 10.1921 8.88164 14.1064C5.57014 15.0962 3.0896 18.2227 3.0896 21.5835C3.0896 25.8339 6.54756 29.2918 10.7979 29.2918H12.3396V26.2085H10.7979C8.24802 26.2085 6.17293 24.1334 6.17293 21.5835C6.17293 19.419 8.02139 17.3331 10.2938 16.9338L11.1895 16.7766L11.4855 15.9163C12.5693 12.7544 15.2595 10.7918 18.5063 10.7918C22.7566 10.7918 26.2146 14.2498 26.2146 18.5002V20.0418H27.7563C29.4567 20.0418 30.8396 21.4247 30.8396 23.1252C30.8396 24.8256 29.4567 26.2085 27.7563 26.2085H24.6729V29.2918H27.7563C31.1572 29.2918 33.9229 26.5261 33.9229 23.1252C33.9211 21.7431 33.456 20.4015 32.6019 19.3149C31.7478 18.2283 30.5541 17.4594 29.2116 17.1312Z" fill="#FAFAFA" />
                                                    <path d="M20.0479 21.5835V15.4168H16.9646V21.5835H12.3396L18.5063 29.2918L24.6729 21.5835H20.0479Z" fill="#FAFAFA" />
                                              </g>
                                        </g>
                                  </svg>

                            </div>
                      </div>
                      <div className="h-px w-full border-0 bg-[#9B4DFF]" />
                      <div className="border flex flex-col gap-y-4 border-[#9B4DFF] p-6 rounded-lg">
                            <label htmlFor="" className="space-y-1">
                                  <p>Name of Event</p>
                                  <input type="text" className="border focus:outline-none  border-[#9B4DFF] p-1.5 rounded-lg w-full" />
                            </label>
                            <label htmlFor="" className="space-y-1">
                                  <p>Date of Event</p>
                                  <input type="date" className="border focus:outline-none  border-[#9B4DFF] p-1.5 rounded-lg w-full" />
                            </label>
                            <label htmlFor="" className="space-y-1">
                                  <p>Location</p>
                                  <input type="text" className="border focus:outline-none  border-[#9B4DFF] p-1.5 rounded-lg w-full" />
                            </label>
                            <label htmlFor="" className="space-y-1">
                                  <p>Description</p>
                                  <textarea rows={"4"} minLength={""} className="border field-sizing-fixed focus:outline-none  border-[#9B4DFF] p-1.5 rounded-lg w-full" />
                            </label>
                      </div>
                      <button type="button" className="bg-[#9B4DFF] w-full"><Link to={"/auth/dashboard"}>Create Event<Link /></Link></button>
                </form>
          </div>
    )
}

export default EventRegister
