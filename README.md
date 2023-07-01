# udemy-NEXTJS-TESTING

Code to accompany the [Testing Next.js Applications](https://www.udemy.com/course/nextjs-testing/?couponCode=TEST-NEXTJS-GITHUB) Udemy course

## Updating base-convert-venue-app



### Warning fixes:

#### React version in Chakra
console.error
    Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot

Solution: Update Chakra, emotion
"@chakra-ui/react": "^2.7.1",
"@emotion/react": "^11.11.1",
"@emotion/styled": "^11.11.0",

#### console.warn
    Image with src "/splash/heart-hands.jpg" has legacy prop "objectFit". Did you forget to run the codemod?
    Read more: https://nextjs.org/docs/messages/next-image-upgrade-to-13

Solution:
<Image
    alt="Concert goer with hands in the shape of a heart"
    src="/splash/heart-hands.jpg"
    fill
    quality={100}
/>

from

<Image
    alt="Concert goer with hands in the shape of a heart"
    src="/splash/heart-hands.jpg"
    layout="fill"
    objectFit="cover"
    quality={100}
 />


in app dir we use next/navigation regardless client comps or server comps