import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="fort.png" alt="" width="384" height="512"/>
  <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="fort.png" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Toyota Fortuner Legender ek luxury aur sporty SUV hai. Ye mainly 2.8 litre diesel engine mein aati hai jo 201 horsepower aur 500Nm torque deti hai. Iska design normal Fortuner se zyada stylish hai aur andar se bohot luxury feel hoti hai. White colour mein ye bohot classy lagti hai.

Fuel average diesel mein city pe lagbhag 10/12 kmpl aur highway pe 12/14 kmpl tak deti hai. Isme LED headlamps, 18 inch alloy wheels, dual tone leather seats, 9 inch touchscreen (Apple CarPlay/Android Auto), JBL speakers aur wireless charger jese features hote hain. Safety ke liye 7 airbags, ABS, hill assist aur 360 camera (new model mein) diye gaye hain.

Ye SUV lambi drive, off-road aur family ke liye best mani jati hai. Price thodi high hai lekin market mein iski demand aur resale value bohot strong hai.

Price:

India mein ex-showroom ₹44.5 lakh se ₹50.1 lakh tak (variant pe depend karta hai).

Pakistan mein lagbhag PKR 1.95 crore (zero meter, ex-factory).
”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        TOYOTA
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        

        Best Car Company in the World
      </div>
    </figcaption>
  </div>
</figure></div>
  )
}

export default page