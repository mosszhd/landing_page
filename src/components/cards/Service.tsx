import { Paragraph } from "../shared/Paragraph";

interface ServiceProps {
  step: string;
  headline: string;
  description: string;
  icon: React.ReactNode;
}

export const Service = ({ step, headline, description, icon }: ServiceProps) => {
  return (
    <div
      className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg
                 shadow-box-shadow relative overflow-hidden transition-all duration-300
                 hover:shadow-xl hover:scale-[1.02] hover:ring-2 hover:ring-indigo-200"
    >
      {/* Icon + Step */}
      <div className="flex items-center gap-3 mb-3">
        <div className="rounded-xl bg-body p-3 text-heading-1 w-max flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-indigo-600">{step}</h3>
      </div>

      {/* Headline with smaller size */}
      <h4 className="text-xl md:text-lg font-bold text-gray-900 mb-3">{headline}</h4>

      {/* Description */}
      <div className="mt-2 max-w-prose">
        <Paragraph className="text-xs md:text-sm text-gray-600">{description}</Paragraph>
      </div>
    </div>
  );
};
