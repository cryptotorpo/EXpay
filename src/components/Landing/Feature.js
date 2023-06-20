import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Logistics and Transportation Companies',
    description:
      'We are seeking to partner with major logistics and cargo transportation companies. ',
    icon: CheckIcon,
  },
  {
    name: 'FinTech and Blockchain Companies',
    description:
      'We are open to collaborations with other fintech and blockchain companies.',
      icon: CheckIcon,
  },
  {
    name: 'IoT Device Manufacturers',
    description:
      'As IoT devices play a critical role in our platform, we are interested in partnering with IoT device manufacturers. ',
      icon: CheckIcon,
  },
  {
    name: 'API Providers',
    description:
      'We are continually looking to integrate with other APIs to enhance our platform\'s capabilities.',
      icon: CheckIcon,
  },
  {
    name: 'Financial Institutions',
    description:
      'By partnering with banks and other financial institutions, we can make the payment process even more seamless for our users. ',
      icon: CheckIcon,
  },
  {
    name: 'Government and Regulatory Bodies',
      description:
      'We believe in working closely with government and regulatory bodies to ensure that our platform is fully compliant with all relevant laws and regulations. ',
      icon: CheckIcon,
  },
]

export default function Example() {
  return (
    <div className="py-24 overflow-hidden bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Build faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Partnership and Collaboration</p>
              <dl className="max-w-xl mt-10 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute w-5 h-5 text-indigo-600 left-1 top-1" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className='flex items-center justify-right'>
            <img
              src="img/collaboration.jpg"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
