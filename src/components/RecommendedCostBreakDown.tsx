const RecommendedCostBreakDown = () => {
  return (
    <div className="mb-4">
      <button
        onClick={() => setShowBreakdown(!showBreakdown)}
        className="w-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-medium py-3 rounded-xl transition flex justify-between items-center px-4"
      >
        <span>Cost Breakdown</span>
        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            showBreakdown ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Collapsible Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          showBreakdown ? "max-h-[500px] mt-3" : "max-h-0"
        }`}
      >
        <div className="bg-white rounded-xl p-5 shadow-sm border border-zinc-100">
          {/* Breakdown Items */}
          <div className="space-y-3 text-sm text-zinc-700">
            <div className="flex justify-between">
              <span>Inverter ({inverterDisplay})</span>
              <span>{formatNaira(recommendedInverter.price)}</span>
            </div>

            <div className="flex justify-between">
              <span>
                Battery ({batteryDisplay} - {recommendedBattery.volt}V)
              </span>
              <span>{formatNaira(recommendedBattery.price)}</span>
            </div>

            {/* Optional: Add panels if you later estimate their cost */}
            {/* 
        <div className="flex justify-between">
          <span>Solar Panels</span>
          <span>{formatNaira(panelCost)}</span>
        </div> 
        */}

            <div className="border-t pt-3 flex justify-between font-semibold text-zinc-800">
              <span>Total</span>
              <span>
                {formatNaira(
                  recommendedBattery.price + recommendedInverter.price,
                )}
              </span>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-zinc-500 mt-4 leading-relaxed">
            *Prices are estimates and may vary slightly based on market
            conditions, installation requirements, and product availability. For
            an exact and up-to-date quote, please request a formal quotation via
            WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCostBreakDown;
