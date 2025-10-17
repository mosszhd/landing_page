import { Paragraph } from "../shared/Paragraph";

interface FeatureCardProps {
  points: string[];
}

export const FeatureCard = ({ points }: FeatureCardProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border border-gray-200 rounded-3xl shadow-lg p-8 max-w-md mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:from-blue-100 hover:via-purple-100 hover:to-pink-100">
      <h3 className="text-2xl md:text-3xl font-extrabold text-indigo-700 mb-6 text-center">
        Why Choose ForgeWell Labs
      </h3>
      <ul className="space-y-4">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-4">
            {/* Stylish dot */}
            <span className="flex-shrink-0 mt-2 w-4 h-4 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-md"></span>

            {/* Text */}
            <Paragraph className="text-gray-800 flex-1 leading-snug">
              {point}
            </Paragraph>
          </li>
        ))}
      </ul>
    </div>
  );
};
