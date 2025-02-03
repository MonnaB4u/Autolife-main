"use client"
import React from 'react'

function Services() {
  return (
    <div className="mx-auto py-14 px-4 sm:px-6 md:px-20 lg:px-32 min-h-96 mb-4 w-full overflow-hidden relative bg-gradient-to-b from-gray-300 via-gray-40 to-white">

      <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800 text-center mb-12">
        Services Provided
      </h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">


        <div className="group serviceCard flex flex-col border border-blue-600 sm:border-gray-200 p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
          <div className=" group-hover:bg-slate-700 serviceCardicon h-12 w-12 flex items-center justify-center border-2 border-gray-600 rounded-full mb-6  shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 800"
              width="100"
              height="30"
              className="object-center group-hover:fill-white transition"
            >
              <path d="M626,486.89c-2.93,8.59-9,11.43-17.9,11.31-25.89-.33-51.78-.12-77.67-.12h-6.67v112.1c0,13.45-4.5,18-17.83,18H165.37c-13.63,0-17.74-4.14-17.74-17.92V162.13c0-13.68,4.13-17.82,17.77-17.82q221.34,0,442.67-.12c8.83,0,15,2.68,17.93,11.27ZM599.22,170.94H174.17V601.6H497.45v-111c0-14.72,4.05-18.82,18.59-18.82h83.18Z"></path>
              <path d="M614.05,71.78c6.11,3.34,8.08,8.55,7.73,15.34-.39,7.59-.06,15.2-.1,22.81,0,8.26-3.83,13-10.4,13.24s-10.55-4.09-11.31-12.45c0-.54-.14-1.07-.26-2H172.08c-.4,2.22-.65,4.36-1.18,6.41a10.18,10.18,0,0,1-10.72,8.06c-5.12-.21-9.73-3.79-9.92-9-.4-11-.69-22.11.22-33.07.27-3.27,4.67-6.21,7.18-9.3h5.43c6.65,2.58,8.8,8,8.63,14.72H599.35c2.09-10.65,2.35-11.06,9.26-14.72Z"></path>
              <path d="M608.61,71.78c-6.91,3.66-7.17,4.07-9.26,14.72H171.72c.17-6.72-2-12.14-8.63-14.72Z"></path>
              <path d="M89.67,168.73c-2.43-.44-4.59-.66-6.67-1.23A10.76,10.76,0,0,1,75.18,157c.21-4.92,4-9.85,9-10q16.55-.61,33.11-.05c5.2.16,8.86,4.71,9.14,9.82a10.25,10.25,0,0,1-7.93,10.82c-2.06.54-4.21.78-6.61,1.22V604c1.61.1,3,.12,4.4.29,6.23.77,10.16,4.94,10.17,10.7s-4.13,10.45-10.67,10.76c-8.13.38-16.29.14-24.44.14a45.65,45.65,0,0,1-6-.16c-6-.81-10.26-5.34-10.23-10.78s4.24-9.89,10.34-10.66c1.25-.16,2.51-.19,4.15-.3Z"></path>
              <path d="M395.08,449.6v-6.44q0-32.06,0-64.1c0-3.44,0-6.89-.3-10.31-.45-5.92-.13-12.57-6.58-15.6-6.86-3.22-13.56-1-19.48,2.94a39.79,39.79,0,0,0-8.78,8,13.43,13.43,0,0,0-2.92,7.63c-.21,23.72-.12,47.44-.12,71.16v6.77H329.35v-5.72c0-22.63,0-45.26,0-67.9a77.25,77.25,0,0,0-.79-11.88c-1.73-10.9-8.39-15.59-18.45-11.24-6.68,2.9-12.21,8.62-17.91,13.47-1.11.94-.88,3.7-.89,5.63,0,25.7,0,51.4,0,77.57H263.77V330.69H291c.14,2.33.27,4.58.46,7.73,9.68-7.77,20-11.47,32-10.49s21.48,5.85,27.11,15.27c7.43-4.55,14.06-10.34,21.77-13,21.14-7.27,47.4.86,49.24,31.65,1.73,29,.37,58.22.37,87.74Z"></path>
              <path d="M415.43,310.57c-1.45-11.66,4.54-19.43,12-26.4,6.34-5.92,13.1-11.4,19.25-17.52a20.76,20.76,0,0,0,4.83-8.8c1.57-5.54-.76-9.47-5.43-10.68-5.43-1.4-10.15,1.32-11.63,6.78-.46,1.74-.71,3.53-1.13,5.61H416.91c-.23-27.39,25.76-31.79,40.46-24.27,12.9,6.61,15.68,25.29,5.69,37.13-6.63,7.85-13.55,15.45-19.55,22.27H469v15.88Z"></path>
            </svg>
          </div>

          <h1 className="text-lg font-semibold text-gray-800 mb-4">
            Customised Floor Plan Design
          </h1>
          <p className="text-sm text-gray-600">
            We design the dashboard to look like the exact layout of your home. Check out all your home automation devices from single dashboard
          </p>
        </div>



        <div className="group serviceCard flex flex-col border border-blue-600 sm:border-gray-200 p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
          <div className=" group-hover:bg-slate-700 serviceCardicon h-12 w-12 flex items-center justify-center border-2 border-gray-600 rounded-full mb-6  shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 800"
              width="100"
              height="30"
              className="object-center group-hover:fill-white transition"
            >
              <path d="M636.1,120.82V595.18c-.4,1.39-.83,2.77-1.19,4.17-4.44,17.36-14.93,29.37-31.72,35.73-3.21,1.22-6.61,2-9.92,2.92H116.73c-1.39-.4-2.76-.85-4.16-1.21-18-4.61-30.17-15.67-36.31-33.24-1-2.73-1.58-5.58-2.36-8.37V120.82c.43-1.56.88-3.12,1.28-4.69,3.57-13.77,11.23-24.64,23.73-31.44,5.52-3,11.85-4.51,17.82-6.69H593.27a31.64,31.64,0,0,0,3.08,1c16.94,3.69,28.86,13.57,35.81,29.35C633.9,112.32,634.81,116.66,636.1,120.82ZM603.16,243.09H106.84V584.26c0,15,5.79,20.8,20.92,20.8H582.24c15.11,0,20.92-5.77,20.92-20.8V243.09Zm0-33.51c0-27.07,0-53.57,0-80.08,0-12-6.61-18.55-18.74-18.55q-229.42,0-458.84,0c-12.13,0-18.7,6.52-18.72,18.57q0,37.59,0,75.19c0,1.58.19,3.16.31,4.87Z"></path>
              <path d="M306.3,555.62c-12.81-.13-20.32-12-15.54-23.52,5.86-14.17,12-28.21,18.08-42.32q39.69-92.65,79.39-185.32c3.85-9,10.61-13.36,18.58-12.17,10.82,1.61,16.87,12.68,12.43,23.37-7.09,17-14.45,33.94-21.72,50.89Q359.77,454.68,322,542.81C318.81,550.38,314,555.28,306.3,555.62Z"></path>
              <path d="M200.31,423.89c5.82,4.69,11.05,8.91,16.3,13.11q24.62,19.69,49.23,39.41c5.42,4.36,7.89,10,6.3,17-1.54,6.69-5.87,11.54-12.55,12.13-4.5.4-10.3-.6-13.73-3.27-27.7-21.54-55.05-43.54-82.33-65.62-8.57-6.93-8.43-18.72.2-25.69q40.76-32.9,81.78-65.44c7.78-6.18,17.75-5,23.5,2.23s4.61,17.34-3.38,23.79c-19.78,16-39.67,31.77-59.51,47.64C204.42,420.52,202.73,421.91,200.31,423.89Z"></path>
              <path d="M509.71,423.84,471.6,393.29c-9-7.2-18-14.34-27-21.6-8.26-6.69-9.64-16.63-3.49-24.15,6-7.31,15.82-8.07,24-1.58q40.13,31.95,80.11,64.05c10.11,8.13,10,19.69-.18,27.89q-39.78,31.94-79.68,63.7c-8.43,6.72-18.4,6-24.38-1.57s-4.54-17.4,3.82-24.11q29.71-23.88,59.51-47.65C505.89,427,507.42,425.73,509.71,423.84Z"></path>
              <path d="M503.23,143.88c15.9,0,31.8,0,47.69,0,10.68,0,18.1,6.74,18.17,16.32s-7.33,16.58-17.9,16.6q-48,.06-95.92,0c-10.54,0-18-7-17.9-16.6s7.52-16.29,18.18-16.32C471.44,143.85,487.34,143.88,503.23,143.88Z"></path>
              <path d="M173.8,160.44a16.45,16.45,0,1,1-16.22-16.54A16.62,16.62,0,0,1,173.8,160.44Z"></path>
              <path d="M239.68,160.55a16.45,16.45,0,1,1-16.11-16.65A16.64,16.64,0,0,1,239.68,160.55Z"></path>
              <path d="M305.57,160.42a16.45,16.45,0,1,1-16.25-16.52A16.64,16.64,0,0,1,305.57,160.42Z"></path>

            </svg>
          </div>

          <h1 className="text-lg font-semibold text-gray-800 mb-4">
            Multi-app/ Multi-device Integration
          </h1>
          <p className="text-sm text-gray-600">
            We can integrate and combine all your favourite home automation apps and allow control of them simultaneously on one app/ platform
          </p>
        </div>


        <div className="group flex flex-col border border-blue-600 sm:border-gray-200 p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
          {/* First Div */}
          <div className="h-12 w-12 flex items-center justify-center border-2 border-gray-600 rounded-full mb-6 shadow-lg group-hover:bg-black transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 800"
              width="100"
              height="30"
              className="object-center group-hover:fill-white transition"
            >
              <path d="M640.66,259.82c-1.17,4-2.24,8.1-3.52,12.1-9.65,30-36.19,50.42-68.26,51-37.09.64-74.21.76-111.29,0-40.12-.84-71-32-71.71-72.14q-1-55.31,0-110.65c.79-40.91,32.88-71.72,74-72,35.3-.2,70.6-.14,105.9,0,37.76.13,66.45,24,73.77,61.11a10,10,0,0,0,1.13,2.33ZM513.44,111.3c-17.32,0-34.64,0-52,0-19.87.06-32.52,12.59-32.57,32.42q-.12,52,0,103.94c.05,19.42,12.73,32.16,32.12,32.22q52.29.15,104.59,0c19.1-.06,31.76-12.76,31.81-31.77q.12-52.64,0-105.29c0-18.6-12.82-31.39-31.36-31.49C548.52,111.22,531,111.3,513.44,111.3Z"></path>
              <path d="M449,640.6c-6.55-2.14-13.41-3.6-19.58-6.52-27.5-13-42.66-35-43.41-65.33-.92-37.1-.83-74.25-.05-111.36.83-39.86,31.72-70.76,71.58-71.59,37.1-.77,74.23-.7,111.34,0,35.61.66,63.69,25.23,70.56,60.12a15.53,15.53,0,0,0,1.25,3V577.14c-.47,1.43-1,2.85-1.38,4.31-6.43,27.76-23,46.43-50,55.72-3.95,1.36-8,2.3-12.09,3.43ZM597.46,513.31c0-17.32,0-34.64,0-52-.06-19.94-12.5-32.51-32.4-32.55q-51.62-.12-103.23,0c-20.34,0-32.87,12.52-32.91,32.8q-.09,51.63,0,103.26c0,19.9,12.65,32.5,32.47,32.53q52,.07,103.91,0c19.46,0,32.08-12.65,32.15-32.09C597.51,548,597.46,530.64,597.46,513.31Z"></path>
              <path d="M131.74,640.6c-9-3.32-18.62-5.45-26.76-10.18-23.79-13.82-36.2-35.2-36.56-62.72-.46-36.21-.33-72.42-.06-108.63C68.65,419,98.94,387,139,385.9q56.61-1.53,113.3,0c39.28,1,69.73,31.55,70.71,70.93.93,37.53.85,75.12,0,112.66-.8,35.31-25.43,63-60,69.88a15.17,15.17,0,0,0-3,1.25Zm63.44-43.21c17.32,0,34.65,0,52,0C267.5,597.34,280,585,280,564.63q.1-51.64,0-103.28c-.05-20-12.5-32.51-32.43-32.55q-52-.12-103.93,0c-19.51.05-32.14,12.69-32.17,32.09q-.09,52.32,0,104.63c0,19.05,12.72,31.76,31.71,31.85C160.54,597.46,177.86,597.39,195.18,597.39Z"></path>
              <path d="M68.3,195.21c0-17.32-.07-34.64,0-52,.19-43.18,31.84-75,74.95-75.14q52.62-.19,105.24,0c42.41.18,74.26,31.64,74.68,74.1q.52,53.29,0,106.61c-.4,42.12-31.93,73.77-74,74.21q-53.3.54-106.59,0c-42.69-.37-74.11-32.38-74.3-75.2C68.23,230.3,68.3,212.76,68.3,195.21Zm43.2.25c0,17.78-.1,35.56,0,53.33s12.7,30.91,30.48,31q53.64.38,107.3,0c17.87-.11,30.58-12.89,30.69-30.82q.33-53.32,0-106.65c-.1-18.27-13-31-31.17-31q-53-.17-106,0c-18.56.05-31.27,12.88-31.37,31.49C111.42,160.36,111.49,177.91,111.5,195.46Z"></path>
            </svg>
          </div>

          {/* Second Div */}
          <h1 className="text-lg font-semibold text-gray-800 mb-4 transition">
            Product/ App Development
          </h1>
          <p className="text-sm text-gray-600 transition">
            We develop a program just for you, customised to what you need
          </p>
        </div>



        <div className="group serviceCard flex flex-col border border-blue-600 sm:border-gray-200 p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
          <div className=" group-hover:bg-slate-700 serviceCardicon h-12 w-12 flex items-center justify-center border-2 border-gray-600 rounded-full mb-6  shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 800"
              width="100"
              height="30"
              className="object-center group-hover:fill-white transition"
            >
              <path d="M59,351.11c4.62-10,12.58-13,23.33-12.9q77.25.54,154.51,0a87.79,87.79,0,0,0,25.47-3.59c26.26-8.22,52.15-17.6,78.34-26.07,21.69-7,35.63-22.07,45.53-41.74,13.34-26.49,21.32-54.42,22.52-84.18.46-11.32,7.83-18.06,19.09-17.89,48.74.7,86.6,46,78.78,94-4.15,25.5-9,50.81-17.58,75.28a37.9,37.9,0,0,0-.91,4.31c20.37,0,40.41-.19,60.45.08,9.79.13,20-.47,29.27,2,36.8,9.81,50.66,50.23,28.49,81.31-1.65,2.32-2.32,3.95-.3,6.51,22.06,28,9.51,69.68-24.83,81.11a18,18,0,0,0-2,.94c10,30.72-5.1,59.45-35.11,69.79,4,11.32,4.85,22.9.92,34.41-6.75,19.73-20.47,31.61-41,35.56a20.56,20.56,0,0,0-2.67.92H386.68a8.54,8.54,0,0,0-1.92-1.08Q327.13,635.44,269.5,621c-3.11-.78-4.48.1-6.43,2.71-4.57,6.08-9.14,12.67-15.19,17-6.5,4.66-14.69,7-22.14,10.31H141.21C125,644.19,129,629.54,128.38,616.26c-15.66,0-30.86-.44-46,.15-10.78.43-18.72-2.85-23.35-12.88Zm210.94,18.44c0,.54-.19,1.49-.19,2.44q0,104.47-.1,209c0,3.8,1.47,4.77,4.79,5.58,30.49,7.49,60.92,15.25,91.4,22.78,10.26,2.53,20.58,6.36,31,6.64,32.2.86,64.43.34,96.66.3,11.64,0,19.55-7.29,19.4-17.6-.15-10.09-7.93-17-19.31-17.11-10.81-.07-21.62.07-32.42-.06-7.68-.09-13.33-3.75-16.32-10.83-4.9-11.58,3.61-23.71,16.84-23.81,22.38-.17,44.76-.08,67.14,0,7.89,0,13.92-3.14,17.25-10.36,5.39-11.64-3.15-24.23-16.62-24.33-22.38-.18-44.77-.09-67.15,0-7.12,0-12.82-2.59-16.45-8.84-6.84-11.78,1.61-25.75,15.84-25.86,23.16-.18,46.31-.05,69.47-.06,11.38,0,22.77.19,34.15-.09a17.2,17.2,0,0,0,17.05-17c.17-9.47-7.18-17.09-17-17.63-1.73-.09-3.47,0-5.21,0-32.41,0-64.83-.05-97.25,0-7.32,0-13.26-2.38-17-8.85C439,422,447.42,408,461.66,407.9c23.15-.19,46.31,0,69.46-.06,11.38,0,22.77.17,34.15-.09a17.26,17.26,0,0,0,3.44-34.13,35.79,35.79,0,0,0-7.48-.5c-32.6,0-65.21,0-97.82,0-16.3,0-23.86-12.11-17.29-27.09,4.09-9.34,8.33-18.67,11.56-28.32,7.85-23.46,13.47-47.51,14.69-72.27.91-18.55-13.36-38-30-42.36a28.49,28.49,0,0,0-1.06,3.79,235.41,235.41,0,0,1-20,67.32c-9.36,19.87-20.11,39.33-39,51.42-13.32,8.52-28.27,14.87-43.13,20.49C316.44,354.63,293.23,361.72,269.94,369.55Zm-106.31,3.84V616.26h49.56c15.61,0,21.81-6.14,21.81-21.61V373.39Zm-69.5,0V581.06h34.05V373.38Z"></path> <path d="M460.77,94.23c0,6,.13,12,0,17.94-.28,10.3-7.81,17.84-17.51,17.73-9.48-.1-16.94-7.51-17.12-17.51q-.31-18.23,0-36.46c.16-10.3,7.79-17.83,17.49-17.73,9.48.11,16.84,7.52,17.14,17.51C460.92,81.88,460.77,88.06,460.77,94.23Z"></path> <path d="M330.44,175.74c-2-1.05-6.5-2.32-9.56-5.13-8.67-7.94-17-16.31-25-24.88-6.74-7.2-6.44-17.34.08-24,6.66-6.83,17.05-7.2,24.43-.26,8.56,8.06,16.83,16.44,24.95,25,5.3,5.55,6.33,12.28,3.14,19.28C345.47,172.27,340,175.36,330.44,175.74Z"></path> <path d="M556,175.69c-8.9-.27-14.27-3.27-17.38-9.51s-3.11-12.84,1.55-17.94c9-9.79,18.33-19.3,28.19-28.19,6.48-5.84,16.57-4.5,22.58,1.68,5.85,6,7.09,15.85,1.41,22.16-8.89,9.86-18.48,19.12-28.19,28.19C561.68,174.38,557.65,175,556,175.69Z"></path> <path d="M269.84,251.55c5.79,0,11.58-.17,17.36,0,9.93.36,17.29,7.92,17.23,17.41S297,286,287,286.19c-11.57.22-23.15.24-34.72,0A17.23,17.23,0,0,1,235,268.79c.06-9.48,7.47-16.89,17.44-17.21C258.26,251.4,264.05,251.55,269.84,251.55Z"></path> <path d="M617.58,251.55c5.6,0,11.2-.15,16.79,0,10,.33,17.37,7.74,17.43,17.21a17.23,17.23,0,0,1-17.23,17.39c-11.57.25-23.16.23-34.73,0-10-.19-17.37-7.72-17.43-17.19s7.32-17.06,17.23-17.41C605.62,251.38,611.6,251.55,617.58,251.55Z"></path>
            </svg>
          </div>

          <h1 className="text-lg font-semibold text-gray-800 mb-4">
            Product/ App Recommendations
          </h1>
          <p className="text-sm text-gray-600">
            Our highly experienced team recommends the best apps and products for your lifestyle
          </p>
        </div>


        <div className="group serviceCard flex flex-col border border-blue-600 sm:border-gray-200 p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
          <div className=" group-hover:bg-slate-700 serviceCardicon h-12 w-12 flex items-center justify-center border-2 border-gray-600 rounded-full mb-6  shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 800"
              width="100"
              height="30"
              className="object-center group-hover:fill-white transition"
            >
              <path d="M558,48.6c11.33,4,15.11,12.16,14.85,23.91-.55,24.94-.13,49.9-.18,74.85,0,14-6.81,20.81-20.78,20.84-26.14.07-52.29.13-78.43,0-14.39-.09-23.38-11.7-18.71-24,2.81-7.38,8.4-11.41,16.34-11.59,8.91-.19,17.83-.06,26.74-.06,1.9,0,3.81,0,7.39,0-2.64-2.1-3.85-3.23-5.22-4.12-51-33.14-106.92-48.8-167.51-43.07-106,10-182.6,64-226,160.89-35.43,79-30,158.28,10.12,235.08,2.08,4,4.4,8.14,5.13,12.47a17,17,0,0,1-11.73,19c-8,2.62-16.91-.21-20.93-8.07C81.44,489.85,73.42,475,67.56,459.27A303.89,303.89,0,0,1,233.5,72.63a295,295,0,0,1,94.7-23,42.13,42.13,0,0,0,5.17-1h36.85a46.57,46.57,0,0,0,5.2,1,298.4,298.4,0,0,1,146.34,50.62c4.84,3.24,9.59,6.63,15.27,10.57,0-13.57.42-26-.12-38.43-.51-11.78,3.73-19.88,15.15-23.72Z"></path> <path d="M656.65,371.82c-1.55,11.34-2.86,22.73-4.7,34-19.27,118.75-115.75,219.63-233.84,244-89.27,18.41-171.29,1.38-245.55-51.83-1.23-.88-2.49-1.72-4.45-3.07-.15,2.74-.34,4.62-.35,6.5,0,12.07.14,24.16-.07,36.23-.19,11.15-7.81,19.05-17.86,19s-17.64-7.89-17.69-19.09q-.18-40.7,0-81.38c.06-11.41,7.11-18.65,18.59-18.75q41-.33,82,0c11,.1,18.87,8.34,18.52,18.32s-8,17-19,17.19c-10.26.12-20.52,0-31.43,1.17,1.42,1.05,2.79,2.18,4.27,3.14,50.85,33,106.49,47.68,167,43.1,69.58-5.27,128.41-33.66,176.16-84.28C588,494,611.53,443.81,618.74,386.21c7.37-58.89-3.93-114.15-32.8-165.88-3.9-7-4.7-13.89-.14-20.69,4.13-6.17,10.22-8.48,17.55-7.41A17,17,0,0,1,616,201.07a303.12,303.12,0,0,1,38.28,114.55c.75,6.06,1.56,12.12,2.34,18.18Z"></path> <path d="M351.83,513.23c-11.29,0-22.58.07-33.86,0-11.56-.09-18.9-7.42-19.05-18.92-.07-5.74-.24-11.5.07-17.22.2-3.65-.87-5.71-4.32-7.25-4.5-2-9.09-4.23-12.85-7.32-4.52-3.72-8.09-3.14-12.49-.12a123.75,123.75,0,0,1-13.86,8c-9.39,4.78-18.82,2.4-24.18-6.66q-18.12-30.63-35.59-61.66c-5.13-9.14-2.34-18.61,6.48-24.23,6.47-4.12,15.55-6.57,19-12.4,3.28-5.6,1-14.61.65-22.09a8.6,8.6,0,0,0-3.24-5.88c-5.05-3.44-10.59-6.15-15.81-9.38-9.51-5.88-12.29-15.38-6.82-25q17.24-30.46,35-60.61c5.82-9.87,15.35-12.24,25.52-6.73,6.25,3.39,12.31,9.69,18.57,9.82,6.08.13,12.12-6.32,18.5-9.16,4.29-1.92,5.82-4.32,5.46-9a162,162,0,0,1-.06-17.21c.29-10.1,7.66-17.69,17.76-17.76q35.64-.25,71.28,0c10.13.07,17.52,7.58,17.83,17.68.2,6.33.19,12.68,0,19-.1,3.13.68,4.91,3.79,6.33A70.71,70.71,0,0,1,424,243.73c3.91,3.08,6.74,2.51,10.43.08,4.62-3.05,9.49-5.71,14.38-8.32,9.59-5.12,19.23-2.88,24.71,6.37q18.13,30.64,35.58,61.67c5.15,9.16,2.39,18.59-6.44,24.25-6.47,4.14-15.56,6.56-19,12.38-3.29,5.6-1,14.61-.67,22.09a8.57,8.57,0,0,0,3.23,5.86c5.05,3.45,10.6,6.17,15.81,9.39,9.52,5.91,12.31,15.35,6.84,25q-17.36,30.73-35.33,61.13c-5.47,9.26-15.12,11.59-24.68,6.49-5.75-3.07-11.24-6.65-17.06-9.59a7.06,7.06,0,0,0-5.64.17,189.55,189.55,0,0,0-16.9,9.82,7.84,7.84,0,0,0-3.22,5.26c-.4,6.31-.06,12.66-.19,19-.21,10.81-7.57,18.25-18.37,18.38C375.59,513.34,363.71,513.23,351.83,513.23ZM253.22,275l-17.76,30.81c5.27,3.07,9.9,5.69,14.46,8.45,7.76,4.71,9.94,11.23,9.37,20.09a282.13,282.13,0,0,0-.06,36.55c.6,9.26-1.47,15.68-9.52,20.57-4.54,2.76-9.18,5.38-14.25,8.34l17.76,30.77c5-2.88,9.61-5.57,14.25-8.14,8.41-4.68,15.16-4.27,22.46,1.9a104.63,104.63,0,0,0,31.63,18.38c9.19,3.4,12.91,9,13,19,.05,5.1,0,10.19,0,15.46h35.66c0-5.48,0-10.59,0-15.71.09-9.82,4.27-14.66,13.13-19.06a278.27,278.27,0,0,0,31.1-18.05c8.18-5.49,14.27-6.66,23.06-1.81,4.62,2.55,9.2,5.18,14.1,7.94,6-10.5,11.81-20.51,17.73-30.78-5.1-2.94-9.58-5.43-14-8.07-8.39-5-10.48-11.34-9.76-21a236.34,236.34,0,0,0,.06-35.4c-.79-10.33,1.26-16.35,10.4-21.74l13.25-7.8c-6.1-10.53-11.82-20.42-17.75-30.68-5.16,2.95-9.92,5.73-14.73,8.41-7.56,4.21-14.89,3.82-21.5-1.84a105.33,105.33,0,0,0-32.64-19c-8.56-3.14-12.35-9-12.47-18.18-.06-5.3,0-10.59,0-16.08H334.55c0,5.86.1,11.38,0,16.88-.19,8.4-4.16,14.39-12.09,17.26a107,107,0,0,0-33.17,19.23c-6.41,5.45-13.61,5.94-21,1.87C263.45,281,258.7,278.16,253.22,275Z"></path> <path d="M417.74,352.83a65.35,65.35,0,1,1-65.33-65.36A65.54,65.54,0,0,1,417.74,352.83Zm-65.57-29.71a29.69,29.69,0,1,0,29.91,29.61A29.74,29.74,0,0,0,352.17,323.12Z"></path>
            </svg>
          </div>
          <h1 className="text-lg font-semibold text-gray-800 mb-4">
            Problem-based automation solutions
          </h1>
          <p className="text-sm text-gray-600">
            We don’t just install smart lights, we go beyond to use technology to resolve problems in your everyday life
          </p>
        </div>

      </div>

    </div>

  )
}

export default Services
