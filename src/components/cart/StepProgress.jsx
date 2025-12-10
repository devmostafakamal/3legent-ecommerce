export default function StepProgress({ currentStep = 2 }) {
  const steps = [
    { id: 1, label: "Shopping cart" },
    { id: 2, label: "Checkout details" },
    { id: 3, label: "Order complete" },
  ];

  return (
    <div className="flex items-center justify-center gap-12 py-8">
      {steps.map((step) => {
        const isCompleted = currentStep > step.id;
        const isCurrent = currentStep === step.id;

        return (
          <div key={step.id} className="flex flex-col items-center">
            {/* Circle */}
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full 
                border text-sm font-medium
                ${
                  isCompleted
                    ? "bg-green-500 border-green-500 text-white"
                    : isCurrent
                    ? "bg-black text-white border-black"
                    : "bg-gray-200 text-gray-600 border-gray-300"
                }
              `}
            >
              {isCompleted ? "✓" : step.id}
            </div>

            {/* Label */}
            <span
              className={`mt-2 text-sm font-medium 
                ${
                  isCompleted
                    ? "text-green-600"
                    : isCurrent
                    ? "text-black"
                    : "text-gray-400"
                }
              `}
            >
              {step.label}
            </span>

            {/* Bottom bar */}
            <div
              className={`w-20 h-[2px] mt-2 
                ${
                  isCompleted
                    ? "bg-green-500"
                    : isCurrent
                    ? "bg-black"
                    : "bg-transparent"
                }
              `}
            />
          </div>
        );
      })}
    </div>
  );
}
