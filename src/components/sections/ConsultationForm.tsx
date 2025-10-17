import { useForm } from "react-hook-form";
import { Button } from "../shared/Button";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export const ConsultationForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    reset();
    alert("Thank you! We will contact you soon.");
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-3xl p-8 shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-6 text-center">
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
            className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500
              ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
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
            className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500
              ${errors.phone ? "border-red-500" : "border-gray-300"}`}
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
            className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500
              ${errors.email ? "border-red-500" : "border-gray-300"}`}
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