import React, { useState, useEffect } from 'react'
import { Sitesetting } from './Sitesetting';
import axios from 'axios';
import Swal from 'sweetalert2'

const QuoteForm=()=>{
  const [form , setForm]= useState({
    name: "",
    age:"",
    email: "",
    phone: "",
    message: "",
    quote:""
  })
  const [allFieldErr, setallFieldErr] = useState(null);
  const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
  )
  const phoneno = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  )
  const{apiurl}=Sitesetting

  const handleInput = (event) => {
    const value = event.target.value
    const name = event.target.name

    setForm({ ...form, [name]: value })
    console.log("form", form);
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    if (form.name == "" || form.phone == "" ||form.email == "" ||form.message == ""||form.age=="" ||form.quote=="") {
      setallFieldErr("Please enter all feilds.")
      } else if (!regExp.test(form.email)) {
        setallFieldErr("Invalid email address." )
        console.log("Invalid email address.");
      }else if(form.message.length<=5){
        setallFieldErr("Min. 6 letters required in message box.")
      } else if (!form.phone.match(phoneno)) {
        setallFieldErr("Invalid no" )
        console.log("Invalid no.");
      }
      else {
    const newEntry = { ...form }
    var url= `${apiurl}/api/getaquote`
    const result = await axios.post(url,newEntry);
    const response = await result
    if (response.data.status == true) {

      Swal.fire({

        icon: 'success',
        title: 'Thank You',
        text: 'We have received your message.',
        confirmButtonColor: "green"

      })
    }
    // console.log("resp", err)
    setForm({
        name: "",
        email: "",
        age:"",
        quote:"",
        phone: "",
        message: ""
      })
      setallFieldErr("")
    }
  };
    return(
 <div>
    <section className='py-12'>
        <div className='container m-auto'>
            <div className='sm:w-10/12 w-full m-auto form-head'>
                <h2 className='mb-2'>GET A QUOTE</h2>
                <form>
                <p className='mb-3 text-xl' style={{color:"red"}}>{allFieldErr}</p>
            <div className='grid grid-cols-8 gap-5 items-center mb-5'>
            <div className='col-span-8 sm:col-span-4'>
                <div className=' text-center'>
                <input
      type="text"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="name"
      name="name"
      value={form.name}
      onChange={handleInput}
      placeholder="Name"
    />
                </div>
            </div>
            <div className='col-span-8 sm:col-span-4'>
                <div className=' text-center'>
                <input
      type="text"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="age"
      name="age"
      value={form.age}
      onChange={handleInput}
      placeholder="Age"
    />
                </div>
            </div>
            <div className='col-span-8 sm:col-span-4'>
                <div className=' text-center'>
                <input
      type="email"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="email"
      name="email"
      value={form.email}
      onChange={handleInput}
      placeholder="Email"
    />
                </div>
            </div>
            <div className='col-span-8 sm:col-span-4'>
                <div className=' text-center'>
                <input
      type="tel"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="phone"
      name="phone"
      value={form.phone}
      onChange={handleInput}
      placeholder="Phone Number"
    />
                </div>
            </div>

            <div className='col-span-8 sm:col-span-4'>
                <div className=' text-center'>
                <select class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      name="quote"
      onChange={handleInput}
      aria-label="Default select example">
        <option value="---- Quote for? ----">---- Quote for? ----</option>
            												<option value="Life Insurance">Life Insurance</option>
            												<option value="Term Life Insurance">Term Life Insurance</option>
            												<option value="Whole Life Insurance">Whole Life Insurance</option>
            												<option value="Universal Life Insurance">Universal Life Insurance</option>
            												<option value="Disability Insurance">Disability Insurance</option>
            												<option value="Non-Medical Life Insurance">Non-Medical Life Insurance</option>
            												<option value="Accident Insurance for Newborns">Accident Insurance for Newborns</option>
            												<option value="Income Replacement Insurance">Income Replacement Insurance</option>
            												<option value="Funeral Insurance">Funeral Insurance</option>
            												<option value="Mortgage Life Insurance">Mortgage Life Insurance</option>
            												<option value="High Risk Life Insurance">High Risk Life Insurance</option>
            												<option value="Health Insurance">Health Insurance</option>
            												<option value="Personal Health Insurance">Personal Health Insurance</option>
            												<option value="Disability Life Insurance">Disability Life Insurance</option>
            												<option value="Critical Illness Insurance">Critical Illness Insurance</option>
            												<option value="Drug And Dental Insurance">Drug And Dental Insurance</option>
            												<option value="Long Term Care Insurance">Long Term Care Insurance</option>
            												<option value="Travel Insurance">Travel Insurance</option>
            												<option value="Visitor to Canada Emergency Insurance">Visitor to Canada Emergency Insurance</option>
            												<option value="Travel Insurance For Canadians">Travel Insurance For Canadians</option>
            												<option value="International Student Insurance">International Student Insurance</option>
            												<option value="Super Visa Insurance">Super Visa Insurance</option>
            												<option value="Investment Plans">Investment Plans</option>
            												<option value="RESP">RESP</option>
            												<option value="RRSP">RRSP</option>
            												<option value="TFSA">TFSA</option>
            												<option value="Money Savers">Money Savers</option>
            												<option value="Estate Planning from CFP">Estate Planning from CFP</option>
    </select>
                </div>
            </div>

            <div className='col-span-8 sm:col-span-4'>
                <div className=' text-center'>
                <input
      type="tel"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="message"
      name="message"
      value={form.message}
      onChange={handleInput}
      placeholder="Message"
    />
                </div>
            </div>
         
            </div>
            <button type="submit" class="
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
      onClick  ={handleSubmit} >Submit</button>
            </form>
            </div>
        </div>
    </section>
 </div>

 )
}
export default QuoteForm;