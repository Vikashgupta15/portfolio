import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const servicID = "service_3tsx8vh";
  const templateID = "template_ns6n084";
  const publicKey = "sq4XpJZCw96ZOovjb";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      from_name: data.name,
      from_email: data.email,
      to_name: "Vikash kumar",
      message: data.message,
    };

    emailjs
      .send(servicID, templateID, userInfo, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        toast.success("Message sent successfully!");
        reset(); // form reset
      })
      .catch((error) => {
        console.error("Error sending email", error);
        toast.error("Failed to send message.");
      });
  };

  return (
    <>
      <Toaster /> {/* Toast notification handler */}
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg border py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                placeholder="Enter your full name"
              />
              {errors.name && <span className="text-red-600 text-sm">This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg border py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                placeholder="Enter your email address"
              />
              {errors.email && <span className="text-red-600 text-sm">This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg border py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                placeholder="Enter your message"
              />
              {errors.message && <span className="text-red-600 text-sm">This field is required</span>}
            </div>

            <button
              type="submit"
              className="bg-black text-white rounded-xl px-4 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
