import { Link } from "react-router-dom"


const Regsiter = () => {
      return (
            <div className="w-2xl p-6 mx-auto pb-8 bg-white  rounded-lg text-black">
                  <h1 className="text-[#9B4DFF] mb-4 text-center !text-[32px] font-medium">Create Account</h1>
                  <form onSubmit={() => alert("Rest..")} className="mx-auto flex flex-col gap-4 px-3">
                        <label htmlFor="" className="space-y-1">
                              <p>Name</p>
                              <input type="text" className="border focus:outline-none  border-[#9B4DFF] bg-[#F9F9F9] p-1.5 rounded-lg w-full" />
                        </label>
                        <label htmlFor="" className="space-y-1">
                              <p>Email</p>
                              <input type="text" className="border focus:outline-none  border-[#9B4DFF] bg-[#F9F9F9] p-1.5 rounded-lg w-full" />
                        </label>
                        <label htmlFor="" className="space-y-1">
                              <p>Phone</p>
                              <input type="text" className="border focus:outline-none  border-[#9B4DFF] bg-[#F9F9F9] p-1.5 rounded-lg w-full" />
                        </label>
                        <label htmlFor="" className="space-y-1">
                              <p>Password</p>
                              <input type="text" className="border focus:outline-none  border-[#9B4DFF] bg-[#F9F9F9] p-1.5 rounded-lg w-full" />
                        </label>
                        <label htmlFor="" className="space-y-1">
                              <p>Confirm Password</p>
                              <input type="text" className="border focus:outline-none  border-[#9B4DFF] bg-[#F9F9F9] p-1.5 rounded-lg w-full" />
                        </label>
                        <button className="rounded-lg bg-[#9B4DFF] text-white">Sign in</button>
                        <div className="flex gap-4 w-full justify-center items-center"> <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-600/60"></div> <p className="text-sm">or sign in with</p> <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-600/60"></div>
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                              <div>
                                    <img src="/google.svg" alt="" />
                              </div>
                              <p className="text-sm">Already have an account? <span className="cursor-pointer hover:underline"><Link to={"/auth/dashboard"}>Login<Link /></Link></span></p>
                        </div>
                  </form>

            </div>
      )
}

export default Regsiter