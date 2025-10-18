import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Button } from "../shared/Button";
import toast, { Toaster } from "react-hot-toast";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export const ConsultationForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const serviceId = "service_xmdx9sg";
    const templateId = "template_1g2oi9g";
    const publicKey = "tcTVK8NOohqYUjEsl";

    // Send email using EmailJS
    emailjs
      .send(serviceId, templateId, {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        message: data.message || "No message provided",
      }, publicKey)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Your request has been submitted successfully!");
          reset();
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("❌ There was an issue sending your request. Please try again.");
        }
      );
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-3xl p-8 shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-6 text-center">
        Book a Consultation
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block mb-1 text-gray-700 font-medium">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("fullName", { required: true })}
            className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.fullName ? "border-red-500" : "border-gray-300"
              }`}
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block mb-1 text-gray-700 font-medium">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            {...register("phone", { required: true })}
            className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? "border-red-500" : "border-gray-300"
              }`}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-gray-700 font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"
              }`}
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Message (optional)</label>
          <textarea
            {...register("message")}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white py-3 rounded-2xl font-semibold hover:scale-105 transition-transform duration-300"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
