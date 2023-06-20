const features = [
    { name: 'XinFin Network', description: 'EXPay integrates with the XinFin Network, a hybrid blockchain platform designed for global trade and finance. ' },
    { name: 'Internet of Things (IoT)', description: 'IoT devices play a vital role in EXPay, providing real-time data regarding the cargo.' },
    { name: 'API Integration', description: 'EXPay integrates with numerous APIs to provide a comprehensive and robust solution' },
    { name: 'Overall', description: 'Ehese technologies and integrations create a powerful platform that is capable of addressing the unique challenges of the cargo transportation industry. ' },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="grid items-center max-w-2xl grid-cols-1 px-4 py-24 mx-auto gap-x-8 gap-y-16 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technology and Platform</h2>
            <p className="mt-4 text-gray-500">
              The XinFin Network, Internet of Things (IoT) devices, and a host of relevant APIs come together to form the backbone of the EXPay platform.
            </p>
  
            <dl className="grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="pt-4 border-t border-gray-200">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="img/escrow1.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="img/escrow2.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="img/escrow3.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="img/escrow4.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="bg-gray-100 rounded-lg"
            />
          </div>
        </div>
      </div>
    )
  }
  